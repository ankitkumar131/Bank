'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { activities } from '@/lib/data';
import { X, Calendar, Users } from 'lucide-react';

export default function SocialAchievements() {
  const [selectedActivity, setSelectedActivity] = useState<any | null>(null);

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

  return (
    <main className="min-h-screen bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 rounded-full">
            Civic Stewardship
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950 mb-4 tracking-tight">
            Social Achievements & Activities
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Committed to community development and social welfare through various initiatives and programs.
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* 4-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80"
              onClick={() => setSelectedActivity(activity)}
            >
              <Image
                src={activity.image || '/images/placeholder.svg'}
                alt={activity.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                {activity.category && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                    {activity.category}
                  </span>
                )}
                <h3 className="text-white font-bold text-base leading-snug">
                  {activity.title}
                </h3>
                <span className="text-xs text-emerald-300 mt-2 flex items-center gap-1 font-medium">
                  Click to view details →
                </span>
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
          ></div>

          <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row z-10 border border-slate-200">
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

            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 overflow-y-auto flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {selectedActivity.category || 'Initiative'}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {selectedActivity.date || 'Recent'}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mb-4 leading-tight">
                  {selectedActivity.title}
                </h2>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                  {selectedActivity.description}
                </p>

                {selectedActivity.beneficiaries && (
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                    <Users className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Beneficiaries Reached</span>
                      <strong className="text-sm text-slate-800">{selectedActivity.beneficiaries}</strong>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedActivity(null)}
                  className="px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white rounded-xl text-sm font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
