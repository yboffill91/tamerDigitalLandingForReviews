'use client';
import { Steps } from '@/features/tools/websiteCalculator/utils';
import { StepIndicator } from './stepIndicator';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export const StepsWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const currentStep = Steps.filter(({ link }) => link === pathname);
  const title = currentStep[0].title;
  const description = currentStep[0].description;
  return (
    <div className="container mt-48 mx-auto">
      <StepIndicator steps={Steps} />
      <section className="container mx-auto rounded-lg border border-foreground/20 bg-card p-8 mt-4 mb-24">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="p-4 flex flex-col gap-4 w-full">{children}</div>
      </section>
    </div>
  );
};
