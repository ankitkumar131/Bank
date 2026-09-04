'use client';

import React from 'react';
import Image from 'next/image';
import { directors } from '@/lib/data';

function DirectorCard({ director }: { director: any }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden flex flex-col items-center p-6 sm:p-8 border border-slate-200/80 group">
      <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-5 border-4 border-slate-100 group-hover:border-navy-300 transition-colors shadow-inner">
        <Image
          src={director.image || '/images/placeholder.svg'}
          alt={director.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-bold text-slate-900 text-center mb-1.5 group-hover:text-navy-900 transition-colors">
        {director.name}
      </h3>
      <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase tracking-wider">
        {director.designation}
      </span>
      {director.portfolio && (
        <p className="text-xs text-slate-500 text-center mt-2 font-medium">
          {director.portfolio}
        </p>
      )}
    </div>
  );
}

export default function BoardOfDirectors() {
  const topRow = directors.slice(0, 3);
  const otherRows = directors.slice(3);

  return (
    <main className="min-h-screen bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-widest text-navy-800 bg-navy-100 rounded-full">
            Democratic Governance
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950 mb-2 tracking-tight">
            Our Board of Directors
          </h1>
          <p className="text-lg sm:text-xl font-semibold text-emerald-700">
            Tenure: 2026 – 2031
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Group Banner */}
        <div className="w-full max-w-5xl mx-auto mb-14 md:mb-16 rounded-2xl overflow-hidden shadow-lg border-4 border-white relative h-[250px] sm:h-[340px] md:h-[420px]">
          <Image
            src="/images/general/board-banner.svg"
            alt="Board of Directors Group Meeting"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Top Row - Chairman, Vice Chairman, Secretary */}
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 text-center mb-6">
              Executive Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-14">
              {topRow.map((director) => (
                <DirectorCard key={director.id} director={director} />
              ))}
            </div>
          </div>

          {/* Remaining Directors */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 text-center mb-6">
              Board Members & Committee Conveners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-14 md:mb-16">
              {otherRows.map((director) => (
                <DirectorCard key={director.id} director={director} />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-slate-400 mt-12 md:mt-16">
          <p>Note: Names and photographs shown are placeholder data for demonstration purposes.</p>
        </div>

      </div>
    </main>
  );
}
