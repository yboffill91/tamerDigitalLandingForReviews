'use client';

import { useState } from 'react';
import { useFormData } from './useCalculatorHooks';
import type { VersionType } from '@/store';

export interface PluginData {
  name: string;
  description: string;
  setupFee: number;
  free: boolean;
  prices: {
    free?: number;
    premium: number;
  };
  features: {
    free?: string[];
    premium: string[];
  };
}

export function usePluginStep(
  pluginType:
    | 'security'
    | 'seo'
    | 'backup'
    | 'analytics'
    | 'cache'
    | 'forms'
    | 'antispam'
    | 'multilingual'
    | 'ecommerce',
  plugins: PluginData[],
  initialPlugin: string | null = null,
  initialVersion: VersionType | null = null
) {
  const { formData } = useFormData();
  const [selectedPlugin, setSelectedPlugin] = useState<string | null>(
    initialPlugin
  );
  const [selectedVersion, setSelectedVersion] = useState<VersionType | null>(
    initialVersion
  );

  // Calculate the plugin price based on selection and purpose
  const getPluginPrice = () => {
    if (!selectedPlugin || !selectedVersion) return 0;

    const plugin = plugins.find(p => p.name === selectedPlugin);
    if (!plugin) return 0;

    const basePrice = selectedVersion === 'premium' ? plugin.prices.premium : 0;

    if (formData.purpose === 'client') {
      return (basePrice + plugin.setupFee) * 1.3;
    }

    return basePrice;
  };

  // Handle plugin selection
  const handleSelectPlugin = (pluginName: string) => {
    setSelectedPlugin(pluginName);
  };

  // Handle version selection
  const handleSelectVersion = (version: VersionType) => {
    setSelectedVersion(version);
  };

  // Combined handler for selecting both plugin and version
  const handleSelection = (pluginName: string, version: VersionType) => {
    setSelectedPlugin(pluginName);
    setSelectedVersion(version);
  };

  return {
    selectedPlugin,
    selectedVersion,
    setSelectedPlugin: handleSelectPlugin,
    setSelectedVersion: handleSelectVersion,
    handleSelection,
    getPluginPrice,
    formData,
  };
}
