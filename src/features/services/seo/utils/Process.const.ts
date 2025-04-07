import { Search, Code, LineChart, Rocket, LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

interface Phase {
  title: string;
  description: string;
  icon: LucideIcon | IconType;
  image: string;
}

export const phases: Phase[] = [
  {
    title: 'Technical SEO Audit & Strategy',
    description:
      "We perform a comprehensive analysis of your website's technical foundation, identifying critical issues and opportunities. You'll receive a clear roadmap for exponential growth.",
    icon: Search,
    image: '/features/services/seo/audit.webp',
  },
  {
    title: 'Advanced Technical Implementation',
    description:
      'Our expert team implements proven technical optimizations - from Core Web Vitals improvements to advanced JavaScript rendering solutions. Watch your site transform into a high-performance machine.',
    icon: Code,
    image: '/features/services/seo/chart.webp',
  },
  {
    title: 'Data-Driven Optimization',
    description:
      "We continuously monitor your site's performance metrics and search visibility, making data-backed improvements to maximize your ROI. Every optimization is measured and refined for peak results.",
    icon: LineChart,
    image: '/features/services/seo/analysis.webp',
  },
  {
    title: 'Accelerated Growth & Scale',
    description:
      'Experience exponential growth as your optimized technical foundation drives more qualified traffic and conversions. We ensure your site maintains peak performance even as you scale.',
    icon: Rocket,
    image: '/features/services/seo/scaling.webp',
  },
];
