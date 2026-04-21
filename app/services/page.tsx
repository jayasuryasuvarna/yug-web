import React from 'react';
import Link from 'next/link';
import {
    Search,
    Tractor,
    Sprout,
    TrendingUp,
    Users,
    FileText,
    ArrowRight,
    ArrowUpRight,
} from 'lucide-react';


const SERVICES = [
    {
        title: 'Property Curation',
        description:
            'We visit, verify, and photograph every plot before it goes live. You see real ground truth — not a broker\u2019s pitch deck.',
        icon: Search,
        href: '/properties',
        features: ['Site visits', 'Title verification', 'Owner interviews', 'Real photography'],
    },
    {
        title: 'Farm Management',
        description:
            'Bought managed farmland? We run it. Crop planning, planting, irrigation, harvest — and a monthly report in plain English.',
        icon: Tractor,
        href: '/services/farm-management',
        features: ['Soil testing', 'Crop rotation', 'Irrigation', 'Monthly reports'],
    },
    {
        title: 'Crop Cultivation',
        description:
            'Match the right crop to your land, budget, and water availability. Local knowledge over a generic MBA template.',
        icon: Sprout,
        href: '/services/crop-cultivation',
        features: ['Soil health', 'Crop selection', 'Seasonal planning', 'Yield projection'],
    },
    {
        title: 'Investment Advisory',
        description:
            'Narrow fifty listings down to three. Compare by district, crop yield, title cleanliness, and long-term appreciation — all in rupees per acre.',
        icon: TrendingUp,
        href: '/services/property-investment',
        features: ['Property comparison', 'Due diligence', 'Legal review', 'Financial modeling'],
    },
    {
        title: 'Agricultural Consulting',
        description:
            'Already own agricultural land and stuck? We audit the operation on-site and help you course-correct — one season or one decade of neglect.',
        icon: Users,
        href: '/services/agricultural-consulting',
        features: ['On-site audit', 'Crop & soil review', 'Infrastructure check', 'Action plan'],
    },
    {
        title: 'Title & Paperwork',
        description:
            'Title chains, encumbrance certificates, khata, mutation — we handle documentation so your closing isn\u2019t a legal scavenger hunt.',
        icon: FileText,
        href: '/contact',
        features: ['Title chain', 'EC verification', 'Khata / mutation', 'Closing support'],
    },
];


const WHY_US = [
    {
        title: 'Hands-on, not hands-off',
        description:
            'We\u2019re on-site regularly — walking plots, meeting owners, checking crops. Not a drop-ship middleman collecting commission.',
    },
    {
        title: 'One team, full stack',
        description:
            'The same people handle your site visit, paperwork, and harvest report. No handoff fatigue, no 10-email chains to the same answer.',
    },
    {
        title: 'Aligned incentives',
        description:
            'We earn when you\u2019re satisfied — not on sales quotas. No pressure to close the listing nobody else wanted.',
    },
];


