import { ArrowRight } from "lucide-react";
import { Property, PropertyCard } from "./property-card";
import { getFeaturedProperties } from "@/lib/api";
import Link from "next/link";


// FeaturedProperties Component showcasing property listings
export default async function FeaturedProperties() {

  const data = await getFeaturedProperties();
  console.log("data---->", data);
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
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">Featured Properties</h1>
            <p className="text-gray-600 max-w-2xl">
              Discover our hand-picked selection of premium agricultural properties
            </p>
          </div>
          <a
            href="/properties"
            className="hidden md:flex items-center text-green-600 hover:text-green-700 transition-colors"
          >
            View All Properties
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Link key={index} href={`/properties/${ property.slug }`} passHref>
              <PropertyCard property={property} />
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a
            href="/properties"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors"
          >
            View All Properties
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};
