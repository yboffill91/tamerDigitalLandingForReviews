import React from 'react';
import {
  Lock,
  Smartphone,
  Zap,
  Award,
  Clock,
  Layers,
  XCircle,
  Tablet,
  Monitor,
  FastForward,
  FileText,
  Search,
  AlertTriangle,
  Settings,
  Coffee,
  Activity,
} from 'lucide-react';

// Page Speed Component
const PageSpeedComponent = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(20);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full rounded-lg border border-foreground/20 bg-card/95 p-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="mr-3 p-2 rounded-lg bg-ring/10 text-primary">
          <Zap size={20} />
        </div>
        <h3 className="text-sm font-semibold ">Loading Speed</h3>
      </div>

      <div className="bg-ring/10 p-4 rounded-md">
        <div className="flex items-center mb-3">
          <FastForward size={16} className="text-primary mr-2" />
          <span className="text-xs font-medium text-foreground/80">
            Load time
          </span>
          <span className="ml-auto text-xs font-bold text-primary">8.5s</span>
        </div>

        <div className="w-full h-2 bg-foreground rounded-full mb-4">
          <div
            className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <div className="text-xs font-medium text-foreground/80 mb-1">
              LCP
            </div>
            <div className="p-1.5 rounded bg-primary/10 text-primary text-xs">
              5.2s
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-foreground/80 mb-1">
              FID
            </div>
            <div className="p-1.5 rounded bg-primary/10 text-primary text-xs">
              350ms
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-foreground/80 mb-1">
              CLS
            </div>
            <div className="p-1.5 rounded bg-primary/10 text-primary text-xs">
              0.45
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Structured Data Component
const StructuredDataComponent = () => {
  return (
    <div className="w-full rounded-lg border border-foreground/20 bg-card/95 p-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="mr-3 p-2 rounded-lg bg-ring/10 text-primary">
          <Award size={20} />
        </div>
        <h3 className="text-sm font-semibold ">Structured Data</h3>
      </div>

      <div className="bg-ring/10 p-4 rounded-md border border-foreground text-xs font-mono overflow-hidden mb-4">
        <div className="text-primary">Invalid Schema Markup</div>
        <div className="pl-4 text-foreground/80">
          <span className="text-primary">Missing required fields:</span>
        </div>
        <div className="pl-4 text-foreground/80">- &quot;@type&quot;</div>
        <div className="pl-4 text-foreground/80">- &quot;name&quot;</div>
        <div className="pl-4 text-foreground/80">- &quot;description&quot;</div>
      </div>

      <div className="flex items-center justify-between text-xs text-foreground/60">
        <span>Schema Implementation</span>
        <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">
          No Rich Snippets
        </span>
      </div>
    </div>
  );
};

