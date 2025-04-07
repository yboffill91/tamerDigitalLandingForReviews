import { LeadingSection } from '@/features/services/components';
import { motion } from 'framer-motion';
import { Users, Building2, UserCircle } from 'lucide-react';

const serviceProviders = [
  {
    title: "Independent Web Designers",
    icon: UserCircle,
    description: "Working directly with a skilled professional",
    content: `Independent web designers offer a personal touch and direct communication. They excel at creating custom solutions for small to medium-sized businesses and typically have lower overhead costs, resulting in more competitive pricing.

    The direct relationship means faster decision-making and more flexibility in the development process. However, they may have limited availability and resources for large-scale projects.

    Best suited for: Local businesses, startups, and personal websites where budget efficiency and direct communication are priorities.`,
    keyPoints: [
      "Direct communication with your designer",
      "More affordable rates",
      "Faster project turnaround",
      "Flexible to your needs",
      "Personal attention to detail"
    ]
  },
  {
    title: "Corporate Website Builders",
    icon: Building2,
    description: "Using automated platforms and tools",
    content: `Website builders offer a quick and cost-effective way to establish an online presence. These platforms provide templates and drag-and-drop interfaces that make website creation accessible to everyone, regardless of technical expertise.

    While they offer convenience and speed, they often come with limitations in terms of customization and unique features. The standardized approach means your website might look similar to others using the same platform.

    Best suited for: Small businesses needing a simple online presence, hobbyists, and those with minimal customization needs.`,
    keyPoints: [
      "Quick setup and launch",
      "Low monthly costs",
      "No technical skills needed",
      "Built-in hosting and maintenance",
      "Ready-made templates"
    ]
  },
  {
    title: "Professional Web Agencies",
    icon: Users,
    description: "Full-service development teams",
    content: `Web development agencies bring together diverse expertise under one roof. They offer comprehensive services from design and development to marketing and maintenance. Their team-based approach ensures specialized attention to each aspect of your website.

    While agencies typically have higher rates, they provide enterprise-level quality and can handle complex projects with multiple requirements. They excel at creating scalable solutions with long-term support.

    Best suited for: Large businesses, complex e-commerce sites, and custom web applications requiring ongoing support.`,
    keyPoints: [
      "Comprehensive service offering",
      "Team of specialists",
      "Enterprise-grade solutions",
      "Ongoing support and maintenance",
      "Scalable infrastructure"
    ]
  }
];

export function ServiceProviderComparisonSection() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center pb-12 md:pb-20">
          <LeadingSection icon={Users} heading="Understanding Your Web Development Options" description="Each approach to web development has its unique advantages. Choose the one that best aligns with your goals, budget, and timeline" badgeText="Service Options" />
        </div>

        <div className="space-y-16">
          {serviceProviders.map((provider, index) => {
            const Icon = provider.icon;
            return (
              <motion.div
                key={provider.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                      <h3 className="text-2xl font-bold text-foreground">{provider.title}</h3>
                    </div>
                    <p className="text-foreground/80 mb-6">{provider.description}</p>
                    <ul className="space-y-3">
                      {provider.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-foreground/80">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:w-2/3">
                    <div className="prose prose-invert">
                      {provider.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="text-foreground/80 mb-4">
                          {paragraph.trim()}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                {index < serviceProviders.length - 1 && (
                  <div className="border-t border-foreground/20 mt-16" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}