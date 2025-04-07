'use client';

import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import {
  usePlugins,
  usePluginStep,
  multilingualPlugins,
} from '@/features/tools/websiteCalculator/utils';
import { useRouter } from 'next/navigation';
import { ShimmerButton } from '@/components/ui';

export function WebCalcMultiLingulStep() {
  // Get the antispam plugin from the store
  const { multilingual, updatePlugin } = usePlugins();
  const router = useRouter();

  // Initialize the plugin step hook with the current store values
  const {
    selectedPlugin,
    selectedVersion,
    handleSelection,
    getPluginPrice,
    formData,
  } = usePluginStep(
    'multilingual',
    multilingualPlugins,
    multilingual.name,
    multilingual.version
  );

  // Update the store when selection changes
  useEffect(() => {
    if (selectedPlugin && selectedVersion) {
      const price = getPluginPrice();
      updatePlugin('multilingual', {
        name: selectedPlugin,
        version: selectedVersion,
        price,
      });
    }
  }, [selectedPlugin, selectedVersion, updatePlugin, getPluginPrice]);

  return (
    <div>
      {formData.purpose === 'client' && (
        <div className="bg-gradient-to-br from-primry/10 to-ring/20 border border-ring rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-primary mb-2">
            Total Multilingual Plugin Cost
          </h3>
          <p className="text-3xl font-bold ">${getPluginPrice().toFixed(2)}</p>
          <p className="text-sm text-primary mt-2">
            Includes professional setup, configuration, and optimization
          </p>
        </div>
      )}

      <div className="grid gap-6">
        {multilingualPlugins.map(plugin => (
          <div
            key={plugin.name}
            className={cn(
              'rounded-lg border-2 transition-all',
              selectedPlugin === plugin.name
                ? 'border-primry bg-ring/10'
                : 'border-foreground/20'
            )}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{plugin.name}</h3>
                  <p className="text-foregrpund/80">{plugin.description}</p>
                </div>
                {formData.purpose === 'client' && (
                  <div className="text-right">
                    <div className="text-xl font-bold text-primry">
                      Setup Fee: ${plugin.setupFee}
                    </div>
                    <div className="text-sm text-foregrpund/80">
                      One-time professional setup
                    </div>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {plugin.free ? (
                  <div
                    onClick={() => handleSelection(plugin.name, 'free')}
                    className={cn(
                      'rounded-lg border-2 p-4 cursor-pointer transition-all',
                      selectedPlugin === plugin.name &&
                        selectedVersion === 'free'
                        ? 'border-primry bg-ring/10'
                        : 'border-foreground/20 hover:border-primary'
                    )}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-semibold">Free Version</h4>
                      <span className="text-xl font-bold">$0</span>
                    </div>
                    <ul className="space-y-2">
                      {plugin.features.free?.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-secondary-green rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="rounded-lg border-2 border-foreground/20 p-4 bg-ring/10">
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <span className="inline-block px-3 py-1 bg-ring text-primary rounded-full text-sm font-medium mb-2">
                          Premium Only Plugin
                        </span>
                        <p className="text-foregrpund/80 text-sm">
                          This plugin is only available in Premium version
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div
                  onClick={() => handleSelection(plugin.name, 'premium')}
                  className={cn(
                    'rounded-lg border-2 p-4 cursor-pointer transition-all',
                    selectedPlugin === plugin.name &&
                      selectedVersion === 'premium'
                      ? 'border-primry bg-ring/10 shadow-lg'
                      : 'border-foreground/20 hover:border-primary',
                    plugin.free ? '' : 'md:col-span-2'
                  )}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold">
                      {plugin.free ? 'Premium Version' : 'Premium Only Version'}
                    </h4>
                    <span className="text-xl font-bold">
                      $
                      {formData.purpose === 'client'
                        ? (plugin.prices.premium * 1.3).toFixed(2)
                        : plugin.prices.premium}
                      /year
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {plugin.features.premium?.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-6 w-full mt-12">
        <ShimmerButton
          variant="ghost"
          size="big"
          onClick={() => router.push('/website-calculator/antispamStep')}
        >
          Back
        </ShimmerButton>
        <ShimmerButton
          variant="solid"
          size="big"
          onClick={() => router.push('/website-calculator/ecommerceStep')}
          className={`${multilingual.price ? '' : 'hidden'}`}
        >
          Next
        </ShimmerButton>
      </div>
    </div>
  );
}
