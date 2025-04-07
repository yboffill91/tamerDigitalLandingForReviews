import React from 'react';

export default function Companies() {
  return (
    <section className="relative w-full pb-8 md:pb-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-blue-500 ring-1 ring-inset ring-blue-500/30 gap-x-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
          Multiple Locations Services
        </div>
        
        <h2 className="text-2xl font-bold text-white mt-6 mb-6">
          Serving Across All United States
        </h2>
        
        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-4 text-gray-400 text-sm md:text-base">
          <span>New York City</span>
          <span className="hidden md:inline">•</span>
          <span>Los Angeles</span>
          <span className="hidden md:inline">•</span>
          <span>Chicago</span>
          <span className="hidden md:inline">•</span>
          <span>Houston</span>
          <span className="hidden md:inline">•</span>
          <a href="#" className="text-blue-500 border-b border-blue-500 hover:text-blue-400 hover:border-blue-400 transition-colors">Miami</a>
          <span className="hidden md:inline">•</span>
          <span>Dallas</span>
          <span className="hidden md:inline">•</span>
          <span>Atlanta</span>
          <span className="hidden md:inline">•</span>
          <span>San Francisco</span>
          <span className="hidden md:inline">•</span>
          <span>Las Vegas</span>
        </div>
        
        <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-4 text-gray-400 text-sm md:text-base">
          <span>Boston</span>
          <span className="hidden md:inline">•</span>
          <span>Phoenix</span>
          <span className="hidden md:inline">•</span>
          <span>Denver</span>
          <span className="hidden md:inline">•</span>
          <span>San Diego</span>
          <span className="hidden md:inline">•</span>
          <span>Austin</span>
          <span className="hidden md:inline">•</span>
          <span>Nashville</span>
          <span className="hidden md:inline">•</span>
          <span>Portland</span>
          <span className="hidden md:inline">•</span>
          <span>Orlando</span>
          <span className="hidden md:inline">•</span>
          <span>Washington DC</span>
        </div>
      </div>
    </section>
  );
}