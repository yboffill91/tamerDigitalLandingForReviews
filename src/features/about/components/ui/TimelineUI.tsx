'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className='w-full  font-sans md:px-10' ref={containerRef}>
      <div ref={ref} className='relative max-w-7xl mx-auto pb-20'>
        {data.map((item, index) => (
          <div
            key={index}
            className='flex justify-start pt-10 md:pt-40 md:gap-10'
          >
            <div className='sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full'>
              <div className='h-10 absolute left-3 md:left-3 w-10 rounded-full bg-card flex items-center justify-center'>
                <div className='h-4 w-4 rounded-full bg-primary/20 border border-primary p-2' />
              </div>
              <h2 className=' pl-20 font-bold heading-gradient'>
                {item.title}
              </h2>
            </div>

            <div className='relative hover:border hover:border-ring hover:bg-card transition-all duration-700 hover:scale-105 p-4 rounded-lg w-full'>
             
              {item.content}{' '}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className='absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-primary/20 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]'
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className='absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-primary/50 to-transparent from-[0%] via-[10%] rounded-full'
          />
        </div>
      </div>
    </div>
  );
};
