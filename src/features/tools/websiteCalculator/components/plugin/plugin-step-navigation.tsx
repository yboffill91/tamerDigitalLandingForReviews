'use client';

import { Button } from '@/features/tools/websiteCalculator/components';

interface PluginStepNavigationProps {
  onBack: () => void;
  onNext: () => void;
  isNextDisabled?: boolean;
}

export function PluginStepNavigation({
  onBack,
  onNext,
  isNextDisabled = false,
}: PluginStepNavigationProps) {
  return (
    <div className="flex justify-end gap-3">
      <Button variant="outline" onClick={onBack}>
        Go Back
      </Button>
      <Button
        onClick={onNext}
        className="bg-blue-600 hover:bg-blue-700"
        disabled={isNextDisabled}
      >
        Next Step
      </Button>
    </div>
  );
}
