import { InformationCircleIcon } from '@heroicons/react/24/outline';
import {
  DollarSignIcon,
  LucideIcon,
  Rocket,
  User2Icon,
  ZapIcon,
} from 'lucide-react';
import { IconType } from 'react-icons';
import { FaBlog } from 'react-icons/fa';

interface NAVITEMS {
  name: string;
  url: string;
  icon: LucideIcon | IconType;
  content?: string;
}

export const NAVCONFIG: NAVITEMS[] = [
  {
    name: 'about',
    url: '/about',
    icon: InformationCircleIcon,
  },
  {
    name: 'blog',
    url: '/blog',
    icon: FaBlog,
  },
  {
    name: 'contact',
    url: '/contact',
    icon: User2Icon,
  },
  {
    name: 'pricing',
    url: '/pricing',
    icon: DollarSignIcon,
  },
];

export const HeaderBTN: NAVITEMS[] = [
  {
    name: 'sign in',
    url: '/sign-in',
    icon: Rocket,
    content: 'Get Free SEO Audit',
  },
  {
    name: 'demo',
    url: '/demo',
    icon: ZapIcon,
    content: 'Book a Demo',
  },
];
