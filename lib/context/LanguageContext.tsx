'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { en } from '../locales/en'
import { zh } from '../locales/zh'

type Language = 'en' | 'zh'
type Translations = typeof en

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const translations = language === 'en' ? en : zh

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  )
}
