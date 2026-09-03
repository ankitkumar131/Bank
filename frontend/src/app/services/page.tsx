import { depositSchemes, loanSchemes, otherServices } from '@/lib/data';
import ServiceCard from '@/components/ServiceCard';

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-burgundy py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Our Banking & Financial Services</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to meet the needs of our members and community.
          </p>
        </div>
      </section>

      {/* Deposit Schemes Section */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Deposit Schemes</h2>
            <div className="w-24 h-1 bg-golden mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {depositSchemes.map(service => (
              <ServiceCard key={service.id} service={service} accent="deposit" />
            ))}
          </div>
        </div>
      </section>

      {/* Loan Schemes Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Loan Schemes</h2>
            <div className="w-24 h-1 bg-orange mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {loanSchemes.map(service => (
              <ServiceCard key={service.id} service={service} accent="loan" />
            ))}
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Other Services</h2>
            <div className="w-24 h-1 bg-burgundy mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {otherServices.map(service => (
              <ServiceCard key={service.id} service={service} accent="other" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
