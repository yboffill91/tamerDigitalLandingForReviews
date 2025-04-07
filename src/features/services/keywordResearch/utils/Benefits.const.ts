import { Shield, Zap, Check, LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';
interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon | IconType;
}

export const benefitsList: Benefit[] = [
  {
    title: 'Data-Driven Keyword Selection',
    description:
      "Our advanced research process identifies high-converting keywords that your ideal customers actually use when they're ready to buy, not just browse.",
    icon: Shield,
  },
  {
    title: 'Real-Time Performance Tracking',
    description:
      'Monitor your keyword rankings, traffic, and conversions in real-time through our comprehensive dashboard, allowing you to see exactly how your investment is performing.',
    icon: Zap,
  },
  {
    title: 'Competitor Intelligence',
    description:
      "Gain strategic insights into your competitors' keyword strategies, identifying gaps and opportunities they've missed that you can capitalize on.",
    icon: Check,
  },
];

export const features: string[] = [
  'Comprehensive keyword opportunity analysis',
  'Local search optimization for multiple locations',
  'Monthly performance reports and strategy updates',
  'Competitor keyword gap analysis',
  'Content optimization recommendations',
];
