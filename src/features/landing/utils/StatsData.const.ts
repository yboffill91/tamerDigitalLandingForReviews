import {
  FileSearch,
  Gauge,
  LucideIcon,
  Network,
  TrendingUp,
} from 'lucide-react';

interface StatsData {
  icon: LucideIcon;
  label: string;
  value: string;
  detail: string;
  color: string;
}
export const statsData: StatsData[] = [
  {
    icon: TrendingUp,
    label: 'Monthly Growth',
    value: '+45%',
    detail: 'vs. Last Month',
    color: '#4CAF50',
  },
  {
    icon: Network,
    label: 'Keywords',
    value: 'Top 3',
    detail: 'Main Keywords',
    color: '#2196F3',
  },
  {
    icon: FileSearch,
    label: 'Click Rate',
    value: '+180%',
    detail: 'Increase',
    color: '#9C27B0',
  },
  {
    icon: Gauge,
    label: 'ROI',
    value: '4.2x',
    detail: 'Average Return',
    color: '#FF9800',
  },
];
