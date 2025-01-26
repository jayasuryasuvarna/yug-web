// app/components/ContactSection.tsx
"use client";
import React, { useRef, useState } from 'react';
import { Mail, Phone, Send, User } from 'lucide-react';
import { submitContactForm } from '@/app/actions/contact';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  queryType: string;
  message: string;
}

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Using Server Action with Client Form
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our properties or investment opportunities? 
              Our team is here to help you make informed decisions.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <form action={handleSubmit} ref={formRef} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
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
                    className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email and Phone Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Email Input */}
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
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
                      className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="phone">
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
                      className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Query Type Select */}
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="queryType">
                  Type of Query
                </label>
                <select
                  id="queryType"
                  name="queryType"
                  required
                  className="block w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
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
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="block w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col items-center">
                <button
                  type="submit"
                  disabled={pending}
                  className={`flex items-center justify-center w-full md:w-auto px-8 py-4 text-white font-semibold rounded-lg transition-all
                    ${pending 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-green-600 hover:bg-green-700'}`}
                >
                  {pending ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <p className="mt-4 text-green-600">
                    Thank you! We'll get back to you soon.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="mt-4 text-red-600">
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