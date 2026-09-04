import { Service, Director, Branch, Activity, CarouselSlide } from '@/types';

// --------------------------------------------------
// Hero Carousel Slides
// --------------------------------------------------
export const heroSlides: CarouselSlide[] = [
  {
    image: '/images/hero/hero-1.svg',
    tag: 'A Grade Statutory Audit Recognized Society',
    heading: 'Rooted in Soil, Empowering Community: Six Decades of Co-operative Banking Excellence',
    description: "Established on the steadfast Vedic principle of 'परस्परं भावयन्तः' (thriving together in unity), safeguarding generations of rural wealth and cultivating agrarian prosperity across North Goa.",
    ctaText: 'Explore Banking Schemes',
    ctaLink: '/services',
  },
  {
    image: '/images/hero/hero-2.svg',
    tag: 'Fixed & Recurring Term Plans',
    heading: 'Guaranteed Yields & Stable Compounding for Every Life Stage',
    description: 'Special 0.50% preferential interest rates for senior citizens, flexible tenure selections, and full statutory deposit safety backed by co-operative reserves.',
    ctaText: 'View Deposit Rates',
    ctaLink: '/services#deposits',
  },
  {
    image: '/images/hero/hero-5.svg',
    tag: 'Instant Disbursal Facilities',
    heading: 'Prompt Gold Loans & Transparent Valuations Within 30 Minutes',
    description: 'Instant liquidity against gold ornaments evaluated by certified appraisers with bank-locker vault security and minimal paper documentation.',
    ctaText: 'Request Gold Loan',
    ctaLink: '/contacts?service=gold-loan',
  },
  {
    image: '/images/hero/hero-3.svg',
    tag: 'Home Construction & Modernization',
    heading: 'Long-Tenure Housing Credit for Rural & Ancestral Properties',
    description: 'Competitive interest rates with flexible repayment terms designed to help you construct, renovate, or monsoon-proof your family home.',
    ctaText: 'Explore House Loans',
    ctaLink: '/contacts?service=house-loan',
  },
  {
    image: '/images/hero/hero-4.svg',
    tag: 'Vehicle Mobility Solutions',
    heading: 'Two-Wheeler & Commercial Vehicle Finance for Rural Commerce',
    description: 'Fast sanctions, simplified documentation, and transparent interest rates for two-wheelers, passenger vehicles, and agrarian utility carriers.',
    ctaText: 'Apply for Vehicle Loan',
    ctaLink: '/contacts?service=2-wheeler-4-wheeler-loan',
  },
  {
    image: '/images/hero/hero-6.svg',
    tag: 'Convenient Remittance Desk',
    heading: 'One-Window Utility Payments & Institutional Digital Remittances',
    description: 'Zero-fee electricity and PWD water bill clearing, rapid NEFT/RTGS transfers, and automated ECS/NACH recurring debit facilitation.',
    ctaText: 'View All Services',
    ctaLink: '/services#other',
  },
];

