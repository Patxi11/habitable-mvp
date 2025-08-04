'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Navigation from '../../components/Navigation'
import { useLanguage } from '../../contexts/LanguageContext'
import { Users, Building2, ArrowRight, Check } from 'lucide-react'

export default function SignupPage() {
  const { t } = useLanguage()
  const searchParams = useSearchParams()
  const [userType, setUserType] = useState<'participate' | 'promote' | null>(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    role: '',
    location: '',
    interests: [] as string[],
    experience: '',
    goals: ''
  })

  useEffect(() => {
    const type = searchParams.get('type')
    if (type === 'participate' || type === 'promote') {
      setUserType(type)
    }
  }, [searchParams])

  const participateInterests = [
    'Affordable Housing Development',
    'Sustainable Architecture',
    'Real Estate Investment',
    'Community Development',
    'Green Building',
    'Urban Planning',
    'Property Development',
    'Impact Investing'
  ]

  const promoteInterests = [
    'Economic Development',
    'Housing Policy',
    'Urban Revitalization',
    'Public-Private Partnerships',
    'Community Engagement',
    'Zoning & Planning',
    'Infrastructure Development',
    'Neighborhood Improvement'
  ]

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would make an API call to create the user account
    alert('Account created successfully! In a real app, this would save to Supabase and send a welcome email.')
  }

  if (!userType) {
    return (
      <div className="min-h-screen bg-black">
        <Navigation />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">{t('signup.title')}</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('signup.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 hover:border-[#2a2a2a] transition-all duration-200 cursor-pointer"
                 onClick={() => setUserType('participate')}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-gray-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t('signup.participate.title')}</h3>
                <p className="text-gray-400 mb-6">
                  {t('signup.participate.subtitle')}
                </p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-gray-300 mr-2" />
                    <span className="text-sm text-gray-300">{t('signup.participate.benefits.1')}</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-gray-300 mr-2" />
                    <span className="text-sm text-gray-300">{t('signup.participate.benefits.2')}</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-gray-300 mr-2" />
                    <span className="text-sm text-gray-300">{t('signup.participate.benefits.3')}</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-gray-300 mr-2" />
                    <span className="text-sm text-gray-300">{t('signup.participate.benefits.4')}</span>
                  </li>
                </ul>
                <button className="bg-white text-black font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors w-full">
                  {t('signup.participate.button')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 hover:border-[#2a2a2a] transition-all duration-200 cursor-pointer"
                 onClick={() => setUserType('promote')}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8 text-gray-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t('signup.promote.title')}</h3>
                <p className="text-gray-400 mb-6">
                  {t('signup.promote.subtitle')}
                </p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-gray-300 mr-2" />
                    <span className="text-sm text-gray-300">{t('signup.promote.benefits.1')}</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-gray-300 mr-2" />
                    <span className="text-sm text-gray-300">Attract quality developers and investors</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-gray-300 mr-2" />
                    <span className="text-sm text-gray-300">Community engagement support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-gray-300 mr-2" />
                    <span className="text-sm text-gray-300">Development process guidance</span>
                  </li>
                </ul>
                <button className="bg-white text-black font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors w-full">
                  Join as Promoter
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-medium text-white mb-4">
            {userType === 'participate' ? 'Join as Participant' : 'Join as Promoter'}
          </h1>
          <p className="text-gray-400">
            {userType === 'participate' 
              ? 'Connect with sustainable development opportunities and aligned stakeholders'
              : 'Promote sustainable development in your community'
            }
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                First Name *
              </label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Organization *
            </label>
            <input
              type="text"
              required
              value={formData.organization}
              onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200"
              placeholder={userType === 'participate' ? 'Company, firm, or organization' : 'City, agency, or organization'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Role/Title *
            </label>
            <input
              type="text"
              required
              value={formData.role}
              onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200"
              placeholder={userType === 'participate' ? 'e.g., Architect, Developer, Investor' : 'e.g., Planning Director, Economic Development Manager'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Primary Location *
            </label>
            <input
              type="text"
              required
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200"
              placeholder="City, State"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Areas of Interest (select all that apply)
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(userType === 'participate' ? participateInterests : promoteInterests).map((interest) => (
                <label key={interest} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={() => handleInterestToggle(interest)}
                    className="mr-2"
                  />
                  <span className="text-sm">{interest}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Experience & Background
            </label>
            <textarea
              value={formData.experience}
              onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200 h-24 resize-none"
              placeholder={userType === 'participate' 
                ? 'Tell us about your experience in development, architecture, investment, etc.'
                : 'Tell us about your community and development priorities'
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Goals & Objectives
            </label>
            <textarea
              value={formData.goals}
              onChange={(e) => setFormData(prev => ({ ...prev, goals: e.target.value }))}
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200 h-24 resize-none"
              placeholder={userType === 'participate'
                ? 'What are you hoping to achieve through Habitable?'
                : 'What development outcomes are you seeking for your community?'
              }
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" required className="mr-2" />
            <span className="text-sm text-gray-400">
              I agree to the <a href="/terms" className="text-gray-400 hover:underline">Terms of Service</a> and{' '}
              <a href="/privacy" className="text-gray-400 hover:underline">Privacy Policy</a>
            </span>
          </div>

          <button type="submit" className="bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all duration-200 w-full">
            Create Account
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-400">
            Already have an account?{' '}
            <a href="/login" className="text-gray-400 hover:underline font-medium">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
