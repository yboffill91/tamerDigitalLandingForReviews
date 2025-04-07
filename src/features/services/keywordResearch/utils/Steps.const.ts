import { CalendarCheck, LucideIcon, Search, Target } from 'lucide-react';
import { IconType } from 'react-icons';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon | IconType;
}

export const steps: Step[] = [
  {
    number: '01',
    title: 'Book Your Strategy Call',
    description:
      "Schedule a free 30-minute consultation where we'll discuss your goals and assess your current keyword strategy.",
    icon: CalendarCheck,
  },
  {
    number: '02',
    title: 'Custom Research & Analysis',
    description:
      'Our team conducts in-depth keyword research tailored to your industry, analyzing search intent and competition.',
    icon: Search,
  },
  {
    number: '03',
    title: 'Implementation & Growth',
    description:
      'Watch your visibility grow as we implement the strategy and continuously optimize for better results.',
    icon: Target,
  },
];
