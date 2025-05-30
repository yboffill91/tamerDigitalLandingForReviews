import {
  Calculator,
  FileText,
  Globe,
  MapPin,
  Search,
  BarChart2,
  CreditCard,
  Users,
  LucideIcon,
} from 'lucide-react';
import { IconType } from 'react-icons';
import type { Metadata } from 'next';

export interface TOOL {
  name: string;
  icon: LucideIcon | IconType;
  description: string;
  href: string;
  status?: 'ready';
  metadata: Metadata;
  action: string;
}

export const tools: TOOL[] = [
  {
    name: 'Website Cost Calculator',
    icon: Calculator,
    description:
      'Calculate accurate website development costs instantly with our comprehensive pricing tool.',
    href: '/website-calculator',
    status: 'ready',
    metadata: {
      title: 'Tamer Digital Website Cost Calculator',
      description:
        'Calculate accurate website development costs -- TamerDigital',
    },
    action: 'Calculate',
  },
  {
    name: 'Seo Article Builder',
    icon: FileText,
    description:
      'Generate engaging content and copy with our AI-powered writing assistant.',
    href: '/seo-builder',
    metadata: {
      title: 'Seo Article Builder',
      description:
        'Generate engaging content and copy with our AI-powered writing assistant -- TamerDigital',
    },
    action: 'Generate',
  },
  {
    name: 'Full Website Creator',
    icon: Globe,
    description:
      'Create professional websites quickly with our intuitive drag-and-drop builder.',
    href: '/website-creator',
    metadata: {
      title: 'Full Website Creator',
      description:
        'Create professional websites quickly with our intuitive drag-and-drop builder -- TamerDigital',
    },
    action: 'Create',
  },
  {
    name: 'Gmb Booster',
    icon: MapPin,
    description:
      'Optimize and manage your Google My Business profile for better local visibility .',
    href: '/gmb-booster',
    metadata: {
      title: 'Gmb Booster',
      description:
        'Optimize and manage your Google My Business profile for better local visibility -- TamerDigital',
    },
    action: 'Optimize',
  },
  {
    name: 'Seo Audit Tool',
    icon: Search,
    description:
      "Analyze your website's SEO performance and get actionable recommendations for improvement.",
    href: '/seo-audit',
    metadata: {
      title: 'Seo Audit Tool',
      description:
        "Analyze your website's SEO performance and get actionable recommendations for improvement -- TamerDigital",
    },
    action: 'Analyze',
  },
  {
    name: 'Siteaudit Analyzer',
    icon: BarChart2,
    description: 'Deep website performance insights',
    href: '/site-audit',
    metadata: {
      title: 'Siteaudit Analyzer',
      description: 'Deep website performance insights -- TamerDigital',
    },
    action: 'Analyze',
  },
  {
    name: 'Digital Card Maker',
    icon: CreditCard,
    description: 'Create digital business cards',
    href: '/card-maker',
    metadata: {
      title: 'Digital Card Maker',
      description: 'Create digital business cards -- TamerDigital',
    },
    action: 'Create',
  },
  {
    name: 'Smallbiz Crm',
    icon: Users,
    description:
      'Manage customer relationships and track leads with our simple CRM system.',
    href: '/smallbiz-crm',
    metadata: {
      title: 'Smallbiz Crm',
      description: 'Simple customer relationship management -- TamerDigital',
    },
    action: 'Manage',
  },
];

interface VIDEO {
  title: string;
  duration: string;
  thumbnail: string;
  href: string;
}
export const videos: VIDEO[] = [
  {
    title: 'Getting Started Guide',
    duration: '5:32',
    thumbnail: '/api/placeholder/240/135',
    href: '#',
  },
  {
    title: 'Advanced Techniques',
    duration: '8:15',
    thumbnail: '/api/placeholder/240/135',
    href: '#',
  },
];

interface BLOGPOST {
  title: string;
  description: string;
  readTime: string;
  href: string;
}
export const blogPosts: BLOGPOST[] = [
  {
    title: '10 Ways to Improve Your Content Strategy',
    description: 'Learn how to create content that converts',
    readTime: '5 min read',
    href: '#',
  },
  {
    title: 'SEO Best Practices for 2024',
    description: 'Stay ahead of the latest SEO trends',
    readTime: '7 min read',
    href: '#',
  },
  {
    title: 'Mastering Keyword Research',
    description: 'Find the right keywords for your business',
    readTime: '6 min read',
    href: '#',
  },
];
