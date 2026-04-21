"use client";
import React, { useRef, useState } from 'react';
import { Mail, Phone, Send, User, MessageSquare, Building2, MessageCircle } from 'lucide-react';
import { submitContactForm } from '@/app/actions/contact';
import { CONTACT } from '@/lib/constants';

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
    <section className="py-20 md:py-28 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-sm mb-6">
              <MessageSquare className="w-4 h-4 text-amber-700" aria-hidden="true" />
              <span className="font-medium text-amber-800">Talk to a real person</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mb-4">
              Have a question about a listing?
            </h2>

            <p className="text-lg text-stone-600 mb-8">
              Tell us what you&apos;re looking for — farmland, a river-attached plot, or villa land — and we&apos;ll share verified options in your budget. No sales pressure, no spam.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 bg-white rounded-xl border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all"
              >
                <div className="p-3 bg-amber-50 rounded-lg group-hover:bg-amber-700 transition-colors">
                  <MessageCircle className="w-6 h-6 text-amber-700 group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-stone-900">WhatsApp</h3>
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">Fastest</span>
                  </div>
                  <p className="text-stone-600 text-sm">Tap to start a chat — we reply within a few hours.</p>
                </div>
              </a>

              <a
                href={CONTACT.phoneUrl}
                className="group flex items-start gap-4 p-4 bg-white rounded-xl border border-stone-200 hover:border-stone-300 hover:shadow-md transition-all"
              >
                <div className="p-3 bg-amber-50 rounded-lg">
                  <Phone className="w-6 h-6 text-amber-700" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-medium text-stone-900 mb-1">Call us</h3>
                  <p className="text-stone-600">{CONTACT.phone}</p>
                </div>
              </a>

              <a
                href={CONTACT.emailUrl}
                className="group flex items-start gap-4 p-4 bg-white rounded-xl border border-stone-200 hover:border-stone-300 hover:shadow-md transition-all"
              >
                <div className="p-3 bg-amber-50 rounded-lg">
                  <Mail className="w-6 h-6 text-amber-700" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-medium text-stone-900 mb-1">Email us</h3>
                  <p className="text-stone-600">{CONTACT.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-stone-200">
                <div className="p-3 bg-amber-50 rounded-lg">
                  <Building2 className="w-6 h-6 text-amber-700" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-medium text-stone-900 mb-1">Visit us</h3>
                  <p className="text-stone-600">{CONTACT.address.line1}<br />{CONTACT.address.line2}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm">
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
                    className="block w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-colors"
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
                      className="block w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-colors"
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
                      className="block w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-colors"
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
                  className="block w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-colors"
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
                  className="block w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your investment goals..."
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={pending}
                  className={`w-full py-4 px-6 rounded-xl text-white font-medium transition-all cursor-pointer
                    ${ pending
                      ? 'bg-stone-400 cursor-not-allowed'
                      : 'bg-stone-900 hover:bg-stone-950' }`}
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

                <div role="status" aria-live="polite" aria-atomic="true" className="min-h-[1.5rem]">
                  {submitStatus === 'success' && (
                    <p className="mt-4 text-center text-amber-700 font-medium">
                      Thank you! We&apos;ll get back to you soon.
                    </p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="mt-4 text-center text-red-600 font-medium">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
