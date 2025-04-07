interface Price {
    free: number | null; // Puede ser 0 o null si no tiene versión gratuita
    pro: number; // Precio de la versión Pro
  }
  
  // Interfaz para las características (features)
  interface Features {
    core: string[]; // Lista de características básicas
    pro: string[]; // Lista de características Pro
  }
  
  // Interfaz principal para los temas
  interface Theme {
    name: string; // Nombre del tema
    description: string; // Descripción del tema
    setupFee: number; // Tarifa de configuración
    price: Price; // Objeto con información de precios
    features: Features; // Objeto con las características del tema
  }

export const themes: Theme[] = [
    {
      name: "Elementor",
      description: "Powerful page builder plugin with intuitive drag & drop interface and extensive features",
      setupFee: 300,
      price: {
        free: 0,
        pro: 49
      },
      features: {
        core: [
          "Intuitive drag & drop builder",
          "Real-time design interface",
          "Basic widgets collection",
          "Responsive editing",
          "Basic templates"
        ],
        pro: [
          "Premium widgets library",
          "Theme builder functionality",
          "WooCommerce builder",
          "Advanced animations",
          "Priority support"
        ]
      }
    },
    {
      name: "Astra",
      description: "Optimized for excellent performance and fast loading times with extensive customization options",
      setupFee: 250,
      price: {
        free: 0,
        pro: 47
      },
      features: {
        core: [
          "Optimized for performance",
          "Compatible with page builders",
          "Multiple pre-designed templates",
          "Basic customization features",
          "Plugin compatibility"
        ],
        pro: [
          "Advanced customization options",
          "Premium templates and layouts",
          "Extended WooCommerce features",
          "Advanced header options",
          "Priority support and updates"
        ]
      }
    },
    {
      name: "Divi",
      description: "Premium theme with integrated visual builder for intuitive real-time design",
      setupFee: 350,
      price: {
        free: null,
        pro: 89
      },
      features: {
        core: [
          "Visual drag & drop builder",
          "Real-time design interface",
          "Extensive customization options",
          "Blog to ecommerce capability",
          "Active community support"
        ],
        pro: [
          "Regular feature updates",
          "Complete theme ecosystem",
          "WooCommerce integration",
          "Advanced design controls",
          "Split testing capabilities"
        ]
      }
    },
    {
      name: "OceanWP",
      description: "Versatile theme with multiple demos and designs for different site types",
      setupFee: 250,
      price: {
        free: 0,
        pro: 43
      },
      features: {
        core: [
          "Multiple demo designs",
          "Page builder compatibility",
          "Basic customization options",
          "eCommerce ready",
          "Responsive layouts"
        ],
        pro: [
          "Premium extensions",
          "Advanced customization",
          "Extended WooCommerce features",
          "Premium demos access",
          "Priority support"
        ]
      }
    },
    {
      name: "Avada",
      description: "Best-selling premium theme with integrated Fusion Builder",
      setupFee: 400,
      price: {
        free: null,
        pro: 60
      },
      features: {
        core: [
          "Fusion Builder included",
          "Visual page building",
          "Extensive customization options",
          "Regular updates",
          "Complete design system"
        ],
        pro: [
          "Premium slider revolution",
          "Advanced customization tools",
          "Performance optimization",
          "Professional support",
          "ThemeForest ecosystem"
        ]
      }
    },
    {
      name: "GeneratePress",
      description: "Ultra-lightweight theme focused on performance and flexibility",
      setupFee: 200,
      price: {
        free: 0,
        pro: 59
      },
      features: {
        core: [
          "Extremely lightweight",
          "Performance optimized",
          "Developer friendly",
          "Basic customization options",
          "Plugin compatibility"
        ],
        pro: [
          "Advanced customization",
          "Premium templates",
          "Extended features",
          "Hook system",
          "Premium support"
        ]
      }
    }
  ];