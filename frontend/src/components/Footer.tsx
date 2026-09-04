import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/lib/data';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white pt-16 pb-8 border-t-4 border-emerald-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Bank Identity & Mission */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-xl shadow-md">
                <Image
                  src="/bank_logo.png"
                  alt="Parra Verla Canca M.P.A.C.S. Ltd. Logo"
                  width={48}
                  height={48}
                  className="h-10 w-auto"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-tight text-white leading-tight">
                  PARRA VERLA CANCA
                </span>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  M.P.A.C.S. Ltd.
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Multipurpose Primary Agriculture Co-operative Society Ltd. Dedicated to community thrift, transparent credit, and agrarian prosperity in North Goa since 1964.
            </p>
            <div className="text-[11px] text-slate-400 border-t border-navy-900 pt-3 space-y-1 font-mono">
              <div>Reg. No. 12/BAR/CO-OP/1968</div>
              <div className="text-emerald-400 font-sans font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Govt. Audited &quot;A&quot; Class Society
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
              Explore Navigation
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-emerald-500">›</span> {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services#rate-card"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-amber-300 font-semibold"
                >
                  <span className="text-amber-400">›</span> Official Interest Rate Card
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Schemes */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
              Featured Schemes
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/services#deposits" className="hover:text-white transition-colors">
                  Fixed Deposit (up to 8.25% p.a.)
                </Link>
              </li>
              <li>
                <Link href="/services#loans" className="hover:text-white transition-colors">
                  Gold Loan (sanctioned in 30 mins)
                </Link>
              </li>
              <li>
                <Link href="/services#loans" className="hover:text-white transition-colors">
                  Kisan Agriculture Credit (7.00%)
                </Link>
              </li>
              <li>
                <Link href="/services#deposits" className="hover:text-white transition-colors">
                  Pigmy Daily Doorstep Thrift
                </Link>
              </li>
              <li>
                <Link href="/services#other" className="hover:text-white transition-colors">
                  Electricity & Water Bill Counters
                </Link>
              </li>
              <li>
                <Link href="/branches" className="hover:text-white transition-colors">
                  Safe Deposit Locker Availability
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Helpline */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
              Support & Helpline
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  Head Office, Parra Main Co-op Junction, Bardez, Goa - 403510
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:08322274111" className="hover:text-white font-bold">
                  0832-2274111 / +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:contact@parrabank.com" className="hover:text-white">
                  contact@parrabank.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>Mon – Sat: 8:30 AM – 4:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="mt-12 pt-6 border-t border-navy-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 space-y-3 md:space-y-0">
          <p>
            &copy; {currentYear} Parra Verla Canca M.P.A.C.S. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span>Security Warning: Staff will never ask for PIN or OTP</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <Link href="/contacts" className="hover:text-white transition-colors">
              Grievance Redressal
            </Link>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <Link href="/branches" className="hover:text-white transition-colors">
              Branch Locator
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
