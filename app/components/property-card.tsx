"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, MapPin, Wheat } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

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

  return (
    <div className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
      {/* Image Carousel */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {property.images.map((image, idx) => (
              <div key={idx} className="relative min-w-full">
                <img
                  src={image}
                  alt={`${ property.title } view ${ idx + 1 }`}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="absolute inset-x-0 bottom-0 flex justify-between items-center p-2">
          <button
            onClick={scrollPrev}
            className={`p-1 rounded-full bg-white/80 hover:bg-white transition-colors ${ !canScrollPrev ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            disabled={!canScrollPrev}
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>

          <div className="flex gap-1">
            {property.images.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors ${ idx === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            className={`p-1 rounded-full bg-white/80 hover:bg-white transition-colors ${ !canScrollNext ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            disabled={!canScrollNext}
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6">
        {/* Location */}
        <div className="flex items-center mb-2">
          <MapPin className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
          <span className="text-gray-600">{property.location}</span>
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-6">{property.description}</p>

        {/* Managed Crops Section - Fixed Height */}
        <div className="mb-6 p-4 bg-green-50 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <Wheat className="w-4 h-4 text-green-600 flex-shrink-0" />
            <span className="font-semibold">Managed Crops</span>
          </div>
          <div className="space-y-1">
            {property.managedCrops.map((crop, idx) => (
              <div key={idx} className="text-sm text-gray-600">{crop}</div>
            ))}
          </div>
          <div className="text-sm text-green-600 font-medium mt-3">
            Expected Yield: {property.expectedYield}
          </div>
        </div>

        {/* Price and CTA - Always at Bottom */}
        <div className="mt-auto flex justify-between items-center">
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-green-600">₹{property.price}</span>
            <span className="text-gray-600 ml-1">/acre</span>
          </div>
          <button className="text-green-600 hover:text-green-700 font-semibold">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