// Security Component
const SecurityComponent = () => {
  return (
    <div className="w-full rounded-lg border border-foreground/20 bg-card/95 p-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="mr-3 p-2 rounded-lg bg-ring/10 text-primary">
          <Lock size={20} />
        </div>
        <h3 className="text-sm font-semibold ">Security & HTTPS</h3>
      </div>

      <div className="mt-4 p-3 bg-ring/10 rounded-md border border-foreground">
        <div className="flex items-center text-xs">
          <span className="flex items-center text-primary mr-2">
            <XCircle size={14} className="mr-1" />
            https://
          </span>
          <span className="text-foreground/80">yourdomain.com</span>
          <span className="ml-auto">
            <div className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
              Insecure
            </div>
          </span>
        </div>
      </div>

      <div className="mt-4 text-xs text-foreground/60">
        SSL Certificate Status
        <div className="w-full h-1.5 bg-foreground rounded-full mt-2">
          <div
            className="h-full bg-primary rounded-full"
            style={{ width: '20%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

// Responsive Design Component
const ResponsiveDesignComponent = () => {
  return (
    <div className="w-full rounded-lg border border-foreground/20 bg-card/95 p-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="mr-3 p-2 rounded-lg bg-ring/10 text-primary">
          <Smartphone size={20} />
        </div>
        <h3 className="text-sm font-semibold ">Responsive Design</h3>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col items-center p-3 bg-ring/10 rounded-md">
          <Smartphone size={24} className="text-primary mb-2" />
          <span className="text-xs text-foreground/80 mb-1">Mobile</span>
          <span className="text-[10px] text-foreground/60 mb-2">≤ 768px</span>
          <div className="w-6 h-6 rounded-lg bg-ring/10 flex items-center justify-center">
            <XCircle size={14} className="text-primary" />
          </div>
        </div>

        <div className="flex flex-col items-center p-3 bg-ring/10 rounded-md">
          <Tablet size={24} className="text-primary mb-2" />
          <span className="text-xs text-foreground/80 mb-1">Tablet</span>
          <span className="text-[10px] text-foreground/60 mb-2">≤ 1024px</span>
          <div className="w-6 h-6 rounded-lg bg-ring/10 flex items-center justify-center">
            <XCircle size={14} className="text-primary" />
          </div>
        </div>

        <div className="flex flex-col items-center p-3 bg-ring/10 rounded-md">
          <Monitor size={24} className="text-primary mb-2" />
          <span className="text-xs text-foreground/80 mb-1">Desktop</span>
          <span className="text-[10px] text-foreground/60 mb-2">≥ 1025px</span>
          <div className="w-6 h-6 rounded-lg bg-ring/10 flex items-center justify-center">
            <XCircle size={14} className="text-primary" />
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-center text-foreground/60">
        Poor Mobile-First Implementation
      </div>
    </div>
  );
};

// Core Web Vitals Component
const CoreWebVitalsComponent = () => {
  return (
    <div className="w-full rounded-lg border border-foreground/20 bg-card/95 p-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="mr-3 p-2 rounded-lg bg-ring/10 text-primary">
          <Activity size={20} />
        </div>
        <h3 className="text-sm font-semibold ">Core Web Vitals</h3>
      </div>

      <div className="bg-ring/10 p-4 rounded-md mb-4">
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-foreground/80">
                LCP (Loading)
              </span>
              <span className="text-xs text-primary font-medium">5.2s</span>
            </div>
            <div className="w-full h-1.5 bg-foreground rounded-full">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: '25%' }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-foreground/80">
                FID (Interactivity)
              </span>
              <span className="text-xs text-primary font-medium">350ms</span>
            </div>
            <div className="w-full h-1.5 bg-foreground rounded-full">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: '30%' }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-foreground/80">
                CLS (Stability)
              </span>
              <span className="text-xs text-primary font-medium">0.45</span>
            </div>
            <div className="w-full h-1.5 bg-foreground rounded-full">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: '20%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center text-xs text-foreground/80">
        <div className="w-5 h-5 rounded-lg bg-ring/10 text-primary flex items-center justify-center mr-2">
          <XCircle size={12} />
        </div>
        <span>All Core Web Vitals need improvement</span>
      </div>
    </div>
  );
};

// Engagement Time Component
const EngagementTimeComponent = () => {
  return (
    <div className="w-full rounded-lg border border-foreground/20 bg-card/95 p-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="mr-3 p-2 rounded-lg bg-ring/10 text-primary">
          <Clock size={20} />
        </div>
        <h3 className="text-sm font-semibold ">Time on Site</h3>
      </div>

      <div className="flex mb-4">
        <div className="flex-1 text-center p-3 bg-ring/10 rounded-md mr-3">
          <div className="text-[10px] text-foreground/60 mb-1">Avg. Time</div>
          <div className="text-xl font-bold text-primary">0:24</div>
          <div className="text-[10px] text-foreground/60">minutes</div>
        </div>
        <div className="flex-1 text-center p-3 bg-ring/10 rounded-md">
          <div className="text-[10px] text-foreground/60 mb-1">Bounce Rate</div>
          <div className="text-xl font-bold text-foreground/80">78%</div>
          <div className="text-[10px] text-primary font-medium">▲ 32%</div>
        </div>
      </div>

      <ul className="text-xs text-foreground/80 space-y-2">
        <li className="flex items-start">
          <div className="w-5 h-5 mt-0 mr-2 rounded-lg bg-ring/10 text-primary flex items-center justify-center">
            <XCircle size={12} />
          </div>
          <span>Unappealing content</span>
        </li>
        <li className="flex items-start">
          <div className="w-5 h-5 mt-0 mr-2 rounded-lg bg-ring/10 text-primary flex items-center justify-center">
            <XCircle size={12} />
          </div>
          <span>Poor navigation structure</span>
        </li>
        <li className="flex items-start">
          <div className="w-5 h-5 mt-0 mr-2 rounded-lg bg-ring/10 text-primary flex items-center justify-center">
            <XCircle size={12} />
          </div>
          <span>Ineffective CTAs</span>
        </li>
      </ul>
    </div>
  );
};

// Cluster Structure Component
const ClusterStructureComponent = () => {
  return (
    <div className="w-full rounded-lg border border-foreground/20 bg-card/95 p-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="mr-3 p-2 rounded-lg bg-ring/10 text-primary">
          <Layers size={20} />
        </div>
        <h3 className="text-sm font-semibold ">Topic Clusters & Silo</h3>
      </div>

      <div className="relative bg-ring/10 rounded-md p-4 mb-4 flex justify-center">
        <div className="flex flex-col items-center opacity-50">
          <div className="w-32 h-10 rounded-md bg-primary  flex items-center justify-center text-xs mb-2">
            Main Topic
          </div>
          <div className="h-6 border-l border-primary"></div>
          <div className="flex space-x-8">
            <div className="flex flex-col items-center">
              <div className="w-24 h-8 rounded-md bg-primary/50  flex items-center justify-center text-xs mb-2">
                Missing
              </div>
              <div className="h-4 border-l border-primary"></div>
              <div className="flex space-x-2">
                <div className="w-16 h-6 rounded-md bg-primary/30 text-primary flex items-center justify-center text-[10px]">
                  Error
                </div>
                <div className="w-16 h-6 rounded-md bg-primary/30 text-primary flex items-center justify-center text-[10px]">
                  404
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="text-xs text-foreground/80 space-y-2">
        <li className="flex items-start">
          <div className="w-5 h-5 mt-0 mr-2 rounded-lg bg-ring/10 text-primary flex items-center justify-center">
            <XCircle size={12} />
          </div>
          <span>No content hierarchy</span>
        </li>
        <li className="flex items-start">
          <div className="w-5 h-5 mt-0 mr-2 rounded-lg bg-ring/10 text-primary flex items-center justify-center">
            <XCircle size={12} />
          </div>
          <span>Broken internal links</span>
        </li>
      </ul>
    </div>
  );
};

// Content Quality Component
const ContentQualityComponent = () => {
  return (
    <div className="w-full rounded-lg border border-foreground/20 bg-card/95 p-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="mr-3 p-2 rounded-lg bg-ring/10 text-primary">
          <FileText size={20} />
        </div>
        <h3 className="text-sm font-semibold ">Content Quality</h3>
      </div>

      <div className="bg-ring/10 p-4 rounded-md mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-foreground/80">
            E-E-A-T Score
          </span>
          <div className="px-2 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-medium">
            Poor
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
            <span className="text-[10px] text-foreground/80">Experience</span>
            <div className="ml-auto w-16 h-1.5 bg-foreground rounded-full">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: '25%' }}
              ></div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
            <span className="text-[10px] text-foreground/80">Expertise</span>
            <div className="ml-auto w-16 h-1.5 bg-foreground rounded-full">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: '30%' }}
              ></div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
            <span className="text-[10px] text-foreground/80">Authority</span>
            <div className="ml-auto w-16 h-1.5 bg-foreground rounded-full">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: '15%' }}
              ></div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
            <span className="text-[10px] text-foreground/80">Trust</span>
            <div className="ml-auto w-16 h-1.5 bg-foreground rounded-full">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: '22%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Keywords Optimization Component
