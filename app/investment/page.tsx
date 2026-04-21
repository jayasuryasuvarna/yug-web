import React from 'react';
import Link from 'next/link';
import {
    ChevronRight,
    ArrowRight,
    ArrowLeft,
    MessageCircle,
    TrendingUp,
    Sprout,
    Landmark,
    AlertTriangle,
    BookOpen,
    ShieldAlert,
    CloudRain,
    FileText,
    Timer,
    Fence,
    MapPin,
} from 'lucide-react';


const NUMBERS = [
    {
        value: '10–14%',
        label: 'CAGR',
        detail: 'Peri-urban Bangalore farmland appreciation, 2022–2024',
        source: 'Knight Frank India (2024)',
    },
    {
        value: '6–10%',
        label: 'Annual',
        detail: 'Kanakapura, Chikkaballapur, Malur appreciation range',
        source: 'Tracked transaction data, 2021–2024',
    },
    {
        value: '0%',
        label: 'Capital gains',
        detail: 'On rural agricultural land sale (when it qualifies)',
        source: 'Income Tax Act, Section 2(14)(iii)',
    },
    {
        value: '3–6%',
        label: 'Yield income',
        detail: 'Additional cash from managed crops — highly variable',
        source: 'Our own tracked plots, 2023–2025',
    },
];


const RETURN_SOURCES = [
    {
        icon: TrendingUp,
        title: 'Land appreciation',
        description:
            'The main driver. Peri-urban Bangalore has seen 10–14% annual appreciation over 2022–2024, driven by connectivity improvements (NICE road, PRR, airport corridor) and institutional buyer demand. Historically the steadiest leg — but past performance isn\u2019t a promise.',
    },
    {
        icon: Sprout,
        title: 'Crop yield or lease income',
        description:
            'Secondary. Managed plots yield 3–6% cash income depending on crop, water availability, and monsoon. Mango, coconut, and arecanut perform best in this belt. Some investors lease to local farmers for a fixed annual rent (₹25,000–₹50,000 per acre).',
    },
    {
        icon: Landmark,
        title: 'Tax treatment',
        description:
            'Structural, not a percentage. Rural agricultural land is not a capital asset under the Income Tax Act, so sale proceeds aren\u2019t subject to capital gains tax (Section 2(14)(iii)). Agricultural income is exempt under Section 10(1). Urban agricultural land has different rules — covered below.',
    },
];


const WONT_CLAIM = [
    {
        claim: '"Assured returns of X% annually"',
        reality:
            'Prohibited by SEBI under Collective Investment Scheme rules unless the product is SEBI-registered. Any broker promising fixed annual returns on farmland without a registered CIS is either confused or breaking the law.',
    },
    {
        claim: '"Tax-free income from day one"',
        reality:
            'Agricultural income is exempt under Section 10(1), but it affects your tax slab on non-agri income via partial integration. Capital gains on urban agricultural land are taxable. "Tax-free" without the qualifier is misleading.',
    },
    {
        claim: '"Guaranteed 20% appreciation"',
        reality:
            'Historical averages are not future guarantees. Markets correct. We show you past data with citations; what happens next is nobody\u2019s promise — including ours.',
    },
    {
        claim: '"Zero risk, hands-off income"',
        reality:
            'Farmland is less volatile than equities but has its own failure modes: title disputes, monsoon failure, liquidity. We walk through all of them below, not after the sale.',
    },
];


const RISKS = [
    {
        icon: FileText,
        title: 'Title disputes',
        description:
            'We verify the title chain and encumbrance certificate for every listing. Undiscovered issues still surface in roughly 2% of deals — family claims, old mortgages, or missing mutation records. Budget for a CA and a lawyer, not just the sale price.',
    },
    {
        icon: CloudRain,
        title: 'Monsoon and yield variability',
        description:
            'Crop yield income fluctuates 30–50% year to year in Karnataka. A bad monsoon, a pest outbreak, or a price crash in the nearest mandi can flip a profitable plot into break-even for a season.',
    },
    {
        icon: ShieldAlert,
        title: 'Regulatory changes',
        description:
            'Karnataka\u2019s land conversion rules and farmer-buyer requirements tighten every few years. Rules that let you buy today may not apply tomorrow. This rarely invalidates past purchases, but can affect resale.',
    },
    {
        icon: Timer,
        title: 'Liquidity',
        description:
            'Farmland typically takes 3–12 months to sell, longer than apartments or plots in gated layouts. If you might need the money back quickly, this isn\u2019t the right asset class.',
    },
    {
        icon: Fence,
        title: 'Boundary and encroachment',
        description:
            'Common in remote plots. Fencing, survey sketch reconciliation, and quarterly site visits matter — especially on unfenced land neighbouring active farms.',
    },
    {
        icon: TrendingUp,
        title: 'Price stagnation',
        description:
            'Even appreciating markets have 2–3 year flat periods. Your 10-year average may look great; your 3-year average in the wrong window may not.',
    },
];


