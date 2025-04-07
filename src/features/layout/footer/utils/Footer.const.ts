import {
  Building2,
  Calculator,
  Database,
  Globe2,
  LineChart,
  LucideIcon,
  MessageSquare,
  Pen,
  Search,
} from 'lucide-react';
import { IconType } from 'react-icons';

interface SERVICE {
  title: string;
  href: string;
}

interface TOOL {
  title: string;
  href: string;
  icon: LucideIcon | IconType;
}

interface PAGE {
  title: string;
  href: string;
}

export const SERVICES: SERVICE[] = [
  {
    title: 'Technical SEO',
    href: '/services/seo',
  },
  {
    title: 'Keywords Research',
    href: '/services/keywords',
  },
  {
    title: 'SEO On-Page',
    href: '/services/on-page',
  },
  {
    title: 'Technical SEO',
    href: '/services/technical-seo',
  },
  {
    title: 'SEO Off-Page',
    href: '/services/off-page',
  },
  {
    title: 'Local SEO',
    href: '/services/local-seo',
  },
  {
    title: 'E-commerce SEO',
    href: '/services/ecommerce-seo',
  },
  {
    title: 'SEO Monitoring',
    href: '/services/monitoring',
  },
  {
    title: 'Social Media',
    href: '/services/social-media',
  },
  {
    title: 'Google Ads',
    href: '/services/google-ads',
  },
  {
    title: 'Email Marketing',
    href: '/services/email',
  },
  {
    title: 'Content Marketing',
    href: '/services/content',
  },
  {
    title: 'Influencer Marketing',
    href: '/services/influencer',
  },
  {
    title: 'Online Reputation',
    href: '/services/reputation',
  },
  {
    title: 'Marketing Automation',
    href: '/services/automation',
  },
  {
    title: 'Video Marketing',
    href: '/services/video',
  },
];

export const TOOLS: TOOL[] = [
  {
    title: 'Web Cost Calculator',
    href: '/tools/calculator',
    icon: Calculator,
  },
  {
    title: 'SEO Scout',
    href: '/tools/seo-scout',
    icon: Search,
  },
  {
    title: 'Website Builder',
    href: '/tools/website-builder',
    icon: Globe2,
  },
  {
    title: 'GMB Manager',
    href: '/tools/gmb-manager',
    icon: Building2,
  },
  {
    title: 'AI Chat',
    href: '/tools/ai-chat',
    icon: MessageSquare,
  },
  {
    title: 'Sales Funnel',
    href: '/tools/sales-funnel',
    icon: LineChart,
  },
  {
    title: 'Business CRM',
    href: '/tools/business-crm',
    icon: Database,
  },
  {
    title: 'AI Writer',
    href: '/tools/ai-writer',
    icon: Pen,
  },
];

export const PAGES: PAGE[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
  {
    title: 'Privacy Policy',
    href: '/privacy',
  },
  {
    title: 'Terms & Conditions',
    href: '/terms',
  },
];
