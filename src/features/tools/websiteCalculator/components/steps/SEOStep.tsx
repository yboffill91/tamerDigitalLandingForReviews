'use client';

import { useEffect } from 'react';
import { seoPlugins } from '@/features/tools/websiteCalculator/utils/data/Seo.const';
import {
  PluginData,
  usePluginStep,
} from '@/features/tools/websiteCalculator/utils/hooks/usePluginHook';
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
    <PluginStepLayout
      priceSummary={
        formData.purpose === 'client' && (
          <PluginPriceSummary
            title="Total SEO Setup Cost"
            price={getPluginPrice()}
            description="Includes professional setup, configuration, and optimization"
          />
        )
      }
      footer={
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
      }
    >
      {seoPlugins.map((plugin: PluginData) => (
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
