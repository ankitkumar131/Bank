'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  depositSchemes, 
  loanSchemes, 
  otherServices, 
  activities, 
  directors, 
  branches,
  serviceOptions 
} from '@/lib/data';
import ServiceCard from '@/components/ServiceCard';
import { 
  ShieldCheck, 
  Users, 
  Landmark, 
  ArrowRight, 
  Phone, 
  Clock, 
  MapPin, 
  Calendar,
  CheckCircle2,
  Sparkles,
  Send
} from 'lucide-react';

export default function HomePage() {
  // Quick request form state on home page
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formService, setFormService] = useState('saving-deposit');
  const [formBranch, setFormBranch] = useState('Parra Main Office');
  const [formNotes, setFormNotes] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface selection:bg-primary/10 selection:text-primary">
      
      {/* 1. HERO SECTION: Scholarly Authority & Generous Whitespace */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Authoritative Editorial Narrative */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Archival Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tertiary-50 text-tertiary text-xs font-label font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-tertiary" />
                <span>A Grade Statutory Audit Govt Recognized Society</span>
              </div>

              {/* Serif Headline */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 leading-[1.15]">
                Rooted in Soil, Empowering Community: Six Decades of Co-operative Banking Excellence
              </h1>

              {/* Scholarly Narrative */}
              <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed font-sans max-w-2xl">
                Established on the steadfast Vedic principle of <span className="italic font-serif text-charcoal-900">&lsquo;परस्परं भावयन्तः&rsquo;</span> (thriving and deliberating together in unity), Parra Verla Canca PACS safeguards generations of rural wealth, cultivates agrarian prosperity, and provides modern banking access to thousands across North Goa.
              </p>

              {/* Primary Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="btn-editorial-primary inline-flex items-center gap-2"
                >
                  <span>Explore Banking Schemes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/bod"
                  className="btn-editorial-secondary inline-flex items-center gap-2"
                >
                  <span>Our 60-Year Legacy</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-black/[0.05]">
                <div className="flex items-center gap-2.5 text-xs font-sans text-charcoal-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>DICGC Assured Guarantees</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-sans text-charcoal-700">
                  <Users className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>100% Member-Owned</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-sans text-charcoal-700">
                  <Landmark className="w-4 h-4 text-tertiary flex-shrink-0" />
                  <span>State-Grade Core Accounting</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-End Editorial Highlight Card */}
            <div className="lg:col-span-5">
              <div className="bg-surface-container-lowest rounded-2xl p-7 sm:p-9 shadow-editorial-float relative space-y-6">
                
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-black/[0.04]">
                  <div>
                    <span className="archival-label block">Prime Interest Return</span>
                    <h3 className="font-serif font-bold text-xl text-charcoal-900 mt-0.5">
                      Monthly Deposit Scheme
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 bg-primary-50 text-primary text-[10px] font-label font-bold tracking-wider rounded-md uppercase">
                    Fixed Deposits
                  </span>
                </div>

                {/* Rate Showcase */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-surface-container-low flex items-center justify-between">
                    <div>
                      <span className="text-xs text-charcoal-500 font-sans block">Senior Citizens Surplus, FD</span>
                      <strong className="font-serif text-2xl font-bold text-primary">8.25% p.a.</strong>
                    </div>
                    <span className="text-xs font-label font-medium text-charcoal-600 bg-white px-2.5 py-1 rounded">
                      365 – 555 Days
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-container-low flex items-center justify-between">
                    <div>
                      <span className="text-xs text-charcoal-500 font-sans block">Agrarian & Gold Facility</span>
                      <strong className="font-serif text-2xl font-bold text-tertiary">9.00% p.a.</strong>
                    </div>
                    <span className="text-xs font-label font-medium text-charcoal-600 bg-white px-2.5 py-1 rounded">
                      Instant Disbursals
                    </span>
                  </div>
                </div>

                {/* Micro-Notice */}
                <div className="p-3.5 rounded-lg bg-surface-container text-xs text-charcoal-600 font-sans leading-relaxed">
                  <strong className="font-medium text-charcoal-900 block mb-0.5">Member Welfare Guarantee:</strong>
                  Pigmy collection doorstep agents service 20+ rural zones daily, enabling real-time SMS and receipt vouchers.
                </div>

                <div className="pt-2">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-bold font-label tracking-wider uppercase text-primary hover:text-primary-hover group"
                  >
                    <span>Review Complete Tariff & Scheme Ticker</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS BAR: Tonal Layers (No Lines) */}
      <section className="py-10 bg-surface-container-low">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 rounded-xl bg-surface-container-lowest space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-primary block tracking-tight">
                60+
              </span>
              <span className="font-label text-xs font-bold tracking-wider uppercase text-charcoal-900 block">
                Years of Service
              </span>
              <span className="text-xs text-charcoal-500 font-sans block">
                In uninterrupted legacy since 1964
              </span>
            </div>

            <div className="p-5 rounded-xl bg-surface-container-lowest space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-tertiary block tracking-tight">
                ₹125+ Cr
              </span>
              <span className="font-label text-xs font-bold tracking-wider uppercase text-charcoal-900 block">
                Aggregate Deposits
              </span>
              <span className="text-xs text-charcoal-500 font-sans block">
                Entrusted by community savers
              </span>
            </div>

            <div className="p-5 rounded-xl bg-surface-container-lowest space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-primary block tracking-tight">
                28,500+
              </span>
              <span className="font-label text-xs font-bold tracking-wider uppercase text-charcoal-900 block">
                Active Savings Accounts
              </span>
              <span className="text-xs text-charcoal-500 font-sans block">
                Household families served daily
              </span>
            </div>

            <div className="p-5 rounded-xl bg-surface-container-lowest space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-emerald-700 block tracking-tight">
                Grade-A
              </span>
              <span className="font-label text-xs font-bold tracking-wider uppercase text-charcoal-900 block">
                Audit Classification
              </span>
              <span className="text-xs text-charcoal-500 font-sans block">
                State Registrar of Co-operatives
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FOUNDATION & ETHOS: Scholarly Narrative with Archival Quote */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Archival Image Card */}
            <div className="lg:col-span-5">
              <div className="bg-surface-container-low rounded-2xl p-6 sm:p-8 space-y-5">
                <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-surface-container">
                  <Image
                    src="/images/activities/activity-10.svg"
                    alt="Founding Assembly Archives 1964"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-2">
                  <span className="archival-label">Founding General Assembly — 1964</span>
                  <blockquote className="font-serif italic text-sm text-charcoal-800 leading-relaxed">
                    &ldquo;The true wealth of a village is not counted in gold, but in mutual faith and collective thrift.&rdquo;
                  </blockquote>
                  <span className="text-[11px] text-charcoal-500 font-label block">
                    — Founder&apos;s Assembly Resolution, Bardez Taluka, 1964
                  </span>
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="archival-label">Our Foundation & Ethos</span>
              
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-900 tracking-tight leading-tight">
                A Democratic Financial Institution Conceived by Agrarian Visionaries
              </h2>

              <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-sans">
                Six decades ago, farmers, coconut plantation tenders, and small artisans in the villages of Parra, Verla, and Canca gathered under the shade of ancient banyan trees to forge a collective economic sanctuary. Free from usurious lending and urban neglect, the Society was registered to ensure that village savings remained directly invested in village soil.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-xl bg-surface-container-low space-y-2">
                  <h4 className="font-serif font-bold text-base text-charcoal-900">
                    Grassroots Governance
                  </h4>
                  <p className="text-xs text-charcoal-600 font-sans leading-relaxed">
                    Board of Directors democratically elected from active agriculturalists and community visionaries every five years.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-container-low space-y-2">
                  <h4 className="font-serif font-bold text-base text-charcoal-900">
                    Financial Inclusivity
                  </h4>
                  <p className="text-xs text-charcoal-600 font-sans leading-relaxed">
                    Zero-fee savings accounts for senior women, rural youths, and tenant cultivators across Bardez taluka.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/bod"
                  className="btn-editorial-tertiary"
                >
                  <span>Meet Our Democratic Board of Directors (2026–2031)</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SCHEMES & SERVICES: Tonal Cards with Quick Request Links */}
      <section className="py-16 lg:py-24 bg-surface-container-low">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 lg:mb-16 space-y-3">
            <span className="archival-label">Prudent Financial Instruments</span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-900 tracking-tight">
              Institutional Banking with Community Warmth
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed">
              Engineered for agriculturalists, salaried professionals, senior citizens, and micro-entrepreneurs. Explore transparent deposit yields and flexible lending terms.
            </p>
          </div>

          {/* Group 1: Deposits */}
          <div className="space-y-6 mb-12">
            <div className="flex items-center justify-between pb-2 border-b border-black/[0.04]">
              <div className="flex items-center gap-3">
                <h3 className="font-serif font-bold text-xl text-charcoal-900">
                  Deposit & Wealth Accumulation Schemes
                </h3>
                <span className="hidden sm:inline-block px-2.5 py-0.5 bg-surface-container text-charcoal-700 text-[10px] font-label font-bold rounded">
                  DICGC SAFEGUARDED
                </span>
              </div>
              <Link href="/services#deposits" className="text-xs font-semibold text-primary hover:underline">
                View All Deposits →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {depositSchemes.slice(0, 3).map((scheme) => (
                <ServiceCard key={scheme.id} service={scheme} />
              ))}
            </div>
          </div>

          {/* Group 2: Loans */}
          <div className="space-y-6 mb-12">
            <div className="flex items-center justify-between pb-2 border-b border-black/[0.04]">
              <div className="flex items-center gap-3">
                <h3 className="font-serif font-bold text-xl text-charcoal-900">
                  Member Credit & Loan Schemes
                </h3>
                <span className="hidden sm:inline-block px-2.5 py-0.5 bg-surface-container text-charcoal-700 text-[10px] font-label font-bold rounded">
                  SWIFT DISBURSAL
                </span>
              </div>
              <Link href="/services#loans" className="text-xs font-semibold text-primary hover:underline">
                View All Credit Plans →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {loanSchemes.slice(0, 3).map((scheme) => (
                <ServiceCard key={scheme.id} service={scheme} />
              ))}
            </div>
          </div>

          {/* Group 3: Utility Remittances */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-black/[0.04]">
              <div className="flex items-center gap-3">
                <h3 className="font-serif font-bold text-xl text-charcoal-900">
                  Utility Remittance & Digital Clearing
                </h3>
                <span className="hidden sm:inline-block px-2.5 py-0.5 bg-surface-container text-charcoal-700 text-[10px] font-label font-bold rounded">
                  DIRECT TELLER COUNTERS
                </span>
              </div>
              <Link href="/services#other" className="text-xs font-semibold text-primary hover:underline">
                View All Remittances →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="btn-editorial-primary inline-flex items-center gap-2"
            >
              <span>View All Certified Schemes & Tariffs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. SOCIAL ACHIEVEMENTS & CIVIC STEWARDSHIP */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-2">
              <span className="archival-label">Civic Stewardship</span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-900 tracking-tight">
                Social Impact & Community Dividends
              </h2>
              <p className="text-sm sm:text-base text-charcoal-600 font-sans">
                A co-operative&apos;s balance sheet is measured in human well-being. Each fiscal year, our common-good fund sponsors local village life.
              </p>
            </div>

            <Link
              href="/social-achievements"
              className="btn-editorial-tertiary self-start md:self-end"
            >
              <span>Explore All 12 Initiatives Archive</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Feature Main Initiative */}
            <div className="lg:col-span-7">
              <div className="bg-surface-container-low rounded-2xl p-6 sm:p-8 flex flex-col h-full space-y-6">
                <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-surface-container">
                  <Image
                    src={activities[0].image}
                    alt={activities[0].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-charcoal-900/80 backdrop-blur-md text-white rounded-full text-xs font-label">
                    {activities[0].category}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-charcoal-500 font-sans">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span>{activities[0].date}</span>
                    <span>•</span>
                    <span className="font-medium text-charcoal-700">{activities[0].beneficiaries}</span>
                  </div>

                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-charcoal-900 leading-tight">
                    {activities[0].title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-600 font-sans leading-relaxed">
                    {activities[0].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Secondary Initiatives Stack */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {activities.slice(1, 3).map((act) => (
                <div key={act.id} className="bg-surface-container-low rounded-2xl p-6 flex flex-col sm:flex-row gap-5 items-start">
                  <div className="relative w-full sm:w-36 h-32 rounded-xl overflow-hidden bg-surface-container flex-shrink-0">
                    <Image
                      src={act.image}
                      alt={act.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 flex-grow">
                    <span className="text-[10px] font-label font-bold uppercase tracking-wider text-tertiary block">
                      {act.category}
                    </span>
                    <h4 className="font-serif font-bold text-base text-charcoal-900 leading-snug">
                      {act.title}
                    </h4>
                    <p className="text-xs text-charcoal-600 font-sans line-clamp-3">
                      {act.description}
                    </p>
                    <span className="text-[11px] text-charcoal-500 font-sans block pt-1">
                      {act.date} • {act.beneficiaries}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 6. DEMOCRATIC LEADERSHIP: Board of Directors (Tenure 2026–2031) */}
      <section className="py-16 lg:py-24 bg-surface-container-low">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-2">
              <span className="archival-label">Democratic Leadership</span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-900 tracking-tight">
                Board of Directors (Tenure 2026 – 2031)
              </h2>
              <p className="text-sm sm:text-base text-charcoal-600 font-sans">
                Stewardship vetted through democratic membership ballot. Committed to fiduciary transparency, statutory compliance, and rural wealth conservation.
              </p>
            </div>

            <Link
              href="/bod"
              className="btn-editorial-tertiary self-start md:self-end"
            >
              <span>View Full Roster & By-Laws</span>
              <span>→</span>
            </Link>
          </div>

          {/* 4 Core Leaders Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {directors.slice(0, 4).map((d) => (
              <div key={d.id} className="bg-surface-container-lowest rounded-xl p-5 space-y-4 hover:shadow-editorial-float transition-all">
                <div className="relative w-full h-48 rounded-lg overflow-hidden bg-surface-container">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-charcoal-900/80 backdrop-blur-sm text-white text-[10px] font-label font-bold rounded">
                    {d.designation}
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-base text-charcoal-900">
                    {d.name}
                  </h4>
                  <span className="text-xs text-primary font-medium font-sans block">
                    {d.portfolio}
                  </span>
                  <p className="text-xs text-charcoal-500 font-sans line-clamp-2 pt-1">
                    {d.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. REGIONAL PRESENCE: Branch Network */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="archival-label">Regional Presence</span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-900 tracking-tight">
              Branch Network & Banking Counters
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 font-sans">
              Four interconnected, air-conditioned service branches equipped with secure locker vaults and direct teller counters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((b) => (
              <div key={b.id} className="bg-surface-container-low rounded-xl p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-label text-[10px] font-bold text-tertiary tracking-wider uppercase">
                      {b.code}
                    </span>
                    <span className="text-[10px] font-label px-2 py-0.5 bg-surface-container text-charcoal-700 rounded font-semibold">
                      {b.type}
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-lg text-charcoal-900">
                    {b.name}
                  </h4>

                  <div className="space-y-2 text-xs text-charcoal-600 font-sans pt-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{b.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span>{b.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span>{b.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-black/[0.04]">
                  <Link
                    href={`/branches#branch-${b.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>View Map & Vault Facilities</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. MEMBER ASSISTANCE DESK / INQUIRY FORM */}
      <section className="py-16 lg:py-24 bg-surface-container-low" id="inquire">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Context */}
            <div className="lg:col-span-5 space-y-6">
              <span className="archival-label">Member Assistance Desk</span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-900 tracking-tight leading-tight">
                Request a Banking Service or Inquire About Membership
              </h2>

              <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed">
                Submit your inquiry directly to our branch operations team. An authorized representative will contact you within one working banking day.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-surface-container-lowest space-y-1">
                  <strong className="text-xs font-label uppercase tracking-wider text-charcoal-900 block font-semibold">
                    Direct Representative Desk
                  </strong>
                  <span className="text-sm text-primary font-semibold block">+91 98765 43210</span>
                  <span className="text-xs text-charcoal-500 font-sans block">Mon–Sat: 8:30 AM to 4:30 PM</span>
                </div>

                <div className="p-4 rounded-xl bg-surface-container-lowest space-y-1">
                  <strong className="text-xs font-label uppercase tracking-wider text-charcoal-900 block font-semibold">
                    Statutory Grievance Redressal
                  </strong>
                  <span className="text-xs text-charcoal-600 font-sans block">
                    Written petitions can also be deposited at the Society Bhavan secretariat desk during normal business hours.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-surface-container-lowest rounded-2xl p-7 sm:p-10 shadow-editorial-float">
                
                {formSubmitted ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif font-bold text-2xl text-charcoal-900">
                      Official Request Received
                    </h3>
                    <p className="text-sm text-charcoal-600 max-w-md mx-auto font-sans leading-relaxed">
                      Thank you, <strong className="text-charcoal-900">{formName}</strong>. Your inquiry for <strong className="text-charcoal-900">{formService}</strong> at <strong className="text-charcoal-900">{formBranch}</strong> has been logged into our member desk ledger. Our representative will call you shortly at <strong className="text-charcoal-900">{formPhone}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="btn-editorial-secondary mt-4"
                    >
                      Submit Another Ingestion Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <span className="archival-label block mb-1">Official Member Ingestion</span>
                      <h3 className="font-serif font-bold text-xl text-charcoal-900">
                        Formal Service Requisition Form
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-label font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
                          Full Legal Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="e.g. Maria Rosario Fernandes"
                          className="editorial-input"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-label font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
                          Contact Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          placeholder="e.g. +91 98220 12345"
                          className="editorial-input"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-label font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
                          Select Service Scheme
                        </label>
                        <select
                          value={formService}
                          onChange={(e) => setFormService(e.target.value)}
                          className="editorial-input"
                        >
                          {serviceOptions.map((group) => (
                            <optgroup key={group.group} label={group.group}>
                              {group.options.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                  {opt.label}
                                </option>
                              ))}
                            </optgroup>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-label font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
                          Preferred Branch Counter
                        </label>
                        <select
                          value={formBranch}
                          onChange={(e) => setFormBranch(e.target.value)}
                          className="editorial-input"
                        >
                          {branches.map((b) => (
                            <option key={b.id} value={b.name}>
                              {b.name} ({b.type})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-label font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
                        Specific Requirements or Inquiries (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formNotes}
                        onChange={(e) => setFormNotes(e.target.value)}
                        placeholder="Please state tenure preference, loan amount requirement, or doorstep Pigmy collection address..."
                        className="editorial-input resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full btn-editorial-primary flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Official Inquiry to Secretariat</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-charcoal-400 font-sans text-center">
                      Submissions are securely stored and reviewed solely by authorized society officers.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
