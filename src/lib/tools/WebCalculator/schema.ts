import { z } from "zod"

// Define the version types
export const VersionSchema = z.enum(["free", "premium", "pro"])

// Define the page complexity types
export const PageComplexitySchema = z.enum(["basic", "intermediate", "advanced"])

// Define the plugin schema
export const PluginSchema = z.object({
  name: z.string().nullable(),
  version: VersionSchema.nullable(),
})

// Define the pages schema
export const PagesSchema = z.object({
  count: z.record(z.string(), z.number()),
  complexity: z.record(z.string(), PageComplexitySchema),
  totalPages: z.number(),
  isEcommerce: z.boolean(),
  price: z.number(),
})

// Define the form data schema
export const FormDataSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  purpose: z.string().min(1, "Purpose is required"),
  understood: z.boolean().refine((val) => val === true, {
    message: "You must understand the terms",
  }),
})

// Define the calculator state schema
export const CalculatorStateSchema = z.object({
  currentStep: z.number(),
  showInitialForm: z.boolean(),
  formData: FormDataSchema,
  hosting: z.string().nullable(),
  theme: PluginSchema,
  pages: PagesSchema,
  security: PluginSchema.extend({ price: z.number() }),
  seo: PluginSchema.extend({ price: z.number() }),
  backup: PluginSchema.extend({ price: z.number() }),
  analytics: PluginSchema.extend({ price: z.number() }),
  cache: PluginSchema.extend({ price: z.number() }),
  forms: PluginSchema.extend({ price: z.number() }),
  antispam: PluginSchema.extend({ price: z.number() }),
  multilingual: PluginSchema.extend({ price: z.number() }),
  ecommerce: PluginSchema.extend({ price: z.number() }).nullable(),
  maintenance: z.object({
    plan: z.string().nullable(),
    price: z.number(),
  }),
  totalPrice: z.number(),
})

// Export type for TypeScript
export type CalculatorState = z.infer<typeof CalculatorStateSchema>

