import {
  BarChart3,
  Clock,
  DollarSign,
  LucideIcon,
  PieChart,
  Search,
  Target,
  TrendingDown,
} from 'lucide-react';
import { IconType } from 'react-icons';

interface ProblemItem {
  title: string;
  description: string;
  icon: LucideIcon | IconType;
}
export const problemItems: ProblemItem[] = [
  {
    title: 'Targeting Wrong Keywords',
    description:
      "You're investing time and money in keywords that don't bring qualified traffic or sales, essentially throwing your marketing budget away.",
    icon: TrendingDown,
  },
  {
    title: 'Missing Profitable Opportunities',
    description:
      "Your competitors are capturing valuable customers through keywords you haven't even discovered yet.",
    icon: DollarSign,
  },
  {
    title: 'Poor ROI on SEO Efforts',
    description:
      "Despite consistent SEO work, your website isn't generating the leads and sales it should be getting.",
    icon: PieChart,
  },
  {
    title: 'Wasted Resources',
    description:
      "Your team is spending countless hours on content that doesn't align with your customers' search intent.",
    icon: Clock,
  },
  {
    title: 'Unknown Search Volume',
    description:
      "You're unsure which keywords will bring the most traffic, making it difficult to prioritize your content and SEO efforts effectively.",
    icon: BarChart3,
  },
  {
    title: 'Hidden Ranking Challenges',
    description:
      'Without understanding keyword difficulty, you might target terms that are too competitive, wasting months of effort on unrealistic goals.',
    icon: Target,
  },
  {
    title: 'Misaligned Search Intent',
    description:
      "You're creating content without understanding why users search for specific terms, leading to high bounce rates and low conversions.",
    icon: Search,
  },
];
