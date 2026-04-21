import React from 'react';
import { MapPin, Clock, Phone, Mail, MessageCircle, ArrowDown, Zap } from 'lucide-react';
import ContactSection from '../components/contact-form';
import { CONTACT } from '@/lib/constants';


const FAQS = [
    {
        question: 'Can I visit the property before buying?',
        answer:
            'Yes, always. We walk every plot with you — often twice. Evening light shows different things from morning light, and we want you to see both.',
    },
    {
        question: 'What paperwork do you actually handle?',
        answer:
            'Title chain, encumbrance certificate, khata, mutation, and the RTC. We don\u2019t replace your lawyer — we do the groundwork so your lawyer has clean inputs.',
    },
    {
        question: 'Do I pay brokerage?',
        answer:
            'No. You pay the owner directly. Our fee is separately agreed — transparent, on our side, never added to your plot price.',
    },
    {
        question: 'How do you verify a listing before it goes live?',
        answer:
            'Every plot is walked by our team. We meet the owner, check the title chain, measure the boundary against the survey sketch, and photograph actual conditions. No drone renders, no stock imagery.',
    },
    {
        question: 'Can I get a second opinion on a plot I found elsewhere?',
        answer:
            'Yes — that\u2019s our Agricultural Consulting service. We visit, audit, and give you an honest take, even if the answer is "don\u2019t buy this one."',
    },
    {
        question: 'What happens after I buy?',
        answer:
            'If you want us to manage the farm, we take over. If you\u2019re self-managing, we step out of the way. Either way, your paperwork and title records stay accessible to you — forever.',
    },
];


