'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Search, Rocket } from 'lucide-react';
import { useState } from 'react';
import { Grid, IconButton3D, ShimmerButton } from '@/components/ui';

const seoLocations: string[] = [
  'Hialeah',
  'Hialeah Gardens',
  'Miami Gardens',
  'Opa-locka',
  'Miami',
  'Doral',
  'Miramar',
  'Pembroke Pines',
  'North Miami Beach',
  'North Miami',
  'Sweetwater',
  'Little Havana',
  'Westchester',
  'Kendall',
  'Pinecrest',
];

const marketingLocations: string[] = [
  'Coral Gables',
  'South Beach',
  'Brickell',
  'Downtown Miami',
  'Aventura',
  'Sunny Isles',
  'Miami Lakes',
  'Miami Springs',
  'Coconut Grove',
  'Key Biscayne',
  'Miami Shores',
  'Bal Harbour',
  'Surfside',
  'Bay Harbor Islands',
  'Miami Beach',
];

export function Locations() {
  const [activeTab, setActiveTab] = useState<'seo' | 'marketing'>('seo');
  const locations = activeTab === 'seo' ? seoLocations : marketingLocations;

  return (
    <section className=" relative overflow-hidden">
      {/* Grid Pattern Background */}
      <Grid />

      {/* Top and Bottom Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Gradient */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-background-primary via-background-primary/80 to-card/5 [mask-image:linear-gradient(to-b,#121212,transparent)]" />
        {/* Bottom Gradient matching original */}
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-background-primary via-background-primary/50 to-transparent [mask-image:radial-gradient(farthest-side_at_bottom,#121212,transparent)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-background-primary via-card/5 to-background-primary" />
      </div>

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
          <div className="inline-flex p-1 bg-card/50 backdrop-blur-sm rounded-xl">
            <ShimmerButton
              onClick={() => setActiveTab('seo')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'seo'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground/60 hover:text-foreground bg-card'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>SEO Services</span>
            </ShimmerButton>
            <ShimmerButton
              onClick={() => setActiveTab('marketing')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'marketing'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground/60 hover:text-foreground bg-card'
              }`}
            >
              <Rocket className="w-4 h-4" />
              <span>Digital Marketing</span>
            </ShimmerButton>
          </div>
        </div>
        {/* Center content block */}
        <div className="relative py-12">
          {/* Locations grid */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                      className={`transition-colors duration-300 text-lg foregroundspace-nowrap px-4 py-2 ${
                        activeTab === 'seo'
                          ? 'text-primary hover:text-primary/80'
                          : 'text-foreground hover:text-foreground/80'
                      }`}
                    >
                      {location}
                    </Link>
                    {index < locations.length - 1 && (
                      <div className="relative px-2">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            activeTab === 'seo' ? 'bg-primary' : 'bg-foreground'
                          } absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
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
