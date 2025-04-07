'use client';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useMaintenanceStep } from '@/features/tools/websiteCalculator/utils';
import { maintenancePlans } from '@/features/tools/websiteCalculator/utils/data/Maintenance.const';
import { ShimmerButton } from '@/components/ui';
import { useRouter } from 'next/navigation';

export function WebCalcMaintenanceStep() {
  // Use the maintenance step hook
  const { selectedPlan, setSelectedPlan, getPlanPrice } = useMaintenanceStep();
  const router = useRouter();

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6">
        {maintenancePlans.map(plan => (
          <div
            key={plan.name}
            onClick={() => setSelectedPlan(plan.name)}
            className={cn(
              'rounded-lg border-2 p-6 cursor-pointer transition-all',
              selectedPlan === plan.name
                ? 'border-primary bg-[ring/20 shadow-lg'
                : 'border-foreground/20 hover:border-primary'
            )}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-primary">
                ${getPlanPrice(plan.name).toFixed(2)}/mo
              </div>
              <p className="text-foregrounf/80 mt-2">{plan.description}</p>
            </div>

            <div className="space-y-4">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-6 w-full mt-12">
        <ShimmerButton
          variant="ghost"
          size="big"
          onClick={() => router.push('/website-calculator/ecommerceStep')}
        >
          Back
        </ShimmerButton>
        <ShimmerButton
          variant="solid"
          size="big"
          onClick={() => router.push('/website-calculator/finalReviewStep')}
          className={`${!selectedPlan ? 'hidden' : ''}`}
        >
          Next
        </ShimmerButton>
      </div>
    </div>
  );
}
