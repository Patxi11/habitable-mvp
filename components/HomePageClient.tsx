'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { ArrowRight, Search, MapPin, FileText, Building2, CheckCircle, Rocket, Users, BarChart3 } from 'lucide-react'

export default function HomePageClient() {
  const { t } = useLanguage()
  
  const processSteps = [
    {
      icon: Search,
      title: t('home.process.step1.title'),
      description: t('home.process.step1.description')
    },
    {
      icon: MapPin,
      title: t('home.process.step2.title'),
      description: t('home.process.step2.description')
    },
    {
      icon: FileText,
      title: t('home.process.step3.title'),
      description: t('home.process.step3.description')
    },
    {
      icon: Building2,
      title: t('home.process.step4.title'),
      description: t('home.process.step4.description')
    },
    {
      icon: CheckCircle,
      title: t('home.process.step5.title'),
      description: t('home.process.step5.description')
    },
    {
      icon: Rocket,
      title: t('home.process.step6.title'),
      description: t('home.process.step6.description')
    },
    {
      icon: Users,
      title: t('home.process.step7.title'),
      description: t('home.process.step7.description')
    },
    {
      icon: BarChart3,
      title: t('home.process.step8.title'),
      description: t('home.process.step8.description')
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Key sentence */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight w-full mx-auto px-2">
            {t('home.hero.title')}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link 
              href="/projects"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 text-lg"
            >
              {t('hero.participate')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/submit"
              className="inline-flex items-center px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-200 text-lg border border-gray-700"
            >
              {t('hero.promote')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How Habitable Works Section */}
      <section className="py-32 bg-gradient-to-b from-[#0a0a0a] via-gray-900/20 to-[#0a0a0a] relative">
        {/* Subtle radial gradient for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-gray-800/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-white tracking-tight">
              {t('home.process.title')}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A streamlined approach to sustainable urban development
            </p>
          </div>
          
          {/* Process Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="group relative">
                  {/* Card */}
                  <div className="h-full p-6 bg-[#111111] border border-[#1a1a1a] rounded-lg hover:border-[#2a2a2a] transition-all duration-200">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-gray-300" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-white font-medium mb-2 text-sm leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Step indicator */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs font-medium">
                    {index + 1}
                  </div>
                </div>
              )
            })}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Link 
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all duration-200 text-sm"
            >
              Explore Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Participate */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">{t('home.cta.participate.title')}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t('home.cta.participate.description')}
              </p>
              
              <Link 
                href="/signup"
                className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all duration-200 border border-gray-200"
              >
                {t('home.cta.participate.button')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            {/* Promote */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">{t('home.cta.promote.title')}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t('home.cta.promote.description')}
              </p>
              
              <Link 
                href="/submit"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-all duration-200 border border-gray-700"
              >
                {t('home.cta.promote.button')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
