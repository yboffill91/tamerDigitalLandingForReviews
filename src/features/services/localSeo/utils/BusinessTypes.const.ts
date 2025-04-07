import { Disc2, Grid2X2, LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';
import {
  FaBullhorn,
  FaCalendarAlt,
  FaWarehouse,
  FaHardHat,
  FaUserMd,
  FaSnowflake,
  FaPaw,
  FaTooth,
  FaBriefcase,
  FaEye,
  FaStore,
  FaChartLine,
  FaShieldAlt,
  FaWrench,
  FaCut,
  FaBalanceScale,
  FaUtensils,
  FaHome,
  FaShoppingBag,
  FaTree,
  FaBrain,
  FaHotTub,
  FaBroom,
  FaBug,
  FaStethoscope,
  FaShoppingCart,
  FaLeaf,
  FaDumbbell,
  FaBaby,
  FaTruck,
  FaCar,
  FaCalculator,
} from 'react-icons/fa';

interface BusinessType {
  name: string;
  icon: LucideIcon | IconType;
  description: string;
}

export const businessTypes: BusinessType[] = [
  {
    name: 'Marketing Agency',
    icon: FaBullhorn,
    description: 'Company offering marketing and advertising services',
  },
  {
    name: 'Event Planner',
    icon: FaCalendarAlt,
    description: 'Professional who organizes and coordinates events',
  },
  {
    name: 'Garage Door Contractor',
    icon: FaWarehouse,
    description: 'Specialist in garage door installation and repair',
  },
  {
    name: 'Contractor',
    icon: FaHardHat,
    description: 'Professional who performs construction and remodeling work',
  },
  {
    name: 'Chiropractor',
    icon: FaUserMd,
    description:
      'Healthcare professional specializing in the musculoskeletal system',
  },
  {
    name: 'HVAC Contractor',
    icon: FaSnowflake,
    description:
      'Specialist in heating, ventilation, and air conditioning systems',
  },
  {
    name: 'Veterinarian',
    icon: FaPaw,
    description: 'Doctor specializing in animal care',
  },
  {
    name: 'Dentist',
    icon: FaTooth,
    description: 'Healthcare professional specializing in dental care',
  },
  {
    name: 'Professional Services',
    icon: FaBriefcase,
    description: 'Companies offering specialized professional services',
  },
  {
    name: 'Flooring Contractor',
    icon: Grid2X2,
    description: 'Specialist in floor installation and repair',
  },
  {
    name: 'Optometrist',
    icon: FaEye,
    description: 'Healthcare professional specializing in eye care',
  },
  {
    name: 'Franchise',
    icon: FaStore,
    description: 'Business operating under an established brand and system',
  },
  {
    name: 'Consultant',
    icon: FaChartLine,
    description: 'Professional offering expert advice in a specific field',
  },
  {
    name: 'Insurance',
    icon: FaShieldAlt,
    description: 'Company offering financial protection against risks',
  },
  {
    name: 'Plumbing Contractor',
    icon: FaWrench,
    description: 'Specialist in plumbing system installation and repair',
  },
  {
    name: 'Salon / Barber Shop',
    icon: FaCut,
    description: 'Establishment offering hairdressing and beauty services',
  },
  {
    name: 'Attorney / Law Firm',
    icon: FaBalanceScale,
    description: 'Professional or firm offering legal services',
  },
  {
    name: 'Restaurant / Bar',
    icon: FaUtensils,
    description: 'Establishment serving food and drinks',
  },
  {
    name: 'Real Estate',
    icon: FaHome,
    description: 'Business related to buying, selling, and renting properties',
  },
  {
    name: 'Self Storage Center',
    icon: FaWarehouse,
    description: 'Facility offering storage spaces',
  },
  {
    name: 'Retail Store',
    icon: FaShoppingBag,
    description: 'Store selling products directly to consumers',
  },
  {
    name: 'Landscaping',
    icon: FaTree,
    description:
      'Service for designing and maintaining gardens and green spaces',
  },
  {
    name: 'Therapist',
    icon: FaBrain,
    description: 'Professional offering psychological or physical therapy',
  },
  {
    name: 'Spa',
    icon: FaHotTub,
    description: 'Establishment offering relaxation and beauty treatments',
  },
  {
    name: 'Cleaning Company',
    icon: FaBroom,
    description: 'Company offering cleaning services',
  },
  {
    name: 'Pest Control',
    icon: FaBug,
    description: 'Service for controlling and eliminating pests',
  },
  {
    name: 'Doctor / Medical',
    icon: FaStethoscope,
    description: 'Professional or establishment offering medical services',
  },
  {
    name: 'eCommerce Store',
    icon: FaShoppingCart,
    description: 'Online store selling products through the internet',
  },
  {
    name: 'Lawn Care',
    icon: FaLeaf,
    description: 'Service for lawn and garden maintenance',
  },
  {
    name: 'Fitness / Trainer / Gym',
    icon: FaDumbbell,
    description: 'Business related to exercise and physical health',
  },
  {
    name: 'Child Care',
    icon: FaBaby,
    description: 'Service for child care and attention',
  },
  {
    name: 'Dance Studio',
    icon: Disc2,
    description: 'Establishment offering dance classes and training',
  },
  {
    name: 'Moving Company',
    icon: FaTruck,
    description: 'Company offering moving and transportation services',
  },
  {
    name: 'Auto Repair',
    icon: FaCar,
    description: 'Workshop for vehicle repair and maintenance',
  },
  {
    name: 'Accounting Firm / CPA',
    icon: FaCalculator,
    description: 'Company or professional offering accounting services',
  },
  {
    name: 'Roofing',
    icon: FaHome,
    description: 'Service for roof installation and repair',
  },
];
