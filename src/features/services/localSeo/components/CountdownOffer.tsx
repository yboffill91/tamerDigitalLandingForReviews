'use client';
import React, { useState, useEffect } from 'react';
import {
  Timer,
  Users,
  MapPin,
  Shield,
  AlertCircle,
  ArrowRight,
  Check,
  Gift,
} from 'lucide-react';
import { ShimmerButton } from '@/components/ui';

const DEADLINE = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);
const REMAINING_SPOTS = 3;

const BONUS_FEATURES = [
  '1-Hour Strategy Session: Custom SEO roadmap ($500 value)',
  'Local SEO Mastery Guide: Expert strategies ($297 value)',
  'Premium Citations: 60+ DA sites ($397 value)',
];

export function CountdownOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = DEADLINE.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        // Opcional: redirigir o mostrar mensaje de oferta expirada
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className='flex flex-col items-center mx-2'>
      <div className=' text-2xl font-bold rounded-lg w-16 h-16 flex items-center justify-center border-2 border-destructive/20'>
        <Timer className='absolute w-6 h-6 text-destructive opacity-20' />
        <span className='font-mono relative'>
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className='text-red-400 text-xs mt-1'>{label}</span>
    </div>
  );

  const restrictions = [
    {
      icon: <MapPin className='w-4 h-4' />,
      text: 'Only one business per ZIP code',
    },
    {
      icon: <Users className='w-4 h-4' />,
      text: 'No competing niches in your area',
    },
    { icon: <Shield className='w-4 h-4' />, text: 'Your territory, protected' },
  ];

  return (
    <div className='relative w-full pb-12 '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Alert Title */}
        <div className='flex justify-center mb-8 relative'>
          <div className='inline-flex items-center rounded-full px-6 py-1 text-sm font-semibold bg-destructive/20 text-destructive ring-2 ring-inset ring-destructive/30 gap-x-2 animate-pulse'>
            <AlertCircle className='w-5 h-5' />
            <span>ALERT!</span>
            <span className='w-1 h-1 rounded-full bg-destructive'></span>
            <span>Only {REMAINING_SPOTS} bonus packages remaining</span>
          </div>
        </div>

        {/* Main Card */}
        <div className='flex flex-col md:flex-row items-stretch justify-between gap-8 bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-destructive/20'>
          <div className='flex-1 space-y-6'>
            {/* Early Bird Offer Banner */}
            <div className='bg-card/50 p-6 rounded-lg border border-primary/30'>
              <div className='flex items-center gap-3 mb-4'>
                <Gift className='w-5 h-5 text-primary' />
                <h3 className='text-xl font-semibold '>
                  Early Bird Bonus Package
                </h3>
              </div>
              <p className='text-base text-foreground/80 mb-4'>
                Lock in these exclusive bonuses worth $2,191 when you join
                before the timer ends:
              </p>
              <div className='space-y-3'>
                {BONUS_FEATURES.map((bonus, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-3 text-base'
                  >
                    <div className='bg-primary/20 p-1.5 rounded-full'>
                      <Check className='w-4 h-4 text-primary' />
                    </div>
                    <span className='text-foreground'>{bonus}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center gap-8 md:border-l md:border-destructive/20 md:pl-8'>
            <div className='flex items-center gap-2'>
              <Timer className='w-10 h-10 text-destructive' />
              <div className='flex gap-2'>
                <TimeUnit value={timeLeft.days} label='days' />
                <TimeUnit value={timeLeft.hours} label='hours' />
                <TimeUnit value={timeLeft.minutes} label='min' />
                <TimeUnit value={timeLeft.seconds} label='sec' />
              </div>
            </div>

            <ShimmerButton
              size='big'
              variant='solid'
              className='group bg-destructive hover:bg-red-700 px-6 hover:shadow-destructive/1s0'
            >
              Claim Your Bonus Package{' '}
              <ArrowRight className='size-4 group-hover:translate-x-1 transition-transform duration-300 ease-in-out' />
            </ShimmerButton>
          </div>
        </div>

        {/* Restrictions Section */}
        <div className='mt-8 flex justify-center gap-6'>
          {restrictions.map((restriction, index) => (
            <div
              key={index}
              className='flex items-center gap-3 text-base text-foreground bg-card/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-primary/20'
            >
              <div className='bg-primary/20 p-2 rounded-full'>
                <Check className='w-4 h-4 text-primary' />
              </div>
              <span>{restriction.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
