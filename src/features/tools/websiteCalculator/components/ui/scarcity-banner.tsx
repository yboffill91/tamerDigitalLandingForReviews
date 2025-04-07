'use client'
import { motion } from "framer-motion";
import { Clock, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";

export const ScarcityBanner = () => {
    const [timeLeft, setTimeLeft] = useState({
      days: 7,
      hours: 24,
      minutes: 0,
      seconds: 0
    });
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev.seconds === 0) {
            if (prev.minutes === 0) {
              if (prev.hours === 0) {
                return {
                  days: prev.days - 1,
                  hours: 23,
                  minutes: 59,
                  seconds: 59
                };
              }
              return {
                days: prev.days,
                hours: prev.hours - 1,
                minutes: 59,
                seconds: 59
              };
            }
            return {
              days: prev.days,
              hours: prev.hours,
              minutes: prev.minutes - 1,
              seconds: 59
            };
          }
          return {
            days: prev.days,
            hours: prev.hours,
            minutes: prev.minutes,
            seconds: prev.seconds - 1
          };
        });
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-destructive/50 to-destructive backdrop-blur-sm text-foreground py-3 px-4 rounded-lg flex items-center justify-between mb-6"
      >
        <div className="flex items-center gap-3">
          <DollarSign className="w-6 h-6" />
          <div>
            <span className="ml-2">FREE</span>
            <span className="ml-2 line-through text-primary-foreground/70">($3.99 value)</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          <span className="font-mono text-foreground/90">
            {timeLeft.days}d {String(timeLeft.hours).padStart(2, '0')}h {String(timeLeft.minutes).padStart(2, '0')}m {String(timeLeft.seconds).padStart(2, '0')}s
          </span>
        </div>
      </motion.div>
    );
  };