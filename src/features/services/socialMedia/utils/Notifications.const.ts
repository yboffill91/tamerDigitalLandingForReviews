export interface NOTIFICATION {
  name: string;
  description: string;
  time: string;
  icon: string;
  color: string;
}

export const notifications: NOTIFICATION[] = [
  {
    name: 'New Instagram follower',
    description: '@techinfluencer started following you',
    time: '15m ago',
    icon: 'instagram',
    color: '#E1306C',
  },
  {
    name: 'Twitter Engagement',
    description: 'Your tweet received 100+ likes',
    time: '10m ago',
    icon: 'twitter',
    color: '#000000',
  },
  {
    name: 'LinkedIn Connection',
    description: 'CEO of Tech Corp. viewed your profile',
    time: '5m ago',
    icon: 'linkedin',
    color: '#0077B5',
  },
  {
    name: 'Facebook Page',
    description: 'Your post reached 5k people',
    time: '2m ago',
    icon: 'facebook',
    color: '#4267B2',
  },
  {
    name: 'TikTok Growth',
    description: 'Your video reached 10k views',
    time: '1m ago',
    icon: 'tiktok',
    color: '#000000',
  },
];
