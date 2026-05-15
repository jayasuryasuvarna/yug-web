// components/properties/PropertyCard.tsx
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Ruler, ChevronLeft, ChevronRight, Video as VideoIcon } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

interface PropertyCardProps {
    title: string;
    location: string;
    price: string;
    area: string;
    image: string;
    amenities: string[];
    slug: string;
    images?: { url: string; }[];
    propertyType: string;
    hasVideo?: boolean;
}

export default function PropertyCard({
    title,
    location,
    price,
    area,
    image,
    amenities,
    slug,
    images = [],
    propertyType,
    hasVideo = false,
}: PropertyCardProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCurrentSlide(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, onSelect]);

    const imageUrls = images.length > 0 ? images.map(img => img.url) : [image];

    return (
        <Link href={`/properties/${ slug }`} aria-label={`View ${title} in ${location}`}>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg hover:border-stone-300 transition-all border border-stone-200 cursor-pointer h-full flex flex-col">
                <div className="relative h-[280px]">
                    <div className="overflow-hidden h-full" ref={emblaRef}>
                        <div className="flex h-full">
                            {imageUrls.map((img, idx) => (
                                <div key={idx} className="relative min-w-full h-full">
                                    <Image
                                        src={img}
                                        alt={`${ title } view ${ idx + 1 }`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {imageUrls.length > 1 && (
                        <>
                            <div className="absolute inset-x-0 bottom-4 flex justify-between items-center px-4">
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollPrev();
                                    }}
                                    aria-label="Previous image"
                                    className={`p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors cursor-pointer ${ !canScrollPrev ? 'opacity-50 cursor-not-allowed' : '' }`}
                                    disabled={!canScrollPrev}
                                >
                                    <ChevronLeft className="w-4 h-4 text-stone-900" aria-hidden="true" />
                                </button>

                                <div className="flex gap-1.5">
                                    {imageUrls.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`w-1.5 h-1.5 rounded-full transition-colors ${ idx === currentSlide ? 'bg-white w-3' : 'bg-white/60' }`}
                                        />
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollNext();
                                    }}
                                    aria-label="Next image"
                                    className={`p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors cursor-pointer ${ !canScrollNext ? 'opacity-50 cursor-not-allowed' : '' }`}
                                    disabled={!canScrollNext}
                                >
                                    <ChevronRight className="w-4 h-4 text-stone-900" aria-hidden="true" />
                                </button>
                            </div>
                        </>
                    )}

                    <div className="absolute top-4 left-4">
                        <span className="bg-stone-900/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                            {propertyType}
                        </span>
                    </div>

                    {hasVideo && (
                        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-stone-900/85 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm pointer-events-none">
                            <VideoIcon className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                            <span className="text-xs font-medium uppercase tracking-wider text-white">Video</span>
                        </div>
                    )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">{title}</h3>

                    <div className="flex items-center gap-2 text-stone-600 mb-4">
                        <MapPin className="h-5 w-5 flex-shrink-0 text-amber-700" aria-hidden="true" />
                        <span className="line-clamp-1">{location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-stone-600 mb-6">
                        <Ruler className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-sm">{area}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {amenities.map((amenity, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-stone-100 rounded-full text-sm text-stone-700"
                            >
                                {amenity}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center mt-auto">
                        <div>
                            <span className="text-sm text-stone-600">Starting at</span>
                            <div className="text-xl font-semibold text-stone-900">{price}</div>
                        </div>
                        {/* Visual CTA — parent Link handles navigation. Span avoids <button> inside <a> (invalid HTML). */}
                        <span className="inline-flex items-center justify-center h-10 px-4 rounded-md text-sm font-medium bg-stone-900 group-hover:bg-stone-950 text-white transition-colors">
                            View Details
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
