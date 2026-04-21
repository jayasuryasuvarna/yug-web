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
        <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                    <label htmlFor="filter-search" className="sr-only">
                        Search properties by keyword
                    </label>
                    <div className="relative">
                        <input
                            id="filter-search"
                            type="search"
                            value={filters.search}
                            onChange={(e) => handleFilterChange('search', e.target.value)}
                            placeholder="Search properties..."
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-stone-900 focus:border-transparent"
                        />
                        <Search className="absolute left-3 top-3.5 h-5 w-5 text-stone-400" aria-hidden="true" />
                    </div>
                </div>

                <div>
                    <label htmlFor="filter-property-type" className="sr-only">
                        Filter by property type
                    </label>
                    <select
                        id="filter-property-type"
                        value={filters.propertyType}
                        onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                        className="w-full border border-stone-200 rounded-lg px-4 py-3 bg-white focus:ring-2 focus:ring-stone-900 focus:border-transparent cursor-pointer"
                    >
                        <option value="">All property types</option>
                        {propertyTypes.map((type) => (
                            <option key={type.name} value={type.name}>
                                {type.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="filter-location" className="sr-only">
                        Filter by location
                    </label>
                    <select
                        id="filter-location"
                        value={filters.location}
                        onChange={(e) => handleFilterChange('location', e.target.value)}
                        className="w-full border border-stone-200 rounded-lg px-4 py-3 bg-white focus:ring-2 focus:ring-stone-900 focus:border-transparent cursor-pointer"
                    >
                        <option value="">All locations</option>
                        {locations.map((location) => (
                            <option key={location} value={location}>
                                {location}
                            </option>
                        ))}
                    </select>
                </div>

                <Button
                    className="bg-stone-900 hover:bg-stone-950 h-full cursor-pointer"
                    onClick={applyFilters}
                >
                    <Filter className="mr-2 h-5 w-5" aria-hidden="true" />
                    Apply Filters
                </Button>
            </div>
        </div>
    );
} 
