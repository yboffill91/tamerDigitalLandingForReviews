// Importar el tipo PluginData para asegurar compatibilidad
import type { PluginData } from '@/features/tools/websiteCalculator/utils/hooks/usePluginHook';

// Usar directamente el tipo PluginData
export type SEOPlugin = PluginData;

export const seoPlugins: SEOPlugin[] = [
  {
    name: 'Yoast SEO',
    description:
      'The most comprehensive SEO solution with advanced features and analytics',
    setupFee: 100,
    free: true,
    prices: {
      free: 0,
      premium: 99,
    },
    features: {
      free: [
        'Basic keyword optimization',
        'Meta description editor',
        'XML sitemaps',
        'Basic schema markup',
        'Content analysis',
      ],
      premium: [
        'Multiple keyword optimization',
        'Internal linking suggestions',
        'Content insights',
        'Redirect manager',
        '24/7 support',
      ],
    },
  },
  {
    name: 'Rank Math',
    description:
      'Feature-rich SEO plugin with powerful analytics and schema integration',
    setupFee: 120,
    free: true,
    prices: {
      free: 0,
      premium: 129,
    },
    features: {
      free: [
        'Unlimited keywords',
        'Google Search Console integration',
        'Rich snippets',
        'Local SEO',
        'Basic analytics',
      ],
      premium: [
        'Advanced analytics',
        'Schema generator',
        'News SEO',
        'Local SEO pack',
        'Priority support',
      ],
    },
  },
  {
    name: 'SEOPress',
    description:
      'Professional SEO solution focused on performance and simplicity',
    setupFee: 90,
    free: true,
    prices: {
      free: 0,
      premium: 79,
    },
    features: {
      free: [
        'Content analysis',
        'Meta title & description',
        'Open Graph',
        'XML sitemap',
        'Google Analytics',
      ],
      premium: [
        'WooCommerce integration',
        'Structured data',
        'Broken link checker',
        'Advanced analytics',
        'White label',
      ],
    },
  },
  {
    name: 'Semrush SEO',
    description:
      'Enterprise-level SEO integration with advanced keyword research',
    setupFee: 200,
    free: false,
    prices: {
      premium: 199,
    },
    features: {
      premium: [
        'Keyword research integration',
        'Content optimization',
        'Position tracking',
        'Competitor analysis',
        'Technical SEO audit',
      ],
    },
  },
  {
    name: 'All in One SEO Pack',
    description: 'User-friendly SEO toolkit with comprehensive features',
    setupFee: 110,
    free: true,
    prices: {
      free: 0,
      premium: 99,
    },
    features: {
      free: [
        'SEO meta tags',
        'XML sitemap',
        'Social media integration',
        'robots.txt editor',
        'Basic schema',
      ],
      premium: [
        'Advanced schema markup',
        'Video sitemap',
        'WooCommerce support',
        'News SEO',
        'Priority support',
      ],
    },
  },
];
