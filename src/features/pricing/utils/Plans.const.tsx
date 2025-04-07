import { PricingPlan } from '@/lib';
import Link from 'next/link';

export const personalPlans: PricingPlan[] = [
  {
    name: 'Basic',
    price: 0,
    billing: '',
    description:
      'Perfect for trying out our tools and services with basic features to get started.',
    features: [
      {
        title: 'Tools Access',
        items: [
          'Web Cost Calculator - Full Access',
          'SEO Scout - 2 pages/month',
          'Website Builder - 1 website',
        ],
      },
    ],
    buttonText: 'Start Free',
    buttonClass: 'bg-neutral-700 text-white hover:bg-neutral-600',
  },
  {
    name: 'Starter',
    popular: true,
    price: 12,
    billing: '',
    description:
      'Essential digital growth package for businesses starting their online journey.',
    features: [
      {
        title: 'Tools Access',
        items: [
          'Web Cost Calculator - Full Access',
          'SEO Scout - 10 pages/month',
          'Website Builder - 2 websites',
          'GMB Manager - 2 locations',
          'AI Chat - 1000 chats/month',
          'Sales Funnel - 3 funnels',
          'CRM - 1,000 contacts',
          'AI Writer - 10,000 words/month',
        ],
      },
      {
        title: 'SEO Services',
        items: [
          <Link
            href='#comparison'
            className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity'
            key={3}
          >
            See detailed features
          </Link>,
        ],
      },
      {
        title: 'Marketing Services',
        items: [
          <Link
            href='#comparison'
            className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity'
            key={4}
          >
            See detailed features
          </Link>,
        ],
      },
    ],
    buttonText: 'Get Started',
    buttonClass: 'bg-[#7DCEA0] text-black hover:bg-[#7DCEA0]/90',
  },
  {
    name: 'Growth',
    price: 29,
    billing: '',
    description:
      'Complete digital transformation package with advanced features and priority support.',
    features: [
      {
        title: 'Tools Access',
        items: [
          'Web Cost Calculator - Full Access',
          'SEO Scout - 50 pages/month',
          'Website Builder - 5 websites',
          'GMB Manager - 5 locations',
          'AI Chat - 5000 chats/month',
          'Sales Funnel - 10 funnels',
          'CRM - 10,000 contacts',
          'AI Writer - 50,000 words/month',
        ],
      },
      {
        title: 'SEO Services',
        items: [
          <Link
            href='#comparison'
            className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity'
            key={1}
          >
            See detailed features
          </Link>,
        ],
      },
      {
        title: 'Marketing Services',
        items: [
          <Link
            href='#comparison'
            className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity'
            key={2}
          >
            See detailed features
          </Link>,
        ],
      },
    ],
    buttonText: 'Upgrade Now',
    buttonClass: 'bg-neutral-700 text-white hover:bg-neutral-600',
  },
];
