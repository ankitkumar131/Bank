'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { activities } from '@/lib/data';
import { Activity } from '@/types';
import { Calendar, Users, X, Award, ArrowRight, HeartHandshake } from 'lucide-react';

export default function SocialAchievements() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

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

  const categories = ['all', 'Agrarian', 'Healthcare', 'Merit', 'Community'];

  const filtered = activities.filter((act) => {
    if (filterCategory === 'all') return true;
    const cat = act.category?.toLowerCase() || '';
    return cat.includes(filterCategory.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-surface py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-12 lg:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-50 text-tertiary text-xs font-label font-bold tracking-wider uppercase">
            <HeartHandshake className="w-3.5 h-3.5 text-tertiary" />
            <span>Civic Stewardship & Common-Good Dividends</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 leading-tight">
            Social Achievements & Community Stewardship
          </h1>

          <p className="text-base sm:text-lg text-charcoal-600 font-sans leading-relaxed">
            Statutorily mandated to channel a percentage of annual operational surpluses into village welfare, ecological conservation, student scholarships, and geriatric medical access.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-black/[0.05]">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilterCategory(c)}
              className={`px-4 py-1.5 rounded-full text-xs font-label font-semibold tracking-wider uppercase transition-all ${
                filterCategory === c
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-surface-container text-charcoal-700 hover:bg-surface-container-high'
              }`}
            >
              {c === 'all' ? `All Initiatives (${activities.length})` : c}
            </button>
          ))}
        </div>

        {/* Visual Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filtered.map((activity) => (
            <div
              key={activity.id}
              onClick={() => setSelectedActivity(activity)}
              className="group cursor-pointer bg-surface-container-lowest rounded-2xl overflow-hidden shadow-editorial-float flex flex-col justify-between transition-all duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="relative w-full h-56 bg-surface-container overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {activity.category && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-charcoal-900/80 backdrop-blur-sm text-white text-[10px] font-label font-bold rounded-md uppercase tracking-wider">
                      {activity.category}
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-charcoal-500 font-sans">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span>{activity.date}</span>
                    </span>
                    {activity.beneficiaries && (
                      <>
                        <span>•</span>
                        <span className="text-charcoal-700 font-medium">
                          {activity.beneficiaries}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="font-serif font-bold text-lg text-charcoal-900 group-hover:text-primary transition-colors leading-snug">
                    {activity.title}
                  </h3>

                  <p className="text-xs text-charcoal-600 font-sans leading-relaxed line-clamp-3">
                    {activity.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-black/[0.04] mt-2 flex items-center justify-between text-xs font-semibold text-primary">
                <span>View Complete Dossier</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Alexandria Scholarly Dossier */}
        {selectedActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
            <div
              className="absolute inset-0 bg-charcoal-900/60 backdrop-blur-md"
              onClick={() => setSelectedActivity(null)}
            />

            <div className="relative bg-surface-container-lowest rounded-2xl shadow-editorial-modal max-w-3xl w-full overflow-hidden z-10 max-h-[90vh] flex flex-col">
              
              <button
                type="button"
                onClick={() => setSelectedActivity(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-charcoal-800 flex items-center justify-center hover:bg-white transition-colors shadow-sm"
                aria-label="Close dossier"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-72 sm:h-80 bg-surface-container flex-shrink-0">
                <Image
                  src={selectedActivity.image}
                  alt={selectedActivity.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-7 sm:p-10 overflow-y-auto space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  {selectedActivity.category && (
                    <span className="archival-badge">
                      {selectedActivity.category}
                    </span>
                  )}
                  <span className="text-xs text-charcoal-500 font-sans">
                    {selectedActivity.date}
                  </span>
                  {selectedActivity.beneficiaries && (
                    <span className="text-xs text-charcoal-700 font-medium font-sans">
                      Impact Reach: {selectedActivity.beneficiaries}
                    </span>
                  )}
                </div>

                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-charcoal-900 leading-tight">
                  {selectedActivity.title}
                </h2>

                <p className="text-sm sm:text-base text-charcoal-700 font-sans leading-relaxed">
                  {selectedActivity.description}
                </p>

                <div className="pt-4 border-t border-black/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-[11px] text-charcoal-500 font-label uppercase">
                    Parra Verla Canca Common-Good Appropriation #2026
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedActivity(null)}
                    className="btn-editorial-secondary text-xs"
                  >
                    Close Dossier
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
