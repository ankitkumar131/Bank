'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { activities } from '@/lib/data';
import { X, Calendar, Users, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';

export default function SocialAchievements() {
  const [selectedActivity, setSelectedActivity] = useState<any | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  useEffect(() => {
    if (selectedActivity) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedActivity]);

  const filteredActivities = activities.filter((act) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'agrarian') return act.category?.toLowerCase().includes('agrarian') || act.category?.toLowerCase().includes('farming');
    if (activeFilter === 'health') return act.category?.toLowerCase().includes('health') || act.category?.toLowerCase().includes('medical');
    if (activeFilter === 'education') return act.category?.toLowerCase().includes('merit') || act.category?.toLowerCase().includes('youth') || act.category?.toLowerCase().includes('literacy');
    if (activeFilter === 'women') return act.category?.toLowerCase().includes('women') || act.category?.toLowerCase().includes('empowerment');
    return true;
  });

  return (
    <main className="min-h-screen bg-slate-50/60 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 rounded-full">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" /> Civic Welfare & Community Impact
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950 mb-3 tracking-tight">
            Social Achievements & Initiatives
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            As a co-operative, our success is measured by the well-being of the Parra, Verla, and Canca communities. We reinvest in agrarian ecology, geriatric health, youth sports, and women&apos;s financial independence.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Initiatives (12)' },
              { id: 'agrarian', label: 'Agrarian & Khazan Revival' },
              { id: 'health', label: 'Healthcare & Eye Clinics' },
              { id: 'education', label: 'Scholarships & Youth' },
              { id: 'women', label: 'Women SHG Empowerment' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Impact Highlights Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
            <div className="text-2xl font-extrabold text-emerald-700">120 Hectares</div>
            <div className="text-xs text-slate-500 font-semibold mt-0.5">Khazan Lowlands Revived</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
            <div className="text-2xl font-extrabold text-navy-900">1,200+ Elders</div>
            <div className="text-xs text-slate-500 font-semibold mt-0.5">Free Medical Screenings</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
            <div className="text-2xl font-extrabold text-amber-700">16 Women SHGs</div>
            <div className="text-xs text-slate-500 font-semibold mt-0.5">Micro-Enterprise Grants</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
            <div className="text-2xl font-extrabold text-teal-700">48 Scholars</div>
            <div className="text-xs text-slate-500 font-semibold mt-0.5">Merit Grants Awarded</div>
          </div>
        </div>

        {/* 4-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => setSelectedActivity(activity)}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={activity.image || '/images/placeholder.svg'}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-navy-950/85 backdrop-blur-md text-amber-400 text-[10px] font-extrabold rounded-full uppercase tracking-wider">
                    {activity.category || 'Initiative'}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-[11px] font-bold text-slate-400 mb-1.5">{activity.date}</div>
                  <h3 className="text-sm sm:text-base font-bold text-navy-950 group-hover:text-navy-700 transition-colors line-clamp-2 mb-2 leading-snug">
                    {activity.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {activity.description}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs font-semibold">
                  <span className="text-emerald-700">{activity.beneficiaries || 'Community Wide'}</span>
                  <span className="text-navy-900 font-bold group-hover:underline">Read More →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
            onClick={() => setSelectedActivity(null)}
          />

          <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row z-10 border border-slate-200">
            <button
              className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-black/65 backdrop-blur-md rounded-full p-2 text-white transition-colors"
              onClick={() => setSelectedActivity(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-slate-100">
              <Image
                src={selectedActivity.image || '/images/placeholder.svg'}
                alt={selectedActivity.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {selectedActivity.category || 'Initiative'}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {selectedActivity.date}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-3 leading-tight">
                  {selectedActivity.title}
                </h2>

                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm mb-6">
                  {selectedActivity.description}
                </p>

                {selectedActivity.beneficiaries && (
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                    <Users className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <div>
                      <span className="text-[11px] text-slate-400 block font-medium">Impact Coverage</span>
                      <strong className="text-xs sm:text-sm text-slate-800">{selectedActivity.beneficiaries}</strong>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedActivity(null)}
                  className="px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
