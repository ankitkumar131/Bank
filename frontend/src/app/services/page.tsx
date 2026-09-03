import { depositSchemes, loanSchemes, otherServices } from '@/lib/data';
import Link from 'next/link';

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-burgundy py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Banking & Financial Services</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to meet the needs of our members and community.
          </p>
        </div>
      </section>

      {/* Deposit Schemes Section */}
      <section className="py-20 bg-warm-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Deposit Schemes</h2>
            <div className="w-24 h-1 bg-golden mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {depositSchemes.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Loan Schemes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Loan Schemes</h2>
            <div className="w-24 h-1 bg-orange mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {loanSchemes.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-20 bg-warm-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Other Services</h2>
            <div className="w-24 h-1 bg-burgundy mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {otherServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ service }: { service: any }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col h-full border border-gray-100">
      <div className="w-14 h-14 bg-warm-50 rounded-lg flex items-center justify-center text-burgundy mb-6">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-charcoal mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-8 flex-grow">{service.description}</p>
      
      <Link 
        href={`/contacts?service=${service.id}`}
        className="inline-flex items-center text-burgundy font-medium hover:text-orange transition-colors mt-auto"
      >
        Request Service
        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}
