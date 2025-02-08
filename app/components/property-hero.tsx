"use client";
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface PropertyImage {
    url: string;
    title?: string;
    description?: string;
}

interface PropertyHeroProps {
    images: PropertyImage[];
    title: string;
    propertyType: string;
    location: string;
    totalArea: string;
    price: number;
    className?: string;
}

interface CarouselButtonProps {
    onClick: () => void;
    direction: 'left' | 'right';
    disabled?: boolean;
    className?: string;
}

const CarouselButton: React.FC<CarouselButtonProps> = ({
    onClick,
    direction,
    disabled = false,
    className = ''
}) => {
    const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
    const baseStyles = `absolute top-1/2 -translate-y-1/2 ${ direction === 'left' ? 'left-6' : 'right-6' }`;

    return (
        <Button
            variant="secondary"
            size="icon"
            className={`${ baseStyles } ${ className } h-12 w-12 bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed z-20`}
            onClick={onClick}
            disabled={disabled}
            aria-label={`Scroll ${ direction }`}
            type="button"
        >
            <Icon className="h-6 w-6 text-gray-900" />
        </Button>
    );
};

const PropertyHero: React.FC<PropertyHeroProps> = ({
    images,
    title,
    propertyType,
    location,
    totalArea,
    price,
    className = ''
}) => {
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center'
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
            setPrevBtnEnabled(emblaApi.canScrollPrev());
            setNextBtnEnabled(emblaApi.canScrollNext());
        };

        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);

        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi]);

    return (
        <div className={`relative h-[80vh] ${ className }`}>
            {/* Image Counter */}
            {images.length > 1 && (
                <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full z-20">
                    <span className="text-sm font-medium text-white">
                        {selectedIndex + 1} / {images.length}
                    </span>
                </div>
            )}

            {/* Carousel Container */}
            <div
                className="h-full overflow-hidden"
                ref={emblaRef}
                aria-label="Property images carousel"
            >
                <div className="h-full flex">
                    {images.map((image, index) => (
                        <div
                            key={`${ image.url }-${ index }`}
                            className="relative h-full flex-[0_0_100%]"
                        >
                            <Image
                                src={image.url}
                                alt={image.title || `Property view ${ index + 1 }`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                                sizes="100vw"
                                aria-label={image.description || `Property image ${ index + 1 }`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            {images.length > 1 && (
                <>
                    <CarouselButton
                        direction="left"
                        onClick={scrollPrev}
                        disabled={!prevBtnEnabled}
                    />
                    <CarouselButton
                        direction="right"
                        onClick={scrollNext}
                        disabled={!nextBtnEnabled}
                    />
                </>
            )}

            {/* Dots Navigation */}
            {images.length > 1 && (
                <div className="absolute bottom-40 left-0 right-0 flex justify-center gap-3 z-20">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-1.5 h-1.5 rounded-full transition-all ${ selectedIndex === index
                                    ? 'bg-white w-4'
                                    : 'bg-white/40 hover:bg-white/60'
                                }`}
                            onClick={() => emblaApi?.scrollTo(index)}
                            aria-label={`Go to slide ${ index + 1 }`}
                        />
                    ))}
                </div>
            )}

            {/* Overlay Gradient */}
            <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10"
                aria-hidden="true"
            />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
                <div className="max-w-7xl mx-auto">
                    <span
                        className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-medium mb-4 text-gray-900"
                        role="text"
                    >
                        {propertyType}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                        {title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-white">
                        <div className="flex items-center gap-2">
                            <MapPin className="h-5 w-5" aria-hidden="true" />
                            <span className="text-lg">{location}</span>
                        </div>
                        <span className="hidden md:inline text-white/60" aria-hidden="true">|</span>
                        <span className="text-lg">{totalArea}</span>
                        <span className="hidden md:inline text-white/60" aria-hidden="true">|</span>
                        <span className="text-2xl font-semibold">₹{price.toLocaleString('en-IN')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyHero;
