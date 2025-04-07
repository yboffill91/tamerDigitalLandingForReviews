import { PluginData } from '..';

export const analyticsPlugins: PluginData[] = [
  {
    name: 'Google Analytics by MonsterInsights',
    description:
      'The most popular Google Analytics plugin with over 3 million active installations',
    setupFee: 150,
    free: true,
    prices: {
      free: 0,
      premium: 199,
    },
    features: {
      free: [
        'Universal Analytics & GA4 setup',
        'Real-time stats dashboard',
        'Basic eCommerce tracking',
        'Page/post tracking',
        'Simple event tracking',
      ],
      premium: [
        'Advanced eCommerce tracking',
        'Custom dimensions & metrics',
        'Form conversion analytics',
        'Affiliate link tracking',
        'Author/category tracking',
      ],
    },
  },
  {
    name: 'Google Site Kit',
    description:
      'Official Google plugin for WordPress with integrated Search Console and Analytics',
    setupFee: 130,
    free: true,
    prices: {
      free: 0,
      premium: 120,
    },
    features: {
      free: [
        'Google Analytics integration',
        'Search Console integration',
        'PageSpeed Insights',
        'AdSense connection',
        'Unified dashboard',
      ],
      premium: [
        'Advanced Analytics features',
        'Enhanced Search data',
        'Custom reporting',
        'Team management',
        'Priority support',
      ],
    },
  },
  {
    name: 'Jetpack Stats',
    description:
      "WordPress.com's official analytics solution with real-time stats",
    setupFee: 180,
    free: true,
    prices: {
      free: 0,
      premium: 199,
    },
    features: {
      free: [
        'Basic statistics',
        'Traffic sources',
        'Post/page views',
        'Referrer tracking',
        'Mobile app',
      ],
      premium: [
        'Detailed statistics',
        'Advanced filters',
        'Search engine tracking',
        'Video plays tracking',
        'Ad-free experience',
      ],
    },
  },
  {
    name: 'Matomo Analytics',
    description:
      'Privacy-focused alternative to Google Analytics with GDPR compliance',
    setupFee: 100,
    free: false,
    prices: {
      premium: 299,
    },
    features: {
      premium: [
        '100% data ownership',
        'No data limits',
        'Advanced eCommerce',
        'Heatmaps & sessions',
        'GDPR compliance tools',
      ],
    },
  },
  {
    name: 'Clicky Analytics',
    description: 'Real-time analytics with advanced visitor tracking',
    setupFee: 160,
    free: false,
    prices: {
      premium: 120,
    },
    features: {
      premium: [
        'Real-time analytics',
        'Heat maps',
        'Split testing',
        'Custom tracking',
        'Twitter analytics',
      ],
    },
  },
];
