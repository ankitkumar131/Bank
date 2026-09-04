'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { heroSlides, depositSchemes, loanSchemes, otherServices, activities } from '@/lib/data';
import ServiceCard from '@/components/ServiceCard';
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
} from 'lucide-react';

function DirectorCard({
  name,
  designation,
  image,
}: {
  name: string;
  designation: string;
  image: string;
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center p-6 text-center">
      <div className="relative w-36 h-36 rounded-full overflow-hidden mb-4 border-4 border-slate-100 group-hover:border-navy-200 transition-colors shadow-inner">
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
      <span className="inline-block mt-1 px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
        {designation}
      </span>
    </div>
  );
}

export default function HomePage() {
  // --- Carousel State ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered, nextSlide]);

  // --- Modal State ---
  const [selectedActivity, setSelectedActivity] = useState<any>(null);

  // Prevent scroll when modal is open
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

  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. HERO CAROUSEL */}
      <section
        className="relative w-full h-[380px] sm:h-[450px] md:h-[540px] overflow-hidden group bg-slate-950"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {heroSlides.map((slide: any, index: number) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image || '/images/placeholder.svg'})` }}
            >
              {/* Gradient Overlay tailored with deep Navy */}
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/75 to-transparent" />
            </div>
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-white md:w-3/4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wider uppercase mb-4 w-fit">
                ★ Co-operative Banking Trust Since 1964
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-3 md:mb-5 tracking-tight leading-tight drop-shadow-md">
                {slide.heading}
              </h2>
              <p className="text-sm sm:text-base md:text-xl text-slate-200 mb-6 max-w-2xl leading-relaxed drop-shadow">
                {slide.description}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/services"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-emerald-900/30 flex items-center gap-2"
                >
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contacts"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors backdrop-blur-sm border border-white/20"
                >
                  Contact Branch
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-navy-900 text-white p-3 rounded-full transition-colors hidden md:block backdrop-blur-sm border border-white/10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-navy-900 text-white p-3 rounded-full transition-colors hidden md:block backdrop-blur-sm border border-white/10"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex space-x-2.5">
          {heroSlides.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. STATS BAR: Navy Gradient with Gold/Amber Accents */}
      <section className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 text-white py-10 md:py-12 border-y border-navy-700/50 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/5 border border-white/5 hover:border-amber-400/30 transition-colors">
              <Award className="w-8 h-8 mb-2 text-amber-400" />
              <div className="text-3xl font-extrabold mb-1 tracking-tight text-white">60+</div>
              <div className="text-xs sm:text-sm uppercase font-medium tracking-wider text-slate-300">Years of Service</div>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/5 border border-white/5 hover:border-amber-400/30 transition-colors">
              <TrendingUp className="w-8 h-8 mb-2 text-emerald-400" />
              <div className="text-3xl font-extrabold mb-1 tracking-tight text-white">₹125+ Cr</div>
              <div className="text-xs sm:text-sm uppercase font-medium tracking-wider text-slate-300">Total Deposits</div>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/5 border border-white/5 hover:border-amber-400/30 transition-colors">
              <Users className="w-8 h-8 mb-2 text-amber-400" />
              <div className="text-3xl font-extrabold mb-1 tracking-tight text-white">28,500+</div>
              <div className="text-xs sm:text-sm uppercase font-medium tracking-wider text-slate-300">Happy Members</div>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/5 border border-white/5 hover:border-amber-400/30 transition-colors">
              <ShieldCheck className="w-8 h-8 mb-2 text-emerald-400" />
              <div className="text-3xl font-extrabold mb-1 tracking-tight text-white">100%</div>
              <div className="text-xs sm:text-sm uppercase font-medium tracking-wider text-slate-300">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT THE SOCIETY */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="w-full md:w-1/2">
              <span className="inline-block px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 rounded-full">
                Serving the Community Since 1964
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-6 tracking-tight leading-tight">
                Rooted in the Soil, Committed to Your Financial Autonomy
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Parra Verla Canca Multipurpose Primary Agriculture Co-operative Society Ltd. has been the financial backbone of our community for over six decades. We believe in empowering our members through accessible, reliable, and transparent financial services tailored to local needs.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our cooperative model ensures that every member has a voice and shares in our collective success. We blend traditional values with modern banking convenience to provide a secure environment for your savings and investments.
              </p>

              <ul className="space-y-3.5 mb-8 text-slate-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-slate-900">Financial Inclusion:</strong> Accessible banking for all segments of society.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-slate-900">Community Development:</strong> Reinvesting in local infrastructure and initiatives.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-slate-900">Responsible Savings:</strong> Secure deposit schemes with competitive returns.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-slate-900">Agricultural Development:</strong> Dedicated support for farmers and rural enterprises.
                  </span>
                </li>
              </ul>

              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                View Our Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-[280px] sm:h-[360px] md:h-[420px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/general/about.svg"
                  alt="Community Banking"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 mb-3 text-xs font-bold uppercase tracking-widest text-navy-800 bg-navy-50 border border-navy-200 rounded-full">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-4 tracking-tight">
              Our Banking & Financial Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Simple, secure and community-first banking — pick a scheme and request it in one click.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-navy-800 via-emerald-600 to-amber-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Deposit Schemes */}
          <div className="mb-14 md:mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-700 to-navy-950 text-white flex items-center justify-center shadow-md">
                <Landmark size={20} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Deposit Schemes</h3>
              <div className="flex-grow h-px bg-slate-200 ml-2 hidden sm:block" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {depositSchemes.slice(0, 3).map((service: any) => (
                <ServiceCard key={service.id} service={service} accent="deposit" />
              ))}
            </div>
          </div>

          {/* Loan Schemes */}
          <div className="mb-14 md:mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-900 text-white flex items-center justify-center shadow-md">
                <Percent size={20} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Loan Schemes</h3>
              <div className="flex-grow h-px bg-slate-200 ml-2 hidden sm:block" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {loanSchemes.slice(0, 3).map((service: any) => (
                <ServiceCard key={service.id} service={service} accent="loan" />
              ))}
            </div>
          </div>

          {/* Other Services */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-white flex items-center justify-center shadow-md">
                <Briefcase size={20} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Other Services</h3>
              <div className="flex-grow h-px bg-slate-200 ml-2 hidden sm:block" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {otherServices.slice(0, 3).map((service: any) => (
                <ServiceCard key={service.id} service={service} accent="other" />
              ))}
            </div>
          </div>

          <div className="text-center mt-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SOCIAL ACHIEVEMENTS PREVIEW */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-1">
                Civic Stewardship
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-3 tracking-tight">
                Social Achievements & Activities
              </h2>
              <div className="w-24 h-1 bg-emerald-600 rounded-full"></div>
            </div>
            <Link
              href="/social-achievements"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-navy-900 text-navy-900 font-semibold text-sm rounded-xl hover:bg-navy-900 hover:text-white transition-all whitespace-nowrap"
            >
              View All Activities <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {activities.slice(0, 8).map((activity: any) => (
              <div
                key={activity.id}
                className="group relative h-48 md:h-64 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/60"
                onClick={() => setSelectedActivity(activity)}
              >
                <Image
                  src={activity.image || '/images/placeholder.svg'}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent flex items-end p-4">
                  <div>
                    {activity.category && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                        {activity.category}
                      </span>
                    )}
                    <h4 className="text-white font-semibold text-sm leading-snug group-hover:text-amber-300 transition-colors line-clamp-2">
                      {activity.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOARD OF DIRECTORS PREVIEW */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-navy-800 block mb-1">
              Democratic Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-3 tracking-tight">
              Our Board of Directors (2026 – 2031)
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>

            {/* Group Photo */}
            <div className="relative w-full max-w-4xl mx-auto h-[250px] sm:h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg mb-12 border-4 border-slate-100">
              <Image
                src="/images/general/board-group.svg"
                alt="Board of Directors Group Photo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Top 3 Directors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <DirectorCard
              name="Shri. Example Chairman"
              designation="Chairman"
              image="/images/general/chairman.svg"
            />
            <DirectorCard
              name="Smt. Example Vice Chair"
              designation="Vice Chairman"
              image="/images/general/vice-chair.svg"
            />
            <DirectorCard
              name="Shri. Example Secretary"
              designation="Secretary"
              image="/images/general/secretary.svg"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/bod"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy-900 text-navy-900 font-semibold rounded-xl hover:bg-navy-900 hover:text-white transition-colors"
            >
              View All BoD&apos;s <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ACTIVITY MODAL */}
      {selectedActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setSelectedActivity(null)}
          ></div>
          <div className="relative bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl z-10 border border-slate-200">
            <button
              onClick={() => setSelectedActivity(null)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full p-2 z-20 transition-colors shadow"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <div className="relative h-64 sm:h-80 w-full bg-slate-100">
              <Image
                src={selectedActivity.image || '/images/placeholder.svg'}
                alt={selectedActivity.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-navy-950/80 backdrop-blur-md text-amber-400 text-xs font-bold rounded-full uppercase tracking-wider">
                  {selectedActivity.category || 'Initiative'}
                </span>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 mb-3">
                <span>{selectedActivity.date}</span>
                {selectedActivity.beneficiaries && (
                  <>
                    <span>•</span>
                    <span className="text-emerald-700 font-bold">{selectedActivity.beneficiaries}</span>
                  </>
                )}
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-navy-950 mb-4 leading-tight">
                {selectedActivity.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                {selectedActivity.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
