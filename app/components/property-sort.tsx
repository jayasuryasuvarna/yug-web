'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function PropertySort() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentSort = searchParams.get('sort') || 'featured';

    const handleSortChange = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('sort', value);
        router.push(`/properties?${ params.toString() }`);
    };

    return (
        <div className="flex items-center gap-3">
            <span className="text-gray-600">Sort by:</span>
            <select
                className="border border-gray-200 rounded-lg px-4 py-2"
                value={currentSort}
                onChange={(e) => handleSortChange(e.target.value)}
            >
                <option value="featured">Featured First</option>
                <option value="price_low_high">Price: Low to High</option>
                <option value="price_high_low">Price: High to Low</option>
            </select>
        </div>
    );
} 
