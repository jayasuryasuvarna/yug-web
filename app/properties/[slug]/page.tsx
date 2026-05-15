// app/properties/[slug]/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import {
    DownloadCloud,
    Home,
    Timer,
    Sprout,
    MapPin,
    ArrowRight,
    ArrowLeft,
    Check,
    X,
    MessageCircle,
    ChevronRight,
    Ruler,
    Building2,
    FileText,
} from 'lucide-react';
import { getPropertyBySlug } from '@/lib/api';
import { whatsappLink } from '@/lib/constants';
import PropertyHero from '@/app/components/property-hero';

interface Asset {
    url: string;
    title: string;
    description: string;
}

interface VideoAsset {
    url: string;
    title?: string;
    description?: string;
    contentType?: string;
    width?: number;
    height?: number;
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
    sys: { id: string; };
    title: string;
    slug: string;
    description: string;
    propertyType: PropertyType;
    status: 'completed' | 'under-construction';
    features: string[];
    price: number;
    /** Optional per-unit price (e.g. ₹70 lakh per acre → 7000000). */
    pricePerUnit?: number | null;
    /** Optional unit string for the per-unit price ("acre", "sqft", "guntha", ...). */
    priceUnit?: string | null;
    location: string;
    totalArea: string;
    completionDate?: string;
    constructionProgress?: number;
    numberOfVillas?: number;
    brochureUrl?: string;
    threeDDesignUrl?: string;
    imagesCollection: { items: Asset[]; };
    videosCollection?: { items: VideoAsset[]; };
    amenitiesCollection: { items: Amenity[]; };
    propertyInvestmentDetailsCollection: { items: PropertyInvestmentDetail[]; };
    propertyCropsCollection: { items: PropertyCrop[]; };
}


async function getProperty(slug: string) {
    const data = await getPropertyBySlug(slug);
    if (!data) throw new Error('Property not found');
    return data as PropertyData;
}

function formatCr(rupees: number) {
    const cr = rupees / 10000000;
    return `₹${cr.toFixed(cr >= 10 ? 1 : 2)} Cr`;
}

function formatRupees(n: number) {
    return `₹${n.toLocaleString('en-IN')}`;
}


