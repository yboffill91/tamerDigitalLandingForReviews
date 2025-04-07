interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: 'What should my data look like?',
    answer:
      'We accept various data formats including CSV, Excel, and Google Analytics exports. Our system can analyze historical ranking data, current keyword positions, and competitor data to create a comprehensive strategy.',
  },
  {
    question: 'Does it use AI technology?',
    answer:
      'Yes, we utilize advanced AI and machine learning algorithms to analyze search patterns and predict keyword potential. This is combined with human expertise to ensure accurate and actionable insights.',
  },
  {
    question: 'Where is my data stored?',
    answer:
      'All your data is securely stored on enterprise-grade servers with state-of-the-art encryption. We follow strict data protection protocols and comply with all relevant privacy regulations.',
  },
  {
    question: 'Does it support other languages?',
    answer:
      'Yes, our keyword research service supports multiple languages and international markets. We can help you target keywords in any language and analyze search behavior across different regions.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'While initial keyword insights are immediate, you typically start seeing ranking improvements within 3-6 months. This varies based on your market competitiveness and current SEO foundation. We provide monthly progress reports to track improvements.',
  },
  {
    question: 'What makes your keyword research different?',
    answer:
      'Unlike basic keyword tools, we analyze search intent, user behavior, and market trends to identify high-converting keywords. Our approach combines competitive analysis, user psychology, and ROI potential to ensure you target keywords that drive business growth.',
  },
];
