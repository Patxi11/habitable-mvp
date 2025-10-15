'use client'

import Navigation from '../../components/Navigation'
import { useLanguage } from '../../contexts/LanguageContext'
import { Mail } from 'lucide-react'

export default function About() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transform-gpu origin-top scale-[0.8]">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-8 leading-tight">
            {t('about.title')}
          </h1>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-xl text-gray-300">{t('about.subtitle1')}</p>
            <p className="text-xl text-gray-300">{t('about.subtitle2')}</p>
            <p className="text-lg">{t('about.paragraph1')}</p>
            <p className="text-lg">{t('about.paragraph2')}</p>
            <p className="text-lg">{t('about.paragraph3')}</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 pt-16 border-t border-gray-800">
          <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-8 max-w-2xl">
            <h2 className="text-2xl font-medium text-white mb-4">{t('about.contact.title')}</h2>
            <p className="text-gray-400 mb-6">
              {t('about.contact.description')}
            </p>
            <a 
              href="mailto:info@hbtbl.com"
              className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              info@hbtbl.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
