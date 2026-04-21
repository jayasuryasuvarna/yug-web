import {
    Tractor,
    Sprout,
    Droplets,
    Bug,
    FileText,
    Calendar,
    TrendingUp,
    Users,
} from 'lucide-react';
import ServiceDetailLayout from '@/app/components/service-detail-layout';

export default function FarmManagementPage() {
    return (
        <ServiceDetailLayout
            serviceNumber="02"
            breadcrumb="Farm Management"
            eyebrow="Service"
            headline="We run your farm"
            headlineItalic="while you're away."
            sub="Bought managed farmland? We take over the operational side — crop planning, planting, irrigation, harvest, and a monthly report in plain English. You stay informed. We stay on the ground."
            whatsIncluded={[
                { icon: Tractor, label: 'End-to-end operations', description: 'Sowing, irrigation, weeding, harvest — we handle the full cycle.' },
                { icon: Sprout, label: 'Crop rotation & soil testing', description: 'Annual soil panel, rotation planning, organic amendments as needed.' },
                { icon: Droplets, label: 'Irrigation management', description: 'Schedule tuning, borewell monitoring, drip system upkeep.' },
                { icon: Bug, label: 'Pest & disease control', description: 'Integrated pest management, preference for biological controls.' },
                { icon: FileText, label: 'Monthly written report', description: 'Photos, activities, expenses, and any issues flagged — in plain English.' },
                { icon: TrendingUp, label: 'Annual P&L summary', description: 'Yield, revenue, cost, net return — one page, filable with your CA.' },
            ]}
            process={[
                {
                    title: 'We walk the land with you',
                    description: 'Half a day on-site. You tell us what you want (income / hobby / legacy), we assess soil, water, and boundary conditions.',
                },
                {
                    title: 'We draft a management plan',
                    description: 'Crop choice, rotation, irrigation schedule, and annual budget. You review and sign off before anything starts.',
                },
                {
                    title: 'We run operations, daily',
                    description: 'A named manager is on the ground weekly. You have their direct number. Routine decisions are made without bothering you.',
                },
                {
                    title: 'You get a monthly report',
                    description: 'First Monday of every month: what happened, what we spent, what to expect next month. Photos included.',
                },
            ]}
            related={[
                {
                    icon: Sprout,
                    title: 'Crop Cultivation',
                    description: 'Match the right crop to your land and budget before committing to a plan.',
                    href: '/services/crop-cultivation',
                },
                {
                    icon: Users,
                    title: 'Agricultural Consulting',
                    description: 'On-site audit and course-correction for land that\u2019s already in operation.',
                    href: '/services/agricultural-consulting',
                },
            ]}
            ctaHeadline="Hand us the keys."
            ctaSub="Most engagements start with a half-day farm walk-through. No commitment, no slide deck — we\u2019ll just look at what you have and tell you what we\u2019d do."
            whatsappMessage="Hi, I'd like to discuss farm management for my plot. Can we schedule a walk-through?"
        />
    );
}
