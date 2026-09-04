import React from 'react';
import { depositSchemes, loanSchemes, otherServices } from '@/lib/data';
import ServiceCard from '@/components/ServiceCard';

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3.5 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-500/20 border border-emerald-400/30 rounded-full">
            Complete Financial Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Our Banking & Financial Services
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive financial solutions tailored to meet the needs of our members and community.
          </p>
        </div>
      </section>

      {/* Deposit Schemes Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-navy-800 block mb-1">
              Wealth Accumulation
            </span>
            <h2 className="text-3xl font-extrabold text-navy-950 mb-3 tracking-tight">
              Deposit Schemes
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {depositSchemes.map((service) => (
              <ServiceCard key={service.id} service={service} accent="deposit" />
            ))}
          </div>
        </div>
      </section>

      {/* Loan Schemes Section */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-1">
              Member Credit Support
            </span>
            <h2 className="text-3xl font-extrabold text-navy-950 mb-3 tracking-tight">
              Loan Schemes
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {loanSchemes.map((service) => (
              <ServiceCard key={service.id} service={service} accent="loan" />
            ))}
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-1">
              Utility & Convenience
            </span>
            <h2 className="text-3xl font-extrabold text-navy-950 mb-3 tracking-tight">
              Other Services
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {otherServices.map((service) => (
              <ServiceCard key={service.id} service={service} accent="other" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
