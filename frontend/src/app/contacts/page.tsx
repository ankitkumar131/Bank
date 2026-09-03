'use client';

import React, { useState, useEffect, Suspense, FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceRequest: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    serviceRequest: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (serviceParam) {
      setFormData(prev => ({ ...prev, serviceRequest: serviceParam }));
      setTimeout(() => {
        const section = document.getElementById('service-request');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [serviceParam]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    let isValid = true;
    const newErrors = { name: '', email: '', serviceRequest: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.serviceRequest) {
      newErrors.serviceRequest = 'Please select a service';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', serviceRequest: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100" id="service-request">
      <h2 className="text-3xl font-heading font-bold text-burgundy mb-2 text-center">Request for a Service</h2>
      <p className="text-charcoal-500 text-center mb-8">Fill out the form below and our team will get back to you shortly.</p>
      
      {isSuccess && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 border border-green-200 rounded-lg text-center font-medium">
          ✅ Thank you for your request. Our team will contact you shortly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-charcoal-800 mb-2">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3.5 border ${errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-burgundy transition-all`}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1"><span>⚠</span> {errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-charcoal-800 mb-2">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3.5 border ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-burgundy transition-all`}
            placeholder="Enter your email address"
          />
          {errors.email && <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1"><span>⚠</span> {errors.email}</p>}
        </div>

        <div>
          <label htmlFor="serviceRequest" className="block text-sm font-semibold text-charcoal-800 mb-2">Service Request *</label>
          <select
            id="serviceRequest"
            name="serviceRequest"
            value={formData.serviceRequest}
            onChange={handleChange}
            className={`w-full p-3.5 border ${errors.serviceRequest ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-burgundy bg-white transition-all`}
          >
            <option value="">Select a service...</option>
            <optgroup label="Deposit Schemes">
              <option value="saving-deposit">Saving Deposit</option>
              <option value="recurring-deposit">Recurring Deposit</option>
              <option value="current-deposit">Current Deposit</option>
              <option value="fixed-deposit">Fixed Deposit</option>
              <option value="pigmy-deposit">Pigmy Deposit</option>
              <option value="monthly-quarterly-interest">Monthly &amp; Quarterly Interest Scheme</option>
            </optgroup>
            <optgroup label="Loan Schemes">
              <option value="personal-business-loan">Personal / Business Loan</option>
              <option value="2-wheeler-4-wheeler-loan">2 Wheeler / 4 Wheeler Loan</option>
              <option value="gold-loan">Gold Loan</option>
              <option value="salary-deduction-loan">Salary Deduction Loan for Government Employees</option>
              <option value="house-loan">House Loan</option>
            </optgroup>
            <optgroup label="Services">
              <option value="electricity-water-bill">Electricity &amp; Water Bill Payment</option>
              <option value="neft-rtgs">NEFT / RTGS Services</option>
              <option value="ecs-nach">ECS / NACH Services</option>
            </optgroup>
          </select>
          {errors.serviceRequest && <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1"><span>⚠</span> {errors.serviceRequest}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-burgundy hover:bg-burgundy-800 text-white font-semibold py-3.5 px-6 rounded-lg transition-all duration-200 flex items-center justify-center disabled:opacity-70 shadow-md hover:shadow-lg text-lg"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            'Submit Request'
          )}
        </button>
      </form>
    </div>
  );
}

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-warm-50">
      {/* Page Heading */}
      <div className="bg-burgundy py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-burgundy-200 max-w-2xl mx-auto">
            We are here to assist you. Reach out to us via phone, email, or visit our head office for any inquiries or support.
          </p>
        </div>
      </div>

      {/* Three Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Call Us */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col items-center border-t-4 border-orange hover:shadow-xl transition-shadow duration-300">
            <div className="bg-burgundy-50 p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-burgundy">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.273-3.973-6.87-6.87l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-charcoal-900 mb-2">CALL US</h3>
            <p className="text-burgundy font-semibold text-lg">+91 98765 43210</p>
          </div>

          {/* Work With Us */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col items-center border-t-4 border-orange hover:shadow-xl transition-shadow duration-300">
            <div className="bg-burgundy-50 p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-burgundy">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-charcoal-900 mb-2">WORK WITH US</h3>
            <p className="text-burgundy font-semibold">careers@parraverlacanca.co.in</p>
          </div>

          {/* Head Office */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col items-center border-t-4 border-orange hover:shadow-xl transition-shadow duration-300">
            <div className="bg-burgundy-50 p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-burgundy">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-charcoal-900 mb-2">HEAD OFFICE</h3>
            <p className="text-sm text-charcoal-600 leading-relaxed">
              Parra Verla Canca Multipurpose Primary Agriculture Co-operative Society Ltd.,<br/>
              Main Cooperative Road, Parra Verlacanca,<br/>
              India - 000000
            </p>
          </div>
        </div>
      </div>

      {/* Map & Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-heading font-bold text-charcoal-900 mb-2">Head Office Location</h2>
            <div className="w-12 h-1 bg-burgundy mb-6"></div>
            <p className="text-charcoal-600 mb-6 leading-relaxed">
              <strong>Address:</strong><br/>
              Parra Verla Canca Multipurpose Primary Agriculture Co-operative Society Ltd.,<br/>
              Main Cooperative Road, Parra Verlacanca,<br/>
              India - 000000
            </p>
            <div className="w-full h-80 rounded-xl overflow-hidden shadow-md flex-grow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123019.57864436573!2d73.74311009999999!3d15.530379899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1536b44f0b5%3A0xe541e204df7bc647!2sParra%2C%20Goa!5e0!3m2!1sen!2sin!4v1714123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location of Parra Verlacanca"
              ></iframe>
            </div>
          </div>

          {/* Form Section */}
          <div>
            <Suspense fallback={<div className="p-8 text-center text-charcoal-400">Loading form...</div>}>
              <ContactFormContent />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
