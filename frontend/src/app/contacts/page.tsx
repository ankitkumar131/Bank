'use client';

import React, { useState, useEffect, Suspense, FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { serviceOptions, branches } from '@/lib/data';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Send, 
  Sparkles,
  Building2,
  FileText
} from 'lucide-react';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service');
  const branchParam = searchParams.get('branch');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceRequest: '',
    branch: 'Parra Main Office',
    notes: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    serviceRequest: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, serviceRequest: serviceParam }));
      setTimeout(() => {
        const section = document.getElementById('service-request-form');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, [serviceParam]);

  useEffect(() => {
    if (branchParam) {
      setFormData((prev) => ({ ...prev, branch: branchParam }));
    }
  }, [branchParam]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = { name: '', phone: '', serviceRequest: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full legal name';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a valid contact phone number';
      isValid = false;
    }

    if (!formData.serviceRequest) {
      newErrors.serviceRequest = 'Please select a banking scheme or service';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1200);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceRequest: '',
      branch: 'Parra Main Office',
      notes: '',
    });
  };

  return (
    <div 
      className="bg-surface-container-lowest rounded-2xl p-7 sm:p-10 shadow-editorial-float"
      id="service-request-form"
    >
      {isSuccess ? (
        <div className="py-8 text-center space-y-5 animate-fade-in">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <span className="archival-label">Official Requisition Logged</span>
            <h3 className="font-serif font-bold text-2xl text-charcoal-900">
              Receipt Acknowledgment Issued
            </h3>
          </div>

          <div className="p-5 rounded-xl bg-surface-container-low text-xs text-charcoal-700 font-sans max-w-lg mx-auto text-left space-y-2">
            <div><strong>Applicant Name:</strong> {formData.name}</div>
            <div><strong>Contact Telephony:</strong> {formData.phone}</div>
            <div><strong>Selected Scheme:</strong> {formData.serviceRequest}</div>
            <div><strong>Preferred Counter:</strong> {formData.branch}</div>
            {formData.notes && <div><strong>Applicant Note:</strong> {formData.notes}</div>}
          </div>

          <p className="text-xs text-charcoal-600 max-w-md mx-auto font-sans leading-relaxed">
            Your inquiry has been allocated a temporary reference ticket. An authorized society representative from the {formData.branch} will contact you on the next working banking day.
          </p>

          <button
            type="button"
            onClick={handleReset}
            className="btn-editorial-secondary text-xs mt-4"
          >
            Submit Another Service Ingestion
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="pb-2 border-b border-black/[0.04]">
            <span className="archival-label block mb-1">Direct Member Registry</span>
            <h2 className="font-serif font-bold text-2xl text-charcoal-900">
              Request a Banking Service or Consultation
            </h2>
            <p className="text-xs text-charcoal-500 font-sans mt-1">
              Select your required deposit, loan, or utility facility. Our branch manager will prepare the required statutory paperwork.
            </p>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label 
                htmlFor="name" 
                className="block text-xs font-label font-bold text-charcoal-700 uppercase tracking-wider mb-1.5"
              >
                Full Legal Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Maria Rosario Fernandes"
                className={`editorial-input ${errors.name ? 'border-red-500 ring-1 ring-red-500' : ''}`}
              />
              {errors.name && (
                <p className="mt-1 text-[11px] text-red-600 font-sans">{errors.name}</p>
              )}
            </div>

            <div>
              <label 
                htmlFor="phone" 
                className="block text-xs font-label font-bold text-charcoal-700 uppercase tracking-wider mb-1.5"
              >
                Contact Mobile Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98220 12345"
                className={`editorial-input ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : ''}`}
              />
              {errors.phone && (
                <p className="mt-1 text-[11px] text-red-600 font-sans">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Email & Branch */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label 
                htmlFor="email" 
                className="block text-xs font-label font-bold text-charcoal-700 uppercase tracking-wider mb-1.5"
              >
                Email Address (Optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. member@parrabank.org"
                className="editorial-input"
              />
            </div>

            <div>
              <label 
                htmlFor="branch" 
                className="block text-xs font-label font-bold text-charcoal-700 uppercase tracking-wider mb-1.5"
              >
                Preferred Branch Location
              </label>
              <select
                id="branch"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="editorial-input"
              >
                {branches.map((b) => (
                  <option key={b.id} value={b.name}>
                    {b.name} ({b.type})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Service Dropdown */}
          <div>
            <label 
              htmlFor="serviceRequest" 
              className="block text-xs font-label font-bold text-charcoal-700 uppercase tracking-wider mb-1.5"
            >
              Select Service / Scheme *
            </label>
            <select
              id="serviceRequest"
              name="serviceRequest"
              value={formData.serviceRequest}
              onChange={handleChange}
              className={`editorial-input ${errors.serviceRequest ? 'border-red-500 ring-1 ring-red-500' : ''}`}
            >
              <option value="">Choose a scheme or service...</option>
              {serviceOptions.map((group) => (
                <optgroup key={group.group} label={group.group}>
                  {group.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            {errors.serviceRequest && (
              <p className="mt-1 text-[11px] text-red-600 font-sans">{errors.serviceRequest}</p>
            )}
          </div>

          {/* Notes */}
          <div>
            <label 
              htmlFor="notes" 
              className="block text-xs font-label font-bold text-charcoal-700 uppercase tracking-wider mb-1.5"
            >
              Specific Requirements or Inquiries (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              placeholder="Please provide details regarding deposit amount, preferred loan tenure, or pigmy pickup location..."
              className="editorial-input resize-none"
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-editorial-primary flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>Registering Official Request...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Official Service Request</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[11px] text-charcoal-500 font-sans">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Fiduciary records are held confidential under the Goa Co-operative Societies Rules.</span>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-surface py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-12 lg:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-50 text-tertiary text-xs font-label font-bold tracking-wider uppercase">
            <Building2 className="w-3.5 h-3.5 text-tertiary" />
            <span>Member Inquiries & Secretariat Desk</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 leading-tight">
            Contact Secretariat & Service Desks
          </h1>

          <p className="text-base sm:text-lg text-charcoal-600 font-sans leading-relaxed">
            Reach out directly to our central head office at Parra or submit an official scheme requisition form below for swift counter verification.
          </p>
        </div>

        {/* 3 Core Contact Cards (Tonal Layering) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="bg-surface-container-low p-7 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
              <Phone className="w-5 h-5" />
            </div>
            <span className="archival-label block">Telephone Enquiries</span>
            <h3 className="font-serif font-bold text-xl text-charcoal-900">
              Direct Helpline
            </h3>
            <p className="text-sm font-semibold text-primary font-sans">
              +91 98765 43210
            </p>
            <p className="text-xs text-charcoal-500 font-sans">
              Mon–Sat: 8:30 AM to 4:30 PM (All branches)
            </p>
          </div>

          <div className="bg-surface-container-low p-7 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-tertiary">
              <Mail className="w-5 h-5" />
            </div>
            <span className="archival-label block">Official Secretariat</span>
            <h3 className="font-serif font-bold text-xl text-charcoal-900">
              Electronic Dispatch
            </h3>
            <p className="text-sm font-semibold text-charcoal-900 font-sans">
              secretary@parraverlacancapacs.org
            </p>
            <p className="text-xs text-charcoal-500 font-sans">
              Statutory inquiries, audit transcripts & petitions
            </p>
          </div>

          <div className="bg-surface-container-low p-7 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-emerald-700">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="archival-label block">Headquarters</span>
            <h3 className="font-serif font-bold text-xl text-charcoal-900">
              Society Bhavan
            </h3>
            <p className="text-xs text-charcoal-600 font-sans leading-relaxed">
              Near St. Anne&apos;s Church, Parra, Bardez, Goa 403510
            </p>
            <p className="text-xs text-charcoal-500 font-sans">
              Landmark: Parra Village Main Triangle
            </p>
          </div>

        </div>

        {/* Form and Location Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form with Suspense */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-12 text-center text-charcoal-500 bg-surface-container-low rounded-2xl font-sans">Loading Requisition Desk...</div>}>
              <ContactFormContent />
            </Suspense>
          </div>

          {/* Right Column: Head Office Map & Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface-container-low rounded-2xl p-7 space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="w-5 h-5" />
                <span className="archival-label">Head Office Location</span>
              </div>

              <h3 className="font-serif font-bold text-2xl text-charcoal-900">
                Society Bhavan, Parra
              </h3>

              <p className="text-xs sm:text-sm text-charcoal-600 font-sans leading-relaxed">
                Housing the central Secretariat, Board of Directors Conference Chamber, Strongroom Locker Vaults, and Cash Counters.
              </p>

              <div className="w-full h-72 rounded-xl overflow-hidden bg-surface-container relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.5!2d73.815!3d15.565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDMzJzU0LjAiTiA3M8KwNDgnNTQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                  title="Parra Verla Canca Head Office Location"
                />
              </div>

              <div className="pt-2 text-xs text-charcoal-500 font-sans space-y-1">
                <div><strong>Central Counters:</strong> Monday – Saturday (8:30 AM – 4:30 PM)</div>
                <div><strong>Locker Vaults:</strong> 9:30 AM – 3:30 PM (Token authorization required)</div>
              </div>
            </div>

            {/* Grievance & Arbitration Advisory */}
            <div className="p-6 rounded-2xl bg-surface-container text-xs text-charcoal-700 font-sans space-y-2">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-tertiary" />
                <strong className="font-label uppercase tracking-wider text-charcoal-900 font-semibold">
                  Member Redressal Advisory
                </strong>
              </div>
              <p className="leading-relaxed text-charcoal-600">
                In compliance with the Registrar of Co-operative Societies, all member petitions receive formal inquiry numbers and written response records within 14 statutory banking working days.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
