'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '../../../components/Navigation'
import { ArrowLeft, MapPin, Home, Users, Calendar } from 'lucide-react'

// Define the exact shape for the form and multi-select keys
type LiveForm = {
  name: string;
  email: string;
  phone: string;
  currentLocation: string;
  preferredLocation: string;
  housingType: string;
  familySize: string;
  budget: string;
  timeline: string;
  priorities: string[];
  accessibility: string[];
  lifestyle: string;
  employment: string;
  additionalInfo: string;
};

type MultiKeys = 'priorities' | 'accessibility'

export default function LiveInterestForm() {
  const router = useRouter()
  const [formData, setFormData] = useState<LiveForm>({
    name: '',
    email: '',
    phone: '',
    currentLocation: '',
    preferredLocation: '',
    housingType: '',
    familySize: '',
    budget: '',
    timeline: '',
    priorities: [],
    accessibility: [],
    lifestyle: '',
    employment: '',
    additionalInfo: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Living interest form submitted:', formData)
    alert('Thank you for your interest! We will contact you soon.')
    router.back()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    } as LiveForm))
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
            <Home className="w-8 h-8 text-water-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Living Interest</h1>
          </div>
          <p className="text-xl text-dark-400">
            Find your future home in a sustainable, community-focused development.
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
                Current Location
              </label>
              <input
                type="text"
                name="currentLocation"
                value={formData.currentLocation}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-water-500/50 transition-all duration-300"
                placeholder="e.g., Detroit, MI"
              />
            </div>

            {/* Housing Preferences */}
            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Preferred Location *
              </label>
              <input
                type="text"
                name="preferredLocation"
                required
                value={formData.preferredLocation}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-water-500/50 transition-all duration-300"
                placeholder="Where would you like to live?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Housing Type *
              </label>
              <select
                name="housingType"
                required
                value={formData.housingType}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-water-500/50 transition-all duration-300"
              >
                <option value="">Select housing type</option>
                <option value="apartment">Apartment</option>
                <option value="townhouse">Townhouse</option>
                <option value="single-family">Single Family Home</option>
                <option value="condo">Condominium</option>
                <option value="co-housing">Co-housing</option>
                <option value="flexible">Flexible/Open to options</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Household Size *
              </label>
              <select
                name="familySize"
                required
                value={formData.familySize}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-water-500/50 transition-all duration-300"
              >
                <option value="">Select household size</option>
                <option value="1">1 person</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
                <option value="5+">5+ people</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Budget Range
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-water-500/50 transition-all duration-300"
              >
                <option value="">Select budget range</option>
                <option value="under-100k">Under $100K</option>
                <option value="100k-200k">$100K - $200K</option>
                <option value="200k-300k">$200K - $300K</option>
                <option value="300k-500k">$300K - $500K</option>
                <option value="500k+">$500K+</option>
                <option value="rental">Looking to rent</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Move-in Timeline
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-water-500/50 transition-all duration-300"
              >
                <option value="">Select timeline</option>
                <option value="immediate">Immediate (0-6 months)</option>
                <option value="short">Short-term (6-12 months)</option>
                <option value="medium">Medium-term (1-2 years)</option>
                <option value="long">Long-term (2+ years)</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Employment Status
              </label>
              <select
                name="employment"
                value={formData.employment}
                onChange={handleInputChange}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-water-500/50 transition-all duration-300"
              >
                <option value="">Select employment status</option>
                <option value="employed">Employed</option>
                <option value="self-employed">Self-employed</option>
                <option value="remote">Remote worker</option>
                <option value="retired">Retired</option>
                <option value="student">Student</option>
                <option value="seeking">Seeking employment</option>
              </select>
            </div>
          </div>

          {/* Housing Priorities */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-dark-300 mb-4">
              Housing Priorities (Select all that apply)
            </label>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                'Affordability',
                'Energy Efficiency',
                'Community Amenities',
                'Public Transportation',
                'Schools',
                'Healthcare Access',
                'Green Spaces',
                'Safety',
                'Walkability',
                'Cultural Activities',
                'Shopping/Dining',
                'Parking'
              ].map((priority) => (
                <label key={priority} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.priorities.includes(priority)}
                    onChange={() => toggleMulti('priorities', priority)}
                    className="mr-2 rounded border-dark-600 bg-dark-800 text-water-500 focus:ring-water-500"
                  />
                  <span className="text-dark-300 text-sm">{priority}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Accessibility Needs */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-dark-300 mb-4">
              Accessibility Needs (Select all that apply)
            </label>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                'Wheelchair Accessible',
                'Single Floor Living',
                'Wide Doorways',
                'Accessible Bathroom',
                'Visual Aids',
                'Hearing Aids',
                'Service Animal Friendly',
                'Elevator Access',
                'None Required'
              ].map((need) => (
                <label key={need} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.accessibility.includes(need)}
                    onChange={() => toggleMulti('accessibility', need)}
                    className="mr-2 rounded border-dark-600 bg-dark-800 text-water-500 focus:ring-water-500"
                  />
                  <span className="text-dark-300 text-sm">{need}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Lifestyle Preferences */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-dark-300 mb-2">
              Lifestyle & Community Preferences
            </label>
            <textarea
              name="lifestyle"
              value={formData.lifestyle}
              onChange={handleInputChange}
              rows={3}
              className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-water-500/50 transition-all duration-300"
              placeholder="Describe your ideal community lifestyle, interests, and what you're looking for in neighbors..."
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
              placeholder="Any other requirements, questions, or information you'd like to share..."
            />
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-water-500 to-sustain-500 text-white font-semibold rounded-lg hover:from-water-600 hover:to-sustain-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-water-500/25 transform hover:scale-105"
            >
              Submit Living Interest
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
