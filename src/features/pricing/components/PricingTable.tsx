'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Calendar, Clock } from 'lucide-react';
import { cn } from '@/lib';
import { personalPlans } from '@/features/pricing/utils';
import { ShimmerButton } from '@/components/ui';

const calculateYearlyPrice = (monthlyPrice: number): number => {
  if (monthlyPrice === 0) return 0;
  return parseFloat(monthlyPrice.toFixed(2));
};

const yearlyPlans = personalPlans.map((plan) => ({
  ...plan,
  price: calculateYearlyPrice(plan.price),
  billing: '/year',
}));

export function PricingTable({
  isScrolled = false,
}: {
  className?: string;
  isScrolled?: boolean;
}) {
  const [isMonthly, setIsMonthly] = useState(true);
  const [currentPlans, setCurrentPlans] = useState(personalPlans);

  const handlePlanChange = (monthly: boolean) => {
    setIsMonthly(monthly);
    setCurrentPlans(monthly ? personalPlans : yearlyPlans);
  };

  const getYearlyPrice = (monthlyPrice: number): number => {
    return monthlyPrice * 12 * 0.8;
  };

  return (
    <div
      className={cn(
        'w-full transition-all duration-300 overflow-hidden',
        isScrolled ? 'py-4' : 'py-12'
      )}
    >
      <div className='w-full max-w-7xl mx-auto px-4 '>
        {/* Toggle buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(
            'flex justify-center transition-all duration-300',
            isScrolled ? 'mb-4' : 'mb-12'
          )}
        >
          <div className='relative inline-flex items-center rounded-full border border-ring/10 p-1 bg-[#121212]'>
            <button
              onClick={() => handlePlanChange(true)}
              className={cn(
                'relative rounded-full px-3 py-1.5 text-sm font-medium outline-2 outline-sky-400 transition focus-visible:outline',
                isMonthly
                  ? 'text-gray-950 bg-secondary'
                  : 'text-foreground/90 hover:text-foreground/90'
              )}
            >
              <Clock className='w-4 h-4 mr-2 inline-block' />
              Monthly
            </button>
            <button
              onClick={() => handlePlanChange(false)}
              className={cn(
                'relative rounded-full px-3 py-1.5 text-sm font-medium outline-2 outline-sky-400 transition focus-visible:outline',
                !isMonthly
                  ? 'text-foreground bg-primary'
                  : 'text-white hover:text-white/80'
              )}
            >
              <Calendar className='w-4 h-4 mr-2 inline-block' />
              Yearly
            </button>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className='relative grid grid-cols-1 md:grid-cols-3 gap-2 '>
          {currentPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={cn(
                'relative overflow-hidden rounded-2xl  transition-all duration-300 min-h-[800px] border border-ring/10',
                plan.popular
                  ? ' md:-mt-10 md:mb-5 bg-gradient-to-br from-primary/10 to-secondary/10 md:z-40 p-4 '
                  : ' bg-card/30 z-30 md:p-8 p-4  ',
                isScrolled ? 'transform-gpu' : ''
              )}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className='absolute top-5 right-5'>
                  <span className='p-px rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center'>
                    <span className='inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium '>
                      Most Popular
                    </span>
                  </span>
                </div>
              )}

              {/* Header section - Siempre visible */}
              <div>
                <h3 className='text-2xl font-bold text-foreground mb-2'>
                  {plan.name}
                </h3>
                <p className='text-base text-foreground/80 mb-4'>
                  {plan.description}
                </p>
                <div className='flex items-baseline gap-x-2 mb-6'>
                  <AnimatePresence mode='wait'>
                    <motion.span
                      key={isMonthly ? 'monthly' : 'yearly'}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className='text-4xl font-bold tracking-tight text-foreground'
                    >
                      {plan.price === 0
                        ? 'Free'
                        : isMonthly
                        ? `$${plan.price.toFixed(2)}`
                        : `$${getYearlyPrice(plan.price).toFixed(2)}`}
                    </motion.span>
                  </AnimatePresence>
                  {plan.price !== 0 && (
                    <span className='text-sm text-foreground/80'>
                      {isMonthly ? '/mo' : '/yr'}
                    </span>
                  )}
                </div>

                {plan.price !== 0 && !isMonthly && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className='text-sm text-primary mt-2'
                  >
                    Save $
                    {(plan.price * 12 - getYearlyPrice(plan.price)).toFixed(2)}{' '}
                    per year
                  </motion.p>
                )}

                <ShimmerButton
                  variant={plan.popular ? 'solid' : 'outline'}
                  className='w-full'
                >
                  {plan.buttonText}
                </ShimmerButton>
              </div>

              {/* Features sections - Se ocultan al scroll */}
              <div
                className={cn(
                  'space-y-6 mt-8 transition-all duration-300',
                  isScrolled
                    ? 'h-0 opacity-0 overflow-hidden'
                    : 'h-auto opacity-100'
                )}
              >
                {plan.features.map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + sectionIndex * 0.1,
                    }}
                  >
                    <h4 className='text-lg font-semibold text-foreground mb-4'>
                      {section.title}
                    </h4>
                    <ul className='space-y-3'>
                      {section.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.4 + i * 0.05 }}
                          className='flex items-center gap-3'
                        >
                          <Check className='size-5 p-px text-foreground bg-gradient-to-br from-primary to-secondary rounded-full ' />
                          <span className='text-sm text-foreground/70'>
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