export default function InvestmentGuidePage() {
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
                        <span className="text-stone-900">Investment guide</span>
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
                            Investment guide
                        </p>
                        <h1
                            className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] text-stone-900 mb-6 leading-[1.02] motion-safe:animate-fade-up"
                            style={{ animationDelay: '100ms' }}
                        >
                            The honest math
                            <span className="block text-amber-700 italic font-normal">on farmland.</span>
                        </h1>
                        <p
                            className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl motion-safe:animate-fade-up"
                            style={{ animationDelay: '200ms' }}
                        >
                            A straight-talk guide to buying managed farmland in South Bangalore — what the returns actually look like, what the paperwork means, and what can go wrong. We don&apos;t promise what we can&apos;t deliver.
                        </p>

                        <div
                            className="mt-8 inline-flex items-start gap-3 bg-white/80 border border-amber-200 rounded-xl px-4 py-3 text-sm motion-safe:animate-fade-up"
                            style={{ animationDelay: '300ms' }}
                        >
                            <BookOpen className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <p className="text-stone-700 leading-relaxed">
                                <span className="font-medium text-stone-900">Reading time ~ 6 min.</span> All figures cited with sources. Not tax or investment advice.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ───── The numbers ───── */}
            <section className="bg-white py-14 md:py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-2xl mb-10">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3 motion-safe:animate-fade-up">
                            What the data says
                        </p>
                        <h2
                            className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-[1.1] motion-safe:animate-fade-up"
                            style={{ animationDelay: '80ms' }}
                        >
                            The numbers, as they are.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200 rounded-2xl overflow-hidden">
                        {NUMBERS.map(({ value, label, detail, source }, index) => (
                            <div
                                key={source}
                                className="group relative bg-white p-6 md:p-7 motion-safe:animate-fade-up"
                                style={{ animationDelay: `${160 + index * 80}ms` }}
                            >
                                <div className="font-serif text-4xl md:text-5xl font-semibold text-stone-900 tracking-[-0.02em] tabular-nums mb-1 group-hover:text-amber-700 transition-colors duration-500">
                                    {value}
                                </div>
                                <p className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-3">{label}</p>
                                <p className="text-sm text-stone-700 leading-snug mb-3">{detail}</p>
                                <p className="text-xs text-stone-500 italic">Source: {source}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-sm text-stone-500 leading-relaxed max-w-3xl">
                        These are <em>ranges</em>, not promises. Your return depends on the plot, the crop, the monsoon, the macro cycle, and how long you hold. We show ranges so you can stress-test your own assumptions.
                    </p>
                </div>
            </section>

            {/* ───── How returns work ───── */}
            <section className="bg-stone-50 py-14 md:py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-2xl mb-10 md:mb-12">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3 motion-safe:animate-fade-up">
                            Where the money comes from
                        </p>
                        <h2
                            className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-[1.1] motion-safe:animate-fade-up"
                            style={{ animationDelay: '80ms' }}
                        >
                            Three sources, in order of likelihood.
                        </h2>
                    </div>

                    <div className="border-t border-stone-200">
                        {RETURN_SOURCES.map(({ icon: Icon, title, description }, index) => (
                            <div
                                key={title}
                                className="group relative border-b border-stone-200 overflow-hidden motion-safe:animate-fade-up"
                                style={{ animationDelay: `${160 + index * 120}ms` }}
                            >
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-amber-50/60 transition-[width] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                                />
                                <div className="relative grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 px-2 md:px-4">
                                    <div className="col-span-3 md:col-span-2 lg:col-span-1 flex items-start">
                                        <span className="font-serif text-5xl md:text-6xl lg:text-7xl font-light italic leading-none tracking-tight text-stone-300 group-hover:text-amber-700 transition-colors duration-500">
                                            {index + 1}
                                        </span>
                                    </div>
                                    <div className="col-span-9 md:col-span-10 lg:col-span-11 flex items-start gap-4 md:gap-5">
                                        <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-stone-200 text-amber-700 group-hover:bg-stone-900 group-hover:text-white group-hover:border-stone-900 transition-colors duration-300">
                                            <Icon className="w-5 h-5" aria-hidden="true" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-serif text-xl md:text-2xl font-semibold text-stone-900 mb-2 leading-snug">
                                                {title}
                                            </h3>
                                            <p className="text-base text-stone-600 leading-relaxed max-w-3xl">
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

            {/* ───── What we won't claim ───── */}
            <section className="bg-white py-14 md:py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-2xl mb-10">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3 motion-safe:animate-fade-up">
                            Straight talk
                        </p>
                        <h2
                            className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-[1.1] motion-safe:animate-fade-up"
                            style={{ animationDelay: '80ms' }}
                        >
                            What we won&apos;t claim.
                        </h2>
                        <p className="mt-4 text-base text-stone-600 leading-relaxed">
                            Four things you&apos;ll hear from brochures and Instagram ads — and what the regulators or the fine print actually say.
                        </p>
                    </div>

                    <div className="border-t border-stone-200">
                        {WONT_CLAIM.map(({ claim, reality }, index) => (
                            <div
                                key={claim}
                                className="grid grid-cols-12 gap-4 md:gap-8 py-7 md:py-8 px-2 md:px-4 border-b border-stone-200 motion-safe:animate-fade-up"
                                style={{ animationDelay: `${160 + index * 90}ms` }}
                            >
                                <div className="col-span-12 md:col-span-4">
                                    <p className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-2">
                                        <span className="tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                                        <span className="ml-2">The claim</span>
                                    </p>
                                    <p className="font-serif text-lg md:text-xl font-semibold text-stone-900 leading-snug">
                                        {claim}
                                    </p>
                                </div>
                                <div className="col-span-12 md:col-span-8 md:pl-6 md:border-l border-stone-200">
                                    <p className="text-xs font-mono uppercase tracking-wider text-amber-700 mb-2">The reality</p>
                                    <p className="text-base text-stone-700 leading-relaxed">{reality}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───── Tax treatment ───── */}
            <section className="bg-stone-50 py-14 md:py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
                        <div className="lg:col-span-4">
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3 motion-safe:animate-fade-up">
                                The fine print
                            </p>
                            <h2
                                className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-[1.1] motion-safe:animate-fade-up"
                                style={{ animationDelay: '80ms' }}
                            >
                                Tax treatment,
                                <span className="block text-amber-700 italic font-normal">plainly.</span>
                            </h2>
                        </div>

                        <div className="lg:col-span-8 space-y-6">
                            <div
                                className="motion-safe:animate-fade-up"
                                style={{ animationDelay: '160ms' }}
                            >
                                <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">Rural vs urban — the distinction that matters.</h3>
                                <p className="text-base text-stone-700 leading-relaxed">
                                    Under <span className="font-mono text-sm bg-stone-100 px-1.5 py-0.5 rounded">Section 2(14)(iii)</span> of the Income Tax Act, rural agricultural land is not a "capital asset" at all. That means sale proceeds aren&apos;t subject to capital gains tax. "Rural" has a specific definition based on distance from municipal limits and population — most of our South Bangalore peri-urban listings qualify, but you should verify for your specific plot.
                                </p>
                            </div>

                            <div
                                className="motion-safe:animate-fade-up"
                                style={{ animationDelay: '240ms' }}
                            >
                                <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">Urban agricultural land: Section 54B applies.</h3>
                                <p className="text-base text-stone-700 leading-relaxed">
                                    If your land sits inside municipal limits, it&apos;s treated as a capital asset. Short-term gains (≤ 2 years) are taxed at your slab rate. Long-term gains (&gt; 2 years) are taxed at 20% with indexation. <span className="font-mono text-sm bg-stone-100 px-1.5 py-0.5 rounded">Section 54B</span> lets you claim exemption if you used the land for agriculture for 2+ years and reinvest the gains into new agricultural land within 2 years.
                                </p>
                            </div>

                            <div
                                className="motion-safe:animate-fade-up"
                                style={{ animationDelay: '320ms' }}
                            >
                                <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">Agricultural income is exempt — with an asterisk.</h3>
                                <p className="text-base text-stone-700 leading-relaxed">
                                    Under <span className="font-mono text-sm bg-stone-100 px-1.5 py-0.5 rounded">Section 10(1)</span>, agricultural income doesn&apos;t attract income tax directly. But if your <em>non</em>-agricultural income is above the basic exemption limit, agricultural income is aggregated for rate-determination purposes — called "partial integration." In practice: your effective slab on non-agri income goes up. Not tax-free in the way a marketing brochure implies.
                                </p>
                            </div>

                            <div
                                className="mt-4 flex items-start gap-3 p-5 bg-amber-50 border border-amber-200 rounded-xl motion-safe:animate-fade-up"
                                style={{ animationDelay: '400ms' }}
                            >
                                <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                                <p className="text-sm text-stone-800 leading-relaxed">
                                    <span className="font-semibold">Not tax advice.</span> Indian tax code is edge-case heavy and changes annually. Talk to a chartered accountant before you sign. We can introduce you to one who does this full-time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ───── Risks ───── */}
            <section className="bg-white py-14 md:py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-2xl mb-10">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3 motion-safe:animate-fade-up">
                            The risks
                        </p>
                        <h2
                            className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-[1.1] motion-safe:animate-fade-up"
                            style={{ animationDelay: '80ms' }}
                        >
                            What can go wrong.
                        </h2>
                        <p className="mt-4 text-base text-stone-600 leading-relaxed">
                            Not hypothetical. These are the failure modes we&apos;ve seen — in our own deals and our clients&apos;.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 border-t border-stone-200 pt-8">
                        {RISKS.map(({ icon: Icon, title, description }, index) => (
                            <div
                                key={title}
                                className="flex items-start gap-4 p-5 rounded-2xl border border-stone-200 bg-white hover:border-stone-300 hover:shadow-md transition-all motion-safe:animate-fade-up"
                                style={{ animationDelay: `${160 + Math.min(index, 5) * 70}ms` }}
                            >
                                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                                    <Icon className="w-5 h-5" aria-hidden="true" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-serif text-lg font-semibold text-stone-900 mb-1.5 leading-snug">{title}</h3>
                                    <p className="text-sm text-stone-600 leading-relaxed">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───── Dark editorial CTA ───── */}
            <section className="bg-stone-900 text-stone-50 py-20 md:py-24 relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06] mix-blend-overlay" aria-hidden="true" />

                <div className="max-w-4xl mx-auto px-6 text-center relative">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-500 mb-5 motion-safe:animate-fade-up">
                        When you&apos;re ready
                    </p>
                    <h2
                        className="font-serif text-3xl md:text-5xl font-semibold leading-[1.1] mb-5 motion-safe:animate-fade-up"
                        style={{ animationDelay: '80ms' }}
                    >
                        Let&apos;s do the math on one plot.
                    </h2>
                    <p
                        className="text-lg text-stone-300 leading-relaxed mb-10 max-w-2xl mx-auto motion-safe:animate-fade-up"
                        style={{ animationDelay: '160ms' }}
                    >
                        Pick any listing — we&apos;ll run the actual numbers with you. Appreciation range, yield range, tax treatment, conservative and optimistic scenarios. Written down. No pressure to commit after.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center motion-safe:animate-fade-up"
                        style={{ animationDelay: '240ms' }}
                    >
                        <Link
                            href="/properties"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-stone-900 font-medium hover:bg-amber-50 transition-colors cursor-pointer"
                        >
                            <MapPin className="w-5 h-5" aria-hidden="true" />
                            Browse listings
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-stone-600 text-stone-50 font-medium hover:bg-stone-800 hover:border-stone-500 transition-colors cursor-pointer"
                        >
                            <MessageCircle className="w-5 h-5" aria-hidden="true" />
                            Book a 30-min call
                        </Link>
                    </div>

                    <p className="mt-10 text-xs text-stone-400 max-w-xl mx-auto leading-relaxed">
                        Investment guide for informational purposes only. Not tax, legal, or financial advice. Past performance is not a guarantee of future returns. Consult your CA and lawyer before any real-estate transaction.
                    </p>
                </div>
            </section>
        </main>
    );
}
