'use client'

import { useLanguage } from '../lib/context/LanguageContext'
import { Globe } from 'lucide-react'

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
      aria-label="Toggle language"
    >
      <Globe size={16} />
      <span className="text-sm font-medium">
        {language === 'en' ? '中文' : 'English'}
      </span>
    </button>
  )
}
