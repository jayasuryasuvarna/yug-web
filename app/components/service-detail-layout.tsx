import React from 'react';
import Link from 'next/link';
import {
    ChevronRight,
    ArrowRight,
    ArrowLeft,
    MessageCircle,
    ArrowUpRight,
    type LucideIcon,
} from 'lucide-react';
import { whatsappLink } from '@/lib/constants';

interface IncludedItem {
    icon: LucideIcon;
    label: string;
    description?: string;
}

interface ProcessStep {
    title: string;
    description: string;
}

interface RelatedLink {
    icon: LucideIcon;
    title: string;
    description: string;
    href: string;
}

export interface ServiceDetailLayoutProps {
    serviceNumber: string;
    breadcrumb: string;
    eyebrow: string;
    headline: string;
    headlineItalic: string;
    sub: string;
    whatsIncluded: IncludedItem[];
    process: ProcessStep[];
    related: RelatedLink[];
    ctaHeadline: string;
    ctaSub: string;
    whatsappMessage?: string;
}

export default function ServiceDetailLayout({
    serviceNumber,
    breadcrumb,
    eyebrow,
    headline,
    headlineItalic,
    sub,
    whatsIncluded,
    process,
    related,
    ctaHeadline,
    ctaSub,
    whatsappMessage,
}: ServiceDetailLayoutProps) {
    const waHref = whatsappLink(
        whatsappMessage || `Hi, I'd like to learn more about your ${breadcrumb.toLowerCase()} service.`
    );

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
                        <Link href="/services" className="hover:text-amber-700 transition-colors">Services</Link>
                        <ChevronRight className="w-3 h-3 text-stone-400 flex-shrink-0" aria-hidden="true" />
                        <span className="text-stone-900 truncate">{breadcrumb}</span>
                    </nav>
                    <Link
                        href="/services"
                        className="hidden sm:inline-flex items-center gap-1.5 text-sm text-stone-600 hover:text-amber-700 transition-colors group flex-shrink-0"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" aria-hidden="true" />
                        All services
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
                            <span className="font-mono mr-2 tabular-nums">{serviceNumber}</span>
                            <span className="text-stone-400">·</span>
                            <span className="ml-2">{eyebrow}</span>
                        </p>
                        <h1
                            className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] text-stone-900 mb-6 leading-[1.02] motion-safe:animate-fade-up"
                            style={{ animationDelay: '100ms' }}
                        >
                            {headline}
                            <span className="block text-amber-700 italic font-normal">{headlineItalic}</span>
                        </h1>
                        <p
                            className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl motion-safe:animate-fade-up"
                            style={{ animationDelay: '200ms' }}
                        >
                            {sub}
                        </p>
                    </div>
                </div>
            </section>

            {/* ───── What's included ───── */}
            <section className="bg-white py-14 md:py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-2xl mb-8">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3 motion-safe:animate-fade-up">
                            What you get
                        </p>
                        <h2
                            className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-[1.1] motion-safe:animate-fade-up"
                            style={{ animationDelay: '80ms' }}
                        >
                            What&apos;s included.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 border-t border-stone-200 pt-8">
                        {whatsIncluded.map(({ icon: Icon, label, description }, index) => (
                            <div
                                key={label}
                                className="group flex items-start gap-4 p-5 rounded-2xl border border-stone-200 bg-white hover:border-stone-300 hover:shadow-md transition-all motion-safe:animate-fade-up"
                                style={{ animationDelay: `${120 + Math.min(index, 5) * 70}ms` }}
                            >
                                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
                                    <Icon className="w-5 h-5" aria-hidden="true" />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-medium text-stone-900 mb-1 leading-snug">{label}</p>
                                    {description && (
                                        <p className="text-sm text-stone-600 leading-relaxed">{description}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───── How it works ───── */}
            <section className="bg-stone-50 py-14 md:py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-2xl mb-10 md:mb-12">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3 motion-safe:animate-fade-up">
                            The process
                        </p>
                        <h2
                            className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-[1.1] motion-safe:animate-fade-up"
                            style={{ animationDelay: '80ms' }}
                        >
                            How it works.
                        </h2>
                    </div>

                    <div className="border-t border-stone-200">
                        {process.map((step, index) => (
                            <div
                                key={step.title}
                                className="group relative border-b border-stone-200 overflow-hidden motion-safe:animate-fade-up"
                                style={{ animationDelay: `${160 + index * 120}ms` }}
                            >
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-amber-50/60 transition-[width] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                                />
                                <div className="relative grid grid-cols-12 gap-4 md:gap-8 py-7 md:py-8 px-2 md:px-4">
                                    <div className="col-span-3 md:col-span-2 lg:col-span-1 flex items-start">
                                        <span className="font-serif text-5xl md:text-6xl lg:text-7xl font-light italic leading-none tracking-tight text-stone-300 group-hover:text-amber-700 transition-colors duration-500">
                                            {index + 1}
                                        </span>
                                    </div>
                                    <div className="col-span-9 md:col-span-10 lg:col-span-11">
                                        <h3 className="font-serif text-xl md:text-2xl font-semibold text-stone-900 mb-2 leading-snug">
                                            {step.title}
                                        </h3>
                                        <p className="text-base text-stone-600 leading-relaxed max-w-2xl">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───── Related services ───── */}
            {related.length > 0 && (
                <section className="bg-white py-14 md:py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex items-baseline justify-between flex-wrap gap-4 mb-8">
                            <div>
                                <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3 motion-safe:animate-fade-up">
                                    Pairs well with
                                </p>
                                <h2
                                    className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-[1.1] motion-safe:animate-fade-up"
                                    style={{ animationDelay: '80ms' }}
                                >
                                    Related services.
                                </h2>
                            </div>
                            <Link
                                href="/services"
                                className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-stone-700 hover:text-amber-700 transition-colors group motion-safe:animate-fade-up"
                                style={{ animationDelay: '160ms' }}
                            >
                                See all services
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                            {related.map(({ icon: Icon, title, description, href }, index) => (
                                <Link
                                    key={title}
                                    href={href}
                                    className="group relative block bg-white border border-stone-200 p-6 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:border-stone-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-900/5 motion-safe:animate-fade-up"
                                    style={{ animationDelay: `${220 + index * 80}ms` }}
                                >
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] bg-amber-700 scale-x-0 origin-left transition-transform duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                                    />
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700 transition-all duration-300 ease-out group-hover:bg-stone-900 group-hover:text-white group-hover:scale-105">
                                            <Icon className="w-5 h-5" aria-hidden="true" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-serif text-xl font-semibold text-stone-900 mb-1.5">{title}</h3>
                                            <p className="text-sm text-stone-600 leading-relaxed mb-3">{description}</p>
                                            <div className="flex items-center gap-1.5 text-sm font-medium text-stone-700 group-hover:text-amber-700 transition-colors">
                                                <span>Explore</span>
                                                <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ───── Dark editorial CTA ───── */}
            <section className="bg-stone-900 text-stone-50 py-20 md:py-24 relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06] mix-blend-overlay" aria-hidden="true" />

                <div className="max-w-4xl mx-auto px-6 text-center relative">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-500 mb-5 motion-safe:animate-fade-up">
                        Ready when you are
                    </p>
                    <h2
                        className="font-serif text-3xl md:text-5xl font-semibold leading-[1.1] mb-5 motion-safe:animate-fade-up"
                        style={{ animationDelay: '80ms' }}
                    >
                        {ctaHeadline}
                    </h2>
                    <p
                        className="text-lg text-stone-300 leading-relaxed mb-10 max-w-2xl mx-auto motion-safe:animate-fade-up"
                        style={{ animationDelay: '160ms' }}
                    >
                        {ctaSub}
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center motion-safe:animate-fade-up"
                        style={{ animationDelay: '240ms' }}
                    >
                        <a
                            href={waHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-stone-900 font-medium hover:bg-amber-50 transition-colors cursor-pointer"
                        >
                            <MessageCircle className="w-5 h-5" aria-hidden="true" />
                            Talk to us on WhatsApp
                        </a>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-stone-600 text-stone-50 font-medium hover:bg-stone-800 hover:border-stone-500 transition-colors cursor-pointer"
                        >
                            Send a message
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
