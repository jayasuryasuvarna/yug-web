import React from 'react';
import { Shield, Eye, Lock, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-32">
                <div className="absolute inset-0 bg-black/50 mix-blend-overlay" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    {/* Last Updated */}
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12">
                        <div className="flex items-center gap-3 mb-3">
                            <FileText className="w-6 h-6 text-blue-600" />
                            <h2 className="text-lg font-semibold text-blue-900">Last Updated</h2>
                        </div>
                        <p className="text-blue-800">This Privacy Policy was last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.</p>
                    </div>

                    {/* Information We Collect */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <Eye className="w-8 h-8 text-gray-900" />
                            <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
                        </div>
                        <div className="space-y-6 text-gray-600">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                                <p className="mb-4">We may collect personal information that you provide directly to us, including:</p>
                                <ul className="space-y-2 ml-6">
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                        <span>Name, email address, and phone number</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                        <span>Property preferences and investment criteria</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                        <span>Financial information for property transactions</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                        <span>Communication preferences and history</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                                <p className="mb-4">We automatically collect certain information when you visit our website:</p>
                                <ul className="space-y-2 ml-6">
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                        <span>IP address and device information</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                        <span>Browser type and version</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                        <span>Pages visited and time spent on site</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                        <span>Referring website information</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* How We Use Information */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <Shield className="w-8 h-8 text-gray-900" />
                            <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
                        </div>
                        <div className="space-y-6 text-gray-600">
                            <p className="mb-4">We use the information we collect for the following purposes:</p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Property Services:</strong> To provide you with property listings, market analysis, and investment opportunities that match your criteria.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Communication:</strong> To respond to your inquiries, provide customer support, and send relevant updates about our services.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Website Improvement:</strong> To analyze website usage patterns and improve our user experience and services.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Information Sharing */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <Lock className="w-8 h-8 text-gray-900" />
                            <h2 className="text-3xl font-bold text-gray-900">Information Sharing and Disclosure</h2>
                        </div>
                        <div className="space-y-6 text-gray-600">
                            <p className="mb-4">We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and providing services.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Data Security */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
                        <div className="space-y-4 text-gray-600">
                            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                            <ul className="space-y-2 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5" />
                                    <span>Encryption of sensitive data</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5" />
                                    <span>Regular security assessments</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5" />
                                    <span>Access controls and authentication</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5" />
                                    <span>Secure data storage and transmission</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Your Rights */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
                        <div className="space-y-6 text-gray-600">
                            <p className="mb-4">You have the following rights regarding your personal information:</p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Access:</strong> Request access to the personal information we hold about you.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Correction:</strong> Request correction of inaccurate or incomplete information.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Deletion:</strong> Request deletion of your personal information, subject to legal requirements.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Opt-out:</strong> Opt out of marketing communications and data processing.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                        <div className="space-y-4 text-gray-600">
                            <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                            <div className="space-y-2">
                                <p><strong className="text-gray-900">Email:</strong> privacy@yugestates.com</p>
                                <p><strong className="text-gray-900">Phone:</strong> +91 98765 43210</p>
                                <p><strong className="text-gray-900">Address:</strong> 123 Agri Tower, Farm Road, Bangalore, Karnataka 560001</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 
