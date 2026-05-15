// app/properties/page.tsx
import Link from 'next/link';
import { ArrowRight, MapPin, SlidersHorizontal, X, SearchX, ChevronRight } from 'lucide-react';
import PropertyCard from '@/app/components/property-card';
import { getAllProperties, getPropertyTypes, getUniqueLocations } from '@/lib/api';
import PropertyFilters from '@/app/components/property-filters';
import PropertySort from '@/app/components/property-sort';

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
    videosCollection?: {
        items: { url: string; }[];
    };
    amenitiesCollection?: {
        items: { name: string; }[];
    };
    slug: string;
}

type SortOption = 'featured' | 'price_low_high' | 'price_high_low';


function buildHrefWithout(current: Record<string, string | undefined>, paramToRemove: string) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(current)) {
        if (key !== paramToRemove && value) params.set(key, value);
    }
    const qs = params.toString();
    return qs ? `/properties?${qs}` : '/properties';
}


export default async function PropertiesPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined; }>;
}) {
    const params = await searchParams;
    const [propertyTypesData, propertiesData] = await Promise.all([
        getPropertyTypes(),
        getAllProperties(),
    ]);

    if (!propertiesData?.propertyCollection) {
        return (
            <main className="min-h-screen bg-stone-50 flex items-center justify-center">
                <p className="text-stone-500 font-mono text-sm">Loading listings…</p>
            </main>
        );
    }

    const allProperties: Property[] = propertiesData.propertyCollection.items;
    const totalCount = allProperties.length;
    const propertyTypes = propertyTypesData?.propertyTypeCollection?.items || [];
    const locations = await getUniqueLocations(allProperties);

    // Apply filters
    let properties = allProperties;
    if (params.search) {
        const searchTerms = params.search.toLowerCase().split(/\s+/);
        properties = properties.filter(property => {
            const titleWords = property.title.toLowerCase();
            const locationWords = property.location.toLowerCase();
            return searchTerms.every(term =>
                titleWords.includes(term) || locationWords.includes(term)
            );
        });
    }
    if (params.propertyType) {
        const propertyType = params.propertyType.toLowerCase();
        properties = properties.filter(property =>
            property.propertyType?.name.toLowerCase().includes(propertyType)
        );
    }
    if (params.location) {
        const locationSearch = params.location.toLowerCase();
        properties = properties.filter(property =>
            property.location.toLowerCase().includes(locationSearch)
        );
    }

    // Apply sorting
    const sortBy = (params.sort as SortOption) || 'featured';
    properties = [...properties].sort((a, b) => {
        switch (sortBy) {
            case 'price_low_high':
                return a.price - b.price;
            case 'price_high_low':
                return b.price - a.price;
            default:
                return 0;
        }
    });

    const filteredCount = properties.length;
    const isFiltered = Boolean(params.search || params.propertyType || params.location);

    const activeFilters = [
        params.search && { key: 'search', label: `"${params.search}"` },
        params.propertyType && { key: 'propertyType', label: params.propertyType },
        params.location && { key: 'location', label: params.location },
    ].filter(Boolean) as { key: string; label: string; }[];

    return (
        <main className="min-h-screen bg-stone-50">
            {/* ───── Hero ───── */}
            <section className="relative bg-stone-50 overflow-hidden">
                <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,rgba(251,243,226,0.6),transparent_55%)]" />
                    <div className="absolute inset-0 bg-grain opacity-[0.04] mix-blend-multiply" />
                </div>

                <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14">
                    {/* Breadcrumb */}
                    <nav
                        aria-label="Breadcrumb"
                        className="flex items-center gap-1.5 text-xs font-mono text-stone-500 mb-8 motion-safe:animate-fade-up"
                    >
                        <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3 text-stone-400" aria-hidden="true" />
                        <span className="text-stone-900">Listings</span>
                    </nav>

                    <div className="max-w-3xl">
                        <p
                            className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-4 motion-safe:animate-fade-up"
                            style={{ animationDelay: '60ms' }}
                        >
                            The marketplace
                        </p>
                        <h1
                            className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] text-stone-900 mb-6 leading-[1.02] motion-safe:animate-fade-up"
                            style={{ animationDelay: '140ms' }}
                        >
                            Every plot we&apos;ve
                            <span className="block text-amber-700 italic font-normal">walked.</span>
                        </h1>
                        <p
                            className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mb-6 motion-safe:animate-fade-up"
                            style={{ animationDelay: '220ms' }}
                        >
                            Every listing site-visited, owner-verified, and photographed by our team. Browse, filter, and compare in plain rupees.
                        </p>

                        {/* Inline meta */}
                        <div
                            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-stone-600 motion-safe:animate-fade-up"
                            style={{ animationDelay: '300ms' }}
                        >
                            <span className="inline-flex items-center gap-1.5">
                                <span className="font-semibold text-stone-900 tabular-nums">{totalCount}</span>
                                <span>{totalCount === 1 ? 'listing' : 'listings'}</span>
                            </span>
                            <span className="h-3 w-px bg-stone-300" aria-hidden="true" />
                            <span className="inline-flex items-center gap-1.5">
                                <span className="font-semibold text-stone-900 tabular-nums">{locations.length}</span>
                                <span>{locations.length === 1 ? 'location' : 'locations'}</span>
                            </span>
                            <span className="h-3 w-px bg-stone-300" aria-hidden="true" />
                            <span>Priced in plain rupees</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ───── Filters (elevated card at the seam) ───── */}
            <section className="relative bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div
                        className="-translate-y-8 motion-safe:animate-fade-up"
                        style={{ animationDelay: '360ms' }}
                    >
                        <PropertyFilters propertyTypes={propertyTypes} locations={locations} />
                    </div>
                </div>
            </section>

            {/* ───── Results ───── */}
            <section className="bg-white pb-20 md:pb-28">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Results header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
                        <div>
                            <div className="flex items-baseline gap-2 mb-1">
                                <span className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 tabular-nums">
                                    {filteredCount}
                                </span>
                                {isFiltered && (
                                    <span className="text-sm text-stone-500">
                                        of <span className="tabular-nums">{totalCount}</span>
                                    </span>
                                )}
                                <span className="text-base text-stone-600">
                                    {filteredCount === 1 ? 'listing' : 'listings'}
                                </span>
                            </div>
                            {isFiltered ? (
                                <p className="text-sm text-stone-500">Filtered by {activeFilters.length} {activeFilters.length === 1 ? 'rule' : 'rules'} — remove any below.</p>
                            ) : (
                                <p className="text-sm text-stone-500">Showing everything currently on the marketplace.</p>
                            )}
                        </div>
                        <PropertySort />
                    </div>

                    {/* Active filter chips */}
                    {activeFilters.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2 mb-8 pb-6 border-b border-stone-200">
                            <SlidersHorizontal className="w-4 h-4 text-stone-500 mr-1" aria-hidden="true" />
                            {activeFilters.map(filter => (
                                <Link
                                    key={filter.key}
                                    href={buildHrefWithout(params, filter.key)}
                                    className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 hover:bg-amber-100 hover:border-amber-300 transition-colors group"
                                >
                                    <span>{filter.label}</span>
                                    <X className="w-3.5 h-3.5 text-amber-600 group-hover:text-amber-800 transition-colors" aria-hidden="true" />
                                </Link>
                            ))}
                            <Link
                                href="/properties"
                                className="ml-1 text-sm text-stone-500 hover:text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors"
                            >
                                Clear all
                            </Link>
                        </div>
                    )}

                    {/* Grid / Empty state */}
                    {filteredCount > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {properties.map((property, index) => (
                                <div
                                    key={property.sys.id}
                                    className="motion-safe:animate-fade-up"
                                    style={{ animationDelay: `${Math.min(index, 8) * 70}ms` }}
                                >
                                    <PropertyCard
                                        title={property.title}
                                        location={property.location}
                                        price={`₹${(property.price / 10000000).toFixed(1)} Cr`}
                                        area={property.totalArea}
                                        image={property.imagesCollection?.items[0]?.url || 'https://placehold.co/600x400/png?text=Property+Image'}
                                        amenities={property.amenitiesCollection?.items.map(a => a.name) || []}
                                        slug={property.slug}
                                        images={property.imagesCollection?.items}
                                        propertyType={property.propertyType?.name || 'Property'}
                                        hasVideo={(property.videosCollection?.items?.length ?? 0) > 0}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="border border-stone-200 rounded-2xl bg-stone-50 py-16 md:py-20 px-6 text-center">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-stone-200 text-stone-500 mb-5">
                                <SearchX className="w-6 h-6" aria-hidden="true" />
                            </div>
                            <h3 className="font-serif text-2xl font-semibold text-stone-900 mb-2">
                                No listings match these filters.
                            </h3>
                            <p className="text-base text-stone-600 max-w-md mx-auto mb-6">
                                We have <span className="font-semibold text-stone-900 tabular-nums">{totalCount}</span> {totalCount === 1 ? 'listing' : 'listings'} on the marketplace right now — try a broader search.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link
                                    href="/properties"
                                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-950 text-white text-sm font-medium transition-colors"
                                >
                                    Clear all filters
                                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-900 text-sm font-medium transition-colors"
                                >
                                    <MapPin className="w-4 h-4" aria-hidden="true" />
                                    Tell us what you&apos;re looking for
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
