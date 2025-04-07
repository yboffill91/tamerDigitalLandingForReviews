import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { tools } from '@/features/layout/header/utils'
import './modules.css'

export const metadata : Metadata = {
    ...tools[0].metadata
}


const WebCalculatorLayout = ({children}:{children: ReactNode}) => {
  return (
    <>
    {children}
    </>
  )
}

export default WebCalculatorLayout