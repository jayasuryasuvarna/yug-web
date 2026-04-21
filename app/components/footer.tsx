import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import { CONTACT } from '@/lib/constants';

const SOCIAL_LINKS = [
  { href: 'https://www.facebook.com/yugestates', label: 'YUG Estates on Facebook', Icon: Facebook },
  { href: 'https://www.instagram.com/yugestates', label: 'YUG Estates on Instagram', Icon: Instagram },
  { href: 'https://www.linkedin.com/company/yugestates', label: 'YUG Estates on LinkedIn', Icon: Linkedin },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-50 border-t border-stone-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link
              href="/"
              aria-label="YUG Estates home"
              className="group inline-flex items-baseline gap-2 cursor-pointer rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
            >
              <span className="font-serif text-2xl font-semibold tracking-wider text-stone-900 group-hover:text-amber-700 transition-colors">
                YUG
              </span>
              <span className="text-xs font-light tracking-[0.3em] text-amber-700 uppercase group-hover:text-amber-800 transition-colors">
                Estates
              </span>
            </Link>
            <p className="text-stone-600 leading-relaxed">
              An authentic marketplace for handpicked farmland, river-attached plots, and villa land in South Bangalore — every listing visited and owner-verified.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:bg-amber-50 hover:border-amber-200 transition-colors cursor-pointer"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 text-stone-600" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/properties" className="text-stone-600 hover:text-stone-900 transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-stone-600 hover:text-stone-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-stone-600 hover:text-stone-900 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/investment" className="text-stone-600 hover:text-stone-900 transition-colors">
                  Investment Guide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone-600 hover:text-stone-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services/farm-management" className="text-stone-600 hover:text-stone-900 transition-colors">
                  Farm Management
                </Link>
              </li>
              <li>
                <Link href="/services/property-investment" className="text-stone-600 hover:text-stone-900 transition-colors">
                  Property Investment
                </Link>
              </li>
              <li>
                <Link href="/services/crop-cultivation" className="text-stone-600 hover:text-stone-900 transition-colors">
                  Crop Cultivation
                </Link>
              </li>
              <li>
                <Link href="/services/agricultural-consulting" className="text-stone-600 hover:text-stone-900 transition-colors">
                  Agricultural Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-stone-500 mt-1 flex-shrink-0" />
                <span className="text-stone-600">
                  {CONTACT.address.line1}
                  <br />
                  {CONTACT.address.line2}
                </span>
              </div>
              <a
                href={CONTACT.phoneUrl}
                className="flex items-center space-x-3 text-stone-600 hover:text-amber-700 transition-colors group"
              >
                <Phone className="w-5 h-5 text-stone-500 group-hover:text-amber-700 flex-shrink-0 transition-colors" />
                <span>{CONTACT.phone}</span>
              </a>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-stone-600 hover:text-amber-700 transition-colors group"
              >
                <MessageCircle className="w-5 h-5 text-stone-500 group-hover:text-amber-700 flex-shrink-0 transition-colors" />
                <span>WhatsApp &mdash; fastest reply</span>
              </a>
              <a
                href={CONTACT.emailUrl}
                className="flex items-center space-x-3 text-stone-600 hover:text-amber-700 transition-colors group"
              >
                <Mail className="w-5 h-5 text-stone-500 group-hover:text-amber-700 flex-shrink-0 transition-colors" />
                <span>{CONTACT.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-stone-500">
              © {currentYear} YUG Estates. All rights reserved.
            </div>
            <div className="flex space-x-8 text-sm">
              <Link href="/privacy-policy" className="text-stone-500 hover:text-stone-900 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-stone-500 hover:text-stone-900 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/sitemap" className="text-stone-500 hover:text-stone-900 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
