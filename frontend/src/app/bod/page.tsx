import { directors } from '@/lib/data';
import Image from 'next/image';

export default function BoardOfDirectors() {
  const topRow = directors.slice(0, 3);
  const otherRows = directors.slice(3);

  return (
    <main className="min-h-screen bg-warm-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-burgundy mb-2">Our Board of Directors</h1>
          <p className="text-xl text-charcoal">2026 – 2031</p>
        </div>

        <div className="w-full max-w-5xl mx-auto mb-16 rounded-xl overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000" 
            alt="Board of Directors Group Meeting"
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Top Row - Chairman, Vice Chairman, Secretary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {topRow.map((director) => (
              <DirectorCard key={director.id} director={director} />
            ))}
          </div>

          {/* Remaining Directors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {otherRows.map((director) => (
              <DirectorCard key={director.id} director={director} />
            ))}
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-12">
          <p>Note: Names and photographs shown are placeholder data for demonstration purposes.</p>
        </div>
      </div>
    </main>
  );
}

function DirectorCard({ director }: { director: any }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col items-center p-6 border border-gray-100">
      <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-burgundy/10">
        <img 
          src={director.imageUrl || "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"} 
          alt={director.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-charcoal text-center mb-2">{director.name}</h3>
      <p className="text-burgundy font-medium text-center">{director.designation}</p>
    </div>
  );
}
