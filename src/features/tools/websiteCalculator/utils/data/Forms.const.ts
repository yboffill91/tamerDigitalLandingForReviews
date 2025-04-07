import { PluginData } from '..';

export const formsPlugins: PluginData[] = [
  {
    name: 'Contact Form 7',
    description:
      'Most popular free contact form plugin with extensive customization options',
    setupFee: 100,
    free: true,
    prices: {
      free: 0,
      premium: 49,
    },
    features: {
      free: [
        'Unlimited forms',
        'Basic form fields',
        'CAPTCHA support',
        'Email notifications',
        'Basic customization',
      ],
      premium: [
        'Advanced form fields',
        'Conditional logic',
        'Multiple email templates',
        'Form analytics',
        'Premium support',
      ],
    },
  },
  {
    name: 'WPForms',
    description:
      'Beginner friendly drag & drop form builder with pre-built templates',
    setupFee: 150,
    free: true,
    prices: {
      free: 0,
      premium: 199,
    },
    features: {
      free: [
        'Drag & drop builder',
        'Basic form templates',
        'Basic form fields',
        'Email notifications',
        'SPAM protection',
      ],
      premium: [
        'Advanced form fields',
        'Form templates library',
        'Form abandonment',
        'Surveys & Polls',
        'Payment integration',
      ],
    },
  },
  {
    name: 'Gravity Forms',
    description:
      'Advanced form builder with powerful features and integrations',
    setupFee: 200,
    free: false,
    prices: {
      premium: 259,
    },
    features: {
      premium: [
        'Advanced conditional logic',
        'Multi-page forms',
        'File uploads',
        'Entry management',
        'Payment integration',
        'Advanced calculations',
        'Workflow automation',
        'Advanced routing',
        'Custom notifications',
        'Priority support',
      ],
    },
  },
  {
    name: 'Ninja Forms',
    description: 'User-friendly form builder with modular add-ons',
    setupFee: 120,
    free: true,
    prices: {
      free: 0,
      premium: 99,
    },
    features: {
      free: [
        'Drag & drop builder',
        'Basic form fields',
        'Email notifications',
        'Basic customization',
        'AJAX submission',
      ],
      premium: [
        'Multi-part forms',
        'Conditional logic',
        'File uploads',
        'Payment gateways',
        'Email marketing',
      ],
    },
  },
  {
    name: 'Formidable Forms',
    description: 'Advanced form builder with data management capabilities',
    setupFee: 180,
    free: true,
    prices: {
      free: 0,
      premium: 149,
    },
    features: {
      free: [
        'Drag & drop builder',
        'Basic form fields',
        'Email notifications',
        'Basic reports',
        'SPAM protection',
      ],
      premium: [
        'Advanced fields',
        'Visual form styler',
        'Form templates',
        'Data management',
        'API integrations',
      ],
    },
  },
];
