'use client';

import React from 'react';
import { Rocket, Target, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  {
    icon: Rocket,
    text: "Over 5,000+ websites priced accurately",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Target,
    text: "98% client satisfaction with estimates",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Lightbulb,
    text: "Save up to 20% compared to market rates",
    color: "text-primary",
    bgColor: "bg-primary/10"
  }
];

export const Stats = () => {
  return (
    <div className="mt-8 space-y-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4"
          >
            <div className={`${stat.bgColor} p-2 rounded-lg`}>
              <Icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <p className="text-foreground/80 text-lg">{stat.text}</p>
          </motion.div>
        )
      })}
    </div>
  );
};