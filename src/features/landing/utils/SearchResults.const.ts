type SearchResult = {
  title: string;
  description: string;
  results: string;
  time: string;
};

type SearchResults = {
  [key: string]: SearchResult[];
};

export const searchResults: SearchResults = {
  'digital marketing agency': [
    {
      title: 'Your Digital Agency',
      description:
        'Premier digital marketing agency providing comprehensive solutions for businesses worldwide. SEO, PPC, Social Media Marketing...',
      results: '15,700',
      time: '0.31',
    },
    {
      title: 'Digital Marketing Experts',
      description:
        'Full-service digital agency specializing in growth marketing, brand development, and data-driven campaigns...',
      results: '15,700',
      time: '0.31',
    },
  ],
  'best seo company': [
    {
      title: 'SEO Masters Pro',
      description:
        'Expert SEO services to boost your online presence. Data-driven strategies, proven results, and customized solutions...',
      results: '8,900',
      time: '0.28',
    },
    {
      title: 'Top SEO Solutions',
      description:
        'Ranked #1 SEO agency. Organic growth specialists with proven track record in competitive markets...',
      results: '8,900',
      time: '0.28',
    },
  ],
  'social media marketing': [
    {
      title: 'Social Media Growth',
      description:
        'Comprehensive social media management and marketing services. Boost your brand presence across all platforms...',
      results: '12,400',
      time: '0.22',
    },
    {
      title: 'Viral Marketing Pro',
      description:
        'Strategic social media campaigns that convert. Specialized in Instagram, TikTok, and emerging platforms...',
      results: '12,400',
      time: '0.22',
    },
  ],
};
