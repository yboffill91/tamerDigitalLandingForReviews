import { Challenge } from '@/lib';
import {
  TrendingDown,
  Activity,
  Wifi,
  Copy,
  Monitor,
  Shield,
  AlertTriangle,
  Send,
  XCircle,
} from 'lucide-react';

export const challenges: Challenge[] = [
  {
    icon: TrendingDown,
    title: 'Declining Organic Traffic',
    description:
      "Remember when your analytics dashboard used to bring good news? Those steady drops in traffic aren't just numbers - they're missed opportunities and lost revenue that keep you up at night.",
  },
  {
    icon: Activity,
    title: 'Invisible in Search Rankings',
    description:
      'Opening an incognito window to check your rankings has become a daily disappointment. Your competitors dominate the first page while your best content sits unseen in the depths of Google.',
  },
  {
    icon: Wifi,
    title: 'Painfully Slow Page Speed',
    description:
      'Each passing second feels like an eternity as your pages crawl to load. Your bounce rate tells the story - potential customers giving up before they even see what you have to offer.',
  },
  {
    icon: Copy,
    title: 'Content Chaos',
    description:
      'Hours spent crafting the perfect content, only for Google to treat it like a duplicate. Meanwhile, old product pages and categories keep competing with each other, splitting your SEO equity.',
  },
  {
    icon: Monitor,
    title: 'Website Changes Breaking SEO',
    description:
      'That sinking feeling when a simple website update turns into an SEO nightmare. Suddenly your rankings are dropping, and pinpointing what went wrong feels like finding a needle in a haystack.',
  },
  {
    icon: Shield,
    title: 'Negative SEO Attacks',
    description:
      "Strange backlinks appearing out of nowhere. Your rankings mysteriously tanking. The worst part? Not knowing if it's a targeted attack or just bad luck - but watching helplessly as it unfolds.",
  },
  {
    icon: AlertTriangle,
    title: 'Indexing Issues',
    description:
      'Your best content might as well be invisible. Google crawls your site but ignores key pages, and every technical tweak seems to make things worse instead of better.',
  },
  {
    icon: Send,
    title: 'Visitor Engagement Crisis',
    description:
      'Your traffic looks decent on paper, but visitors vanish like ghosts. Those few precious seconds between landing and leaving tell a painful story about user experience gone wrong.',
  },
  {
    icon: XCircle,
    title: 'Google Penalties',
    description:
      'That dreaded notification in Search Console. Suddenly your traffic plummets, and the path to recovery seems overwhelming. Every day under a penalty feels like a year of progress lost.',
  },
];
