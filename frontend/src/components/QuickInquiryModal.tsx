'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Phone, Building2, User, HelpCircle, ArrowRight } from 'lucide-react';
import { serviceOptions, branches } from '@/lib/data';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function QuickInquiryModal({
  isOpen,
  onClose,
  initialService = '',
}: QuickInquiryModalProps) {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedService, setSelectedService] = useState(initialService);
  const [preferredBranch, setPreferredBranch] = useState('Parra Main Office');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [error, setError] = useState('');

  // Synchronize initial service if passed
  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!mobileNumber.trim() || mobileNumber.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setError('');
    const randomTicket = `PVC-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(randomTicket);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFullName('');
    setMobileNumber('');
    setNotes('');
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy-950/75 backdrop-blur-sm transition-opacity"
        onClick={handleResetAndClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200 z-10 animate-slide-up">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-950 p-5 text-white flex items-center justify-between border-b border-navy-700">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold tracking-tight">Customer Service Desk</h3>
              <p className="text-xs text-slate-300">Quick Inquiry & Callback Request</p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="rounded-full p-1.5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-4 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border-4 border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-navy-50 text-navy-800 text-xs font-mono font-bold tracking-wider mb-2">
                Reference ID: {ticketId}
              </span>
              <h4 className="text-xl font-bold text-navy-950 mb-2">Inquiry Successfully Registered</h4>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto mb-6">
                Thank you, <strong className="text-slate-900">{fullName}</strong>. An officer from our{' '}
                <strong className="text-slate-900">{preferredBranch}</strong> branch will contact you on{' '}
                <strong className="text-slate-900">{mobileNumber}</strong> within 2 business hours to assist with your request.
              </p>

              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 text-left mb-6 flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Customer Safety Notice:</strong> Society representatives will never ask for your secret PIN, password, or SMS OTP over the phone.
                </span>
              </div>

              <button
                onClick={handleResetAndClose}
                className="w-full py-3 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl transition-colors shadow-md"
              >
                Close & Return to Browsing
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-500 leading-relaxed">
                Fill in your contact details below. Our branch manager or customer advisor will call you to explain scheme rates, terms, and guide your application.
              </p>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs font-medium">
                  {error}
                </div>
              )}

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Interested Banking Scheme *
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-navy-600 focus:ring-2 focus:ring-navy-600/20 outline-none"
                  required
                >
                  <option value="">-- Select a Scheme or Inquiry Type --</option>
                  {serviceOptions.map((group) => (
                    <optgroup key={group.group} label={group.group}>
                      {group.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                  <option value="general-inquiry">General Membership & Locker Inquiry</option>
                </select>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Maria Fernandes"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-navy-600 focus:ring-2 focus:ring-navy-600/20 outline-none"
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Mobile Number (For Callback) *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="10-digit mobile number"
                    maxLength={14}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-navy-600 focus:ring-2 focus:ring-navy-600/20 outline-none"
                  />
                </div>
              </div>

              {/* Preferred Branch */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Nearest / Preferred Branch *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <select
                    value={preferredBranch}
                    onChange={(e) => setPreferredBranch(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white pl-10 pr-3.5 py-2.5 text-sm text-slate-900 focus:border-navy-600 focus:ring-2 focus:ring-navy-600/20 outline-none"
                  >
                    {branches.map((b) => (
                      <option key={b.id} value={b.name}>
                        {b.name} ({b.type})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Expected Deposit / Loan Amount (Optional)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. ₹50,000 for 1 year or Gold Loan query"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-navy-600 focus:ring-2 focus:ring-navy-600/20 outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Submit Inquiry Request <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                🔒 Your personal information is encrypted and strictly maintained under society fiduciaries.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