const KeywordsOptimizationComponent = () => {
  return (
    <div className="w-full rounded-lg border border-foreground/20 bg-card/95 p-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="mr-3 p-2 rounded-lg bg-ring/10 text-primary">
          <Search size={20} />
        </div>
        <h3 className="text-sm font-semibold ">Keyword Optimization</h3>
      </div>

      <div className="bg-ring/10 p-4 rounded-md mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-foreground/80">
            Keyword density
          </span>
          <div className="px-2 py-1 rounded-full bg-primary/10 text-primary text-[10px]">
            <XCircle size={12} className="inline mr-1" /> 0.5%
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center">
            <div className="bg-primary/10 px-2 py-1 rounded text-[10px] text-primary mr-2">
              Main
            </div>
            <div className="text-[10px] text-foreground/80 flex-1 truncate">
              seo positioning
            </div>
            <div className="ml-2 text-[10px] font-medium text-primary">1x</div>
          </div>
          <div className="flex items-center">
            <div className="bg-primary/5 px-2 py-1 rounded text-[10px] text-primary mr-2">
              LSI
            </div>
            <div className="text-[10px] text-foreground/80 flex-1 truncate">
              web optimization
            </div>
            <div className="ml-2 text-[10px] font-medium text-primary">0x</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Technical SEO Component
const TechnicalSEOComponent = () => {
  return (
    <div className="w-full rounded-lg border border-foreground/20 bg-card/95 p-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="mr-3 p-2 rounded-lg bg-ring/10 text-primary">
          <Settings size={20} />
        </div>
        <h3 className="text-sm font-semibold ">Technical SEO</h3>
      </div>

      <div className="bg-ring/10 p-4 rounded-md mb-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-lg bg-ring/10 flex items-center justify-center text-[10px] mr-2">
                <XCircle size={12} className="text-primary" />
              </div>
              <span className="text-xs text-foreground/80">Sitemap.xml</span>
            </div>
            <div className="text-xs text-primary">Missing</div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-lg bg-ring/10 flex items-center justify-center text-[10px] mr-2">
                <XCircle size={12} className="text-primary" />
              </div>
              <span className="text-xs text-foreground/80">Robots.txt</span>
            </div>
            <div className="text-xs text-primary">Not found</div>
          </div>
        </div>
      </div>

      <div className="text-xs text-foreground/60 mb-2">Indexing status:</div>
      <div className="flex items-center">
        <div className="flex-1 h-1.5 bg-foreground rounded-full mr-2">
          <div
            className="h-full bg-primary rounded-full"
            style={{ width: '22%' }}
          ></div>
        </div>
        <span className="text-xs font-medium text-primary">22%</span>
      </div>
    </div>
  );
};

// SEO Errors Component
const SEOErrorsComponent = () => {
  return (
    <div className="w-full rounded-lg border border-foreground/20 bg-card/95 p-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="mr-3 p-2 rounded-lg bg-ring/10 text-primary">
          <AlertTriangle size={20} />
        </div>
        <h3 className="text-sm font-semibold ">Critical SEO Errors</h3>
      </div>

      <div className="bg-ring/10 p-4 rounded-md mb-4">
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="w-6 h-6 rounded-lg bg-ring/10 text-primary flex items-center justify-center text-[10px] mt-0 mr-2 flex-shrink-0">
              <AlertTriangle size={12} />
            </div>
            <div>
              <div className="text-xs font-medium text-foreground/80">
                Broken links
              </div>
              <div className="text-[10px] text-foreground/60">
                42 internal links detected
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-6 h-6 rounded-lg bg-ring/10 text-primary flex items-center justify-center text-[10px] mt-0 mr-2 flex-shrink-0">
              <AlertTriangle size={12} />
            </div>
            <div>
              <div className="text-xs font-medium text-foreground/80">
                Duplicate content
              </div>
              <div className="text-[10px] text-foreground/60">
                13 pages with similar content
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// User Experience Component
const UserExperienceComponent = () => {
  return (
    <div className="w-full rounded-lg border border-foreground/20 bg-card/95 p-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="mr-3 p-2 rounded-lg bg-ring/10 text-primary">
          <Coffee size={20} />
        </div>
        <h3 className="text-sm font-semibold ">User Experience</h3>
      </div>

      <div className="bg-ring/10 p-4 rounded-md mb-4">
        <div className="text-xs font-medium text-foreground/80 mb-3">
          UX Evaluation:
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-foreground/80">Readability</span>
            <div className="w-24 h-1.5 bg-foreground rounded-full">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: '20%' }}
              ></div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[10px] text-foreground/80">Navigation</span>
            <div className="w-24 h-1.5 bg-foreground rounded-full">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: '25%' }}
              ></div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[10px] text-foreground/80">
              Accessibility
            </span>
            <div className="w-24 h-1.5 bg-foreground rounded-full">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: '15%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export {
  PageSpeedComponent,
  ResponsiveDesignComponent,
  SecurityComponent,
  StructuredDataComponent,
  EngagementTimeComponent,
  ClusterStructureComponent,
  ContentQualityComponent,
  KeywordsOptimizationComponent,
  TechnicalSEOComponent,
  SEOErrorsComponent,
  UserExperienceComponent,
  CoreWebVitalsComponent,
};
