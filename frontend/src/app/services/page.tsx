'use client';

import React, { useState } from 'react';
import { depositSchemes, loanSchemes, otherServices } from '@/lib/data';
import ServiceCard from '@/components/ServiceCard';
import QuickInquiryModal from '@/components/QuickInquiryModal';
import {
  Landmark,
  Percent,
  Briefcase,
  ShieldCheck,
  FileText,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';

export default function Services() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleInquire = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-slate-50/50">
      {/* 1. HERO BANNER */}
      <section className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 py-16 md:py-20 text-white border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-500/20 border border-emerald-400/30 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Transparent Co-operative Banking
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Banking Schemes & Service Portfolio
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            High-yield deposit options, subsidized agrarian credit, and prompt gold advances designed specifically for the community of North Goa.
          </p>

          {/* Quick Jump Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a
              href="#deposits"
              className="px-4 py-2 rounded-xl bg-navy-800/80 hover:bg-navy-700 text-slate-200 hover:text-white border border-navy-700 text-xs sm:text-sm font-bold transition-all"
            >
              Deposit Schemes (up to 8.25%)
            </a>
            <a
              href="#loans"
              className="px-4 py-2 rounded-xl bg-navy-800/80 hover:bg-navy-700 text-slate-200 hover:text-white border border-navy-700 text-xs sm:text-sm font-bold transition-all"
            >
              Loan Schemes (from 7.00%)
            </a>
            <a
              href="#other"
              className="px-4 py-2 rounded-xl bg-navy-800/80 hover:bg-navy-700 text-slate-200 hover:text-white border border-navy-700 text-xs sm:text-sm font-bold transition-all"
            >
              Utilities & Remittances
            </a>
            <a
              href="#rate-card"
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-navy-950 text-xs sm:text-sm font-extrabold transition-all shadow"
            >
              Quick Rate Card
            </a>
          </div>
        </div>
      </section>

      {/* 2. QUICK INTEREST RATE COMPARISON CARD */}
      <section id="rate-card" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Official Society Tariff Card
              </span>
              <h2 className="text-xl md:text-2xl font-extrabold text-navy-950">
                Key Interest Rates & Tenures Snapshot
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1.5 rounded-lg w-fit">
              Effective: FY 2026 – 2027 • Approved by Board
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 bg-slate-50">
                  <th className="py-3 px-4 rounded-l-lg">Facility / Scheme</th>
                  <th className="py-3 px-4">Standard Rate (p.a.)</th>
                  <th className="py-3 px-4">Senior Citizens</th>
                  <th className="py-3 px-4">Typical Tenure</th>
                  <th className="py-3 px-4 rounded-r-lg text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-4 font-bold text-navy-900">Savings Bank Deposit</td>
                  <td className="py-3 px-4 font-semibold text-emerald-700">4.00%</td>
                  <td className="py-3 px-4">4.00%</td>
                  <td className="py-3 px-4 text-xs text-slate-500">Anytime Liquidity</td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => handleInquire('saving-deposit')}
                      className="text-xs font-bold text-navy-900 hover:text-emerald-700 underline"
                    >
                      Inquire
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-navy-900">Recurring Deposit (RD)</td>
                  <td className="py-3 px-4 font-semibold text-emerald-700">7.25%</td>
                  <td className="py-3 px-4 font-bold text-amber-700">7.75%</td>
                  <td className="py-3 px-4 text-xs text-slate-500">12 to 60 Months</td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => handleInquire('recurring-deposit')}
                      className="text-xs font-bold text-navy-900 hover:text-emerald-700 underline"
                    >
                      Inquire
                    </button>
                  </td>
                </tr>
                <tr className="bg-amber-50/40">
                  <td className="py-3 px-4 font-bold text-navy-900">
                    Diamond Jubilee Fixed Deposit (3 - 5 Yrs)
                  </td>
                  <td className="py-3 px-4 font-bold text-emerald-700">8.25%</td>
                  <td className="py-3 px-4 font-extrabold text-amber-800">8.75% (Special)</td>
                  <td className="py-3 px-4 text-xs text-slate-500">36 to 60 Months</td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => handleInquire('fixed-deposit')}
                      className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold rounded-lg text-xs"
                    >
                      Inquire
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-navy-900">Kisan Agriculture Credit</td>
                  <td className="py-3 px-4 font-bold text-emerald-700">7.00% (Subsidized)</td>
                  <td className="py-3 px-4">7.00%</td>
                  <td className="py-3 px-4 text-xs text-slate-500">Crop / Seasonal Cycle</td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => handleInquire('kisan-agriculture-credit')}
                      className="text-xs font-bold text-navy-900 hover:text-emerald-700 underline"
                    >
                      Inquire
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-navy-900">Gold Ornament Loan</td>
                  <td className="py-3 px-4 font-semibold text-emerald-700">9.00%</td>
                  <td className="py-3 px-4">9.00%</td>
                  <td className="py-3 px-4 text-xs text-slate-500">Sanctioned in 30 Mins</td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => handleInquire('gold-loan')}
                      className="text-xs font-bold text-navy-900 hover:text-emerald-700 underline"
                    >
                      Inquire
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-navy-900">House Construction & Repair</td>
                  <td className="py-3 px-4 font-semibold text-emerald-700">9.00%</td>
                  <td className="py-3 px-4">9.00%</td>
                  <td className="py-3 px-4 text-xs text-slate-500">Up to 15 Years</td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => handleInquire('house-loan')}
                      className="text-xs font-bold text-navy-900 hover:text-emerald-700 underline"
                    >
                      Inquire
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. DEPOSIT SCHEMES SECTION */}
      <section id="deposits" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 text-amber-300 flex items-center justify-center shadow-md">
              <Landmark size={24} />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Deposit & Thrift Schemes
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Safe custody, compound growth, and flexible liquidity backed by co-operative reserves.
              </p>
            </div>
            <div className="flex-grow h-px bg-slate-200 ml-4 hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {depositSchemes.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                accent="deposit"
                onInquire={handleInquire}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. LOAN SCHEMES SECTION */}
      <section id="loans" className="py-16 md:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-700 to-emerald-950 text-white flex items-center justify-center shadow-md">
              <Percent size={24} />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Loan & Credit Facilities
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Empowering farmers, homestead owners, and local micro-merchants with prompt disbursals.
              </p>
            </div>
            <div className="flex-grow h-px bg-slate-200 ml-4 hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {loanSchemes.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                accent="loan"
                onInquire={handleInquire}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. OTHER UTILITY SERVICES */}
      <section id="other" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 text-white flex items-center justify-center shadow-md">
              <Briefcase size={24} />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Public Utility & Remittance Counters
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Save time with zero convenience fees for electricity & water bill clearing.
              </p>
            </div>
            <div className="flex-grow h-px bg-slate-200 ml-4 hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {otherServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                accent="other"
                onInquire={handleInquire}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. REQUIRED DOCUMENTS & EASY PROCESS */}
      <section className="py-14 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-md">
            <h3 className="text-xl md:text-2xl font-extrabold text-navy-950 mb-2">
              Simple Application & Document Checklist
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mb-6">
              Opening an account or requesting a loan requires minimal paperwork under our cooperative model:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-emerald-700 font-bold text-xs uppercase mb-1">Step 1 • Identity</div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Aadhaar / Voter ID</h4>
                <p className="text-xs text-slate-500">Valid government photo identity and address verification proof.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-emerald-700 font-bold text-xs uppercase mb-1">Step 2 • Photos</div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Passport Photographs</h4>
                <p className="text-xs text-slate-500">2 recent passport size photographs of applicant and nominee.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-emerald-700 font-bold text-xs uppercase mb-1">Step 3 • Farmer / Income</div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Krishi Card / Pay Slip</h4>
                <p className="text-xs text-slate-500">Goa Krishi Card for subsidized agri loans, or salary deduction tie-up.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-emerald-700 font-bold text-xs uppercase mb-1">Step 4 • Membership</div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Share Subscription</h4>
                <p className="text-xs text-slate-500">Nominal cooperative share capital to become a voting member.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INQUIRY MODAL */}
      <QuickInquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={selectedServiceId}
      />
    </main>
  );
}
