'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Globe } from 'lucide-react'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="relative">
      <button
        onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-dark-800 hover:bg-dark-700 border border-dark-600 hover:border-water-500 text-gray-300 hover:text-water-400 transition-all duration-200 text-sm"
        title={language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
      >
        <Globe className="w-4 h-4" />
        <span className="font-medium uppercase tracking-wide">
          {language === 'en' ? 'ES' : 'EN'}
        </span>
      </button>
    </div>
  )
}
