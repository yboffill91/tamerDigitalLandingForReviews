import {
  BarChart2,
  Calendar,
  ChartBar,
  ClipboardCheck,
  FileText,
  LineChart,
  MessageSquare,
  Pencil,
  RefreshCw,
  Search,
  Settings,
  Share2,
  TestTube,
  Users,
} from 'lucide-react';
import { ReactNode } from 'react';
interface Step {
  icon: ReactNode;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    icon: <ClipboardCheck className='w-6 h-6 text-secondary' />,
    title: 'Initial Meeting and Assessment',
    description:
      'Understanding your objectives, challenges, and expectations through in-depth consultation to define clear goals.',
  },
  {
    icon: <Search className='w-6 h-6 text-secondary' />,
    title: 'Market and Competition Analysis',
    description:
      'Detailed study of your sector, evaluating competition and identifying content trends and engagement practices.',
  },
  {
    icon: <LineChart className='w-6 h-6 text-secondary' />,
    title: 'Gaps and Opportunities',
    description:
      'Comparing existing content with competitors to identify growth opportunities and strategic advantages.',
  },
  {
    icon: <Users className='w-6 h-6 text-secondary' />,
    title: 'Audience and Keyword Research',
    description:
      'Analyzing target audience behavior and conducting comprehensive keyword research for optimization.',
  },
  {
    icon: <ChartBar className='w-6 h-6 text-secondary' />,
    title: 'KPIs and Tools Selection',
    description:
      'Establishing key performance indicators and choosing analysis tools for monitoring progress.',
  },
  {
    icon: <Calendar className='w-6 h-6 text-secondary' />,
    title: 'Editorial Planning',
    description:
      'Developing a customized content calendar with topics, formats, and distribution channels.',
  },
  {
    icon: <Pencil className='w-6 h-6 text-secondary' />,
    title: 'Content Development',
    description:
      'Creating high-quality, original content designed to educate and inspire your audience.',
  },
  {
    icon: <Settings className='w-6 h-6 text-secondary' />,
    title: 'SEO Optimization',
    description:
      'Implementing on-page SEO strategies and conversion techniques to maximize impact.',
  },
  {
    icon: <ClipboardCheck className='w-6 h-6 text-secondary' />,
    title: 'Quality Control',
    description:
      'Rigorous editing and review process to ensure consistency, accuracy, and excellence.',
  },
  {
    icon: <Share2 className='w-6 h-6 text-secondary' />,
    title: 'Multi-Channel Adaptation',
    description:
      'Adapting content for different platforms to effectively reach each audience segment.',
  },
  {
    icon: <BarChart2 className='w-6 h-6 text-secondary' />,
    title: 'Analytics Implementation',
    description:
      'Setting up tools to track content performance, traffic, engagement, and conversions.',
  },
  {
    icon: <FileText className='w-6 h-6 text-secondary' />,
    title: 'Regular Reports',
    description:
      'Generating periodic reports detailing results and identifying areas for improvement.',
  },
  {
    icon: <TestTube className='w-6 h-6 text-secondary' />,
    title: 'Continuous Optimization',
    description:
      'Performing A/B testing and data-based adjustments to optimize content performance.',
  },
  {
    icon: <MessageSquare className='w-6 h-6 text-secondary' />,
    title: 'Strategy Meetings',
    description:
      'Regular meetings to analyze results, gather feedback, and adjust strategies accordingly.',
  },
  {
    icon: <RefreshCw className='w-6 h-6 text-secondary' />,
    title: 'Final Delivery and Next Steps',
    description:
      'Presenting achievements, lessons learned, and recommendations for future growth.',
  },
];
