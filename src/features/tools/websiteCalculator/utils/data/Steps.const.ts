import {
  Flag,
  Globe,
  Languages,
  LayoutDashboard,
  LineChart,
  LucideIcon,
  Mail,
  Palette,
  Save,
  Search,
  Shield,
  ShoppingCart,
  Wrench,
  Zap,
} from 'lucide-react';

export interface Step {
  icon: LucideIcon;
  label: string;
  link: string;
  step: number;
  description?: string;
  title: string;
}

export const Steps: Step[] = [
  {
    icon: Globe,
    label: 'Domain and Hosting',
    link: '/website-calculator/hostingStep',
    step: 1,
    description:
      'Choose your preferred hosting provider. Prices shown are monthly for hosting and yearly for domains.',
    title: 'Select Domain and Hosting Provider',
  },
  {
    icon: Palette,
    label: 'Design and User Experience',
    link: '/website-calculator/themeStep',
    step: 2,
    description:
      'Select a theme that best fits your needs. Each theme comes with both free and premium options.',
    title: 'Choose Your Theme',
  },
  {
    icon: LayoutDashboard,
    label: 'Pages',
    link: '/website-calculator/pageStep',
    step: 3,
    description:
      'Configure the pages for your website. The module works in two parts: base pages and custom pages.',
    title: 'Configure Your Pages',
  },
  {
    icon: Shield,
    label: 'Security',
    link: '/website-calculator/securityStep',
    step: 4,
    description:
      'Choose a security plugin to protect your website from threats and attacks. Each option offers different levels of protection and features',
    title: 'Select Security Plugin',
  },
  {
    icon: Search,
    label: 'SEO',
    link: '/website-calculator/seoStep',
    step: 5,
    description:
      'Choose an SEO plugin to optimize your website for search engines. Each option offers different features for improving your site&apos;s visibility.',
    title: 'SEO Plugin Selection',
  },
  {
    icon: Save,
    label: 'Backup',
    link: '/website-calculator/backupStep',
    step: 6,
    description:
      'Includes professional setup, configuration, and initial backup',
    title: 'Total Backup Solution Cost',
  },
  {
    icon: LineChart,
    label: 'Analytics',
    link: '/website-calculator/analyticsStep',
    step: 7,
    description:
      'Choose an analytics plugin to track and analyze your website&apos;s performance. Each option offers different features for visitor tracking and reporting.',
    title: 'Total Analytics Setup Cost',
  },
  {
    icon: Zap,
    label: 'Cache & Optimization',
    link: '/website-calculator/cacheStep',
    step: 8,
    description:
      'Choose a caching and optimization plugin to improve your website&apos;s performance. Each option offers different features for speed optimization and user experience.',
    title: 'Cache & Optimization',
  },
  {
    icon: Mail,
    label: 'Forms & Subscriptions',
    link: '/website-calculator/formsStep',
    step: 9,
    description:
      'Choose a form and subscription plugin to handle contact forms and email subscriptions. Each option offers different features for form customization and email management.',
    title: 'Forms & Subscriptions',
  },
  {
    icon: Shield,
    label: 'Anti-spam Protection',
    link: '/website-calculator/antispamStep',
    step: 10,
    description:
      'Choose an anti-spam plugin to protect your website from spam and malicious attacks. Each option offers different features for spam filtering and security.',
    title: 'Anti-spam Protection',
  },
  {
    icon: Languages,
    label: 'Multilingual',
    link: '/website-calculator/multilingualStep',
    step: 11,
    description:
      'Choose a multilingual plugin to support multiple languages on your website. Each option offers different features for language management and translation.',
    title: 'Multilingual',
  },
  {
    icon: ShoppingCart,
    label: 'eCommerce',
    link: '/website-calculator/ecommerceStep',
    step: 12,
    description:
      'Choose an e-commerce plugin to add e-commerce functionality to your website. Each option offers different features for product management, payment processing, and order handling.',
    title: 'eCommerce',
  },
  {
    icon: Wrench,
    label: 'Maintenance',
    link: '/website-calculator/maintenanceStep',
    step: 13,
    description:
      'Choose a maintenance plugin to keep your website running smoothly. Each option offers different features for regular updates and security patches.',
    title: 'Maintenance',
  },
  {
    icon: Flag,
    label: 'Final Review',
    link: '/website-calculator/finalReviewStep',
    step: 14,
    description:
      'Review all the selected plugins and their configurations. This step ensures that you have the right setup for your website.',
    title: 'Final Review',
  },
];
