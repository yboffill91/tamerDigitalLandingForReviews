'use client'

import { useRouter } from 'next/navigation'
import { useCalculatorStore } from '@/store'
import { CalculatorExplanationSection, FaqSection, FrameworkComparisonSection, InitialForm, ProblemsSection, ServiceProviderComparisonSection } from '@/features/tools/websiteCalculator/components'
import { TestimonialsMarqueeGrid } from '@/features/services/localSeo/components'

const WebCalculatorComponents = () => {
    const router = useRouter()
    const { formData, setFormData } = useCalculatorStore()
  
    // Handle start button click - navigate to the hosting step
    const handleStart = () => {
      router.push("/website-calculator/hostingStep")
    }
  
    return (
      <section>
        <div className="container mt-24 mx-auto overflow-x-hidden">
          <InitialForm formData={formData} setFormData={setFormData} onStart={handleStart} />
          <ProblemsSection />
          <CalculatorExplanationSection />
          <FrameworkComparisonSection />
          <ServiceProviderComparisonSection />
          <FaqSection />
          <TestimonialsMarqueeGrid />
        </div>
      </section>
    )
}

export default WebCalculatorComponents