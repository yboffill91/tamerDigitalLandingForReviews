import { BaseNotifications } from '@/lib';
import {
  DollarSign,
  Rocket,
  ShoppingCart,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react';

export const baseNotifications: BaseNotifications[] = [
  {
    name: 'New Sale: $1,500',
    time: 'just now',
    icon: DollarSign,
    color: '#1389FD',
  },
  {
    name: 'Customer Conversion',
    time: '2m ago',
    icon: ShoppingCart,
    color: '#1389FD',
  },
  {
    name: 'New Visitor',
    time: '15m ago',
    icon: Users,
    color: '#1389FD',
  },
  {
    name: 'Premium Client Acquired',
    time: '10m ago',
    icon: Star,
    color: '#1389FD',
  },
  {
    name: 'Monthly Revenue +28%',
    time: '5m ago',
    icon: TrendingUp,
    color: '#1389FD',
  },
  {
    name: 'Sales Target Achieved',
    time: '8m ago',
    icon: Rocket,
    color: '#1389FD',
  },
];
