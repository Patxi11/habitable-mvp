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
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index}
                className="group relative p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Icon with gradient background */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-gray-100 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            {t('features.cta.text')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors">
              {t('features.cta.participate')}
            </button>
            <button className="px-8 py-3 border border-gray-700 text-white font-medium rounded-lg hover:border-gray-600 hover:bg-gray-900 transition-colors">
              {t('features.cta.promote')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
