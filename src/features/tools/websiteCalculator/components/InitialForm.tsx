"use client"

import { useState } from "react"
import { z } from "zod"
import { FormDataSchema } from "@/store"
import { Calculator, Code, ArrowRight } from "lucide-react"
import {
  Stats,
  RadioGroup,
  RadioGroupItem,
  Card,
  CardContent,
  CardHeader,
  Button,
  ScarcityBanner,
} from "@/features/tools/websiteCalculator/components"
import { isValidEmail } from "@/features/tools/websiteCalculator/utils"
import { HeroButtonsSet, Badge, Input, Label } from "@/components/ui"

type FormDataType = z.infer<typeof FormDataSchema>

interface InitialFormProps {
  formData: FormDataType
  setFormData: (data: Partial<FormDataType>) => void
  onStart: () => void
}

export function InitialForm({ formData, setFormData, onStart }: InitialFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = () => {
    try {
      FormDataSchema.parse(formData)

      setErrors({})
      onStart()
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            formattedErrors[err.path[0].toString()] = err.message
          }
        })
        setErrors(formattedErrors)
      }
    }
  }

  return (
    <div className="">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 relative">
          {/* Left Column - Hero Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <Badge text="Professional Website Cost Calculator" promo="100% Free" icon={Calculator} />
            </div>
            <h1>
              Stop Guessing Your Website Costs.
              <br />Get Instant Professional Estimates!
            </h1>
            <p className="text-sm md:text-md text-foreground/80">
              Our advanced calculator provides detailed cost breakdowns for WordPress websites. Perfect for freelancers
              setting client rates or businesses planning their web projects. Get accurate estimates for hosting,
              design, development, plugins, and maintenance - all tailored to your specific needs.
            </p>

            <HeroButtonsSet firstBtnText="Build Your Dream Website Today" secondBtnText="Get Expert Web Consultation" />

            <Stats />
          </div>

          {/* Right Column - Form */}
          <div className="relative z-30">
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-ring/20 rounded-full blur-2xl" />

            <Card className="relative bg-card/80 backdrop-blur-sm border-foreground/20 pt-4">
              <CardHeader>
                <ScarcityBanner />
                <p className="text-sm mb-4">
                  <strong className="text-destructive">Important:</strong> Please review the following differences:
                </p>
                <ul className="text-sm text-foreground space-y-2 mb-4">
                  <li>• If building yourself: You&apos;ll see actual costs of tools, services, and resources needed.</li>
                  <li>
                    • If charging clients: You&apos;ll see professional service rates including labor costs, project
                    management, and profit margins.
                  </li>
                </ul>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ name: e.target.value })}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    className={formData.email && !isValidEmail(formData.email) ? "border-destructive" : ""}
                    value={formData.email}
                    onChange={(e) => setFormData({ email: e.target.value })}
                    placeholder="john@example.com"
                  />
                  {formData.email && !isValidEmail(formData.email) && (
                    <p className="text-destructive text-sm mt-1">Please enter a valid email address</p>
                  )}
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                </div>
                <div className="space-y-3">
                  <Label>Purpose</Label>
                  <RadioGroup value={formData.purpose} onValueChange={(value: string) => setFormData({ purpose: value })}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="self" id="self" />
                      <Label htmlFor="self">I want to build the website myself</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="client" id="client" />
                      <Label htmlFor="client">I want to know how much to charge clients</Label>
                    </div>
                  </RadioGroup>
                  {errors.purpose && <p className="text-destructive text-sm mt-1">{errors.purpose}</p>}
                  <div className="mt-4 p-4 bg-card rounded-lg border border-foreground/20">
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="understood"
                        checked={formData.understood}
                        onChange={(e) =>
                          setFormData({
                            understood: e.target.checked,
                          })
                        }
                        className="mt-1"
                      />
                      <label htmlFor="understood" className="text-sm text-foreground">
                        I understand that pricing will be adjusted based on my selection and agree to receive occasional
                        marketing emails. By proceeding, I accept the Terms of Service, Privacy Policy, and acknowledge
                        that my data will be processed in accordance with the company&apos;s data protection policies.
                      </label>
                    </div>
                    {errors.understood && <p className="text-destructive text-sm mt-1">{errors.understood}</p>}
                  </div>
                </div>
                <Button
                  className="w-full bg-primary hover:bg-blue-700 mt-4 group flex items-center justify-center gap-2"
                  onClick={handleSubmit}
                  disabled={
                    !formData.name ||
                    !formData.email ||
                    !isValidEmail(formData.email) ||
                    !formData.purpose ||
                    !formData.understood
                  }
                >
                  Start Calculator
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Floating Icons */}
            <div className="absolute -left-4 -top-4 p-3 bg-primary rounded-lg shadow-xl z-40">
              <Calculator className="w-6 h-6 text-primary-foreground " />
            </div>
            <div className="absolute -right-4 -bottom-4 p-3 bg-ring rounded-lg shadow-xl z-40">
              <Code className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

