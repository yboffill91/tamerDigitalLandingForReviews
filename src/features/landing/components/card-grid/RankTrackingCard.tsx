'use client';
import React, { useState } from 'react';
import { Zap, Info } from 'lucide-react';
import { BorderBeam, ShimmerButton } from '@/components/ui';

export const RankTrackingCard = () => {
  const [showExplanation, setShowExplanation] = useState(false);
  const loadTime = 1.2;
  const conversionRate = 93.5;

  return (
    <div className="relative w-full h-full p-6 rounded-lg bg-card border border-foreground/20 overflow-hidden group">
      {/* Header */}
      <div className="relative flex items-center justify-between mb-6 z-20">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Zap className="text-primary w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground/80">
              Load Time Impact
            </h3>
            <p className="text-xs text-foreground/60">
              on Conversion Rate (CVR)
            </p>
          </div>
        </div>
        <ShimmerButton
          variant="outline"
          onClick={() => setShowExplanation(!showExplanation)}
          className=" text-primary-foreground hover:text-foreground/80  hover:bg-primary bg-primary px-2 relative"
        >
          <Info className=" w-5 h-5" />
          <BorderBeam colorFrom="#fff" />
        </ShimmerButton>
      </div>

      {/* Main Display */}
      <div className="relative flex flex-col items-center justify-center mt-8 mb-12 z-20">
        <div className="w-full space-y-6">
          {/* Metrics Display */}
          <div className="flex items-center justify-between">
            <div className="text-4xl font-bold text-primary">{loadTime}s</div>
            <div className="text-lg font-semibold text-primary">
              {conversionRate}% CVR
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full h-4 bg-primary/10 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-primary rounded-full"
              style={{ width: '16%' }}
            />
            {/* Time markers */}
            {[1, 2, 3, 4].map(mark => (
              <div
                key={mark}
                className="absolute top-0 bottom-0 w-px bg-foreground/60"
                style={{ left: `${(mark / 5) * 100}%` }}
              />
            ))}
          </div>

          {/* Labels */}
          <div className="flex justify-between text-xs text-foreground/80">
            <span>Fast</span>
            <span>Optimal</span>
            <span>Warning</span>
            <span>Critical</span>
            <span>Poor</span>
          </div>

          {/* Performance Message */}
          <div className="text-center">
            <div className="text-sm text-foreground/80">Performance Status</div>
            <div className="text-primary font-medium mt-1">
              Excellent Performance
            </div>
          </div>
        </div>
      </div>

      {/* Explanation Box */}
      {showExplanation && (
        <div className="absolute inset-0 bg-ring/10 backdrop-filter backdrop-blur-xl p-6 flex items-center justify-center z-30">
          <div className="bg-ring/10 border border-ring/50 rounded-xl p-6">
            <h4 className="text-foreground font-medium mb-4">
              CVR Explanation
            </h4>
            <p className="text-foreground/90 leading-relaxed">
              Conversion Rate (CVR) measures the percentage of website visitors
              who take a desired action. Our clients see an average 93.5%
              increase in CVR through optimized load times and improved user
              experience.
            </p>
            <ShimmerButton
              onClick={() => setShowExplanation(false)}
              variant="outline"
              className="px-4 text-foreground hover:text-foreground/80 mt-6 hover:bg-primary bg-primary absolute right-4 top-2"
            >
              X
            </ShimmerButton>
          </div>
        </div>
      )}
    </div>
  );
};