export default async function PropertyPage({ params }: { params: Promise<{ slug: string; }>; }) {
    const { slug } = await params;
    const property = await getProperty(slug);

    const amenities = property.amenitiesCollection?.items || [];
    const availableAmenities = amenities.filter(a => a.available);
    const unavailableAmenities = amenities.filter(a => !a.available);
    const investments = property.propertyInvestmentDetailsCollection?.items || [];
    const crops = property.propertyCropsCollection?.items || [];

    const whatsappHref = whatsappLink(
        `Hi, I'm interested in "${property.title}" (${property.location}). Can we schedule a site visit?`
    );

    return (
        <main className="min-h-screen bg-stone-50">
            {/* ───── Breadcrumb + Back ───── */}
            <div className="bg-stone-50 border-b border-stone-200/80">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
                    <nav
                        aria-label="Breadcrumb"
                        className="flex items-center gap-1.5 text-xs font-mono text-stone-500 overflow-hidden"
                    >
                        <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3 text-stone-400 flex-shrink-0" aria-hidden="true" />
                        <Link href="/properties" className="hover:text-amber-700 transition-colors">Listings</Link>
                        <ChevronRight className="w-3 h-3 text-stone-400 flex-shrink-0" aria-hidden="true" />
                        <span className="text-stone-900 truncate">{property.title}</span>
                    </nav>
                    <Link
                        href="/properties"
                        className="hidden sm:inline-flex items-center gap-1.5 text-sm text-stone-600 hover:text-amber-700 transition-colors group flex-shrink-0"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" aria-hidden="true" />
                        Back to listings
                    </Link>
                </div>
            </div>

            {/* ───── Gallery ───── */}
            <section className="bg-stone-50">
                <div className="max-w-7xl mx-auto px-6 pt-6 md:pt-8">
                    <div className="motion-safe:animate-fade-up">
                        <PropertyHero
                            images={property.imagesCollection?.items || []}
                            videos={property.videosCollection?.items || []}
                            title={property.title}
                        />
                    </div>
                </div>
            </section>

            {/* ───── Title bar (split) ───── */}
            <section className="bg-stone-50 pt-10 md:pt-14 pb-16 md:pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
                        {/* Left: title + meta + description */}
                        <div className="lg:col-span-8">
                            <span
                                className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-amber-700 mb-4 motion-safe:animate-fade-up"
                            >
                                {property.propertyType?.name}
                            </span>
                            <h1
                                className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-stone-900 leading-[1.02] mb-5 motion-safe:animate-fade-up"
                                style={{ animationDelay: '80ms' }}
                            >
                                {property.title}
                            </h1>

                            <div
                                className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-stone-600 mb-8 motion-safe:animate-fade-up"
                                style={{ animationDelay: '160ms' }}
                            >
                                <span className="inline-flex items-center gap-1.5">
                                    <MapPin className="w-4 h-4 text-amber-700" aria-hidden="true" />
                                    <span>{property.location}</span>
                                </span>
                                <span className="h-3 w-px bg-stone-300" aria-hidden="true" />
                                <span className="inline-flex items-center gap-1.5">
                                    <Ruler className="w-4 h-4 text-stone-500" aria-hidden="true" />
                                    <span>{property.totalArea}</span>
                                </span>
                                {property.status === 'under-construction' && (
                                    <>
                                        <span className="h-3 w-px bg-stone-300" aria-hidden="true" />
                                        <span className="inline-flex items-center gap-1.5 text-amber-800">
                                            <Timer className="w-4 h-4" aria-hidden="true" />
                                            <span>Under construction</span>
                                        </span>
                                    </>
                                )}
                            </div>

                            <p
                                className="text-lg text-stone-700 leading-relaxed motion-safe:animate-fade-up"
                                style={{ animationDelay: '240ms' }}
                            >
                                {property.description}
                            </p>

                            {/* Features — moved from standalone section into title bar */}
                            {property.features?.length > 0 && (
                                <div
                                    className="mt-8 pt-6 border-t border-stone-200 motion-safe:animate-fade-up"
                                    style={{ animationDelay: '320ms' }}
                                >
                                    <p className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-4">
                                        On this plot
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {property.features.map((feature, index) => (
                                            <span
                                                key={index}
                                                className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700"
                                            >
                                                <Check className="w-3.5 h-3.5 text-amber-700" aria-hidden="true" />
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {property.status === 'under-construction' && property.constructionProgress && (
                                <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-5 motion-safe:animate-fade-up" style={{ animationDelay: '400ms' }}>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-sm font-medium text-stone-900">Construction progress</span>
                                        <span className="text-sm font-mono text-amber-800 tabular-nums">{property.constructionProgress}%</span>
                                    </div>
                                    <div className="w-full bg-white/80 rounded-full h-1.5 overflow-hidden">
                                        <div
                                            className="bg-amber-700 h-full rounded-full transition-all duration-500"
                                            style={{ width: `${property.constructionProgress}%` }}
                                        />
                                    </div>
                                    {property.completionDate && (
                                        <p className="mt-3 text-xs text-stone-600">Estimated completion: {property.completionDate}</p>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Right: price + CTA card. Sticky ONLY works if this wrapper has no transform — keep it clean. */}
                        <aside className="lg:col-span-4">
                            <div className="lg:sticky lg:top-24">
                                <div
                                    className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm motion-safe:animate-fade-up"
                                    style={{ animationDelay: '160ms' }}
                                >
                                <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500 mb-2">
                                    Asking price
                                </p>
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="font-serif text-4xl md:text-5xl font-semibold text-stone-900 tracking-[-0.02em] tabular-nums">
                                        {formatCr(property.price)}
                                    </span>
                                </div>
                                {property.pricePerUnit && property.priceUnit ? (
                                    <p className="text-sm text-stone-500 tabular-nums mb-6">
                                        {formatRupees(property.pricePerUnit)} / {property.priceUnit}
                                    </p>
                                ) : (
                                    <p className="text-sm text-stone-500 tabular-nums mb-6">
                                        {formatRupees(property.price)}
                                    </p>
                                )}

                                <div className="space-y-2.5">
                                    <a
                                        href={whatsappHref}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-stone-900 hover:bg-stone-950 text-white font-medium transition-colors cursor-pointer"
                                    >
                                        <MessageCircle className="w-5 h-5" aria-hidden="true" />
                                        Book a site visit
                                    </a>
                                    <Link
                                        href={`/contact`}
                                        className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-900 font-medium transition-colors cursor-pointer"
                                    >
                                        Send a message
                                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                    </Link>
                                </div>

                                <div className="mt-5 pt-5 border-t border-stone-200 space-y-2.5 text-sm">
                                    <div className="flex items-center justify-between text-stone-600">
                                        <span>Property type</span>
                                        <span className="font-medium text-stone-900">{property.propertyType?.name}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-stone-600">
                                        <span>Total area</span>
                                        <span className="font-medium text-stone-900">{property.totalArea}</span>
                                    </div>
                                    {property.numberOfVillas && (
                                        <div className="flex items-center justify-between text-stone-600">
                                            <span>Villas</span>
                                            <span className="font-medium text-stone-900 tabular-nums">{property.numberOfVillas}</span>
                                        </div>
                                    )}
                                </div>

                                <p className="mt-5 text-xs text-stone-500 leading-relaxed">
                                    Every site visit is accompanied by our team and the verified owner. No brokers in the middle.
                                </p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* ───── Amenities ───── */}
            {amenities.length > 0 && (
                <section className="bg-white py-14 md:py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="max-w-2xl mb-8">
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3">
                                On-ground & around
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-[1.1]">
                                Amenities.
                            </h2>
                        </div>

                        <div className="border-t border-stone-200 pt-8">
                            {availableAmenities.length > 0 && (
                                <div className="mb-10">
                                    <p className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-4">Available</p>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                        {availableAmenities.map((amenity, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2.5 px-4 py-3 bg-white border border-stone-200 rounded-xl motion-safe:animate-fade-up"
                                                style={{ animationDelay: `${Math.min(index, 8) * 50}ms` }}
                                            >
                                                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                                                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                                                </div>
                                                <span className="text-sm font-medium text-stone-900">{amenity.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {unavailableAmenities.length > 0 && (
                                <div>
                                    <p className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-4">Not available</p>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                        {unavailableAmenities.map((amenity, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2.5 px-4 py-3 bg-stone-100 border border-stone-200 rounded-xl"
                                            >
                                                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-stone-200 text-stone-500">
                                                    <X className="w-3.5 h-3.5" aria-hidden="true" />
                                                </div>
                                                <span className="text-sm text-stone-500 line-through decoration-stone-400">{amenity.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* ───── Investment Overview ───── */}
            {investments.length > 0 && (
                <section className="bg-stone-50 py-14 md:py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="max-w-2xl mb-8">
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3">
                                Numbers, not narratives
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-[1.1]">
                                Investment overview.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 border-t border-stone-200 pt-8">
                            {investments.map((detail, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white border border-stone-200 p-7 rounded-2xl overflow-hidden motion-safe:animate-fade-up hover:border-stone-300 transition-all"
                                    style={{ animationDelay: `${Math.min(index, 5) * 80}ms` }}
                                >
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] bg-amber-700 scale-x-0 origin-left transition-transform duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                                    />
                                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-stone-500 mb-3">
                                        {detail.investmentType?.name}
                                    </p>
                                    <div className="font-serif text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight tabular-nums mb-3">
                                        {detail.investmentType?.unit === '%'
                                            ? `${detail.value}%`
                                            : formatRupees(detail.value)}
                                    </div>
                                    <p className="text-sm text-stone-600 leading-relaxed">
                                        {detail.customDescription || detail.investmentType?.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ───── Managed Crops ───── */}
            {crops.length > 0 && (
                <section className="bg-white py-14 md:py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="max-w-2xl mb-8">
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3">
                                What grows here
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-[1.1]">
                                Managed crops.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                            {crops.map((crop, index) => {
                                const annualRevenue = (crop.estimatedYieldPerYear || 0) * (crop.revenuePerUnit || 0) - (crop.maintenanceCost || 0);
                                return (
                                    <article
                                        key={index}
                                        className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 motion-safe:animate-fade-up"
                                        style={{ animationDelay: `${index * 120}ms` }}
                                    >
                                        {crop?.cropType?.image?.url && (
                                            <div className="relative aspect-[16/9]">
                                                <Image
                                                    src={crop.cropType.image.url}
                                                    alt={crop.cropType.name}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                                />
                                            </div>
                                        )}
                                        <div className="p-7">
                                            <div className="flex items-center gap-2.5 mb-3">
                                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                                                    <Sprout className="w-4 h-4" aria-hidden="true" />
                                                </div>
                                                <h3 className="font-serif text-xl font-semibold text-stone-900">
                                                    {crop?.cropType?.name}
                                                </h3>
                                            </div>
                                            <p className="text-sm text-stone-600 leading-relaxed mb-6">
                                                {crop?.customDescription || crop?.cropType?.description}
                                            </p>

                                            <dl className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-stone-200">
                                                <div>
                                                    <dt className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">Annual yield</dt>
                                                    <dd className="font-serif text-xl font-semibold text-stone-900 tabular-nums">
                                                        {crop?.estimatedYieldPerYear?.toLocaleString('en-IN')} <span className="text-sm font-sans font-normal text-stone-500">units</span>
                                                    </dd>
                                                </div>
                                                <div>
                                                    <dt className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">Revenue / unit</dt>
                                                    <dd className="font-serif text-xl font-semibold text-stone-900 tabular-nums">
                                                        {formatRupees(crop?.revenuePerUnit || 0)}
                                                    </dd>
                                                </div>
                                            </dl>

                                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5">
                                                <p className="text-xs font-mono uppercase tracking-wider text-amber-800 mb-1.5">Estimated annual revenue</p>
                                                <p className="font-serif text-3xl font-semibold text-stone-900 tracking-tight tabular-nums">
                                                    {formatRupees(annualRevenue)}
                                                </p>
                                                <p className="text-xs text-stone-600 mt-1.5">
                                                    Net of {formatRupees(crop.maintenanceCost || 0)} maintenance per year.
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-2">Harvest window</p>
                                                <p className="text-sm text-stone-700">
                                                    {crop.specificHarvestingMonths?.join(' · ') ||
                                                        crop.cropType?.harvestingSeasons?.join(' · ') ||
                                                        '—'}
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* ───── Documents ───── */}
            {(property.brochureUrl || property.threeDDesignUrl) && (
                <section className="bg-stone-50 py-14 md:py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="max-w-2xl mb-8">
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3">
                                The paperwork
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-[1.1]">
                                Documents & resources.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 border-t border-stone-200 pt-8">
                            {property.brochureUrl && (
                                <a
                                    href={property.brochureUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 p-5 bg-white border border-stone-200 rounded-2xl hover:border-stone-300 hover:shadow-md transition-all"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-50 border border-stone-200 text-amber-700 group-hover:bg-stone-900 group-hover:text-white group-hover:border-stone-900 transition-colors">
                                        <FileText className="w-5 h-5" aria-hidden="true" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-0.5">PDF</p>
                                        <p className="font-medium text-stone-900">Property brochure</p>
                                    </div>
                                    <DownloadCloud className="w-5 h-5 text-stone-400 group-hover:text-amber-700 group-hover:translate-y-0.5 transition-all" aria-hidden="true" />
                                </a>
                            )}
                            {property.threeDDesignUrl && (
                                <a
                                    href={property.threeDDesignUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 p-5 bg-white border border-stone-200 rounded-2xl hover:border-stone-300 hover:shadow-md transition-all"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-50 border border-stone-200 text-amber-700 group-hover:bg-stone-900 group-hover:text-white group-hover:border-stone-900 transition-colors">
                                        <Home className="w-5 h-5" aria-hidden="true" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-0.5">Interactive</p>
                                        <p className="font-medium text-stone-900">3D property design</p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-amber-700 group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                                </a>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* ───── Dark editorial CTA ───── */}
            <section className="bg-stone-900 text-stone-50 py-20 md:py-24 relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06] mix-blend-overlay" aria-hidden="true" />

                <div className="max-w-4xl mx-auto px-6 text-center relative">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-500 mb-5">
                        Ready to see it?
                    </p>
                    <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-[1.1] mb-5">
                        Let&apos;s walk the plot together.
                    </h2>
                    <p className="text-lg text-stone-300 leading-relaxed mb-10 max-w-2xl mx-auto">
                        We&apos;ll meet you at the gate with the owner and the paperwork. No sales deck, no pressure — just the land itself.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-stone-900 font-medium hover:bg-amber-50 transition-colors cursor-pointer"
                        >
                            <MessageCircle className="w-5 h-5" aria-hidden="true" />
                            Book a site visit
                        </a>
                        <Link
                            href="/properties"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-stone-600 text-stone-50 font-medium hover:bg-stone-800 hover:border-stone-500 transition-colors cursor-pointer"
                        >
                            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                            See more listings
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
