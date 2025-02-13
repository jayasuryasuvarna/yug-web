import { ChevronLeft, ChevronRight, MapPin, Sprout, ArrowUpRight, ArrowRight } from "lucide-react";
import { Property, PropertyCard } from "./property-card";
import { getFeaturedProperties } from "@/lib/api";
import Link from "next/link";
import { Button } from "@/components/ui/button";


// FeaturedProperties Component showcasing property listings
export default async function FeaturedProperties() {

  const data = await getFeaturedProperties();
  // Sample property data - replace with data from Contentful
  const properties: Property[] = data.map((item: any) => ({
    images: item.imagesCollection.items.map((img: any) => img.url),
    title: item.title,
    slug: item.slug,
    location: item.location,
    price: item.price,
    description: item.description,
    managedCrops: item.propertyCropsCollection.items.map((crop: any) => crop.cropType.name),
    expectedYield: item.expectedYield,
  }));

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-900/5 rounded-full text-sm mb-6">
              <Sprout className="w-4 h-4 text-gray-600" />
              <span className="font-medium text-gray-600">Premium Agricultural Properties</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Investment{' '}
              <span className="relative">
                <span className="relative z-10">Opportunities</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-gray-900/[0.08] to-gray-900/[0.02]"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Discover our curated selection of premium agricultural properties, each offering unique investment potential and proven yield records.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="hidden md:inline-flex items-center gap-2 group hover:bg-gray-900 hover:text-white transition-all"
          >
            <Link href="/properties">
              View All Properties
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
            className="inline-flex items-center gap-2"
          >
            <Link href="/properties">
              View All Properties
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
