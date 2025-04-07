import {
  FileText,
  Video,
  LineChart,
  Mic2,
  BookOpen,
  Share2,
  Mail,
  BarChart2,
  Users,
  Globe2,
} from 'lucide-react';
import { ReactNode } from 'react';

interface Benefit {
  title: string;
  description: string;
  image: string;
}

export const benefits: Benefit[] = [
  {
    title: 'Increased Brand Visibility',
    description:
      'Establish a strong online presence through strategic content distribution across multiple channels to reach your target audience effectively.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
  },
  {
    title: 'Higher Conversion Rates',
    description:
      'Create persuasive content that guides prospects through their buying journey and turns readers into loyal customers.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop',
  },
  {
    title: 'Thought Leadership',
    description:
      'Build authority in your industry through high-quality educational content, research papers, and expert insights.',
    image:
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2340&auto=format&fit=crop',
  },
  {
    title: 'Engaged Community',
    description:
      'Foster meaningful connections with your audience through interactive content, discussions, and community-driven initiatives.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2384&auto=format&fit=crop',
  },
  {
    title: 'Lead Generation',
    description:
      'Generate and nurture high-quality leads with targeted content assets, from whitepapers to webinars.',
    image:
      'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2340&auto=format&fit=crop',
  },
  {
    title: 'ROI Optimization',
    description:
      'Track and optimize your content performance with advanced analytics to ensure maximum return on your marketing investment.',
    image:
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2340&auto=format&fit=crop',
  },
];

interface IntegrationItem {
  icon: ReactNode;
  name: string;
}
export const integrations: IntegrationItem[] = [
  {
    icon: <FileText className='w-8 h-8 text-primary' />,
    name: 'Content Creation',
  },
  {
    icon: <Video className='w-8 h-8 text-primary' />,
    name: 'Video Production',
  },
  { icon: <LineChart className='w-8 h-8 text-primary' />, name: 'Analytics' },
  { icon: <Mic2 className='w-8 h-8 text-primary' />, name: 'Podcasting' },
  {
    icon: <BookOpen className='w-8 h-8 text-primary' />,
    name: 'Digital Books',
  },
  { icon: <Share2 className='w-8 h-8 text-primary' />, name: 'Social Media' },
  { icon: <Mail className='w-8 h-8 text-primary' />, name: 'Email Marketing' },
  {
    icon: <BarChart2 className='w-8 h-8 text-primary' />,
    name: 'Performance',
  },
  { icon: <Users className='w-8 h-8 text-primary' />, name: 'Community' },
  { icon: <Globe2 className='w-8 h-8 text-primary' />, name: 'Global Reach' },
];
