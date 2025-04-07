import { TrendingUp, BarChart2, FileText, Database } from 'lucide-react';

import { HeroDecorativeCards } from '@/lib';

export const cards: HeroDecorativeCards[] = [
  {
    icon: TrendingUp,
    title: 'SEM ',
    position: 'bottom-36 left-36',
    width: 'w-fit',
  },
  {
    icon: BarChart2,
    title: 'SEO ',
    position: 'top-36 left-36',
    width: 'w-fit',
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    position: 'top-6 -left-0',
    width: 'w-[220px]',
  },
  {
    icon: Database,
    title: 'Data Optimization',
    position: 'bottom-6 -left-0',
    width: 'w-[220px]',
  },
];
