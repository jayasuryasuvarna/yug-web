//app/properties/[slug]/page.tsx
import Image from 'next/image';
import { DownloadCloud, Home, Timer, Coins, TrendingUp, Sprout } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getPropertyBySlug } from '@/lib/api';

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
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Property Header */}
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {property.propertyType.name}
                    </span>
                </div>
                <h1 className="text-4xl font-bold mb-4">{property.title}</h1>
                <div className="flex items-center gap-4 text-gray-600">
                    <span>{property.location}</span>
                    <span>•</span>
                    <span>{property.totalArea}</span>
                    <span>•</span>
                    <span>₹{property.price.toLocaleString()}</span>
                </div>
            </div>

            {/* Property Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {property.imagesCollection.items.map((image, index) => (
                    <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                            src={image.url}
                            alt={image.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Construction Status */}
            {property.status === 'under-construction' && (
                <Alert className="mb-8">
                    <Timer className="h-4 w-4" />
                    <AlertTitle>Under Construction</AlertTitle>
                    <AlertDescription>
                        Estimated completion date: {property.completionDate}
                        {property.constructionProgress && (
                            <div className="mt-2">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className="bg-blue-600 h-2.5 rounded-full"
                                        style={{ width: `${ property.constructionProgress }%` }}
                                    ></div>
                                </div>
                                <span className="text-sm text-gray-600">
                                    Construction Progress: {property.constructionProgress}%
                                </span>
                            </div>
                        )}
                    </AlertDescription>
                </Alert>
            )}

            {/* Property Details Tabs */}
            <Tabs defaultValue="overview" className="mb-8">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="amenities">Amenities</TabsTrigger>
                    <TabsTrigger value="investment">Investment Details</TabsTrigger>
                    <TabsTrigger value="crops">Managed Crops</TabsTrigger>
                    <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                    <Card>
                        <CardHeader>
                            <CardTitle>Property Overview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-4">
                                <h3 className="font-semibold mb-2">About this {property.propertyType.name}</h3>
                                <p className="text-gray-600">{property.description}</p>
                            </div>

                            <div className="mt-6">
                                <h3 className="font-semibold mb-2">Key Features</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {property.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {property.numberOfVillas && (
                                <div className="mt-6">
                                    <h3 className="font-semibold mb-2">Villa Details</h3>
                                    <p className="text-gray-600">
                                        This property features {property.numberOfVillas} luxury villas
                                    </p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="amenities">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {property.amenitiesCollection.items.map((amenity, index) => (
                            <Card key={index}>
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-2">
                                        {amenity.available ? (
                                            <div className="text-green-500">✓</div>
                                        ) : (
                                            <div className="text-red-500">✗</div>
                                        )}
                                        <span>{amenity.name}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="investment">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {property.propertyInvestmentDetailsCollection.items.map((detail, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        {detail.investmentType.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold mb-2">
                                        {detail.investmentType.unit === '%' ?
                                            `${ detail.value }%` :
                                            `₹${ detail.value.toLocaleString() }`
                                        }
                                    </div>
                                    <p className="text-gray-600">
                                        {detail.customDescription || detail.investmentType.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="crops">
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {property.propertyCropsCollection.items.map((crop, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <div className="flex items-center gap-2">
                                            <Sprout className="h-5 w-5 text-green-500" />
                                            <CardTitle>{crop.cropType.name}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="relative h-48 rounded-lg overflow-hidden">
                                                <Image
                                                    src={crop?.cropType?.image?.url}
                                                    alt={crop?.cropType?.image?.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <p className="text-gray-600">
                                                {crop.customDescription || crop.cropType.description}
                                            </p>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-sm text-gray-500">Estimated Yearly Yield</p>
                                                    <p className="font-semibold">{crop.estimatedYieldPerYear} units</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500">Revenue per Unit</p>
                                                    <p className="font-semibold">₹{crop.revenuePerUnit}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500">Maintenance Cost</p>
                                                    <p className="font-semibold">₹{crop.maintenanceCost}/year</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500">Harvesting Months</p>
                                                    <p className="font-semibold">
                                                        {crop.specificHarvestingMonths?.join(', ') ||
                                                            crop.cropType.harvestingSeasons.join(', ')}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <p className="text-sm text-gray-500">Estimated Annual Revenue</p>
                                                <p className="text-xl font-bold text-green-600">
                                                    ₹{(crop.estimatedYieldPerYear * crop.revenuePerUnit - crop.maintenanceCost).toLocaleString()}
                                                </p>
                                            </div>
                                            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                                <p className="text-sm font-medium mb-2">Maintenance Requirements</p>
                                                <p className="text-sm text-gray-600">{crop.cropType.maintenanceRequirements}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="documents">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {property.brochureUrl && (
                            <Card>
                                <CardContent className="pt-6">
                                    <Button className="w-full">
                                        <DownloadCloud className="mr-2 h-4 w-4" />
                                        Download Brochure
                                    </Button>
                                </CardContent>
                            </Card>
                        )}
                        {property.threeDDesignUrl && (
                            <Card>
                                <CardContent className="pt-6">
                                    <Button className="w-full" variant="outline">
                                        <Home className="mr-2 h-4 w-4" />
                                        View 3D Design
                                    </Button>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </TabsContent>
            </Tabs>

            {/* Contact / Enquiry Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Interested in this property?</CardTitle>
                </CardHeader>
                <CardContent>
                    <Button size="lg" className="w-full md:w-auto">
                        Contact Sales Team
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
