'use client';
import React, { useEffect, useState } from 'react';
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
  animate,
  stagger,
} from 'framer-motion';
import {
  BsStarFill,
  BsShop,
  BsDoorOpen,
  BsHospital,
  BsWrench,
  BsHouseDoor,
  BsBuildings,
} from 'react-icons/bs';

const testimonials = [
  {
    name: 'Local Restaurant',
    designation: 'Restaurant Owner',
    icon: BsShop,
  },
  {
    name: 'Fitness Center',
    designation: 'Gym Owner',
    icon: BsDoorOpen,
  },
  {
    name: 'Dental Practice',
    designation: 'Practice Manager',
    icon: BsHospital,
  },
  {
    name: 'Auto Shop',
    designation: 'Service Manager',
    icon: BsWrench,
  },
  {
    name: 'Real Estate',
    designation: 'Property Agent',
    icon: BsHouseDoor,
  },
  {
    name: 'Local Hotel',
    designation: 'Hotel Manager',
    icon: BsBuildings,
  },
];

export const FeaturedImages = ({
  className,
  showStars = false,
  containerClassName,
}: {
  textClassName?: string;
  className?: string;
  showStars?: boolean;
  containerClassName?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  useEffect(() => {
    if (imagesLoaded) {
      animate(
        '.animation-container',
        {
          scale: [1.1, 1, 0.9, 1],
          opacity: [0, 1],
        },
        { duration: 0.4, delay: stagger(0.1) }
      );
    }
  }, [imagesLoaded]);

  return (
    <div
      className={`flex flex-col items-center lg:items-start mt-6 mb-4 ${containerClassName || ''}`}
    >
      {/* Stars container - positioned above images */}
      {showStars && (
        <div className="flex items-center justify-center mb-6">
          {[...Array(5)].map((_, index) => (
            <BsStarFill key={index} className="h-4 w-4 text-yellow-400 mx-1" />
          ))}
        </div>
      )}
      <div
        className={`flex flex-col lg:flex-row items-center gap-4 lg:gap-6 ${className || ''}`}
      >
        {/* Images container */}
        <div className="flex flex-row items-center relative">
          {testimonials.map((testimonial, idx) => (
            <div
              className="-mr-4 relative group"
              key={testimonial.name}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 160,
                        damping: 20,
                      },
                    }}
                    exit={{ opacity: 0, y: 20, scale: 0.6 }}
                    style={{
                      translateX: translateX,
                      whiteSpace: 'nowrap',
                    }}
                    className="absolute top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-blue-600 z-50 shadow-xl px-4 py-2"
                  >
                    <div className="absolute inset-x-0 z-30 w-1/5 mx-auto -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                    <div className="absolute inset-x-0 w-2/3 mx-auto z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                    <div className="flex items-center gap-2">
                      <div className="font-bold text-white relative z-30 text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-white/80 text-xs px-1 py-0.5 rounded-sm bg-blue-700">
                        {testimonial.designation}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="animation-container">
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    rotate: `${Math.random() * 15 - 5}deg`,
                    scale: 1,
                    opacity: 1,
                  }}
                  whileHover={{
                    scale: 1.05,
                    zIndex: 30,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="rounded-2xl overflow-hidden border-2 border-neutral-200 relative"
                >
                  <div className="relative h-14 w-14">
                    <div
                      className="flex items-center justify-center w-full h-full bg-blue-100 dark:bg-blue-900"
                      onLoad={() => {
                        if (idx === testimonials.length - 1) {
                          setImagesLoaded(true);
                        }
                      }}
                    >
                      {React.createElement(testimonial.icon, {
                        className: 'w-8 h-8 text-blue-600 dark:text-blue-400',
                      })}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
