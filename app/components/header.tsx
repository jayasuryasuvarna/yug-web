import React from 'react';
import Link from 'next/link';
import { Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
    return (
        <header className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="shrink-0">
                    <div className="flex items-baseline">
                        <span className="text-2xl font-bold tracking-wider text-gray-900">
                            YUG
                        </span>
                        <span className="ml-1.5 text-xs font-light tracking-[0.3em] text-gray-600 uppercase">
                            Estates
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center justify-end flex-1">
                    <div className="flex items-center gap-8">
                        <Link
                            href="/properties"
                            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Properties
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            About Us
                        </Link>
                        <div className="h-4 w-px bg-gray-200" />
                        <a
                            href="tel:+919876543210"
                            className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <Phone className="h-4 w-4" />
                            <span>+91 98765 43210</span>
                        </a>
                        <Link href="/contact">
                            <Button
                                className="bg-gray-900 hover:bg-gray-800 text-white"
                                size="sm"
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden hover:bg-gray-100"
                >
                    <Menu className="h-5 w-5 text-gray-600" />
                </Button>
            </nav>
        </header>
    );
};

export default Header;
