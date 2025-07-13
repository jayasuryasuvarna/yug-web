import React from 'react';
import { Users, BookOpen, Lightbulb, MapPin } from 'lucide-react';

export default function AgriculturalConsultingPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-32">
                <div className="absolute inset-0 bg-black/50 mix-blend-overlay" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                            Agricultural Consulting
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            Expert advice and tailored solutions for every stage of your agricultural investment journey, from land selection to yield optimization.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Details */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Consulting Services</h2>
                            <ul className="space-y-6 text-gray-600 text-lg">
                                <li className="flex items-start gap-4">
                                    <BookOpen className="w-7 h-7 text-gray-900 mt-1" />
                                    <span>Land assessment and suitability analysis</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Lightbulb className="w-7 h-7 text-gray-900 mt-1" />
                                    <span>Investment planning and risk assessment</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Users className="w-7 h-7 text-gray-900 mt-1" />
                                    <span>Personalized crop and farm management strategies</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <MapPin className="w-7 h-7 text-gray-900 mt-1" />
                                    <span>Guidance on government schemes and subsidies</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <BookOpen className="w-7 h-7 text-gray-900 mt-1" />
                                    <span>Training and workshops for investors and farmers</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
                            <Users className="w-24 h-24 text-gray-400" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose YUG Estates for Consulting?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
                            <p className="text-gray-600">Seasoned agronomists and investment advisors with deep local knowledge.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Tailored Solutions</h3>
                            <p className="text-gray-600">Custom strategies for every investor, from first-time buyers to large-scale farmers.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">End-to-End Support</h3>
                            <p className="text-gray-600">Guidance at every step, from land selection to maximizing returns.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 