// --------------------------------------------------
// Deposit Schemes
// --------------------------------------------------
export const depositSchemes: Service[] = [
  {
    id: 'saving-deposit',
    title: 'Savings Bank Account',
    description: 'Interest computed on daily product basis. Free passbook, nomination facility, and immediate SMS transaction connectivity.',
    icon: '🏦',
    category: 'deposit',
    tag: 'DAILY LIQUIDITY',
    rate: '4.00% p.a.',
    term: 'Anytime Access',
    highlights: ['Zero opening penalty', 'Doorstep collection eligible', 'Nomination facility included'],
  },
  {
    id: 'recurring-deposit',
    title: 'Recurring Deposit (RD)',
    description: 'Disciplined monthly deposits starting from ₹100. Flexible tenure options from 12 to 60 months with attractive compounding returns.',
    icon: '📅',
    category: 'deposit',
    tag: 'SYSTEMATIC THRIFT',
    rate: '7.25% p.a.',
    term: '12 - 60 Months',
    highlights: ['Small systematic instalments', 'Guaranteed maturity yield', 'Loan facility up to 90%'],
  },
  {
    id: 'fixed-deposit',
    title: 'Fixed Deposit (FD)',
    description: 'Guaranteed high-return yield plans. Special 0.50% preferential rate for senior citizens. Re-investment or cumulative simple payout choices.',
    icon: '🔒',
    category: 'deposit',
    tag: 'MAXIMUM YIELD',
    rate: 'Up to 8.25%',
    term: '46 Days - 5 Years',
    highlights: ['+0.50% Senior citizen bonus', 'Quarterly/Monthly payout options', 'Premature withdrawal facility'],
  },
  {
    id: 'pigmy-deposit',
    title: 'Pigmy Daily Thrift',
    description: 'Authorized society agents collect daily savings directly from your shop or residence via handheld biometric POS machines.',
    icon: '🐖',
    category: 'deposit',
    tag: 'DOORSTEP SAVINGS',
    rate: 'Daily Pickup',
    term: 'Flexible Tenure',
    highlights: ['Daily collector visits your door', 'Biometric instant receipts', 'Encourages micro-thrift habits'],
  },
  {
    id: 'monthly-quarterly-interest',
    title: 'Quarterly Income Deposit',
    description: 'Ideal for retired individuals seeking predictable quarterly cash flow directly credited to their designated bank savings balance.',
    icon: '📊',
    category: 'deposit',
    tag: 'PERIODIC LIQUIDITY',
    rate: '7.50% p.a.',
    term: '1 to 5 Years',
    highlights: ['Guaranteed periodic payout', 'Direct bank account credit', 'Fiduciary stability'],
  },
  {
    id: 'current-deposit',
    title: 'Commercial Current Account',
    description: 'Robust operational accounts for registered traders, dairy co-operatives, and small retail establishments with instant clearances.',
    icon: '💼',
    category: 'deposit',
    tag: 'BUSINESS LIQUIDITY',
    rate: 'No Caps',
    term: 'Operational',
    highlights: ['High transaction bandwidth', 'Overdraft facilities on merit', 'Dedicated merchant counter'],
  },
];

// --------------------------------------------------
// Loan Schemes
// --------------------------------------------------
export const loanSchemes: Service[] = [
  {
    id: 'gold-loan',
    title: 'Gold Ornament Loan',
    description: 'Instant valuation by certified appraisers. Secure bank-locker vault custody with repayment flexibility within 12 months.',
    icon: '✨',
    category: 'loan',
    tag: 'POPULAR CHOICE',
    rate: '9.00% p.a.',
    term: 'Sanction in 30 mins',
    highlights: ['Immediate spot disbursal', 'Zero prepayment charges', 'Insured strongroom security'],
  },
  {
    id: 'salary-deduction-loan',
    title: 'Salary Deduction Loan',
    description: 'Tailored facilities for Government of Goa employees and quasi-government workers with direct monthly payroll deductions.',
    icon: '🏛️',
    category: 'loan',
    tag: 'GOVT / INSTITUTIONAL',
    rate: '10.50% p.a.',
    term: 'Up to ₹10 Lakhs',
    highlights: ['Direct departmental tie-up', 'Minimal documentation', 'Comfortable EMI structure'],
  },
  {
    id: '2-wheeler-4-wheeler-loan',
    title: 'Two-Wheeler & Four-Wheeler Loan',
    description: 'Up to 85% on-road financing for scooters, motorcycles, passenger cars, and light commercial vehicles for local transport.',
    icon: '🚗',
    category: 'loan',
    tag: 'MOBILITY',
    rate: '9.75% p.a.',
    term: 'Tenure up to 60 mos',
    highlights: ['Up to 85% on-road funding', 'Quick hypothecation endorsement', 'Flexible tenure terms'],
  },
  {
    id: 'house-loan',
    title: 'House Construction & Repair',
    description: 'Long-margin loans for rural homestead construction, Portuguese ancestral home restoration, or roof monsoon waterproofing.',
    icon: '🏠',
    category: 'loan',
    tag: 'SHELTER',
    rate: '9.00% p.a.',
    term: 'Up to 15-year tenure',
    highlights: ['Covers renovations & repair', 'Competitive reducing interest', 'Simplified legal scrutiny'],
  },
  {
    id: 'personal-business-loan',
    title: 'Personal & Micro-Business Credit',
    description: 'Working capital support for provision stores, bakery establishments, beachfront seasonal shacks, and seawater tourism traders.',
    icon: '💰',
    category: 'loan',
    tag: 'ENTERPRISE',
    rate: '11.00% p.a.',
    term: 'Tailored for artisans',
    highlights: ['Working capital liquidity', 'Short-term credit options', 'Supports rural self-reliance'],
  },
  {
    id: 'kisan-agriculture-credit',
    title: 'Kisan Agriculture Credit',
    description: 'Short-term credit for seeds, organic fertilizers, tractor rentals, irrigation equipment, and monsoon paddy harvest cycles.',
    icon: '🌾',
    category: 'loan',
    tag: 'AGRARIAN SUBSIDIZED',
    rate: '7.00% p.a.',
    term: 'Seasonal Schedules',
    highlights: ['Aligned to harvest timelines', 'Subsidized interest assistance', 'Priority farmer processing'],
  },
];

