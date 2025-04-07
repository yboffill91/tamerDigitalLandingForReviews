'use client';

import React, { useState, useEffect } from 'react';
import { steps } from '@/features/services/offPageSeo/utils';
import { StepCard } from '@/features/services/offPageSeo/components/ui';
import { Factory } from 'lucide-react';
import { LeadingSection } from '@/features/services/components';

export const StepByStepSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  // Progress and auto-advance for active step
  useEffect(() => {
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 1;
      });
    }, 100);

    const stepInterval = setInterval(() => {
      setActiveStep((current) => (current % 3) + 1);
      setProgress(0);
    }, 10000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [activeStep]);

  return (
    <div className='relative w-full  overflow-hidden'>
      <div className='relative max-w-6xl mx-auto px-4'>
        <LeadingSection
          badgeText='Your Path to Digital Success'
          description='A transparent, streamlined process to transform your digital presence without complications. Experience a simple, clear, and proven methodology designed to build your confidence at every stage.'
          heading='3-Step Action Plan'
          icon={Factory}
        />

        {/* Interactive cards container with perspective effect */}

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 perspective pb-8 transition-all duration-500 ease-in-out'>
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isActive={parseInt(step.number) === activeStep}
              progress={progress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
