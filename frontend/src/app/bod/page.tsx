'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { directors } from '@/lib/data';
import { ShieldCheck, FileCheck, CheckCircle2, Award, Calendar } from 'lucide-react';

export default function BoardOfDirectors() {
  const topRow = directors.slice(0, 3);
  const otherDirectors = directors.slice(3);

  return (
    <div className="min-h-screen bg-surface py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-12 lg:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-50 text-tertiary text-xs font-label font-bold tracking-wider uppercase">
            <Award className="w-3.5 h-3.5 text-tertiary" />
            <span>Statutory Council & Fiduciary Governance</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 leading-tight">
            Board of Directors (Tenure 2026 – 2031)
          </h1>

          <p className="text-base sm:text-lg text-charcoal-600 font-sans leading-relaxed">
            Democratically elected by our general membership under the Goa Co-operative Societies Act. The Board upholds fiduciary prudence, credit risk vigilance, and unbroken community development.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-sans text-charcoal-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Certified Electoral Term: 2026 – 2031</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Registered with Assistant Registrar of Co-operative Societies, Mapusa</span>
            </span>
          </div>
        </div>

        {/* Board Banner in Scholarly Frame */}
        <div className="bg-surface-container-low rounded-2xl p-4 sm:p-6 mb-16 space-y-3">
          <div className="relative w-full h-[240px] sm:h-[340px] lg:h-[420px] rounded-xl overflow-hidden bg-surface-container">
            <Image 
              src="/images/general/board-banner.svg" 
              alt="Board of Directors Official Plenary Assembly"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-2 pt-1 text-xs text-charcoal-600 font-sans">
            <span>Official Plenary Convening at Society Bhavan Secretariat, Parra</span>
            <span className="font-label text-tertiary font-bold tracking-wider uppercase">
              Annual Statutory Declaration 2026
            </span>
          </div>
        </div>

        {/* 1. Primary Executive Leadership (3 Members) */}
        <div className="mb-16 space-y-6">
          <div className="pb-3 border-b border-black/[0.05] flex items-center justify-between">
            <div>
              <span className="archival-label block">Executive Council</span>
              <h2 className="font-serif font-bold text-2xl text-charcoal-900">
                Principal Society Officers
              </h2>
            </div>
            <span className="text-xs font-label text-charcoal-500 hidden sm:inline-block">
              Statutory Signatories
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topRow.map((director) => (
              <div 
                key={director.id} 
                className="bg-surface-container-lowest rounded-2xl p-7 shadow-editorial-float space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="relative w-full h-56 rounded-xl overflow-hidden bg-surface-container">
                    <Image 
                      src={director.image} 
                      alt={director.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-charcoal-900/85 backdrop-blur-md text-white text-[11px] font-label font-bold rounded-md uppercase tracking-wider">
                      {director.designation}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-serif font-bold text-xl text-charcoal-900">
                      {director.name}
                    </h3>
                    <p className="text-xs font-semibold text-primary font-sans">
                      {director.portfolio}
                    </p>
                    <p className="text-xs text-charcoal-600 font-sans leading-relaxed pt-1">
                      {director.bio}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/[0.04] flex items-center justify-between text-[11px] text-charcoal-500 font-label">
                  <span>Tenure: {director.tenure}</span>
                  <span className="text-emerald-700 font-medium">Certified Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Governing Council Directors (6 Members) */}
        <div className="mb-16 space-y-6">
          <div className="pb-3 border-b border-black/[0.05] flex items-center justify-between">
            <div>
              <span className="archival-label block">Democratic Delegates</span>
              <h2 className="font-serif font-bold text-2xl text-charcoal-900">
                Board Directors & Committee Conveners
              </h2>
            </div>
            <span className="text-xs font-label text-charcoal-500 hidden sm:inline-block">
              Elected by Agrarian Assembly
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherDirectors.map((director) => (
              <div 
                key={director.id} 
                className="bg-surface-container-low rounded-xl p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="relative w-full h-44 rounded-lg overflow-hidden bg-surface-container">
                    <Image 
                      src={director.image} 
                      alt={director.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-surface-container-lowest/90 backdrop-blur-sm text-charcoal-900 text-[10px] font-label font-bold rounded">
                      {director.designation}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif font-bold text-lg text-charcoal-900">
                      {director.name}
                    </h3>
                    <p className="text-xs text-primary font-medium font-sans">
                      {director.portfolio}
                    </p>
                    <p className="text-xs text-charcoal-600 font-sans line-clamp-2 pt-1">
                      {director.bio}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-black/[0.04] text-[11px] text-charcoal-500 font-label flex justify-between">
                  <span>Term: 2026 – 2031</span>
                  <span className="text-charcoal-600">Bardez Constituency</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Statutory Committees & Institutional Inquiries */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-surface-container-low p-6 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
              <FileCheck className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-charcoal-900">
              Credit Scrutiny Committee
            </h4>
            <p className="text-xs text-charcoal-600 font-sans leading-relaxed">
              Examines mortgage land documents, agrarian titles, and borrower debt capacity every Thursday to ensure fair, non-discriminatory lending.
            </p>
          </div>

          <div className="bg-surface-container-low p-6 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-tertiary">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-charcoal-900">
              Audit & Risk Oversight
            </h4>
            <p className="text-xs text-charcoal-600 font-sans leading-relaxed">
              Maintains unbroken compliance with the State Registrar of Co-operatives, safeguarding 100% of liquid reserves and deposit ratios.
            </p>
          </div>

          <div className="bg-surface-container-low p-6 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-emerald-700">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-charcoal-900">
              Member Welfare Board
            </h4>
            <p className="text-xs text-charcoal-600 font-sans leading-relaxed">
              Supervises scholarship funds, health camps, pigmy collection audit trails, and farmer flood relief subsidies each fiscal quarter.
            </p>
          </div>
        </div>

        {/* Action Link to Contact */}
        <div className="bg-surface-container-lowest rounded-2xl p-8 sm:p-10 shadow-editorial-float flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="archival-label">Secretariat Access</span>
            <h3 className="font-serif font-bold text-2xl text-charcoal-900">
              Request Minutes or File a Member Petition
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 font-sans">
              Shareholders have the democratic right to review registered by-laws and audit statements.
            </p>
          </div>

          <Link
            href="/contacts"
            className="btn-editorial-primary flex-shrink-0"
          >
            <span>Contact Board Secretariat</span>
            <span className="ml-1.5">→</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
