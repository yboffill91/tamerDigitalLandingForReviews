'use client';

import { Grid, IconButton3D } from '@/components/ui';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface LocationArea {
  name: string;
  link: string;
  isActive?: boolean;
}

const LocationsArea: LocationArea[] = [
  {
    name: 'Hialeah',
    link: '/services/seo',
  },
  {
    name: 'Hialeah Gardens',
    link: '/locations/hialeah-gardens',
  },
  {
    name: 'Miami Gardens',
    link: '/locations/miami-gardens',
  },
  {
    name: 'Opa-locka',
    link: '/locations/opa-locka',
  },
  {
    name: 'Miami',
    link: '/locations/miami',
    isActive: true,
  },
  {
    name: 'Doral',
    link: '/locations/doral',
  },
  {
    name: 'Miramar',
    link: '/locations/miramar',
  },
  {
    name: 'Pembroke Pines',
    link: '/locations/pembroke-pines',
  },
  {
    name: 'North Miami Beach',
    link: '/locations/north-miami-beach',
  },
  {
    name: 'North Miami',
    link: '/locations/north-miami',
  },
  {
    name: 'Sweetwater',
    link: '/locations/sweetwater',
  },
  {
    name: 'Little Havana',
    link: '/locations/little-havana',
  },
  {
    name: 'Westchester',
    link: '/locations/westchester',
  },
  {
    name: 'Kendall',
    link: '/locations/kendall',
  },
  {
    name: 'Pinecrest',
    link: '/locations/pinecrest',
  },
];

export const Locations = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={sectionRef}
      className='relative min-h-72 flex flex-col items-center justify-start p-4'
    >
      <span className='w-full h-full bg-gradient-to-b from-background-primary to-transparent absolute -top-1 left-0 -z-10' />
      <Grid />
      <motion.div
        className='mb-12 text-center'
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div className='mb-6'>
          <IconButton3D icon={MapPin} />
        </motion.div>
        <span>
          <h2>
            Our SEO and Marketing Agency
            <br />
            <span className='heading-gradient'> At Your City</span>
          </h2>
        </span>
      </motion.div>
      <motion.div
        className='flex flex-wrap gap-4 max-w-7xl p-4 rounded-lg items-center justify-center relative'
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {LocationsArea.map(({ name, link, isActive }, index) => (
          <motion.div
            key={name + link}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
          >
            <Link
              href={link}
              className={`flex gap-2 items-center justify-center transition-all duration-300 ease-in-out group relative ${
                isActive ? 'text-primary font-bold' : 'hover:text-ring'
              }`}
            >
              <h3 className='text-lg'>{name}</h3>
              {index < LocationsArea.length - 1 && (
                <span className='bg-primary h-2 w-2 rounded-full group-hover:bg-ring group-hover:rounded-none transition-all duration-300'>
                  {' '}
                </span>
              )}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
