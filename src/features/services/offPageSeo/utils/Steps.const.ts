import {
  Calendar,
  ChartLine,
  LucideIcon,
  ChartBar as Strategy,
} from 'lucide-react';
import { IconType } from 'react-icons';

export interface Step {
  number: string;
  icon: LucideIcon | IconType;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    number: '1',
    icon: Calendar,
    title: 'Book Your Free Consultation',
    description:
      "Schedule a strategic call where we'll analyze your needs, challenges, and establish objectives to increase your organic traffic and digital authority.",
  },
  {
    number: '2',
    icon: Strategy,
    title: 'Custom Strategy Development',
    description:
      "We'll create a personalized off-page strategy combining advanced link building techniques, local SEO, and relevant content to optimize your digital presence.",
  },
  {
    number: '3',
    icon: ChartLine,
    title: 'Digital Transformation Results',
    description:
      'Watch your Google visibility increase, credibility strengthen, and ideal customers find and trust your business, resulting in more traffic and higher conversions.',
  },
];
