// Add "use client" directive at the top
'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingDown, TrendingUp, Search, Globe } from 'lucide-react';

interface MetricCardProps {
  title: string;
  beforeValue: string;
  afterValue: string;
  icon: React.ReactNode;
  improvement: string;
  isShowingAfter?: boolean;
}

const MetricCard = ({
  title,
  beforeValue,
  afterValue,
  icon,
  improvement,
  isShowingAfter = false,
}: MetricCardProps) => {
  const currentValue = isShowingAfter ? afterValue : beforeValue;
  const currentTrend = isShowingAfter ? 'up' : 'down';
  const currentColor = isShowingAfter ? 'text-ring' : 'text-red-400';

  return (
    <div className='bg-card rounded-lg p-3 border border-ring/50'>
      <div className='flex items-center justify-between mb-2'>
        <div className='flex items-center gap-2'>
          <div className='text-primary bg-primary/10 p-1.5 rounded-lg'>
            {icon}
          </div>
          <h3 className='text-sm font-medium textforeground'>{title}</h3>
        </div>
        {isShowingAfter && (
          <div className='text-xs text-secondary/90 bg-secondary/5 py-0.5 px-2 rounded-full lg:block hidden'>
            +{improvement}
          </div>
        )}
      </div>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentValue}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className='flex items-baseline justify-between'
        >
          <p className={`text-lg font-semibold ${currentColor}`}>
            {currentValue}
          </p>
          <div className='flex items-center gap-1'>
            {currentTrend === 'up' ? (
              <TrendingUp className={`w-4 h-4 ${currentColor}`} />
            ) : (
              <TrendingDown className={`w-4 h-4 ${currentColor}`} />
            )}
            <span className='text-xs text-foreground/60'>
              {isShowingAfter ? 'After' : 'Before'}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export function SEOMetricsComparison() {
  const [showAfter, setShowAfter] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setShowAfter((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    {
      title: 'Search Rankings',
      beforeValue: 'Page 3+',
      afterValue: 'Top 1',
      icon: <Search className='w-5 h-5' />,
      improvement: '500%',
    },
    {
      title: 'Organic Traffic',
      beforeValue: '5k/mo',
      afterValue: '25k/mo',
      icon: <Globe className='w-5 h-5' />,
      improvement: '600%',
    },
  ];

  return (
    <div className='grid grid-cols-2 gap-4 w-full'>
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className='w-full'
        >
          <MetricCard {...metric} isShowingAfter={showAfter} />
        </motion.div>
      ))}
    </div>
  );
}
