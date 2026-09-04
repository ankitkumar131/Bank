'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { heroSlides, depositSchemes, loanSchemes, otherServices, activities } from '@/lib/data';
import ServiceCard from '@/components/ServiceCard';
import { ChevronLeft, ChevronRight, X, ArrowRight, ShieldCheck, TrendingUp, Users, Award, Landmark, Percent, Briefcase, CheckCircle } from 'lucide-react';

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
        className="relative w-full h-[350px] md:h-[500px] overflow-hidden group"
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
              <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
            </div>
            <div className="absolute bottom-0 left-0 p-6 md:p-12 text-white md:w-2/3">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-4">{slide.heading}</h2>
              <p className="text-sm md:text-xl">{slide.description}</p>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors hidden md:block"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors hidden md:block"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {heroSlides.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-burgundy text-white py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 mb-2 text-golden" />
              <div className="text-3xl font-bold mb-1">60+</div>
              <div className="text-sm uppercase tracking-wider text-warm">Years of Service</div>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="w-8 h-8 mb-2 text-golden" />
              <div className="text-3xl font-bold mb-1">₹125+ Cr</div>
              <div className="text-sm uppercase tracking-wider text-warm">Total Deposits</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 mb-2 text-golden" />
              <div className="text-3xl font-bold mb-1">28,500+</div>
              <div className="text-sm uppercase tracking-wider text-warm">Happy Members</div>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-8 h-8 mb-2 text-golden" />
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm uppercase tracking-wider text-warm">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT THE SOCIETY */}
      <section className="py-16 md:py-24 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-6">
                Rooted in the Soil, Committed to Your Financial Autonomy
              </h2>
              <p className="text-charcoal mb-4 leading-relaxed">
                Parra Verla Canca Multipurpose Primary Agriculture Co-operative Society Ltd. has been the financial backbone of our community for over six decades. We believe in empowering our members through accessible, reliable, and transparent financial services tailored to local needs.
              </p>
              <p className="text-charcoal mb-6 leading-relaxed">
                Our cooperative model ensures that every member has a voice and shares in our collective success. We blend traditional values with modern banking convenience to provide a secure environment for your savings and investments.
              </p>
              
              <ul className="space-y-3 mb-8 text-charcoal">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Financial Inclusion:</strong> Accessible banking for all segments of society.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Community Development:</strong> Reinvesting in local infrastructure and initiatives.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Responsible Savings:</strong> Secure deposit schemes with competitive returns.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Agricultural Development:</strong> Dedicated support for farmers and rural enterprises.</span>
                </li>
              </ul>
              
              <Link 
                href="/services"
                className="inline-flex items-center px-6 py-3 bg-orange text-white font-semibold rounded-xl hover:bg-burgundy transition-colors shadow-md"
              >
                View Our Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative h-[280px] sm:h-[350px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
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
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest text-burgundy bg-burgundy-50 border border-burgundy/15 rounded-full">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4">Our Banking & Financial Services</h2>
            <p className="text-charcoal-600 max-w-2xl mx-auto">
              Simple, secure and community-first banking — pick a scheme and request it in one click.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-burgundy via-orange to-golden mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Deposit Schemes */}
          <div className="mb-14 md:mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-burgundy-700 to-burgundy-950 text-white flex items-center justify-center shadow-md">
                <Landmark size={20} />
              </div>
              <h3 className="text-2xl font-bold text-charcoal-900">Deposit Schemes</h3>
              <div className="flex-grow h-px bg-gray-200 ml-2 hidden sm:block" />
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-800 text-white flex items-center justify-center shadow-md">
                <Percent size={20} />
              </div>
              <h3 className="text-2xl font-bold text-charcoal-900">Loan Schemes</h3>
              <div className="flex-grow h-px bg-gray-200 ml-2 hidden sm:block" />
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-golden-500 to-golden-700 text-white flex items-center justify-center shadow-md">
                <Briefcase size={20} />
              </div>
              <h3 className="text-2xl font-bold text-charcoal-900">Other Services</h3>
              <div className="flex-grow h-px bg-gray-200 ml-2 hidden sm:block" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {otherServices.slice(0, 3).map((service: any) => (
                <ServiceCard key={service.id} service={service} accent="other" />
              ))}
            </div>
          </div>

          <div className="text-center mt-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-burgundy text-white font-semibold rounded-xl hover:bg-burgundy-800 transition-all shadow-md hover:shadow-lg"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SOCIAL ACHIEVEMENTS PREVIEW */}
      <section className="py-16 md:py-24 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4">Social Achievements & Activities</h2>
              <div className="w-24 h-1 bg-orange rounded-full"></div>
            </div>
            <Link 
              href="/social-achievements"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-burgundy/20 text-burgundy font-semibold text-sm rounded-xl hover:bg-burgundy hover:text-white hover:border-burgundy transition-all whitespace-nowrap"
            >
              View All Activities <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {activities.slice(0, 8).map((activity: any) => (
              <div 
                key={activity.id}
                className="group relative h-48 md:h-64 rounded-lg overflow-hidden cursor-pointer shadow-md"
                onClick={() => setSelectedActivity(activity)}
              >
                <Image
                  src={activity.image || '/images/placeholder.svg'}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-3">
                  <h4 className="text-white font-medium text-sm leading-tight group-hover:text-golden transition-colors">
                    {activity.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOARD OF DIRECTORS PREVIEW */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4">Our Board of Directors (2026 – 2031)</h2>
            <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
            
            {/* Group Photo */}
            <div className="relative w-full max-w-4xl mx-auto h-[250px] sm:h-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-lg mb-12">
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
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-burgundy text-burgundy font-semibold rounded-xl hover:bg-burgundy hover:text-white transition-colors"
            >
              View All BoD&apos;s
            </Link>
          </div>
        </div>
      </section>

      {/* ACTIVITY MODAL */}
      {selectedActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedActivity(null)}
          ></div>
          <div className="relative bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl z-10">
            <button 
              onClick={() => setSelectedActivity(null)}
              className="absolute top-4 right-4 bg-white/50 hover:bg-white text-charcoal rounded-full p-1 z-20 transition-colors shadow"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            
            <div className="relative w-full h-64 md:h-96">
              <Image
                src={selectedActivity.image || '/images/placeholder.svg'}
                alt={selectedActivity.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-6 md:p-8">
              <div className="text-sm font-semibold text-orange mb-2">{selectedActivity.date}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-burgundy mb-4">{selectedActivity.title}</h3>
              <p className="text-charcoal leading-relaxed whitespace-pre-wrap">
                {selectedActivity.description || 'Detailed description of this social achievement and activity. This society is committed to uplifting the community through various initiatives.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

// --- HELPER COMPONENTS ---

function DirectorCard({ name, designation, image }: { name: string, designation: string, image: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 border-4 border-warm shadow-md">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h4 className="text-lg font-bold text-burgundy">{name}</h4>
      <p className="text-orange font-medium">{designation}</p>
    </div>
  );
}
