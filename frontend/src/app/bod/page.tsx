'use client';

import React from 'react';
import Image from 'next/image';
import { directors } from '@/lib/data';
import { ShieldCheck, Award, Users, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

function ExecutiveCard({ director }: { director: any }) {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden flex flex-col p-6 sm:p-8 border border-slate-200 group">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-4">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-4 border-slate-100 group-hover:border-navy-300 transition-colors shadow-inner flex-shrink-0">
          <Image
            src={director.image || '/images/placeholder.svg'}
            alt={director.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="text-center sm:text-left flex-grow">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900 border border-amber-300 uppercase tracking-wider mb-2">
            {director.designation}
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-navy-950 group-hover:text-navy-700 transition-colors">
            {director.name}
          </h3>
          <p className="text-xs font-bold text-emerald-800 mt-1">
            {director.portfolio}
          </p>
        </div>
      </div>

      {director.bio && (
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 mt-auto">
          {director.bio}
        </p>
      )}
    </div>
  );
}

function DirectorCard({ director }: { director: any }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col items-center p-6 border border-slate-200 group text-center">
      <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-slate-100 group-hover:border-navy-300 transition-colors shadow-inner">
        <Image
          src={director.image || '/images/placeholder.svg'}
          alt={director.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-navy-900 transition-colors">
        {director.name}
      </h3>

      <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-navy-50 text-navy-900 border border-navy-200 uppercase tracking-wider mb-2">
        {director.designation}
      </span>

      {director.portfolio && (
        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
          {director.portfolio}
        </p>
      )}
    </div>
  );
}

export default function BoardOfDirectors() {
  const executives = directors.slice(0, 3);
  const committeeDirectors = directors.slice(3);

  return (
    <main className="min-h-screen bg-slate-50/60 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-widest text-navy-900 bg-navy-100 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> Democratic Fiduciary Stewardship
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950 mb-3 tracking-tight">
            Board of Directors
          </h1>
          <p className="text-base sm:text-lg font-semibold text-emerald-800">
            Elected by Shareholders • Tenure 2026 – 2031
          </p>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto">
            Governed in accordance with the Goa Co-operative Societies Act 2001, safeguarding member savings and directing credit toward agrarian progress.
          </p>
        </div>

        {/* Group Banner */}
        <div className="w-full max-w-5xl mx-auto mb-14 rounded-3xl overflow-hidden shadow-xl border-4 border-white relative h-[250px] sm:h-[340px] md:h-[420px]">
          <Image
            src="/images/general/board-banner.svg"
            alt="Board of Directors Group Meeting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                Democratic Co-operative Assembly
              </span>
              <h2 className="text-xl sm:text-2xl font-bold">
                Serving the Collective Prosperity of Parra, Verla & Canca
              </h2>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Executive Leadership */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-navy-900 bg-navy-50 border border-navy-200 px-3 py-1 rounded-full">
                Executive Leadership
              </span>
              <div className="flex-grow h-px bg-slate-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {executives.map((director) => (
                <ExecutiveCard key={director.id} director={director} />
              ))}
            </div>
          </div>

          {/* Committee Conveners & Directors */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
                Board Members & Committee Conveners
              </span>
              <div className="flex-grow h-px bg-slate-200" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {committeeDirectors.map((director) => (
                <DirectorCard key={director.id} director={director} />
              ))}
            </div>
          </div>
        </div>

        {/* Governance Principles Charter */}
        <div className="mt-16 bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm max-w-5xl mx-auto">
          <h3 className="text-lg font-bold text-navy-950 mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" /> Governance Pillars & Statutory Compliance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
            <div>
              <strong className="text-slate-900 block mb-1">Annual General Assembly (AGM):</strong>
              Full democratic balance sheet inspection and dividend deliberation attended by shareholder members.
            </div>
            <div>
              <strong className="text-slate-900 block mb-1">Govt. Statutory Audit:</strong>
              Class &quot;A&quot; rating maintained consecutively under Registrar of Co-operative Societies scrutiny.
            </div>
            <div>
              <strong className="text-slate-900 block mb-1">Fiduciary Reserves:</strong>
              Over ₹125 Crores in public deposits safeguarded with statutory liquidity ratio buffers.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
