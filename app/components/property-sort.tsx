'use client';

import { ArrowUpDown } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

const SORT_OPTIONS = [
    { value: 'featured', label: 'Featured first' },
    { value: 'price_low_high', label: 'Price: low to high' },
    { value: 'price_high_low', label: 'Price: high to low' },
];

export default function PropertySort() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentSort = searchParams.get('sort') || 'featured';

    const handleSortChange = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value === 'featured') {
            params.delete('sort');
        } else {
            params.set('sort', value);
        }
        const qs = params.toString();
        router.push(qs ? `/properties?${qs}` : '/properties');
    };

    return (
        <div className="flex items-center gap-3">
            <label htmlFor="sort-select" className="text-sm text-stone-500 whitespace-nowrap">
                Sort
            </label>
            <div className="relative">
                <ArrowUpDown
                    aria-hidden="true"
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400 pointer-events-none"
                />
                <select
                    id="sort-select"
                    className="appearance-none bg-white border border-stone-200 rounded-lg pl-9 pr-8 py-2 text-sm text-stone-900 focus:ring-2 focus:ring-stone-900 focus:border-transparent cursor-pointer hover:border-stone-300 transition-colors"
                    value={currentSort}
                    onChange={(e) => handleSortChange(e.target.value)}
                >
                    {SORT_OPTIONS.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <svg
                    aria-hidden="true"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500 pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
    );
}
