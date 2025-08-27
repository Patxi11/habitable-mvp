'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '../../../components/Navigation'
import { ArrowLeft, Globe, Building, Users, Target } from 'lucide-react'

export default function BringInterestForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    organization: '',
    phone: '',
    city: '',
    state: '',
    country: '',
    population: '',
    organizationType: '',
    authority: '',
    challenges: [] as string[],
    goals: [] as string[],
    timeline: '',
    budget: '',
    stakeholders: '',
    currentInitiatives: '',
    additionalInfo: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Bring Habitable form submitted:', formData)
    alert('Thank you for your interest! We will contact you soon.')
    router.back()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleCheckboxChange = (field: string, value: string) => {
    const currentArray = formData[field as keyof typeof formData] as string[]
    setFormData({
      ...formData,
      [field]: currentArray.includes(value)
        ? currentArray.filter((i: string) => i !== value)
        : [...currentArray, value]
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-water-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sustain-500/8 rounded-full blur-3xl" />
      </div>

      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center text-dark-400 hover:text-white mb-6 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </button>
          
          <div className="flex items-center mb-4">
            <Globe className="w-8 h-8 text-water-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Bring Habitable to Your City</h1>
          </div>
          <p className="text-xl text-dark-400">
            Partner with us to bring sustainable development solutions to your community.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Information */}
            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-water-500/50 transition-all duration-300"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-water-500/50 transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Job Title *
              </label>
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-water-500/50 transition-all duration-300"
                placeholder="e.g., Mayor, City Planner, Economic Development Director"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Organization *
              </label>
              <input
                type="text"
                name="organization"
                required
                value={formData.organization}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-water-500/50 transition-all duration-300"
                placeholder="e.g., City of Detroit, Wayne County"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-water-500/50 transition-all duration-300"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Organization Type *
              </label>
              <select
                name="organizationType"
                required
                value={formData.organizationType}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-water-500/50 transition-all duration-300"
              >
                <option value="">Select organization type</option>
                <option value="city-government">City Government</option>
                <option value="county-government">County Government</option>
                <option value="state-government">State Government</option>
                <option value="economic-development">Economic Development Authority</option>
                <option value="housing-authority">Housing Authority</option>
                <option value="nonprofit">Non-Profit Organization</option>
                <option value="private-sector">Private Sector</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Location Information */}
            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                City *
              </label>
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-water-500/50 transition-all duration-300"
                placeholder="Enter city name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                State/Province *
              </label>
              <input
                type="text"
                name="state"
                required
                value={formData.state}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-water-500/50 transition-all duration-300"
                placeholder="Enter state or province"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Country *
              </label>
              <input
                type="text"
                name="country"
                required
                value={formData.country}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-water-500/50 transition-all duration-300"
                placeholder="Enter country"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Population Size
              </label>
              <select
                name="population"
                value={formData.population}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-water-500/50 transition-all duration-300"
              >
                <option value="">Select population size</option>
                <option value="under-10k">Under 10,000</option>
                <option value="10k-50k">10,000 - 50,000</option>
                <option value="50k-100k">50,000 - 100,000</option>
                <option value="100k-500k">100,000 - 500,000</option>
                <option value="500k-1m">500,000 - 1 Million</option>
                <option value="1m+">1 Million+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Decision-Making Authority
              </label>
              <select
                name="authority"
                value={formData.authority}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-water-500/50 transition-all duration-300"
              >
                <option value="">Select your authority level</option>
                <option value="final-decision">Final decision maker</option>
                <option value="recommend">Can make recommendations</option>
                <option value="influence">Have influence on decisions</option>
                <option value="research">Researching for others</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Implementation Timeline
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-water-500/50 transition-all duration-300"
              >
                <option value="">Select timeline</option>
                <option value="immediate">Immediate (0-6 months)</option>
                <option value="short">Short-term (6-18 months)</option>
                <option value="medium">Medium-term (1-3 years)</option>
                <option value="long">Long-term (3+ years)</option>
                <option value="exploratory">Exploratory phase</option>
              </select>
            </div>
          </div>

          {/* Community Challenges */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-dark-300 mb-4">
              Current Community Challenges (Select all that apply)
            </label>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                'Affordable Housing Shortage',
                'Economic Development',
                'Population Decline',
                'Infrastructure Needs',
                'Environmental Issues',
                'Social Inequality',
                'Vacant Properties',
                'Limited Investment',
                'Workforce Development',
                'Transportation Access',
                'Healthcare Access',
                'Education Quality'
              ].map((challenge) => (
                <label key={challenge} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.challenges.includes(challenge)}
                    onChange={() => handleCheckboxChange('challenges', challenge)}
                    className="mr-2 rounded border-dark-600 bg-dark-800 text-water-500 focus:ring-water-500"
                  />
                  <span className="text-dark-300 text-sm">{challenge}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Development Goals */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-dark-300 mb-4">
              Development Goals (Select all that apply)
            </label>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                'Create Affordable Housing',
                'Attract New Residents',
                'Generate Economic Growth',
                'Improve Sustainability',
                'Enhance Community Spaces',
                'Increase Property Values',
                'Create Jobs',
                'Improve Quality of Life',
                'Attract Investment',
                'Preserve Historic Character',
                'Promote Innovation',
                'Build Social Cohesion'
              ].map((goal) => (
                <label key={goal} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.goals.includes(goal)}
                    onChange={() => handleCheckboxChange('goals', goal)}
                    className="mr-2 rounded border-dark-600 bg-dark-800 text-water-500 focus:ring-water-500"
                  />
                  <span className="text-dark-300 text-sm">{goal}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-dark-300 mb-2">
              Available Budget/Resources
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-water-500/50 transition-all duration-300"
            >
              <option value="">Select budget range</option>
              <option value="under-1m">Under $1 Million</option>
              <option value="1m-5m">$1M - $5M</option>
              <option value="5m-25m">$5M - $25M</option>
              <option value="25m-100m">$25M - $100M</option>
              <option value="100m+">$100M+</option>
              <option value="tbd">To be determined</option>
              <option value="seeking-funding">Seeking funding partners</option>
            </select>
          </div>

          {/* Stakeholders */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-dark-300 mb-2">
              Key Stakeholders Involved
            </label>
            <textarea
              name="stakeholders"
              value={formData.stakeholders}
              onChange={handleInputChange}
              rows={3}
              className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-water-500/50 transition-all duration-300"
              placeholder="List key stakeholders, community leaders, or organizations involved in this initiative..."
            />
          </div>

          {/* Current Initiatives */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-dark-300 mb-2">
              Current Development Initiatives
            </label>
            <textarea
              name="currentInitiatives"
              value={formData.currentInitiatives}
              onChange={handleInputChange}
              rows={3}
              className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-water-500/50 transition-all duration-300"
              placeholder="Describe any current or planned development projects in your community..."
            />
          </div>

          {/* Additional Information */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-dark-300 mb-2">
              Additional Information
            </label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows={4}
              className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-water-500/50 transition-all duration-300"
              placeholder="Share any additional context, specific needs, or questions about bringing Habitable to your community..."
            />
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-water-500 to-sustain-500 text-white font-semibold rounded-lg hover:from-water-600 hover:to-sustain-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-water-500/25 transform hover:scale-105"
            >
              Submit Partnership Interest
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
