'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '../../../components/Navigation'
import { ArrowLeft, Heart, Users, Lightbulb, Globe } from 'lucide-react'

// Strong typing for form state and multi-select fields
type FormDataState = {
  name: string
  email: string
  organization: string
  phone: string
  organizationType: string
  role: string
  collaborationType: string[]
  expertise: string[]
  resources: string[]
  timeline: string
  location: string
  missionAlignment: string
  additionalInfo: string
}

type MultiKeys = 'collaborationType' | 'expertise' | 'resources'

export default function CollaborateInterestForm() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormDataState>({
    name: '',
    email: '',
    organization: '',
    phone: '',
    organizationType: '',
    role: '',
    collaborationType: [],
    expertise: [],
    resources: [],
    timeline: '',
    location: '',
    missionAlignment: '',
    additionalInfo: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Collaboration interest form submitted:', formData)
    alert('Thank you for your interest! We will contact you soon.')
    router.back()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    } as FormDataState))
  }

  function toggleMulti(field: MultiKeys, value: string) {
    setFormData(prev => {
      const arr = prev[field] // string[]
      const next = arr.includes(value) ? arr.filter(i => i !== value) : [...arr, value]
      return { ...prev, [field]: next }
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
            <Heart className="w-8 h-8 text-water-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Collaboration Interest</h1>
          </div>
          <p className="text-xl text-dark-400">
            Partner with us to create meaningful impact in sustainable community development.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-dark-900/50 to-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Personal Information */}
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
                Organization/Company *
              </label>
              <input
                type="text"
                name="organization"
                required
                value={formData.organization}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-water-500/50 transition-all duration-300"
                placeholder="Enter your organization name"
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

            {/* Organization Details */}
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
                <option value="nonprofit">Non-Profit Organization</option>
                <option value="community">Community Group</option>
                <option value="government">Government Agency</option>
                <option value="academic">Academic Institution</option>
                <option value="corporate">Corporate/Business</option>
                <option value="foundation">Foundation</option>
                <option value="cooperative">Cooperative</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text sm font-medium text-dark-300 mb-2">
                Your Role *
              </label>
              <input
                type="text"
                name="role"
                required
                value={formData.role}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-water-500/50 transition-all duration-300"
                placeholder="e.g., Executive Director, Community Organizer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Collaboration Timeline
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-water-500/50 transition-all duration-300"
              >
                <option value="">Select timeline</option>
                <option value="immediate">Immediate (0-3 months)</option>
                <option value="short">Short-term (3-12 months)</option>
                <option value="medium">Medium-term (1-3 years)</option>
                <option value="long">Long-term (3+ years)</option>
                <option value="ongoing">Ongoing partnership</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Geographic Focus
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-water-500/50 transition-all duration-300"
                placeholder="e.g., Detroit Metro, National, Global"
              />
            </div>
          </div>

          {/* Collaboration Types */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-dark-300 mb-4">
              Types of Collaboration (Select all that apply)
            </label>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                'Community Engagement',
                'Research & Development',
                'Policy Advocacy',
                'Education & Training',
                'Resource Sharing',
                'Joint Programming',
                'Capacity Building',
                'Technical Assistance',
                'Funding Partnership'
              ].map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.collaborationType.includes(type)}
                    onChange={() => toggleMulti('collaborationType', type)}
                    className="mr-2 rounded border-dark-600 bg-dark-800 text-water-500 focus:ring-water-500"
                  />
                  <span className="text-dark-300 text-sm">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-dark-300 mb-4">
              Areas of Expertise (Select all that apply)
            </label>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                'Community Development',
                'Affordable Housing',
                'Environmental Justice',
                'Social Services',
                'Economic Development',
                'Urban Planning',
                'Public Health',
                'Education',
                'Arts & Culture',
                'Technology',
                'Legal Services',
                'Finance & Funding'
              ].map((expertise) => (
                <label key={expertise} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.expertise.includes(expertise)}
                    onChange={() => toggleMulti('expertise', expertise)}
                    className="mr-2 rounded border-dark-600 bg-dark-800 text-water-500 focus:ring-water-500"
                  />
                  <span className="text-dark-300 text-sm">{expertise}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-dark-300 mb-4">
              Resources You Can Contribute (Select all that apply)
            </label>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                'Funding',
                'Volunteer Network',
                'Professional Expertise',
                'Physical Space',
                'Equipment/Tools',
                'Marketing/Communications',
                'Community Connections',
                'Research Capabilities',
                'Training Programs'
              ].map((resource) => (
                <label key={resource} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.resources.includes(resource)}
                    onChange={() => toggleMulti('resources', resource)}
                    className="mr-2 rounded border-dark-600 bg-dark-800 text-water-500 focus:ring-water-500"
                  />
                  <span className="text-dark-300 text-sm">{resource}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Mission Alignment */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-dark-300 mb-2">
              Mission Alignment
            </label>
            <textarea
              name="missionAlignment"
              value={formData.missionAlignment}
              onChange={handleInputChange}
              rows={3}
              className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-water-500/50 transition-all duration-300"
              placeholder="How does your organization's mission align with sustainable community development?"
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
              placeholder="Tell us about specific collaboration ideas, past partnerships, or other relevant information..."
            />
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-water-500 to-sustain-500 text-white font-semibold rounded-lg hover:from-water-600 hover:to-sustain-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-water-500/25 transform hover:scale-105"
            >
              Submit Collaboration Interest
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

