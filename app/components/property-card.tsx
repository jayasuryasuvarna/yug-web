// components/properties/PropertyCard.tsx
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Ruler, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
}

export default function PropertyCard({
    title,
    location,
    price,
    area,
    image,
    amenities,
    slug,
    images = []
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
        <Link href={`/properties/${ slug }`}>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 cursor-pointer h-full flex flex-col">
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
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollPrev();
                                    }}
                                    className={`p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors ${ !canScrollPrev ? 'opacity-50 cursor-not-allowed' : '' }`}
                                    disabled={!canScrollPrev}
                                >
                                    <ChevronLeft className="w-4 h-4 text-gray-900" />
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
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollNext();
                                    }}
                                    className={`p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors ${ !canScrollNext ? 'opacity-50 cursor-not-allowed' : '' }`}
                                    disabled={!canScrollNext}
                                >
                                    <ChevronRight className="w-4 h-4 text-gray-900" />
                                </button>
                            </div>
                        </>
                    )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>

                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                        <MapPin className="h-5 w-5 flex-shrink-0" />
                        <span className="line-clamp-1">{location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 mb-6">
                        <Ruler className="h-5 w-5 flex-shrink-0" />
                        <span className="text-sm">{area}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {amenities.map((amenity, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                            >
                                {amenity}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center mt-auto">
                        <div>
                            <span className="text-sm text-gray-600">Starting at</span>
                            <div className="text-xl font-bold text-gray-900">{price}</div>
                        </div>
                        <Button
                            className="bg-gray-900 hover:bg-gray-800"
                            onClick={(e) => e.preventDefault()}
                        >
                            View Details
                        </Button>
                    </div>
                </div>
            </div>
        </Link>
    );
}
