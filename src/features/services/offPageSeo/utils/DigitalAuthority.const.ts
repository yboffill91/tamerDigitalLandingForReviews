import { TrendingDown, Shield, Award, Target, LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

interface Problem {
  title: string;
  description: string;
  icon: LucideIcon | IconType;
  color: string;
}

export const problems: Problem[] = [
  {
    title: 'Loss of Organic Traffic',
    description:
      "Without quality backlinks supporting your site, Google doesn't recognize you as an authority, reducing your business visibility and decreasing organic visits.",
    icon: TrendingDown,
    color: '#3b82f6',
  },
  {
    title: 'Credibility and Trust at Risk',
    description:
      'Potential customers tend to trust brands recommended by other sites. The lack of natural, quality backlinks weakens the perception of professionalism and reliability.',
    icon: Shield,
    color: '#3b82f6',
  },
  {
    title: 'Competitors Gaining Ground',
    description:
      'While you struggle to appear in top results, competitors who have invested in link building and local SEO gain ground, capturing the attention of customers who could be yours.',
    icon: Award,
    color: '#3b82f6',
  },
  {
    title: 'Missed Growth Opportunities',
    description:
      'Without an effective off-page strategy, your business is missing crucial opportunities to generate referral traffic and strengthen its digital reputation in an increasingly competitive environment.',
    icon: Target,
    color: '#3b82f6',
  },
];

// Traffic Decline Visualization
