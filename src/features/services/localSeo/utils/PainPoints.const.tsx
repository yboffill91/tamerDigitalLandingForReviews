import {
  Target,
  Globe,
  BadgeAlert,
  TrendingDown,
  Users,
  MessageSquare,
  Settings2,
  LucideIcon,
} from 'lucide-react';
import { IconType } from 'react-icons';
import { FaMap } from 'react-icons/fa';
interface PainPoint {
  title: string;
  description: string;
  icon: LucideIcon | IconType;
}

export const painPoints: PainPoint[] = [
  {
    title: 'Confusing Categories',
    description:
      'Incorrect category selection might be costing you valuable visibility in your niche.',
    icon: Target,
  },
  {
    title: 'Multiple Locations',
    description:
      'Managing multiple locations without a clear strategy is limiting your local reach.',
    icon: FaMap,
  },
  {
    title: 'Local Optimization',
    description:
      'Your website might be losing customers due to lack of optimization for local searches.',
    icon: Globe,
  },
  {
    title: 'NAP Inconsistency',
    description:
      'Inconsistent information in directories is damaging your credibility with Google.',
    icon: BadgeAlert,
  },
  {
    title: 'Unstable Rankings',
    description:
      'Ranking fluctuations are costing you potential customers day after day.',
    icon: TrendingDown,
  },
  {
    title: 'Overwhelming Competition',
    description:
      'Your competition is taking the best customers while you struggle to stand out.',
    icon: Users,
  },
  {
    title: 'GMB Optimization',
    description:
      'You are not sure which elements are crucial for your Google listing to stand out.',
    icon: Settings2,
  },
  {
    title: 'Poor Conversion',
    description:
      'Your Google listing is not optimized to convert visitors into actual customers.',
    icon: MessageSquare,
  },
];
