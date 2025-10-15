'use client'

import { useState } from 'react'
import Navigation from '../../components/Navigation'
import ProjectCard from '../../components/ProjectCard'
import { useLanguage } from '../../contexts/LanguageContext'
import { Search, Filter, MapPin, DollarSign, Calendar, ArrowRight } from 'lucide-react'

// Mock data for demonstration
const mockProjects = [
  {
    id: '1',
    title: 'Centro Habitable Mexicali',
    location: 'Mexicali, Baja California, MX',
    description: 'Infill mixed-use redevelopment with affordable and workforce housing over active ground-floor retail and community services. The project stitches together vacant parcels to create a shaded public plaza and safer pedestrian connections.',
    type: 'Infill Mixed-Use',
    investmentRange: '$15M - $25M',
    timeline: '24-36 months',
    stakeholdersNeeded: ['Investors', 'Architects', 'Community Partners'],
    imageUrl: '/MexicaliBuilding2.png',
    tags: ['Affordable Housing', 'Infill', 'Mixed-Use', 'Placemaking'],
    impactMetrics: {
      affordableUnits: 140,
      greenSpaceAcres: 1.2,
      jobsCreated: 95
    },
    expectedIRR: '14% - 23%',
    totalInvestmentAmount: '$25,000,000',
    hbtblIndex: '75/100',
    minimumInvestment: '$5,000',
    impactScore: '82/100'
  },
  {
    id: '2',
    title: 'Downtown Brownsville Lofts',
    location: 'Brownsville, TX',
    description: 'Main Street infill with mixed-income apartments over street-activating retail and local business incubator space. Enhances walkability, supports small businesses, and brings residents back to the historic core.',
    type: 'Infill Mixed-Use',
    investmentRange: '$8M - $12M',
    timeline: '18-24 months',
    stakeholdersNeeded: ['Developers', 'Historic Preservation Experts', 'Local Business Partners'],
    imageUrl: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80',
    tags: ['Mixed-Income', 'Infill', 'Main Street', 'Historic Core'],
    impactMetrics: {
      affordableUnits: 80,
      jobsCreated: 150
    },
    expectedIRR: '12% - 18%',
    totalInvestmentAmount: '$10,000,000',
    hbtblIndex: '71/100',
    minimumInvestment: '$5,000',
    impactScore: '78/100'
  },
  {
    id: '3',
    title: 'Barrio Vivo Monterrey',
    location: 'Monterrey, Nuevo León, MX',
    description: 'Compact, walkable infill district with mid-rise housing above neighborhood-serving retail, co-working, and childcare. Prioritizes shade, microclimate comfort, and energy-efficient buildings.',
    type: 'Infill Mixed-Use',
    investmentRange: '$20M - $30M',
    timeline: '30-42 months',
    stakeholdersNeeded: ['Transit Authority', 'Green Building Specialists', 'Community Organizations'],
    imageUrl: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80',
    tags: ['Infill', 'Mixed-Use', 'Energy Efficient', 'Family Services'],
    impactMetrics: {
      affordableUnits: 210,
      greenSpaceAcres: 2.0,
      jobsCreated: 130
    },
    expectedIRR: '15% - 22%',
    totalInvestmentAmount: '$30,000,000',
    hbtblIndex: '77/100',
    minimumInvestment: '$10,000',
    impactScore: '85/100'
  }
]

export default function Projects() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const handleExpressInterest = (projectId: string, interestType: string) => {
    // In a real app, this would make an API call
    alert(`Interest expressed in project ${projectId} as: ${interestType}. This would normally save to the database and notify relevant parties.`)
  }

  const filteredProjects = mockProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilters = selectedFilters.length === 0 || 
                          selectedFilters.some(filter => project.tags.includes(filter))
    
    return matchesSearch && matchesFilters
  })

  const availableFilters = Array.from(new Set(mockProjects.flatMap(p => p.tags)))

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-water-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sustain-500/8 rounded-full blur-3xl" />
      </div>
      
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 transform-gpu origin-top scale-[0.8]">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('projects.title')}</h1>
          <p className="text-xl text-dark-400 max-w-3xl mx-auto leading-relaxed">{t('projects.subtitle')}</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('projects.search.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-dark-900/50 backdrop-blur-sm border border-dark-700/50 rounded-lg px-4 py-3 pl-10 text-white placeholder-dark-400 focus:outline-none focus:border-water-500/50 transition-all duration-300"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 text-white font-medium py-3 px-4 rounded-lg hover:bg-dark-700/50 hover:border-dark-600/50 transition-all duration-300 flex items-center"
            >
              <Filter className="w-4 h-4 mr-2" />
              {t('projects.filters')}
              {selectedFilters.length > 0 && (
                <span className="ml-2 bg-gradient-to-r from-water-500 to-sustain-500 text-white text-xs px-2 py-1 rounded-full">
                  {selectedFilters.length}
                </span>
              )}
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6">
              <h3 className="font-medium mb-3 text-white">{t('projects.filterByTags')}</h3>
              <div className="flex flex-wrap gap-2">
                {availableFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => {
                      setSelectedFilters(prev => 
                        prev.includes(filter) 
                          ? prev.filter(f => f !== filter)
                          : [...prev, filter]
                      )
                    }}
                    className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
                      selectedFilters.includes(filter)
                        ? 'bg-gradient-to-r from-water-500 to-sustain-500 text-white'
                        : 'bg-dark-700/50 text-dark-300 hover:bg-dark-600/50'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              {selectedFilters.length > 0 && (
                <button
                  onClick={() => setSelectedFilters([])}
                  className="text-dark-400 hover:text-water-400 text-sm mt-3 transition-colors duration-300"
                >
                  {t('projects.clearAll')}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-dark-400">
            Showing {filteredProjects.length} of {mockProjects.length} projects
          </p>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onExpressInterest={handleExpressInterest}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-dark-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">{t('projects.noResults.title')}</h3>
            <p className="text-dark-400 mb-4">{t('projects.noResults.description')}</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedFilters([])
              }}
              className="bg-gradient-to-r from-water-500 to-sustain-500 text-white font-medium py-3 px-6 rounded-lg hover:from-water-600 hover:to-sustain-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-water-500/25"
            >
              {t('projects.clearSearch')}
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-dark-900/50 to-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">{t('projects.cta.title')}</h3>
            <p className="text-dark-400 mb-6 leading-relaxed">
              {t('projects.cta.description')}
            </p>
            <a href="/submit" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-water-500 to-sustain-500 text-white font-semibold rounded-lg hover:from-water-600 hover:to-sustain-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-water-500/25 transform hover:scale-105">
              {t('projects.cta.button')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


