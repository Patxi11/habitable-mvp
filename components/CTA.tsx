'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { ArrowRight, Building2, Users } from 'lucide-react'

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-water-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sustain-500/8 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        {/* Main CTA */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto mb-8">
            {t('cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-water-500 to-water-600 text-white font-medium rounded-lg hover:from-water-600 hover:to-water-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-water-500/25"
            >
              {t('cta.getStarted')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/about"
              className="inline-flex items-center px-8 py-4 bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 text-white font-medium rounded-lg hover:border-dark-600/50 hover:bg-dark-700/50 transition-all duration-300"
            >
              {t('cta.learnMore')}
            </Link>
          </div>
        </div>

        {/* Two-column CTA sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Participate CTA */}
          <div className="p-8 bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl hover:border-dark-600/50 hover:shadow-2xl hover:shadow-water-500/10 transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-water-500 to-water-600 rounded-xl shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-white">
              {t('cta.participate.title')}
            </h3>
            <p className="text-dark-400 mb-6">
              {t('cta.participate.description')}
            </p>
            
            <Link 
              href="/projects"
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-water-500 to-water-600 text-white font-medium rounded-lg hover:from-water-600 hover:to-water-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-water-500/25"
            >
              {t('cta.participate.action')}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Promote CTA */}
          <div className="p-8 bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl hover:border-dark-600/50 hover:shadow-2xl hover:shadow-sustain-500/10 transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-sustain-500 to-sustain-600 rounded-xl shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-white">
              {t('cta.promote.title')}
            </h3>
            <p className="text-dark-400 mb-6">
              {t('cta.promote.description')}
            </p>
            
            <Link 
              href="/submit"
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-sustain-500 to-sustain-600 text-white font-medium rounded-lg hover:from-sustain-600 hover:to-sustain-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-sustain-500/25"
            >
              {t('cta.promote.action')}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 p-6 bg-dark-900/30 backdrop-blur-sm border border-dark-700/50 rounded-xl">
          <p className="text-dark-400 text-sm">
            {t('cta.note')}
          </p>
        </div>
      </div>
    </section>
  )
}
