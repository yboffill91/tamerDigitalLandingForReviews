'use client';

import { useEffect } from 'react';
import { cn } from '@/lib';
import { seoPlugins } from '@/features/tools/websiteCalculator/utils/data/Seo.const';
import { usePluginStep } from '@/features/tools/websiteCalculator/utils/hooks/usePluginHook';
import { usePlugins } from '@/features/tools/websiteCalculator/utils/hooks/useCalculatorHooks';
import { ShimmerButton } from '@/components/ui';
import { useRouter } from 'next/navigation';

export function WebCalcSeoStep() {
  const { seo, updatePlugin } = usePlugins();
  const router = useRouter();
  const {
    selectedPlugin,
    selectedVersion,
    handleSelection,
    getPluginPrice,
    formData,
  } = usePluginStep('seo', seoPlugins, seo.name, seo.version);

  useEffect(() => {
    if (selectedPlugin && selectedVersion) {
      const price = getPluginPrice();

      // Comparar valores actuales con los del store para evitar actualizaciones innecesarias
      if (
        seo.name !== selectedPlugin ||
        seo.version !== selectedVersion ||
        seo.price !== price
      ) {
        updatePlugin('seo', {
          name: selectedPlugin,
          version: selectedVersion,
          price,
        });
      }
    }
  }, [selectedPlugin, selectedVersion, updatePlugin, getPluginPrice, seo]);

  return (
    <div>
      {formData.purpose === 'client' && (
        <div className="bg-gradient-to-br from-primary/10 to-ring/20 border border-ring rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-primary/80 mb-2">
            Total SEO Setup Cost
          </h3>
          <p className="text-3xl font-bold text-primary">
            ${getPluginPrice().toFixed(2)}
          </p>
          <p className="text-sm text-secondary/80 mt-2">
            Includes professional setup, configuration, and optimization
          </p>
        </div>
      )}

      <div className="grid gap-6">
        {seoPlugins.map(plugin => (
          <div
            key={plugin.name}
            className={cn(
              'rounded-lg border-2 transition-all',
              selectedPlugin === plugin.name
                ? 'border-primary bg-ring/20'
                : 'border-foreground/20'
            )}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{plugin.name}</h3>
                  <p className="text-foreground/20">{plugin.description}</p>
                </div>
                {formData.purpose === 'client' && (
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">
                      Setup Fee: ${plugin.setupFee}
                    </div>
                    <div className="text-sm text-foreground/20">
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
                        ? 'border-primary bg-ring/20'
                        : 'border-foreground/20 hover:border-primary/80'
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
                  <div className="rounded-lg border-2 border-foreground/20 p-4 bg-ring/20">
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <span className="inline-block px-3 py-1 bg-ring text-primary/60 rounded-full text-sm font-medium mb-2">
                          Premium Only Plugin
                        </span>
                        <p className="text-foreground/20 text-sm">
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
                      ? 'border-primary bg-ring/20 shadow-lg'
                      : 'border-foreground/20 hover:border-primary/80',
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
          onClick={() => router.push('/website-calculator/securityStep')}
        >
          Back
        </ShimmerButton>
        <ShimmerButton
          variant="solid"
          size="big"
          onClick={() => router.push('/website-calculator/backupStep')}
          className={`${seo.name ? '' : 'hidden'}`}
        >
          Next
        </ShimmerButton>
      </div>
    </div>
  );
}
