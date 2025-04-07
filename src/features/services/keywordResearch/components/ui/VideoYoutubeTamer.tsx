'use client';
import { Play } from 'lucide-react';
import { useState } from 'react';

export function VideoYoutubeTamer() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className='relative '>
      <div className='flex gap-10 h-20 flex-wrap justify-center md:gap-40 relative w-full mt-4 md:mt-2 max-w-4xl mx-auto [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'></div>

      {/* Video Section */}
      <div className='relative w-[75vw] max-w-[1600px] h-[500px] mx-auto mt-16 flex items-center justify-center'>
        {/* Outer background */}
        <div className='absolute left-[-10px] top-[-10px] w-[calc(100%+20px)] h-[calc(100%+20px)] bg-card/50 backdrop-blur-[10px] rounded-lg border border-ring/10 z-0 [box-shadow:rgba(59,130,246,0.4)_-5px_-5px,rgba(59,130,246,0.3)_-10px_-10px,rgba(59,130,246,0.2)_-15px_-15px,rgba(59,130,246,0.1)_-20px_-20px,rgba(59,130,246,0.05)_-25px_-25px]'></div>

        {/* Inner background */}
        <div className="absolute inset-0 bg-cerd/90 backdrop-blur-[10px] rounded-lg shadow-lg border border-ring/10 overflow-hidden z-1 after:content-[''] after:absolute after:inset-[1px] after:rounded-[7px] after:border after:border-foreground/30 after:pointer-events-none">
          {!isPlaying ? (
            <>
              {/* Video thumbnail image (placeholder) */}
              <div className='absolute inset-0 bg-gradient-to-br from-cerd to-background-primary z-1'>
                <div className="w-full h-full opacity-40 bg-[url('/keyword.png')] bg-cover bg-center"></div>
              </div>

              {/* Video play button */}
              <div className='absolute inset-0 flex items-center justify-center z-2'>
                <div
                  className='group cursor-pointer transform transition-all duration-300 hover:scale-105'
                  onClick={() => setIsPlaying(true)}
                >
                  {/* Outer ring */}
                  <div className='absolute inset-0 rounded-full animate-ping bg-secondary opacity-20'></div>

                  {/* Middle ring */}
                  <div className='w-20 h-20 rounded-full bg-card/50 backdrop-blur-lg flex items-center justify-center'>
                    {/* Inner play button */}
                    <div className='w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-xl group-hover:shadow-secondary/30 transition-all duration-300'>
                      <Play
                        fill='white'
                        size={28}
                        className='text-white ml-1'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <iframe
              className='absolute inset-0 w-full h-full border-0'
              src='https://www.youtube.com/embed/x5IJ0APR0EQ?autoplay=1'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          )}

          {/* Video details */}
          <div className='absolute left-6 bottom-6 right-6 z-3'>
            <div className='flex items-center justify-between mb-2'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-full bg-secondary flex items-center justify-center'>
                  <span className='text-foreground font-bold'>JS</span>
                </div>
                <div>
                  <h4 className='text-foreground font-medium'>
                    Free Masterclass: Keyword Research
                  </h4>
                  <p className='text-foreground/80 text-sm'>
                    Learn our proven SEO research framework
                  </p>
                </div>
              </div>
              <span className='text-foreground/80 text-sm'>
                12-minute comprehensive guide
              </span>
            </div>
          </div>
        </div>
        {/* Watch now text */}
        <div className='absolute top-4 right-6 z-3'>
          <p className='text-primary font-medium flex items-center gap-2'>
            <Play size={16} className='animate-ping' />
            Watch the free masterclass now
          </p>
        </div>
      </div>
    </div>
  );
}
