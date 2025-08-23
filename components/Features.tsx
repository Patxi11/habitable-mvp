'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Building2, Users, TrendingUp, Shield, MapPin, Heart } from 'lucide-react'

export default function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Building2,
      title: t('features.curated.title'),
      description: t('features.curated.description'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: t('features.network.title'),
      description: t('features.network.description'),
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: t('features.investment.title'),
      description: t('features.investment.description'),
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: t('features.sustainable.title'),
      description: t('features.sustainable.description'),
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: MapPin,
      title: t('features.location.title'),
      description: t('features.location.description'),
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Heart,
      title: t('features.collaboration.title'),
      description: t('features.collaboration.description'),
      gradient: 'from-teal-500 to-cyan-500'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-dark-950 to-dark-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-water-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-sustain-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('features.title')}
          </h2>
          <p className="text-xl text-dark-400 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            // Use consistent water/sustain gradient for all features
            const gradientClass = index % 2 === 0 ? 'from-water-500 to-water-600' : 'from-sustain-500 to-sustain-600'
            return (
              <div 
                key={index}
                className="group relative p-8 bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl hover:border-dark-600/50 hover:shadow-2xl hover:shadow-water-500/10 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Icon with gradient background */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${gradientClass} mb-6 shadow-lg`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-water-100 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-dark-400 leading-relaxed group-hover:text-dark-300 transition-colors">
                  {feature.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-water-500/5 to-sustain-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-dark-400 mb-6">
            {t('features.cta.text')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-3 bg-gradient-to-r from-water-500 to-water-600 text-white font-medium rounded-lg hover:from-water-600 hover:to-water-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-water-500/25 transform hover:scale-105">
              {t('features.cta.participate')}
            </button>
            <button className="px-8 py-3 bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 text-white font-medium rounded-lg hover:border-dark-600/50 hover:bg-dark-700/50 transition-all duration-300">
              {t('features.cta.promote')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
