"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

interface ModalContextType {
  hasShownModal: boolean;
  setHasShownModal: (value: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [hasShownModal, setHasShownModal] = useState(false)

  useEffect(() => {
    const storedValue = localStorage.getItem('hasShownModal')
    if (storedValue) {
      setHasShownModal(JSON.parse(storedValue))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('hasShownModal', JSON.stringify(hasShownModal))
  }, [hasShownModal])

  return (
    <ModalContext.Provider value={{ hasShownModal, setHasShownModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModalContext() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalProvider')
  }
  return context
}

