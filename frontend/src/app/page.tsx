'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { heroSlides, depositSchemes, loanSchemes, otherServices, activities } from '@/lib/data';
import { ChevronLeft, ChevronRight, X, ArrowRight, ShieldCheck, TrendingUp, Users, Award, Landmark, Percent, Briefcase, FileText, CheckCircle } from 'lucide-react';

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
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
            </div>
            <div className="absolute bottom-0 left-0 p-6 md:p-12 text-white md:w-2/3">
              <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">{slide.title}</h2>
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
      <section className="bg-burgundy text-white py-8">
        <div className="container mx-auto px-4">
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
      <section className="py-16 md:py-20 bg-warm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
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
                className="inline-flex items-center px-6 py-3 bg-orange text-white font-semibold rounded hover:bg-burgundy transition-colors shadow-md"
              >
                View Our Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
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
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4">Our Banking & Financial Services</h2>
            <div className="w-24 h-1 bg-orange mx-auto"></div>
          </div>

          {/* Deposit Schemes */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-charcoal mb-8 flex items-center">
              <Landmark className="mr-3 text-burgundy" /> Deposit Schemes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {depositSchemes.slice(0, 3).map((service: any) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>

          {/* Loan Schemes */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-charcoal mb-8 flex items-center">
              <Percent className="mr-3 text-burgundy" /> Loan Schemes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loanSchemes.slice(0, 3).map((service: any) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>

          {/* Other Services */}
          <div>
            <h3 className="text-2xl font-bold text-charcoal mb-8 flex items-center">
              <Briefcase className="mr-3 text-burgundy" /> Other Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherServices.slice(0, 3).map((service: any) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOCIAL ACHIEVEMENTS PREVIEW */}
      <section className="py-16 md:py-20 bg-warm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4">Social Achievements & Activities</h2>
              <div className="w-24 h-1 bg-orange"></div>
            </div>
            <Link 
              href="/social-achievements"
              className="mt-6 md:mt-0 inline-flex items-center text-burgundy font-semibold hover:text-orange transition-colors"
            >
              View All Activities <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {activities.slice(0, 6).map((activity: any) => (
              <div 
                key={activity.id}
                className="group relative h-48 md:h-64 rounded-lg overflow-hidden cursor-pointer shadow-md"
                onClick={() => setSelectedActivity(activity)}
              >
                <Image
                  src={activity.imageUrl}
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
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4">Our Board of Directors (2026 – 2031)</h2>
            <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
            
            {/* Group Photo */}
            <div className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-lg mb-12">
              <Image 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
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
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            />
            <DirectorCard 
              name="Smt. Example Vice Chair" 
              designation="Vice Chairman" 
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            />
            <DirectorCard 
              name="Shri. Example Secretary" 
              designation="Secretary" 
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            />
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/bod"
              className="inline-flex items-center px-6 py-3 border-2 border-burgundy text-burgundy font-semibold rounded hover:bg-burgundy hover:text-white transition-colors"
            >
              View All BoD's
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
                src={selectedActivity.imageUrl}
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

function ServiceCard({ service }: { service: any }) {
  return (
    <div className="bg-warm rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-golden/30 flex flex-col h-full">
      <div className="w-12 h-12 bg-burgundy/10 text-burgundy rounded-lg flex items-center justify-center mb-4">
        <FileText size={24} />
      </div>
      <h4 className="text-xl font-bold text-burgundy mb-3">{service.title}</h4>
      <p className="text-charcoal text-sm mb-6 flex-grow">{service.description}</p>
      
      <Link 
        href={`/contacts?service=${service.id}`}
        className="inline-flex items-center text-sm font-semibold text-orange hover:text-burgundy transition-colors mt-auto w-fit"
      >
        Request Service <ArrowRight className="ml-1 w-4 h-4" />
      </Link>
    </div>
  );
}

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
