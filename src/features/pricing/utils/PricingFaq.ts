import { FAQItem } from '@/lib';
import { Clock, CreditCard, Package, Shield, Users } from 'lucide-react';

export const faqs: FAQItem[] = [
  {
    id: 1,
    icon: Package,
    category: 'Features',
    title: "What's included in each plan?",
    content:
      'Each plan includes a different set of features tailored to specific business needs. The Starter plan covers essential SEO and digital marketing tools, while Growth and Enterprise plans offer more advanced features and personalized support.',
  },
  {
    id: 2,
    icon: Clock,
    category: 'Billing',
    title: 'Can I switch plans later?',
    content:
      "Yes, you can upgrade or downgrade your plan at any time. When you upgrade, you'll get immediate access to additional features. If you downgrade, the changes will take effect at the start of your next billing cycle.",
  },
  {
    id: 3,
    icon: Shield,
    category: 'Billing',
    title: 'Do you offer refunds?',
    content:
      "We offer a 30-day money-back guarantee for all our plans. If you're not satisfied with our services within the first 30 days, we'll provide a full refund, no questions asked.",
  },
  {
    id: 4,
    icon: Users,
    category: 'Support',
    title: 'What kind of support do you provide?',
    content:
      'All plans include email support. Growth and Enterprise plans also include priority support with faster response times and dedicated account managers. Enterprise clients get 24/7 phone support.',
  },
  {
    id: 5,
    icon: Clock,
    category: 'General',
    title: 'How long are your contracts?',
    content:
      'We offer flexible month-to-month contracts with no long-term commitment required. You can also choose annual billing to save 10% on your subscription.',
  },
  {
    id: 6,
    icon: CreditCard,
    category: 'Billing',
    title: 'What payment methods do you accept?',
    content:
      'We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. Enterprise clients can also pay via bank transfer.',
  },
];
