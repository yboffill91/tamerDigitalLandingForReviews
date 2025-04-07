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
}

export const businessTypes: BusinessType[] = [
  {
    name: 'Marketing Agency',
    icon: FaBullhorn,
  },
  {
    name: 'Event Planner',
    icon: FaCalendarAlt,
  },
  {
    name: 'Garage Door Contractor',
    icon: FaWarehouse,
  },
  {
    name: 'Contractor',
    icon: FaHardHat,
  },
  {
    name: 'Chiropractor',
    icon: FaUserMd,
  },
  {
    name: 'HVAC Contractor',
    icon: FaSnowflake,
  },
  {
    name: 'Veterinarian',
    icon: FaPaw,
  },
  {
    name: 'Dentist',
    icon: FaTooth,
  },
  {
    name: 'Professional Services',
    icon: FaBriefcase,
  },
  {
    name: 'Flooring Contractor',
    icon: Grid2X2,
  },
  {
    name: 'Optometrist',
    icon: FaEye,
  },
  {
    name: 'Franchise',
    icon: FaStore,
  },
  {
    name: 'Consultant',
    icon: FaChartLine,
  },
  {
    name: 'Insurance',
    icon: FaShieldAlt,
  },
  {
    name: 'Plumbing Contractor',
    icon: FaWrench,
  },
  {
    name: 'Salon / Barber Shop',
    icon: FaCut,
  },
  {
    name: 'Attorney / Law Firm',
    icon: FaBalanceScale,
  },
  {
    name: 'Restaurant / Bar',
    icon: FaUtensils,
  },
  {
    name: 'Real Estate',
    icon: FaHome,
  },
  {
    name: 'Self Storage Center',
    icon: FaWarehouse,
  },
  {
    name: 'Retail Store',
    icon: FaShoppingBag,
  },
  {
    name: 'Landscaping',
    icon: FaTree,
  },
  {
    name: 'Therapist',
    icon: FaBrain,
  },
  {
    name: 'Spa',
    icon: FaHotTub,
  },
  {
    name: 'Cleaning Company',
    icon: FaBroom,
  },
  {
    name: 'Pest Control',
    icon: FaBug,
  },
  {
    name: 'Doctor / Medical',
    icon: FaStethoscope,
  },
  {
    name: 'eCommerce Store',
    icon: FaShoppingCart,
  },
  {
    name: 'Lawn Care',
    icon: FaLeaf,
  },
  {
    name: 'Fitness / Trainer / Gym',
    icon: FaDumbbell,
  },
  {
    name: 'Child Care',
    icon: FaBaby,
  },
  {
    name: 'Dance Studio',
    icon: Disc2,
  },
  {
    name: 'Moving Company',
    icon: FaTruck,
  },
  {
    name: 'Auto Repair',
    icon: FaCar,
  },
  {
    name: 'Accounting Firm / CPA',
    icon: FaCalculator,
  },
  {
    name: 'Roofing',
    icon: FaHome,
  },
];