// --------------------------------------------------
// Other Services
// --------------------------------------------------
export const otherServices: Service[] = [
  {
    id: 'electricity-water-bill',
    title: 'Electricity & Water Bill Payment',
    description: 'Direct over-the-counter settlement for Goa Electricity Department and PWD Water bills without any convenience fee surcharge.',
    icon: '⚡',
    category: 'other',
    tag: 'PUBLIC UTILITY',
    rate: 'Zero Fee',
    term: 'Instant Stamp',
    highlights: ['No queueing at dept offices', 'Official society stamped receipt', 'Immediate clearing update'],
  },
  {
    id: 'neft-rtgs',
    title: 'NEFT / RTGS Remittances',
    description: 'Seamless nation-wide inter-bank electronic funds transfer executed within minutes through our RBI clearing network.',
    icon: '🔄',
    category: 'other',
    tag: 'INTER-BANK CLEARING',
    rate: 'Standard RBI Tier',
    term: 'Instant Settlement',
    highlights: ['Direct IFSC routing', 'High-value RTGS support', 'SMS confirmation dispatch'],
  },
  {
    id: 'ecs-nach',
    title: 'ECS / NACH Automated Clearing',
    description: 'Regular recurring mandates for life insurance premiums, mutual fund SIP debits, and institutional utility auto-pay.',
    icon: '⚙️',
    category: 'other',
    tag: 'MANDATE CLEARING',
    rate: 'Automated',
    term: 'Scheduled Debits',
    highlights: ['Hassle-free automated debits', 'Timely premium protection', 'Member authorization audit'],
  },
];

export const allServices: Service[] = [...depositSchemes, ...loanSchemes, ...otherServices];

// --------------------------------------------------
// Service options for the contact form dropdown
// --------------------------------------------------
export const serviceOptions = [
  {
    group: 'Deposit Schemes',
    options: depositSchemes.map((s) => ({ value: s.id, label: `${s.title} (${s.rate || s.tag})` })),
  },
  {
    group: 'Loan Schemes',
    options: loanSchemes.map((s) => ({ value: s.id, label: `${s.title} (${s.rate || s.tag})` })),
  },
  {
    group: 'Utility & Remittance Services',
    options: otherServices.map((s) => ({ value: s.id, label: s.title })),
  },
];

