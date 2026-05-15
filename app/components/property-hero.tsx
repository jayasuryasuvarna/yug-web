"use client";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Expand, Video as VideoIcon } from 'lucide-react';
import Image from 'next/image';

interface PropertyImage {
    url: string;
    title?: string;
    description?: string;
}

interface PropertyVideo {
    url: string;
    title?: string;
    contentType?: string;
}

interface PropertyGalleryProps {
    images: PropertyImage[];
    videos?: PropertyVideo[];
    title: string;
}

type Slide =
    | { kind: 'image'; url: string; alt: string; }
    | { kind: 'video'; url: string; label: string; poster?: string; };

const PropertyHero: React.FC<PropertyGalleryProps> = ({ images, videos = [], title }) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [galleryInView, setGalleryInView] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    // True while Embla is mid-swipe / mid-snap animation. Embla fires `select` the moment a
    // gesture begins, long before the slide is visually settled — so we gate playback on
    // `settle` to make sure the user has actually landed on the slide before the video starts.
    const [carouselSettling, setCarouselSettling] = useState(false);
    // Tracks which video indices have actually fired the 'playing' event. Drives the poster-overlay
    // fade so the thumbnail is always visible whenever a video isn't actively playing — works
    // around the native <video poster=""> attribute being one-shot in most browsers.
    const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set());
    // Each video's own captured first-frame, keyed by slide index. Without this, every video shares
    // the same global poster (first property image). Capture is best-effort — if CORS or canvas
    // capture fails, we fall back to the global poster.
    const [extractedPosters, setExtractedPosters] = useState<Map<number, string>>(new Map());
    const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());

    const markPlaying = useCallback((index: number) => {
        setPlayingVideos((prev) => {
            if (prev.has(index)) return prev;
            const next = new Set(prev);
            next.add(index);
            return next;
        });
    }, []);

    const markPaused = useCallback((index: number) => {
        setPlayingVideos((prev) => {
            if (!prev.has(index)) return prev;
            const next = new Set(prev);
            next.delete(index);
            return next;
        });
    }, []);

    // Capture the video's own first frame to a data URL so each video has a distinct thumbnail.
    // Seeks briefly to t=0.5 (to skip a possible black opening frame), draws to canvas, encodes
    // JPEG, then rewinds. Fails silently (and falls back to the global poster) when the video
    // CDN doesn't allow CORS canvas reads.
    const captureFirstFrame = useCallback((index: number, video: HTMLVideoElement) => {
        if (extractedPosters.has(index)) return;
        const onSeeked = () => {
            try {
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth || 1280;
                canvas.height = video.videoHeight || 720;
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
                    setExtractedPosters((prev) => {
                        if (prev.has(index)) return prev;
                        const next = new Map(prev);
                        next.set(index, dataUrl);
                        return next;
                    });
                }
            } catch {
                /* CORS-tainted canvas — leave the global poster in place */
            }
            video.removeEventListener('seeked', onSeeked);
            // Rewind so the user-initiated play starts cleanly from the beginning.
            try {
                video.currentTime = 0;
            } catch {
                /* some browsers throw if not yet seekable — harmless */
            }
        };
        video.addEventListener('seeked', onSeeked, { once: true });
        try {
            video.currentTime = 0.5;
        } catch {
            /* not seekable yet; the loadeddata handler will retry */
        }
    }, [extractedPosters]);

    // Photos first, then videos. Owner uploads ground truth → motion comes after the still shots.
    // First property image doubles as the video poster so paused/loading state isn't a black square.
    const posterUrl = images[0]?.url;
    const slides: Slide[] = [
        ...images.map((img, idx) => ({
            kind: 'image' as const,
            url: img.url,
            alt: img.title || `${title} — view ${idx + 1}`,
        })),
        ...videos.map((v) => ({
            kind: 'video' as const,
            url: v.url,
            label: v.title || `${title} — video tour`,
            poster: posterUrl,
        })),
    ];

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
            setCanScrollPrev(emblaApi.canScrollPrev());
            setCanScrollNext(emblaApi.canScrollNext());
        };
        const onSettling = () => setCarouselSettling(true);
        const onSettle = () => setCarouselSettling(false);
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
        // Any gesture or programmatic snap puts us into "settling" until Embla emits `settle`.
        emblaApi.on('pointerDown', onSettling);
        emblaApi.on('select', onSettling);
        emblaApi.on('settle', onSettle);
        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
            emblaApi.off('pointerDown', onSettling);
            emblaApi.off('select', onSettling);
            emblaApi.off('settle', onSettle);
        };
    }, [emblaApi]);

    // Pause videos when the gallery scrolls out of view; resume the active one when it scrolls back.
    useEffect(() => {
        const node = rootRef.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            ([entry]) => setGalleryInView(entry.isIntersecting && entry.intersectionRatio >= 0.4),
            { threshold: [0, 0.4, 0.75, 1] }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    // Track page-scroll activity. Playback waits until the user has been still for ~350ms —
    // long enough to survive momentum/inertia scroll on macOS and mobile, which fire scroll
    // events in bursts with small gaps between them.
    useEffect(() => {
        let timer: ReturnType<typeof setTimeout> | null = null;
        const onScroll = () => {
            setIsScrolling(true);
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => setIsScrolling(false), 350);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            if (timer) clearTimeout(timer);
        };
    }, []);

    // Single source of truth for video playback. All four conditions must hold:
    //   - this slide is the active one
    //   - the gallery is in view
    //   - the page isn't being scrolled
    //   - the carousel itself has settled (not mid-swipe / mid-snap)
    // Until all are true, the poster overlay stays visible because `playing` never fires.
    useEffect(() => {
        videoRefs.current.forEach((video, idx) => {
            const shouldPlay =
                idx === selectedIndex && galleryInView && !isScrolling && !carouselSettling;
            if (shouldPlay) {
                video.play().catch(() => {
                    /* autoplay blocked — silently no-op; user can still see the poster overlay */
                });
            } else if (!video.paused) {
                video.pause();
            }
        });
    }, [selectedIndex, galleryInView, isScrolling, carouselSettling]);

    const hasMultiple = slides.length > 1;
    const currentSlide = slides[selectedIndex];
    const isVideoSlide = currentSlide?.kind === 'video';

    return (
        <div className="relative" ref={rootRef}>
            <div
                className="relative w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-stone-100 rounded-2xl ring-1 ring-stone-900/5 shadow-lg shadow-stone-900/5"
                ref={emblaRef}
                aria-label={`${title} — property gallery`}
            >
                <div className="h-full flex">
                    {slides.map((slide, index) => (
                        <div
                            key={`${slide.url}-${index}`}
                            className="relative h-full flex-[0_0_100%]"
                        >
                            {slide.kind === 'image' ? (
                                <Image
                                    src={slide.url}
                                    alt={slide.alt}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                    sizes="(min-width: 1280px) 1280px, 100vw"
                                />
                            ) : (
                                <>
                                    <video
                                        ref={(el) => {
                                            if (el) videoRefs.current.set(index, el);
                                            else videoRefs.current.delete(index);
                                        }}
                                        src={slide.url}
                                        crossOrigin="anonymous"
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                        disablePictureInPicture
                                        onLoadedData={(e) => captureFirstFrame(index, e.currentTarget)}
                                        onPlaying={() => markPlaying(index)}
                                        onPause={() => markPaused(index)}
                                        onEnded={() => markPaused(index)}
                                        className="absolute inset-0 w-full h-full object-cover bg-stone-900"
                                        aria-label={slide.label}
                                    />
                                    {(() => {
                                        const posterSrc = extractedPosters.get(index) || slide.poster;
                                        if (!posterSrc) return null;
                                        const useNextImage = !posterSrc.startsWith('data:');
                                        const overlayClass = `absolute inset-0 w-full h-full object-cover transition-opacity duration-300 pointer-events-none ${playingVideos.has(index) ? 'opacity-0' : 'opacity-100'
                                            }`;
                                        return useNextImage ? (
                                            <Image
                                                src={posterSrc}
                                                alt=""
                                                fill
                                                aria-hidden="true"
                                                sizes="(min-width: 1280px) 1280px, 100vw"
                                                className={overlayClass}
                                            />
                                        ) : (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                src={posterSrc}
                                                alt=""
                                                aria-hidden="true"
                                                className={overlayClass}
                                            />
                                        );
                                    })()}
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom gradient for counter/dot legibility on all slides */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-900/40 to-transparent"
                />

                {/* Media counter — top-left */}
                {hasMultiple && (
                    <div className="absolute top-5 left-5 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full shadow-sm flex items-center gap-2 text-sm pointer-events-none">
                        <Expand className="w-3.5 h-3.5 text-stone-500" aria-hidden="true" />
                        <span className="font-mono text-stone-700 tabular-nums">
                            {String(selectedIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                        </span>
                    </div>
                )}

                {/* Video badge — top-right, video slides only */}
                {isVideoSlide && (
                    <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 bg-stone-900/85 backdrop-blur text-white text-xs font-medium uppercase tracking-wider px-2.5 py-1.5 rounded-full pointer-events-none">
                        <VideoIcon className="w-3.5 h-3.5" aria-hidden="true" />
                        Video tour
                    </span>
                )}

                {/* Dots — show on every slide now that videos have no native controls */}
                {hasMultiple && (
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden sm:flex gap-2">
                        {slides.map((slide, index) => {
                            const isActive = selectedIndex === index;
                            let dotClass: string;
                            if (isActive) {
                                dotClass = 'w-6 bg-white';
                            } else if (slide.kind === 'video') {
                                dotClass = 'w-1.5 bg-amber-400/80 hover:bg-amber-300';
                            } else {
                                dotClass = 'w-1.5 bg-white/50 hover:bg-white/80';
                            }
                            return (
                                <button
                                    key={`${slide.url}-${index}-dot`}
                                    type="button"
                                    onClick={() => emblaApi?.scrollTo(index)}
                                    aria-label={`Go to ${slide.kind === 'video' ? 'video' : 'image'} ${index + 1}`}
                                    className={`h-1.5 rounded-full transition-all ${dotClass}`}
                                />
                            );
                        })}
                    </div>
                )}

                {/* Nav buttons */}
                {hasMultiple && (
                    <>
                        <button
                            type="button"
                            onClick={scrollPrev}
                            disabled={!canScrollPrev}
                            aria-label="Previous"
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 backdrop-blur shadow-lg text-stone-900 hover:bg-white hover:scale-105 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                        >
                            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            onClick={scrollNext}
                            disabled={!canScrollNext}
                            aria-label="Next"
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 backdrop-blur shadow-lg text-stone-900 hover:bg-white hover:scale-105 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                        >
                            <ChevronRight className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default PropertyHero;
