"use client";
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import Image from 'next/image';

interface PropertyImage {
    url: string;
    title?: string;
    description?: string;
}

interface PropertyGalleryProps {
    images: PropertyImage[];
    title: string;
}

const PropertyHero: React.FC<PropertyGalleryProps> = ({ images, title }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
            setCanScrollPrev(emblaApi.canScrollPrev());
            setCanScrollNext(emblaApi.canScrollNext());
        };
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi]);

    const hasMultiple = images.length > 1;

    return (
        <div className="relative">
            {/* Carousel container */}
            <div
                className="relative w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-stone-100 rounded-2xl ring-1 ring-stone-900/5 shadow-lg shadow-stone-900/5"
                ref={emblaRef}
                aria-label={`${title} — image gallery`}
            >
                <div className="h-full flex">
                    {images.map((image, index) => (
                        <div
                            key={`${image.url}-${index}`}
                            className="relative h-full flex-[0_0_100%]"
                        >
                            <Image
                                src={image.url}
                                alt={image.title || `${title} — view ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                                sizes="(min-width: 1280px) 1280px, 100vw"
                            />
                        </div>
                    ))}
                </div>

                {/* Bottom gradient for counter legibility */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-900/40 to-transparent"
                />

                {/* Image counter */}
                {hasMultiple && (
                    <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full shadow-sm flex items-center gap-2 text-sm">
                        <Expand className="w-3.5 h-3.5 text-stone-500" aria-hidden="true" />
                        <span className="font-mono text-stone-700 tabular-nums">
                            {String(selectedIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                        </span>
                    </div>
                )}

                {/* Dots */}
                {hasMultiple && (
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden sm:flex gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => emblaApi?.scrollTo(index)}
                                aria-label={`Go to image ${index + 1}`}
                                className={`h-1.5 rounded-full transition-all ${selectedIndex === index
                                    ? 'w-6 bg-white'
                                    : 'w-1.5 bg-white/50 hover:bg-white/80'
                                    }`}
                            />
                        ))}
                    </div>
                )}

                {/* Nav buttons */}
                {hasMultiple && (
                    <>
                        <button
                            type="button"
                            onClick={scrollPrev}
                            disabled={!canScrollPrev}
                            aria-label="Previous image"
                            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 backdrop-blur shadow-lg text-stone-900 hover:bg-white hover:scale-105 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                        >
                            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            onClick={scrollNext}
                            disabled={!canScrollNext}
                            aria-label="Next image"
                            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 backdrop-blur shadow-lg text-stone-900 hover:bg-white hover:scale-105 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
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
