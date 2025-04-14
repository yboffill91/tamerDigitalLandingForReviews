'use client';

import { useEffect } from 'react';
import { analyticsPlugins } from '@/features/tools/websiteCalculator/utils/data/Analitycs.const';
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

export function WebCalcAnalyticsStep() {
  const { analytics, updatePlugin } = usePlugins();

  const {
    selectedPlugin,
    selectedVersion,
    handleSelection,
    getPluginPrice,
    formData,
  } = usePluginStep(
    'analytics',
    analyticsPlugins,
    analytics.name,
    analytics.version
  );
  const router = useRouter();

  // Update the store when selection changes
  useEffect(() => {
    // Only update if both plugin and version are selected

    if (selectedPlugin && selectedVersion) {
      const price = getPluginPrice();
      updatePlugin('analytics', {
        name: selectedPlugin,
        version: selectedVersion,
        price,
      });
    }
  }, [selectedPlugin, selectedVersion, updatePlugin, getPluginPrice]);

  return (
    <PluginStepLayout
      title="Analytics Solution"
      description="Choose an analytics plugin to track and analyze your website's performance. Each option offers different features for visitor tracking and reporting."
      priceSummary={
        formData.purpose === 'client' && (
          <PluginPriceSummary
            title="Total Analytics Setup Cost"
            price={getPluginPrice()}
            description="Includes professional setup, configuration, and tracking implementation"
          />
        )
      }
      footer={
        <div className="flex justify-center items-center gap-6 w-full mt-12">
          <ShimmerButton
            variant="ghost"
            size="big"
            onClick={() => router.push('/website-calculator/backupStep')}
          >
            Back
          </ShimmerButton>
          <ShimmerButton
            variant="solid"
            size="big"
            onClick={() => router.push('/website-calculator/cacheStep')}
            className={`${analytics.name ? '' : 'hidden'}`}
          >
            Next
          </ShimmerButton>
        </div>
      }
    >
      {analyticsPlugins.map(plugin => (
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
