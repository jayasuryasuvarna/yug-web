import React from 'react';
import Link from 'next/link';
import {
    ChevronRight,
    ArrowRight,
    ArrowLeft,
    MessageCircle,
    MapPin,
    Footprints,
    Handshake,
    ShieldOff,
} from 'lucide-react';


const PRINCIPLES = [
    {
        icon: Footprints,
        title: 'We don\u2019t list what we haven\u2019t walked.',
        description:
            'Every plot on the marketplace has been physically visited, the owner met in person, and the conditions photographed as they are. If we can\u2019t walk it, it doesn\u2019t go live.',
    },
    {
        icon: Handshake,
        title: 'The owner gets paid by you, not by us.',
        description:
            'We don\u2019t take commission from sellers. Our fee is separately agreed with the buyer and stated up front — never tacked onto the plot price, never hidden in a brochure footnote.',
    },
    {
        icon: ShieldOff,
        title: 'We say no when we should.',
        description:
            'If a plot has title issues, a boundary dispute, or an owner we can\u2019t read straight, we decline the listing. A small, honest inventory is more valuable than a noisy mistake.',
    },
];


const WONT_FIND = [
    'No brokers in the middle of your deal',
    'No drone renders passed off as real site photos',
    '"Investment journey" brochures with stock imagery',
    'Sales calls after you\u2019ve said "not yet"',
    'Luxury-villa framing on a farmland marketplace',
    'Hidden fees on closing day',
];


const NUMBERS = [
    { value: '7', label: 'Listings currently on the marketplace' },
    { value: '42', label: 'Plots walked before one goes live' },
    { value: '4', label: 'Locations covered in South Bangalore' },
    { value: '2023', label: 'When we started' },
];


