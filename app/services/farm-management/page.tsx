import React from 'react';
import { Tractor, Leaf, Timer, Users } from 'lucide-react';

export default function FarmManagementPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-32">
                <div className="absolute inset-0 bg-black/50 mix-blend-overlay" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                            Farm Management
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            Professional farm management services for optimal yields and peace of mind. We handle every aspect of your farmland investment, from cultivation to harvest.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Details */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
                            <ul className="space-y-6 text-gray-600 text-lg">
                                <li className="flex items-start gap-4">
                                    <Tractor className="w-7 h-7 text-gray-900 mt-1" />
                                    <span>End-to-end farm operations management</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Leaf className="w-7 h-7 text-gray-900 mt-1" />
                                    <span>Soil health monitoring and crop planning</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Timer className="w-7 h-7 text-gray-900 mt-1" />
                                    <span>Timely sowing, irrigation, and harvesting</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Users className="w-7 h-7 text-gray-900 mt-1" />
                                    <span>Experienced on-ground staff and agronomists</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Tractor className="w-7 h-7 text-gray-900 mt-1" />
                                    <span>Modern equipment and sustainable practices</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
                            <Tractor className="w-24 h-24 text-gray-400" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Trust YUG Estates for Farm Management?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Expertise</h3>
                            <p className="text-gray-600">Decades of experience in managing diverse crops and farmlands across Karnataka.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
                            <p className="text-gray-600">Regular updates, reports, and open communication with every investor.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
                            <p className="text-gray-600">Eco-friendly practices that protect your land and maximize long-term returns.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 
