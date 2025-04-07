import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { z } from 'zod';

// Define the version types
export const VersionSchema = z.enum(['free', 'premium', 'pro']);
export type VersionType = z.infer<typeof VersionSchema>;

// Define the page complexity types
export const PageComplexitySchema = z.enum([
  'basic',
  'intermediate',
  'advanced',
]);
export type PageComplexityType = z.infer<typeof PageComplexitySchema>;

// Define the form data schema
export const FormDataSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  purpose: z.string().min(1, 'Purpose is required'),
  understood: z.boolean().refine(val => val === true, {
    message: 'You must understand the terms',
  }),
});

export type FormDataType = z.infer<typeof FormDataSchema>;

// Define the plugin schema
export const PluginSchema = z.object({
  name: z.string().nullable(),
  version: VersionSchema.nullable(),
  price: z.number().default(0),
});

export type PluginType = z.infer<typeof PluginSchema>;

// Define the pages schema
export const PagesSchema = z.object({
  count: z.record(z.string(), z.number()).default({}),
  complexity: z.record(z.string(), PageComplexitySchema).default({}),
  totalPages: z.number().default(7),
  isEcommerce: z.boolean().default(false),
  price: z.number().default(0),
});

export type PagesType = z.infer<typeof PagesSchema>;

// Define the maintenance schema
export const MaintenanceSchema = z.object({
  plan: z.string().nullable().default(null),
  price: z.number().default(0),
});

export type MaintenanceType = z.infer<typeof MaintenanceSchema>;

// Define the calculator state schema
export const CalculatorStateSchema = z.object({
  formData: FormDataSchema,
  hosting: z.string().nullable().default(null),
  theme: PluginSchema.default({
    name: null,
    version: null,
    price: 0,
  }),
  pages: PagesSchema.default({
    count: {},
    complexity: {},
    totalPages: 7,
    isEcommerce: false,
    price: 0,
  }),
  security: PluginSchema.default({
    name: null,
    version: null,
    price: 0,
  }),
  seo: PluginSchema.default({
    name: null,
    version: null,
    price: 0,
  }),
  backup: PluginSchema.default({
    name: null,
    version: null,
    price: 0,
  }),
  analytics: PluginSchema.default({
    name: null,
    version: null,
    price: 0,
  }),
  cache: PluginSchema.default({
    name: null,
    version: null,
    price: 0,
  }),
  forms: PluginSchema.default({
    name: null,
    version: null,
    price: 0,
  }),
  antispam: PluginSchema.default({
    name: null,
    version: null,
    price: 0,
  }),
  multilingual: PluginSchema.default({
    name: null,
    version: null,
    price: 0,
  }),
  ecommerce: PluginSchema.nullable().default(null),
  maintenance: MaintenanceSchema.default({
    plan: null,
    price: 0,
  }),
  totalPrice: z.number().default(0),
});

export type CalculatorState = z.infer<typeof CalculatorStateSchema>;

// Initial state for the calculator
const initialState: CalculatorState = {
  formData: {
    name: '',
    email: '',
    purpose: '',
    understood: false,
  },
  hosting: null,
  theme: {
    name: null,
    version: null,
    price: 0,
  },
  pages: {
    count: {},
    complexity: {},
    totalPages: 7,
    isEcommerce: false,
    price: 0,
  },
  security: {
    name: null,
    version: null,
    price: 0,
  },
  seo: {
    name: null,
    version: null,
    price: 0,
  },
  backup: {
    name: null,
    version: null,
    price: 0,
  },
  analytics: {
    name: null,
    version: null,
    price: 0,
  },
  cache: {
    name: null,
    version: null,
    price: 0,
  },
  forms: {
    name: null,
    version: null,
    price: 0,
  },
  antispam: {
    name: null,
    version: null,
    price: 0,
  },
  multilingual: {
    name: null,
    version: null,
    price: 0,
  },
  ecommerce: null,
  maintenance: {
    plan: null,
    price: 0,
  },
  totalPrice: 0,
};

