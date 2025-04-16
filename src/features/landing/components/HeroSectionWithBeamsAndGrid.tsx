'use client';
import { Badge, HeroButtonsSet, TestimonialTooltip } from '@/components/ui';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { cards, Testimonials } from '@/features/landing/utils';
import { StarIcon, Zap } from 'lucide-react';
import { useRef } from 'react';
import {
  BackgroundGrids,
  AnimatedCircles,
  AnimatedConnections,
  FloatingCards,
  NotificationCard,
} from '@/features/landing/components/ui';

export function HeroSectionWithBeamsAndGrid() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <div
      ref={sectionRef}
      className="relative ease-in-out flex flex-col items-center justify-center container mx-auto lg:pt-24 pt-28 w-screen"
    >
      <BackgroundGrids />

      {/* Main Content */}
      <div className="flex flex-col items-center relative z-10 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* New Badge */}
          <motion.div
            className="relative z-10 mb-2 flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          >
            <Badge
              text="Free Website Builder Tool"
              promo={'New'}
              link="/pricing"
              icon={Zap}
            />
          </motion.div>

          <motion.h1
            className="text-balance relative z-10 mx-auto mb-8 max-w-4xl text-center font-semibold tracking-tight text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          >
            Boost Your <span className="">Sales by 10x </span>
            With Our{' '}
            <div className="relative mx-auto inline-block [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="[text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className=""> Miami Digital Marketing Agency.</span>
              </div>
            </div>
          </motion.h1>

          <motion.p
            className="relative z-10 mx-auto mt-2 max-w-2xl text-center text-sm md:text-lg text-white backdrop-filter backdrop-blur-md p-1 rounded-lg mb-6 text-pretty "
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              delay: 0.6,
            }}
          >
            Empower Miami businesses with cutting-edge, data-driven marketing
            strategies tailored to uncover the most effective channels, maximize
            ROI, and fuel growth. Our customized solutions are designed to boost
            your profits, automate tedious tasks, and save you time—giving you
            the freedom to focus on what matters most: your success in the
            vibrant Miami market.
          </motion.p>
          <div className="max-w-md flex items-center justify-center"></div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              delay: 0.7,
            }}
          >
            <HeroButtonsSet
              firstBtnText="Start My Path To Success"
              secondBtnText="See Our Free Tools!"
              isCentered
            />
          </motion.div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-7xl mx-auto mt-4 hidden lg:block">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Cards */}
          <motion.div
            className="relative h-[500px]"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              delay: 0.8,
            }}
          >
            <FloatingCards cards={cards} />
          </motion.div>

          {/* Middle Column */}
          <div className="flex items-center justify-center relative">
            {/* Add AnimatedConnections above the central icon */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0.9,
              }}
            >
              <AnimatedConnections />
            </motion.div>

            <motion.div
              className="w-[180px] h-[180px] relative z-10 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[80%] after:h-[40px] after:bg-primary/10 after:blur-xl after:rounded-lg after:-z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: 1.0,
              }}
            >
              <div className="relative rounded-lg border border-primary/20 bg-primary/5 p-[16px] backdrop-blur-lg w-full h-full shadow-[inset_0_2px_25px_rgba(19,137,253,0.03)] hover:shadow-[inset_0_2px_35px_rgba(19,137,253,0.06)] transition-shadow duration-300">
                <div className="rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-[16px] flex items-center justify-center w-full h-full shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)] hover:shadow-[inset_0_2px_35px_rgba(255,255,255,0.06)] transition-shadow duration-300">
                  <Image
                    src="/tamerLogo.webp"
                    alt="TAMER Digital Icon"
                    className="size-64 object-contain opacity-75"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center justify-center h-[500px] gap-8">
            {/* Empty Card */}
            <motion.div
              className="w-full h-[200px] rounded-lg bg-black/90 backdrop-blur-sm border border-primary overflow-hidden shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)] hover:shadow-[inset_0_2px_35px_rgba(255,255,255,0.06)] transition-shadow duration-300"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0.8,
              }}
            >
              <AnimatedCircles />
            </motion.div>
            {/* Notification Card */}
            <motion.div
              className="w-full shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)] hover:shadow-[inset_0_2px_35px_rgba(255,255,255,0.06)] transition-shadow duration-300 border border-primary rounded-lg bg-black/90"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0.9,
              }}
            >
              <NotificationCard />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
          delay: 1.1,
        }}
      >
        <TestimonialTooltip TESTIMONIALS_ARRAY={Testimonials} />
        <div className="flex items-center gap-3 ml-6 -mt-10">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className="w-4 h-4 text-yellow-500 fill-yellow-500"
              />
            ))}
          </div>
          <span className="text-primary font-semibold ml-1">4.9/5</span>
        </div>
      </motion.div>
    </div>
  );
}
