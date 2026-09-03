// ============================================================
// Type definitions for the Bank website
// ============================================================

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'deposit' | 'loan' | 'other';
}

export interface Director {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
  mapUrl: string;
}

export interface Activity {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface CarouselSlide {
  image: string;
  heading: string;
  description: string;
}
