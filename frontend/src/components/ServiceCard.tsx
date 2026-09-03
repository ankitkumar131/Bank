import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export type ServiceAccent = 'deposit' | 'loan' | 'other';

export interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

const accentStyles: Record<
  ServiceAccent,
  { tile: string; badge: string; label: string }
> = {
  deposit: {
    tile: 'from-burgundy-700 to-burgundy-950',
    badge: 'bg-burgundy-50 text-burgundy-700 border-burgundy-200',
    label: 'Deposit',
  },
  loan: {
    tile: 'from-orange-500 to-orange-800',
    badge: 'bg-orange-50 text-orange-700 border-orange-200',
    label: 'Loan',
  },
  other: {
    tile: 'from-golden-500 to-golden-700',
    badge: 'bg-golden-50 text-golden-700 border-golden-200',
    label: 'Service',
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
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-burgundy/30 hover:shadow-xl">
      {/* Top accent bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-burgundy via-orange to-golden" />

      <div className="flex h-full flex-col p-6 md:p-7">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${styles.tile} text-3xl shadow-md transition-transform duration-300 group-hover:scale-110`}
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

        <h4 className="mb-3 text-xl font-bold text-charcoal-900">
          {service.title}
        </h4>
        <p className="mb-6 flex-grow text-sm leading-relaxed text-charcoal-600">
          {service.description}
        </p>

        <Link
          href={`/contacts?service=${service.id}`}
          className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-burgundy/15 px-5 py-2.5 text-sm font-semibold text-burgundy transition-all duration-200 hover:border-burgundy hover:bg-burgundy hover:text-white"
        >
          Request Service <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
