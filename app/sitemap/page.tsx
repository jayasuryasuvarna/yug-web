import React from 'react';
import { Map, Home, Building2, Users, FileText, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function SitemapPage() {
    const currentYear = new Date().getFullYear();

    const sitemapData = {
        mainPages: [
            { name: 'Home', path: '/', description: 'Welcome to YUG Estates - Premium agricultural and residential properties' },
            { name: 'Properties', path: '/properties', description: 'Browse our curated collection of premium properties' },
            { name: 'About Us', path: '/about', description: 'Learn about our mission, values, and team' },
        ],
        services: [
            { name: 'Farm Management', path: '/services/farm-management', description: 'Professional farm management services' },
            { name: 'Property Investment', path: '/services/property-investment', description: 'Investment guidance and opportunities' },
            { name: 'Crop Cultivation', path: '/services/crop-cultivation', description: 'Agricultural consulting and crop management' },
            { name: 'Agricultural Consulting', path: '/services/agricultural-consulting', description: 'Expert agricultural advice and planning' },
        ],
        resources: [
            { name: 'Investment Guide', path: '/investment', description: 'Comprehensive guide to property investment' },
            { name: 'Market Analysis', path: '/market-analysis', description: 'Current market trends and insights' },
            { name: 'Property Valuation', path: '/valuation', description: 'Professional property valuation services' },
        ],
        legal: [
            { name: 'Privacy Policy', path: '/privacy-policy', description: 'How we protect and use your information' },
            { name: 'Terms & Conditions', path: '/terms-conditions', description: 'Terms of service and usage policies' },
            { name: 'Sitemap', path: '/sitemap', description: 'Complete website navigation structure' },
        ],
        contact: [
            { name: 'Contact Us', path: '/contact', description: 'Get in touch with our team' },
            { name: 'Request Consultation', path: '/consultation', description: 'Schedule a personalized consultation' },
            { name: 'Support', path: '/support', description: 'Customer support and assistance' },
        ]
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-32">
                <div className="absolute inset-0 bg-black/50 mix-blend-overlay" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                            Sitemap
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            Navigate through our complete website structure and find what you're looking for.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sitemap Content */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    {/* Quick Navigation */}
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <Map className="w-8 h-8 text-blue-600" />
                            <h2 className="text-2xl font-bold text-blue-900">Quick Navigation</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <a href="#main-pages" className="text-blue-700 hover:text-blue-900 transition-colors">Main Pages</a>
                            <a href="#services" className="text-blue-700 hover:text-blue-900 transition-colors">Services</a>
                            <a href="#resources" className="text-blue-700 hover:text-blue-900 transition-colors">Resources</a>
                            <a href="#contact" className="text-blue-700 hover:text-blue-900 transition-colors">Contact</a>
                        </div>
                    </div>

                    {/* Main Pages */}
                    <div id="main-pages" className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
                        <div className="flex items-center gap-3 mb-8">
                            <Home className="w-8 h-8 text-gray-900" />
                            <h2 className="text-3xl font-bold text-gray-900">Main Pages</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sitemapData.mainPages.map((page, index) => (
                                <div key={index} className="group">
                                    <Link
                                        href={page.path}
                                        className="block p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                                    >
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                            {page.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {page.description}
                                        </p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div id="services" className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
                        <div className="flex items-center gap-3 mb-8">
                            <Building2 className="w-8 h-8 text-gray-900" />
                            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {sitemapData.services.map((service, index) => (
                                <div key={index} className="group">
                                    <Link
                                        href={service.path}
                                        className="block p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                                    >
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                            {service.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Resources */}
                    <div id="resources" className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
                        <div className="flex items-center gap-3 mb-8">
                            <FileText className="w-8 h-8 text-gray-900" />
                            <h2 className="text-3xl font-bold text-gray-900">Resources & Guides</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sitemapData.resources.map((resource, index) => (
                                <div key={index} className="group">
                                    <Link
                                        href={resource.path}
                                        className="block p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                                    >
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                            {resource.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {resource.description}
                                        </p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact & Support */}
                    <div id="contact" className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
                        <div className="flex items-center gap-3 mb-8">
                            <Mail className="w-8 h-8 text-gray-900" />
                            <h2 className="text-3xl font-bold text-gray-900">Contact & Support</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sitemapData.contact.map((contact, index) => (
                                <div key={index} className="group">
                                    <Link
                                        href={contact.path}
                                        className="block p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                                    >
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                            {contact.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {contact.description}
                                        </p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Legal Pages */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
                        <div className="flex items-center gap-3 mb-8">
                            <FileText className="w-8 h-8 text-gray-900" />
                            <h2 className="text-3xl font-bold text-gray-900">Legal & Policies</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sitemapData.legal.map((legal, index) => (
                                <div key={index} className="group">
                                    <Link
                                        href={legal.path}
                                        className="block p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                                    >
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                            {legal.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {legal.description}
                                        </p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                        <div className="flex items-center gap-3 mb-8">
                            <Phone className="w-8 h-8 text-gray-900" />
                            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                                <div className="space-y-3 text-gray-600">
                                    <p><strong className="text-gray-900">Phone:</strong> +91 98765 43210</p>
                                    <p><strong className="text-gray-900">Email:</strong> contact@yugestates.com</p>
                                    <p><strong className="text-gray-900">Address:</strong> 123 Agri Tower, Farm Road, Bangalore, Karnataka 560001</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
                                <div className="space-y-2 text-gray-600">
                                    <p><strong className="text-gray-900">Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                                    <p><strong className="text-gray-900">Saturday & Sunday:</strong> 9:00 AM - 4:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 
