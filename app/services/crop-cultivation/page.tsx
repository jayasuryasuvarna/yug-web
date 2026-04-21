import {
    Sprout,
    Droplets,
    TestTube,
    Calendar,
    LineChart,
    Coins,
    Tractor,
    Users,
} from 'lucide-react';
import ServiceDetailLayout from '@/app/components/service-detail-layout';

export default function CropCultivationPage() {
    return (
        <ServiceDetailLayout
            serviceNumber="03"
            breadcrumb="Crop Cultivation"
            eyebrow="Service"
            headline="The right crop for your land,"
            headlineItalic="not a template."
            sub="We match crops to your soil, water availability, and local climate. No generic MBA framework, no glossy brochure — we lean on what local farmers in your district are actually growing, and why."
            whatsIncluded={[
                { icon: TestTube, label: 'Soil health assessment', description: 'NPK, pH, organic carbon, and micronutrient panel from a certified lab.' },
                { icon: Droplets, label: 'Water source audit', description: 'Borewell yield test, canal access check, seasonal availability mapping.' },
                { icon: Sprout, label: '3-5 crop shortlist', description: 'Tailored to your soil, water budget, and how hands-on you want to be.' },
                { icon: Calendar, label: 'Seasonal schedule', description: 'Sowing windows, critical irrigation moments, harvest calendar — on paper.' },
                { icon: LineChart, label: 'Yield projection', description: 'Grounded in local district benchmarks, not best-case marketing numbers.' },
                { icon: Coins, label: 'Per-acre cost model', description: 'Inputs, labor, equipment, expected revenue, and net return per option.' },
            ]}
            process={[
                {
                    title: 'We test your soil and walk the boundary',
                    description: 'Two soil samples per acre (minimum), boundary walk, and a conversation with the nearest farmer. Takes a half-day.',
                },
                {
                    title: 'We interview you about your goals',
                    description: 'Is this income, a hobby, or a legacy plot? How hands-on are you? What\u2019s your risk tolerance? The crop plan depends on these answers.',
                },
                {
                    title: 'We propose 3 plans with pros and cons',
                    description: 'Written comparison: yield potential, risk profile, labor required, water intensity, time to first harvest. You choose.',
                },
                {
                    title: 'We hand it off to your farmhand — or to us',
                    description: 'The plan is written for your local labor to execute. If you\u2019d rather not manage execution, our Farm Management team picks it up.',
                },
            ]}
            related={[
                {
                    icon: Tractor,
                    title: 'Farm Management',
                    description: 'We execute the crop plan day-to-day so you don\u2019t have to.',
                    href: '/services/farm-management',
                },
                {
                    icon: Users,
                    title: 'Agricultural Consulting',
                    description: 'Broader audit if your land is already in operation but underperforming.',
                    href: '/services/agricultural-consulting',
                },
            ]}
            ctaHeadline="Start with a soil test."
            ctaSub="A soil test is the cheapest honest answer you can buy. We\u2019ll run the panel, read the results with you, and tell you what it means for your options."
            whatsappMessage="Hi, I'd like to get my soil tested and discuss crop options for my land."
        />
    );
}
