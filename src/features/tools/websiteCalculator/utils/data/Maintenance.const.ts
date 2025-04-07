export const maintenancePlans: {
  name: string;
  price: number;
  description: string;
  features: string[];
}[] = [
  {
    name: 'Basic Site',
    price: 50,
    description: 'Essential maintenance for small websites with basic needs',
    features: [
      'Minor content updates',
      'Periodic backups',
      'Basic security monitoring',
      'Limited technical support',
      'Monthly maintenance report',
    ],
  },
  {
    name: 'Intermediate Site',
    price: 100,
    description: 'Comprehensive care for growing business websites',
    features: [
      'Frequent content updates',
      'Integration of new features',
      'Enhanced security monitoring',
      'Performance optimization',
      'Moderate technical support',
      'Regular maintenance reports',
      'Basic SEO monitoring',
    ],
  },
  {
    name: 'Advanced Site',
    price: 200,
    description: 'Premium support for complex and high-traffic websites',
    features: [
      'Continuous content updates',
      'External system/API integration',
      'Regular SEO optimization',
      'Immediate security response',
      'Priority technical support',
      'Comprehensive reporting',
      'Performance monitoring',
      'Custom development support',
    ],
  },
];
