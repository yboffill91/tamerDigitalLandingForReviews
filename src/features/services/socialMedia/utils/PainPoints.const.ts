import {
  BarChart3,
  Brain,
  Clock,
  Coins,
  LucideIcon,
  MessageSquare,
  Target,
  TrendingDown,
  Users,
} from 'lucide-react';
import { IconType } from 'react-icons';

interface PainPoint {
  icon: LucideIcon | IconType;

  title: string;
  description: string;
}

export const painPoints: PainPoint[] = [
  {
    icon: Clock,
    title: 'Wasted Time on Content',
    description:
      'Hours spent creating mediocre content that generates no results, while your competition moves forward',
  },
  {
    icon: TrendingDown,
    title: 'Declining Engagement',
    description:
      "Your posts barely receive likes and comments, affecting your brand's visibility",
  },
  {
    icon: Users,
    title: 'Followers Without Conversion',
    description:
      'Thousands of followers but no increase in sales, indicating a poorly segmented audience',
  },
  {
    icon: MessageSquare,
    title: 'Lost Opportunities',
    description:
      'Unanswered messages and ignored comments that could be potential sales',
  },
  {
    icon: Brain,
    title: 'Inconsistent Strategy',
    description:
      'Random posts without a coherent plan that confuse your audience',
  },
  {
    icon: Target,
    title: 'Investment Without Return',
    description:
      "Spending on ads that don't generate leads or sales due to lack of strategy",
  },
  {
    icon: Coins,
    title: 'Misused Budget',
    description:
      "Resources wasted on tactics that don't work while competition grows",
  },
  {
    icon: BarChart3,
    title: 'Meaningless Metrics',
    description:
      "Data and statistics you can't interpret to make effective decisions",
  },
];
