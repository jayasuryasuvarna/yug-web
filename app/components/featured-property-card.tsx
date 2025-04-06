"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, MapPin, Wheat, ArrowUpRight, Sprout } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export interface Property {
  images: string[];
  title: string;
  slug: string;
  location: string;
  price: string;
  description: string;
  managedCrops: string[];
  expectedYield: string;
}

interface PropertyCardProps {
  property: Property;
}
// PropertyCard Component with image carousel and managed crops information
export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Carousel control functions...
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Update carousel state
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

  // Format price to display per acre rate
  const formattedPrice = `₹${ (Number(property.price)).toLocaleString('en-IN') }`;

  return (
    <div className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all">
      {/* Image Carousel */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {property.images.map((image, idx) => (
              <div key={idx} className="relative min-w-full">
                <div className="aspect-[4/3] relative">
                  <img
                    src={image}
                    alt={`${ property.title } view ${ idx + 1 }`}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute inset-x-0 bottom-4 flex justify-between items-center px-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              scrollPrev();
            }}
            className={`p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors ${ !canScrollPrev ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            disabled={!canScrollPrev}
          >
            <ChevronLeft className="w-4 h-4 text-gray-900" />
          </button>

          <div className="flex gap-1.5">
            {property.images.map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${ idx === currentSlide ? 'bg-white w-3' : 'bg-white/60'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              scrollNext();
            }}
            className={`p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors ${ !canScrollNext ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            disabled={!canScrollNext}
          >
            <ChevronRight className="w-4 h-4 text-gray-900" />
          </button>
        </div>

        {/* Location Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5">
          <MapPin className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-900">{property.location}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
          {property.title}
        </h3>

        <p className="mt-2 text-gray-600 line-clamp-2 mb-6">{property.description}</p>

        {/* Managed Crops Section */}
        <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <Sprout className="w-4 h-4 text-gray-900" />
            <span className="font-medium text-gray-900">Managed Crops</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {property.managedCrops.map((crop, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 text-sm px-2.5 py-1 bg-white text-gray-600 rounded-full border border-gray-100"
              >
                <Sprout className="w-3.5 h-3.5" />
                {crop}
              </span>
            ))}
          </div>
          <div className="text-sm font-medium text-gray-900 mt-3 flex items-center gap-2">
            Expected Yield:
            <span className="text-gray-600">{property.expectedYield}</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="mt-auto flex justify-between items-center">
          <div>
            <span className="text-xl font-bold text-gray-900">{formattedPrice}</span>
            <span className="text-gray-600 text-sm ml-1">/acre</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="group/btn gap-2 hover:bg-gray-900 hover:text-white"
          >
            View Details
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};
