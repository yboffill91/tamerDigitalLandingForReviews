import React from 'react';
import { XCircle } from 'lucide-react';
import {
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
} from './SEOComponents';
import { ShimmerButton } from '@/components/ui';

const SEOFactors = () => {
  return (
    <div>
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Your website is losing visibility due to these critical SEO issues
        </h3>
        <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
          Each of these issues is directly impacting your ability to attract
          organic traffic and convert visitors
        </p>
      </div>

      <div className="space-y-24 max-w-6xl mx-auto px-4">
        {/* 1. Velocidad */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h4 className="text-2xl font-bold ">Poor Loading Speed</h4>
            <p className="text-foreground/90">
              Your website takes over 8 seconds to load, when the industry
              standard is 3 seconds or less. This means:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-ring/20 rounded-lg p-2">
                  <XCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground/90">
                  53% of your visitors leave your site before it finishes
                  loading
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-ring/20 rounded-lg p-2">
                  <XCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground/90">
                  Google penalizes your ranking due to poor user experience
                </p>
              </li>
            </ul>
          </div>
          <div className="md:scale-110">
            <PageSpeedComponent />
          </div>
        </div>

        {/* 2. Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2 space-y-6">
            <h4 className="text-2xl font-bold ">Non-Optimized Mobile Design</h4>
            <p className="text-foreground/90">
              Your site is not adapted for mobile devices, which means:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-ring/20 rounded-lg p-2">
                  <XCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground/90">
                  You&apos;re losing 68% of potential traffic from smartphone
                  users
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-ring/20 rounded-lg p-2">
                  <XCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground/90">
                  Google prioritizes mobile-first sites in search results
                </p>
              </li>
            </ul>
          </div>
          <div className="md:order-1 md:scale-110">
            <ResponsiveDesignComponent />
          </div>
        </div>

        {/* 3. Core Web Vitals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h4 className="text-2xl font-bold ">Critical Core Web Vitals</h4>
            <p className="text-foreground/90">
              Your performance metrics are well below Google&apos;s standards:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/90">
                  LCP of 5.2s when it should be less than 2.5s
                </p>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/90">
                  CLS of 0.45 exceeding the recommended limit by 5x
                </p>
              </li>
            </ul>
          </div>
          <div className="md:scale-110">
            <CoreWebVitalsComponent />
          </div>
        </div>

        {/* 4. SEO Técnico */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2 space-y-6">
            <h4 className="text-2xl font-bold ">Serious Technical Issues</h4>
            <p className="text-foreground/90">
              Your site has fundamental technical problems preventing
              indexation:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/90">
                  Only 22% of your pages are being indexed by Google
                </p>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/90">
                  Missing critical files like sitemap.xml and robots.txt
                </p>
              </li>
            </ul>
          </div>
          <div className="md:order-1 md:scale-110">
            <TechnicalSEOComponent />
          </div>
        </div>

        {/* 5. Seguridad */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h4 className="text-2xl font-bold ">Security Vulnerabilities</h4>
            <p className="text-foreground/90">
              Your site lacks the necessary basic security measures:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/90">
                  No valid SSL certificate, losing visitor trust
                </p>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/90">
                  Google marks your site as &quot;Not secure&quot; in results
                </p>
              </li>
            </ul>
          </div>
          <div className="md:scale-110">
            <SecurityComponent />
          </div>
        </div>

        {/* 6. Datos Estructurados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2 space-y-6">
            <h4 className="text-2xl font-bold ">Incorrect Structured Data</h4>
            <p className="text-foreground/90">
              Errors in your structured data are affecting your visibility:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/90">
                  Not appearing in Google&apos;s rich snippets
                </p>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/90">
                  Loss of CTR due to lack of visual elements in SERP
                </p>
              </li>
            </ul>
          </div>
          <div className="md:order-1 md:scale-110">
            <StructuredDataComponent />
          </div>
        </div>

        {/* 7. Tiempo de Permanencia */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h4 className="text-2xl font-bold ">Concerning Engagement</h4>
            <p className="text-foreground/90">
              Users are quickly abandoning your site:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/90">
                  Average time on site of only 24 seconds
                </p>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/90">
                  78% bounce rate, well above average
                </p>
              </li>
            </ul>
          </div>
          <div className="md:scale-110">
            <EngagementTimeComponent />
          </div>
        </div>

        {/* 8. Estructura de Contenido */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2 space-y-6">
            <h4 className="text-2xl font-bold ">Poor Content Structure</h4>
            <p className="text-foreground/90">
              Your content lacks a clear and effective structure:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/90">
                  No clear hierarchy of topics and subtopics
                </p>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/90">
                  Broken internal links confusing users and bots
                </p>
              </li>
            </ul>
          </div>
          <div className="md:order-1 md:scale-110">
            <ClusterStructureComponent />
          </div>
        </div>

        {/* 9. Calidad de Contenido */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h4 className="text-2xl font-bold ">Low Quality Content</h4>
            <p className="text-foreground/90">
              Your content doesn&apos;t meet Google&apos;s E-E-A-T standards:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/90">
                  Lack of demonstrable topic expertise
                </p>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/90">
                  Low content authority and trustworthiness
                </p>
              </li>
            </ul>
          </div>
          <div className="md:scale-110">
            <ContentQualityComponent />
          </div>
        </div>

        {/* 10. Optimización de Keywords */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2 space-y-6">
            <h4 className="text-2xl font-bold ">Poorly Optimized Keywords</h4>
            <p className="text-foreground/90">
              Your keyword strategy is failing:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/90">
                  Keyword density below effective minimum
                </p>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/90">
                  No use of related LSI keywords
                </p>
              </li>
            </ul>
          </div>
          <div className="md:order-1 md:scale-110">
            <KeywordsOptimizationComponent />
          </div>
        </div>

        {/* 11. Errores SEO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h4 className="text-2xl font-bold ">Critical SEO Errors</h4>
            <p className="text-foreground/90">
              Your site has serious technical issues:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/90">
                  42 broken internal links damaging the experience
                </p>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/90">
                  13 pages with duplicate content
                </p>
              </li>
            </ul>
          </div>
          <div className="md:scale-110">
            <SEOErrorsComponent />
          </div>
        </div>

        {/* 12. Experiencia de Usuario */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2 space-y-6">
            <h4 className="text-2xl font-bold ">Poor UX</h4>
            <p className="text-foreground/90">
              The user experience is well below standard:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/90">
                  Confusing navigation that frustrates users
                </p>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/90">
                  Accessibility issues limiting your audience
                </p>
              </li>
            </ul>
          </div>
          <div className="md:order-1 md:scale-110">
            <UserExperienceComponent />
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center max-w-3xl mx-auto py-16">
          <h3 className="text-3xl font-bold mb-6">
            Ready to multiply your online visibility?
          </h3>
          <p className="text-xl text-foreground/90 mb-8">
            We&apos;ve helped hundreds of businesses solve these same issues and
            multiply their organic traffic. Let us show you how.
          </p>
          <ShimmerButton variant="solid" size="big">
            Get your free SEO audit →
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
};

export default SEOFactors;
