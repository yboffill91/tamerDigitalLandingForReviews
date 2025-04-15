'use client';
import React, { useRef, useEffect, useState } from 'react';
import {
  GoogleCard,
  RevenueDashboard,
  WorkflowStatus,
  Compare,
  PulseBeamsSecond,
} from '@/features/landing/components/card-grid';
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from 'framer-motion';
import Image from 'next/image';
import { IconButton3D } from '@/components/ui';
import { HourglassIcon } from 'lucide-react';

const AnimatedCard = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      exit="exit"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
      }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

export const Cards = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    // Simula la carga de la página
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 1000); // Ajusta el tiempo según sea necesario

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div ref={headerRef} className="text-center mb-12 max-w-[45rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <IconButton3D
            icon={HourglassIcon}
            className="mb-6 text-primary hover:text-secondary transition-colors duration-300"
          />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          Real-Time Performance{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Analytics
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-foreground/90 mt-2"
        >
          Monitor your digital presence with precision. Our advanced analytics
          platform provides comprehensive insights into web traffic, engagement
          metrics, and ROI tracking to help you make data-driven decisions.
        </motion.p>
      </div>
      <div className="flex items-center justify-center p-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1200px] w-full">
          <AnimatePresence>
            {/* Primera fila: 3 cards */}
            {hasLoaded && (
              <>
                <AnimatedCard delay={0}>
                  <div className="p-4 h-[520px] bg-card/90 backdrop-blur-sm border border-ring/20 rounded-lg shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)] hover:shadow-[inset_0_2px_35px_rgba(255,255,255,0.06)] transition-shadow duration-300">
                    <div className="mb-2 h-[380px]">
                      <GoogleCard />
                    </div>
                    {/* <div className="px-4">
                      <div className="mb-4"><CircularProgress /></div>
                    </div> */}
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.2}>
                  <div className="p-4 h-[520px] bg-card/90 backdrop-blur-sm border border-ring/20 rounded-lg shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)] hover:shadow-[inset_0_2px_35px_rgba(255,255,255,0.06)] transition-shadow duration-300">
                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-foreground/80">
                        Performance
                      </h2>
                    </div>
                    <div className="mt-4">
                      <RevenueDashboard />
                      <WorkflowStatus />
                    </div>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.4}>
                  <div className="p-4 h-[520px] hidden lg:block">
                    <Image
                      src="/features/landing/watch.webp"
                      alt="Watch"
                      className="h-[500] object-contain"
                      width={3000}
                      height={3000}
                    />
                  </div>
                </AnimatedCard>

                {/* Segunda fila: 2 cards horizontales */}
                <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <AnimatedCard delay={0.6}>
                    <div className="p-4 h-[280px] bg-card/90 backdrop-blur-sm border border-ring/20 rounded-lg shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)] hover:shadow-[inset_0_2px_35px_rgba(255,255,255,0.06)] transition-shadow duration-300">
                      <Compare />
                    </div>
                  </AnimatedCard>

                  <AnimatedCard delay={0.8}>
                    <div className="p-4 h-[280px] bg-card/90 backdrop-blur-sm border border-ring/20 rounded-lg shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)] hover:shadow-[inset_0_2px_35px_rgba(255,255,255,0.06)] transition-shadow duration-300">
                      <div className="h-full">
                        <PulseBeamsSecond />
                      </div>
                    </div>
                  </AnimatedCard>
                </div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
