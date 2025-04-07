import { Features, Service } from '@/lib';
import {
  Building2,
  Calculator,
  CodeIcon,
  Database,
  DollarSign,
  FileText,
  Filter,
  Gauge,
  Globe,
  LineChart,
  Link,
  LucideIcon,
  Mail,
  MessageSquare,
  Microscope,
  PenTool,
  Search,
  Settings,
  Share2,
  Star,
  Store,
  Target,
  Users,
} from 'lucide-react';
import { IconType } from 'react-icons';

interface Feature {
  icon: LucideIcon | IconType;
  title: string;
  description: string;
  bullets: string[];
  image: string;
}

export const features: Feature[] = [
  {
    icon: Mail,
    title: 'Email Marketing Results',
    description:
      'Transform your customer relationships with proven email marketing strategies that drive engagement and sales:',
    bullets: [
      'Capture attention with 48% higher open rates, meaning more people will see your branded offers and messages',
      'Drive 65% more website visits through engaging email content that converts readers into active customers, educating your customers',
      'Generate 36% more revenue from each email campaign through targeted messaging and automation',
      'Build lasting relationships that increase customer value by 25% through personalized engagement',
    ],
    image: '/features/landing/feat-tabs/emailmarketing.webp',
  },
  {
    icon: Store,
    title: 'Local Business Growth',
    description:
      'Watch your local presence skyrocket with proven tactics that put your business at the top of the local pack:',
    bullets: [
      'Dominate local searches : Stand out with an 85% optimized Google Business profile that makes your business the preferred choice in your area',
      'Increase visibility : Get 127% more profile views from local customers actively searching for your services',
      'Increase direct engagement : ​Get the phone ringing with 89% more client inquiries and appointment requests ready to connect',
      'Drive foot traffic : Attract 156% more customers asking for directions to your door',
    ],
    image: '/features/landing/feat-tabs/localSEO.webp',
  },
  {
    icon: Search,
    title: 'Search Rankings & Visibility',
    description:
      "Experience the power of having a fast website that responds with fast speed so you don't lose visitors:",
    bullets: [
      'Attract customers with high purchase intent: Get top positions on page 1 for your most valuable keywords, like 93.5% of our customers',
      'Increase website traffic: Increase visitors by 6.6 times with organic traffic growth tailored to your audience without ads',
      'Attract visitors seamlessly: Keep them engaged with pages loading 45% faster, improving rankings and conversions',
      'Maximize your marketing budget: Get a 4.2x ROI through sustainable, long-term organic growth strategies',
    ],
    image: '/features/landing/feat-tabs/rankingVisibility.webp',
  },
  {
    icon: Store,
    title: 'Sales Funnels',
    description:
      'Turn visitors into customers with a data-driven approach to conversion optimization:',
    bullets: [
      'Nearly triple your sales with a 285% boost in conversion rates through optimized user journeys',
      'Attract 15,000+ ready-to-buy visitors monthly through targeted traffic strategies',
      'Fill your sales pipeline with 4,500 qualified leads every month - each pre-sold on your value',
      'Add $187,500 to your monthly revenue through systematic conversion optimization',
    ],
    image: '/features/landing/feat-tabs/funnel.webp',
  },
  {
    icon: DollarSign,
    title: 'Search Engine Marketing & Paid Social Advertising',
    description:
      'Amplify your digital presence through strategic paid campaigns:',
    bullets: [
      'Performance Optimization: Achieve 52% higher engagement and 45% lower costs across Google & Facebook',
      'Advanced Targeting: Reach 78% more qualified prospects through cross-platform audience matching',
      'Creative Excellence: Generate 85% higher click-through rates with compelling ad formats',
      'Conversion Focus: Increase sales by 63% with optimized landing pages and retargeting',
      'Total Impact: Average 4.2x return on ad spend across search and social networks',
    ],
    image: '/features/landing/feat-tabs/paidads.webp',
  },
  {
    icon: Share2,
    title: 'Social Media',
    description:
      'Build lasting brand authority through organic social presence:',
    bullets: [
      'Content Strategy: Drive 195% higher engagement with strategic posting',
      'Community Growth: Increase followers by 67% through active engagement',
      'Brand Voice: Boost recognition by 88% with consistent messaging',
      'Analytics: Optimize performance with data-driven insights',
      'Total Impact: Create 2.9x more brand value through social channels',
    ],
    image: '/features/landing/feat-tabs/socialmedia.webp',
  },
];

