import {
  useCalculatorStore,
  type PageComplexityType,
  type VersionType,
  type PluginType,
} from '@/store';

/**
 * Hook for managing form data
 */
export function useFormData() {
  const { formData, setFormData } = useCalculatorStore();

  const setName = (name: string) => setFormData({ name });
  const setEmail = (email: string) => setFormData({ email });
  const setPurpose = (purpose: string) => setFormData({ purpose });
  const setUnderstood = (understood: boolean) => setFormData({ understood });

  const isFormValid = () => {
    return !!(
      formData.name &&
      formData.email &&
      formData.purpose &&
      formData.understood
    );
  };

  return {
    formData,
    setFormData,
    setName,
    setEmail,
    setPurpose,
    setUnderstood,
    isFormValid,
  };
}

/**
 * Hook for managing pages data
 */
export function usePagesData() {
  const { pages, setPages } = useCalculatorStore();

  // Set page complexity
  const setPageComplexity = (
    complexity: Record<string, PageComplexityType>
  ) => {
    setPages({ complexity });
  };

  // Set page count
  const setPageCount = (count: Record<string, number>) => {
    setPages({ count });
  };

  // Set total pages
  const setTotalPages = (totalPages: number) => {
    setPages({ totalPages });
  };

  // Set page price
  const setPagePrice = (price: number) => {
    setPages({ price });
    // Update total price as well
    updateTotalPrice();
  };

  // Set isEcommerce flag
  const setIsEcommerce = (isEcommerce: boolean) => {
    setPages({ isEcommerce });
  };

  // Update a single page's complexity
  const updatePageComplexity = (
    pageName: string,
    complexity: PageComplexityType
  ) => {
    setPageComplexity({
      ...pages.complexity,
      [pageName]: complexity,
    });
  };

  // Update a single page's count
  const updatePageCount = (pageName: string, count: number) => {
    setPageCount({
      ...pages.count,
      [pageName]: count,
    });
  };

  // Increment/decrement a page's count
  const changePageCount = (pageName: string, change: number) => {
    const currentCount = pages.count[pageName] || 0;
    const newCount = Math.max(0, currentCount + change);
    updatePageCount(pageName, newCount);
  };

  // Calculate and update total price
  const updateTotalPrice = () => {
    const { calculateTotalPrice } = useCalculatorStore.getState();
    calculateTotalPrice();
  };

  return {
    pages,
    setPages,
    setPageComplexity,
    setPageCount,
    setTotalPages,
    setPagePrice,
    setIsEcommerce,
    updatePageComplexity,
    updatePageCount,
    changePageCount,
    updateTotalPrice,
  };
}

/**
 * Hook for managing hosting and theme
 */
export function useHostingTheme() {
  const { hosting, theme, setHosting, setTheme } =
    useCalculatorStore();

  // Set hosting with price update
  const selectHosting = (hostingOption: string | null) => {
    setHosting(hostingOption);
    // You might want to update total price based on hosting selection
    const { calculateTotalPrice } = useCalculatorStore.getState();
    calculateTotalPrice();
  };

  // Set theme name
  const setThemeName = (name: string | null) => {
    setTheme(name, theme.version, theme.price);
  };

  // Set theme version
  const setThemeVersion = (version: VersionType | null) => {
    setTheme(theme.name, version, theme.price);
  };

  // Set theme price
  const setThemePrice = (price: number) => {
    setTheme(theme.name, theme.version, price);
    // Update total price
    const { calculateTotalPrice } = useCalculatorStore.getState();
    calculateTotalPrice();
  };

  return {
    hosting,
    theme,
    selectHosting,
    setThemeName,
    setThemeVersion,
    setThemePrice,
  };
}

/**
 * Hook for managing plugins
 */
