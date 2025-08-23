'use client'

import { useState } from 'react'
import { MapPin, Users, DollarSign, Calendar, Heart, ArrowRight, X } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

interface Project {
  id: string
  title: string
  location: string
  description: string
  type: string
  investmentRange: string
  timeline: string
  stakeholdersNeeded: string[]
  imageUrl: string
  tags: string[]
  impactMetrics: {
    affordableUnits?: number
    greenSpaceAcres?: number
    jobsCreated?: number
  }
}

interface ProjectCardProps {
  project: Project
  onExpressInterest: (projectId: string, interestType: string) => void
}

export default function ProjectCard({ project, onExpressInterest }: ProjectCardProps) {
  const { t } = useLanguage()
  const [showInterestModal, setShowInterestModal] = useState(false)

  const interestTypes = [
    { id: 'invest', label: t('project.interest.invest'), icon: DollarSign },
    { id: 'develop', label: t('project.interest.develop'), icon: Users },
    { id: 'collaborate', label: t('project.interest.collaborate'), icon: Heart },
    { id: 'live', label: t('project.interest.live'), icon: MapPin },
    { id: 'bring', label: t('project.interest.bring'), icon: ArrowRight },
  ]

  const handleInterestClick = (interestType: string) => {
    onExpressInterest(project.id, interestType)
    setShowInterestModal(false)
  }

  return (
    <>
      <div className="bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6 hover:border-dark-600/50 hover:shadow-2xl hover:shadow-water-500/10 transition-all duration-300 group">
        <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80`
            }}
          />
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-dark-700/50 text-dark-300 text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-medium mb-2 text-white">{project.title}</h3>
        
        <div className="flex items-center text-dark-400 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{project.location}</span>
        </div>
        
        <p className="text-dark-400 mb-4 line-clamp-3 group-hover:text-dark-300 transition-colors duration-300">{project.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <span className="text-dark-500">Investment Range:</span>
            <div className="font-medium text-dark-300">{project.investmentRange}</div>
          </div>
          <div>
            <span className="text-dark-500">Timeline:</span>
            <div className="font-medium text-dark-300">{project.timeline}</div>
          </div>
        </div>
        
        {project.impactMetrics && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-dark-300 mb-2">Impact Metrics</h4>
            <div className="grid grid-cols-3 gap-2 text-sm">
              {project.impactMetrics.affordableUnits && (
                <div className="text-center">
                  <div className="font-semibold text-white">{project.impactMetrics.affordableUnits}</div>
                  <div className="text-dark-500 text-xs">Affordable Units</div>
                </div>
              )}
              {project.impactMetrics.greenSpaceAcres && (
                <div className="text-center">
                  <div className="font-semibold text-white">{project.impactMetrics.greenSpaceAcres}</div>
                  <div className="text-dark-500 text-xs">Green Space Acres</div>
                </div>
              )}
              {project.impactMetrics.jobsCreated && (
                <div className="text-center">
                  <div className="font-semibold text-white">{project.impactMetrics.jobsCreated}</div>
                  <div className="text-dark-500 text-xs">Jobs Created</div>
                </div>
              )}
            </div>
          </div>
        )}
        
        <div className="mb-4">
          <span className="text-sm text-dark-500">Seeking:</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {project.stakeholdersNeeded.map((stakeholder) => (
              <span key={stakeholder} className="px-2 py-1 bg-dark-700/50 text-dark-300 text-xs rounded">
                {stakeholder}
              </span>
            ))}
          </div>
        </div>
        
        <button
          onClick={() => setShowInterestModal(true)}
          className="bg-gradient-to-r from-water-500 to-sustain-500 text-white font-medium rounded-lg hover:from-water-600 hover:to-sustain-600 transition-all duration-300 w-full py-3 shadow-lg hover:shadow-xl hover:shadow-water-500/25"
        >
          {t('project.interest.title')}
        </button>
      </div>

      {/* Interest Modal */}
      {showInterestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-dark-900/95 to-dark-800/95 backdrop-blur-sm border border-dark-700/50 rounded-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-medium text-white mb-2">{t('project.interest.title')}</h3>
            <p className="text-dark-400 mb-6">{t('project.interest.subtitle')} {project.title}?</p>
            
            <div className="space-y-3">
              {interestTypes.map((type) => {
                const Icon = type.icon
                return (
                  <button
                    key={type.id}
                    onClick={() => handleInterestClick(type.id)}
                    className="w-full flex items-center p-3 border border-dark-700/50 rounded-lg hover:border-water-500/50 hover:bg-dark-800/50 transition-colors duration-300 text-dark-300 hover:text-white"
                  >
                    <Icon className="w-5 h-5 text-water-400 mr-3" />
                    <span>{type.label}</span>
                  </button>
                )
              })}
            </div>
            
            <button
              onClick={() => setShowInterestModal(false)}
              className="bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 text-dark-300 font-medium py-3 px-4 rounded-lg hover:bg-dark-700/50 hover:border-dark-600/50 transition-all duration-300 w-full mt-4"
            >
              {t('project.interest.cancel')}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
