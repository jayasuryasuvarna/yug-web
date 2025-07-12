import React from 'react';
import { MapPin, Clock, Phone, Mail, MessageSquare, Users, Building2, Car, Train, Plane } from 'lucide-react';
import ContactSection from '../components/contact-form';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-32">
                <div className="absolute inset-0 bg-black/50 mix-blend-overlay" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                            Contact Us
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            Ready to start your investment journey? Get in touch with our expert team for personalized guidance and support.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <ContactSection />

            {/* Office Location & Hours */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Visit Our Office</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Our team is available to meet with you in person to discuss your investment opportunities and answer any questions.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Office Details */}
                        <div className="space-y-8">
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <Building2 className="w-8 h-8 text-gray-900" />
                                    <h3 className="text-2xl font-bold text-gray-900">Main Office</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-900">Address</p>
                                            <p className="text-gray-600">123 Agri Tower, Farm Road<br />Bangalore, Karnataka 560001</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Phone className="w-6 h-6 text-gray-600 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-900">Phone</p>
                                            <p className="text-gray-600">+91 98765 43210</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Mail className="w-6 h-6 text-gray-600 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-900">Email</p>
                                            <p className="text-gray-600">contact@yugestates.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <Clock className="w-8 h-8 text-gray-900" />
                                    <h3 className="text-2xl font-bold text-gray-900">Business Hours</h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                        <span className="font-medium text-gray-900">Monday - Friday</span>
                                        <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                        <span className="font-medium text-gray-900">Saturday</span>
                                        <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="font-medium text-gray-900">Sunday</span>
                                        <span className="text-gray-600">Closed</span>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                                    <p className="text-sm text-blue-800">
                                        <strong>Note:</strong> For urgent inquiries outside business hours, please call our emergency line: +91 98765 43211
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder & Transportation */}
                        <div className="space-y-8">
                            {/* Map Placeholder */}
                            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                    <p className="text-gray-600 font-medium">Interactive Map</p>
                                    <p className="text-gray-500 text-sm">Map integration coming soon</p>
                                </div>
                            </div>

                            {/* Transportation Info */}
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Reach Us</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <Car className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-900 mb-1">By Car</p>
                                            <p className="text-gray-600 text-sm">Located on Farm Road, easily accessible from the main highway. Parking available on-site.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Train className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-900 mb-1">By Public Transport</p>
                                            <p className="text-gray-600 text-sm">Nearest metro station: Agri Metro (500m walk). Bus routes 45, 67, and 89 stop nearby.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Plane className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-900 mb-1">From Airport</p>
                                            <p className="text-gray-600 text-sm">30 minutes by car from Kempegowda International Airport. We can arrange airport pickup.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Our experienced professionals are here to guide you through every step of your investment journey.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Rajesh Kumar",
                                position: "Founder & CEO",
                                phone: "+91 98765 43210",
                                email: "rajesh@yugestates.com",
                                image: "/images/team/ceo.jpg"
                            },
                            {
                                name: "Priya Sharma",
                                position: "Head of Property Relations",
                                phone: "+91 98765 43212",
                                email: "priya@yugestates.com",
                                image: "/images/team/relations.jpg"
                            },
                            {
                                name: "Amit Patel",
                                position: "Agricultural Land Expert",
                                phone: "+91 98765 43213",
                                email: "amit@yugestates.com",
                                image: "/images/team/expert.jpg"
                            }
                        ].map((member, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <Users className="w-12 h-12 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-gray-600 mb-4">{member.position}</p>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-center gap-2">
                                        <Phone className="w-4 h-4 text-gray-400" />
                                        <span className="text-sm text-gray-600">{member.phone}</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-2">
                                        <Mail className="w-4 h-4 text-gray-400" />
                                        <span className="text-sm text-gray-600">{member.email}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600">
                            Find quick answers to common questions about our services and processes.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                question: "What types of properties do you offer?",
                                answer: "We specialize in agricultural lands, farmhouses, and premium residential properties. Our portfolio includes both investment-grade properties and ready-to-use agricultural lands."
                            },
                            {
                                question: "Do you provide property management services?",
                                answer: "Yes, we offer comprehensive farm management services including crop planning, irrigation management, and regular maintenance to maximize your investment returns."
                            },
                            {
                                question: "What is the typical investment timeline?",
                                answer: "Investment timelines vary based on property type and your goals. Agricultural investments typically show returns within 2-5 years, while residential properties may appreciate over 5-10 years."
                            },
                            {
                                question: "Do you offer financing options?",
                                answer: "We work with leading banks and financial institutions to provide competitive financing options for qualified buyers. Our team can help you explore various loan products."
                            },
                            {
                                question: "How do I schedule a property viewing?",
                                answer: "You can schedule a viewing by calling us directly, filling out our contact form, or emailing us. We'll arrange a convenient time and provide detailed directions to the property."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Start Your Investment Journey?</h2>
                    <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
                        Connect with our experts today and discover the perfect investment opportunities tailored to your goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="tel:+919876543210"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Call Now
                        </a>
                        <a
                            href="#contact-form"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white border-2 border-white hover:bg-white hover:text-gray-900 transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            <MessageSquare className="w-5 h-5 mr-2" />
                            Send Message
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
} 
