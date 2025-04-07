import { PluginData } from '..';

export const multilingualPlugins: PluginData[] = [
  {
    name: 'WPML',
    description: 'The most comprehensive multilingual solution for WordPress',
    setupFee: 200,
    free: false,
    prices: {
      premium: 79,
    },
    features: {
      premium: [
        'Complete translation management',
        '100+ languages support',
        'SEO-friendly URLs',
        'Translation memory',
        'Advanced language switcher',
        'WooCommerce integration',
        'Professional translation services',
        'Custom post types support',
      ],
    },
  },
  {
    name: 'Polylang',
    description: 'Popular free multilingual plugin with premium features',
    setupFee: 150,
    free: true,
    prices: {
      free: 0,
      premium: 99,
    },
    features: {
      free: [
        'Unlimited languages',
        'Basic content translation',
        'Basic media translation',
        'Language switcher',
        'RTL language support',
      ],
      premium: [
        'Advanced media translation',
        'Custom post types & taxonomies',
        'Language synchronization',
        'Multiple domains support',
        'SEO optimization',
      ],
    },
  },
  {
    name: 'TranslatePress',
    description:
      'User-friendly visual translation editor with automatic translation options',
    setupFee: 180,
    free: true,
    prices: {
      free: 0,
      premium: 89,
    },
    features: {
      free: [
        'Visual translation editor',
        'Manual translations',
        'Basic language switcher',
        'Language switcher',
        'Translation memory',
      ],
      premium: [
        'Unlimited languages',
        'Automatic translation API',
        'SEO translations',
        'DeepL & Google Translate',
        'Advanced language switcher',
      ],
    },
  },
  {
    name: 'Weglot',
    description:
      'Cloud-based translation service with machine learning capabilities',
    setupFee: 250,
    free: false,
    prices: {
      premium: 199,
    },
    features: {
      premium: [
        '50,000 words included',
        'Machine learning translations',
        'Visual translation editor',
        'SEO optimization',
        '100+ languages',
        'Custom language switcher',
        'Team collaboration tools',
        'Analytics & monitoring',
      ],
    },
  },
  {
    name: 'MultilingualPress Pro',
    description: 'Professional multisite-based multilingual solution',
    setupFee: 180,
    free: true,
    prices: {
      free: 0,
      premium: 179,
    },
    features: {
      free: [
        'Multisite support',
        'Basic translations',
        'Language relationships',
        'Basic redirections',
        'Simple language switcher',
      ],
      premium: [
        'Advanced translations',
        'Quick language switcher',
        'SEO optimization',
        'Taxonomy translations',
        'Professional support',
      ],
    },
  },
];
