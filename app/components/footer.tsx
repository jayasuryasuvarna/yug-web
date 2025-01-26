// app/components/Footer.tsx
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              {/* Replace with your logo */}
              <h3 className="text-2xl font-bold text-white">YUG Estates</h3>
            </div>
            <p className="text-gray-400">
              Your trusted partner in agricultural real estate investments. We specialize in premium farmlands with professional management services.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/properties" className="hover:text-green-500 transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-500 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/investment" className="hover:text-green-500 transition-colors">
                  Investment Guide
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-green-500 transition-colors">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li className="hover:text-green-500 transition-colors">
                <Link href="/services/farm-management">
                  Farm Management
                </Link>
              </li>
              <li className="hover:text-green-500 transition-colors">
                <Link href="/services/property-investment">
                  Property Investment
                </Link>
              </li>
              <li className="hover:text-green-500 transition-colors">
                <Link href="/services/crop-cultivation">
                  Crop Cultivation
                </Link>
              </li>
              <li className="hover:text-green-500 transition-colors">
                <Link href="/services/agricultural-consulting">
                  Agricultural Consulting
                </Link>
              </li>
              <li className="hover:text-green-500 transition-colors">
                <Link href="/services/yield-management">
                  Yield Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>
                  123 Agri Tower, Farm Road
                  <br />
                  Bangalore, Karnataka 560001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href="mailto:contact@yugestates.com" className="hover:text-green-500 transition-colors">
                  contact@yugestates.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © {currentYear} YUG Estates. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="hover:text-green-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-green-500 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/sitemap" className="hover:text-green-500 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}