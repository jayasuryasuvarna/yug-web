import React from 'react';
import Link from 'next/link';
import { Search, Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
    return (
        <header className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
            <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <div className="flex items-baseline">
                        <span className="text-3xl font-bold tracking-wider text-gray-900">
                            YUG
                        </span>
                        <span className="ml-2 text-sm font-light tracking-[0.3em] text-gray-600 uppercase">
                            Estates
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-10">
                    <Link
                        href="/properties"
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        Properties
                    </Link>
                    <Link
                        href="/investments"
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        Agricultural Investments
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        About Us
                    </Link>
                </div>

                {/* Right side actions */}
                <div className="flex items-center gap-6">
                    {/* Contact Number */}
                    <a
                        href="tel:+919876543210"
                        className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <Phone className="h-4 w-4" />
                        <span>+91 98765 43210</span>
                    </a>

                    {/* Search */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="hidden md:flex hover:bg-gray-100"
                    >
                        <Search className="h-5 w-5 text-gray-600" />
                    </Button>

                    {/* Mobile Menu */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden hover:bg-gray-100"
                    >
                        <Menu className="h-5 w-5 text-gray-600" />
                    </Button>

                    {/* Contact Button */}
                    <Button
                        className="hidden md:flex bg-gray-900 hover:bg-gray-800 text-white"
                    >
                        Contact Us
                    </Button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
