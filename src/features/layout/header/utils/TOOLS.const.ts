import { Calculator, FileText, Globe, MapPin, Search, BarChart2, CreditCard, Users, LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import type { Metadata } from "next";

export interface TOOL {
    name: string
    icon: LucideIcon | IconType
    description: string
    href: string
    status? : 'ready'
    metadata: Metadata;
}

export const tools : TOOL[] = [
    {
      name: 'Website Cost Calculator',
      icon: Calculator,
      description: 'Calculate accurate website development costs',
      href: '/website-calculator',
      status: 'ready',
      metadata: {
        title: 'Tamer Digital Website Cost Calculator',
        description: 'Calculate accurate website development costs -- TamerDigital',
      }
    },
    {
      name: 'Seo Article Builder',
      icon: FileText,
      description: 'Create SEO-optimized content easily',
      href: '/seo-builder',
      metadata: {
        title: 'Seo Article Builder',
        description: 'Create SEO-optimized content easily -- TamerDigital',
      }
    },
    {
      name: 'Full Website Creator',
      icon: Globe,
      description: 'Build professional websites quickly',
      href: '/website-creator',
      metadata: {
        title: 'Full Website Creator',
        description: 'Build professional websites quickly -- TamerDigital',
      }
    },
    {
      name: 'Gmb Booster',
      icon: MapPin,
      description: 'Optimize Google My Business listing',
      href: '/gmb-booster',
      metadata: {
        title: 'Gmb Booster',
        description: 'Optimize Google My Business listing -- TamerDigital',
      }
    },
    {
      name: 'Seo Audit Tool',
      icon: Search,
      description: 'Comprehensive SEO analysis',
      href: '/seo-audit',
      metadata: {
        title: 'Seo Audit Tool',
        description: 'Comprehensive SEO analysis -- TamerDigital',
      }
    },
    {
      name: 'Siteaudit Analyzer',
      icon: BarChart2,
      description: 'Deep website performance insights',
      href: '/site-audit',
      metadata: {
        title: 'Siteaudit Analyzer',
        description: 'Deep website performance insights -- TamerDigital',
      }
    },
    {
      name: 'Digital Card Maker',
      icon: CreditCard,
      description: 'Create digital business cards',
      href: '/card-maker',
      metadata: {
        title: 'Digital Card Maker',
        description: 'Create digital business cards -- TamerDigital',
      }
    },
    {
      name: 'Smallbiz Crm',
      icon: Users,
      description: 'Simple customer relationship management',
      href: '/smallbiz-crm',
      metadata: {
        title: 'Smallbiz Crm',
        description: 'Simple customer relationship management -- TamerDigital',
      }
    },
  ];

  
  interface VIDEO {
    title: string
    duration: string
    thumbnail: string
    href: string
  }
export  const videos: VIDEO[] = [
    {
      title: 'Getting Started Guide',
      duration: '5:32',
      thumbnail: '/api/placeholder/240/135',
      href: '#',
    },
    {
      title: 'Advanced Techniques',
      duration: '8:15',
      thumbnail: '/api/placeholder/240/135',
      href: '#',
    },
  ];
  
  interface BLOGPOST {
    title:  string
    description: string
    readTime: string
    href: string
  }
 export const blogPosts: BLOGPOST[] = [
    {
      title: '10 Ways to Improve Your Content Strategy',
      description: 'Learn how to create content that converts',
      readTime: '5 min read',
      href: '#',
    },
    {
      title: 'SEO Best Practices for 2024',
      description: 'Stay ahead of the latest SEO trends',
      readTime: '7 min read',
      href: '#',
    },
    {
      title: 'Mastering Keyword Research',
      description: 'Find the right keywords for your business',
      readTime: '6 min read',
      href: '#',
    },
  ];
  