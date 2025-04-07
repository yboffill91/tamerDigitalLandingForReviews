import { Code2, Globe, Link2, LucideIcon } from 'lucide-react';

interface SeoResults {
  icon: LucideIcon;
  title: string;
  metric: string;
  impact: string;
  benefit: string;
  description: string;
  url: string;
  action: string;
}

export const seoResults: SeoResults[] = [
  {
    icon: Globe,
    title: 'First Page Rankings',
    metric: 'Top 2',
    impact: 'Google Rankings',
    benefit: 'Dominate Your Market',
    description:
      "Our clients consistently rank on Google's first page for their most valuable keywords, capturing high-intent customers ready to buy.",
    url: '/services/on-page-seo',
    action: 'Claim your top spot',
  },
  {
    icon: Link2,
    title: 'Organic Traffic',
    metric: '+664%',
    impact: 'More Visitors',
    benefit: 'Exponential Growth',
    description:
      'Watch your organic traffic skyrocket as we optimize your site to attract thousands of potential customers .',
    url: '/services/off-page-seo',
    action: 'Boost your traffic now',
  },
  {
    icon: Code2,
    title: 'Lead Generation',
    metric: '+285%',
    impact: 'More Leads',
    benefit: 'Convert Visitors to Customers',
    description:
      'Turn your website into a lead-generating machine with optimized content that converts visitors into paying customers.',
    url: '/services/technical-seo',
    action: 'Start converting more',
  },
];
