'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Percent, Clock } from 'lucide-react';
import { Service } from '@/types';

export type ServiceAccent = 'deposit' | 'loan' | 'other';

interface ServiceCardProps {
  service: Service;
  accent?: ServiceAccent;
  onInquire?: (serviceId: string) => void;
}

const accentConfigs: Record<
  ServiceAccent,
  {
    borderHover: string;
    iconBg: string;
    badgeBg: string;
    badgeText: string;
    rateBg: string;
    buttonClass: string;
    categoryLabel: string;
  }
> = {
  deposit: {
    borderHover: 'hover:border-navy-400 hover:shadow-navy-900/10',
    iconBg: 'bg-gradient-to-br from-navy-800 to-navy-950 text-amber-300',
    badgeBg: 'bg-navy-50 border-navy-200',
    badgeText: 'text-navy-900',
    rateBg: 'bg-amber-50 border-amber-200 text-amber-900',
    buttonClass: 'bg-navy-900 hover:bg-navy-800 text-white shadow-sm',
    categoryLabel: 'Term Deposit Scheme',
  },
  loan: {
    borderHover: 'hover:border-emerald-400 hover:shadow-emerald-900/10',
    iconBg: 'bg-gradient-to-br from-emerald-700 to-emerald-950 text-white',
    badgeBg: 'bg-emerald-50 border-emerald-200',
    badgeText: 'text-emerald-900',
    rateBg: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    buttonClass: 'bg-emerald-700 hover:bg-emerald-600 text-white shadow-sm',
    categoryLabel: 'Credit Facility',
  },
  other: {
    borderHover: 'hover:border-amber-400 hover:shadow-amber-900/10',
    iconBg: 'bg-gradient-to-br from-amber-600 to-amber-800 text-white',
    badgeBg: 'bg-amber-50 border-amber-200',
    badgeText: 'text-amber-950',
    rateBg: 'bg-slate-100 border-slate-200 text-slate-800',
    buttonClass: 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm',
    categoryLabel: 'Counter & Remittance',
  },
};

export default function ServiceCard({ service, accent = 'deposit', onInquire }: ServiceCardProps) {
  const conf = accentConfigs[accent];

  return (
    <div
      className={`group relative flex flex-col h-full bg-white rounded-2xl border border-slate-200 shadow-sm ${conf.borderHover} hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden`}
    >
      {/* Top Accent Strip */}
      <div
        className={`h-1.5 w-full ${
          accent === 'deposit'
            ? 'bg-gradient-to-r from-navy-800 to-amber-500'
            : accent === 'loan'
            ? 'bg-gradient-to-r from-emerald-600 to-teal-500'
            : 'bg-gradient-to-r from-amber-500 to-orange-500'
        }`}
      />

      <div className="flex flex-col flex-grow p-6 md:p-7">
        {/* Top Header info */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div
            className={`w-14 h-14 rounded-2xl ${conf.iconBg} flex items-center justify-center text-2xl shadow-md transition-transform duration-300 group-hover:scale-105 flex-shrink-0`}
          >
            <span role="img" aria-hidden="true">
              {service.icon || '🏦'}
            </span>
          </div>

          <div className="flex flex-col items-end gap-1.5">
            {service.tag && (
              <span
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${conf.badgeBg} ${conf.badgeText}`}
              >
                {service.tag}
              </span>
            )}
            {service.rate && (
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold border ${conf.rateBg}`}
              >
                <Percent className="w-3 h-3" /> {service.rate}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h4 className="text-xl font-bold text-slate-900 group-hover:text-navy-900 transition-colors mb-2">
          {service.title}
        </h4>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
          {service.description}
        </p>

        {/* Highlights bullets if present */}
        {service.highlights && service.highlights.length > 0 && (
          <ul className="mb-6 space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
            {service.highlights.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span className="truncate">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Term or tenure if present */}
        {service.term && (
          <div className="mb-4 flex items-center gap-1.5 text-xs font-medium text-slate-500">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Tenure / Speed: <strong>{service.term}</strong></span>
          </div>
        )}

        {/* Action Button */}
        <div className="mt-auto pt-2">
          {onInquire ? (
            <button
              type="button"
              onClick={() => onInquire(service.id)}
              className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${conf.buttonClass}`}
            >
              Inquire Scheme <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <Link
              href={`/contacts?service=${service.id}`}
              className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${conf.buttonClass}`}
            >
              Inquire Scheme <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
