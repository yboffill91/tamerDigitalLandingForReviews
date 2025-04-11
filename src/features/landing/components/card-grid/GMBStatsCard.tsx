'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import {
  Building2,
  MapPin,
  Star,
  Users,
  Phone,
  Navigation,
} from 'lucide-react';

export function GMBStatsCard() {
  const [percentage, setPercentage] = useState(0);
  const [showFact, setShowFact] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercentage(prev => Math.min(prev + 1, 85));
    }, 30);
    return () => clearInterval(timer);
  }, []);

  // Calculate progress circle properties
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  // Stats data
  const stats = [
    { icon: Star, value: '4.9', label: 'Rating', color: 'text-yellow-400' },
    { icon: Users, value: '+127', label: 'Followers', color: 'text-primary' },
    { icon: Phone, value: '+89%', label: 'Calls', color: 'text-blue-400' },
    {
      icon: Navigation,
      value: '+156%',
      label: 'Directions',
      color: 'text-purple-400',
    },
  ];

  return (
    <motion.div
      ref={cardRef}
      className="relative h-[300px] rounded-lg overflow-hidden bg-card border border-foreground/20 group"
      onMouseEnter={() => setShowFact(true)}
      onMouseLeave={() => setShowFact(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        {/* Header with Google Business Profile */}
        <div
          className="absolute top-6 left-6 transition-all duration-300"
          style={{
            opacity: showFact ? 0 : 1,
            transform: showFact ? 'translateY(-20px)' : 'translateY(0)',
          }}
        >
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Google Business Profile
            </span>
          </div>
          <div className="mt-2 flex items-center gap-1">
            <span className="text-4xl font-bold">{percentage}</span>
            <span className="text-lg text-primary">%</span>
          </div>
          <span className="text-sm text-foreground/80">
            Profile Optimization
          </span>
        </div>

        {/* Central Progress Circle */}
        <div className="flex-1 flex items-center justify-center px-8">
          <AnimatePresence mode="wait">
            {!showFact ? (
              <motion.div
                key="circle"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative"
              >
                <svg className="w-48 h-48 transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r={radius}
                    className="stroke-foreground/20"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r={radius}
                    className="stroke-primary"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-foreground/20 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="fact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center space-y-4 px-4"
              >
                <div className="flex items-center justify-center gap-2 text-primary">
                  <Star className="w-5 h-5" fill="currentColor" />
                  <span className="font-semibold">Did you know?</span>
                </div>
                <div className="text-foreground/90 leading-relaxed text-base">
                  Businesses with complete and optimized GMB profiles are{' '}
                  <span className="text-primary font-semibold">
                    70% more likely
                  </span>{' '}
                  to attract local customers and receive{' '}
                  <span className="text-primary font-semibold">
                    7x more visits
                  </span>{' '}
                  than those with incomplete profiles.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Stats Grid */}
        <div className="grid grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`text-lg font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="flex items-center justify-center gap-1 mt-1">
                <stat.icon className={`w-3 h-3 ${stat.color}`} />
                <span className="text-xs text-foreground/80">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated wave lines */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 400 100"
        preserveAspectRatio="none"
      >
        {[0, 1, 2].map(i => (
          <motion.path
            key={i}
            d="M 0 50 C 150 0, 250 100, 400 50"
            fill="none"
            stroke="#2A2A2A"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 1,
              y: [-2 - i * 2, 2 + i * 2, -2 - i * 2],
            }}
            transition={{
              pathLength: { duration: 2, delay: i * 0.5 },
              opacity: { duration: 0.5, delay: i * 0.5 },
              y: { duration: 2, repeat: Infinity, ease: 'linear' },
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
