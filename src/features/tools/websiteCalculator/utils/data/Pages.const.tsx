export interface BasePage {
  name: string;
  isRequired: boolean;
  complexity: 'low' | 'medium' | 'high';
  displayInline?: boolean;
}

export const basePages: BasePage[] = [
  { name: 'Home', isRequired: true, complexity: 'high' },
  { name: 'About', isRequired: true, complexity: 'medium' },
  { name: 'Contact', isRequired: true, complexity: 'medium' },
  { name: 'Blog', isRequired: true, complexity: 'high' },
  { name: 'Services', isRequired: true, complexity: 'high' },
  { name: 'Privacy Policy', isRequired: true, complexity: 'low' },
  {
    name: 'Terms & Conditions',
    isRequired: true,
    complexity: 'low',
    displayInline: true,
  },
];

export interface PageType {
  name: string;
  description: string;
  importance: string;
  prices: {
    basic: number;
    intermediate: number;
    advanced: number;
  };
}
export const pageTypes: PageType[] = [
  {
    name: 'Service Page',
    description: 'Detailed page for each service offering',
    importance: 'Essential for service-based businesses',
    prices: {
      basic: 120,
      intermediate: 180,
      advanced: 250,
    },
  },
  {
    name: 'Location Page',
    description: 'Page for each service location',
    importance: 'Critical for businesses with multiple locations',
    prices: {
      basic: 130,
      intermediate: 190,
      advanced: 260,
    },
  },
  {
    name: 'Article/Blog Post',
    description: 'Individual blog post or article page',
    importance: 'Great for SEO and content marketing',
    prices: {
      basic: 80,
      intermediate: 120,
      advanced: 160,
    },
  },
  {
    name: 'Portfolio Item',
    description: 'Showcase page for portfolio items',
    importance: 'Perfect for displaying work and projects',
    prices: {
      basic: 100,
      intermediate: 150,
      advanced: 200,
    },
  },
  {
    name: 'Product Page',
    description: 'E-commerce product page with details',
    importance: 'Essential for online stores',
    prices: {
      basic: 180,
      intermediate: 250,
      advanced: 320,
    },
  },
  {
    name: 'Custom Page',
    description: 'Fully custom page with unique layout',
    importance: 'For specialized content and unique features',
    prices: {
      basic: 200,
      intermediate: 300,
      advanced: 400,
    },
  },
];
