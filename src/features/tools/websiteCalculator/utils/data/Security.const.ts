export interface SecurityPlugin {
  name: string;
  description: string;
  setupFee: number;
  free: boolean;
  prices: {
    free: number;
    premium: number;
  };
  features: {
    free: string[];
    premium: string[];
  };
}

export const securityPlugins: SecurityPlugin[] = [
  {
    name: 'Wordfence Security',
    description:
      'Comprehensive security solution with firewall and malware scanner',
    setupFee: 150,
    free: true,
    prices: {
      free: 0,
      premium: 99,
    },
    features: {
      free: [
        'Basic firewall protection',
        'Malware scanner',
        'Login security',
        'Live traffic monitoring',
        'Security alerts',
      ],
      premium: [
        'Real-time IP blacklist',
        'Premium support',
        'Country blocking',
        'Advanced firewall rules',
        'Real-time threat defense feed',
      ],
    },
  },
  {
    name: 'Sucuri Security',
    description: 'Website security platform with malware removal and firewall',
    setupFee: 200,
    free: true,
    prices: {
      free: 0,
      premium: 199,
    },
    features: {
      free: [
        'Security activity auditing',
        'File integrity monitoring',
        'Security notifications',
        'Blacklist monitoring',
        'Post-hack security actions',
      ],
      premium: [
        'Website firewall (WAF)',
        'Malware removal & hardening',
        'DDoS protection',
        '24/7 security support',
        'Virtual patching',
      ],
    },
  },
  {
    name: 'iThemes Security',
    description:
      'Easy to use security plugin with over 30+ ways to secure WordPress',
    setupFee: 120,
    free: true,
    prices: {
      free: 0,
      premium: 80,
    },
    features: {
      free: [
        'Brute force protection',
        'File change detection',
        'Strong password enforcement',
        'Lockout bad users',
        'Database backups',
      ],
      premium: [
        'Two-factor authentication',
        'Scheduled malware scanning',
        'Password expiration',
        'Import/export settings',
        'Dashboard widget',
      ],
    },
  },
  {
    name: 'MalCare Security',
    description: 'Security plugin with instant malware detection and firewall',
    setupFee: 180,
    free: true,
    prices: {
      free: 0,
      premium: 99,
    },
    features: {
      free: [
        'Malware scanner',
        'Website hardening',
        'Login protection',
        'Activity log',
        'Security alerts',
      ],
      premium: [
        'Auto-malware removal',
        'Advanced firewall',
        'Login protection',
        'Instant security alerts',
        'Client reports',
      ],
    },
  },
  {
    name: 'Cloudflare',
    description: 'CDN with advanced security features and DDoS protection',
    setupFee: 250,
    free: true,
    prices: {
      free: 0,
      premium: 200,
    },
    features: {
      free: [
        'Basic DDoS protection',
        'Shared SSL certificate',
        'Global CDN',
        'Basic firewall rules',
        'Limited rate limiting',
      ],
      premium: [
        'Advanced DDoS protection',
        'Web application firewall',
        'Image optimization',
        'Mobile optimization',
        'Advanced analytics',
      ],
    },
  },
];
