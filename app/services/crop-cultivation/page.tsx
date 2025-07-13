import React from 'react';
import { Sprout, Leaf, Sun, Droplet } from 'lucide-react';

export default function CropCultivationPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-32">
                <div className="absolute inset-0 bg-black/50 mix-blend-overlay" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                            Crop Cultivation
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            Scientific crop planning, sustainable practices, and expert management for maximum yield and soil health.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Details */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Crop Cultivation Services</h2>
                            <ul className="space-y-6 text-gray-600 text-lg">
                                <li className="flex items-start gap-4">
                                    <Sprout className="w-7 h-7 text-gray-900 mt-1" />
                                    <span>Crop selection based on soil and climate analysis</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Leaf className="w-7 h-7 text-gray-900 mt-1" />
                                    <span>Organic and sustainable farming methods</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Sun className="w-7 h-7 text-gray-900 mt-1" />
                                    <span>Optimal sowing, irrigation, and fertilization schedules</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Droplet className="w-7 h-7 text-gray-900 mt-1" />
                                    <span>Water management and pest control</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Sprout className="w-7 h-7 text-gray-900 mt-1" />
                                    <span>Harvest planning and post-harvest support</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
                            <Sprout className="w-24 h-24 text-gray-400" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose YUG Estates for Crop Cultivation?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Scientific Approach</h3>
                            <p className="text-gray-600">Data-driven crop planning for maximum productivity and sustainability.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainable Practices</h3>
                            <p className="text-gray-600">Eco-friendly methods that protect soil health and the environment.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
                            <p className="text-gray-600">Experienced agronomists and farm managers guiding every step.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 
