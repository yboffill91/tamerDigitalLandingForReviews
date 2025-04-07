'use client'

import { motion } from 'framer-motion';
import { Check, Shield, Search, Save, LineChart, Zap, Mail, ShieldAlert, Languages, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

import { explanationSteps } from '@/features/tools/websiteCalculator/utils';
import { LeadingSection } from '@/features/services/components';

export function CalculatorExplanationSection() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center pb-12 md:pb-20">
          
          <LeadingSection icon={Zap} heading="Understanding Our Web Development Cost Calculator" description="Make informed decisions about your website investment with our step-by-step guide" badgeText="Calculator Explanation" />
        </div>

        <div className="space-y-24">
          {explanationSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                
                <p className="text-foregrouns/90 leading-relaxed">
                  {step.content.explanation}
                </p>

                {step.content.type === 'list' && (
                  <ul className="space-y-3">
                    {step.content.points?.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-foregrouns/90">{point}</span>
                      </motion.li>
                    ))}
                    {step.content.tip && (
                      <div className="mt-4 p-4 bg-ring/5 border border-foreground/20 rounded-lg">
                        <p className="text-secondary text-sm">{step.content.tip}</p>
                      </div>
                    )}
                  </ul>
                )}

                {step.content.type === 'paragraph' && (
                  <div className="space-y-4">
                    <p className="text-foregrouns/90 leading-relaxed">{step.content.explanation}</p>
                    <div className="p-4 bg-ring/5 border border-foreground/20 rounded-lg">
                      <p className="text-secondary">{step.content.highlight}</p>
                    </div>
                  </div>
                )}

                {step.content.type === 'checklist' && (
                  <div className="space-y-3">
                    {step.content.items?.map((item) => (
                      <div key={item.task} className="flex items-center justify-between p-3 border border-foreground/20 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-secondary-green" />
                          <span className="text-foregrouns/90">{item.task}</span>
                        </div>
                        <span className="text-sm text-primary bg-ring/5 px-3 py-1 rounded-full">
                          {item.importance}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Image Side */}
              <div className="flex-1 relative">
                <div className="relative h-[300px] md:h-[400px] w-full">

                  {step.title === 'Step 5: Essential Plugins' && (
                    <div className="grid grid-cols-3 gap-8 place-items-center h-full">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-6 bg-ring/20 rounded-xl border border-ring"
                      >
                        <Shield className="w-12 h-12 text-primary" />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-6 bg-green-900/20 rounded-xl border border-green-800"
                      >
                        <Search className="w-12 h-12 text-secondary-green" />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-6 bg-purple-900/20 rounded-xl border border-purple-800"
                      >
                        <Save className="w-12 h-12 text-purple-500" />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-6 bg-yellow-900/20 rounded-xl border border-yellow-800"
                      >
                        <LineChart className="w-12 h-12 text-yellow-500" />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-6 bg-red-900/20 rounded-xl border border-red-800"
                      >
                        <Zap className="w-12 h-12 text-red-500" />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-6 bg-indigo-900/20 rounded-xl border border-indigo-800"
                      >
                        <Mail className="w-12 h-12 text-indigo-500" />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-6 bg-pink-900/20 rounded-xl border border-pink-800"
                      >
                        <ShieldAlert className="w-12 h-12 text-pink-500" />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-6 bg-teal-900/20 rounded-xl border border-teal-800"
                      >
                        <Languages className="w-12 h-12 text-teal-500" />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-6 bg-orange-900/20 rounded-xl border border-orange-800"
                      >
                        <ShoppingCart className="w-12 h-12 text-orange-500" />
                      </motion.div>
                    </div>
                  )}
                  {step.images && (
                    <>
                    <Image
                      src={step.images[0]}
                      alt={step.alt}
                      fill
                      className="object-contain "
                    />
                    <div className="absolute -top-10 -right-10 w-[400px] h-[400px] transform rotate-6 hover:rotate-0 transition-transform duration-300">
                      <Image
                        src={step.images[1]}
                        alt={`${step.alt} alternate view`}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                  </>
                  )}
                  {step.image && (
                    <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    className="object-contain rounded-lg"
                  />
                  )}                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}