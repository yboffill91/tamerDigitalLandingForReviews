'use client'
import React from 'react'
import { useCalculatorStore } from "@/store"
import { themes } from '../../utils'
import { cn } from '@/lib'
import { ShimmerButton } from '@/components/ui'
import { useRouter } from 'next/navigation'

export const ThemeStep = () => {
    const {formData, theme, setTheme} = useCalculatorStore()
    const router = useRouter()
  return (
   <>
    {formData.purpose === 'client' && (
        <div className="ring/10 border border-ring rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-primary mb-2">Professional Service Note</h3>
          <p className="text-secondary">
            Theme setup includes professional configuration, optimization, and customization to match your brand. 
            Setup fees cover expert implementation and technical configuration.
          </p>
        </div>
      )}

      <div className="grid gap-6">
        {themes.map(({name, description, setupFee, price, features}) => (
          <div
            key={name}
            className={cn(
              "rounded-lg border-2 transition-all",
              theme.name === name ? "border-primary bg-ring/20" : "border-foreground/20"
            )}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{name}</h3>
                  <p className="text-foreground/80">{description}</p>
                </div>
                {formData.purpose === 'client' && (
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">
                      Setup Fee: ${setupFee}
                    </div>
                    <div className="text-sm text-foreground/80">One-time professional setup</div>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {price.free !== null && (
                  
                  <div
                    onClick={() => {
                      setTheme(name, 'pro', price.pro );
                      
                    }}
                    className={cn(
                      "rounded-lg border-2 p-4 cursor-pointer transition-all",
                      theme.name === name && theme.version === 'free'
                        ? "border-primary bg-card"
                        : "border-foreground/20 hover:border-primary"
                    )}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-semibold">Free Version</h4>
                      <span className="text-xl font-bold">$0</span>
                    </div>
                    <ul className="space-y-2">
                      {features.core.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-secondary-green rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {price.free === null && (
                  <div className="rounded-lg border-2 border-foreground/20 p-4 bg-card">
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <span className="inline-block px-3 py-1 bg-ring text-primary-foreground rounded-full text-sm font-medium mb-2">
                          Premium Only Theme
                        </span>
                        <p className="text-foreground/80 text-sm">
                          This theme is only available in Pro version
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div
                  onClick={() => {
                    setTheme(name, 'pro', price.pro);
                  }}
                  className={cn(
                    "rounded-lg border-2 p-4 cursor-pointer transition-all",
                    theme.name === name && theme.version === 'pro'
                      ? "border-primary bg-card shadow-lg"
                      : "border-foreground/20 hover:border-primary"
                  )}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold">
                      {price.free === null ? 'Premium Version' : 'Pro Version'}
                    </h4>
                    <span className="text-xl font-bold">${price.pro}/year</span>
                  </div>
                  <ul className="space-y-2">
                    {features.pro.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-6 w-full mt-12">
        <ShimmerButton variant='ghost' size='big' onClick={()=>router.push('/website-calculator/hostingStep')}>Back</ShimmerButton>
        <ShimmerButton variant="solid" size="big" onClick={() => router.push('/website-calculator/pageStep')} className={`${theme ? "" : "hidden"}`}>Next</ShimmerButton>

      </div>
   </>
  )
}
