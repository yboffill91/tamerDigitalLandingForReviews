import { PluginData } from '..';

export const cachePlugins: PluginData[] = [
  {
    name: 'WP Rocket',
    description: 'Premium caching plugin with advanced optimization features',
    setupFee: 150,
    free: false,
    prices: {
      premium: 49,
    },
    features: {
      premium: [
        'Page caching',
        'Browser caching',
        'GZIP compression',
        'Cache preloading',
        'Database optimization',
        'CDN integration',
        'Lazy loading images',
        'Minification (CSS, JS, HTML)',
        'Defer JavaScript loading',
        'Remove unused CSS',
      ],
    },
  },
  {
    name: 'W3 Total Cache',
    description: 'Comprehensive caching solution for improved performance',
    setupFee: 120,
    free: true,
    prices: {
      free: 0,
      premium: 99,
    },
    features: {
      free: [
        'Page caching',
        'Browser caching',
        'Basic minification',
        'CDN integration',
        'Database caching',
      ],
      premium: [
        'Fragment caching',
        'Full SSL support',
        'REST API caching',
        'Advanced stats',
        'Premium support',
      ],
    },
  },
  {
    name: 'LiteSpeed Cache',
    description: 'Server-level caching with extensive optimization features',
    setupFee: 100,
    free: true,
    prices: {
      free: 0,
      premium: 79,
    },
    features: {
      free: [
        'Server-level caching',
        'Image optimization',
        'Minification',
        'Database optimization',
        'Browser caching',
      ],
      premium: [
        'Advanced image optimization',
        'Critical CSS generation',
        'Premium CDN',
        'Advanced cache rules',
        'Priority support',
      ],
    },
  },
  {
    name: 'Swift Performance',
    description: 'All-in-one optimization plugin with powerful caching',
    setupFee: 180,
    free: true,
    prices: {
      free: 0,
      premium: 89,
    },
    features: {
      free: [
        'Page caching',
        'Basic optimization',
        'CSS/JS merging',
        'Gzip compression',
        'Basic CDN support',
      ],
      premium: [
        'Critical CSS',
        'Dynamic caching',
        'Image optimization',
        'Advanced CDN',
        'Premium support',
      ],
    },
  },
  {
    name: 'WP Fastest Cache',
    description: 'User-friendly caching solution with optimization features',
    setupFee: 90,
    free: true,
    prices: {
      free: 0,
      premium: 59,
    },
    features: {
      free: [
        'Page caching',
        'Browser caching',
        'GZIP compression',
        'Basic minification',
        'Cache timeout',
      ],
      premium: [
        'Mobile caching',
        'Database cleanup',
        'Advanced minification',
        'Image optimization',
        'Premium support',
      ],
    },
  },
];