export function usePlugins() {
  const store = useCalculatorStore();

  // Generic function to update a plugin
  const updatePlugin = (
    pluginType:
      | 'security'
      | 'seo'
      | 'backup'
      | 'analytics'
      | 'cache'
      | 'forms'
      | 'antispam'
      | 'multilingual'
      | 'ecommerce',
    updates: Partial<PluginType>
  ) => {
    const plugin = store[pluginType] as PluginType;

    if (pluginType === 'ecommerce' && !store.pages.isEcommerce) {
      // Don't update ecommerce plugin if ecommerce is not enabled
      return;
    }
    
    // Verificar si realmente hay cambios antes de actualizar
    const currentName = plugin?.name;
    const currentVersion = plugin?.version;
    const currentPrice = plugin?.price || 0;
    
    const newName = updates.name !== undefined ? updates.name : currentName;
    const newVersion = updates.version !== undefined ? updates.version : currentVersion;
    const newPrice = updates.price !== undefined ? updates.price : currentPrice;

    const hasChanges = 
      currentName !== newName ||
      currentVersion !== newVersion ||
      currentPrice !== newPrice;
      
    if (hasChanges) {
      store.setPlugin(
        pluginType,
        newName,
        newVersion,
        newPrice
      );

      // Update total price solo si hubo cambios
      store.calculateTotalPrice();
    }
  };

  // Specific plugin getters and setters
  const getPlugin = (
    pluginType:
      | 'security'
      | 'seo'
      | 'backup'
      | 'analytics'
      | 'cache'
      | 'forms'
      | 'antispam'
      | 'multilingual'
      | 'ecommerce'
  ) => {
    return store[pluginType] as PluginType | null;
  };

  // Set plugin name
  const setPluginName = (
    pluginType:
      | 'security'
      | 'seo'
      | 'backup'
      | 'analytics'
      | 'cache'
      | 'forms'
      | 'antispam'
      | 'multilingual'
      | 'ecommerce',
    name: string | null
  ) => {
    updatePlugin(pluginType, { name });
  };

  // Set plugin version
  const setPluginVersion = (
    pluginType:
      | 'security'
      | 'seo'
      | 'backup'
      | 'analytics'
      | 'cache'
      | 'forms'
      | 'antispam'
      | 'multilingual'
      | 'ecommerce',
    version: VersionType | null
  ) => {
    updatePlugin(pluginType, { version });
  };

  // Set plugin price
  const setPluginPrice = (
    pluginType:
      | 'security'
      | 'seo'
      | 'backup'
      | 'analytics'
      | 'cache'
      | 'forms'
      | 'antispam'
      | 'multilingual'
      | 'ecommerce',
    price: number
  ) => {
    updatePlugin(pluginType, { price });
  };

  return {
    security: store.security,
    seo: store.seo,
    backup: store.backup,
    analytics: store.analytics,
    cache: store.cache,
    forms: store.forms,
    antispam: store.antispam,
    multilingual: store.multilingual,
    ecommerce: store.ecommerce,
    getPlugin,
    updatePlugin,
    setPluginName,
    setPluginVersion,
    setPluginPrice,
  };
}

/**
 * Hook for managing maintenance and total price
 */
export function usePricing() {
  const {
    maintenance,
    totalPrice,
    setMaintenance,
    setTotalPrice,
    calculateTotalPrice,
  } = useCalculatorStore();

  // Set maintenance plan
  const setMaintenancePlan = (plan: string | null) => {
    setMaintenance(plan, maintenance.price);
  };

  // Set maintenance price
  const setMaintenancePrice = (price: number) => {
    setMaintenance(maintenance.plan, price);
    // Update total price
    calculateTotalPrice();
  };

  // Recalculate total price
  const recalculateTotalPrice = () => {
    calculateTotalPrice();
  };

  // Set total price directly
  const updateTotalPrice = (price: number) => {
    setTotalPrice(price);
  };

  return {
    maintenance,
    totalPrice,
    setMaintenancePlan,
    setMaintenancePrice,
    recalculateTotalPrice,
    updateTotalPrice,
  };
}

/**
 * Hook for navigation and step management
 */
export function useCalculatorNavigation() {
  const { isEcommerceEnabled } = useCalculatorStore();

  // Get the step routes
  const getStepRoutes = () => {
    const baseRoutes = [
      '/tools/website-calculator/hosting',
      '/tools/website-calculator/theme',
      '/tools/website-calculator/pages',
      '/tools/website-calculator/security',
      '/tools/website-calculator/seo',
      '/tools/website-calculator/backup',
      '/tools/website-calculator/analytics',
      '/tools/website-calculator/cache',
      '/tools/website-calculator/forms',
      '/tools/website-calculator/antispam',
      '/tools/website-calculator/multilingual',
    ];

    // Add ecommerce step if enabled
    const routes = [...baseRoutes];
    if (isEcommerceEnabled()) {
      routes.push('/tools/website-calculator/ecommerce');
    }

    // Add final steps
    routes.push(
      '/tools/website-calculator/maintenance',
      '/tools/website-calculator/final'
    );

    return routes;
  };

  return {
    getStepRoutes,
    isEcommerceEnabled,
  };
}
