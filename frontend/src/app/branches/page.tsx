import { branches } from '@/lib/data';

export default function Branches() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-burgundy mb-4">Our Branch Network</h1>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Find a branch near you to access our comprehensive range of banking services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {branches.map((branch) => (
            <div key={branch.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
              <div className="p-6 flex-grow">
                <h2 className="text-2xl font-bold text-burgundy mb-4">{branch.name}</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-orange mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700">{branch.address}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-orange mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700">{branch.phone}</span>
                  </div>
                </div>
              </div>
              <div className="w-full h-56 sm:h-64 bg-gray-200">
                <iframe
                  src={branch.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title={`${branch.name} Location`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-gray-500 mt-12 md:mt-16">
          <p>Note: Addresses, phone numbers, and locations are placeholder data for demonstration purposes.</p>
        </div>
      </div>
    </main>
  );
}
