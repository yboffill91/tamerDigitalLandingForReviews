import {
  Users,
  Trophy,
  ChartBar,
  Clock,
  TrendingUp,
  Target,
  LucideIcon,
} from 'lucide-react';
import { IconType } from 'react-icons';

interface Benefit {
  icon: LucideIcon | IconType;
  title: string;
  description: string;
  color: 'emerald';
}
export const benefits: Benefit[] = [
  {
    icon: Users,
    title: 'Real Customers, Not Just Clicks',
    description:
      'Attract people ready to buy, not just casual visitors. Our advanced targeting system identifies users with genuine purchase intent, focusing your budget exclusively on those about to become customers.',
    color: 'emerald',
  },
  {
    icon: Trophy,
    title: 'Visibility That Drives Sales',
    description:
      "Outperform competitors where it truly matters. We position your business at the top of search results for your ideal customers' queries, transforming invisibility into a dominant presence that captures attention.",
    color: 'emerald',
  },
  {
    icon: ChartBar,
    title: 'Smart Investment with Measurable Results',
    description:
      'Every dollar invested works to generate real profits. Our transparent dashboards show exactly how your investment converts into sales, letting you watch your business grow in real-time with each optimized campaign.',
    color: 'emerald',
  },
  {
    icon: Clock,
    title: 'Peace of Mind and Time for What Matters',
    description:
      'Stop worrying about Google Ads and focus on your business. While our certified specialists fully manage your campaigns, you reclaim valuable hours each week to focus on what truly matters: serving customers and growing your company.',
    color: 'emerald',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Market Adaptability',
    description:
      "Stay one step ahead of changes. Our constant optimization system adjusts your campaigns based on market trends and competitor behavior, ensuring your business evolves alongside your customers' needs.",
    color: 'emerald',
  },
  {
    icon: Target,
    title: 'Strategic Campaign Optimization',
    description:
      'Leverage data-driven insights and AI-powered optimization to continuously refine your campaigns, ensuring maximum ROI and minimal wasted ad spend across all your marketing initiatives.',
    color: 'emerald',
  },
];

interface colorVariant {
  emerald: string;
}

export const colorVariants: colorVariant = {
  emerald: 'bg-[#00B67A]/10 text-[#00B67A] ring-[#00B67A]/20',
};
