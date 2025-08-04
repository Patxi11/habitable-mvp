'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { ArrowRight, Building2, Users } from 'lucide-react'

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Main CTA */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t('cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup"
              className="group inline-flex items-center px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              {t('cta.getStarted')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/about"
              className="inline-flex items-center px-8 py-4 border border-gray-700 text-white font-medium rounded-lg hover:border-gray-600 hover:bg-gray-900 transition-all duration-200"
            >
              {t('cta.learnMore')}
            </Link>
          </div>
        </div>

        {/* Two-column CTA sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Participate CTA */}
          <div className="p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              {t('cta.participate.title')}
            </h3>
            <p className="text-gray-400 mb-6">
              {t('cta.participate.description')}
            </p>
            
            <Link 
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200"
            >
              {t('cta.participate.action')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Promote CTA */}
          <div className="p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              {t('cta.promote.title')}
            </h3>
            <p className="text-gray-400 mb-6">
              {t('cta.promote.description')}
            </p>
            
            <Link 
              href="/submit"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
            >
              {t('cta.promote.action')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 p-6 bg-gray-900/30 border border-gray-800 rounded-xl">
          <p className="text-gray-400 text-sm">
            {t('cta.note')}
          </p>
        </div>
      </div>
    </section>
  )
}
