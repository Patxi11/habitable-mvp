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
    title: 'Riverside Commons',
    location: 'Detroit, MI',
    description: 'Mixed-use development combining affordable housing, community spaces, and green infrastructure along the Detroit River waterfront. This project aims to revitalize an underutilized industrial area while providing sustainable housing options.',
    type: 'Mixed-Use',
    investmentRange: '$15M - $25M',
    timeline: '24-36 months',
    stakeholdersNeeded: ['Investors', 'Architects', 'Community Partners'],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80',
    tags: ['Affordable Housing', 'Waterfront', 'Green Infrastructure'],
    impactMetrics: {
      affordableUnits: 120,
      greenSpaceAcres: 3.5,
      jobsCreated: 85
    }
  },
  {
    id: '2',
    title: 'Innovation District Hub',
    location: 'Cleveland, OH',
    description: 'Adaptive reuse of historic manufacturing buildings to create a mixed-income residential and commercial hub that supports local entrepreneurs and small businesses.',
    type: 'Adaptive Reuse',
    investmentRange: '$8M - $12M',
    timeline: '18-24 months',
    stakeholdersNeeded: ['Developers', 'Historic Preservation Experts', 'Local Business Partners'],
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80',
    tags: ['Historic Preservation', 'Small Business', 'Mixed-Income'],
    impactMetrics: {
      affordableUnits: 75,
      jobsCreated: 150
    }
  },
  {
    id: '3',
    title: 'Green Transit Village',
    location: 'Buffalo, NY',
    description: 'Transit-oriented development featuring energy-efficient housing, retail spaces, and community gardens near a major bus rapid transit station.',
    type: 'Transit-Oriented',
    investmentRange: '$20M - $30M',
    timeline: '30-42 months',
    stakeholdersNeeded: ['Transit Authority', 'Green Building Specialists', 'Community Organizations'],
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80',
    tags: ['Transit-Oriented', 'Energy Efficient', 'Community Gardens'],
    impactMetrics: {
      affordableUnits: 200,
      greenSpaceAcres: 2.8,
      jobsCreated: 120
    }
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
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
                placeholder="Search projects by name, location, or description..."
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
              Filters
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
              <h3 className="font-medium mb-3 text-white">Filter by Tags</h3>
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
                  Clear all filters
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
            <h3 className="text-xl font-medium text-white mb-2">No projects found</h3>
            <p className="text-dark-400 mb-4">
              Try adjusting your search terms or filters to find more projects.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedFilters([])
              }}
              className="bg-gradient-to-r from-water-500 to-sustain-500 text-white font-medium py-3 px-6 rounded-lg hover:from-water-600 hover:to-sustain-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-water-500/25"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-dark-900/50 to-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Don't see what you're looking for?</h3>
            <p className="text-dark-400 mb-6 leading-relaxed">
              Have a project site or development opportunity that could benefit from our platform? 
              Submit it for review by our team.
            </p>
            <a href="/submit" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-water-500 to-sustain-500 text-white font-semibold rounded-lg hover:from-water-600 hover:to-sustain-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-water-500/25 transform hover:scale-105">
              Submit Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
