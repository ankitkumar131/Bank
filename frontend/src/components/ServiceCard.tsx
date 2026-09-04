import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Service } from '@/types';

export default function ServiceCard({
  service,
}: {
  service: Service;
}) {
  return (
    <div className="group flex flex-col h-full bg-surface-container-lowest rounded-xl p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-editorial-float">
      
      {/* Header Badges & Rates */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-105 transition-transform">
          <span role="img" aria-hidden="true">
            {service.icon || '🏦'}
          </span>
        </div>

        <div className="flex flex-col items-end gap-1">
          {service.rate && (
            <span className="font-serif font-bold text-base text-primary tracking-tight">
              {service.rate}
            </span>
          )}
          {service.tag && (
            <span className="font-label text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-surface-container-high text-charcoal-700">
              {service.tag}
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-serif font-bold text-lg text-charcoal-900 mb-2 group-hover:text-primary transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-5 flex-grow font-sans">
        {service.description}
      </p>

      {/* Highlights / Features if present */}
      {service.highlights && service.highlights.length > 0 && (
        <ul className="mb-6 space-y-1.5 pt-3 border-t border-black/[0.04]">
          {service.highlights.map((h, idx) => (
            <li key={idx} className="flex items-center gap-2 text-[12px] text-charcoal-500 font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary/60 flex-shrink-0"></span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Action CTA */}
      <div className="pt-2 mt-auto">
        <Link
          href={`/contacts?service=${service.id}`}
          className="inline-flex w-full items-center justify-between px-4 py-2.5 bg-surface-container hover:bg-surface-container-high text-primary hover:text-primary-hover rounded-md text-xs font-semibold tracking-wide transition-all group/btn"
        >
          <span>Request Scheme</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
