'use client';

import React, { useState, useEffect, Suspense, FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Building2,
  User,
} from 'lucide-react';
import { branches, serviceOptions } from '@/lib/data';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    branch: 'Parra Main Office',
    serviceRequest: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    serviceRequest: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');

  useEffect(() => {
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, serviceRequest: serviceParam }));
      setTimeout(() => {
        const section = document.getElementById('service-request');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [serviceParam]);

  const validateEmail = (email: string) => {
    if (!email) return true; // Optional
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = { name: '', phone: '', email: '', serviceRequest: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
      isValid = false;
    }

    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number';
      isValid = false;
    }

    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.serviceRequest) {
      newErrors.serviceRequest = 'Please select a scheme or service category';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setTicketId(`REQ-${Math.floor(100000 + Math.random() * 900000)}`);
        setIsSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          branch: 'Parra Main Office',
          serviceRequest: '',
          message: '',
        });
      }, 1000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div
      className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl border border-slate-200"
      id="service-request"
    >
      <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 w-fit mb-3">
        <Send className="w-3.5 h-3.5" /> Fast Response Desk
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mb-2 tracking-tight">
        Request a Call Back or Service
      </h2>
      <p className="text-slate-600 mb-8 text-xs sm:text-sm">
        Submit your requirements. An officer from your chosen branch will contact you within 2 working hours.
      </p>

      {isSuccess ? (
        <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <span className="text-xs font-mono font-bold text-navy-900 bg-white px-3 py-1 rounded-full border border-slate-200 inline-block mb-2">
            Ticket ID: {ticketId}
          </span>
          <h4 className="text-lg font-bold text-navy-950 mb-1">Request Successfully Registered</h4>
          <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto mb-4">
            Our customer relations desk will call your registered number shortly. Thank you for banking with Parra Verla Canca M.P.A.C.S. Ltd.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="text-xs font-bold text-navy-900 underline hover:text-emerald-700"
          >
            Submit another query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Full Name *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Maria Fernandes"
                className={`w-full pl-10 pr-3.5 py-2.5 border ${
                  errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300'
                } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-navy-600 text-slate-900`}
              />
            </div>
            {errors.name && <p className="mt-1 text-xs text-rose-600">{errors.name}</p>}
          </div>

          {/* Mobile Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Mobile Number *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile"
                  maxLength={14}
                  className={`w-full pl-10 pr-3.5 py-2.5 border ${
                    errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300'
                  } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-navy-600 text-slate-900`}
                />
              </div>
              {errors.phone && <p className="mt-1 text-xs text-rose-600">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Email Address (Optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@domain.com"
                  className={`w-full pl-10 pr-3.5 py-2.5 border ${
                    errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300'
                  } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-navy-600 text-slate-900`}
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
            </div>
          </div>

          {/* Preferred Branch & Service Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="branch" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Preferred Branch *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Building2 className="w-4 h-4" />
                </div>
                <select
                  id="branch"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-navy-600 text-slate-900 bg-white"
                >
                  {branches.map((b) => (
                    <option key={b.id} value={b.name}>
                      {b.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="serviceRequest" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Scheme / Inquiry Category *
              </label>
              <select
                id="serviceRequest"
                name="serviceRequest"
                value={formData.serviceRequest}
                onChange={handleChange}
                className={`w-full px-3.5 py-2.5 border ${
                  errors.serviceRequest ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300'
                } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-navy-600 text-slate-900 bg-white`}
              >
                <option value="">Select a scheme...</option>
                {serviceOptions.map((grp) => (
                  <optgroup key={grp.group} label={grp.group}>
                    {grp.options.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </optgroup>
                ))}
                <option value="safe-locker">Safe Deposit Locker</option>
                <option value="general-inquiry">General Membership Inquiry</option>
              </select>
              {errors.serviceRequest && (
                <p className="mt-1 text-xs text-rose-600">{errors.serviceRequest}</p>
              )}
            </div>
          </div>

          {/* Notes / Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Specific Requirements or Question (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g. I want to inquire about a ₹2,00,000 Gold Loan or opening an FD account."
              className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-navy-600 text-slate-900"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-sm"
          >
            {isSubmitting ? 'Submitting...' : 'Send Request & Request Callback'}
          </button>

          <p className="text-[11px] text-slate-400 text-center">
            🔒 Bank personnel will never ask for confidential PINs or SMS OTP codes.
          </p>
        </form>
      )}
    </div>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Who is eligible to open an account or take a loan?',
      a: 'Any resident of Parra, Verla, Canca, or Bardez taluka can become a nominal or ordinary member by submitting valid KYC documents (Aadhaar/Voter ID) and subscribing to nominal society share capital.',
    },
    {
      q: 'How fast are Gold Loans sanctioned?',
      a: 'Gold Loans are appraised and sanctioned on the spot by our certified appraisers. Customers typically receive loan disbursement in cash or direct account transfer within 30 minutes.',
    },
    {
      q: 'What is the Pigmy Daily Doorstep collection system?',
      a: 'Our authorized society agents visit your shop, home, or workplace daily to collect small savings (even ₹50/day) with instant digital biometric SMS receipts.',
    },
    {
      q: 'Are utility bill payments free of extra charges?',
      a: 'Yes! Goa Electricity Department and PWD Water bills can be cleared at our Parra, Mapusa, Verla, and Canca branches with zero convenience fees.',
    },
  ];

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-sm"
        >
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full p-4 text-left flex items-center justify-between font-bold text-sm text-navy-950 hover:bg-slate-50 transition-colors"
          >
            <span>{faq.q}</span>
            {openIndex === idx ? (
              <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0 ml-2" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0 ml-2" />
            )}
          </button>
          {openIndex === idx && (
            <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-slate-50/60 pb-16">
      {/* Page Heading */}
      <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-navy-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-500/20 border border-emerald-400/30 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Member Support & Assistance
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Customer Care & Branch Contacts
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have a question about interest rates, doorstep collections, or loan sanctions? Reach out to our dedicated team.
          </p>
        </div>
      </div>

      {/* Three Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Call Us */}
          <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 text-center flex flex-col items-center border-t-4 border-amber-500 hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-4 text-amber-800">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Direct Society Helpline
            </h3>
            <p className="text-navy-950 font-extrabold text-xl mb-1">0832-2274111</p>
            <p className="text-xs text-slate-500">Mon – Sat: 8:30 AM to 4:30 PM</p>
          </div>

          {/* Email Support */}
          <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 text-center flex flex-col items-center border-t-4 border-emerald-500 hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4 text-emerald-700">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Email Helpdesk
            </h3>
            <p className="text-navy-950 font-bold text-sm mb-1">contact@parrabank.com</p>
            <p className="text-xs text-slate-500">Official co-operative inquiries</p>
          </div>

          {/* Registered Office */}
          <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 text-center flex flex-col items-center border-t-4 border-navy-700 hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-2xl bg-navy-50 border border-navy-200 flex items-center justify-center mb-4 text-navy-900">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Parra Main Office
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
              Main Co-operative Junction, Parra, Bardez, Goa - 403510
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Grid: Map & Details vs Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Location & FAQ */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                Headquarters Presence
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mb-3 tracking-tight">
                Visit Parra Head Office
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Located right at Parra junction with safe deposit locker facilities, cash counters, and customer advisor desks.
              </p>

              <div className="w-full h-72 rounded-3xl overflow-hidden shadow-md border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123019.57864436573!2d73.74311009999999!3d15.530379899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1536b44f0b5%3A0xe541e204df7bc647!2sParra%2C%20Goa!5e0!3m2!1sen!2sin!4v1714123456789!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Google Maps Location of Parra Main Branch"
                />
              </div>
            </div>

            {/* Statutory Compliance & Grievance Redressal Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Statutory Grievance Redressal
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                In compliance with the Registrar of Co-operative Societies, any unresolved dispute may be escalated to the Society Grievance Officer:
              </p>
              <div className="text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                <div><strong>Officer:</strong> Smt. Maria Fernandes (General Secretary)</div>
                <div><strong>Office:</strong> Parra Main Branch, Bardez, Goa</div>
                <div><strong>Direct Contact:</strong> grievance@parrabank.com</div>
              </div>
            </div>

            {/* Customer FAQs */}
            <div>
              <h3 className="text-lg font-bold text-navy-950 mb-3 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-600" /> Frequently Asked Questions
              </h3>
              <FAQAccordion />
            </div>
          </div>

          {/* Right Column: Callback Request Form */}
          <div className="lg:col-span-6">
            <Suspense
              fallback={
                <div className="p-12 text-center text-slate-400 bg-white rounded-3xl border border-slate-200">
                  Loading form...
                </div>
              }
            >
              <ContactFormContent />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
