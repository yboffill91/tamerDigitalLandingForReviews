import {
  Users,
  TrendingDown,
  Zap,
  ShieldAlert,
  LucideIcon,
} from 'lucide-react';
import { IconType } from 'react-icons';

interface ImageContent {
  type: 'image';
  content: string;
}

interface StatContent {
  type: 'stat';
  title: string;
  description: string;
  icon: LucideIcon | IconType;
  positive: boolean;
}

export type ContentType = ImageContent | StatContent;

export const content: ContentType[] = [
  {
    type: 'image',
    content: '/features/services/google-ads/googlestats.png',
  },
  {
    type: 'stat',
    title: '89% More Leads',
    description:
      'Businesses see increased lead generation with optimized Google Ads',
    icon: Users,
    positive: true,
  },
  {
    type: 'image',
    content: '/features/services/google-ads/googlestats.png',
  },
  {
    type: 'stat',
    title: '72% Lost Revenue',
    description: 'Businesses without Google Ads miss potential customers',
    icon: TrendingDown,
    positive: false,
  },
  {
    type: 'image',
    content: '/features/services/google-ads/googlestats.png',
  },
  {
    type: 'stat',
    title: '44% Higher ROI',
    description: 'When campaigns are professionally managed',
    icon: Zap,
    positive: true,
  },
  {
    type: 'image',
    content: '/features/services/google-ads/googlestats.png',
  },
  {
    type: 'stat',
    title: '63% Ad Waste',
    description: 'Money lost on poorly targeted campaigns',
    icon: ShieldAlert,
    positive: false,
  },
];
