'use client';

import { ShimmerButton } from '@/components/ui';
import { LeadingSection } from '@/features/services/components';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';
interface FAQ {
  question: string
  answer: string
}

const faqs : FAQ[]= [
  {
    question: "How is my website price calculated?",
    answer: "The price is determined based on several key factors including project type, required functionality (e-commerce, reservations, memberships, etc.), number of pages, custom design requirements, and ongoing maintenance needs. Our calculator provides a detailed breakdown of each component to help you understand the total investment required for your website."
  },
  {
    question: "Do you offer any special discounts when building with you?",
    answer: "Yes! In addition to the transparent pricing provided by our calculator, we're currently offering a 20% discount on the total cost for clients who choose to develop their website with us. This makes our professional web development services even more accessible while maintaining our high quality standards."
  },
  {
    question: "What's included in the calculator's price?",
    answer: `Our comprehensive pricing includes:
    • WordPress design and development
    • Essential plugin integration (security, SEO, etc.)
    • Setup of main pages (Home, Contact, About, etc.)
    • Mobile-responsive design
    • Initial support and maintenance period
    • Professional configuration and optimization`
  },
  {
    question: "How long does it take to deliver the website?",
    answer: "Delivery timeframes vary based on project complexity. A standard website typically takes 2-4 weeks to complete, while more complex projects with custom functionality or e-commerce features may require additional time. We'll provide a detailed timeline based on your specific requirements during our initial consultation."
  },
  {
    question: "What kind of support do you provide after delivery?",
    answer: "We provide comprehensive post-launch support including regular maintenance, security updates, and technical assistance. Our maintenance plans cover various aspects such as plugin updates, security monitoring, performance optimization, and content updates. We offer multiple support channels and quick response times to address any issues that may arise."
  }
];


export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  console.log(faqs)
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="text-center pb-12 md:pb-20">
          <LeadingSection icon={FaQuestion} badgeText=' Common Questions' description=' Find answers to common questions about our website cost calculator and development services' heading=' Frequently Asked Questions'/>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-foreground/20 last:border-0"
            >
              <ShimmerButton variant='ghost' size='big'
                onClick={() => setOpenIndex( index)}
                className="justify-between items-center w-full py-6 text-left"
              >
                <h3 className="pr-8">{faq.question}</h3>
                <div className="flex-shrink-0">
                  <Plus className={`${openIndex ? 'rotate-45' : 'rotate-0'} transition-all duration-300 ease-in-out`}/>
                </div>
              </ShimmerButton>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                  marginBottom: openIndex === index ? 24 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="text-foreground/80 whitespace-pre-line p-4 rounded-lg bg-ring/5 text-balance">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}