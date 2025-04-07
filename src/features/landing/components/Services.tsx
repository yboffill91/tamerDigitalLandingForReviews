'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconButton3D, Grid } from '@/components/ui';
import {
  Rocket,
  ArrowUpRight,
  ChevronRight,
  ZapIcon,
  FileDigitIcon,
} from 'lucide-react';
import { seoServices, marketingServices } from '@/features/landing/utils';
import { Service } from '@/lib';

export function Services() {
  const [activeTab, setActiveTab] = useState<'seo' | 'marketing'>('seo');
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

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

  const renderServiceCard = (service: Service, index: number) => (
    <motion.div
      key={`${service.title}-${index}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`group/feature relative ${
        isMobile ? 'flex-shrink-0 w-[300px] mx-2 snap-start' : ''
      }`}
      onMouseEnter={() => setHoveredService(index)}
      onMouseLeave={() => setHoveredService(null)}
    >
      <div
        className={`
          flex flex-col ${
            isMobile
              ? 'border border-primary/10 rounded-lg'
              : 'lg:border-r border-primary/10'
          } py-8 px-6 relative ${isMobile ? 'h-[420px]' : 'md:h-[420px] h-auto'}
          bg-gradient-to-b from-card to-background-primary/50 overflow-hidden cursor-pointer
          ${!isMobile && (index === 0 || index === 4) && 'lg:border-l'}
          ${!isMobile && index < 4 && 'lg:border-b'}
        `}
      >
        <Grid />

        <div className='absolute inset-0 h-full w-full bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover/feature:opacity-100 transition-opacity duration-700' />

        <div className='mb-4 relative z-10'>
          <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover/feature:bg-primary/20 transition-all duration-300'>
            <service.icon className='w-6 h-6 text-primary transition-transform duration-300 group-hover/feature:scale-110 group-hover/feature:rotate-12' />
          </div>
        </div>

        <div className='text-lg font-bold mb-2 relative z-10 pl-4'>
          <div className='absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-lg rounded-br-lg bg-primary/20 group-hover/feature:bg-primary transition-all duration-300 origin-center' />
          <span className='group-hover/feature:translate-x-2 transition duration-300 inline-block text-foreground group-hover/feature:text-primary'>
            {service.title}
          </span>
        </div>

        <p className='text-sm text-foreground/90 group-hover/feature:text-foreground/70 mb-4 relative z-10 transition-colors duration-300'>
          {service.description}
        </p>

        <ul className='space-y-2 relative z-10 flex-1'>
          {service.features.map((feature: string, idx: number) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: hoveredService === index ? 1 : 0.7,
                x: hoveredService === index ? 0 : -10,
              }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className='flex items-center gap-2 text-sm text-foreground/90 group-hover/feature:text-foreground/70'
            >
              <ChevronRight className='w-4 h-4 text-primary' />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        <div className='mt-6 flex items-center gap-2 text-sm text-primary opacity-0 group-hover/feature:opacity-100 transition-opacity relative z-10'>
          <span>{service.cta}</span>
          <ArrowUpRight className='w-4 h-4 transition-transform group-hover/feature:translate-x-1 group-hover/feature:-translate-y-1' />
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className=' relative overflow-hidden'>
      <div className='text-center mb-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mb-8'
        >
          <IconButton3D icon={isMobile ? ZapIcon : FileDigitIcon} />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className='text-4xl font-bold text-foreground mb-6'
        >
          Complete Digital Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className='text-foreground/90 max-w-3xl mx-auto text-lg'
        >
          From SEO to comprehensive digital marketing, we provide the strategies
          and execution you need to dominate your market.
        </motion.p>
      </div>

      <div className='flex justify-center mb-16'>
        <div
          className={`inline-flex p-1 bg-card/50 backdrop-blur-sm rounded-lg ${
            isMobile ? 'w-[90vw]' : ''
          }`}
        >
          <button
            onClick={() => setActiveTab('seo')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
              isMobile ? 'w-1/2' : ''
            } ${
              activeTab === 'seo'
                ? 'bg-primary text-foreground'
                : 'text-foreground/90 hover:text-foreground'
            }`}
          >
            <Rocket className='w-4 h-4' />
            <span>{isMobile ? 'SEO' : 'SEO Services'}</span>
          </button>
          <button
            onClick={() => setActiveTab('marketing')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
              isMobile ? 'w-1/2' : ''
            } ${
              activeTab === 'marketing'
                ? 'bg-primary text-foreground'
                : 'text-foreground/90 hover:text-foreground'
            }`}
          >
            <ZapIcon className='w-4 h-4' />
            <span>
              {isMobile ? 'Digital Marketing' : 'Digital Marketing Services'}
            </span>
          </button>
        </div>
      </div>

      <div className='relative max-w-7xl mx-auto'>
        {isMobile ? (
          <div
            ref={sliderRef}
            className={`${
              isMobile
                ? 'flex overflow-x-auto scrollbar-hide snap-x snap-mandatory'
                : 'grid grid-cols-2 lg:grid-cols-4 relative z-10 py-10 gap-4'
            }`}
            style={{ scrollSnapType: 'x mandatory' }}
          >
            <AnimatePresence mode='wait'>
              {(activeTab === 'seo' ? seoServices : marketingServices).map(
                (service, index) => renderServiceCard(service, index)
              )}
            </AnimatePresence>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10'>
            <AnimatePresence mode='wait'>
              {(activeTab === 'seo' ? seoServices : marketingServices).map(
                (service, index) => renderServiceCard(service, index)
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
