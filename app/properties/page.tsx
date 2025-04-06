// app/properties/page.tsx
import { Button } from '@/components/ui/button';
import { Filter, Search, ArrowRight, MapPin, Trees, Ruler } from 'lucide-react';
import PropertyCard from '@/app/components/property-card';
import { getAllProperties, getPropertyTypes, getUniqueLocations } from '@/lib/api';
import PropertyFilters from '@/app/components/property-filters';

interface Property {
    sys: { id: string; };
    title: string;
    location: string;
    price: number;
    totalArea: string;
    propertyType?: { name: string; };
    imagesCollection?: {
        items: { url: string; }[];
    };
    amenitiesCollection?: {
        items: { name: string; }[];
    };
    slug: string;
}

export default async function PropertiesPage({
    searchParams
}: {
    searchParams: { [key: string]: string | undefined; };
}) {
    const [propertyTypesData, propertiesData] = await Promise.all([
        getPropertyTypes(),
        getAllProperties()
    ]);

    if (!propertiesData?.propertyCollection) {
        return <div>Loading...</div>;
    }

    let properties: Property[] = propertiesData.propertyCollection.items;
    const propertyTypes = propertyTypesData?.propertyTypeCollection?.items || [];
    const locations = await getUniqueLocations(properties);

    // Apply filters with pattern matching
    if (searchParams.search) {
        const searchTerms = searchParams.search.toLowerCase().split(/\s+/);
        properties = properties.filter(property => {
            const titleWords = property.title.toLowerCase();
            const locationWords = property.location.toLowerCase();
            return searchTerms.every(term =>
                titleWords.includes(term) || locationWords.includes(term)
            );
        });
    }

    if (searchParams.propertyType) {
        const propertyType = searchParams.propertyType.toLowerCase();
        properties = properties.filter(property =>
            property.propertyType?.name.toLowerCase().includes(propertyType)
        );
    }

    if (searchParams.location) {
        const locationSearch = searchParams.location.toLowerCase();
        properties = properties.filter(property =>
            property.location.toLowerCase().includes(locationSearch)
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Discover Premium Properties
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Explore our curated selection of managed farmlands and luxury villas offering exceptional investment opportunities
                    </p>
                </div>
            </div>

            {/* Filters Section */}
            <div className="max-w-7xl mx-auto px-6 -mt-8">
                <PropertyFilters
                    propertyTypes={propertyTypes}
                    locations={locations}
                />
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        {properties.length} Premium Properties
                    </h2>
                    <div className="flex items-center gap-3">
                        <span className="text-gray-600">Sort by:</span>
                        <select className="border border-gray-200 rounded-lg px-4 py-2">
                            <option>Featured First</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Property Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.length > 0 ? (
                        properties.map((property) => (
                            <PropertyCard
                                key={property.sys.id}
                                title={property.title}
                                location={property.location}
                                price={`₹${ (property.price / 10000000).toFixed(1) } Cr`}
                                area={property.totalArea}
                                image={property.imagesCollection?.items[0]?.url || 'https://placehold.co/600x400/png?text=Property+Image'}
                                amenities={property.amenitiesCollection?.items.map(a => a.name) || []}
                                slug={property.slug}
                                images={property.imagesCollection?.items}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10 text-gray-500">
                            No properties found matching your criteria
                        </div>
                    )}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center gap-2">
                    <Button variant="outline" className="border-gray-200">1</Button>
                    <Button variant="outline" className="border-gray-200">2</Button>
                    <Button variant="outline" className="border-gray-200">3</Button>
                    <Button variant="outline" className="border-gray-200 flex items-center gap-2">
                        Next <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
