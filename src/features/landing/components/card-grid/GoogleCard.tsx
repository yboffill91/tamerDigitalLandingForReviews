'use client';

import { useState, useEffect } from 'react';
import { Search, Mic, Camera, Link2 } from 'lucide-react';
import { searchResults } from '@/features/landing/utils';

const CircularProgress = () => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='flex flex-col items-center text-center'>
        <div className='flex items-center gap-2 mb-1'>
          <span className='text-lg font-semibold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text'>
            81%
          </span>
          <span className='text-base font-medium text-foreground'>
            Purchase Decisions Start Online
          </span>
        </div>
        <span className='text-sm text-foreground text-center'>
          Your website is your 24/7 salesperson. Are you visible when they
          search?
        </span>
      </div>
    </div>
  );
};

export const GoogleCard = () => {
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
        setText((prev) => currentSearch.slice(0, prev.length + 1));

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
        setText((prev) => prev.slice(0, -1));

        if (text === '') {
          setIsDeleting(false);
          setCurrentSearch((prevSearch) => {
            const currentIndex = searchKeys.indexOf(prevSearch);
            return searchKeys[(currentIndex + 1) % searchKeys.length];
          });
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentSearch]);

  const LoadingBlock = () => (
    <div className='space-y-2'>
      <div className='h-2 bg-foreground/50 rounded-lg w-3/4 animate-pulse' />
      <div className='h-2 bg-foreground/50 rounded-lg w-1/2 animate-pulse' />
      <div className='h-2 bg-foreground/50 rounded-lg w-2/3 animate-pulse' />
      <div className='h-2 bg-foreground/50 rounded-lg w-3/5 animate-pulse' />
    </div>
  );

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div
        className='w-80 h-[340px] relative overflow-hidden bg-card border-ring/10 border rounded-lg
        '
      >
        <div className='p-3 h-full flex flex-col'>
          <div>
            <div className='mx-auto w-[280px]'>
              <div className='flex items-center bg-background-primary rounded-lg px-4 py-2'>
                <input
                  type='text'
                  value={text}
                  readOnly
                  className='w-full bg-transparent border-none focus:outline-none text-foreground/90 text-xs py-1'
                  placeholder='Search Google...'
                />
                <div className='flex items-center gap-3 shrink-0'>
                  <Mic size={16} className='text-primary' />
                  <Camera
                    size={16}
                    style={{ stroke: 'url(#gradient)', fill: 'none' }}
                  />
                  <Search size={16} className='text-secondary' />
                  <svg width='0' height='0'>
                    <defs>
                      <linearGradient
                        id='gradient'
                        x1='0%'
                        y1='0%'
                        x2='100%'
                        y2='100%'
                      >
                        <stop offset='0%' stopColor='#1389FD' />
                        <stop offset='100%' stopColor='#87CEFB' />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className='relative flex-1'>
            <div className='mt-6 max-w-[250px] mx-auto'>
              {isLoading ? (
                <div className='space-y-6'>
                  <LoadingBlock />
                  <LoadingBlock />
                </div>
              ) : (
                showResults && (
                  <div
                    className='space-y-4'
                    style={{
                      opacity: opacity,
                      transition: 'opacity 0.5s ease-in-out',
                    }}
                  >
                    <div
                      className='text-xs text-gray-400 transform transition-all duration-500'
                      style={{
                        transform:
                          opacity === 1 ? 'translateY(0)' : 'translateY(10px)',
                      }}
                    >
                      About {searchResults[currentSearch][0].results} results (
                      {searchResults[currentSearch][0].time}s)
                    </div>
                    <div className='space-y-6'>
                      {searchResults[currentSearch].map((result, index) => (
                        <div
                          key={index}
                          className='transform transition-all duration-700 opacity-0'
                          style={{
                            transform:
                              opacity === 1
                                ? 'translateY(0)'
                                : 'translateY(15px)',
                            opacity: opacity,
                            transitionDelay: `${index * 200}ms`,
                          }}
                        >
                          <div className='flex items-center gap-2 text-gray-400 text-sm hover:underline cursor-pointer'>
                            <span>{result.title}</span>
                            <Link2 size={14} className='text-primary' />
                          </div>
                          <div className='text-gray-500 text-xs mt-1'>
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

        <div className='absolute bottom-0 left-0 right-0 pointer-events-none h-[20%] bg-gradient-to-t from-ring/30 to-transparent' />
      </div>
    </div>
  );
};

export { CircularProgress };
