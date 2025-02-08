import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-baseline">
              <span className="text-2xl font-bold tracking-wider text-gray-900">
                YUG
              </span>
              <span className="ml-2 text-xs font-light tracking-[0.3em] text-gray-600 uppercase">
                Estates
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Your trusted partner in agricultural real estate investments. We specialize in premium farmlands with professional management services.
            </p>
            <div className="flex space-x-5">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-gray-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-gray-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/properties" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/investment" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Investment Guide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services/farm-management" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Farm Management
                </Link>
              </li>
              <li>
                <Link href="/services/property-investment" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Property Investment
                </Link>
              </li>
              <li>
                <Link href="/services/crop-cultivation" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Crop Cultivation
                </Link>
              </li>
              <li>
                <Link href="/services/agricultural-consulting" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Agricultural Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  123 Agri Tower, Farm Road
                  <br />
                  Bangalore, Karnataka 560001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-600">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a href="mailto:contact@yugestates.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                  contact@yugestates.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500">
              © {currentYear} YUG Estates. All rights reserved.
            </div>
            <div className="flex space-x-8 text-sm">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-700 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-gray-500 hover:text-gray-700 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/sitemap" className="text-gray-500 hover:text-gray-700 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
