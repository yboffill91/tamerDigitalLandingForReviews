import { DollarSign, Brain, PieChart, Target, LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';
interface Problem {
  title: string;
  description: string;
  icon: LucideIcon | IconType;
}

export const problems: Problem[] = [
  {
    title: 'Your Money Vanishes on Worthless Clicks',
    description:
      "Every day, your budget drains away on people who'll never buy, while your competitors capture the customers who are ready to purchase.",
    icon: DollarSign,
  },
  {
    title: 'Overwhelmed by Google Ads Complexity',
    description:
      'Precious hours wasted wrestling with complicated campaign settings, resulting in mediocre performance and stealing time you could invest in growing your business.',
    icon: Brain,
  },
  {
    title: 'Flying Blind on Your Ad Investment',
    description:
      'The uncertainty of not knowing if each dollar spent is generating returns prevents you from making confident decisions and scaling your business effectively.',
    icon: PieChart,
  },
  {
    title: 'Watching Competitors Dominate While You Stay Invisible',
    description:
      "The frustration of seeing similar businesses consistently appear in searches while your company gets left behind, missing potential customers who'll never know you exist.",
    icon: Target,
  },
];
