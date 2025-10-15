'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { ArrowRight, Building2 } from 'lucide-react'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-water-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sustain-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Hero Logo */}
        <div className="flex justify-center mb-6 md:mb-8">
          <img
            src="/habitable-logo-text.svg?v=11"
            alt="HABITABLE logo"
            className="w-72 md:w-96 lg:w-[28rem] h-auto"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>
        {/* Main heading */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <Building2 className="w-12 h-12 text-water-400 mr-4" />
            <h1 className="text-7xl md:text-8xl font-bold tracking-tight text-white">
              HABITABLE
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-dark-300 font-light">
            {t('hero.subtitle')}
          </p>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-dark-400 max-w-4xl mx-auto mb-12 leading-relaxed">
          {t('hero.description')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <div className="text-center">
            <Link 
              href="/projects" 
              className="group inline-flex items-center justify-center w-64 h-14 px-8 py-4 bg-gradient-to-r from-water-500 to-water-600 text-white font-medium rounded-lg hover:from-water-600 hover:to-water-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-water-500/25"
            >
              <span className="whitespace-nowrap">Join</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-dark-400 text-sm mt-3 italic max-w-64">
              For developers, investors, architects, and builders who want to create impactful projects.
            </p>
          </div>
          
          <div className="text-center">
            <Link 
              href="/submit" 
              className="group inline-flex items-center justify-center w-64 h-14 px-8 py-4 bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 text-white font-medium rounded-lg hover:border-dark-600/50 hover:bg-dark-700/50 transition-all duration-300"
            >
              <span className="whitespace-nowrap">Promote</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-dark-400 text-sm mt-3 italic max-w-64">
              For landowners & cities who want to catalyze their sites.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-dark-900/30 backdrop-blur-sm border border-dark-700/50 rounded-xl hover:border-dark-600/50 transition-all duration-300">
            <div className="text-3xl font-bold text-water-400 mb-2">50+</div>
            <div className="text-dark-400">{t('hero.stats.projects')}</div>
          </div>
          <div className="text-center p-6 bg-dark-900/30 backdrop-blur-sm border border-dark-700/50 rounded-xl hover:border-dark-600/50 transition-all duration-300">
            <div className="text-3xl font-bold text-sustain-400 mb-2">15</div>
            <div className="text-dark-400">{t('hero.stats.cities')}</div>
          </div>
          <div className="text-center p-6 bg-dark-900/30 backdrop-blur-sm border border-dark-700/50 rounded-xl hover:border-dark-600/50 transition-all duration-300">
            <div className="text-3xl font-bold text-water-400 mb-2">€2M+</div>
            <div className="text-dark-400">{t('hero.stats.investment')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