export default function ContactPage() {
    return (
        <main className="min-h-screen bg-stone-50">
            {/* ───── Hero ───── */}
            <section className="relative bg-stone-50 overflow-hidden">
                <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,rgba(251,243,226,0.6),transparent_55%)]" />
                    <div className="absolute inset-0 bg-grain opacity-[0.04] mix-blend-multiply" />
                </div>

                <div className="max-w-7xl mx-auto px-6 pt-20 md:pt-28 lg:pt-32 pb-14 md:pb-16">
                    <div className="max-w-3xl">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-5 motion-safe:animate-fade-up">
                            Contact
                        </p>
                        <h1
                            className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] text-stone-900 mb-6 leading-[1.02] motion-safe:animate-fade-up"
                            style={{ animationDelay: '100ms' }}
                        >
                            Let&apos;s meet the
                            <span className="block text-amber-700 italic font-normal">land.</span>
                        </h1>
                        <p
                            className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mb-10 motion-safe:animate-fade-up"
                            style={{ animationDelay: '200ms' }}
                        >
                            Every serious conversation we have starts on the ground, not over email. Book a site visit, send us a photo of a listing you&apos;re considering, or just say hello.
                        </p>

                        {/* Quick-jump links — WhatsApp elevated as the primary "fast" option */}
                        <div
                            className="flex flex-wrap items-center gap-3 motion-safe:animate-fade-up"
                            style={{ animationDelay: '300ms' }}
                        >
                            <a
                                href={CONTACT.whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-950 text-white text-sm font-medium transition-colors cursor-pointer"
                            >
                                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                                <span>WhatsApp us</span>
                                <span className="inline-flex items-center gap-1 text-xs text-amber-300 ml-1">
                                    <Zap className="w-3 h-3" aria-hidden="true" />
                                    <span>Fastest</span>
                                </span>
                            </a>
                            <a
                                href={CONTACT.phoneUrl}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-900 text-sm font-medium transition-colors cursor-pointer"
                            >
                                <Phone className="w-4 h-4" aria-hidden="true" />
                                <span>Call</span>
                            </a>
                            <a
                                href={CONTACT.emailUrl}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-900 text-sm font-medium transition-colors cursor-pointer"
                            >
                                <Mail className="w-4 h-4" aria-hidden="true" />
                                <span>Email</span>
                            </a>
                            <a
                                href="#contact-form"
                                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-stone-600 hover:text-amber-700 text-sm font-medium transition-colors group"
                            >
                                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
                                <span>Or use the form</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ───── Contact form (existing) ───── */}
            <div id="contact-form" className="scroll-mt-20">
                <ContactSection />
            </div>

            {/* ───── FAQ ───── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="max-w-2xl mb-12">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3 motion-safe:animate-fade-up">
                            Questions we get the most
                        </p>
                        <h2
                            className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-[1.1] motion-safe:animate-fade-up"
                            style={{ animationDelay: '80ms' }}
                        >
                            Before you ask.
                        </h2>
                    </div>

                    <div className="border-t border-stone-200">
                        {FAQS.map((faq, index) => (
                            <div
                                key={faq.question}
                                className="group relative border-b border-stone-200 overflow-hidden motion-safe:animate-fade-up"
                                style={{ animationDelay: `${160 + index * 90}ms` }}
                            >
                                {/* Amber highlighter wash on hover */}
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-amber-50/60 transition-[width] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                                />

                                <div className="relative grid grid-cols-12 gap-4 md:gap-8 py-7 md:py-8 px-2 md:px-4">
                                    {/* Numeral */}
                                    <div className="col-span-2 md:col-span-1 flex items-start">
                                        <span className="font-mono text-sm font-medium text-stone-400 group-hover:text-amber-700 transition-colors">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    {/* Question + answer */}
                                    <div className="col-span-10 md:col-span-11">
                                        <h3 className="font-serif text-lg md:text-xl font-semibold text-stone-900 mb-2 leading-snug">
                                            {faq.question}
                                        </h3>
                                        <p className="text-base text-stone-600 leading-relaxed max-w-3xl">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p
                        className="mt-8 text-sm text-stone-500 motion-safe:animate-fade-up"
                        style={{ animationDelay: '900ms' }}
                    >
                        Didn&apos;t find what you were looking for?{' '}
                        <a href="#contact-form" className="text-amber-700 hover:text-amber-800 underline underline-offset-4 decoration-stone-300 hover:decoration-amber-700 transition-colors">
                            Send us the question directly
                        </a>
                        .
                    </p>
                </div>
            </section>

            {/* ───── Office & Hours ───── */}
            <section className="bg-stone-50 py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-2xl mb-12">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3 motion-safe:animate-fade-up">
                            Visit us
                        </p>
                        <h2
                            className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-[1.1] motion-safe:animate-fade-up"
                            style={{ animationDelay: '80ms' }}
                        >
                            Drop by the office.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 md:gap-16 border-t border-stone-200 pt-12">
                        {/* Address block */}
                        <div
                            className="motion-safe:animate-fade-up"
                            style={{ animationDelay: '160ms' }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                                    <MapPin className="w-5 h-5" aria-hidden="true" />
                                </div>
                                <h3 className="font-serif text-xl font-semibold text-stone-900">Main office</h3>
                            </div>
                            <address className="not-italic space-y-5 text-stone-700">
                                <p className="text-base leading-relaxed">
                                    {CONTACT.address.line1}<br />
                                    {CONTACT.address.line2}
                                </p>
                                <div className="space-y-3 pt-2 border-t border-stone-200">
                                    <a
                                        href={CONTACT.phoneUrl}
                                        className="flex items-center gap-3 text-stone-700 hover:text-amber-700 transition-colors group"
                                    >
                                        <Phone className="w-4 h-4 text-stone-500 group-hover:text-amber-700 transition-colors" aria-hidden="true" />
                                        <span>{CONTACT.phone}</span>
                                    </a>
                                    <a
                                        href={CONTACT.emailUrl}
                                        className="flex items-center gap-3 text-stone-700 hover:text-amber-700 transition-colors group"
                                    >
                                        <Mail className="w-4 h-4 text-stone-500 group-hover:text-amber-700 transition-colors" aria-hidden="true" />
                                        <span>{CONTACT.email}</span>
                                    </a>
                                    <a
                                        href={CONTACT.whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-stone-700 hover:text-amber-700 transition-colors group"
                                    >
                                        <MessageCircle className="w-4 h-4 text-stone-500 group-hover:text-amber-700 transition-colors" aria-hidden="true" />
                                        <span>WhatsApp (fastest for a quick question)</span>
                                    </a>
                                </div>
                            </address>
                        </div>

                        {/* Hours block */}
                        <div
                            className="motion-safe:animate-fade-up"
                            style={{ animationDelay: '260ms' }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                                    <Clock className="w-5 h-5" aria-hidden="true" />
                                </div>
                                <h3 className="font-serif text-xl font-semibold text-stone-900">Hours</h3>
                            </div>
                            <dl className="divide-y divide-stone-200 border-y border-stone-200">
                                {CONTACT.hours.map(({ day, time }) => (
                                    <div key={day} className="flex items-center justify-between py-3.5">
                                        <dt className="text-stone-900 font-medium">{day}</dt>
                                        <dd className="text-stone-600 font-mono text-sm">{time}</dd>
                                    </div>
                                ))}
                            </dl>
                            <p className="mt-5 text-sm text-stone-500">
                                Walk-ins welcome during office hours. For site visits, please call ahead so we can line up the owner.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
