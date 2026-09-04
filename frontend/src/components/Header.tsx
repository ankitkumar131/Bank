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
    <header className="sticky top-0 z-50 w-full bg-surface/90 backdrop-blur-md border-b border-black/[0.05] transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          
          {/* Logo and Society Branding */}
          <Link 
            href="/" 
            className="flex items-center gap-3.5 group flex-shrink-0"
            onClick={closeMenu}
          >
            <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-lg p-1 shadow-sm ring-1 ring-black/[0.04] transition-transform group-hover:scale-105">
              <Image
                src="/bank_logo.png"
                alt="Parra Verla Canca M.P.A.C.S. Ltd. Official Seal"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-charcoal-900 group-hover:text-primary transition-colors leading-tight">
                  Parra Verla Canca PACS
                </span>
                <span className="hidden lg:inline-block px-1.5 py-0.5 text-[9px] font-label font-bold tracking-widest text-tertiary bg-tertiary-50 rounded">
                  ESTD. 1964
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-label font-medium tracking-wider text-charcoal-500 uppercase leading-snug">
                Multipurpose Primary Agriculture Co-operative Society Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    isActive
                      ? 'bg-surface-container-high text-primary font-semibold'
                      : 'text-charcoal-700 hover:text-primary hover:bg-surface-container-low'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contacts"
              className="px-3.5 py-2 text-xs font-medium text-charcoal-700 hover:text-primary hover:bg-surface-container-high rounded-full transition-colors"
            >
              Enquire
            </Link>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-primary to-primary-container text-white text-xs font-medium tracking-wide rounded-full shadow-sm hover:opacity-95 transition-all"
            >
              <span>Member Desk</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <Link
              href="/contacts"
              className="sm:hidden px-3 py-1.5 bg-gradient-to-r from-primary to-primary-container text-white text-xs font-medium rounded-full"
            >
              Enquire
            </Link>
            <button
              type="button"
              onClick={toggleMenu}
              className="p-2.5 rounded-lg text-charcoal-700 hover:bg-surface-container focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest/95 backdrop-blur-xl border-b border-black/[0.06] shadow-editorial-modal transition-all animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-surface-container text-primary font-semibold'
                      : 'text-charcoal-700 hover:bg-surface-container-low hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-black/[0.05] mt-2 flex flex-col gap-2">
              <Link
                href="/contacts"
                onClick={closeMenu}
                className="w-full text-center py-2.5 bg-gradient-to-r from-primary to-primary-container text-white text-sm font-medium rounded-lg shadow-sm"
              >
                Member Inquiries & Service Request
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
