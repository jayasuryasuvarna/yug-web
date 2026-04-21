"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Phone, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT } from '@/lib/constants';

const NAV_LINKS = [
    { href: '/properties', label: 'Properties' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
];

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    aria-label="YUG Estates home"
                    className="group inline-flex items-baseline gap-1.5 shrink-0 cursor-pointer py-2 -my-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
                >
                    <span className="font-serif text-2xl font-semibold tracking-wider text-stone-900 group-hover:text-amber-700 transition-colors">
                        YUG
                    </span>
                    <span className="text-xs font-light tracking-[0.3em] text-amber-700 uppercase group-hover:text-amber-800 transition-colors">
                        Estates
                    </span>
                </Link>

                <div className="hidden md:flex items-center justify-end flex-1">
                    <div className="flex items-center gap-8">
                        {NAV_LINKS.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="h-4 w-px bg-stone-300" />
                        <a
                            href={CONTACT.phoneUrl}
                            aria-label={`Call ${CONTACT.phone}`}
                            className="flex items-center gap-1.5 text-sm font-medium text-stone-600 hover:text-amber-700 transition-colors"
                        >
                            <Phone className="h-4 w-4" aria-hidden="true" />
                            <span className="hidden lg:inline">Call</span>
                        </a>
                        <a
                            href={CONTACT.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Message us on WhatsApp"
                            className="flex items-center gap-1.5 text-sm font-medium text-stone-600 hover:text-amber-700 transition-colors"
                        >
                            <MessageCircle className="h-4 w-4" aria-hidden="true" />
                            <span className="hidden lg:inline">WhatsApp</span>
                        </a>
                        <Link href="/contact">
                            <Button
                                className="bg-stone-900 hover:bg-stone-950 text-white cursor-pointer"
                                size="sm"
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden hover:bg-stone-100 cursor-pointer"
                    onClick={() => setMobileOpen(v => !v)}
                    aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-nav"
                >
                    {mobileOpen ? (
                        <X className="h-5 w-5 text-stone-700" />
                    ) : (
                        <Menu className="h-5 w-5 text-stone-700" />
                    )}
                </Button>
            </nav>

            {mobileOpen && (
                <div
                    id="mobile-nav"
                    className="md:hidden border-t border-stone-200 bg-white"
                >
                    <div className="px-4 py-4 flex flex-col gap-1">
                        {NAV_LINKS.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="px-3 py-3 rounded-lg text-base font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href={CONTACT.phoneUrl}
                            className="px-3 py-3 rounded-lg text-base font-medium text-stone-700 hover:bg-stone-50 hover:text-amber-700 transition-colors flex items-center gap-3"
                        >
                            <Phone className="h-4 w-4 text-amber-700" aria-hidden="true" />
                            <span className="flex-1">Call</span>
                            <span className="text-sm text-stone-500">{CONTACT.phone}</span>
                        </a>
                        <a
                            href={CONTACT.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-3 rounded-lg text-base font-medium text-stone-700 hover:bg-stone-50 hover:text-amber-700 transition-colors flex items-center gap-3"
                        >
                            <MessageCircle className="h-4 w-4 text-amber-700" aria-hidden="true" />
                            <span className="flex-1">WhatsApp</span>
                            <span className="text-sm text-stone-500">Fast reply</span>
                        </a>
                        <Link
                            href="/contact"
                            onClick={() => setMobileOpen(false)}
                            className="mt-2"
                        >
                            <Button className="w-full bg-stone-900 hover:bg-stone-950 text-white cursor-pointer">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
