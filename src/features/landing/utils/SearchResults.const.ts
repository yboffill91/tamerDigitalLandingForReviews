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
        'Premier digital marketing agency providing comprehensive solutions for businesses worldwide. We help brands grow with tailored strategies in SEO, PPC, Social Media Marketing, and more, ensuring measurable results and lasting online impact.',
      results: '15,700',
      time: '0.31',
    },
    {
      title: 'Digital Marketing Experts',
      description:
        'Full-service digital agency specializing in growth marketing, brand development, and data-driven campaigns. Our expert team crafts innovative solutions to drive engagement, increase ROI, and elevate your brand in the digital landscape.',
      results: '15,700',
      time: '0.31',
    },
  ],
  'best seo company': [
    {
      title: 'SEO Masters Pro',
      description:
        'Expert SEO services to boost your online presence. We deliver data-driven strategies, proven results, and customized solutions for businesses aiming to dominate search rankings and achieve sustainable online growth.',
      results: '8,900',
      time: '0.28',
    },
    {
      title: 'Top SEO Solutions',
      description:
        'Ranked #1 SEO agency. Organic growth specialists with a proven track record in competitive markets, offering advanced optimization techniques and continuous support to ensure your website stays ahead of the competition.',
      results: '8,900',
      time: '0.28',
    },
  ],
  'social media marketing': [
    {
      title: 'Social Media Growth',
      description:
        'Comprehensive social media management and marketing services. We boost your brand presence across all platforms by creating engaging content, managing campaigns, and analyzing performance to maximize audience reach and interaction.',
      results: '12,400',
      time: '0.22',
    },
    {
      title: 'Viral Marketing Pro',
      description:
        'Strategic social media campaigns that convert. Specialized in Instagram, TikTok, and emerging platforms, we craft viral campaigns, foster community engagement, and help brands connect authentically with their target audiences.',
      results: '12,400',
      time: '0.22',
    },
  ],
};