// --------------------------------------------------
// Board of Directors (Tenure 2026 – 2031)
// --------------------------------------------------
export const directors: Director[] = [
  {
    id: 1,
    name: "Shri. Anthony D'Souza",
    designation: 'Chairman',
    image: '/images/directors/director-1.svg',
    portfolio: 'Institutional Strategy & Agricultural Credit',
    tenure: '2026 – 2031',
    bio: 'Former Zilla Panchayat Member and agrarian reformer with 28+ years in rural cooperative governance.',
  },
  {
    id: 2,
    name: 'Shri. Rameshwar Parab',
    designation: 'Vice Chairman',
    image: '/images/directors/director-2.svg',
    portfolio: 'Audit, Khazan Lands & Farmer Relations',
    tenure: '2026 – 2031',
    bio: 'Horticulturist, pioneer in drip irrigation, and active advocate for paddy farmers across Bardez.',
  },
  {
    id: 3,
    name: 'Smt. Maria Fernandes',
    designation: 'General Secretary',
    image: '/images/directors/director-3.svg',
    portfolio: 'Operations, Legal Compliance & Social Outreach',
    tenure: '2026 – 2031',
    bio: 'Chartered Accountant & Rural Finance specialist focused on statutory auditing and micro-savings.',
  },
  {
    id: 4,
    name: 'Shri. Devidas Chodankar',
    designation: 'Director (Legal & Credit)',
    image: '/images/directors/director-4.svg',
    portfolio: 'Mortgage Title Scrutiny & Risk Management',
    tenure: '2026 – 2031',
    bio: 'Advocate & Canca Community representative overseeing mortgage title scrutiny and risk policy.',
  },
  {
    id: 5,
    name: 'Mr. Mahesh Jadhav',
    designation: 'Director',
    image: '/images/directors/director-5.svg',
    portfolio: 'Commercial Lending & MSME Support',
    tenure: '2026 – 2031',
    bio: 'Prominent merchant and MSME counselor facilitating local entrepreneur credit access.',
  },
  {
    id: 6,
    name: 'Mr. Prakash Shinde',
    designation: 'Director',
    image: '/images/directors/director-6.svg',
    portfolio: 'Treasury & Liquidity Management',
    tenure: '2026 – 2031',
    bio: 'Experienced banking professional guiding statutory liquidity ratio compliance and investments.',
  },
  {
    id: 7,
    name: 'Mr. Sanjay More',
    designation: 'Director',
    image: '/images/directors/director-7.svg',
    portfolio: 'Member Welfare & Educational Grants',
    tenure: '2026 – 2031',
    bio: 'Educator and civic leader steering scholarship programs and community medical outreach.',
  },
  {
    id: 8,
    name: 'Mr. Ramesh Pawar',
    designation: 'Director',
    image: '/images/directors/director-8.svg',
    portfolio: 'Agrarian Machinery & Cooperative Stores',
    tenure: '2026 – 2031',
    bio: 'Agriculturalist managing society farm equipment rentals and subsidized seed distribution.',
  },
  {
    id: 9,
    name: 'Mr. Ashok Kulkarni',
    designation: 'Director',
    image: '/images/directors/director-9.svg',
    portfolio: 'Information Systems & Branch Upgrades',
    tenure: '2026 – 2031',
    bio: 'Systems engineer championing core banking software modernization and cyber-safeguards.',
  },
];

