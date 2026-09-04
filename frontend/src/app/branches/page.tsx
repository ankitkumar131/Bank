'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { branches } from '@/lib/data';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Building2, 
  CheckCircle2, 
  ExternalLink,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export default function Branches() {
  const [copiedIfsc, setCopiedIfsc] = useState<string | null>(null);

  const handleCopy = (ifsc: string) => {
    navigator.clipboard.writeText(ifsc);
    setCopiedIfsc(ifsc);
    setTimeout(() => setCopiedIfsc(null), 2000);
  };

  return (
    <div className="min-h-screen bg-surface py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-12 lg:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-50 text-tertiary text-xs font-label font-bold tracking-wider uppercase">
            <Building2 className="w-3.5 h-3.5 text-tertiary" />
            <span>Regional Presence & Teller Counters</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 leading-tight">
            Branch Network & Operating Counters
          </h1>

          <p className="text-base sm:text-lg text-charcoal-600 font-sans leading-relaxed">
            Four interconnected service branches across North Goa equipped with secure locker vaults, agricultural subsidy desks, and direct RTGS/NEFT transaction windows.
          </p>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {branches.map((branch) => (
            <div 
              key={branch.id} 
              id={`branch-${branch.id}`}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-editorial-float flex flex-col justify-between"
            >
              
              {/* Branch Content */}
              <div className="p-7 sm:p-9 space-y-5">
                
                {/* Meta Header */}
                <div className="flex items-center justify-between pb-3 border-b border-black/[0.04]">
                  <span className="font-label text-xs font-bold text-tertiary tracking-wider uppercase">
                    {branch.code}
                  </span>
                  <span className="px-3 py-0.5 rounded-full bg-surface-container-high text-charcoal-700 text-[11px] font-label font-bold uppercase">
                    {branch.type}
                  </span>
                </div>

                {/* Branch Name & Address */}
                <div className="space-y-2">
                  <h2 className="font-serif font-bold text-2xl text-charcoal-900">
                    {branch.name}
                  </h2>
                  <div className="flex items-start gap-2.5 text-sm text-charcoal-600 font-sans">
                    <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>{branch.address}</span>
                  </div>
                </div>

                {/* Timings & Contacts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-surface-container-low space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-charcoal-800">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      <span>Banking Hours</span>
                    </div>
                    <span className="text-xs text-charcoal-600 block font-sans">
                      {branch.hours}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-container-low space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-charcoal-800">
                      <Phone className="w-3.5 h-3.5 text-primary" />
                      <span>Telephone Desk</span>
                    </div>
                    <span className="text-xs text-charcoal-600 block font-sans">
                      {branch.phone}
                    </span>
                  </div>
                </div>

                {/* Key Facilities & IFSC */}
                <div className="p-4 rounded-xl bg-surface-container space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-label uppercase tracking-wider text-charcoal-700 font-semibold">
                      IFSC / NEFT Code:
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(branch.ifsc)}
                      className="text-xs text-primary hover:underline font-mono font-semibold"
                    >
                      {branch.ifsc} {copiedIfsc === branch.ifsc ? '(Copied!)' : '(Copy)'}
                    </button>
                  </div>
                  <div className="text-xs text-charcoal-600 font-sans leading-relaxed">
                    <strong className="text-charcoal-900">Installed Facilities: </strong>
                    {branch.features}
                  </div>
                </div>

                {/* Direct Action */}
                <div className="pt-2 flex items-center justify-between gap-4">
                  <Link
                    href={`/contacts?branch=${encodeURIComponent(branch.name)}`}
                    className="btn-editorial-primary text-xs inline-flex items-center gap-1.5"
                  >
                    <span>Contact This Branch</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal-600 hover:text-primary transition-colors"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

              {/* Map Embed Frame */}
              <div className="w-full h-56 sm:h-64 bg-surface-container-high relative">
                <iframe
                  src={branch.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                  title={`${branch.name} Map Location`}
                />
              </div>

            </div>
          ))}
        </div>

        {/* Central Banking Clearing Protocols & Notice */}
        <div className="bg-surface-container-low rounded-2xl p-8 sm:p-10 space-y-4">
          <div className="flex items-center gap-2 text-tertiary">
            <ShieldAlert className="w-5 h-5" />
            <span className="archival-label">Statutory Notice & Clearing Schedule</span>
          </div>

          <h3 className="font-serif font-bold text-xl sm:text-2xl text-charcoal-900">
            Cash Transactions & Safe Deposit Locker Regulations
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs text-charcoal-600 font-sans leading-relaxed">
            <div>
              <strong className="text-charcoal-900 block mb-1">Cash Deposit Windows:</strong>
              Cash counters accept currency deposits until 30 minutes prior to official daily closing times at all four branches.
            </div>
            <div>
              <strong className="text-charcoal-900 block mb-1">Locker Custody Hours:</strong>
              Safe deposit locker vaults at the Parra Main Office and Mapusa Branch operate from 9:30 AM to 3:30 PM on weekdays.
            </div>
            <div>
              <strong className="text-charcoal-900 block mb-1">Doorstep Pigmy Reconciliation:</strong>
              Member pigmy account passbooks can be submitted at any branch counter for immediate machine ledger synchronization.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
