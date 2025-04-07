'use client';

import React, { useState, useEffect } from 'react';
import { ArrowDown, Search, TrendingUp } from 'lucide-react';

export const RankingCard = () => {
  const [isAfter, setIsAfter] = useState(false);

  useEffect(() => {
    const toggleState = () => {
      setIsAfter(true);
      setTimeout(() => {
        setIsAfter(false);
      }, 5000); // Show green state for 5 seconds
    };

    // Initial toggle
    toggleState();

    // Set up interval for subsequent toggles
    const interval = setInterval(toggleState, 8000); // Total cycle is 8 seconds

    return () => clearInterval(interval);
  }, []);

  const rankings = [
    { position: 1, name: 'Business A' },
    { position: 2, name: 'Business B' },
    { position: 3, name: 'Business C' },
  ];

  return (
    <div
      className={`w-[220px] relative overflow-hidden rounded-lg border ${
        isAfter
          ? 'bg-neutral-900 border-green-500/20'
          : 'bg-neutral-900/95 border-red-500/20'
      }`}
    >
      {/* Header */}
      <div className='p-2 border-b border-neutral-800'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Search
              className={`w-3 h-3 ${
                isAfter ? 'text-green-500' : 'text-red-500'
              }`}
            />
            <span className='text-[10px] font-medium text-white leading-none'>
              Google Map Ranking
            </span>
          </div>
          <div
            className={`px-1.5 py-0.5 rounded-full text-[8px] font-medium ${
              isAfter
                ? 'bg-green-500/10 text-green-400'
                : 'bg-red-500/10 text-red-400'
            } leading-none flex items-center`}
          >
            {isAfter ? 'Top Position' : 'Page 3'}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className='p-2'>
        {/* Business Name */}
        <div className='flex items-center justify-between mb-2'>
          <h3 className='text-[10px] font-semibold text-white leading-none'>
            Any Local Search
          </h3>
          <TrendingUp
            className={`w-3 h-3 ${isAfter ? 'text-green-400' : 'text-red-400'}`}
          />
        </div>

        {/* Ranking Visualization */}
        <div className='relative h-28'>
          {/* Static Ranking Bars */}
          <div className='space-y-1.5 relative'>
            {rankings.map((item, i) => (
              <div
                key={i}
                className={`h-6 rounded-md flex items-center ${
                  isAfter && i === 0
                    ? 'bg-green-500/20 border border-green-500/50'
                    : 'bg-neutral-800'
                }`}
              >
                {/* Ranking Number */}
                <div className='w-6 flex items-center justify-center'>
                  <span className='text-[8px] text-neutral-500 font-medium leading-none'>
                    #{item.position}
                  </span>
                </div>

                <div className='flex-1 px-1.5 flex items-center h-full'>
                  {isAfter && i === 0 ? (
                    <span className='text-[8px] text-green-400 font-medium leading-none'>
                      Your Business
                    </span>
                  ) : (
                    <span className='text-[8px] text-neutral-400 leading-none'>
                      {item.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Animated Your Business Position */}
          <div
            className={`absolute w-full h-6 rounded-md ${
              isAfter
                ? 'bg-green-500/20 border border-green-500/50'
                : 'bg-red-500/20 border border-red-500/50'
            }
                       transition-all duration-1000 flex items-center ${
                         isAfter ? 'top-0' : 'top-[5.6rem]'
                       }`}
          >
            <div className='w-6 flex items-center justify-center'>
              <span
                className={`text-[8px] font-medium leading-none ${
                  isAfter ? 'text-green-500' : 'text-red-500'
                }`}
              >
                #{isAfter ? '1' : '30'}
              </span>
            </div>
            {!isAfter && (
              <div className='flex-1 px-1.5 flex items-center h-full'>
                <span className='text-[8px] text-red-400 font-medium leading-none'>
                  Your Business
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Status */}
        <div className='mt-2 flex justify-between items-center'>
          <div
            className={`flex items-center gap-1 px-1.5 py-0.5 rounded-full ${
              isAfter
                ? 'bg-green-500/10 text-green-400'
                : 'bg-red-500/10 text-red-400'
            } leading-none`}
          >
            {isAfter ? (
              <>
                <ArrowDown className='w-2.5 h-2.5 transform rotate-180' />
                <span className='text-[8px] font-medium leading-none'>
                  1st Position
                </span>
              </>
            ) : (
              <>
                <ArrowDown className='w-2.5 h-2.5' />
                <span className='text-[8px] font-medium leading-none'>
                  Below Page 3
                </span>
              </>
            )}
          </div>
          <span className='text-[8px] text-neutral-500 leading-none'>
            {isAfter ? 'After Optimization' : 'Before Optimization'}
          </span>
        </div>
      </div>
    </div>
  );
};
