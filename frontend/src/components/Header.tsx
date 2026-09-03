'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/data';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 justify-between items-center">
          {/* Logo and Bank Name */}
          <div className="flex items-center flex-shrink-0 min-w-0">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
              <Image
                src="/bank_logo.png"
                alt="Parra Verla Canca M.P.A.C.S. Ltd. Logo"
                width={50}
                height={50}
                className="h-10 sm:h-[50px] w-auto flex-shrink-0 transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col min-w-0">
                <span className="text-sm sm:text-lg lg:text-xl font-bold text-charcoal-900 tracking-tight leading-tight whitespace-nowrap group-hover:text-burgundy-700 transition-colors">
                  PARRA VERLA CANCA
                </span>
                <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-charcoal-600 leading-tight whitespace-nowrap">
                  M.P.A.C.S. Ltd.
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm lg:text-base font-medium transition-colors hover:text-burgundy-600 py-2 ${
                    isActive ? 'text-burgundy-700 border-b-2 border-burgundy-700' : 'text-charcoal-700'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-charcoal-700 hover:text-burgundy-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-burgundy-600 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 border-b border-gray-100 shadow-md bg-white' : 'max-h-0'
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-warm-50 text-burgundy-700'
                    : 'text-charcoal-700 hover:bg-warm-50 hover:text-burgundy-600'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
