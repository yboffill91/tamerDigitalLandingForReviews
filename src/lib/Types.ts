import { LucideIcon } from 'lucide-react';
import { ReactElement } from 'react';
import { IconType } from 'react-icons';

// Types for Hero Section --> src/features/landing
export type TESTIMONIALOBJ = {
  id: number;
  name: string;
  designation: string;
  image: string;
};

export interface HeroDecorativeCards {
  icon: LucideIcon | IconType;
  title: string;
  position: string;
  width: string;
}

export interface BaseNotifications {
  name: string;
  time: string;
  icon: LucideIcon | IconType;
  color: string;
}

export interface Features {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets?: string[];
  url: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon | IconType;
  features: string[];
  cta: string;
}

export interface Review {
  id: number;
  author: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  id?: number;
  title: string;
  icon: LucideIcon | IconType;
  content: string;
  image?: string;
  url?: string;
  category?: string;
}

// About page data models
export interface VISIONITEM {
  title: string;
  icon: LucideIcon | IconType;
  content: string;
  image: string;
  align: string;
}

// Contact page data models
export interface ContactCard {
  title: string;
  description: string;
  contact: string;
  icon: LucideIcon;
  type: string;
  action?: () => void;
}

// Pricing page data models

export interface PricingFeature {
  icon: LucideIcon | IconType;
  name: string;
  items: Item[];
}

interface Item {
  name: string;
  starter: string;
  growth: string;
  enterprise: string;
}

interface FeaturePlan {
  title: string;
  items: string[] | ReactElement[];
}

export interface PricingPlan {
  name: string;
  popular?: boolean;
  price: number;
  billing: string;
  description: string;
  features: FeaturePlan[];
  buttonText: string;
  buttonClass: string;
}

// Services page data models --> SEO Audit Services
export interface SEOReview {
  name: string;
  company: string;
  review: string;
  stars: number;
  image: string;
}

export interface SEOTestimonial {
  name: string;
  designation: string;
  image: string;
}

export interface Challenge {
  icon: LucideIcon | IconType;
  title: string;
  description: string;
}
