"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import "@/app/styles/embla.css";


interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <div className="embla relative">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {images.map((image, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
                                <img
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover rounde-none"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between absolute inset-x-0 top-1/2 -translate-y-1/2">
                {/* Left Arrow */}
                <button
                    onClick={scrollPrev}
                    className="flex items-center justify-center w-10 h-10 text-white"
                >
                    <ChevronLeftIcon className="size-6" strokeWidth={2}/>
                </button>
                {/* Right Arrow */}
                <button
                    onClick={scrollNext}
                    className="flex items-center justify-center w-10 h-10 text-white"
                >
                    <ChevronRightIcon className="w-6 h-6" strokeWidth={2}/>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
