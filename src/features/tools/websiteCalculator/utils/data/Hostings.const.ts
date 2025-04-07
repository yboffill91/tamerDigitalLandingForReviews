export interface IHostingProvider {
  name: string;
  setupFee: number;
  hosting: {
    price: number;
    description: string;
    features: string[];
  };
  domain: {
    price: number;
    description: string;
  };
}

export const hostingProviders: IHostingProvider[] = [
    {
      name: "GoDaddy",
      setupFee: 150,
      hosting: {
        price: 2.95,
        description: "Shared Hosting",
        features: ["Wide variety of services", "Marketing tools", "All-in-one solution"]
      },
      domain: {
        price: 10,
        description: ".com Domain (annual)"
      }
    },
    {
      name: "Hostinger",
      setupFee: 150,
      hosting: {
        price: 2.49,
        description: "Shared Hosting",
        features: ["SSD Storage", "LiteSpeed Cache", "High Performance"]
      },
      domain: {
        price: 9,
        description: ".com Domain (annual)"
      }
    },
    {
      name: "HostGator",
      setupFee: 150,
      hosting: {
        price: 2.75,
        description: "Shared Hosting",
        features: ["Unlimited bandwidth", "Free domain first year", "Ideal for variable traffic"]
      },
      domain: {
        price: 0,
        description: "Free .com domain first year"
      }
    },
    {
      name: "Namecheap",
      setupFee: 150,
      hosting: {
        price: 2,
        description: "Shared Hosting",
        features: ["Excellent value for money", "Good performance", "Solid specifications"]
      },
      domain: {
        price: 9,
        description: ".com Domain (annual)"
      }
    },
    {
      name: "SiteGround",
      setupFee: 150,
      hosting: {
        price: 3.99,
        description: "Shared Hosting",
        features: ["WordPress Specialized", "Daily backups", "Managed installations"]
      },
      domain: {
        price: 12,
        description: ".com Domain (annual)"
      }
    },
    {
      name: "Bluehost",
      setupFee: 150,
      hosting: {
        price: 2.95,
        description: "Shared Hosting",
        features: ["Recommended by WordPress.org", "Custom control panel", "Free SSL certificate"]
      },
      domain: {
        price: 0,
        description: "Free .com domain first year"
      }
    }
  ];