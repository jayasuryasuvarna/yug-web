// app/properties/page.tsx
import { Button } from '@/components/ui/button';
import { Filter, Search, ArrowRight, MapPin, Trees, Ruler } from 'lucide-react';
import PropertyCard from '@/app/components/property-card';
import { getAllProperties } from '@/lib/api';

interface Property {
    sys: { id: string; };
    title: string;
    location: string;
    price: number;
    totalArea: string;
    images?: { items: { url: string; }[]; };
    amenities?: { items: { name: string; }[]; };
    slug: string;
}

export default async function PropertiesPage() {
    const data = await getAllProperties();
    if (!data?.propertyCollection) {
        return <div>Loading...</div>; // Or some error handling
    }

    const properties: Property[] = data.propertyCollection.items;

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
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search properties..."
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900"
                            />
                            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                        </div>

                        <select className="border border-gray-200 rounded-lg px-4 py-3">
                            <option>Property Type</option>
                            <option>Farmland</option>
                            <option>Villa</option>
                        </select>

                        <select className="border border-gray-200 rounded-lg px-4 py-3">
                            <option>Location</option>
                            <option>Coorg, Karnataka</option>
                            <option>Hyderabad, Telangana</option>
                        </select>

                        <Button className="bg-gray-900 hover:bg-gray-800 h-full">
                            <Filter className="mr-2 h-5 w-5" />
                            Apply Filters
                        </Button>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        {data.propertyCollection.total} Premium Properties
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
                    {properties.map((property) => (
                        <PropertyCard
                            key={property.sys.id}
                            title={property.title}
                            location={property.location}
                            price={`₹${ (property.price / 10000000).toFixed(1) } Cr`}
                            area={property.totalArea}
                            image={property.images?.items[0]?.url || '/placeholder.jpg'}
                            amenities={property.amenities?.items.map(a => a.name) || []}
                            slug={property.slug}
                            images={property.images?.items}
                        />
                    ))}
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
