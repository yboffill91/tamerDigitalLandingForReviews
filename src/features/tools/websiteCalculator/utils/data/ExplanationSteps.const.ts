interface ExplanationStep {
    title: string;
    image?: string;
    images?: string[];
    alt: string;
    content: {
      type: 'list' | 'text' | 'checklist' | 'paragraph';
      explanation: string;
      points?: string[];
      tip?: string;
      highlight?: string;
      items?: {
        task: string;
        importance: string;
      }[];
    };
  }
  
  export const explanationSteps: ExplanationStep[] = [
    {
      title: "Step 1: Hosting & Domain",
      image: "/features/tools/website-calculator/hosting.png",
      alt: "Server infrastructure",
      content: {
        type: "list",
        explanation: "Your website's foundation is crucial. The right hosting provider impacts:",
        points: [
          "Website speed and performance",
          "Security and reliability",
          "Search engine rankings",
          "Customer experience"
        ],
        tip: "Premium hosting might cost more initially but saves money long-term by preventing issues and providing better support."
      }
    },
    {
      title: "Step 2: Design & Theme",
      images: ["/features/tools/website-calculator/theme.png", "/features/tools/website-calculator/theme1.png"],
      alt: "Website design process",
      content: {
        type: "list",
        explanation: "Your theme choice affects more than just looks. Consider:",
        points: [
          "Mobile Responsiveness - Your site must work perfectly on all devices",
          "Loading Speed - Premium themes are optimized for better performance",
          "Feature Compatibility - Seamless integration with essential plugins",
          "Design Flexibility - Customization options for your brand",
          "Regular Updates - Maintained and improved over time"
        ]
      }
    },
    {
      title: "Step 3: Essential Pages",
      images: ["/features/tools/website-calculator/pages.png", "/features/tools/website-calculator/pages1.png"],
      alt: "Web development",
      content: {
        type: "paragraph",
        explanation: "Your website's structure determines its effectiveness. We'll help you plan the right pages based on your business goals. Each page serves a specific purpose in your customer's journey - from discovery to conversion. The calculator helps you understand the investment needed for each page type, considering factors like complexity, interactivity, and content requirements.",
        highlight: "Remember: Quality content on fewer pages often performs better than many low-quality pages."
      }
    },
    {
      title: "Step 4: Security & Performance",
      image: "/features/tools/website-calculator/security.png",
      alt: "Website features",
      content: {
        type: "checklist",
        explanation: "Protect your business and customers with essential security features:",
        items: [
          {
            task: "SSL Certificate",
            importance: "Required for all modern websites"
          },
          {
            task: "Malware Protection",
            importance: "Prevents costly security breaches"
          },
          {
            task: "Regular Backups",
            importance: "Safeguards your business data"
          },
          {
            task: "Performance Optimization",
            importance: "Keeps your site fast and efficient"
          }
        ]
      }
    },
    {
      title: "Step 5: Essential Plugins",
      alt: "Website plugins and features",
      content: {
        type: "list",
        explanation: "Selecting the right plugins is crucial for your website's functionality. While free versions offer basic features, premium plugins often provide better security, support, and advanced features that can save time and prevent issues. Here are the must-have plugins for a professional website:",
        points: [
          "Security Plugin (e.g., Wordfence, Sucuri) - Protects against hacks, malware, and brute force attacks",
          "SEO Plugin (e.g., Yoast, RankMath) - Essential for search engine visibility and content optimization",
          "Backup Plugin (e.g., UpdraftPlus) - Prevents data loss with automated backups",
          "Analytics Plugin (e.g., MonsterInsights) - Tracks visitor behavior and website performance",
          "Cache Plugin (e.g., WP Rocket) - Improves loading speed and user experience",
          "Forms Plugin (e.g., WPForms) - Enables contact forms and lead generation",
          "Anti-spam Plugin (e.g., Akismet) - Protects forms and comments from spam",
          "Multilingual Plugin (e.g., WPML) - Enables multiple language support",
          "eCommerce Plugin (e.g., WooCommerce) - Powers online store functionality"
        ]
      }
    },
    {
      title: "Step 6: Ongoing Support",
      image: "/features/tools/website-calculator/support.png",
      alt: "Website maintenance",
      content: {
        type: "list",
        explanation: "Choose the right maintenance plan to protect your investment:",
        points: [
          "Regular software and plugin updates to maintain security",
          "Automated and manual backups to prevent data loss",
          "Performance monitoring and optimization",
          "Technical support when issues arise",
          "Content updates and minor design changes",
          "SEO monitoring and adjustments"
        ]
      }
    }
  ];
  