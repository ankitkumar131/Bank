// ============================================================
// Centralized data for the Bank website
// All placeholder data — replace with real information later
// ============================================================

import { Service, Director, Branch, Activity, CarouselSlide } from '@/types';

// --------------------------------------------------
// Hero Carousel Slides
// --------------------------------------------------
export const heroSlides: CarouselSlide[] = [
  {
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&h=600&fit=crop',
    heading: 'Empowering Community & Agriculture Through Trusted Banking',
    description: 'Your trusted co-operative partner for savings, loans, and financial services.',
  },
  {
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&h=600&fit=crop',
    heading: 'Secure Your Savings',
    description: 'Fixed deposits, recurring deposits, and more — designed for your financial growth.',
  },
  {
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&h=600&fit=crop',
    heading: 'Home Loan Assistance',
    description: 'Affordable home loan solutions to help you build your dream home.',
  },
  {
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1400&h=600&fit=crop',
    heading: 'Vehicle Loan Solutions',
    description: 'Drive your dream vehicle with our flexible 2-wheeler & 4-wheeler loan schemes.',
  },
  {
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1400&h=600&fit=crop',
    heading: 'Gold Loan Facility',
    description: 'Quick and secure gold loans with competitive interest rates.',
  },
  {
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1400&h=600&fit=crop',
    heading: 'Easy Bill Payments',
    description: 'Pay electricity, water, and utility bills conveniently at our branches.',
  },
  {
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&h=600&fit=crop',
    heading: 'NEFT & RTGS Services',
    description: 'Fast and reliable fund transfer services across India.',
  },
  {
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&h=600&fit=crop',
    heading: 'ECS & NACH Services',
    description: 'Automated payment solutions for hassle-free recurring transactions.',
  },
];

// --------------------------------------------------
// Services
// --------------------------------------------------
export const depositSchemes: Service[] = [
  {
    id: 'saving-deposit',
    title: 'Saving Deposit',
    description: 'Open a savings account with us and earn attractive interest on your deposits while maintaining easy access to your funds.',
    icon: '🏦',
    category: 'deposit',
  },
  {
    id: 'recurring-deposit',
    title: 'Recurring Deposit',
    description: 'Build your savings systematically with regular monthly deposits and enjoy guaranteed returns at maturity.',
    icon: '📅',
    category: 'deposit',
  },
  {
    id: 'current-deposit',
    title: 'Current Deposit',
    description: 'Manage your business finances efficiently with our current account offering unlimited transactions and overdraft facilities.',
    icon: '💼',
    category: 'deposit',
  },
  {
    id: 'fixed-deposit',
    title: 'Fixed Deposit',
    description: 'Secure your savings with a structured fixed deposit plan designed to provide stable returns over a selected tenure.',
    icon: '🔒',
    category: 'deposit',
  },
  {
    id: 'pigmy-deposit',
    title: 'Pigmy Deposit',
    description: 'Save small amounts daily with our convenient door-to-door Pigmy deposit collection service.',
    icon: '🐖',
    category: 'deposit',
  },
  {
    id: 'monthly-quarterly-interest',
    title: 'Monthly & Quarterly Interest Scheme',
    description: 'Earn regular income through periodic interest payouts on your deposit, ideal for retirees and income seekers.',
    icon: '📊',
    category: 'deposit',
  },
];

export const loanSchemes: Service[] = [
  {
    id: 'personal-business-loan',
    title: 'Personal / Business Loan',
    description: 'Flexible personal and business loans tailored to meet your individual or entrepreneurial financial needs.',
    icon: '💰',
    category: 'loan',
  },
  {
    id: '2-wheeler-4-wheeler-loan',
    title: '2 Wheeler / 4 Wheeler Loan',
    description: 'Drive your dream vehicle with our competitive vehicle loan offerings for two-wheelers and four-wheelers.',
    icon: '🚗',
    category: 'loan',
  },
  {
    id: 'gold-loan',
    title: 'Gold Loan',
    description: 'Get instant funds by pledging your gold ornaments at attractive interest rates with secure storage.',
    icon: '✨',
    category: 'loan',
  },
  {
    id: 'salary-deduction-loan',
    title: 'Salary Deduction Loan for Government Employees',
    description: 'Convenient loans for government employees with automatic salary deduction for easy repayment.',
    icon: '🏛️',
    category: 'loan',
  },
  {
    id: 'house-loan',
    title: 'House Loan',
    description: 'Affordable home loan solutions with competitive interest rates to help you build or purchase your dream home.',
    icon: '🏠',
    category: 'loan',
  },
];

export const otherServices: Service[] = [
  {
    id: 'electricity-water-bill',
    title: 'Electricity & Water Bill Payment',
    description: 'Pay your utility bills conveniently at any of our branches without any additional charges.',
    icon: '⚡',
    category: 'other',
  },
  {
    id: 'neft-rtgs',
    title: 'NEFT / RTGS Services',
    description: 'Transfer funds securely and quickly across India through our NEFT and RTGS banking channels.',
    icon: '🔄',
    category: 'other',
  },
  {
    id: 'ecs-nach',
    title: 'ECS / NACH Services',
    description: 'Automate your recurring payments and collections with our Electronic Clearing and NACH services.',
    icon: '⚙️',
    category: 'other',
  },
];

export const allServices: Service[] = [...depositSchemes, ...loanSchemes, ...otherServices];

