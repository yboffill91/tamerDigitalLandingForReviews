import { PluginData } from '..';

export const antispamPlugins: PluginData[] = [
  {
    name: 'Akismet Anti-Spam',
    description:
      'The #1 anti-spam plugin for WordPress, trusted by millions of sites',
    setupFee: 100,
    free: true,
    prices: {
      free: 0,
      premium: 99,
    },
    features: {
      free: [
        'Basic spam filtering',
        'Comment moderation',
        'Spam activity log',
        'Personal blog protection',
        'Basic statistics',
      ],
      premium: [
        'Advanced spam detection',
        'Real-time protection',
        'Multi-site support',
        'Priority support',
        'Detailed analytics',
      ],
    },
  },
  {
    name: 'Google reCAPTCHA',
    description:
      'Official Google reCAPTCHA integration for WordPress forms and comments',
    setupFee: 80,
    free: true,
    prices: {
      free: 0,
      premium: 49,
    },
    features: {
      free: [
        'Basic CAPTCHA protection',
        'Form integration',
        'Comment protection',
        'Multiple CAPTCHA types',
        'Basic customization',
      ],
      premium: [
        'Advanced integration',
        'Custom styling',
        'Analytics dashboard',
        'Priority support',
        'Multiple site license',
      ],
    },
  },
  {
    name: 'CleanTalk Anti-Spam',
    description: 'Cloud-based spam protection without CAPTCHA',
    setupFee: 120,
    free: false,
    prices: {
      premium: 89,
    },
    features: {
      premium: [
        'No CAPTCHA required',
        'Comment protection',
        'Registration protection',
        'Contact form protection',
        'Cloud spam database',
        'Real-time protection',
        'Mobile app',
        'Detailed statistics',
      ],
    },
  },
  {
    name: 'Antispam Bee',
    description: 'Lightweight spam protection without external services',
    setupFee: 90,
    free: true,
    prices: {
      free: 0,
      premium: 59,
    },
    features: {
      free: [
        'Local spam protection',
        'No external services',
        'Comment validation',
        'Spam counter',
        'IP blocking',
      ],
      premium: [
        'Advanced patterns',
        'Country blocking',
        'Regular expressions',
        'Custom validations',
        'Premium support',
      ],
    },
  },
  {
    name: 'WP-SpamShield',
    description: 'Comprehensive spam protection for forms and comments',
    setupFee: 110,
    free: true,
    prices: {
      free: 0,
      premium: 79,
    },
    features: {
      free: [
        'Comment protection',
        'Contact form shield',
        'Registration filtering',
        'Basic blocking rules',
        'Spam log',
      ],
      premium: [
        'Advanced algorithms',
        'Custom validation rules',
        'API protection',
        'Enhanced security',
        'Priority support',
      ],
    },
  },
];
