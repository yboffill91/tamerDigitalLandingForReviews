'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Search, Rocket, Circle } from 'lucide-react';
import { useState } from 'react';
import { Grid, IconButton3D, ShimmerButton } from '@/components/ui';

const seoLocations: string[] = [
  'Doral',
  'Hialeah Gardens',
  'Hialeah',
  'Kendall',
  'Little Havana',
  'Miami Gardens',
  'Miami',
  'Miramar',
  'North Miami Beach',
  'North Miami',
  'Opa-locka',
  'Pembroke Pines',
  'Pinecrest',
  'Sweetwater',
  'Westchester',
];

const marketingLocations: string[] = [
  'Aventura',
  'Bal Harbour',
  'Bay Harbor Islands',
  'Brickell',
  'Coconut Grove',
  'Coral Gables',
  'Downtown Miami',
  'Key Biscayne',
  'Miami Beach',
  'Miami Lakes',
  'Miami Shores',
  'Miami Springs',
  'South Beach',
  'Sunny Isles',
  'Surfside',
];

export function Locations() {
  const [activeTab, setActiveTab] = useState<'seo' | 'marketing'>('seo');
  const locations = activeTab === 'seo' ? seoLocations : marketingLocations;

  return (
    <section className=" relative overflow-hidden">
      {/* Grid Pattern Background */}
      <Grid />
      <span className="absolute top-0 left-0 -z-10 w-full h-full bg-gradient-to-bl from-background-primary via-transparent to-background-primary" />
      <span className="absolute top-0 left-0 -z-10 w-full h-full bg-gradient-to-tl from-background-primary via-ring/5 to-background-primary" />
      <span className="absolute top-0 left-0 -z-10 w-full h-full bg-gradient-to-tr from-background-primary via-transparent to-background-primary" />
      <span className="absolute top-0 left-0 -z-10 w-full h-full bg-gradient-to-br from-background-primary via-transparent to-background-primary" />

      {/* Main content container */}
      <div className="relative z-10">
        {/* Title */}
        <div className="relative mb-16 mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <IconButton3D icon={MapPin} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center font-bold"
          >
            <span className="text-primary text-2xl md:text-3xl block mb-2">
              Digital Marketing and SEO Solutions
            </span>
            <span className="text-foreground text-2xl md:text-4xl block">
              At Your City
            </span>
          </motion.h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex ronded-lg gap-1 bg-card p-px">
            <ShimmerButton
              variant={activeTab === 'seo' ? 'solid' : 'ghost'}
              onClick={() => setActiveTab('seo')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === 'seo' && 'pointer-events-none'}`}
            >
              <Search className="w-4 h-4" />
              <span>SEO Services</span>
            </ShimmerButton>
            <ShimmerButton
              variant={activeTab === 'marketing' ? 'solid' : 'ghost'}
              onClick={() => setActiveTab('marketing')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium ${activeTab === 'marketing' && 'pointer-events-none'}`}
            >
              <Rocket className="w-4 h-4" />
              <span>Digital Marketing</span>
            </ShimmerButton>
          </div>
        </div>
        {/* Center content block */}
        <div className="relative py-12">
          {/* Locations grid */}
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap justify-center items-center gap-y-4"
              >
                {locations.map((location, index) => (
                  <motion.div
                    key={location}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <Link
                      href={`/locations/${location.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <ShimmerButton variant="ghost" className="text-lg">
                        {location}
                      </ShimmerButton>
                    </Link>
                    {index < locations.length - 1 && (
                      <div className="relative px-2">
                        <Circle
                          className={`w-1.5 h-1.5 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fill-ring text-secondary`}
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
