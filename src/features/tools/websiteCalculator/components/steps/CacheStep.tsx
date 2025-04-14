'use client';

import { useEffect } from 'react';
import { cachePlugins } from '@/features/tools/websiteCalculator/utils/data/Cache.const';
import { usePluginStep } from '@/features/tools/websiteCalculator/utils/hooks/usePluginHook';
import { usePlugins } from '@/features/tools/websiteCalculator/utils/hooks/useCalculatorHooks';
import { ShimmerButton } from '@/components/ui';
import { useRouter } from 'next/navigation';
import {
  PluginCard,
  PluginFeatureList,
  PluginPriceSummary,
  PluginStepLayout,
  PluginVersionOption,
} from '@/features/tools/websiteCalculator/components/plugin';

export function WebCalcCacheStep() {
  // Get the cache plugin from the store
  const { cache, updatePlugin } = usePlugins();
  const router = useRouter();

  // Initialize the plugin step hook with the current store values
  const {
    selectedPlugin,
    selectedVersion,
    handleSelection,
    getPluginPrice,
    formData,
  } = usePluginStep('cache', cachePlugins, cache.name, cache.version);

  // Update the store when selection changes
  useEffect(() => {
    if (selectedPlugin && selectedVersion) {
      const price = getPluginPrice();
      updatePlugin('cache', {
        name: selectedPlugin,
        version: selectedVersion,
        price,
      });
    }
  }, [selectedPlugin, selectedVersion, updatePlugin, getPluginPrice]);

  return (
    <PluginStepLayout
      title="Cache & Optimization"
      description="Choose a caching and optimization plugin to improve your website's performance. Each option offers different features for speed optimization and user experience."
      priceSummary={
        formData.purpose === 'client' && (
          <PluginPriceSummary
            title="Total Cache & Optimization Setup Cost"
            price={getPluginPrice()}
            description="Includes professional setup, configuration, and performance optimization"
          />
        )
      }
      footer={
        <div className="flex justify-center items-center gap-6 w-full mt-12">
          <ShimmerButton
            variant="ghost"
            size="big"
            onClick={() => router.push('/website-calculator/analyticsStep')}
          >
            Back
          </ShimmerButton>
          <ShimmerButton
            variant="solid"
            size="big"
            onClick={() => router.push('/website-calculator/formsStep')}
            className={`${cache.name ? '' : 'hidden'}`}
          >
            Next
          </ShimmerButton>
        </div>
      }
    >
      {cachePlugins.map(plugin => (
        <PluginCard
          key={plugin.name}
          name={plugin.name}
          description={plugin.description}
          isSelected={selectedPlugin === plugin.name}
          setupFee={plugin.setupFee}
          showClientPricing={formData.purpose === 'client'}
        >
          {plugin.free ? (
            <PluginVersionOption
              title="Free Version"
              price={0}
              isSelected={
                selectedPlugin === plugin.name && selectedVersion === 'free'
              }
              onClick={() => handleSelection(plugin.name, 'free')}
            >
              <PluginFeatureList
                features={plugin.features.free || []}
                color="green"
              />
            </PluginVersionOption>
          ) : (
            <PluginVersionOption
              title="Free Version"
              price={0}
              isSelected={false}
              onClick={() => {}}
              isPremiumOnly
            />
          )}

          <PluginVersionOption
            title={plugin.free ? 'Premium Version' : 'Premium Only Version'}
            price={
              formData.purpose === 'client'
                ? (plugin.prices.premium * 1.3).toFixed(2) + '/year'
                : plugin.prices.premium + '/year'
            }
            isSelected={
              selectedPlugin === plugin.name && selectedVersion === 'premium'
            }
            onClick={() => handleSelection(plugin.name, 'premium')}
          >
            <PluginFeatureList
              features={plugin.features.premium}
              color="blue"
            />
          </PluginVersionOption>
        </PluginCard>
      ))}
    </PluginStepLayout>
  );
}
