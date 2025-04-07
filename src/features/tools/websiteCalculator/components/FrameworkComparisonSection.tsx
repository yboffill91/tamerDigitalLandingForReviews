import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, Rocket, X } from 'lucide-react';
import { LeadingSection } from '@/features/services/components';
import { ShimmerButton } from '@/components/ui';

export interface Framework {
  name: string;
  image: string;
  description: string;
  pros: string[];
  cons: string[];
  bestFor: string[];
}

const frameworks: Framework[] = [
    {
      name: "WordPress",
      image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&h=600&fit=crop&q=80",
      description: "Traditional CMS with a vast ecosystem",
      pros: [
        "Huge plugin ecosystem",
        "User-friendly admin interface",
        "Large community support",
        "Easy content management",
        "Extensive theme marketplace",
        "No coding required",
        "Built-in SEO features"
      ],
      cons: [
        "Can be slower than modern alternatives",
        "Regular maintenance required",
        "Security vulnerabilities if not maintained",
        "Plugin conflicts possible",
        "Can be resource-intensive",
        "Limited customization without code"
      ],
      bestFor: [
        "Content-heavy websites",
        "Blogs and news sites",
        "Small to medium businesses",
        "Non-technical users",
        "Quick deployment needs"
      ]
    },
    {
      name: "Astro",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=600&fit=crop&q=80",
      description: "Modern static site generator",
      pros: [
        "Excellent performance",
        "Zero JavaScript by default",
        "Component-based architecture",
        "Multiple framework support",
        "Built-in image optimization",
        "Great developer experience",
        "SEO-friendly by design"
      ],
      cons: [
        "Steeper learning curve",
        "Requires development expertise",
        "Smaller ecosystem",
        "Limited dynamic features",
        "Fewer ready-made solutions",
        "Content management complexity"
      ],
      bestFor: [
        "Content-focused websites",
        "Documentation sites",
        "Marketing websites",
        "Performance-critical projects",
        "Developer portfolios"
      ]
    }
  ];

export function FrameworkComparisonSection() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center pb-12 md:pb-20">
          <LeadingSection icon={Rocket} heading="WordPress vs Astro: Choosing Your Path" description="Understanding the key differences between traditional CMS and modern static site generators" badgeText=" Framework Comparison" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {frameworks.map((framework, index) => (
            <motion.div
              key={framework.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Framework Card */}
              <div className="bg-card rounded-xl overflow-hidden border border-foreground/20">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card z-10" />
                  <Image
                    src={framework.image}
                    alt={framework.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{framework.name}</h3>
                  <p className="text-foreground/80 mb-6">{framework.description}</p>

                  {/* Pros */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-secondary-green mb-3">Advantages</h4>
                    <ul className="space-y-2">
                      {framework.pros.map((pro, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-2 text-foreground/90"
                        >
                          <Check className="w-5 h-5 text-secondary-green flex-shrink-0" />
                          <span>{pro}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-destructive mb-3">Limitations</h4>
                    <ul className="space-y-2">
                      {framework.cons.map((con, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-2 text-foreground/90"
                        >
                          <X className="w-5 h-5 text-destructive flex-shrink-0" />
                          <span>{con}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Best For</h4>
                    <ul className="space-y-2">
                      {framework.bestFor.map((use, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-2 text-foreground/90"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span>{use}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 px-8 py-6 bg-gradient-to-tr from-ring/10 to-secondary/10 rounded-lg"
        >
          <div className="flex items-center justify-between gap-8 flex-col md:flex-row">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Build Your WordPress Website?</h3>
              <p className="text-foreground/90">
                For most business websites, content-driven sites, and non-technical users, WordPress remains the most practical choice. Its extensive ecosystem, user-friendly interface, and vast community support make it an excellent option for creating and managing a professional website without deep technical expertise.
              </p>
            </div>
            <div className="flex-shrink-0">
              <ShimmerButton size='big' variant='solid' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Start Your WordPress Journey
              </ShimmerButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}