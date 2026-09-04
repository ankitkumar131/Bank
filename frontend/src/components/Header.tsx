'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/data';
import { Phone, Clock, Shield, Sparkles, Send, Menu, X } from 'lucide-react';
import QuickInquiryModal from '@/components/QuickInquiryModal';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* 1. TOP UTILITY TRUST & HELPLINE BAR */}
      <div className="w-full bg-navy-950 text-slate-200 text-xs border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
          {/* Left: Registration & Audit Recognition */}
          <div className="flex items-center gap-2 text-slate-300">
            <span className="inline-flex items-center gap-1 font-semibold text-emerald-400">
              <Shield className="w-3.5 h-3.5" /> Govt. &apos;A&apos; Class Audited
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="hidden sm:inline text-[11px] text-slate-400">
              Regd. Under Goa Co-op Societies Act 2001 (Est. 1964)
            </span>
          </div>

          {/* Center: Live Interest Rate Highlight */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 font-bold border border-amber-400/20 text-[11px]">
              <Sparkles className="w-3 h-3 text-amber-400" /> FD Returns up to 8.25% p.a.
            </span>
            <span className="text-slate-400 text-[11px]">| Gold Loans sanctioned in 30 mins</span>
          </div>

          {/* Right: Working Hours & Direct Helpdesk Line */}
          <div className="flex items-center gap-4 ml-auto sm:ml-0 text-[11px]">
            <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium">Branches Open Today: 8:30 AM – 4:30 PM</span>
            </div>
            <a
              href="tel:08322274111"
              className="flex items-center gap-1.5 font-bold text-amber-300 hover:text-amber-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>0832-2274111</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 justify-between items-center">
            {/* Bank Branding / Logo */}
            <div className="flex items-center flex-shrink-0 min-w-0">
              <Link href="/" className="flex items-center gap-3 group min-w-0">
                <div className="relative p-1 rounded-xl bg-slate-50 border border-slate-200 group-hover:border-navy-400 transition-colors">
                  <Image
                    src="/bank_logo.png"
                    alt="Parra Verla Canca M.P.A.C.S. Ltd. Logo"
                    width={48}
                    height={48}
                    priority
                    className="h-10 sm:h-11 w-auto flex-shrink-0 transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base sm:text-lg lg:text-xl font-extrabold text-navy-950 tracking-tight leading-tight whitespace-nowrap group-hover:text-navy-700 transition-colors">
                      PARRA VERLA CANCA
                    </span>
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-800 leading-tight whitespace-nowrap">
                    M.P.A.C.S. Ltd. • Co-operative Bank
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-semibold transition-all px-3 py-2 rounded-lg ${
                      isActive
                        ? 'bg-navy-50 text-navy-950 font-bold border-b-2 border-navy-900'
                        : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTA & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsInquiryModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <Send className="w-3.5 h-3.5 text-amber-300" />
                <span>Quick Inquire</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex lg:hidden items-center justify-center p-2.5 rounded-xl text-slate-700 hover:text-navy-950 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-navy-800 transition-colors"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[480px] border-b border-slate-200 shadow-xl bg-white' : 'max-h-0'
          }`}
          id="mobile-menu"
        >
          <div className="px-4 pt-3 pb-5 space-y-1.5 sm:px-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-navy-900 text-white font-bold'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-navy-900'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-slate-100 mt-2">
              <button
                onClick={() => {
                  closeMenu();
                  setIsInquiryModalOpen(true);
                }}
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-xl text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-amber-300" /> Quick Callback Request
              </button>

              <div className="mt-3 p-3 bg-slate-50 rounded-xl text-xs text-slate-600 flex items-center justify-between">
                <span>Customer Helpdesk:</span>
                <a href="tel:08322274111" className="font-bold text-navy-900">
                  0832-2274111
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Customer Inquiry Modal */}
      <QuickInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />
    </>
  );
}
