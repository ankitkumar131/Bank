// ============================================================
// Type definitions for Parra Verla Canca Co-operative Society
// ============================================================

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'deposit' | 'loan' | 'other';
  tag?: string;
  rate?: string;
  term?: string;
  highlights?: string[];
}

export interface Director {
  id: number;
  name: string;
  designation: string;
  image: string;
  portfolio?: string;
  tenure?: string;
  bio?: string;
}

export interface Branch {
  id: number;
  code: string;
  name: string;
  type: string;
  address: string;
  phone: string;
  hours: string;
  features: string;
  ifsc: string;
  mapUrl: string;
}

export interface Activity {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  category?: string;
  beneficiaries?: string;
}

export interface CarouselSlide {
  image: string;
  heading: string;
  description: string;
  tag?: string;
  ctaText?: string;
  ctaLink?: string;
}
