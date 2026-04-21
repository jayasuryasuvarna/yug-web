import {
    Clipboard,
    Calendar,
    Wrench,
    Banknote,
    PhoneCall,
    Package,
    Sprout,
    Tractor,
} from 'lucide-react';
import ServiceDetailLayout from '@/app/components/service-detail-layout';

export default function AgriculturalConsultingPage() {
    return (
        <ServiceDetailLayout
            serviceNumber="05"
            breadcrumb="Agricultural Consulting"
            eyebrow="Service"
            headline="Already own land?"
            headlineItalic="Let's make sense of it."
            sub="Inherited a plot? Bought one in haste? Managed farm drifting? We audit on-site and build a 12-month action plan — one season at a time, with honest trade-offs on the table."
            whatsIncluded={[
                { icon: Clipboard, label: 'On-site operational audit', description: 'Half-day walk: soil, crop, water, equipment, labor, infrastructure.' },
                { icon: Calendar, label: '12-month action plan', description: 'Written roadmap with monthly milestones and expected outcomes per season.' },
                { icon: PhoneCall, label: '6 monthly check-ins', description: 'One-hour call each month for two seasons. We course-correct as things develop.' },
                { icon: Package, label: 'Vendor shortlisting', description: 'Equipment, seed, fertilizer, and labor — three vetted options each.' },
                { icon: Banknote, label: 'Government scheme match', description: 'Subsidies, insurance, and credit schemes you actually qualify for.' },
                { icon: Wrench, label: 'Infrastructure recommendations', description: 'Irrigation upgrades, storage, fencing — prioritized by ROI, not pitched.' },
            ]}
            process={[
                {
                    title: 'Send us a photo and the basics',
                    description: 'Location, approximate area, what\u2019s currently growing, what\u2019s not working. A WhatsApp message is enough to start.',
                },
                {
                    title: 'We visit the land (half-day on-site)',
                    description: 'Walk the boundary, pull soil samples, meet the farmhand, inspect infrastructure, photograph conditions.',
                },
                {
                    title: 'You get a 3-page action plan',
                    description: 'Within a week of the visit. Diagnostics, 12-month plan, vendor list, and honest "we don\u2019t know" caveats where they apply.',
                },
                {
                    title: 'Monthly check-ins for 6 months',
                    description: 'First Tuesday of each month, one hour. Track progress, adjust plan, escalate anything time-sensitive.',
                },
            ]}
            related={[
                {
                    icon: Sprout,
                    title: 'Crop Cultivation',
                    description: 'Rework the crop choice first if yield is the main problem.',
                    href: '/services/crop-cultivation',
                },
                {
                    icon: Tractor,
                    title: 'Farm Management',
                    description: 'If the audit suggests full-time operation support, we can take over.',
                    href: '/services/farm-management',
                },
            ]}
            ctaHeadline="Send us a photo of your land."
            ctaSub="We can usually tell from a few photos and a conversation whether we\u2019re the right help — and whether the problem is worth solving at all."
            whatsappMessage="Hi, I'd like an agricultural consulting audit for my land. I'll share photos and basics."
        />
    );
}