// --------------------------------------------------
// Branches
// --------------------------------------------------
export const branches: Branch[] = [
  {
    id: 1,
    code: 'Branch 001',
    name: 'Parra Main Office',
    type: 'HEADQUARTERS',
    address: "Society Bhavan, Near St. Anne's Church, Parra, Bardez, Goa 403510",
    phone: '+91 98765 43210 / 0832-2274111',
    hours: 'Mon–Sat: 8:30 AM – 4:30 PM (Lunch: 1:00 – 2:00 PM)',
    features: 'Full Cash Deposit Counters, Safe Locker Vaults, RTGS Clearing Desk',
    ifsc: 'COOP0001001',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.5!2d73.815!3d15.565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDMzJzU0LjAiTiA3M8KwNDgnNTQuMCJF!5e0!3m2!1sen!2sin!4v1234567890',
  },
  {
    id: 2,
    code: 'Branch 002',
    name: 'Mapusa City Branch',
    type: 'COMMERCIAL',
    address: 'Ground Floor, Municipal Market Complex, Court Road, Mapusa, Goa 403507',
    phone: '+91 98765 43211 / 0832-2262222',
    hours: 'Mon–Sat: 9:00 AM – 5:00 PM (Lunch: 1:30 – 2:30 PM)',
    features: 'Merchant Current Accounts, Gold Loan Appraisal Desk, Foreign Remittance Vouchers',
    ifsc: 'COOP0001002',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.0!2d73.818!3d15.590!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDM1JzI0LjAiTiA3M8KwNDknMDQuOCJF!5e0!3m2!1sen!2sin!4v1234567891',
  },
  {
    id: 3,
    code: 'Branch 003',
    name: 'Verla Agrarian Center',
    type: 'AGRARIAN',
    address: 'Opposite Communidade Office, Verla Village Square, Bardez, Goa 403510',
    phone: '+91 98765 43212 / 0832-2274333',
    hours: 'Mon–Sat: 8:30 AM – 3:30 PM (Continuous Counter Service)',
    features: 'Fertilizer & Seed Subsidy Disbursal, Kisan Credit Verification, Pigmy Counters',
    ifsc: 'COOP0001003',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.2!2d73.805!3d15.575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDM0JzMwLjAiTiA3M8KwNDgnMTguMCJF!5e0!3m2!1sen!2sin!4v1234567892',
  },
  {
    id: 4,
    code: 'Branch 004',
    name: 'Canca Community Counter',
    type: 'COMMUNITY',
    address: 'Panchayat Bhavan Road, Near Shantadurga Temple, Canca, Bardez, Goa 403507',
    phone: '+91 98765 43213 / 0832-2274444',
    hours: 'Mon–Sat: 9:00 AM – 4:30 PM (Lunch: 1:00 – 2:00 PM)',
    features: 'Senior Pension Clearing, Utility Remittance Kiosk, Biometric Pigmy Reconciliation',
    ifsc: 'COOP0001004',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.4!2d73.810!3d15.580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDM0JzQ4LjAiTiA3M8KwNDgnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567893',
  },
];

