import { Lightbulb, LucideIcon, MapIcon, Users } from 'lucide-react';
import { IconType } from 'react-icons';

export interface SolutionTip {
  icon: LucideIcon | IconType;
  title: string;
  tip: string;
}

export const SolutionsTips: SolutionTip[] = [
  {
    icon: Users,
    title: 'I understand your challenge',
    tip: `For years, I've seen valuable businesses remain invisible in search results while less qualified competitors occupy top positions. I've been where you are now: watching traditional SEO strategies consume budget without delivering concrete results.`,
  },
  {
    icon: MapIcon,
    title: 'My philosophy is simple',
    tip: `I focus not just on algorithms and keywords, but on deeply understanding your ideal customers. My approach integrates SEO technique with a genuine understanding of your business and audience. The result is a strategy that not only improves rankings but attracts the right people at the right time.`,
  },
  {
    icon: Lightbulb,
    title: 'The path forward',
    tip: `My experience working with businesses from startups to established companies has taught me that each situation is unique. I don't offer predefined solutions, but a collaborative process where we share knowledge and design together the path that best suits your specific needs and real business objectives.`,
  },
];
