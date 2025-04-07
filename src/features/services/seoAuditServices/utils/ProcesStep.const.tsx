import { FileText, Gauge, Globe, LineChart, Link2, Search } from 'lucide-react';
import { ReactNode } from 'react';

interface Step {
  name: string;
  icon: ReactNode; // Suponiendo que los iconos son elementos JSX
  title: string;
  description: string;
  achievements: string[];
}

export const processSteps: { [key: string]: Step } = {
  technical: {
    name: 'Technical Analysis',
    icon: <Globe className='w-5 h-5' />,
    title: 'Phase 1 - Technical Analysis',
    description:
      'A deep technical analysis that uncovers hidden issues preventing your website from ranking higher',
    achievements: [
      "Boost your website's crawlability so Google finds all your important pages",
      'Fix critical technical errors that are hurting your rankings',
      'Optimize your site structure for better search visibility',
      'Up to 30% improvement in organic traffic through technical fixes alone',
    ],
  },
  speed: {
    name: 'Website Speed',
    icon: <Gauge className='w-5 h-5' />,
    title: 'Phase 2 - Website Speed',
    description:
      'Transform your slow-loading pages into lightning-fast experiences that convert more visitors',
    achievements: [
      'Cut page load times by up to 70% through expert optimization',
      'Reduce bounce rates with faster-loading pages',
      'Improve Core Web Vitals scores for better rankings',
      'Higher conversion rates and improved user satisfaction',
    ],
  },
  competitors: {
    name: 'Competitor Analysis',
    icon: <LineChart className='w-5 h-5' />,
    title: 'Phase 3 - Competitor Analysis',
    description:
      'Discover exactly how to outrank your competitors and capture their market share',
    achievements: [
      "Uncover your competitors' most successful keywords and strategies",
      'Find gaps in their content you can exploit',
      "Identify high-ROI opportunities they're missing",
      'Clear roadmap to outperform competitors in search results',
    ],
  },
  keywords: {
    name: 'Keyword Research',
    icon: <Search className='w-5 h-5' />,
    title: 'Phase 4 - Keyword Research',
    description:
      'Find the exact search terms your ideal customers use to find businesses like yours',
    achievements: [
      'Discover untapped keywords with high purchase intent',
      'Map keywords to each stage of your sales funnel',
      'Identify quick-win ranking opportunities',
      'Target keywords that actually convert into customers',
    ],
  },
  links: {
    name: 'Link Analysis',
    icon: <Link2 className='w-5 h-5' />,
    title: 'Phase 5 - Link Analysis',
    description:
      "Build your site's authority and protect it from harmful backlinks that damage rankings",
    achievements: [
      'Find and remove toxic backlinks hurting your rankings',
      'Discover high-authority linking opportunities',
      "Analyze competitors' backlink strategies",
      'Stronger domain authority and better rankings',
    ],
  },
  content: {
    name: 'Content Analysis',
    icon: <FileText className='w-5 h-5' />,
    title: 'Phase 6 - Content Analysis',
    description:
      'Transform your content into a powerful asset that attracts and converts your ideal customers',
    achievements: [
      "Find and fix content that's hurting your rankings",
      'Optimize existing content for better performance',
      'Create a content plan that drives conversions',
      'Content that ranks better and converts more visitors',
    ],
  },
};
