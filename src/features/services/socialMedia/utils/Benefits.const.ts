import {
  TrendingUp,
  Users,
  Clock,
  Target,
  BarChart3,
  MessageSquare,
  ShieldCheck,
  Rocket,
  LucideIcon,
} from 'lucide-react';
import { IconType } from 'react-icons';

interface BENEFIT {
  icon: LucideIcon | IconType;
  title: string;
  description: string;
}

export const benefits: BENEFIT[] = [
  {
    icon: TrendingUp,
    title: 'Accelerated Business Growth',
    description:
      'Transform your social media presence into a powerful revenue stream. Our clients see an average 3x increase in qualified leads within the first 3 months.',
  },
  {
    icon: Users,
    title: 'Engaged Community Building',
    description:
      'Build a loyal community that actively promotes your brand. Watch your followers transform from passive observers to brand advocates and paying customers.',
  },
  {
    icon: Clock,
    title: 'Time Freedom',
    description:
      'Reclaim 15-20 hours per week by letting us handle your social media. Focus on what you do best while we manage your online presence.',
  },
  {
    icon: Target,
    title: 'Strategic Market Positioning',
    description:
      'Stand out in your industry with a distinctive brand voice. We position you as the go-to authority in your niche.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Results',
    description:
      'Get clear, actionable insights from your social media metrics. Make informed decisions based on real data, not guesswork.',
  },
  {
    icon: MessageSquare,
    title: 'Enhanced Customer Relations',
    description:
      'Build stronger connections with your audience through timely, meaningful interactions. Turn customer service into a competitive advantage.',
  },
  {
    icon: ShieldCheck,
    title: 'Brand Protection',
    description:
      'Maintain a consistent, professional image across all platforms. We protect and enhance your reputation with strategic content management.',
  },
  {
    icon: Rocket,
    title: 'Competitive Edge',
    description:
      'Stay ahead of industry trends and outperform competitors. We implement cutting-edge strategies to keep you at the forefront.',
  },
];
