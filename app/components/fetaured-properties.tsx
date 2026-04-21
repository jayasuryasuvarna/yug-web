import { ChevronLeft, ChevronRight, MapPin, Sprout, ArrowUpRight, ArrowRight } from "lucide-react";
import { Property, PropertyCard } from "./featured-property-card";
import { getFeaturedProperties } from "@/lib/api";
import Link from "next/link";
import { Button } from "@/components/ui/button";


// FeaturedProperties Component showcasing property listings
export default async function FeaturedProperties() {

  const data = await getFeaturedProperties();
  // Defensive: ensure data is always an array
  const safeData = Array.isArray(data) ? data : [];
  // Sample property data - replace with data from Contentful
  const properties: Property[] = safeData.map((item: any) => ({
    images: Array.isArray(item.imagesCollection?.items) ? item.imagesCollection.items.map((img: any) => img.url) : [],
    title: item.title,
    slug: item.slug,
    location: item.location,
    price: item.price,
    description: item.description,
    managedCrops: Array.isArray(item.propertyCropsCollection?.items) ? item.propertyCropsCollection.items.map((crop: any) => crop.cropType.name) : [],
    expectedYield: item.expectedYield,
  }));

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-sm mb-6">
              <Sprout className="w-4 h-4 text-amber-700" aria-hidden="true" />
              <span className="font-medium text-amber-800">Handpicked listings</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mb-4">
              Land we&apos;ve walked — and would buy ourselves.
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl">
              A small, rotating shortlist of verified farmland and river-attached plots. Real photos, real owners, real expected yields.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="hidden md:inline-flex items-center gap-2 group border-stone-300 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all cursor-pointer"
          >
            <Link href="/properties">
              View all listings
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Link key={index} href={`/properties/${ property.slug }`} className="block h-full">
              <PropertyCard property={property} />
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <Button
            asChild
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-950 text-white cursor-pointer"
          >
            <Link href="/properties">
              View all listings
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
