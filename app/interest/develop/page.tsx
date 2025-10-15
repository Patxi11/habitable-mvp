'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '../../../components/Navigation'
import { ArrowLeft, Building2, Users, Briefcase, MapPin } from 'lucide-react'

// Define the exact shape for the form and multi-select keys
type DevelopForm = {
  name: string;
  email: string;
  company: string;
  phone: string;
  role: string;
  experience: string;
  projectTypes: string[];
  capacity: string;
  timeline: string;
  location: string;
  services: string[];
  portfolio: string;
  additionalInfo: string;
};

type MultiKeys = 'projectTypes' | 'services'

export default function DevelopInterestForm() {
  const router = useRouter()
  const [formData, setFormData] = useState<DevelopForm>({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    experience: '',
    projectTypes: [],
    capacity: '',
    timeline: '',
    location: '',
    services: [],
    portfolio: '',
    additionalInfo: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Development interest form submitted:', formData)
    alert('Thank you for your interest! We will contact you soon.')
    router.back()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    } as DevelopForm))
  }

  function toggleMulti(field: MultiKeys, value: string) {
    setFormData(prev => {
      const arr = prev[field]
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 transform-gpu origin-top scale-[0.8]">
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center text-dark-400 hover:text-white mb-6 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </button>
          
          <div className="flex items-center mb-4">
            <Building2 className="w-8 h-8 text-water-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Development Interest</h1>
          </div>
          <p className="text-xl text-dark-400">
            Join our network of developers and help shape the future of sustainable communities.
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
                Company/Organization *
              </label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-water-500/50 transition-all duration-300"
                placeholder="Enter your company name"
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

            {/* Professional Details */}
            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Your Role *
              </label>
              <select
                name="role"
                required
                value={formData.role}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-water-500/50 transition-all duration-300"
              >
                <option value="">Select your role</option>
                <option value="developer">Real Estate Developer</option>
                <option value="architect">Architect</option>
                <option value="contractor">General Contractor</option>
                <option value="engineer">Engineer</option>
                <option value="consultant">Development Consultant</option>
                <option value="project-manager">Project Manager</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Experience Level *
              </label>
              <select
                name="experience"
                required
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-water-500/50 transition-all duration-300"
              >
                <option value="">Select experience level</option>
                <option value="entry">Entry Level (0-2 years)</option>
                <option value="mid">Mid Level (2-5 years)</option>
                <option value="senior">Senior Level (5-10 years)</option>
                <option value="expert">Expert (10+ years)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Current Capacity
              </label>
              <select
                name="capacity"
                value={formData.capacity}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-water-500/50 transition-all duration-300"
              >
                <option value="">Select current capacity</option>
                <option value="immediate">Available immediately</option>
                <option value="1-3months">Available in 1-3 months</option>
                <option value="3-6months">Available in 3-6 months</option>
                <option value="6months+">Available in 6+ months</option>
                <option value="exploring">Just exploring opportunities</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Preferred Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-water-500/50 transition-all duration-300"
                placeholder="e.g., Detroit, MI or Remote"
              />
            </div>
          </div>

          {/* Project Types */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-dark-300 mb-4">
              Project Types of Interest (Select all that apply)
            </label>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                'Affordable Housing',
                'Mixed-Use Development',
                'Commercial Buildings',
                'Residential Communities',
                'Urban Regeneration',
                'Sustainable/Green Building',
                'Infrastructure Projects',
                'Community Centers',
                'Adaptive Reuse'
              ].map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.projectTypes.includes(type)}
                    onChange={() => toggleMulti('projectTypes', type)}
                    className="mr-2 rounded border-dark-600 bg-dark-800 text-water-500 focus:ring-water-500"
                  />
                  <span className="text-dark-300 text-sm">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-dark-300 mb-4">
              Services You Provide (Select all that apply)
            </label>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                'Project Development',
                'Design & Architecture',
                'Construction Management',
                'Engineering Services',
                'Permitting & Approvals',
                'Financial Planning',
                'Community Engagement',
                'Sustainability Consulting',
                'Project Management'
              ].map((service) => (
                <label key={service} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => toggleMulti('services', service)}
                    className="mr-2 rounded border-dark-600 bg-dark-800 text-water-500 focus:ring-water-500"
                  />
                  <span className="text-dark-300 text-sm">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Portfolio */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-dark-300 mb-2">
              Portfolio/Website URL
            </label>
            <input
              type="url"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleInputChange}
              className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-water-500/50 transition-all duration-300"
              placeholder="https://yourportfolio.com"
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
              placeholder="Tell us about your experience, notable projects, or specific interests..."
            />
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-water-500 to-sustain-500 text-white font-semibold rounded-lg hover:from-water-600 hover:to-sustain-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-water-500/25 transform hover:scale-105"
            >
              Submit Development Interest
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
