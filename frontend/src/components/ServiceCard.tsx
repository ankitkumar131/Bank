import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export type ServiceAccent = 'deposit' | 'loan' | 'other';

export interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  icon?: string;
  rate?: string;
}

const accentStyles: Record<
  ServiceAccent,
  { tile: string; badge: string; label: string; btn: string }
> = {
  deposit: {
    tile: 'from-navy-700 to-navy-950',
    badge: 'bg-navy-50 text-navy-800 border-navy-200',
    label: 'Deposit',
    btn: 'border-navy-200 text-navy-900 hover:border-navy-900 hover:bg-navy-900 hover:text-white',
  },
  loan: {
    tile: 'from-emerald-600 to-emerald-900',
    badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    label: 'Loan',
    btn: 'border-emerald-200 text-emerald-900 hover:border-emerald-800 hover:bg-emerald-800 hover:text-white',
  },
  other: {
    tile: 'from-amber-500 to-amber-700',
    badge: 'bg-amber-50 text-amber-800 border-amber-200',
    label: 'Service',
    btn: 'border-amber-200 text-amber-900 hover:border-amber-600 hover:bg-amber-600 hover:text-white',
  },
};

export default function ServiceCard({
  service,
  accent = 'deposit',
}: {
  service: ServiceCardData;
  accent?: ServiceAccent;
}) {
  const styles = accentStyles[accent];

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-300 hover:shadow-xl">
      {/* Top accent bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-navy-700 via-emerald-600 to-amber-500" />
      <div className="flex h-full flex-col p-6 md:p-7">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${styles.tile} text-3xl shadow-md transition-transform duration-300 group-hover:scale-110 text-white`}
          >
            <span role="img" aria-hidden="true">
              {service.icon || '🏦'}
            </span>
          </div>
          <span
            className={`rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${styles.badge}`}
          >
            {styles.label}
          </span>
        </div>
        <h4 className="mb-3 text-xl font-bold text-slate-900 group-hover:text-navy-800 transition-colors">
          {service.title}
        </h4>
        <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-600">
          {service.description}
        </p>
        <Link
          href={`/contacts?service=${service.id}`}
          className={`mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${styles.btn}`}
        >
          Request Service <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
