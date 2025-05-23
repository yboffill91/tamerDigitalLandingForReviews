import { IconFileAnalytics } from '@tabler/icons-react';
import {
  AirVent,
  Brain,
  Bug,
  Building,
  Calculator,
  Disc3Icon,
  Dog,
  Dumbbell,
  Flower2,
  ForkKnifeCrossed,
  Glasses,
  Hammer,
  HeartPulse,
  Home,
  House,
  LucideIcon,
  ParkingCircle,
  PartyPopper,
  Scale,
  School,
  Scissors,
  ShoppingBasket,
  ShoppingCart,
  Sparkle,
  Sparkles,
  Stethoscope,
  Store,
  TreeDeciduous,
  Truck,
} from 'lucide-react';
import { IconType } from 'react-icons';
import {
  FaBroom,
  FaBullhorn,
  FaServicestack,
  FaTaxi,
  FaToolbox,
  FaTooth,
  FaWater,
} from 'react-icons/fa';

interface BUSINESS_TYPE {
  businessName: string;
  icon: LucideIcon | IconType;
}
export const businessTypes: BUSINESS_TYPE[] = [
  { businessName: 'Marketing Agency', icon: FaBullhorn },
  { businessName: 'Event Planner', icon: PartyPopper },
  { businessName: 'Garage Door Contractor', icon: ParkingCircle },
  { businessName: 'Contractor', icon: Hammer },
  { businessName: 'Chiropractor', icon: Sparkle },
  { businessName: 'HVAC Contractor', icon: AirVent },
  { businessName: 'Veterinarian', icon: Dog },
  { businessName: 'Dentist', icon: FaTooth },
  { businessName: 'Professional Services', icon: FaServicestack },
  { businessName: 'Flooring Contractor', icon: Building },
  { businessName: 'Optometrist', icon: Glasses },
  { businessName: 'Franchise', icon: Store },
  { businessName: 'Consultant', icon: IconFileAnalytics },
  { businessName: 'Insurance', icon: HeartPulse },
  { businessName: 'Plumbing Contractor', icon: FaWater },
  { businessName: 'Salon / Barber Shop', icon: Scissors },
  { businessName: 'Attorney / Law Firm', icon: Scale },
  { businessName: 'Restaurant / Bar', icon: ForkKnifeCrossed },
  { businessName: 'Real Estate', icon: Home },
  { businessName: 'Self Storage Center', icon: House },
  { businessName: 'Retail Store', icon: ShoppingBasket },
  { businessName: 'Landscaping', icon: TreeDeciduous },
  { businessName: 'Therapist', icon: Brain },
  { businessName: 'Spa', icon: Sparkles },
  { businessName: 'Cleaning Company', icon: FaBroom },
  { businessName: 'Pest Control', icon: Bug },
  { businessName: 'Doctor / Medical', icon: Stethoscope },
  { businessName: 'eCommerce Store', icon: ShoppingCart },
  { businessName: 'Lawn Care', icon: Flower2 },
  { businessName: 'Fitness / Trainer / Gym', icon: Dumbbell },
  { businessName: 'Child Care', icon: School },
  { businessName: 'Dance Studio', icon: Disc3Icon },
  { businessName: 'Moving Company', icon: Truck },
  { businessName: 'Auto Repair', icon: FaTaxi },
  { businessName: 'Accounting Firm / CPA', icon: Calculator },
  { businessName: 'Roofing', icon: FaToolbox },
];

// Agrupar los tipos de negocios en categorías
interface BUSINESS_CATEGORIES {
  [key: string]: string[];
}

export const businessCategories: BUSINESS_CATEGORIES = {
  'Professional Services': [
    'Marketing Agency',
    'Consultant',
    'Attorney / Law Firm',
    'Accounting Firm / CPA',
    'Professional Services',
    'Insurance',
    'Real Estate',
    'Therapist',
  ],
  'Health & Wellness': [
    'Chiropractor',
    'Dentist',
    'Optometrist',
    'Doctor / Medical',
    'Spa',
    'Fitness / Trainer / Gym',
    'Veterinarian',
  ],
  'Contractors & Services': [
    'Garage Door Contractor',
    'Contractor',
    'HVAC Contractor',
    'Flooring Contractor',
    'Plumbing Contractor',
    'Roofing',
    'Cleaning Company',
    'Pest Control',
    'Moving Company',
    'Landscaping',
    'Lawn Care',
  ],
  'Commerce & Hospitality': [
    'Retail Store',
    'eCommerce Store',
    'Restaurant / Bar',
    'Franchise',
    'Salon / Barber Shop',
    'Self Storage Center',
    'Auto Repair',
  ],
  'Education & Care': ['Child Care', 'Dance Studio', 'Event Planner'],
};
