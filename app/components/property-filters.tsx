'use client';

import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

interface PropertyFiltersProps {
    propertyTypes: { name: string; }[];
    locations: string[];
}

export default function PropertyFilters({ propertyTypes, locations }: PropertyFiltersProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [filters, setFilters] = useState({
        search: searchParams.get('search') || '',
        propertyType: searchParams.get('propertyType') || '',
        location: searchParams.get('location') || ''
    });

    const handleFilterChange = (key: string, value: string) => {
        setFilters(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const applyFilters = () => {
        const params = new URLSearchParams();
        if (filters.search) params.set('search', filters.search);
        if (filters.propertyType) params.set('propertyType', filters.propertyType);
        if (filters.location) params.set('location', filters.location);

        router.push(`/properties?${ params.toString() }`);
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                    <input
                        type="text"
                        value={filters.search}
                        onChange={(e) => handleFilterChange('search', e.target.value)}
                        placeholder="Search properties..."
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900"
                    />
                    <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>

                <select
                    value={filters.propertyType}
                    onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                    className="border border-gray-200 rounded-lg px-4 py-3"
                >
                    <option value="">Property Type</option>
                    {propertyTypes.map((type) => (
                        <option key={type.name} value={type.name}>
                            {type.name}
                        </option>
                    ))}
                </select>

                <select
                    value={filters.location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="border border-gray-200 rounded-lg px-4 py-3"
                >
                    <option value="">Location</option>
                    {locations.map((location) => (
                        <option key={location} value={location}>
                            {location}
                        </option>
                    ))}
                </select>

                <Button
                    className="bg-gray-900 hover:bg-gray-800 h-full"
                    onClick={applyFilters}
                >
                    <Filter className="mr-2 h-5 w-5" />
                    Apply Filters
                </Button>
            </div>
        </div>
    );
} 
