'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Grid } from '@/components/ui';
import { ArrowUpRight, LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';
import { ReactNode, useEffect, useState } from 'react';

interface GridCardsProp {
  icon: LucideIcon | IconType;
  title: string;
  description: string;
  cta: string;
  children?: React.ReactNode;
  index: number;
}

interface GridCardSetProps {
  children: ReactNode;
  row?: number;
}

export const GridCardSet = ({ row = 4, children }: GridCardSetProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return isMobile ? (
    <div
      className={`${
        isMobile && 'flex overflow-x-auto scrollbar-hide snap-x snap-mandatory'
      }`}
      style={{ scrollSnapType: 'x mandatory' }}
    >
      <AnimatePresence mode='wait'>{children}</AnimatePresence>
    </div>
  ) : (
    <div
      className={` grid grid-cols-2 lg:grid-cols-${row} relative z-10 py-10 gap-4`}
    >
      {children}
    </div>
  );
};

export const GridCard = ({
  icon: Icon,
  title,
  description,
  cta,
  children,
  index,
}: GridCardsProp) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <motion.div
      key={`${title}-${index}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`group/feature relative ${
        isMobile && 'flex-shrink-0 w-[300px] mx-2 snap-start'
      }`}
    >
      <div
        className={`
          flex flex-col ${
            isMobile
              ? 'border border-primary/10 rounded-lg'
              : 'lg:border-r border-primary/10'
          } py-8 px-6 min-h-[225px]
          bg-gradient-to-b from-card to-background-primary/50 overflow-hidden cursor-pointer rounded-lg relative
          ${!isMobile && (index === 0 || index === 4) && 'lg:border-l'}
          ${!isMobile && index < 4 && 'lg:border-b'}
        `}
      >
        <Grid />

        <div className='absolute inset-0 h-full w-full bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover/feature:opacity-100 transition-opacity duration-700' />

        <div className='mb-4 relative z-10'>
          <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover/feature:bg-primary group-hover/feature:rotate-45 transition-all duration-300'>
            <Icon className='w-6 h-6 text-primary transition-all duration-300 group-hover/feature:scale-150 group-hover/feature:-rotate-45 group-hover/feature:text-primary-foreground' />
          </div>
        </div>

        <div className='text-lg font-bold mb-2 relative z-10 pl-4'>
          <div className='absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-lg rounded-br-lg bg-primary/20 group-hover/feature:bg-primary transition-all duration-300 origin-center' />
          <span className='group-hover/feature:translate-x-2 transition duration-300 inline-block text-foreground group-hover/feature:text-primary'>
            {title}
          </span>
        </div>

        <p className='text-sm text-foreground/90 group-hover/feature:text-foreground/70 mb-4 relative z-10 transition-colors duration-300'>
          {description}
        </p>

        {children}

        <div className='mt-6 flex items-center gap-2 text-sm text-primary opacity-0 group-hover/feature:opacity-100 transition-opacity absolute bottom-2 left-2 z-10'>
          <span>{cta}</span>
          <ArrowUpRight className='w-4 h-4 transition-transform group-hover/feature:translate-x-1 group-hover/feature:-translate-y-1' />
        </div>
      </div>
    </motion.div>
  );
};
