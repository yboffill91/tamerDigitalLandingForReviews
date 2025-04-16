'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Step } from '@/features/tools/websiteCalculator/utils';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

interface StepIndicatorProps {
  steps: Step[];
}

export function StepIndicator({ steps }: StepIndicatorProps) {
  const pathname = usePathname();
  const currentStep = steps.filter(({ link }) => link === pathname);
  const currentStepNumber = currentStep[0].step;
  const currentStepLink = currentStep[0].link;
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            {steps
              .filter(step => step.link === pathname)
              .map(({ step, label }, index) => (
                <span key={index} className="flex flex-col ">
                  {step < 14 ? (
                    <div className="p-2 rounded-lg bg-ring/5">
                      <p className="flex items-center ">
                        <span className="font-black mr-2"> Step: </span> {step}{' '}
                        <ChevronRight className="size-4" /> {steps.length - 1}
                      </p>
                      <h3>{label}</h3>
                    </div>
                  ) : (
                    <p className="p-2 rounded-lg bg-ring/5">Summary</p>
                  )}
                </span>
              ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 pr-4 justify-end w-full md:w-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Link
                key={index}
                href={step.link}
                className={cn(
                  'w-10 h-10 rounded-lg flex items-center justify-center transition-all cursor-pointer hover:scale-105',
                  currentStepLink === step.link
                    ? 'bg-ring/20 shadow-md border-b-2 border-ring shadow-primary/20 pointer-events-none text-ring'
                    : currentStepNumber - 1 < index
                      ? 'bg-card/70 pointer-events-none text-foreground/20'
                      : 'bg-secondary/20 text-secondary'
                )}
              >
                <Icon className={`w-4 h-4`} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
