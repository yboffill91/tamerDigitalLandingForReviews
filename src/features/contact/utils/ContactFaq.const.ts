import { FAQItem } from '@/lib';
import { BarChart2, Rocket, Target, Users } from 'lucide-react';

export const faqs: FAQItem[] = [
  {
    id: 1,
    icon: Rocket,
    title: 'What services do you offer?',
    content:
      "We offer comprehensive digital solutions including web development, digital marketing, brand strategy, and business growth consulting. Our team specializes in creating custom strategies that align with your business goals, whether that's increasing online visibility, generating leads, or expanding your market reach.",
  },
  {
    id: 2,
    icon: Target,
    title: 'How do you approach new projects?',
    content:
      'We begin with a thorough consultation to understand your business objectives, target audience, and current challenges. Then, we develop a tailored strategy that combines our expertise in technology, design, and marketing. Our approach is data-driven and results-focused, ensuring measurable outcomes for your business.',
  },
  {
    id: 3,
    icon: BarChart2,
    title: 'What makes your approach different?',
    content:
      "Our unique blend of technical expertise and strategic thinking sets us apart. We don't just build websites or run campaigns - we create comprehensive digital ecosystems that drive real business growth. Our team stays ahead of industry trends and technologies to deliver innovative solutions that give our clients a competitive edge.",
  },
  {
    id: 4,
    icon: Users,
    title: 'Can you help with ongoing support?',
    content:
      "Absolutely! We offer continuous support and maintenance services to ensure your digital presence remains effective and up-to-date. This includes regular performance monitoring, technical updates, content updates, and strategic adjustments based on data analysis and market changes. We're committed to being your long-term digital partner.",
  },
];