// --------------------------------------------------
// Service options for the contact form dropdown
// --------------------------------------------------
export const serviceOptions = [
  {
    group: 'Deposit Schemes',
    options: depositSchemes.map((s) => ({ value: s.id, label: s.title })),
  },
  {
    group: 'Loan Schemes',
    options: loanSchemes.map((s) => ({ value: s.id, label: s.title })),
  },
  {
    group: 'Services',
    options: otherServices.map((s) => ({ value: s.id, label: s.title })),
  },
];

// --------------------------------------------------
// Board of Directors
// --------------------------------------------------
export const directors: Director[] = [
  { id: 1, name: 'Mr. Rajesh Kumar', designation: 'Chairman', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
  { id: 2, name: 'Mr. Suresh Patil', designation: 'Vice Chairman', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face' },
  { id: 3, name: 'Ms. Anita Deshmukh', designation: 'Secretary', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face' },
  { id: 4, name: 'Mr. Mahesh Jadhav', designation: 'Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face' },
  { id: 5, name: 'Mr. Prakash Shinde', designation: 'Director', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face' },
  { id: 6, name: 'Mr. Sanjay More', designation: 'Director', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face' },
  { id: 7, name: 'Mr. Ramesh Pawar', designation: 'Director', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face' },
  { id: 8, name: 'Mr. Ashok Kulkarni', designation: 'Director', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face' },
  { id: 9, name: 'Mr. Vijay Patil', designation: 'Director', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face' },
];

// --------------------------------------------------
// Branches
// --------------------------------------------------
export const branches: Branch[] = [
  {
    id: 1,
    name: 'Parra Verlacanca Main Branch',
    address: '123 Main Market Road, Parra Verlacanca',
    phone: '+91 98765 43210',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.5!2d73.85!3d15.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDMzJzAwLjAiTiA3M8KwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890',
  },
  {
    id: 2,
    name: 'City Branch',
    address: '45 Station Road, Parra Verlacanca',
    phone: '+91 98765 43211',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.5!2d73.86!3d15.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDMzJzAwLjAiTiA3M8KwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567891',
  },
  {
    id: 3,
    name: 'Agriculture Branch',
    address: '78 Agricultural Market Road, Parra Verlacanca',
    phone: '+91 98765 43212',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.5!2d73.87!3d15.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDMzJzAwLjAiTiA3M8KwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567892',
  },
  {
    id: 4,
    name: 'Community Branch',
    address: '21 Cooperative Society Road, Parra Verlacanca',
    phone: '+91 98765 43213',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.5!2d73.88!3d15.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDMzJzAwLjAiTiA3M8KwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567893',
  },
];

// --------------------------------------------------
// Social Activities
// --------------------------------------------------
export const activities: Activity[] = [
  {
    id: 1,
    title: 'Community Meeting',
    date: '15 August 2026',
    description: 'Annual general body meeting of the society members to discuss financial performance, future plans, and community welfare initiatives.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Agricultural Awareness Program',
    date: '22 July 2026',
    description: 'A comprehensive agricultural awareness program conducted for local farmers covering modern farming techniques, government subsidies, and crop insurance schemes.',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Financial Awareness Camp',
    date: '10 June 2026',
    description: 'A community awareness session conducted to promote responsible savings, financial planning, and awareness of available co-operative financial services.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Community Support Activity',
    date: '5 May 2026',
    description: 'Distribution of essential supplies and financial aid to underprivileged families in the local community as part of our social responsibility program.',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'Educational Support Program',
    date: '18 April 2026',
    description: 'Scholarship distribution ceremony for meritorious students from economically weaker sections, supporting their academic pursuits.',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    title: 'Social Welfare Activity',
    date: '2 March 2026',
    description: 'Health check-up camp organized for senior citizens and society members, providing free medical consultations and basic health screenings.',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop',
  },
  {
    id: 7,
    title: 'Cooperative Meeting',
    date: '14 February 2026',
    description: 'Quarterly board meeting of the co-operative society to review financial performance, approve new loan applications, and plan upcoming community events.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop',
  },
  {
    id: 8,
    title: 'Customer Awareness Event',
    date: '25 January 2026',
    description: 'Interactive session with customers to introduce new banking services, digital payment options, and answer queries about existing deposit and loan schemes.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop',
  },
  {
    id: 9,
    title: 'Local Development Activity',
    date: '12 December 2025',
    description: 'Tree plantation drive and local infrastructure improvement activity conducted in collaboration with village panchayat and community volunteers.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
  },
  {
    id: 10,
    title: 'Community Celebration',
    date: '26 November 2025',
    description: 'Annual cultural event celebrating the foundation day of the society with cultural performances, felicitation of long-standing members, and community feast.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
  },
  {
    id: 11,
    title: "Women's Empowerment Activity",
    date: '8 October 2025',
    description: "Workshop on women's financial independence, self-help group formation, micro-finance opportunities, and small business development training.",
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop',
  },
  {
    id: 12,
    title: 'Agricultural Community Program',
    date: '20 September 2025',
    description: 'Soil testing and agricultural advisory program conducted for member farmers, providing scientific recommendations for improved crop yield.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop',
  },
];

// --------------------------------------------------
// Navigation links
// --------------------------------------------------
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'BoD', href: '/bod' },
  { label: 'Branches', href: '/branches' },
  { label: 'Services', href: '/services' },
  { label: 'Social Achievements', href: '/social-achievements' },
  { label: 'Contacts', href: '/contacts' },
];
