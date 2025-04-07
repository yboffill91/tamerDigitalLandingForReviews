'use client';

import { useEffect } from 'react';
import { TrendingUp } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';

export function Compare() {
  return (
    <div className='h-full flex flex-col'>
      <div className='mb-6'>
        <h2 className='text-xl font-bold text-foreground/80'>
          Digital Performance Monitoring
        </h2>
      </div>

      {/* Progress bars section */}
      <div className='space-y-4 mb-6'>
        <MetricBar label='Web Traffic' value={85} delay={0} />
        <MetricBar label='Engagement' value={72} delay={0.2} />
        <MetricBar label='ROI' value={68} delay={0.4} />
      </div>

      {/* Stats section */}
      <div className='flex items-center gap-3'>
        <div className='flex items-center gap-2'>
          <span className='text-2xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text'>
            70%
          </span>
          <TrendingUp className='text-primary' size={20} />
        </div>
        <p className='text-sm text-foreground/80'>
          of companies improve their customer retention by
          <span className='bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text font-medium'>
            {' '}
            40%
          </span>
        </p>
      </div>
    </div>
  );
}

function MetricBar({
  label,
  value,
  delay,
}: {
  label: string;
  value: number;
  delay: number;
}) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      width: `${value}%`,
      transition: {
        duration: 1,
        delay: delay,
        type: 'spring',
        stiffness: 50,
        damping: 10,
      },
    });
  }, [controls, value, delay]);

  return (
    <div>
      <div className='flex justify-between text-sm mb-1.5'>
        <span className='text-foreground/80'>{label}</span>
        <span className='bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text'>
          {value}%
        </span>
      </div>
      <div className='h-2 bg-gray-800 rounded-lg overflow-hidden'>
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          className='h-full rounded-lg'
          style={{
            background: 'linear-gradient(to right, #1389FD, #87CEFB)',
          }}
        />
      </div>
    </div>
  );
}
