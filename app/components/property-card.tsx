// components/properties/PropertyCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Ruler } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PropertyCard({
    title,
    location,
    price,
    area,
    image,
    amenities
}: {
    title: string;
    location: string;
    price: string;
    area: string;
    image: string;
    amenities: string[];
}) {
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <div className="relative h-64">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover rounded-t-xl"
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>

                <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="h-5 w-5" />
                    <span>{location}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mb-6">
                    <Ruler className="h-5 w-5" />
                    <span className="text-sm">{area}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    {amenities.map((amenity, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                        >
                            {amenity}
                        </span>
                    ))}
                </div>

                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-sm text-gray-600">Starting at</span>
                        <div className="text-xl font-bold text-gray-900">{price}</div>
                    </div>
                    <Button className="bg-gray-900 hover:bg-gray-800">
                        View Details
                    </Button>
                </div>
            </div>
        </div>
    );
}
