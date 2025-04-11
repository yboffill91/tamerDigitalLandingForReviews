'use client';

import React, { useState, useEffect } from 'react';
import { Search, Mic, Camera } from 'lucide-react';
import { searchResults } from '@/features/landing/utils';

export default function GoogleCard() {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentSearch, setCurrentSearch] = useState(
    'digital marketing agency'
  );
  const [isDeleting, setIsDeleting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const searchKeys = Object.keys(searchResults);

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(prev => currentSearch.slice(0, prev.length + 1));

        if (text === currentSearch) {
          setTimeout(() => {
            setShowResults(true);
            setOpacity(1);
            setIsLoading(false);
          }, 500);

          setTimeout(() => {
            setIsDeleting(true);
            setShowResults(false);
            setOpacity(0);
            setIsLoading(true);
          }, 3500);
        }
      } else {
        setText(prev => prev.slice(0, -1));

        if (text === '') {
          setIsDeleting(false);
          setCurrentSearch(prevSearch => {
            const currentIndex = searchKeys.indexOf(prevSearch);
            return searchKeys[(currentIndex + 1) % searchKeys.length];
          });
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentSearch]);

  const LoadingBlock = () => (
    <div className="space-y-3">
      <div className="h-2 bg-foreground/50 rounded-full w-3/4 animate-pulse" />
      <div className="h-2 bg-foreground/50 rounded-full w-1/2 animate-pulse" />
      <div className="h-2 bg-foreground/50 rounded-full w-2/3 animate-pulse" />
      <div className="h-2 bg-foreground/50 rounded-full w-3/5 animate-pulse" />
    </div>
  );

  return (
    <div className="w-full h-full relative overflow-hidden bg-card/90 backdrop-blur-sm border border-foreground/20/10 rounded-lg group hover:border-primary/20 transition-all duration-300">
      <div className="p-6 flex flex-col h-full">
        <div>
          <div className="text-xl text-foreground/40 text-center mb-4">
            Google
          </div>
          <div className="mx-auto max-w-[300px] w-full">
            <div className="flex items-center bg-ring/40 rounded-lg px-4 py-2">
              <input
                type="text"
                value={text}
                readOnly
                className="w-full bg-transparent border-none focus:outline-none text-foreground/90 text-xs py-1"
                placeholder="Search Google..."
              />
              <div className="flex items-center gap-3 shrink-0">
                <Mic
                  size={16}
                  className=" text-foreground"
                  style={{ fill: 'url(#gradient)' }}
                />
                <Camera size={16} style={{ fill: 'url(#gradient)' }} />
                <Search
                  size={16}
                  className=" text-foreground"
                  style={{ fill: 'url(#gradient)' }}
                />
                <svg width="0" height="0">
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#EFA648" />
                      <stop offset="100%" stopColor="#934BCB" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex-1">
          <div className="mt-2 max-w-[250px] mx-auto">
            {isLoading ? (
              <div className="space-y-2">
                <LoadingBlock />
              </div>
            ) : (
              showResults && (
                <div
                  className="space-y-2"
                  style={{
                    opacity: opacity,
                    transition: 'opacity 0.5s ease-in-out',
                  }}
                >
                  <div
                    className="text-xs text-foreground/40 transform transition-all duration-500"
                    style={{
                      transform:
                        opacity === 1 ? 'translateY(0)' : 'translateY(10px)',
                    }}
                  >
                    About {searchResults[currentSearch][0].results} results (
                    {searchResults[currentSearch][0].time}s)
                  </div>
                  <div className="space-y-2">
                    {searchResults[currentSearch]
                      .slice(0, 1)
                      .map((result, index) => (
                        <div
                          key={index}
                          className="transform transition-all duration-700 opacity-0"
                          style={{
                            transform:
                              opacity === 1
                                ? 'translateY(0)'
                                : 'translateY(15px)',
                            opacity: opacity,
                            transitionDelay: `${index * 200}ms`,
                          }}
                        >
                          <div className="text-foreground/90 text-sm hover:underline cursor-pointer">
                            {result.title}
                          </div>
                          <div className="text-foreground/40 text-xs mt-1">
                            {result.description}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
