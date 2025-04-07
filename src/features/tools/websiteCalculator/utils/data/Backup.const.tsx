// Importar el tipo PluginData para asegurar compatibilidad
import type { PluginData } from '@/features/tools/websiteCalculator/utils/hooks/usePluginHook';

// Usar directamente el tipo PluginData
export type BackupPlugin = PluginData;

export const backupPlugins: PluginData[] = [
  {
    name: 'UpdraftPlus',
    description:
      'Most popular WordPress backup solution with cloud storage integration',
    setupFee: 100,
    free: true,
    prices: {
      free: 0,
      premium: 70,
    },
    features: {
      free: [
        'Manual backups',
        'Basic restore functionality',
        'Local storage backups',
        'Database backups',
        'File backups',
      ],
      premium: [
        'Automated backups',
        'Multiple storage locations',
        'Incremental backups',
        'Migration tools',
        'Priority support',
      ],
    },
  },
  {
    name: 'BackupBuddy',
    description: 'Complete backup, restore and migration solution',
    setupFee: 120,
    free: false,
    prices: {
      premium: 80,
    },
    features: {
      premium: [
        'Complete site backups',
        'Scheduled backups',
        'Cloud storage integration',
        'Easy site migration',
        'Malware scanning',
      ],
    },
  },
  {
    name: 'Jetpack Backup',
    description: 'Real-time cloud backups by WordPress.com',
    setupFee: 150,
    free: false,
    prices: {
      premium: 40,
    },
    features: {
      premium: [
        'Real-time backups',
        'One-click restore',
        '30-day backup archive',
        'Activity log',
        'Automated backups',
      ],
    },
  },
  {
    name: 'BackWPup',
    description: 'Versatile backup solution with multiple storage options',
    setupFee: 90,
    free: true,
    prices: {
      free: 0,
      premium: 69,
    },
    features: {
      free: [
        'Complete backups',
        'Database optimization',
        'Basic scheduling',
        'XML export',
        'Local storage',
      ],
      premium: [
        'Premium support',
        'Google Drive integration',
        'Amazon S3 storage',
        'Encryption',
        'Advanced scheduling',
      ],
    },
  },
  {
    name: 'Duplicator',
    description: 'Advanced backup and migration plugin',
    setupFee: 110,
    free: true,
    prices: {
      free: 0,
      premium: 69,
    },
    features: {
      free: [
        'Site migration',
        'Basic backups',
        'Manual transfers',
        'Archive creation',
        'Basic restore',
      ],
      premium: [
        'Scheduled backups',
        'Cloud storage',
        'Multisite support',
        'Recovery points',
        'Email notifications',
      ],
    },
  },
];
