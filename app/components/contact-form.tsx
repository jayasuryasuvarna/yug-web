"use client";
import React, { useRef, useState } from 'react';
import { Mail, Phone, Send, User, MessageSquare, Building2 } from 'lucide-react';
import { submitContactForm } from '@/app/actions/contact';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(formData: FormData) {
    setPending(true);
    setSubmitStatus('idle');

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setSubmitStatus('success');
        formRef.current?.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-900/5 rounded-full text-sm mb-6">
              <MessageSquare className="w-4 h-4 text-gray-600" />
              <span className="font-medium text-gray-600">Get in Touch</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's Discuss Your{' '}
              <span className="relative">
                <span className="relative z-10">Investment Goals</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-gray-900/[0.08] to-gray-900/[0.02]"></span>
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Our team of agricultural investment experts is here to help you make informed decisions about your future investments.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Phone className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Mail className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600">contact@yugestates.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Building2 className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-gray-600">123 Agri Tower, Farm Road<br />Bangalore, Karnataka 560001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <form action={handleSubmit} ref={formRef} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="name">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="block w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email and Phone Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="block w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="block w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Query Type Select */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="queryType">
                  Type of Query
                </label>
                <select
                  id="queryType"
                  name="queryType"
                  required
                  className="block w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                >
                  <option value="">Select your query type</option>
                  <option value="property">Property Information</option>
                  <option value="investment">Investment Opportunities</option>
                  <option value="management">Farm Management</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="block w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your investment goals..."
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={pending}
                  className={`w-full py-4 px-6 rounded-xl text-white font-medium transition-all
                    ${ pending
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gray-900 hover:bg-gray-800' }`}
                >
                  {pending ? (
                    'Sending...'
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <Send className="h-5 w-5" />
                    </span>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <p className="mt-4 text-center text-emerald-600 font-medium">
                    Thank you! We'll get back to you soon.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="mt-4 text-center text-red-600 font-medium">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