// Define the store type with state and actions
type CalculatorStore = CalculatorState & {
  // Actions
  setFormData: (data: Partial<FormDataType>) => void;
  setHosting: (hosting: string | null) => void;
  setTheme: (
    name: string | null,
    version: VersionType | null,
    price: number
  ) => void;
  setPages: (data: Partial<PagesType>) => void;
  setPlugin: (
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
    name: string | null,
    version: VersionType | null,
    price: number
  ) => void;
  setMaintenance: (plan: string | null, price: number) => void;
  setTotalPrice: (price: number) => void;
  calculateTotalPrice: () => void;
  isEcommerceEnabled: () => boolean;
  reset: () => void;
};

// Create the store with persistence
export const useCalculatorStore = create<CalculatorStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      // Set form data
      setFormData: data =>
        set(state => ({
          formData: { ...state.formData, ...data },
        })),

      // Set hosting
      setHosting: hosting => set({ hosting }),

      // Set theme
      setTheme: (name, version, price) =>
        set({
          theme: { name, version, price },
        }),

      // Set pages
      setPages: data =>
        set(state => ({
          pages: { ...state.pages, ...data },
        })),

      // Set plugin
      setPlugin: (pluginType, name, version, price) => {
        if (pluginType === 'ecommerce') {
          set(state => ({
            ecommerce: state.pages.isEcommerce
              ? { name, version, price }
              : null,
          }));
        } else {
          // Define valid plugin keys type
          type PluginKeys =
            | 'security'
            | 'seo'
            | 'backup'
            | 'analytics'
            | 'cache'
            | 'forms'
            | 'antispam'
            | 'multilingual';

          // Use type assertion to fix the dynamic property access
          set(state => {
            // Obtener el plugin actual para comparar
            const currentPlugin = state[pluginType as PluginKeys] as PluginType;

            // Verificar si los valores son diferentes para evitar actualizaciones innecesarias
            if (
              currentPlugin.name === name &&
              currentPlugin.version === version &&
              currentPlugin.price === price
            ) {
              // Si son iguales, no actualizar el estado
              return state;
            }

            // Si son diferentes, actualizar el estado
            const updatedState = { ...state } as CalculatorState;
            (updatedState[pluginType as PluginKeys] as PluginType) = {
              name,
              version,
              price,
            };
            return updatedState;
          });
        }
      },

      // Set maintenance
      setMaintenance: (plan, price) =>
        set(state => ({
          maintenance: {
            ...state.maintenance,
            plan,
            price,
          },
        })),

      // Set total price directly
      setTotalPrice: price => set({ totalPrice: price }),

      // Calculate total price
      calculateTotalPrice: () =>
        set(state => {
          const pluginPrices = [
            state.security.price,
            state.seo.price,
            state.backup.price,
            state.analytics.price,
            state.cache.price,
            state.forms.price,
            state.antispam.price,
            state.multilingual.price,
            state.pages.isEcommerce && state.ecommerce
              ? state.ecommerce.price
              : 0,
          ].reduce((sum, price) => sum + price, 0);

          return {
            totalPrice:
              state.pages.price + pluginPrices + state.maintenance.price,
          };
        }),

      // Check if ecommerce is enabled
      isEcommerceEnabled: () => {
        return get().pages.isEcommerce;
      },

      // Reset store to initial state
      reset: () => set(initialState),
    }),
    {
      name: 'website-calculator-storage',
      storage: createJSONStorage(() => localStorage),
      // Only store the state, not the actions
      // partialize: state => {
      //   // Usar desestructuración para excluir las funciones del estado persistido

      //   const {
      //     setFormData,
      //     setHosting,
      //     setTheme,
      //     setPages,
      //     setPlugin,
      //     setMaintenance,
      //     setTotalPrice,
      //     calculateTotalPrice,
      //     isEcommerceEnabled,
      //     reset,
      //     ...persistedState
      //   } = state;

      //   // Return the state to be persisted
      //   return persistedState;
      // },
      // Validate the state when hydrating from storage
      onRehydrateStorage: () => state => {
        if (!state) return initialState;
        // Return the state as is without validation
        return state;
      },
    }
  )
);
