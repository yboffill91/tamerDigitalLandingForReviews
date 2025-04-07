import {
  LucideIcon,
  Search,
  Smartphone,
  TrendingDown,
  ZapIcon,
} from 'lucide-react';
import { IconType } from 'react-icons';

export interface Problem {
  icon: LucideIcon | IconType;
  title: string;
  problem: string;
}

export const Problems: Problem[] = [
  {
    icon: ZapIcon,
    title: 'Frustratingly Slow Pages',
    problem:
      ' Your pages take forever to load, especially on mobile devices. Every second of delay is costing you valuable customers and hurting your search rankings.',
  },
  {
    icon: Search,
    title: 'Content Not Being Indexed',
    problem: ` Your new content isn't showing up in search results, or worse       your existing pages are disappearing from Google's index without explanation.`,
  },
  {
    icon: Smartphone,
    title: '  Poor Mobile Experience',
    problem: `
       Your mobile traffic is plummeting because your site isn't
                properly optimized for smartphones, where most of your customers
                are searching.
      `,
  },
  {
    icon: TrendingDown,
    title: 'Dropping Search Rankings',
    problem: `
       Your website is losing valuable positions in search results, and
                you can't figure out why. Technical issues are often the hidden
                culprit behind sudden ranking drops.
      
      `,
  },
];
