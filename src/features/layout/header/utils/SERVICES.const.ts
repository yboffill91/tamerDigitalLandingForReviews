import {
  Search,
  Target,
  FileText,
  BarChart2,
  Globe2,
  Building2,
  LineChart,
  TrendingUp,
  Share2,
  Mail,
  LucideIcon,
} from 'lucide-react';
import { IconType } from 'react-icons';

export interface SERVICE {
  name: string;
  icon: LucideIcon | IconType;
  href: string;
  status?: 'ready';
}

export const services: SERVICE[] = [
  {
    name: 'Technical SEO',
    icon: Search,
    href: '/services/seo',
    status: 'ready',
  },
  {
    name: 'Keywords Research',
    icon: Target,
    href: '/services/keywords-research',
    status: 'ready',
  },
  {
    name: 'SEO On-Page',
    icon: FileText,
    href: '/services/on-page-seo',
    status: 'ready',
  },
  {
    name: 'SEO Audit Services',
    icon: BarChart2,
    href: '/services/seo-audit-services',
    status: 'ready',
  },
  {
    name: 'SEO Off-Page',
    icon: Globe2,
    href: '/services/off-page-seo',
    status: 'ready',
  },
  {
    name: 'Local SEO',
    icon: Building2,
    href: '/services/local-seo',
    status: 'ready',
  },
  {
    name: 'E-commerce SEO',
    icon: LineChart,
    href: '/services/ecomerce-seo',
    status: 'ready',
  },
  {
    name: 'SEO Consulting',
    icon: TrendingUp,
    href: '/services/consulting-seo',
  },
  {
    name: 'Social Media',
    icon: Share2,
    href: '/services/social-media-marketing',
    status: 'ready',
  },
  {
    name: 'Google Ads',
    icon: Target,
    href: '/services/google-ads',
    status: 'ready',
  },
  {
    name: 'Email Marketing',
    icon: Mail,
    href: '/services/email-marketing',
  },
  {
    name: 'Content Marketing',
    icon: FileText,
    href: '/services/content-marketing',
    status: 'ready',
  },
];
