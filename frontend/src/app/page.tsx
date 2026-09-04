'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  heroSlides,
  depositSchemes,
  loanSchemes,
  otherServices,
  activities,
  branches,
} from '@/lib/data';
import ServiceCard from '@/components/ServiceCard';
import FinancialCalculators from '@/components/FinancialCalculators';
import QuickInquiryModal from '@/components/QuickInquiryModal';
import {
  ChevronLeft,
  ChevronRight,
  X,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Users,
  Award,
  Landmark,
  Percent,
  Briefcase,
  CheckCircle,
  Coins,
  Shield,
  Phone,
  Clock,
  Sparkles,
  MapPin,
  HelpCircle,
  AlertTriangle,
  Quote,
} from 'lucide-react';

function DirectorCard({
  name,
  designation,
  image,
  portfolio,
}: {
  name: string;
  designation: string;
  image: string;
  portfolio?: string;
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center p-6 text-center">
      <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-slate-100 group-hover:border-navy-300 transition-colors shadow-inner">
        <Image
          src={image || '/images/placeholder.svg'}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-lg font-bold text-slate-900 group-hover:text-navy-900 transition-colors">
        {name}
      </h3>
      <span className="inline-block mt-1 px-3 py-0.5 rounded-full text-xs font-bold bg-navy-50 text-navy-900 border border-navy-200">
        {designation}
      </span>
      {portfolio && (
        <p className="mt-2 text-xs text-slate-500 leading-snug">
          {portfolio}
        </p>
      )}
    </div>
  );
}

