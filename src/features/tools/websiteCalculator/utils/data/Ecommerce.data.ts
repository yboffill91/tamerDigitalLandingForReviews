import { PluginData } from '..';

export const ecommercePlugins: PluginData[] = [
  {
    name: 'WooCommerce',
    description:
      'The most popular eCommerce platform for WordPress with extensive features and addons',
    setupFee: 300,
    free: true,
    prices: {
      free: 0,
      premium: 199,
    },
    features: {
      free: [
        'Unlimited products',
        'Secure payments',
        'Order management',
        'Customer accounts',
        'Basic shipping options',
      ],
      premium: [
        'Advanced shipping rules',
        'Subscription products',
        'Dynamic pricing',
        'Advanced reporting',
        'Premium extensions',
      ],
    },
  },
  {
    name: 'Easy Digital Downloads',
    description: 'The best solution for selling digital products and downloads',
    setupFee: 250,
    free: true,
    prices: {
      free: 0,
      premium: 299,
    },
    features: {
      free: [
        'Digital product management',
        'Download tracking',
        'Basic reporting',
        'Payment processing',
        'Customer management',
      ],
      premium: [
        'Software licensing',
        'Recurring payments',
        'Advanced reporting',
        'Content restrictions',
        'Frontend submissions',
      ],
    },
  },
  {
    name: 'WP EasyCart',
    description: 'User-friendly eCommerce solution with comprehensive features',
    setupFee: 200,
    free: true,
    prices: {
      free: 0,
      premium: 99,
    },
    features: {
      free: [
        'Basic product management',
        'Standard checkout',
        'PayPal integration',
        'Basic shipping options',
        'Simple tax rules',
      ],
      premium: [
        'Advanced product options',
        'Multiple payment gateways',
        'Live shipping rates',
        'Advanced tax management',
        'Premium support',
      ],
    },
  },
  {
    name: 'BigCommerce',
    description:
      'Enterprise-level eCommerce platform with WordPress integration',
    setupFee: 500,
    free: false,
    prices: {
      premium: 399,
    },
    features: {
      premium: [
        'Multi-channel selling',
        'Advanced inventory',
        'B2B features',
        'Custom pricing rules',
        'Enterprise security',
      ],
    },
  },
  {
    name: 'Shopify for WordPress',
    description:
      "Seamlessly integrate Shopify's powerful eCommerce features into WordPress",
    setupFee: 200,
    free: true,
    prices: {
      free: 0,
      premium: 299,
    },
    features: {
      free: [
        'Basic Shopify integration',
        'Product embedding',
        'Shopping cart widget',
        'Basic customization',
        'Standard support',
      ],
      premium: [
        'Full Shopify features',
        'Advanced customization',
        'Multi-currency support',
        'Advanced analytics',
        'Priority support',
      ],
    },
  },
];
