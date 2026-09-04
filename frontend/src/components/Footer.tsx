import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-white pt-16 pb-8 border-t-[6px] border-burgundy-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Column 1: Logo & Bank Name */}
          <div className="flex flex-col space-y-5">
            <div className="flex items-center gap-4">
              <div className="bg-white p-1.5 rounded shadow-sm">
                <Image
                  src="/bank_logo.png"
                  alt="Bank Logo"
                  width={50}
                  height={50}
                  className="h-[50px] w-auto"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wider text-golden-400 leading-tight">
                  PARRA VERLA CANCA
                </span>
                <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest mt-0.5">
                  M.P.A.C.S. Ltd.
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mt-2">
              Providing reliable banking and agricultural cooperative services to the community. Dedicated to your financial growth, trust, and stability since our inception.
            </p>
          </div>

          {/* Column 2: Important Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-orange-500 mb-5 border-b border-charcoal-700 pb-2 inline-block w-fit">
              Important Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:pl-1.5 transition-all duration-300 text-sm flex items-center group"
                  >
                    <span className="text-golden-500 mr-2 group-hover:text-orange-400 transition-colors">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-orange-500 mb-5 border-b border-charcoal-700 pb-2 inline-block w-fit">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start">
                <svg className="h-5 w-5 text-golden-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  Parra Verla Canca M.P.A.C.S. Ltd.<br />
                  Main Branch, Parra<br />
                  Goa, India
                </span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-golden-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-golden-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@parrabank.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-charcoal-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>
            &copy; {currentYear} Parra Verla Canca M.P.A.C.S. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
