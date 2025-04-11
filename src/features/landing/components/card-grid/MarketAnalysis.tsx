import {
  Sprout,
  Search,
  FileText,
  Megaphone,
  Settings,
  BarChart,
} from 'lucide-react';

interface OrbitalItem {
  icon: typeof BarChart;
  label: string;
  x?: number;
  y?: number;
  lineStart?: { x: number; y: number };
  lineEnd?: { x: number; y: number };
}

const orbitalItems = [
  {
    icon: BarChart,
    label: 'SEM',
    x: 160,
    y: -100,
    lineStart: { x: -8, y: 150 },
    lineEnd: { x: 60, y: 110 },
  },
  {
    icon: Search,
    label: 'SEO',
    x: 160,
    y: 50,
    lineStart: { x: 8, y: 70 },
    lineEnd: { x: 60, y: 90 },
  },
  {
    icon: FileText,
    label: 'Persuasive Content',
    x: 20,
    y: 110,
    lineStart: { x: 80, y: 60 },
    lineEnd: { x: 80, y: 100 },
  },
  {
    icon: Settings,
    label: 'Tools',
    x: -120,
    y: 50,
    lineStart: { x: 150, y: 70 },
    lineEnd: { x: 100, y: 90 },
  },
  {
    icon: Megaphone,
    label: 'Social Media',
    x: -120,
    y: -100,
    lineStart: { x: 170, y: 150 },
    lineEnd: { x: 80, y: 100 },
  },
] satisfies OrbitalItem[];

export function MarketAnalysis() {
  return (
    <div className="relative w-full h-[400px] p-6 rounded-lg bg-card border border-foreground/20">
      {/* Central Icon */}
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full -m-2 blur-lg" />
          <div className="absolute inset-0 bg-primary/20 rounded-full -m-8 animate-[pulse_2s_ease-in-out_infinite]" />
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary/50 to-primary/40 flex items-center justify-center backdrop-blur-sm border border-primary/30">
            <Sprout className="w-10 h-10 text-primary-foreground" />
          </div>
        </div>
      </div>

      {/* Orbital Items */}
      {orbitalItems.map(({ icon: Icon, label, x, y, lineStart, lineEnd }) => {
        return (
          <div
            key={label}
            className="absolute top-[45%] left-1/2 group z-20"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
          >
            {/* Connection Line */}
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              width="200"
              height="200"
              style={{
                overflow: 'visible',
              }}
            >
              <line
                x1={lineStart?.x ?? 0}
                y1={lineStart?.y ?? 0}
                x2={lineEnd?.x ?? 0}
                y2={lineEnd?.y ?? 0}
                className="stroke-primary/30"
                strokeWidth="1"
              />
            </svg>

            {/* Icon Circle */}
            <div className="relative transition-transform duration-300 hover:scale-110 -translate-x-5">
              <div className="absolute inset-0 bg-primary/5 rounded-full -m-2 blur-sm group-hover:bg-primary/10" />
              <div className="relative w-10 h-10 rounded-full bg-card flex items-center justify-center border border-primary/10 group-hover:border-primary/30">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span
                className={`absolute ${label === 'Persuasive Content' ? 'top-full mt-3' : 'bottom-full mb-2'} left-1/2 -translate-x-1/2 text-xs font-medium text-foreground/80 whitespace-nowrap transition-colors group-hover:text-primary`}
              >
                {label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