// --------------------------------------------------
// Social Achievements & Civic Initiatives
// --------------------------------------------------
export const activities: Activity[] = [
  {
    id: 1,
    title: 'Restoring 120 Hectares of Traditional Khazan & Paddy Cultivation',
    date: '14 August 2026',
    description: 'By extending zero-collateral micro-advances and subsidizing saline sluice-gate repairs in the Parra lowlands, the Society revived fallow agricultural holdings, empowering 84 tenant families to resume ancestral rice and local vegetable production.',
    image: '/images/activities/activity-1.svg',
    category: 'Agrarian Revival Initiative',
    beneficiaries: '84 Farmer Families',
  },
  {
    id: 2,
    title: 'Annual Youth Academic Honors',
    date: '28 July 2026',
    description: 'Financial grants and meritorious awards disbursed to top 10th and 12th standard student rank holders from shareholder families pursuing STEM, agriculture, and healthcare studies.',
    image: '/images/activities/activity-2.svg',
    category: 'Merit Endowment',
    beneficiaries: '48 Scholar Aspirants',
  },
  {
    id: 3,
    title: 'Free Geriatric Eye & Diabetic Screening Clinics',
    date: '12 June 2026',
    description: 'Conducted bi-monthly free medical screenings, subsidized spectacles distribution, and prescription insulin assistance for over 1,200 senior citizens across Verla and Canca.',
    image: '/images/activities/activity-3.svg',
    category: 'Community Healthcare',
    beneficiaries: '1,200+ Elders',
  },
  {
    id: 4,
    title: 'Flood Relief & Sluice-Gate Rehabilitation Fund',
    date: '18 May 2026',
    description: 'Emergency interest-free rehabilitation loans and sandbagging infrastructure grants provided to salt-pan workers and paddy cultivators following heavy monsoon inflows.',
    image: '/images/activities/activity-4.svg',
    category: 'Emergency Relief',
    beneficiaries: '62 Agrarian Savers',
  },
  {
    id: 5,
    title: 'Rural Women Self-Help Group (SHG) Micro-Financing Camp',
    date: '24 April 2026',
    description: 'Empowering 16 women-led co-operative cottage units manufacturing traditional Goan spices, dehydrated fish products, and organic compost with revolving seed credit.',
    image: '/images/activities/activity-5.svg',
    category: 'Economic Empowerment',
    beneficiaries: '16 Women SHGs',
  },
  {
    id: 6,
    title: 'Subsidized Solar Water-Pump Installation Scheme',
    date: '10 March 2026',
    description: 'Partnership with local panchayats to subsidize eco-friendly solar water pump equipment for small-scale organic horticultural fields.',
    image: '/images/activities/activity-6.svg',
    category: 'Sustainable Farming',
    beneficiaries: '35 Homesteads',
  },
  {
    id: 7,
    title: 'Bi-Annual General Body Assembly & Audited Balance Sheet Reading',
    date: '16 February 2026',
    description: 'Full democratic deliberation of dividend declarations, statutory auditor reports, and member welfare fund appropriations before over 2,000 attendee members.',
    image: '/images/activities/activity-7.svg',
    category: 'Democratic Transparency',
    beneficiaries: 'All 28,500+ Members',
  },
  {
    id: 8,
    title: 'Financial Literacy & Anti-Cyber Fraud Workshop',
    date: '20 January 2026',
    description: 'Educational awareness seminars teaching elderly depositors safe UPI usage, SMS verification, OTP confidentiality, and ATM card safety.',
    image: '/images/activities/activity-8.svg',
    category: 'Financial Literacy',
    beneficiaries: '450 Senior Savers',
  },
  {
    id: 9,
    title: 'Goan Traditional Heritage & Coconut Grove Conservation',
    date: '15 December 2025',
    description: 'Community sapling distribution and technical pest-management training for local coconut grove owners and horticultural members.',
    image: '/images/activities/activity-9.svg',
    category: 'Ecological Stewardship',
    beneficiaries: '180 Tree Owners',
  },
  {
    id: 10,
    title: 'Society Foundation Day & Diamond Jubilee Preparation',
    date: '28 November 2025',
    description: 'Felicitation of veteran founding members who contributed to the society since 1964, honoring their six decades of unbroken community service.',
    image: '/images/activities/activity-10.svg',
    category: 'Founding Commemoration',
    beneficiaries: '120 Founding Pioneers',
  },
  {
    id: 11,
    title: 'School Sports Equipment & Village Playground Renewal',
    date: '12 October 2025',
    description: 'Granting football equipment, volleyball posts, and pitch maintenance funding for primary and high school students in Parra and Verla.',
    image: '/images/activities/activity-11.svg',
    category: 'Youth & Athletics',
    beneficiaries: '600+ Students',
  },
  {
    id: 12,
    title: 'Veterinary Care & Cattle Feed Subsidies for Dairy Savers',
    date: '18 September 2025',
    description: 'Free veterinary inoculation camps and subsidized mineral cattle feed distribution for members engaged in dairy and animal husbandry.',
    image: '/images/activities/activity-12.svg',
    category: 'Dairy Husbandry',
    beneficiaries: '95 Dairy Families',
  },
];

// --------------------------------------------------
// Navigation links
// --------------------------------------------------
export const navLinks = [
  { label: 'Our Saga & Mission', href: '/' },
  { label: 'Schemes & Services', href: '/services' },
  { label: 'Social Impact', href: '/social-achievements' },
  { label: 'Governance & BoD (2026–2031)', href: '/bod' },
  { label: 'Branch Network', href: '/branches' },
  { label: 'Contacts', href: '/contacts' },
];
