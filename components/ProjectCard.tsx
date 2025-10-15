'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '../contexts/LanguageContext'
import { DollarSign, Users, Heart, MapPin, ArrowRight, Calendar, X } from 'lucide-react'

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
  // New summary metrics
  expectedIRR?: string // e.g., "14% - 23%"
  totalInvestmentAmount?: string // e.g., "$2,300,000"
  hbtblIndex?: string // e.g., "75/100"
  minimumInvestment?: string // e.g., "$5,000"
  impactScore?: string // e.g., "82/100"
}

interface ProjectCardProps {
  project: Project
  onExpressInterest: (projectId: string, interestType: string) => void
}

export default function ProjectCard({ project, onExpressInterest }: ProjectCardProps) {
  const { t } = useLanguage()
  const router = useRouter()
  const [showInterestModal, setShowInterestModal] = useState(false)

  const interestTypes = [
    { id: 'invest', label: t('project.interest.invest'), icon: DollarSign },
    { id: 'develop', label: t('project.interest.develop'), icon: Users },
    { id: 'collaborate', label: t('project.interest.collaborate'), icon: Heart },
    { id: 'live', label: t('project.interest.live'), icon: MapPin },
    { id: 'bring', label: t('project.interest.bring'), icon: ArrowRight },
  ]

  const handleInterestClick = (interestType: string) => {
    // Route to appropriate form based on interest type
    router.push(`/interest/${interestType}`)
    setShowInterestModal(false)
  }

  return (
    <>
      <div className="bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-5 hover:border-dark-600/50 hover:shadow-2xl hover:shadow-water-500/10 transition-all duration-300 group">
        <div className="aspect-video bg-gray-200 rounded-lg mb-3 overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80`
            }}
          />
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-dark-700/50 text-dark-300 text-xs rounded-full">
              {tag}
            </span>
          ))}
          {project.tags.length > 2 && (
            <span className="px-2 py-0.5 bg-dark-700/50 text-dark-400 text-xs rounded-full">+{project.tags.length - 2}</span>
          )}
        </div>
        
        <h3 className="text-lg font-semibold mb-1 text-white leading-snug">{project.title}</h3>
        
        <div className="flex items-center text-dark-400 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{project.location}</span>
        </div>
        
        <p className="text-dark-400 mb-3 line-clamp-2 group-hover:text-dark-300 transition-colors duration-300">{project.description}</p>
        
        {/* Compact Key Metrics (no Investment Range) */}
        {(project.expectedIRR || project.totalInvestmentAmount || project.hbtblIndex || project.minimumInvestment || project.impactScore || project.timeline) && (
          <div className="mb-3 grid grid-cols-2 gap-3 text-xs">
            {project.expectedIRR && (
              <div>
                <span className="text-dark-500">{t('projects.card.expectedIRR')}:</span>
                <div className="font-medium text-dark-300">{project.expectedIRR}</div>
              </div>
            )}
            {project.totalInvestmentAmount && (
              <div>
                <span className="text-dark-500">{t('projects.card.totalInvestment')}:</span>
                <div className="font-medium text-dark-300">{project.totalInvestmentAmount}</div>
              </div>
            )}
            {project.minimumInvestment && (
              <div>
                <span className="text-dark-500">{t('projects.card.minimumInvestment')}:</span>
                <div className="font-medium text-dark-300">{project.minimumInvestment}</div>
              </div>
            )}
            {project.hbtblIndex && (
              <div>
                <span className="text-dark-500">{t('projects.card.hbtblIndex')}:</span>
                <div className="font-medium text-dark-300">{project.hbtblIndex}</div>
              </div>
            )}
            {project.impactScore && (
              <div>
                <span className="text-dark-500">{t('projects.card.impactScore')}:</span>
                <div className="font-medium text-dark-300">{project.impactScore}</div>
              </div>
            )}
            {project.timeline && (
              <div>
                <span className="text-dark-500">{t('projects.card.timeline')}:</span>
                <div className="font-medium text-dark-300">{project.timeline}</div>
              </div>
            )}
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
