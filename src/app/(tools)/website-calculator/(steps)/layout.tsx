import { StepsWrapper } from '@/features/tools/websiteCalculator/components'
import React from 'react'

const WebCalcStepsLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <StepsWrapper>
      {children}
    </StepsWrapper>
  )
}

export default WebCalcStepsLayout