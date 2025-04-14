'use client';

import { useEffect } from 'react';
import {
  usePlugins,
  usePluginStep,
  multilingualPlugins,
} from '@/features/tools/websiteCalculator/utils';
import { useRouter } from 'next/navigation';
import { ShimmerButton } from '@/components/ui';
import {
  PluginCard,
  PluginFeatureList,
  PluginPriceSummary,
  PluginStepLayout,
  PluginVersionOption,
} from '@/features/tools/websiteCalculator/components/plugin';

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
    <PluginStepLayout
      title="Multilingual Support"
      description="Choose a multilingual plugin to make your website available in multiple languages. Each option offers different features for translation management and language switching."
      priceSummary={
        formData.purpose === 'client' && (
          <PluginPriceSummary
            title="Total Multilingual Setup Cost"
            price={getPluginPrice()}
            description="Includes professional setup, configuration, and initial translations setup"
          />
        )
      }
      footer={
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
      }
    >
      {multilingualPlugins.map(plugin => (
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