export const featuresGrid: Features[] = [
  {
    icon: Calculator,
    title: 'Web Cost Calculator',
    description:
      'Calculate accurate website development costs instantly with our comprehensive pricing tool.',
    url: '/tools/web-cost-calculator',
  },
  {
    icon: Search,
    title: 'SEO Scout',
    description:
      "Analyze your website's SEO performance and get actionable recommendations for improvement.",
    url: '/tools/seo-scout',
  },
  {
    icon: Globe,
    title: 'Website Builder',
    description:
      'Create professional websites quickly with our intuitive drag-and-drop builder.',
    url: '/tools/website-builder',
  },
  {
    icon: Building2,
    title: 'GMB Manager',
    description:
      'Optimize and manage your Google My Business profile for better local visibility.',
    url: '/tools/gmb-manager',
  },
  {
    icon: MessageSquare,
    title: 'AI Chat',
    description:
      'Get instant answers to your marketing questions with our AI-powered chat assistant.',
    url: '/tools/ai-chat',
  },
  {
    icon: LineChart,
    title: 'Sales Funnel',
    description:
      'Design and optimize your sales funnel with our conversion-focused builder.',
    url: '/tools/sales-funnel',
  },
  {
    icon: Database,
    title: 'Business CRM',
    description:
      'Manage customer relationships and track leads with our simple CRM system.',
    url: '/tools/business-crm',
  },
  {
    icon: PenTool,
    title: 'AI Writer',
    description:
      'Generate engaging content and copy with our AI-powered writing assistant.',
    url: '/tools/ai-writer',
  },
];

export const seoServices: Service[] = [
  {
    title: 'SEO Audit',
    description: 'Complete technical analysis & optimization',
    icon: Microscope,
    features: [
      'Technical website analysis',
      'Indexing error detection',
      'Loading speed optimization',
    ],
    cta: 'Get My Free Audit',
  },
  {
    title: 'Keywords Research',
    description: 'Sales-driving keyword strategy',
    icon: Search,
    features: [
      'High-value keyword identification',
      'Competitor keyword analysis',
      'Long-tail strategies',
    ],
    cta: 'Discover My Keywords',
  },
  {
    title: 'SEO On-Page',
    description: 'Complete content optimization',
    icon: FileText,
    features: [
      'Meta tags optimization',
      'URL structure improvement',
      'Image optimization',
    ],
    cta: 'Optimize My Pages',
  },
  {
    title: 'Technical SEO',
    description: 'Performance & website structure',
    icon: CodeIcon,
    features: [
      'Schema implementation',
      'Robots.txt optimization',
      'Core Web Vitals',
    ],
    cta: 'Learn about Technical SEO',
  },
  {
    title: 'SEO Off-Page',
    description: 'Digital authority & presence',
    icon: Link,
    features: ['Quality backlinks', 'Link analysis', 'Authority building'],
    cta: 'Explore Off-Page SEO',
  },
  {
    title: 'SEO Local',
    description: 'Dominate your local market',
    icon: Building2,
    features: [
      'Google Business Profile',
      'Reviews & reputation',
      'Local directories',
    ],
    cta: 'Discover Local SEO',
  },
  {
    title: 'E-commerce SEO',
    description: 'Online store optimization',
    icon: Settings,
    features: [
      'Product page optimization',
      'Search filters',
      'Transactional keywords',
    ],
    cta: 'Explore E-commerce SEO',
  },
  {
    title: 'SEO Monitoring',
    description: 'Continuous tracking & optimization',
    icon: Gauge,
    features: [
      'Analytics & reporting',
      'Performance reports',
      'Keyword rankings',
    ],
    cta: 'Learn about SEO Monitoring',
  },
];

export const marketingServices: Service[] = [
  {
    title: 'Social Media',
    description: 'Professional social media management',
    icon: Share2,
    features: ['Content strategy', 'Community management', 'Ad campaigns'],
    cta: 'Explore Social Media Marketing',
  },
  {
    title: 'Google Ads',
    description: 'Sales-driven campaigns',
    icon: Target,
    features: ['Search & Display campaigns', 'Remarketing', 'ROI optimization'],
    cta: 'Learn about Google Ads',
  },
  {
    title: 'Email Marketing',
    description: 'Automation & conversion',
    icon: Mail,
    features: ['Custom newsletters', 'Advanced segmentation', 'Drip campaigns'],
    cta: 'Discover Email Marketing',
  },
  {
    title: 'Content Marketing',
    description: 'Content that connects & converts',
    icon: PenTool,
    features: ['SEO-optimized blogs', 'Downloadable content', 'Storytelling'],
    cta: 'Explore Content Marketing',
  },
  {
    title: 'Influencer Marketing',
    description: 'Strategic collaborations',
    icon: Users,
    features: [
      'Influencer selection',
      'Campaign management',
      'Results analysis',
    ],
    cta: 'Learn about Influencer Marketing',
  },
  {
    title: 'Online Reputation',
    description: 'Digital image management',
    icon: Star,
    features: [
      'Mention monitoring',
      'Crisis management',
      'Perception improvement',
    ],
    cta: 'Explore Reputation Management',
  },
  {
    title: 'Marketing Automation',
    description: 'Process automation',
    icon: Settings,
    features: ['Tools setup', 'Automated flows', 'Continuous optimization'],
    cta: 'Learn about Marketing Automation',
  },
  {
    title: 'Sales Funnel',
    description: 'Convert visitors into customers',
    icon: Filter,
    features: [
      'Lead generation',
      'Nurture sequences',
      'Conversion optimization',
    ],
    cta: 'Explore Sales Funnels',
  },
];
