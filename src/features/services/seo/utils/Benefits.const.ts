import {
  TrendingUp,
  Zap,
  Target,
  BarChart3,
  ShieldCheck,
  Clock,
  Users,
  Award,
  LucideIcon,
} from 'lucide-react';
import { IconType } from 'react-icons';

export interface Benefit {
  icon: LucideIcon | IconType;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: TrendingUp,
    title: 'Dominate Search Rankings',
    description:
      'Watch your website climb to the top positions for your most valuable keywords. Our clients see an average 83% increase in first-page rankings within 90 days.',
  },
  {
    icon: Zap,
    title: 'Lightning-Fast Performance',
    description:
      "Transform your slow website into a speed demon. We'll optimize your site to load in under 2 seconds, reducing bounce rates by an average of 47%.",
  },
  {
    icon: Target,
    title: 'Maximum Search Visibility',
    description:
      'Get your content indexed and ranking faster. Our technical optimizations have helped clients increase their indexed pages by 312% on average.',
  },
  {
    icon: BarChart3,
    title: 'Explosive Traffic Growth',
    description:
      'Drive more qualified visitors to your site. Our technical SEO improvements lead to an average 215% increase in organic traffic within 6 months.',
  },
  {
    icon: ShieldCheck,
    title: 'Rock-Solid Technical Foundation',
    description:
      'Sleep better knowing your site is technically flawless. Our comprehensive audits and fixes prevent costly SEO issues before they happen.',
  },
  {
    icon: Clock,
    title: 'Faster Time to Market',
    description:
      'Launch new content that ranks immediately. Our optimization framework ensures your pages are indexed and ranking within hours, not weeks.',
  },
  {
    icon: Users,
    title: 'Better User Experience',
    description:
      'Keep visitors engaged and converting. Our mobile-first approach and Core Web Vitals optimization increase conversion rates by 28% on average.',
  },
  {
    icon: Award,
    title: 'Competitive Advantage',
    description:
      'Stay ahead of your competition. Our advanced technical strategies give you the edge in even the most competitive markets.',
  },
];
