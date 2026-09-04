'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { depositSchemes, loanSchemes, otherServices, allServices } from '@/lib/data';
import ServiceCard from '@/components/ServiceCard';
import { 
  Landmark, 
  Percent, 
  CreditCard, 
  Search, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  HelpCircle
} from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'all' | 'deposit' | 'loan' | 'other'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    let list = allServices;
    if (activeTab !== 'all') {
      list = list.filter((s) => s.category === activeTab);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          (s.tag && s.tag.toLowerCase().includes(q)) ||
          (s.rate && s.rate.toLowerCase().includes(q))
      );
    }
    return list;
  }, [activeTab, searchQuery]);

  return (
    <div className="min-h-screen bg-surface py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-12 lg:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-50 text-tertiary text-xs font-label font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-tertiary" />
            <span>Prudent Financial Instruments & Member Tariffs</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 leading-tight">
            Certified Banking Schemes & Services
          </h1>

          <p className="text-base sm:text-lg text-charcoal-600 font-sans leading-relaxed">
            Transparent interest yields, subsidized agricultural advances, and door-to-door Pigmy thrift collection tailored for households and entrepreneurs across North Goa.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-surface-container-low rounded-2xl p-4 sm:p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs font-label font-bold tracking-wider uppercase transition-all ${
                activeTab === 'all'
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-surface-container text-charcoal-700 hover:bg-surface-container-high'
              }`}
            >
              All Schemes ({allServices.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('deposit')}
              className={`px-4 py-2 rounded-lg text-xs font-label font-bold tracking-wider uppercase transition-all ${
                activeTab === 'deposit'
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-surface-container text-charcoal-700 hover:bg-surface-container-high'
              }`}
            >
              Deposits ({depositSchemes.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('loan')}
              className={`px-4 py-2 rounded-lg text-xs font-label font-bold tracking-wider uppercase transition-all ${
                activeTab === 'loan'
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-surface-container text-charcoal-700 hover:bg-surface-container-high'
              }`}
            >
              Credit & Loans ({loanSchemes.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('other')}
              className={`px-4 py-2 rounded-lg text-xs font-label font-bold tracking-wider uppercase transition-all ${
                activeTab === 'other'
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-surface-container text-charcoal-700 hover:bg-surface-container-high'
              }`}
            >
              Remittances ({otherServices.length})
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search scheme, rate, keyword..."
              className="w-full bg-white border border-black/[0.08] rounded-lg pl-10 pr-4 py-2 text-xs text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:border-primary"
            />
          </div>

        </div>

        {/* Dynamic Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-surface-container-low rounded-2xl mb-16">
            <HelpCircle className="w-10 h-10 text-charcoal-400 mx-auto mb-3" />
            <h3 className="font-serif font-bold text-xl text-charcoal-800">
              No matching schemes found
            </h3>
            <p className="text-xs text-charcoal-500 font-sans mt-1">
              Try adjusting your search terms or select another category filter above.
            </p>
          </div>
        )}

        {/* Statutory Deposit Rate Tariff Table */}
        <div className="bg-surface-container-low rounded-2xl p-7 sm:p-10 mb-16 space-y-6" id="deposits">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-black/[0.05]">
            <div>
              <span className="archival-label block">Statutory Reference</span>
              <h3 className="font-serif font-bold text-2xl text-charcoal-900">
                Fixed Deposit Term Matrix & Interest Schedule
              </h3>
            </div>
            <span className="text-xs font-label text-charcoal-600 bg-surface-container px-3 py-1 rounded-md">
              Applicable W.E.F. 01 April 2026
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm font-sans">
              <thead>
                <tr className="border-b border-black/[0.06] text-charcoal-500 font-label uppercase text-[11px]">
                  <th className="py-3 px-4">Tenure Period</th>
                  <th className="py-3 px-4">General Public (p.a.)</th>
                  <th className="py-3 px-4">Senior Citizens (+0.50% p.a.)</th>
                  <th className="py-3 px-4 text-right">Yield Structure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.04] text-charcoal-800">
                <tr>
                  <td className="py-3 px-4 font-medium">46 Days to 90 Days</td>
                  <td className="py-3 px-4">5.50%</td>
                  <td className="py-3 px-4 text-primary font-semibold">6.00%</td>
                  <td className="py-3 px-4 text-right text-charcoal-500">Quarterly Compounded</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">91 Days to 180 Days</td>
                  <td className="py-3 px-4">6.25%</td>
                  <td className="py-3 px-4 text-primary font-semibold">6.75%</td>
                  <td className="py-3 px-4 text-right text-charcoal-500">Quarterly Compounded</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">181 Days to 364 Days</td>
                  <td className="py-3 px-4">7.00%</td>
                  <td className="py-3 px-4 text-primary font-semibold">7.50%</td>
                  <td className="py-3 px-4 text-right text-charcoal-500">Quarterly Compounded</td>
                </tr>
                <tr className="bg-surface-container/50">
                  <td className="py-3.5 px-4 font-bold text-charcoal-900">1 Year to 3 Years (Prime)</td>
                  <td className="py-3.5 px-4 font-bold text-primary">7.75%</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700">8.25%</td>
                  <td className="py-3.5 px-4 text-right font-medium text-charcoal-700">Monthly / Quarterly Payout</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Above 3 Years up to 5 Years</td>
                  <td className="py-3 px-4">7.50%</td>
                  <td className="py-3 px-4 text-primary font-semibold">8.00%</td>
                  <td className="py-3 px-4 text-right text-charcoal-500">Cumulative Maturity</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pt-2 text-[11px] text-charcoal-500 font-sans flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Interest rates are subject to periodic Board revision in accordance with Registrar guidelines. Premature withdrawals permitted per by-law terms.</span>
          </div>
        </div>

        {/* Inquire CTA card */}
        <div className="bg-surface-container-lowest rounded-2xl p-8 sm:p-10 shadow-editorial-float flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="archival-label">Customized Financial Scrutiny</span>
            <h3 className="font-serif font-bold text-2xl text-charcoal-900">
              Need Assistance Selecting the Right Deposit or Loan Scheme?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 font-sans">
              Our branch managers review income streams, seasonal crop schedules, and repayment plans in person.
            </p>
          </div>

          <Link
            href="/contacts"
            className="btn-editorial-primary flex-shrink-0 inline-flex items-center gap-2"
          >
            <span>Inquire at Secretariat</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
