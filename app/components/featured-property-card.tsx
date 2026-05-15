"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, MapPin, Wheat, ArrowUpRight, Sprout, Video as VideoIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export interface Property {
  images: string[];
  title: string;
  slug: string;
  location: string;
  price: number;
  /** Optional per-unit price for richer display (e.g. 7000000). */
  pricePerUnit?: number | null;
  /** Optional unit string ("acre", "sqft", "guntha", ...). Defaults to no suffix if absent. */
  priceUnit?: string | null;
  description: string;
  managedCrops: string[];
  expectedYield: string;
  /** True when the property has at least one walkthrough video — surfaces a badge on the card. */
  hasVideo?: boolean;
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

  // Total price in Crores (matches the listing-page card format).
  const totalCr = (property.price || 0) / 10000000;
  const formattedPrice = `₹${totalCr.toFixed(totalCr >= 10 ? 1 : 2)} Cr`;
  // Optional per-unit subline — only renders if both fields are populated.
  const formattedPerUnit = property.pricePerUnit && property.priceUnit
    ? `≈ ₹${property.pricePerUnit.toLocaleString('en-IN')} / ${property.priceUnit}`
    : null;

  return (
    <div className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-lg hover:border-stone-300 transition-all cursor-pointer">
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
            type="button"
            onClick={(e) => {
              e.preventDefault();
              scrollPrev();
            }}
            aria-label="Previous image"
            className={`p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors cursor-pointer ${ !canScrollPrev ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            disabled={!canScrollPrev}
          >
            <ChevronLeft className="w-4 h-4 text-stone-900" aria-hidden="true" />
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
            type="button"
            onClick={(e) => {
              e.preventDefault();
              scrollNext();
            }}
            aria-label="Next image"
            className={`p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors cursor-pointer ${ !canScrollNext ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            disabled={!canScrollNext}
          >
            <ChevronRight className="w-4 h-4 text-stone-900" aria-hidden="true" />
          </button>
        </div>

        {/* Location Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
          <MapPin className="w-4 h-4 text-amber-700" aria-hidden="true" />
          <span className="text-sm font-medium text-stone-900">{property.location}</span>
        </div>

        {/* Video badge — only when this listing has a walkthrough video */}
        {property.hasVideo && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-stone-900/85 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm pointer-events-none">
            <VideoIcon className="w-3.5 h-3.5 text-white" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-wider text-white">Video</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="font-serif text-xl font-semibold text-stone-900 group-hover:text-amber-700 transition-colors">
          {property.title}
        </h3>

        <p className="mt-2 text-stone-600 line-clamp-2 mb-6">{property.description}</p>

        {/* Managed Crops Section */}
        <div className="mb-6 p-4 bg-stone-50 rounded-xl border border-stone-200">
          <div className="flex items-center gap-2 mb-3">
            <Sprout className="w-4 h-4 text-amber-700" aria-hidden="true" />
            <span className="font-medium text-stone-900">Managed crops</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {property.managedCrops.map((crop, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 text-sm px-2.5 py-1 bg-white text-stone-700 rounded-full border border-stone-200"
              >
                <Sprout className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
                {crop}
              </span>
            ))}
          </div>
          <div className="text-sm font-medium text-stone-900 mt-3 flex items-center gap-2">
            Expected yield:
            <span className="text-stone-600">{property.expectedYield}</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="mt-auto flex justify-between items-end">
          <div>
            <span className="block text-xl font-semibold text-stone-900 tabular-nums">{formattedPrice}</span>
            {formattedPerUnit && (
              <span className="block text-xs text-stone-500 tabular-nums mt-0.5">{formattedPerUnit}</span>
            )}
          </div>
          {/* Visual CTA — parent Link is the actual click target. Rendered as span so we don't nest <button> inside <a> (invalid HTML). */}
          <span className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md text-sm font-medium text-amber-700 group-hover:bg-stone-900 group-hover:text-white transition-colors">
            View details
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
          </span>
        </div>
      </div>
    </div>
  );
};
