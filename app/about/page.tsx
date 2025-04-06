import React from 'react';
import { Building2, Users2, Target, Shield } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-32">
                <div className="absolute inset-0 bg-black/50 mix-blend-overlay" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                            About YUG Estates
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            Building trust through transparency and expertise in premium agricultural and residential properties.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            To provide exceptional real estate solutions by connecting discerning buyers with premium agricultural lands
                            and luxury properties, while ensuring sustainable development and maximizing investment potential.
                        </p>
                    </div>

                    {/* Core Values */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Building2,
                                title: "Excellence",
                                description: "We maintain the highest standards in property selection and client service."
                            },
                            {
                                icon: Users2,
                                title: "Trust",
                                description: "Building lasting relationships through transparency and integrity."
                            },
                            {
                                icon: Target,
                                title: "Expertise",
                                description: "Deep understanding of agricultural and luxury real estate markets."
                            },
                            {
                                icon: Shield,
                                title: "Reliability",
                                description: "Committed to delivering value and security in every transaction."
                            }
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                            >
                                <div className="bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    <value.icon className="w-8 h-8 text-gray-900" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Why Choose YUG Estates</h2>

                    <div className="grid md:grid-cols-2 gap-16">
                        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Premium Property Portfolio</h3>
                            <ul className="space-y-6 text-gray-600">
                                {[
                                    "Carefully curated selection of agricultural lands and luxury properties",
                                    "Properties in prime locations with high growth potential",
                                    "Verified documentation and clear titles"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5" />
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Expert Guidance</h3>
                            <ul className="space-y-6 text-gray-600">
                                {[
                                    "Dedicated property experts for personalized assistance",
                                    "Comprehensive property insights and market analysis",
                                    "End-to-end support from property selection to purchase"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5" />
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Leadership Team</h2>
                        <p className="text-xl text-gray-600">
                            Backed by decades of experience in real estate and agricultural land development
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                name: "Rajesh Kumar",
                                position: "Founder & CEO",
                                image: "/images/team/ceo.jpg"
                            },
                            {
                                name: "Priya Sharma",
                                position: "Head of Property Relations",
                                image: "/images/team/relations.jpg"
                            },
                            {
                                name: "Amit Patel",
                                position: "Agricultural Land Expert",
                                image: "/images/team/expert.jpg"
                            }
                        ].map((member, index) => (
                            <div key={index} className="text-center group">
                                <div className="aspect-square relative mb-6 overflow-hidden">
                                    <div className="w-64 h-64 mx-auto rounded-2xl bg-gray-200 shadow-lg group-hover:shadow-xl transition-shadow duration-300" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-lg text-gray-600">{member.position}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Find Your Perfect Property?</h2>
                    <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
                        Connect with our experts to explore premium properties tailored to your needs
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="tel:+919876543210"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            Call Us Now
                        </a>
                        <a
                            href="/properties"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white border-2 border-white hover:bg-white hover:text-gray-900 transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            View Properties
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
} 
