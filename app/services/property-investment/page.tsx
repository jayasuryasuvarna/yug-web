import {
    Search,
    Scale,
    FileText,
    LineChart,
    MapPin,
    MessageSquare,
    Footprints,
    FileSignature,
} from 'lucide-react';
import ServiceDetailLayout from '@/app/components/service-detail-layout';

export default function PropertyInvestmentPage() {
    return (
        <ServiceDetailLayout
            serviceNumber="04"
            breadcrumb="Investment Advisory"
            eyebrow="Service"
            headline="Narrow fifty listings"
            headlineItalic="down to three."
            sub="We help you decide which plot is worth your money. Compare across districts, crop yield potential, title cleanliness, and long-term appreciation — every number in rupees per acre, written down, not pitched."
            whatsIncluded={[
                { icon: Search, label: 'Shortlist of 3-5 vetted plots', description: 'From our marketplace and external listings we\u2019ve personally walked.' },
                { icon: Scale, label: 'Side-by-side comparison', description: 'Price, area, water access, yield potential, and appreciation — same page.' },
                { icon: FileText, label: 'Title & paperwork review', description: 'Title chain, encumbrance certificate, and khata/mutation status for each plot.' },
                { icon: LineChart, label: 'Financial model per plot', description: '10-year projection: break-even, annual yield, appreciation range, and tax.' },
                { icon: MapPin, label: 'Visits scheduled together', description: 'We accompany you on 2-3 site visits. You ask anything; we answer straight.' },
                { icon: MessageSquare, label: 'Written buy/no-buy note', description: 'One page per plot with our recommendation — and what we\u2019re not sure about.' },
            ]}
            process={[
                {
                    title: '30-minute call to understand your intent',
                    description: 'Budget, timeline, income vs. appreciation tilt, managed vs. self-operated. No scripted discovery — just a conversation.',
                },
                {
                    title: 'We shortlist inside a week',
                    description: '3-5 plots with one-page summaries each. If none of our current listings fit, we look outside our marketplace too.',
                },
                {
                    title: 'Visit 2-3 plots together',
                    description: 'Usually a full Saturday. You ask the hard questions; we make sure the owner answers them. Paperwork in hand.',
                },
                {
                    title: 'You get a written recommendation',
                    description: 'Two pages. What to buy, what to skip, and why. Signed by us. You decide; we don\u2019t pressure.',
                },
            ]}
            related={[
                {
                    icon: Footprints,
                    title: 'Property Curation',
                    description: 'Start by browsing our walked-and-verified marketplace listings.',
                    href: '/properties',
                },
                {
                    icon: FileSignature,
                    title: 'Title & Paperwork',
                    description: 'Once you\u2019ve picked a plot, we handle the closing documentation.',
                    href: '/contact',
                },
            ]}
            ctaHeadline="Book the 30-minute call."
            ctaSub="A short call is usually enough to tell whether we can help or whether you\u2019re better off with a broker. No sales agenda, no pressure to convert."
            whatsappMessage="Hi, I'd like to book the 30-minute investment advisory call."
        />
    );
}
