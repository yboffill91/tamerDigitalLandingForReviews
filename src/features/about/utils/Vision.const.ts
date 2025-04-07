import { VISIONITEM } from '@/lib';
import { Eye, Goal, LineChart, Target } from 'lucide-react';

export const visionItems: VISIONITEM[] = [
  {
    title: 'Our Vision',
    icon: Eye,
    content:
      'To revolutionize digital marketing through innovation and data-driven strategies, making advanced digital solutions accessible to businesses of all sizes.',
    image: '/features/about/vision.webp',
    align: 'right',
  },
  {
    title: 'Our Mission',
    icon: Target,
    content:
      'To empower businesses with cutting-edge digital solutions that drive measurable growth and sustainable success in the digital landscape.',
    image: '/features/about/mision.webp',
    align: 'left',
  },
  {
    title: 'Our Goals',
    icon: Goal,
    content:
      'To continuously innovate and expand our digital solutions, helping more businesses achieve their full potential in the digital world.',
    image: '/features/about/goals.webp',
    align: 'right',
  },
  {
    title: 'Our Impact',
    icon: LineChart,
    content:
      'To create lasting positive change in the digital marketing industry by setting new standards for excellence and client success.',
    image: '/features/about/impact.webp',
    align: 'left',
  },
];
