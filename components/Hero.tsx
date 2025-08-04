'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { ArrowRight, Building2 } from 'lucide-react'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.5
      }} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Main heading */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <Building2 className="w-12 h-12 text-white mr-4" />
            <h1 className="text-7xl md:text-8xl font-bold tracking-tight">
              HABITABLE
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            {t('hero.subtitle')}
          </p>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
          {t('hero.description')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/projects" 
            className="group inline-flex items-center px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
          >
            {t('hero.cta.explore')}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="/submit" 
            className="inline-flex items-center px-8 py-4 border border-gray-700 text-white font-medium rounded-lg hover:border-gray-600 hover:bg-gray-900 transition-all duration-200"
          >
            {t('hero.cta.submit')}
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400">{t('hero.stats.projects')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">15</div>
            <div className="text-gray-400">{t('hero.stats.cities')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">€2M+</div>
            <div className="text-gray-400">{t('hero.stats.investment')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
