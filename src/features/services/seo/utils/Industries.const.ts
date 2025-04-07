import {
  Building2,
  CalendarDays,
  Wrench,
  Hammer,
  Ruler,
  Flame,
  Paintbrush,
  Stethoscope,
  HeartPulse,
  Store,
  Briefcase,
  Car,
  Home,
  Warehouse,
  Scissors,
  Leaf,
  Brain,
  ShoppingCart,
  GraduationCap,
  HardHat,
  Brush,
  Bed,
  School,
  Glasses,
  Dog,
  Calculator,
  UtensilsCrossed,
  Dumbbell,
  Baby,
  Music,
  Box,
  Shield,
  Bug,
  LucideIcon,
} from 'lucide-react';
import { IconType } from 'react-icons';
import { FaSpa } from 'react-icons/fa';

interface Industry {
  icon: LucideIcon | IconType;
  name: string;
  description: string;
}

export const industries: Industry[] = [
  {
    icon: Building2,
    name: 'Marketing Agency',
    description: "Boost your agency's visibility",
  },
  {
    icon: CalendarDays,
    name: 'Event Planner',
    description: 'Stand out in local searches',
  },
  {
    icon: Wrench,
    name: 'Contractor',
    description: 'General contracting success',
  },
  {
    icon: Hammer,
    name: 'Garage Door Contractor',
    description: 'Reach local customers',
  },
  {
    icon: Ruler,
    name: 'Flooring Contractor',
    description: 'Dominate local searches',
  },
  {
    icon: Flame,
    name: 'HVAC Contractor',
    description: 'Grow your service area',
  },
  {
    icon: Paintbrush,
    name: 'Roofing',
    description: 'Lead generation that works',
  },
  {
    icon: Stethoscope,
    name: 'Doctor / Medical',
    description: 'Reach more patients online',
  },
  {
    icon: HeartPulse,
    name: 'Chiropractor',
    description: 'Attract new patients',
  },
  {
    icon: Store,
    name: 'Retail',
    description: 'Drive local foot traffic',
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    description: 'Build authority online',
  },
  {
    icon: Car,
    name: 'Auto Services',
    description: 'Attract more customers',
  },
  {
    icon: Home,
    name: 'Real Estate',
    description: 'Rank for property searches',
  },
  {
    icon: Warehouse,
    name: 'Manufacturing',
    description: 'Generate B2B leads',
  },
  {
    icon: Scissors,
    name: 'Beauty & Wellness',
    description: 'Fill your appointment book',
  },
  {
    icon: Leaf,
    name: 'Home Services',
    description: 'Grow your service area',
  },
  {
    icon: Brain,
    name: 'Education',
    description: 'Attract more students',
  },
  {
    icon: ShoppingCart,
    name: 'E-commerce',
    description: 'Boost online sales',
  },
  {
    icon: GraduationCap,
    name: 'Legal Services',
    description: 'Generate qualified leads',
  },
  {
    icon: HardHat,
    name: 'Construction',
    description: 'Build your pipeline',
  },
  {
    icon: Brush,
    name: 'Cleaning Company',
    description: 'Increase service bookings',
  },
  {
    icon: Bed,
    name: 'Hotels',
    description: 'Boost direct bookings',
  },
  {
    icon: School,
    name: 'Schools',
    description: 'Attract more students',
  },
  {
    icon: Glasses,
    name: 'Optometrist',
    description: 'Reach local patients',
  },
  {
    icon: HeartPulse,
    name: 'Dental',
    description: 'Fill appointment slots',
  },
  {
    icon: Dog,
    name: 'Veterinary',
    description: 'Connect with pet owners',
  },
  {
    icon: Calculator,
    name: 'Accounting',
    description: 'Attract business clients',
  },
  {
    icon: UtensilsCrossed,
    name: 'Restaurant / Bar',
    description: 'Increase reservations',
  },
  {
    icon: Dumbbell,
    name: 'Fitness / Trainer / Gym',
    description: 'Build your membership',
  },
  {
    icon: Baby,
    name: 'Child Care',
    description: 'Connect with parents',
  },
  {
    icon: Music,
    name: 'Dance Studio',
    description: 'Fill your classes',
  },
  {
    icon: Box,
    name: 'Moving Company',
    description: 'Book more moves',
  },
  {
    icon: Car,
    name: 'Auto Repair',
    description: 'Drive more appointments',
  },
  {
    icon: Shield,
    name: 'Insurance',
    description: 'Generate quality leads',
  },
  {
    icon: Warehouse,
    name: 'Self Storage Center',
    description: 'Fill your units',
  },
  {
    icon: Leaf,
    name: 'Landscaping',
    description: 'Grow your client base',
  },
];

export const lastRowIndustries: Industry[] = [
  {
    icon: Brain,
    name: 'Therapist',
    description: 'Connect with clients',
  },
  {
    icon: FaSpa,
    name: 'Spa',
    description: 'Boost appointments',
  },
  {
    icon: Bug,
    name: 'Pest Control',
    description: 'Increase service calls',
  },
  {
    icon: Leaf,
    name: 'Lawn Care',
    description: 'Expand your territory',
  },
];