export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-stone-50">
            {/* ───── Hero ───── */}
            <section className="relative bg-stone-50 overflow-hidden">
                <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,rgba(251,243,226,0.6),transparent_55%)]" />
                    <div className="absolute inset-0 bg-grain opacity-[0.04] mix-blend-multiply" />
                </div>

                <div className="max-w-7xl mx-auto px-6 pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20">
                    <div className="max-w-3xl">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-5 motion-safe:animate-fade-up">
                            What we do
                        </p>
                        <h1
                            className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] text-stone-900 mb-6 leading-[1.02] motion-safe:animate-fade-up"
                            style={{ animationDelay: '100ms' }}
                        >
                            Listings are
                            <span className="block text-amber-700 italic font-normal">just the start.</span>
                        </h1>
                        <p
                            className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl motion-safe:animate-fade-up"
                            style={{ animationDelay: '200ms' }}
                        >
                            We walk each plot, manage the farm, plan the crop, and verify the paperwork — so the land you buy is the land you were shown.
                        </p>
                    </div>
                </div>
            </section>

            {/* ───── Services grid ───── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-baseline justify-between flex-wrap gap-4 mb-12">
                        <div>
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3 motion-safe:animate-fade-up">
                                Six ways we show up
                            </p>
                            <h2
                                className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-[1.1] motion-safe:animate-fade-up"
                                style={{ animationDelay: '80ms' }}
                            >
                                Our services.
                            </h2>
                        </div>
                        <Link
                            href="/contact"
                            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-stone-700 hover:text-amber-700 transition-colors group motion-safe:animate-fade-up"
                            style={{ animationDelay: '160ms' }}
                        >
                            Not sure which? Talk to us
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                        {SERVICES.map(({ icon: Icon, title, description, features, href }, index) => (
                            <Link
                                key={title}
                                href={href}
                                className="group relative block bg-white border border-stone-200 p-7 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:border-stone-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-900/5 motion-safe:animate-fade-up"
                                style={{ animationDelay: `${220 + index * 80}ms` }}
                            >
                                {/* Top accent line — draws in from left on hover */}
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] bg-amber-700 scale-x-0 origin-left transition-transform duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                                />

                                {/* Numeral */}
                                <span
                                    aria-hidden="true"
                                    className="absolute top-5 right-5 text-xs font-mono text-stone-300 transition-colors duration-300 group-hover:text-amber-700"
                                >
                                    0{index + 1}
                                </span>

                                <div className="flex items-start gap-4 mb-5">
                                    <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700 transition-all duration-300 ease-out group-hover:bg-stone-900 group-hover:text-white group-hover:scale-105">
                                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-6" aria-hidden="true" />
                                    </div>
                                    <div className="min-w-0 pr-6">
                                        <h3 className="font-serif text-xl font-semibold text-stone-900 mb-1.5">{title}</h3>
                                    </div>
                                </div>

                                <p className="text-sm text-stone-600 leading-relaxed mb-5">{description}</p>

                                <ul className="flex flex-wrap gap-1.5 mb-6">
                                    {features.map(feature => (
                                        <li
                                            key={feature}
                                            className="text-xs px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200"
                                        >
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center gap-2 text-sm font-medium text-stone-700 group-hover:text-amber-700 transition-colors">
                                    <span>Explore</span>
                                    <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───── Why YUG ───── */}
            <section className="bg-stone-50 py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-2xl mb-12">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3 motion-safe:animate-fade-up">
                            Why buyers pick us
                        </p>
                        <h2
                            className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-[1.1] motion-safe:animate-fade-up"
                            style={{ animationDelay: '80ms' }}
                        >
                            Three quiet advantages.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8 border-t border-stone-200">
                        {WHY_US.map((item, index) => (
                            <div
                                key={item.title}
                                className="group relative pt-8 motion-safe:animate-fade-up"
                                style={{ animationDelay: `${160 + index * 100}ms` }}
                            >
                                <span
                                    aria-hidden="true"
                                    className="absolute top-0 left-0 w-12 h-[2px] bg-stone-900 transition-all duration-500 ease-out group-hover:w-24 group-hover:bg-amber-700"
                                />
                                <h3 className="font-serif text-xl md:text-2xl font-semibold text-stone-900 mb-3 leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-base text-stone-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───── CTA — dark editorial closing spread ───── */}
            <section className="bg-stone-900 text-stone-50 py-20 md:py-28 relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06] mix-blend-overlay" aria-hidden="true" />

                <div className="max-w-4xl mx-auto px-6 text-center relative">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-500 mb-5 motion-safe:animate-fade-up">
                        Still reading?
                    </p>
                    <h2
                        className="font-serif text-3xl md:text-5xl font-semibold leading-[1.1] mb-6 motion-safe:animate-fade-up"
                        style={{ animationDelay: '80ms' }}
                    >
                        Let&apos;s find you land worth owning.
                    </h2>
                    <p
                        className="text-lg text-stone-300 leading-relaxed mb-10 max-w-2xl mx-auto motion-safe:animate-fade-up"
                        style={{ animationDelay: '160ms' }}
                    >
                        A 15-minute call is usually enough to tell whether we&apos;re the right fit. No sales deck, no pressure.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center motion-safe:animate-fade-up"
                        style={{ animationDelay: '240ms' }}
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-stone-900 font-medium hover:bg-amber-50 transition-colors cursor-pointer"
                        >
                            Talk to our team
                            <ArrowRight className="w-5 h-5" aria-hidden="true" />
                        </Link>
                        <Link
                            href="/properties"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-stone-600 text-stone-50 font-medium hover:bg-stone-800 hover:border-stone-500 transition-colors cursor-pointer"
                        >
                            Browse listings
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
