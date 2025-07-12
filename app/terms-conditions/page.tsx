import React from 'react';
import { Scale, FileText, AlertTriangle, CheckCircle } from 'lucide-react';

export default function TermsConditionsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-32">
                <div className="absolute inset-0 bg-black/50 mix-blend-overlay" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                            Terms & Conditions
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            Please read these terms and conditions carefully before using our services.
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
                        <p className="text-blue-800">These Terms and Conditions were last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.</p>
                    </div>

                    {/* Acceptance of Terms */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle className="w-8 h-8 text-gray-900" />
                            <h2 className="text-3xl font-bold text-gray-900">Acceptance of Terms</h2>
                        </div>
                        <div className="space-y-4 text-gray-600">
                            <p>By accessing and using the YUG Estates website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                            <p>These terms apply to all visitors, users, and others who access or use the service. By using our service, you agree to be bound by these terms and all applicable laws and regulations.</p>
                        </div>
                    </div>

                    {/* Services Description */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Services Description</h2>
                        <div className="space-y-6 text-gray-600">
                            <p className="mb-4">YUG Estates provides the following services:</p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Property Listings:</strong> Display of agricultural lands and luxury properties available for purchase or investment.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Property Consultation:</strong> Expert advice on property selection, investment strategies, and market analysis.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Transaction Support:</strong> Assistance with property transactions, documentation, and legal processes.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Property Management:</strong> Ongoing management services for agricultural properties and investments.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* User Responsibilities */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">User Responsibilities</h2>
                        <div className="space-y-6 text-gray-600">
                            <p className="mb-4">As a user of our services, you agree to:</p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Provide Accurate Information:</strong> Furnish accurate, current, and complete information when using our services.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Comply with Laws:</strong> Use our services in compliance with all applicable laws and regulations.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Respect Intellectual Property:</strong> Not copy, distribute, or modify any content without permission.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Maintain Security:</strong> Keep your account credentials secure and notify us of any unauthorized use.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Prohibited Activities */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <AlertTriangle className="w-8 h-8 text-gray-900" />
                            <h2 className="text-3xl font-bold text-gray-900">Prohibited Activities</h2>
                        </div>
                        <div className="space-y-6 text-gray-600">
                            <p className="mb-4">You may not use our services to:</p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>Engage in any illegal or fraudulent activities</div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>Harass, abuse, or harm other users or individuals</div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>Attempt to gain unauthorized access to our systems</div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>Interfere with or disrupt our services or servers</div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>Use automated systems to access our services</div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                    <div>Transmit viruses, malware, or other harmful code</div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Intellectual Property */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>
                        <div className="space-y-4 text-gray-600">
                            <p>The service and its original content, features, and functionality are and will remain the exclusive property of YUG Estates and its licensors. The service is protected by copyright, trademark, and other laws.</p>
                            <p>Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.</p>
                            <p>You retain ownership of any content you submit to our services, but you grant us a license to use, modify, and display such content in connection with our services.</p>
                        </div>
                    </div>

                    {/* Limitation of Liability */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <Scale className="w-8 h-8 text-gray-900" />
                            <h2 className="text-3xl font-bold text-gray-900">Limitation of Liability</h2>
                        </div>
                        <div className="space-y-4 text-gray-600">
                            <p>In no event shall YUG Estates, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
                            <ul className="space-y-2 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5" />
                                    <span>Your use or inability to use the service</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5" />
                                    <span>Any unauthorized access to or use of our servers</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5" />
                                    <span>Any interruption or cessation of transmission to or from the service</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 rounded-full bg-gray-900 mt-2.5" />
                                    <span>Any bugs, viruses, or other harmful code that may be transmitted</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Disclaimers */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Disclaimers</h2>
                        <div className="space-y-6 text-gray-600">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Property Information</h3>
                                <p>While we strive to provide accurate and up-to-date property information, we cannot guarantee the accuracy, completeness, or reliability of any property details. Property information is subject to change without notice.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Investment Advice</h3>
                                <p>Any investment advice or recommendations provided through our services are for informational purposes only and should not be considered as professional financial advice. We recommend consulting with qualified professionals before making investment decisions.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Availability</h3>
                                <p>We do not guarantee that our services will be available at all times or that they will be free from errors or interruptions. We reserve the right to modify or discontinue services at any time.</p>
                            </div>
                        </div>
                    </div>

                    {/* Termination */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
                        <div className="space-y-4 text-gray-600">
                            <p>We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>
                            <p>If you wish to terminate your account, you may simply discontinue using the service. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
                        </div>
                    </div>

                    {/* Governing Law */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law</h2>
                        <div className="space-y-4 text-gray-600">
                            <p>These Terms shall be interpreted and governed by the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
                            <p>If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
                        </div>
                    </div>

                    {/* Changes to Terms */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
                        <div className="space-y-4 text-gray-600">
                            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.</p>
                            <p>What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.</p>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                        <div className="space-y-4 text-gray-600">
                            <p>If you have any questions about these Terms and Conditions, please contact us:</p>
                            <div className="space-y-2">
                                <p><strong className="text-gray-900">Email:</strong> legal@yugestates.com</p>
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
