import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-charcoal-200 pt-16 pb-12 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Institutional Identity Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          
          {/* Logo & Manifesto */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-14 h-14 flex-shrink-0 bg-white rounded-lg p-1 shadow-sm ring-1 ring-white/10">
                <Image
                  src="/bank_logo.png"
                  alt="Parra Verla Canca M.P.A.C.S. Ltd. Official Seal"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg text-white tracking-tight leading-tight">
                  Parra Verla Canca PACS
                </span>
                <span className="font-label text-xs font-semibold tracking-wider text-tertiary-container uppercase mt-0.5">
                  Multipurpose Primary Agriculture Co-operative Society Ltd.
                </span>
                <span className="text-[11px] text-charcoal-400 font-label">
                  Regd. No: 1024/Bardez/1964 | Audit Grade: A (Statutory)
                </span>
              </div>
            </div>

            <p className="text-sm text-charcoal-400 leading-relaxed font-sans max-w-md pt-2">
              Serving the agriculturalists, artisans, and families of North Goa for over 60 years. Grounded in the enduring principle of mutual aid, fiscal thrift, and democratic community stewardship.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/[0.05] rounded-full text-xs font-label text-golden-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Grade-A Statutory Audit Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/[0.05] rounded-full text-xs font-label text-charcoal-300">
                100% Member-Governed
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-label text-xs font-bold uppercase tracking-widest text-golden-400">
              Institutional Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-charcoal-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-tertiary-container text-xs group-hover:translate-x-0.5 transition-transform">
                      ›
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Branch Counters */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-label text-xs font-bold uppercase tracking-widest text-golden-400">
              Head Office & Secretariat
            </h4>
            
            <div className="space-y-3 text-sm text-charcoal-300">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-golden-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-xs leading-relaxed">
                  <strong className="text-white block font-medium">Society Bhavan (Main Counter)</strong>
                  Near St. Anne&apos;s Church, Parra, Bardez, Goa 403510
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-golden-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-xs">+91 98765 43210 / 0832-2274111</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-golden-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xs">secretary@parraverlacancapacs.org</span>
              </div>

              <div className="pt-2">
                <Link
                  href="/contacts"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-golden-300 hover:text-white transition-colors"
                >
                  <span>Submit an Official Inquiry or Service Request</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-charcoal-400">
          <p>
            &copy; {currentYear} Parra Verla Canca M.P.A.C.S. Ltd. All statutory rights reserved. Registered under the Goa Co-operative Societies Act.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-charcoal-500">DICGC Deposit Safeguards Applicable</span>
            <span className="text-charcoal-500">•</span>
            <span className="text-charcoal-500">NABARD Supported Institutional Society</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
