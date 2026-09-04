'use client';

import React from 'react';
import { branches } from '@/lib/data';
import { MapPin, Phone, Building } from 'lucide-react';

export default function Branches() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-widest text-navy-800 bg-navy-100 rounded-full">
            Local Presence
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950 mb-4 tracking-tight">
            Our Branch Network
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Find a branch near you to access our comprehensive range of banking services.
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group"
            >
              <div className="p-6 sm:p-8 flex-grow">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-0.5 rounded-full">
                    {branch.type || 'Branch Office'}
                  </span>
                  <span className="text-xs font-mono font-medium text-slate-400">
                    {branch.code}
                  </span>
                </div>

                <h2 className="text-2xl font-extrabold text-navy-950 mb-4 group-hover:text-navy-700 transition-colors">
                  {branch.name}
                </h2>

                <div className="space-y-3.5 mb-2">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600 text-sm leading-relaxed">{branch.address}</span>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-600 text-sm font-medium">{branch.phone}</span>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="w-full h-56 sm:h-64 bg-slate-100 border-t border-slate-100">
                <iframe
                  src={branch.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title={`${branch.name} Location`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="text-center text-xs text-slate-400 mt-12 md:mt-16">
          <p>Note: Addresses, phone numbers, and locations are placeholder data for demonstration purposes.</p>
        </div>

      </div>
    </main>
  );
}
