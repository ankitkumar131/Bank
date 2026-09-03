'use client';

import { useState, useEffect } from 'react';
import { activities } from '@/lib/data';

export default function SocialAchievements() {
  const [selectedActivity, setSelectedActivity] = useState<any | null>(null);

  useEffect(() => {
    if (selectedActivity) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedActivity]);

  return (
    <main className="min-h-screen bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-burgundy mb-4">Social Achievements & Activities</h1>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Committed to community development and social welfare through various initiatives and programs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {activities.map((activity) => (
            <div 
              key={activity.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square lg:col-span-1 md:col-span-1"
              onClick={() => setSelectedActivity(activity)}
            >
              <img 
                src={activity.image || "/images/placeholder.svg"} 
                alt={activity.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.svg'; }}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <h3 className="text-white text-center font-bold text-lg">{activity.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedActivity(null)}
          ></div>
          
          <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row z-10">
            <button 
              className="absolute top-4 right-4 z-20 bg-black/30 hover:bg-black/50 backdrop-blur-md rounded-full p-2 text-white transition-colors"
              onClick={() => setSelectedActivity(null)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="w-full md:w-1/2 h-64 md:h-auto">
              <img 
                src={selectedActivity.image || "/images/placeholder.svg"} 
                alt={selectedActivity.title}
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.svg'; }}
              />
            </div>
            
            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 overflow-y-auto">
              <div className="text-orange font-semibold mb-2">{selectedActivity.date || 'Recent'}</div>
              <h2 className="text-3xl font-bold text-burgundy mb-6">{selectedActivity.title}</h2>
              <div className="prose prose-lg text-gray-700">
                <p>{selectedActivity.description || 'This activity represents our commitment to social welfare and community engagement. Our members actively participate in various initiatives designed to uplift the society and foster a spirit of cooperation.'}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