export default function HomePage() {
  // --- Carousel State ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // --- Modal States ---
  const [selectedActivity, setSelectedActivity] = useState<any>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryServiceId, setInquiryServiceId] = useState<string>('');

  // --- Service Category Tab State ---
  const [activeServiceTab, setActiveServiceTab] = useState<'all' | 'deposits' | 'loans' | 'utilities'>('all');

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(nextSlide, 6000);
      return () => clearInterval(timer);
    }
  }, [isHovered, nextSlide]);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (selectedActivity) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedActivity]);

  const handleOpenInquiry = (serviceId?: string) => {
    setInquiryServiceId(serviceId || '');
    setInquiryModalOpen(true);
  };

  return (
    <main className="flex flex-col min-h-screen bg-slate-50/50">
      {/* 1. CUSTOMER HERO SHOWCASE WITH DOCKED ACTION HUB */}
      <section
        className="relative w-full bg-navy-950 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Carousel Slide Track */}
        <div className="relative w-full h-[450px] sm:h-[500px] md:h-[560px]">
          {heroSlides.map((slide: any, index: number) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image || '/images/placeholder.svg'})` }}
              >
                {/* Multi-layer gradient overlay for optimal readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
              </div>

              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-white pb-16 sm:pb-20">
                <div className="max-w-3xl">
                  {/* Badge */}
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-wider uppercase mb-4 w-fit">
                    <Shield className="w-3.5 h-3.5" />
                    {slide.tag || 'Established 1964 • Statutory "A" Grade'}
                  </span>

                  {/* Headline */}
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-4 drop-shadow-md text-white">
                    {slide.heading}
                  </h1>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg text-slate-200 mb-6 max-w-2xl leading-relaxed drop-shadow">
                    {slide.description}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-3.5">
                    <button
                      onClick={() => handleOpenInquiry()}
                      className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-navy-950 font-extrabold rounded-xl transition-all shadow-lg hover:shadow-amber-500/25 flex items-center gap-2 text-sm"
                    >
                      <Sparkles className="w-4 h-4" />
                      Inquire / Open Account
                    </button>
                    <Link
                      href="/services"
                      className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all backdrop-blur-sm border border-white/20 text-sm flex items-center gap-2"
                    >
                      Explore Schemes <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-navy-900 text-white p-3 rounded-full transition-colors hidden md:block backdrop-blur-sm border border-white/15"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-navy-900 text-white p-3 rounded-full transition-colors hidden md:block backdrop-blur-sm border border-white/15"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {heroSlides.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CUSTOMER QUICK ACTION BAR (Docks seamlessly) */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 mb-6">
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-200/90 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <button
              onClick={() => handleOpenInquiry('gold-loan')}
              className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-amber-50/70 border border-transparent hover:border-amber-200 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-xl mb-2 group-hover:scale-110 transition-transform">
                🪙
              </div>
              <span className="text-xs font-bold text-slate-900 group-hover:text-amber-900 leading-tight">Gold Loan</span>
              <span className="text-[10px] text-amber-700 font-semibold mt-0.5">In 30 Mins</span>
            </button>

            <button
              onClick={() => handleOpenInquiry('fixed-deposit')}
              className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-navy-50/70 border border-transparent hover:border-navy-200 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-navy-100 text-navy-900 flex items-center justify-center text-xl mb-2 group-hover:scale-110 transition-transform">
                📈
              </div>
              <span className="text-xs font-bold text-slate-900 group-hover:text-navy-900 leading-tight">Fixed Deposit</span>
              <span className="text-[10px] text-navy-700 font-semibold mt-0.5">Up to 8.25%</span>
            </button>

            <button
              onClick={() => handleOpenInquiry('kisan-agriculture-credit')}
              className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-emerald-50/70 border border-transparent hover:border-emerald-200 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center text-xl mb-2 group-hover:scale-110 transition-transform">
                🌾
              </div>
              <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-900 leading-tight">Kisan Credit</span>
              <span className="text-[10px] text-emerald-700 font-semibold mt-0.5">7.00% Subsidized</span>
            </button>

            <button
              onClick={() => handleOpenInquiry('pigmy-deposit')}
              className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-slate-100 border border-transparent hover:border-slate-300 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center text-xl mb-2 group-hover:scale-110 transition-transform">
                🐖
              </div>
              <span className="text-xs font-bold text-slate-900 group-hover:text-slate-950 leading-tight">Pigmy Thrift</span>
              <span className="text-[10px] text-slate-600 font-semibold mt-0.5">Daily Doorstep</span>
            </button>

            <button
              onClick={() => handleOpenInquiry('house-loan')}
              className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-emerald-50/70 border border-transparent hover:border-emerald-200 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-teal-100 text-teal-900 flex items-center justify-center text-xl mb-2 group-hover:scale-110 transition-transform">
                🏠
              </div>
              <span className="text-xs font-bold text-slate-900 group-hover:text-teal-900 leading-tight">House Repair</span>
              <span className="text-[10px] text-teal-700 font-semibold mt-0.5">Long Tenure</span>
            </button>

            <Link
              href="/contacts?service=electricity-water-bill"
              className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-amber-50/70 border border-transparent hover:border-amber-200 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-orange-100 text-orange-900 flex items-center justify-center text-xl mb-2 group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <span className="text-xs font-bold text-slate-900 group-hover:text-orange-900 leading-tight">Bill Payments</span>
              <span className="text-[10px] text-orange-700 font-semibold mt-0.5">Zero Convenience Fee</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR: INSTITUTIONAL TRUST & SCALE */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-extrabold text-navy-950 tracking-tight">60+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Years of Stability</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-extrabold text-navy-950 tracking-tight">₹125+ Cr</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Public Deposits</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-navy-100 text-navy-800 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-extrabold text-navy-950 tracking-tight">28,500+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Happy Members</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-extrabold text-navy-950 tracking-tight">100%</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Govt &quot;A&quot; Audited</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE FINANCIAL PLANNING SUITE (CALCULATORS) */}
      <section className="py-14 md:py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 rounded-full mb-2">
              Empowering Every Saver & Borrower
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
              Know Your Returns & EMIs Upfront
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              No hidden fees, no compounding surprises. Use our interactive calculators to plan your deposits and credit needs with total clarity.
            </p>
          </div>

          <FinancialCalculators onOpenInquiry={handleOpenInquiry} />
        </div>
      </section>

      {/* 4. ABOUT THE SOCIETY (COMMUNITY FOUNDATION) */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <span className="inline-block px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-widest text-navy-900 bg-navy-50 border border-navy-200 rounded-full">
                Six Decades of Fiduciary Honor
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-5 tracking-tight leading-tight">
                Rooted in the Soil, Committed to Your Financial Autonomy
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed text-sm sm:text-base">
                Parra Verla Canca Multipurpose Primary Agriculture Co-operative Society Ltd. has been the financial lifeline of our agrarian and rural community since 1964. Under the guidance of the Goa Co-operative Societies Act 2001, every rupee deposited is channeled back into local enterprise, khazan paddy revival, and family prosperity.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm sm:text-base">
                Unlike commercial conglomerates, our surplus is returned directly to our 28,500+ members as annual dividends and community welfare funds.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 text-sm block">Doorstep Banking</strong>
                    <span className="text-xs text-slate-500">Biometric daily Pigmy thrift collectors visit your doorstep</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 text-sm block">Safe Locker Vaults</strong>
                    <span className="text-xs text-slate-500">Strongroom lockers available across all 4 branch locations</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 text-sm block">Farmer Priority</strong>
                    <span className="text-xs text-slate-500">Zero-hassle subsidized fertilizer & monsoon crop advances</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 text-sm block">Zero Hidden Fees</strong>
                    <span className="text-xs text-slate-500">Transparent passbook updates and free electricity bill settlement</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="px-6 py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg text-sm flex items-center gap-2"
                >
                  Explore All Schemes <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => handleOpenInquiry()}
                  className="px-6 py-3.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold rounded-xl transition-all text-sm"
                >
                  Become a Member
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative h-[320px] sm:h-[400px] md:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/general/about.svg"
                  alt="Cooperative Banking Community"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-navy-950/85 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white flex items-center justify-between">
                  <div>
                    <div className="text-xs text-amber-400 font-bold uppercase">Community Milestone</div>
                    <div className="text-sm font-semibold">Serving Parra, Verla, Canca & Bardez Taluka</div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-lg">
                    Est. 1964
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES & SCHEMES SHOWCASE (CUSTOMER-FIRST TABS) */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-navy-800 bg-navy-50 border border-navy-200 rounded-full mb-2">
              Banking Made Simple
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
              Our Deposit, Credit & Utility Schemes
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Select a banking category tailored to your life stage and request immediate processing.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {[
                { id: 'all', label: 'All Banking Schemes' },
                { id: 'deposits', label: 'Deposit Schemes' },
                { id: 'loans', label: 'Loans & Advances' },
                { id: 'utilities', label: 'Public Utilities & Counter' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveServiceTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeServiceTab === tab.id
                      ? 'bg-navy-900 text-white shadow-md'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Deposit Schemes Display */}
          {(activeServiceTab === 'all' || activeServiceTab === 'deposits') && (
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 text-amber-300 flex items-center justify-center shadow-md">
                  <Landmark size={20} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Term & Thrift Deposits</h3>
                  <p className="text-xs text-slate-500">Secure compounding with up to 8.25% p.a. yield</p>
                </div>
                <div className="flex-grow h-px bg-slate-200 ml-4 hidden sm:block" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {depositSchemes.slice(0, activeServiceTab === 'deposits' ? 6 : 3).map((service: any) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    accent="deposit"
                    onInquire={handleOpenInquiry}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Loan Schemes Display */}
          {(activeServiceTab === 'all' || activeServiceTab === 'loans') && (
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-950 text-white flex items-center justify-center shadow-md">
                  <Percent size={20} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Credit Facilities & Loans</h3>
                  <p className="text-xs text-slate-500">Low interest rates, fast sanctions, and transparent terms</p>
                </div>
                <div className="flex-grow h-px bg-slate-200 ml-4 hidden sm:block" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loanSchemes.slice(0, activeServiceTab === 'loans' ? 6 : 3).map((service: any) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    accent="loan"
                    onInquire={handleOpenInquiry}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Other Utility Services Display */}
          {(activeServiceTab === 'all' || activeServiceTab === 'utilities') && (
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 text-white flex items-center justify-center shadow-md">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Over-the-Counter & Remittance Services</h3>
                  <p className="text-xs text-slate-500">Free utility bill settlement and nationwide electronic fund clearing</p>
                </div>
                <div className="flex-grow h-px bg-slate-200 ml-4 hidden sm:block" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherServices.map((service: any) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    accent="other"
                    onInquire={handleOpenInquiry}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg text-sm"
            >
              View Full Rate Card & Detailed Features <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. REAL-TIME BRANCH NETWORK & LOCKER STATUS */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-1">
                At Your Doorstep Across Bardez
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
                Our 4 Branch Service Centers
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Walk into any branch for immediate cash, gold appraisals, and locker access.
              </p>
            </div>
            <Link
              href="/branches"
              className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-navy-900 text-navy-900 font-bold text-sm rounded-xl hover:bg-navy-900 hover:text-white transition-all w-fit"
            >
              Interactive Map & Hours <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((b) => (
              <div
                key={b.id}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-navy-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-navy-100 text-navy-900 border border-navy-200">
                      {b.type}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Open Today
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-1">{b.name}</h4>
                  <p className="text-xs text-slate-500 mb-4 line-clamp-2">{b.address}</p>

                  <div className="space-y-2 text-xs text-slate-600 border-t border-slate-200/80 pt-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span className="truncate">{b.hours.split('(')[0]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>Lockers Available</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <a
                    href={`tel:${b.phone.split('/')[0].trim()}`}
                    className="flex-1 py-2 bg-white hover:bg-navy-50 text-navy-900 border border-slate-200 rounded-lg text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3 h-3 text-emerald-600" /> Call
                  </a>
                  <Link
                    href={`/branches#branch-${b.id}`}
                    className="flex-1 py-2 bg-navy-900 hover:bg-navy-800 text-white rounded-lg text-xs font-bold text-center transition-colors flex items-center justify-center gap-1"
                  >
                    Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MEMBER TESTIMONIALS (COMMUNITY VOICES) */}
      <section className="py-16 md:py-20 bg-slate-100/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-1">
              Member Voices
            </span>
            <h2 className="text-3xl font-extrabold text-navy-950 tracking-tight">
              Trusted by 14,000+ North Goan Families
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Read how our co-operative society supports local livelihood, farming, and daily savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative flex flex-col justify-between">
              <Quote className="w-8 h-8 text-amber-400/40 absolute top-4 right-4" />
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;The society&apos;s Pigmy agent visits my bakery every evening. I don&apos;t have to leave my counter to bank. When my daughter went to college, they sanctioned an educational loan within 48 hours with zero hassle.&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-navy-100 text-navy-900 font-bold flex items-center justify-center text-sm">
                  JD
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Joaquim D&apos;Souza</h4>
                  <p className="text-xs text-slate-500">Retail Merchant, Parra</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative flex flex-col justify-between">
              <Quote className="w-8 h-8 text-emerald-400/40 absolute top-4 right-4" />
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;As a senior citizen, getting 8.25% guaranteed return on my fixed deposit gives my family financial independence. The Parra branch staff treats us with utmost respect and patience.&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-900 font-bold flex items-center justify-center text-sm">
                  RP
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Rukmini Parab</h4>
                  <p className="text-xs text-slate-500">Senior Citizen Depositor, Verla</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative flex flex-col justify-between">
              <Quote className="w-8 h-8 text-amber-400/40 absolute top-4 right-4" />
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;During the monsoon floods when our khazan paddy sluice gate was damaged, the society extended immediate interest-free agricultural credit. They truly understand agrarian realities in Goa.&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center text-sm">
                  SC
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Santosh Chodankar</h4>
                  <p className="text-xs text-slate-500">Paddy Cultivator, Canca</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CIVIC & SOCIAL ACHIEVEMENTS PREVIEW */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-1">
                Giving Back to the Soil
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
                Social Achievements & Civic Initiatives
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                From restoring 120 hectares of fallow khazan paddy to organizing geriatric eye clinics.
              </p>
            </div>
            <Link
              href="/social-achievements"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-navy-900 text-navy-900 font-bold text-sm rounded-xl hover:bg-navy-900 hover:text-white transition-all whitespace-nowrap"
            >
              View Full Impact Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {activities.slice(0, 4).map((activity: any) => (
              <div
                key={activity.id}
                className="group relative h-52 md:h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200"
                onClick={() => setSelectedActivity(activity)}
              >
                <Image
                  src={activity.image || '/images/placeholder.svg'}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent flex items-end p-4">
                  <div>
                    {activity.category && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                        {activity.category}
                      </span>
                    )}
                    <h4 className="text-white font-bold text-xs sm:text-sm leading-snug group-hover:text-amber-300 transition-colors line-clamp-2">
                      {activity.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BOARD OF DIRECTORS (GOVERNANCE PREVIEW) */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-navy-800 block mb-1">
              Democratic Governance
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
              Our Board of Directors (2026 – 2031)
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Elected by members to safeguard society reserves and champion community development.
            </p>
          </div>

          {/* Top 3 Leadership Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <DirectorCard
              name="Shri. Anthony D'Souza"
              designation="Chairman"
              image="/images/directors/director-1.svg"
              portfolio="Institutional Strategy & Agricultural Credit"
            />
            <DirectorCard
              name="Shri. Rameshwar Parab"
              designation="Vice Chairman"
              image="/images/directors/director-2.svg"
              portfolio="Audit, Khazan Lands & Farmer Relations"
            />
            <DirectorCard
              name="Smt. Maria Fernandes"
              designation="General Secretary"
              image="/images/directors/director-3.svg"
              portfolio="Operations, Legal Compliance & Social Outreach"
            />
          </div>

          <div className="text-center mt-10">
            <Link
              href="/bod"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy-900 text-navy-900 font-bold rounded-xl hover:bg-navy-900 hover:text-white transition-colors text-sm"
            >
              Meet Full Board & Committees <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. CUSTOMER SAFETY & NOTICE ALERT BANNER */}
      <section className="py-8 bg-amber-500 text-navy-950 border-y border-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-navy-950 text-amber-400 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm sm:text-base">Customer Cyber & Security Notice</h4>
              <p className="text-xs font-medium text-navy-900">
                Society staff will never ask for your confidential ATM PIN, password, or SMS OTP over the phone.
              </p>
            </div>
          </div>
          <Link
            href="/contacts"
            className="px-5 py-2.5 bg-navy-950 hover:bg-navy-900 text-white font-bold rounded-xl text-xs sm:text-sm whitespace-nowrap shadow-md transition-colors"
          >
            Report Suspicious Activity
          </Link>
        </div>
      </section>

      {/* ACTIVITY DETAIL MODAL */}
      {selectedActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
            onClick={() => setSelectedActivity(null)}
          />
          <div className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl z-10 border border-slate-200">
            <button
              onClick={() => setSelectedActivity(null)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-slate-700 rounded-full p-2 z-20 transition-colors shadow-md"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <div className="relative h-64 sm:h-72 w-full bg-slate-100">
              <Image
                src={selectedActivity.image || '/images/placeholder.svg'}
                alt={selectedActivity.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-navy-950/85 backdrop-blur-md text-amber-400 text-xs font-bold rounded-full uppercase tracking-wider">
                  {selectedActivity.category || 'Initiative'}
                </span>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500 mb-3">
                <span>{selectedActivity.date}</span>
                {selectedActivity.beneficiaries && (
                  <>
                    <span>•</span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {selectedActivity.beneficiaries}
                    </span>
                  </>
                )}
              </div>
              <h3 className="text-2xl font-extrabold text-navy-950 mb-4 leading-tight">
                {selectedActivity.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {selectedActivity.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* QUICK INQUIRY MODAL */}
      <QuickInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialService={inquiryServiceId}
      />
    </main>
  );
}
