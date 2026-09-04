'use client';

import React, { useState } from 'react';
import { branches } from '@/lib/data';
import {
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  Building,
  ExternalLink,
  Sparkles,
  Search,
  CheckCircle2,
} from 'lucide-react';

export default function Branches() {
  const [filterType, setFilterType] = useState<string>('ALL');

  const filteredBranches = branches.filter((b) => {
    if (filterType === 'ALL') return true;
    return b.type === filterType;
  });

  return (
    <main className="min-h-screen bg-slate-50/50 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Convenient Access Across Bardez
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950 mb-4 tracking-tight">
            Branch Network & Service Centers
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            Visit any of our 4 physical service counters for instant cash transactions, certified gold loan appraisals, safe deposit lockers, and utility bill settlements.
          </p>

          {/* Branch Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { id: 'ALL', label: 'All Branches (4)' },
              { id: 'HEADQUARTERS', label: 'Headquarters (Parra)' },
              { id: 'COMMERCIAL', label: 'Commercial (Mapusa)' },
              { id: 'AGRARIAN', label: 'Agrarian (Verla)' },
              { id: 'COMMUNITY', label: 'Community (Canca)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  filterType === tab.id
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              id={`branch-${branch.id}`}
              className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col group scroll-mt-24"
            >
              {/* Branch Header Strip */}
              <div className="p-6 sm:p-8 flex-grow">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                      {branch.type || 'Branch Office'}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {branch.code}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Open Mon–Sat
                  </span>
                </div>

                <h2 className="text-2xl font-extrabold text-navy-950 mb-3 group-hover:text-navy-700 transition-colors">
                  {branch.name}
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 text-sm leading-relaxed">{branch.address}</span>
                  </div>

                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 text-xs sm:text-sm font-medium">{branch.hours}</span>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <a
                      href={`tel:${branch.phone.split('/')[0].trim()}`}
                      className="text-slate-800 text-sm font-bold hover:text-emerald-700 underline"
                    >
                      {branch.phone}
                    </a>
                  </div>
                </div>

                {/* Key Facilities Badges */}
                <div className="border-t border-slate-100 pt-4">
                  <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block mb-2">
                    Branch Facilities:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {branch.features.split(',').map((feat, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        {feat.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-4 flex gap-3">
                <a
                  href={`tel:${branch.phone.split('/')[0].trim()}`}
                  className="flex-1 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs sm:text-sm text-center shadow transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-4 h-4" /> Call Desk
                </a>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(branch.name + ' ' + branch.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-xl text-xs sm:text-sm text-center shadow transition-colors flex items-center justify-center gap-1.5"
                >
                  <ExternalLink className="w-4 h-4" /> Directions
                </a>
              </div>

              {/* Map embed */}
              <div className="w-full h-56 sm:h-64 bg-slate-100 border-t border-slate-200">
                <iframe
                  src={branch.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title={`${branch.name} Location Map`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Banking Hours Reminder Card */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-slate-200 max-w-3xl mx-auto text-center shadow-sm">
          <h4 className="text-base font-bold text-navy-950 mb-1">Standard Banking Operating Hours</h4>
          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            Counters operate Monday through Saturday from <strong>8:30 AM to 4:30 PM</strong>. Clearing & RTGS cut-off is <strong>3:30 PM</strong>. Branches remain closed on Sundays and Goa Public Holidays.
          </p>
          <span className="inline-block text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
            Society IFSC / Clearing RTGS Identifier: COOP0001001
          </span>
        </div>
      </div>
    </main>
  );
}
