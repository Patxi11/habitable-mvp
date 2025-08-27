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
      <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-water-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sustain-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Key sentence */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight w-full mx-auto px-2 text-white">
            {t('home.hero.title')}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-dark-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
            <div className="text-center">
              <Link 
                href="/projects"
                className="group inline-flex items-center justify-center w-64 h-14 px-8 py-4 bg-gradient-to-r from-water-500 to-sustain-500 text-white font-semibold rounded-lg hover:from-water-600 hover:to-sustain-600 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:shadow-water-500/25 transform hover:scale-105"
              >
                <span className="whitespace-nowrap">{t('hero.joinButton')}</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-dark-400 text-sm mt-3 italic max-w-64">
                {t('hero.joinDescription')}
              </p>
            </div>
            <div className="text-center">
              <Link 
                href="/submit"
                className="group inline-flex items-center justify-center w-64 h-14 px-8 py-4 bg-gradient-to-r from-water-500 to-sustain-500 text-white font-semibold rounded-lg hover:from-water-600 hover:to-sustain-600 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:shadow-water-500/25 transform hover:scale-105"
              >
                <span className="whitespace-nowrap">{t('hero.promoteButton')}</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-dark-400 text-sm mt-3 italic max-w-64">
                {t('hero.promoteDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Habitable Works Section */}
      <section className="py-24 bg-gradient-to-b from-dark-950 to-dark-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-water-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sustain-500/8 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t('home.process.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A streamlined approach to sustainable urban development through data-driven insights and collaborative innovation
            </p>
          </div>
          
          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="group relative">
                  {/* Connection line to next step (hidden on last item and mobile) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-gray-600 to-transparent z-0" />
                  )}
                  
                  {/* Step Card */}
                  <div className="relative bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6 hover:border-dark-600/50 hover:shadow-2xl hover:shadow-water-500/10 transition-all duration-300 group-hover:transform group-hover:scale-105">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-water-500 to-water-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                    
                    {/* Icon Container */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-water-500/20 to-sustain-500/20 rounded-xl flex items-center justify-center group-hover:from-water-500/30 group-hover:to-sustain-500/30 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-water-400 group-hover:text-water-300 transition-colors duration-300" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-white font-bold text-lg leading-tight group-hover:text-water-100 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-dark-400 text-sm leading-relaxed group-hover:text-dark-300 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-water-500/5 to-sustain-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>
              )
            })}
          </div>
          
          {/* Bottom Section */}
          <div className="text-center space-y-8">
            {/* Process Flow Indicator */}
            <div className="flex items-center justify-center space-x-2 mb-8">
              {processSteps.map((_, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-water-500 to-sustain-500 rounded-full" />
                  {index < processSteps.length - 1 && (
                    <div className="w-8 h-0.5 bg-gradient-to-r from-water-500/50 to-sustain-500/50 mx-2" />
                  )}
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="bg-gradient-to-r from-dark-900/50 to-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Urban Development?
              </h3>
              <p className="text-dark-400 mb-6 leading-relaxed">
                Join our platform and discover how data-driven insights can unlock sustainable development opportunities in your area.
              </p>
              <Link 
                href="/projects"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-water-500 to-sustain-500 text-white font-semibold rounded-xl hover:from-water-600 hover:to-sustain-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-water-500/25 transform hover:scale-105"
              >
                Explore Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-dark-900 to-dark-950">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-dark-300 mb-16 max-w-3xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Participate */}
            <div className="text-center p-8 bg-dark-900/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl hover:border-dark-600/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-white">{t('hero.joinButton')}</h3>
              <p className="text-dark-400 mb-6 leading-relaxed">
                {t('hero.joinDescription')}
              </p>
              <Link 
                href="/signup"
                className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-water-500 to-sustain-500 text-white font-medium rounded-lg hover:from-water-600 hover:to-sustain-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-water-500/25"
              >
                {t('hero.joinProjectButton')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Promote */}
            <div className="text-center p-8 bg-dark-900/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl hover:border-dark-600/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-white">{t('hero.promoteButton')}</h3>
              <p className="text-dark-400 mb-6 leading-relaxed">
                {t('hero.promoteDescription')}
              </p>
              <Link 
                href="/submit"
                className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-water-500 to-sustain-500 text-white font-medium rounded-lg hover:from-water-600 hover:to-sustain-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-water-500/25"
              >
                {t('hero.promoteProjectButton')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
