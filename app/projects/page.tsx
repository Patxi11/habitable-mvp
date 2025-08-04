'use client'

import { useState } from 'react'
import Navigation from '../../components/Navigation'
import ProjectCard from '../../components/ProjectCard'
import { useLanguage } from '../../contexts/LanguageContext'
import { Search, Filter, MapPin, DollarSign, Calendar } from 'lucide-react'

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
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-medium text-white mb-2">{t('projects.title')}</h1>
          <p className="text-xl text-gray-400 max-w-3xl">{t('projects.subtitle')}</p>
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
                className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 pl-10 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-[#1a1a1a] border border-[#2a2a2a] text-white font-medium py-3 px-4 rounded-lg hover:bg-[#2a2a2a] transition-all duration-200 flex items-center"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
              {selectedFilters.length > 0 && (
                <span className="ml-2 bg-white text-black text-xs px-2 py-1 rounded-full">
                  {selectedFilters.length}
                </span>
              )}
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6">
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
                    className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                      selectedFilters.includes(filter)
                        ? 'bg-white text-black'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              {selectedFilters.length > 0 && (
                <button
                  onClick={() => setSelectedFilters([])}
                  className="text-gray-400 hover:text-white text-sm mt-3"
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-400">
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
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">No projects found</h3>
            <p className="text-gray-400 mb-4">
              Try adjusting your search terms or filters to find more projects.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedFilters([])
              }}
              className="bg-white text-black font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-medium mb-4 text-white">Don't see what you're looking for?</h3>
            <p className="text-gray-400 mb-6">
              Have a project site or development opportunity that could benefit from our platform? 
              Submit it for review by our team.
            </p>
            <a href="/submit" className="bg-white text-black font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors inline-block">
              Submit Your Project
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
