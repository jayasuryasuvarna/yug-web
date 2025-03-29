//app/properties/[slug]/page.tsx
import Image from 'next/image';
import { DownloadCloud, Home, Timer, Coins, TrendingUp, Sprout, MapPin, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getPropertyBySlug } from '@/lib/api';
import PropertyHero from '@/app/components/property-hero';

// Updated interfaces based on Contentful model
interface Asset {
    url: string;
    title: string;
    description: string;
}

interface PropertyType {
    name: string;
    description: string;
}

interface Amenity {
    name: string;
    available: boolean;
}

interface InvestmentType {
    name: string;
    description: string;
    unit: string;
}

interface PropertyInvestmentDetail {
    name: string;
    value: number;
    customDescription?: string;
    investmentType: InvestmentType;
}

interface CropType {
    name: string;
    description: string;
    harvestingSeasons: string[];
    maintenanceRequirements: string;
    image: Asset;
}

interface PropertyCrop {
    estimatedYieldPerYear: number;
    revenuePerUnit: number;
    maintenanceCost: number;
    customDescription?: string;
    specificHarvestingMonths?: string[];
    cropType: CropType;
}

export interface PropertyData {
    sys: {
        id: string;
    };
    title: string;
    slug: string;
    description: string;
    propertyType: PropertyType;
    status: 'completed' | 'under-construction';
    features: string[];
    price: number;
    location: string;
    totalArea: string;
    completionDate?: string;
    constructionProgress?: number;
    numberOfVillas?: number;
    brochureUrl?: string;
    threeDDesignUrl?: string;
    imagesCollection: {
        items: Asset[];
    };
    amenitiesCollection: {
        items: Amenity[];
    };
    propertyInvestmentDetailsCollection: {
        items: PropertyInvestmentDetail[];
    };
    propertyCropsCollection: {
        items: PropertyCrop[];
    };
}

async function getProperty(slug: string) {
    const data = await getPropertyBySlug(slug);

    if (!data) {
        throw new Error('Property not found');
    }

    return data as PropertyData;
}

export default async function PropertyPage({ params }: { params: { slug: string; }; }) {
    const property = await getProperty(params.slug);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Property Hero Component */}
            <PropertyHero
                images={property.imagesCollection.items}
                title={property.title}
                propertyType={property.propertyType.name}
                location={property.location}
                totalArea={property.totalArea}
                price={property.price}
            />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Construction Status */}
                {property.status === 'under-construction' && (
                    <div className="mb-16 bg-gray-900/5 backdrop-blur-sm border border-gray-200 rounded-xl p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <Timer className="h-6 w-6 text-gray-900" />
                            <h2 className="text-xl font-semibold text-gray-900">Under Construction</h2>
                        </div>
                        <p className="text-gray-600 mb-6">Estimated completion: {property.completionDate}</p>
                        {property.constructionProgress && (
                            <div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                                    <div
                                        className="bg-gray-900 h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${ property.constructionProgress }%` }}
                                    />
                                </div>
                                <span className="text-gray-600">
                                    Construction Progress: {property.constructionProgress}%
                                </span>
                            </div>
                        )}
                    </div>
                )}

                {/* Overview Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">About this Property</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">{property.description}</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                {property.features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1 h-1 bg-gray-900 rounded-full" />
                                        <span className="text-gray-600">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-semibold mb-6 text-gray-900">Property Highlights</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                                    <span className="text-gray-500">Type</span>
                                    <span className="font-medium text-gray-900">{property.propertyType.name}</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                                    <span className="text-gray-500">Total Area</span>
                                    <span className="font-medium text-gray-900">{property.totalArea}</span>
                                </div>
                                {property.numberOfVillas && (
                                    <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                                        <span className="text-gray-500">Number of Villas</span>
                                        <span className="font-medium text-gray-900">{property.numberOfVillas}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Amenities Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">Amenities & Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {property.amenitiesCollection.items.map((amenity, index) => (
                            <div key={index}
                                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-center gap-3">
                                {amenity.available ? (
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900/5 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                )}
                                <span className={`font-medium ${ amenity.available ? 'text-gray-900' : 'text-gray-400' }`}>
                                    {amenity.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Investment Details Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">Investment Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {property.propertyInvestmentDetailsCollection.items.map((detail, index) => (
                            <div key={index}
                                className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                                    {detail.investmentType.name}
                                </h3>
                                <div className="text-3xl font-bold mb-3 text-gray-900">
                                    {detail.investmentType.unit === '%' ?
                                        `${ detail.value }%` :
                                        `₹${ detail.value.toLocaleString() }`
                                    }
                                </div>
                                <p className="text-gray-600">
                                    {detail.customDescription || detail.investmentType.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Managed Crops Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">Managed Crops</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {property.propertyCropsCollection.items.map((crop, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                                <div className="relative h-64">
                                    <Image
                                        src={crop?.cropType?.image?.url}
                                        alt={crop?.cropType?.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Sprout className="h-6 w-6 text-gray-900" />
                                        <h3 className="text-xl font-semibold text-gray-900">{crop?.cropType?.name}</h3>
                                    </div>
                                    <p className="text-gray-600 mb-6">
                                        {crop?.customDescription || crop?.cropType?.description}
                                    </p>
                                    <div className="grid grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Yearly Yield</p>
                                            <p className="font-semibold text-gray-900">{crop?.estimatedYieldPerYear} units</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Revenue per Unit</p>
                                            <p className="font-semibold text-gray-900">₹{crop?.revenuePerUnit}</p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-900/5 rounded-lg p-6 mb-6">
                                        <p className="text-sm font-medium text-gray-900 mb-2">Estimated Annual Revenue</p>
                                        <p className="text-2xl font-bold text-gray-900">
                                            ₹{(crop?.estimatedYieldPerYear * crop?.revenuePerUnit - crop?.maintenanceCost).toLocaleString()}
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-sm font-medium text-gray-900">Harvesting Seasons</p>
                                        <p className="text-gray-600">
                                            {crop.specificHarvestingMonths?.join(', ') ||
                                                crop.cropType.harvestingSeasons.join(', ')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Documents Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">Documents & Resources</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {property.brochureUrl && (
                            <a
                                href={property.brochureUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full"
                            >
                                <Button className="w-full bg-white text-gray-900 hover:bg-gray-50 border border-gray-200 shadow-sm h-16">
                                    <DownloadCloud className="mr-3 h-5 w-5" />
                                    Download Property Brochure
                                </Button>
                            </a>
                        )}
                        {property.threeDDesignUrl && (
                            <a
                                href={property.threeDDesignUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full"
                            >
                                <Button className="w-full bg-white text-gray-900 hover:bg-gray-50 border border-gray-200 shadow-sm h-16">
                                    <Home className="mr-3 h-5 w-5" />
                                    View 3D Property Design
                                </Button>
                            </a>
                        )}
                    </div>
                </section>

                {/* Contact Section */}
                <section className="bg-gray-900 rounded-2xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                Interested in this property?
                            </h2>
                            <p className="text-gray-300">
                                Connect with our sales team for more information and availability
                            </p>
                        </div>
                        <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-50">
                            Contact Sales Team
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
}
