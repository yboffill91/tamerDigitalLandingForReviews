'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import {
  Mail,
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

export function EmailMarketingCard() {
  const [count, setCount] = useState(0);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => (prev < 36 ? prev + 1 : 36));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="relative h-[300px] rounded-lg overflow-hidden bg-card border border-foreground/20 group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated bars background */}
      <div className="absolute inset-0 flex items-end justify-around px-4 overflow-hidden opacity-20">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-4 bg-primary rounded-t-lg"
            initial={{ height: '0%' }}
            animate={{
              height: [
                `${20 + Math.sin(i * 0.5) * 20}%`,
                `${60 + Math.sin(i * 0.5) * 40}%`,
                `${20 + Math.sin(i * 0.5) * 20}%`,
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-ring">
              <Mail className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-sm font-medium text-foreground/80">
              Email Marketing
            </span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">ROI Tracking</span>
          </div>
        </div>

        {/* Main Stats */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold "
              >
                {count}
              </motion.div>
              <div className="flex flex-col items-start">
                <span className="text-primary text-xl">%</span>
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
            </div>
            <p className="text-foreground/80">Average ROI Increase</p>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 gap-4 mt-auto">
          <div className="p-4 rounded-lg bg-ring">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-foreground/80">Open Rate</span>
              <ArrowUpRight className="w-4 h-4 text-primary" />
            </div>
            <div className="text-xl font-semibold ">+48%</div>
          </div>
          <div className="p-4 rounded-lg bg-ring">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-foreground/80">Click Rate</span>
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="text-xl font-semibold ">+65%</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
