'use client';
import React, { useState } from 'react';
import {
  Users,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  Calculator,
  Circle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BorderBeam, ShimmerButton } from '@/components/ui';

export const SalesFunnelCard = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [investment, setInvestment] = useState(5000);
  const minInvestment = 1000;
  const maxInvestment = 10000;

  // Real world metrics
  const realMetrics = {
    visitors: 15000,
    leads: 4500,
    sales: 750,
    averageROI: 285,
    projectedRevenue: 187500,
  };

  // Calculate ROI based on investment
  const calculateROI = (amount: number) => {
    const baseROI = 2.85;
    const scaleFactor =
      1 + ((amount - minInvestment) / (maxInvestment - minInvestment)) * 0.5;
    return baseROI * scaleFactor;
  };

  const roi = calculateROI(investment);
  const projectedReturn = investment * roi;

  const funnelStages = [
    {
      label: 'Visitors',
      value: Math.round(investment * 2),
      percentage: '100%',
      icon: Users,
    },
    {
      label: 'Leads',
      value: Math.round(investment * 0.7),
      percentage: '35%',
      icon: ShoppingCart,
    },
    {
      label: 'Sales',
      value: Math.round(investment * 0.175),
      percentage: '17.5%',
      icon: DollarSign,
    },
  ];

  return (
    <div className="relative w-full h-full p-6 rounded-lg bg-card border border-foreground/20 overflow-hidden">
      {/* Static View */}
      <AnimatePresence mode="wait">
        {!showCalculator ? (
          <motion.div
            key="static"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-20"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-ring/10">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground/80">
                    Funnel Performance
                  </h3>
                </div>
              </div>
              <ShimmerButton
                variant="solid"
                onClick={() => setShowCalculator(true)}
                className=" text-primary-foreground hover:text-foreground/80  hover:bg-primary bg-primary px-2 relative"
              >
                <Calculator className="w-5 h-5 " />
                <BorderBeam colorFrom="#fff" />
              </ShimmerButton>
            </div>

            <div className="space-y-6 mb-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-ring/10">
                  <Users className="w-6 h-6 text-primary mb-2" />
                  <div className="text-sm text-foreground/80">
                    Monthly Visitors
                  </div>
                  <div className="text-xl font-bold ">
                    {realMetrics.visitors.toLocaleString()}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-ring/10">
                  <ShoppingCart className="w-6 h-6 text-primary mb-2" />
                  <div className="text-sm text-foreground/80">
                    Qualified Leads
                  </div>
                  <div className="text-xl font-bold ">
                    {realMetrics.leads.toLocaleString()}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-ring/10">
                  <DollarSign className="w-6 h-6 text-primary mb-2" />
                  <div className="text-sm text-foreground/80">
                    Monthly Sales
                  </div>
                  <div className="text-xl font-bold ">
                    {realMetrics.sales.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-ring/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-foreground/80">
                    Average ROI
                  </span>
                  <span className="text-lg font-bold text-primary">
                    +{realMetrics.averageROI}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/80">
                    Monthly Revenue
                  </span>
                  <span className="text-lg font-bold ">
                    ${realMetrics.projectedRevenue.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="calculator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-20"
          >
            {/* Calculator View */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-ring/10">
                  <Calculator className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground/80">
                    ROI Calculator
                  </h3>
                  <p className="text-xs text-foreground/60">
                    Estimate your returns
                  </p>
                </div>
              </div>
              <ShimmerButton
                onClick={() => setShowCalculator(false)}
                variant="solid"
              >
                Back
              </ShimmerButton>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm text-foreground/80 mb-2">
                <span>Investment Amount</span>
                <span>${investment.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={minInvestment}
                max={maxInvestment}
                value={investment}
                onChange={e => setInvestment(Number(e.target.value))}
                className="w-full h-2 bg-ring/10 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer"
              />
            </div>

            <div className="space-y-3 mb-6">
              {funnelStages.map((stage, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div
                    className="relative p-2 rounded-lg bg-ring/10 transition-all duration-300 hover:bg-[#333333]"
                    style={{
                      width: `${100 - index * 15}%`,
                      marginLeft: `${index * 7.5}%`,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground/90">
                        {stage.label}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium ">
                          ${stage.value.toLocaleString()}
                        </span>
                        <span className="text-xs text-primary">
                          {stage.percentage}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-3 rounded-lg bg-ring/10">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-foreground/80">
                    Projected Return
                  </div>
                  <div className="text-xl font-bold ">
                    ${Math.round(projectedReturn).toLocaleString()}
                  </div>
                </div>
                <ShimmerButton variant="solid">
                  Get Started
                  <Circle className="text-primary-foreground size-3 fill-ring/50" />
                </ShimmerButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
