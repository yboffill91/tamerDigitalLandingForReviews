'use client';

import { useState } from 'react';
import { useFormData, usePricing } from './useCalculatorHooks';
import { maintenancePlans } from '..';

export function useMaintenanceStep(initialPlan: string | null = null) {
  const { formData } = useFormData();
  const { setMaintenancePlan, setMaintenancePrice } = usePricing();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(initialPlan);

  // Get the price for a plan
  const getPlanPrice = (planName: string) => {
    const plan = maintenancePlans.find(p => p.name === planName);
    if (!plan) return 0;

    if (formData.purpose === 'client') {
      return plan.price * 1.3;
    }

    return plan.price;
  };

  // Handle plan selection
  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    const price = getPlanPrice(planName);
    setMaintenancePlan(planName);
    setMaintenancePrice(price);
  };

  return {
    selectedPlan,
    setSelectedPlan: handleSelectPlan,
    getPlanPrice,
    maintenancePlans,
    formData,
  };
}
