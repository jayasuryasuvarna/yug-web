import React from 'react';
import { LineChart, Building2, TrendingUp, Users } from 'lucide-react';

export default function PropertyInvestmentPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-32">
                <div className="absolute inset-0 bg-black/50 mix-blend-overlay" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                            Property Investment
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            Unlock the potential of agricultural and residential properties with expert investment guidance and curated opportunities from YUG Estates.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Details */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Investment Services</h2>
                            <ul className="space-y-6 text-gray-600 text-lg">
                                <li className="flex items-start gap-4">
                                    <Building2 className="w-7 h-7 text-gray-900 mt-1" />
                                    <span>Curated selection of high-growth properties</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <LineChart className="w-7 h-7 text-gray-900 mt-1" />
                                    <span>Market analysis and investment insights</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <TrendingUp className="w-7 h-7 text-gray-900 mt-1" />
                                    <span>Personalized investment strategies</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Users className="w-7 h-7 text-gray-900 mt-1" />
                                    <span>End-to-end support from selection to purchase</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <LineChart className="w-7 h-7 text-gray-900 mt-1" />
                                    <span>Transparent documentation and legal assistance</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
                            <LineChart className="w-24 h-24 text-gray-400" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Invest with Us */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Invest with YUG Estates?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth Potential</h3>
                            <p className="text-gray-600">Access properties in prime locations with high appreciation and yield prospects.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Guidance</h3>
                            <p className="text-gray-600">Benefit from our deep market knowledge and personalized investment advice.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Transactions</h3>
                            <p className="text-gray-600">Transparent processes and legal support for a safe investment experience.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 
