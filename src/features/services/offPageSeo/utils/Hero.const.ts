import {
  faBolt,
  faCode,
  faDatabase,
  faRobot,
  faSearch,
  faChartLine,
  faTable,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

interface NavItem {
  icon: IconDefinition;
  text: string;
  color: string;
  active?: boolean;
}

export const navItems: NavItem[] = [
  {
    icon: faSearch,
    text: 'Backlink Analysis',
    color: '#3b82f6',
    active: true,
  },
  { icon: faChartLine, text: 'Authority Building', color: '#3b82f6' },
  { icon: faDatabase, text: 'Citation Management', color: '#3b82f6' },
  { icon: faCode, text: 'Content Outreach', color: '#3b82f6' },
  { icon: faBolt, text: 'Link Monitoring', color: '#3b82f6' },
  { icon: faRobot, text: 'Competitor Analysis', color: '#3b82f6' },
  { icon: faTable, text: 'Performance Reports', color: '#3b82f6' },
];

interface analysisEndpoint {
  method: string;
  desc: string;
  color: string;
}

export const analysisEndpoints: analysisEndpoint[] = [
  { method: 'SCAN', desc: 'Quality backlink analysis', color: '#4caf50' },
  { method: 'SCAN', desc: 'Domain authority check', color: '#4caf50' },
  { method: 'CHECK', desc: 'Guest post opportunities', color: '#2196f3' },
  { method: 'CHECK', desc: 'Resource link prospects', color: '#2196f3' },
  { method: 'AUDIT', desc: 'Brand mentions tracking', color: '#9c27b0' },
  { method: 'AUDIT', desc: 'Citation consistency', color: '#9c27b0' },
  { method: 'TRACK', desc: 'Competitor link gaps', color: '#f44336' },
  { method: 'TRACK', desc: 'Industry authority', color: '#f44336' },
];

export const resultsEndpoints: analysisEndpoint[] = [
  { method: 'FOUND', desc: '127 quality backlinks', color: '#4caf50' },
  { method: 'SCORE', desc: 'DA 45 (+12 last month)', color: '#4caf50' },
  { method: 'COMP', desc: '3 competitor gaps found', color: '#2196f3' },
  { method: 'OPP', desc: '15 new opportunities', color: '#2196f3' },
  { method: 'ALERT', desc: '2 toxic links detected', color: '#9c27b0' },
  { method: 'HEALTH', desc: '92% profile score', color: '#9c27b0' },
  { method: 'RANK', desc: '+15 positions avg.', color: '#f44336' },
  { method: 'DA', desc: '34% authority increase', color: '#f44336' },
];

type ConsoleItem = string[];

export const analysisConsole: ConsoleItem = [
  'Scanning web for brand mentions...',
  'Analyzing competitor backlinks...',
  'Finding outreach opportunities...',
  'Checking citation consistency...',
  'Generating link building strategy...',
];

export const resultsConsole: ConsoleItem = [
  'Off-page analysis completed',
  'Found 45 outreach opportunities',
  'Authority Score: 65/100',
  'Citation Score: 92%',
  'Competitor Gap: 34 links',
];
