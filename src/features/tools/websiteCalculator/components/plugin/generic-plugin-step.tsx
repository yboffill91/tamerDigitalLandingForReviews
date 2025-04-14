'use client';

import { useEffect } from 'react';
import {
  PluginData,
  usePluginStep,
  usePlugins,
} from '@/features/tools/websiteCalculator/utils';
import {
  PluginStepLayout,
  PluginPriceSummary,
  PluginCard,
  PluginVersionOption,
  PluginFeatureList,
  PluginStepNavigation,
} from './';

interface GenericPluginStepProps {
  pluginType:
    | 'security'
    | 'seo'
    | 'backup'
    | 'analytics'
    | 'cache'
    | 'forms'
    | 'antispam'
    | 'multilingual'
    | 'ecommerce';
  plugins: PluginData[];
  priceSummaryTitle: string;
  priceSummaryDescription: string;
  onNext: () => void;
  onBack: () => void;
}

export function GenericPluginStep({
  pluginType,
  plugins,
  priceSummaryTitle,
  priceSummaryDescription,
  onNext,
  onBack,
}: GenericPluginStepProps) {
  // Get the plugin from the store
  const { getPlugin, updatePlugin } = usePlugins();
  const plugin = getPlugin(pluginType);

  // Initialize the plugin step hook with the current store values
  const {
    selectedPlugin,
    selectedVersion,
    handleSelection,
    getPluginPrice,
    formData,
  } = usePluginStep(
    pluginType,
    plugins,
    plugin?.name || null,
    plugin?.version || null
  );

  // Update the store when selection changes
  useEffect(() => {
    if (selectedPlugin && selectedVersion) {
      const price = getPluginPrice();
      updatePlugin(pluginType, {
        name: selectedPlugin,
        version: selectedVersion,
        price,
      });
    }
  }, [
    selectedPlugin,
    selectedVersion,
    updatePlugin,
    getPluginPrice,
    pluginType,
  ]);

  return (
    <PluginStepLayout
      priceSummary={
        formData.purpose === 'client' && (
          <PluginPriceSummary
            title={priceSummaryTitle}
            price={getPluginPrice()}
            description={priceSummaryDescription}
          />
        )
      }
      footer={
        <PluginStepNavigation
          onBack={onBack}
          onNext={onNext}
          isNextDisabled={!selectedPlugin || !selectedVersion}
        />
      }
    >
      {plugins.map(plugin => (
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