export default function AboutPage() {
    return (
        <main className="min-h-screen bg-stone-50">
            {/* ───── Breadcrumb ───── */}
            <div className="bg-stone-50 border-b border-stone-200/80">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
                    <nav
                        aria-label="Breadcrumb"
                        className="flex items-center gap-1.5 text-xs font-mono text-stone-500 overflow-hidden"
                    >
                        <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3 text-stone-400 flex-shrink-0" aria-hidden="true" />
                        <span className="text-stone-900">About</span>
                    </nav>
                    <Link
                        href="/properties"
                        className="hidden sm:inline-flex items-center gap-1.5 text-sm text-stone-600 hover:text-amber-700 transition-colors group flex-shrink-0"
                    >
                        Browse listings
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                    </Link>
                </div>
            </div>

            {/* ───── Hero ───── */}
            <section className="relative bg-stone-50 overflow-hidden">
                <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,rgba(251,243,226,0.6),transparent_55%)]" />
                    <div className="absolute inset-0 bg-grain opacity-[0.04] mix-blend-multiply" />
                </div>

                <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-20 lg:pt-24 pb-14 md:pb-16">
                    <div className="max-w-3xl">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-5 motion-safe:animate-fade-up">
                            About
                        </p>
                        <h1
                            className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] text-stone-900 mb-6 leading-[1.02] motion-safe:animate-fade-up"
                            style={{ animationDelay: '100ms' }}
                        >
                            Because land-buying
                            <span className="block text-amber-700 italic font-normal">deserves better.</span>
                        </h1>
                        <p
                            className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl motion-safe:animate-fade-up"
                            style={{ animationDelay: '200ms' }}
                        >
                            YUG Estates is a small team walking farmland across South Bangalore. We built this marketplace because we got tired of brokers who hadn&apos;t visited the plot they were selling.
                        </p>
                    </div>
                </div>
            </section>

            {/* ───── Origin story ───── */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
                        <div className="lg:col-span-4">
                            <p
                                className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3 motion-safe:animate-fade-up"
                            >
                                How we got here
                            </p>
                            <h2
                                className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-[1.1] motion-safe:animate-fade-up"
                                style={{ animationDelay: '80ms' }}
                            >
                                The story,
                                <span className="block text-amber-700 italic font-normal">briefly.</span>
                            </h2>
                        </div>

                        <div className="lg:col-span-8 space-y-6">
                            <p
                                className="text-lg text-stone-700 leading-relaxed motion-safe:animate-fade-up"
                                style={{ animationDelay: '160ms' }}
                            >
                                The founder bought a piece of farmland in 2019 from a well-dressed broker who swore he&apos;d walked it. He hadn&apos;t. The plot came with a boundary dispute, two layers of missing paperwork, and an owner who changed his price three times before signing.
                            </p>
                            <p
                                className="text-lg text-stone-700 leading-relaxed motion-safe:animate-fade-up"
                                style={{ animationDelay: '240ms' }}
                            >
                                It took a year to sort out. Somewhere in that year, what started as a regret became a working theory: most land buyers are paying a premium for information someone else is hiding.
                            </p>
                            <p
                                className="text-lg text-stone-700 leading-relaxed motion-safe:animate-fade-up"
                                style={{ animationDelay: '320ms' }}
                            >
                                YUG Estates started in 2023 as the inverse of that experience — every listing walked, every owner met, every price in plain rupees, on our website, for anyone to see. That&apos;s the whole idea. Nothing clever.
                            </p>

                            <div
                                className="pt-6 border-t border-stone-200 motion-safe:animate-fade-up"
                                style={{ animationDelay: '400ms' }}
                            >
                                <p className="text-sm text-stone-500 italic">
                                    — The team is small. Three of us. All of us walk the plots.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ───── Principles ───── */}
            <section className="bg-stone-50 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-2xl mb-10 md:mb-12">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3 motion-safe:animate-fade-up">
                            What we believe
                        </p>
                        <h2
                            className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-[1.1] motion-safe:animate-fade-up"
                            style={{ animationDelay: '80ms' }}
                        >
                            Three principles we don&apos;t break.
                        </h2>
                    </div>

                    <div className="border-t border-stone-200">
                        {PRINCIPLES.map(({ icon: Icon, title, description }, index) => (
                            <div
                                key={title}
                                className="group relative border-b border-stone-200 overflow-hidden motion-safe:animate-fade-up"
                                style={{ animationDelay: `${160 + index * 120}ms` }}
                            >
                                {/* Amber highlighter wash on hover */}
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-amber-50/60 transition-[width] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                                />

                                <div className="relative grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 px-2 md:px-4">
                                    {/* Big italic numeral */}
                                    <div className="col-span-3 md:col-span-2 lg:col-span-1 flex items-start">
                                        <span className="font-serif text-5xl md:text-6xl lg:text-7xl font-light italic leading-none tracking-tight text-stone-300 group-hover:text-amber-700 transition-colors duration-500">
                                            {index + 1}
                                        </span>
                                    </div>

                                    {/* Icon + title + body */}
                                    <div className="col-span-9 md:col-span-9 lg:col-span-10 flex items-start gap-4 md:gap-5">
                                        <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-stone-200 text-amber-700 group-hover:bg-stone-900 group-hover:text-white group-hover:border-stone-900 transition-colors duration-300">
                                            <Icon className="w-5 h-5" aria-hidden="true" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-serif text-xl md:text-2xl font-semibold text-stone-900 mb-2 leading-snug">
                                                {title}
                                            </h3>
                                            <p className="text-base text-stone-600 leading-relaxed max-w-2xl">
                                                {description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───── Numbers ───── */}
            <section className="bg-white py-14 md:py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-2xl mb-10">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3 motion-safe:animate-fade-up">
                            Where we are
                        </p>
                        <h2
                            className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-[1.1] motion-safe:animate-fade-up"
                            style={{ animationDelay: '80ms' }}
                        >
                            The marketplace, in numbers.
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200 border border-stone-200 rounded-2xl overflow-hidden">
                        {NUMBERS.map(({ value, label }, index) => (
                            <div
                                key={label}
                                className="group relative bg-white p-6 md:p-7 motion-safe:animate-fade-up"
                                style={{ animationDelay: `${160 + index * 80}ms` }}
                            >
                                <div className="font-serif text-5xl md:text-6xl font-semibold text-stone-900 tracking-[-0.02em] tabular-nums mb-3 group-hover:text-amber-700 transition-colors duration-500">
                                    {value}
                                </div>
                                <p className="text-sm text-stone-600 leading-snug max-w-[18ch]">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-5 text-xs text-stone-500 font-mono">
                        Updated {new Date().toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}.
                    </p>
                </div>
            </section>

            {/* ───── What you won't find here ───── */}
            <section className="bg-stone-50 py-14 md:py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-2xl mb-10">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3 motion-safe:animate-fade-up">
                            By design
                        </p>
                        <h2
                            className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-[1.1] motion-safe:animate-fade-up"
                            style={{ animationDelay: '80ms' }}
                        >
                            What you won&apos;t find here.
                        </h2>
                    </div>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 border-t border-stone-200 pt-8">
                        {WONT_FIND.map((item, index) => (
                            <li
                                key={item}
                                className="flex items-start gap-4 py-3 border-b border-stone-200/70 last:border-b-0 md:[&:nth-last-child(2)]:border-b-0 motion-safe:animate-fade-up"
                                style={{ animationDelay: `${160 + index * 70}ms` }}
                            >
                                <span
                                    aria-hidden="true"
                                    className="flex-shrink-0 font-mono text-sm text-stone-400 tabular-nums mt-1"
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="text-base text-stone-700 leading-relaxed">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ───── Dark editorial CTA ───── */}
            <section className="bg-stone-900 text-stone-50 py-20 md:py-24 relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06] mix-blend-overlay" aria-hidden="true" />

                <div className="max-w-4xl mx-auto px-6 text-center relative">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-500 mb-5 motion-safe:animate-fade-up">
                        Want to meet the land?
                    </p>
                    <h2
                        className="font-serif text-3xl md:text-5xl font-semibold leading-[1.1] mb-5 motion-safe:animate-fade-up"
                        style={{ animationDelay: '80ms' }}
                    >
                        Come walk a plot with us.
                    </h2>
                    <p
                        className="text-lg text-stone-300 leading-relaxed mb-10 max-w-2xl mx-auto motion-safe:animate-fade-up"
                        style={{ animationDelay: '160ms' }}
                    >
                        The best introduction to who we are is an afternoon on one of our listings. Bring questions. We&apos;ll bring the owner and the paperwork.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center motion-safe:animate-fade-up"
                        style={{ animationDelay: '240ms' }}
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-stone-900 font-medium hover:bg-amber-50 transition-colors cursor-pointer"
                        >
                            <MessageCircle className="w-5 h-5" aria-hidden="true" />
                            Book a site visit
                        </Link>
                        <Link
                            href="/properties"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-stone-600 text-stone-50 font-medium hover:bg-stone-800 hover:border-stone-500 transition-colors cursor-pointer"
                        >
                            <MapPin className="w-4 h-4" aria-hidden="true" />
                            Browse listings
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
