import { Search, Target, LineChart, Rocket, LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

interface Step {
  icon: LucideIcon | IconType;
  title: string;
  description: string;
  details: string[];
}

export const steps: Step[] = [
  {
    icon: Search,
    title: 'Research & Analysis',
    description:
      "We start with a deep dive into your market, analyzing competitors' strategies and identifying untapped opportunities in your industry.",
    details: [
      'Competitor analysis',
      'Keyword research',
      'Market positioning',
      'Budget planning',
    ],
  },
  {
    icon: Target,
    title: 'Strategic Campaign Setup',
    description:
      'Our certified experts craft your campaigns with precision, implementing advanced targeting and bidding strategies.',
    details: [
      'Account structure setup',
      'Ad group creation',
      'Keyword mapping',
      'Ad copy creation',
    ],
  },
  {
    icon: LineChart,
    title: 'Optimization & Testing',
    description:
      'We continuously monitor and optimize your campaigns using AI-driven insights to maximize performance.',
    details: [
      'A/B testing',
      'Bid optimization',
      'Performance tracking',
      'Budget allocation',
    ],
  },
  {
    icon: Rocket,
    title: 'Scale & Grow',
    description:
      'As your campaigns succeed, we strategically scale your budget while maintaining optimal ROAS.',
    details: [
      'Performance analysis',
      'Market expansion',
      'Budget scaling',
      'Growth planning',
    ],
  },
];
