'use client'

import { useState } from 'react'
import Navigation from '../../components/Navigation'
import { useLanguage } from '../../contexts/LanguageContext'
import { Upload, MapPin, DollarSign, Calendar, Users, FileText, Camera } from 'lucide-react'

export default function Submit() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    // Basic Information
    projectName: '',
    location: '',
    description: '',
    projectType: '',
    
    // Site Details
    siteSize: '',
    currentUse: '',
    zoning: '',
    ownership: '',
    
    // Development Vision
    proposedUse: '',
    investmentRange: '',
    timeline: '',
    sustainabilityFeatures: [] as string[],
    
    // Stakeholder Information
    submitterType: '',
    organization: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    
    // Additional Details
    communityBenefits: '',
    challenges: '',
    additionalInfo: ''
  })

  const [files, setFiles] = useState<File[]>([])

  const projectTypes = [
    'Residential',
    'Mixed-Use',
    'Commercial',
    'Industrial',
    'Institutional',
    'Infrastructure',
    'Public Space'
  ]

  const sustainabilityOptions = [
    'Green Building Certification',
    'Renewable Energy',
    'Stormwater Management',
    'Affordable Housing',
    'Transit-Oriented',
    'Brownfield Remediation',
    'Historic Preservation',
    'Community Gardens',
    'Energy Efficiency',
    'Walkable Design'
  ]

  const submitterTypes = [
    'City/Municipality',
    'Public Agency',
    'Landowner',
    'Community Organization',
    'Developer',
    'Other'
  ]

  const handleSustainabilityToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      sustainabilityFeatures: prev.sustainabilityFeatures.includes(feature)
        ? prev.sustainabilityFeatures.filter(f => f !== feature)
        : [...prev.sustainabilityFeatures, feature]
    }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(prev => [...prev, ...Array.from(e.target.files!)])
    }
  }

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would upload files and submit to Supabase
    alert('Project submitted successfully! Our team will review your submission and get back to you within 5-7 business days.')
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">{t('submit.title')}</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('submit.subtitle')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6">
            <h2 className="text-2xl font-medium text-white mb-6">{t('submit.basicInfo')}</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t('submit.projectName')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.projectName}
                  onChange={(e) => setFormData(prev => ({ ...prev, projectName: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200"
                  placeholder={t('submit.projectNamePlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t('submit.location')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200"
                  placeholder={t('submit.locationPlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t('submit.projectType')}
                </label>
                <select
                  required
                  value={formData.projectType}
                  onChange={(e) => setFormData(prev => ({ ...prev, projectType: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-gray-600 transition-all duration-200"
                >
                  <option value="" className="bg-[#0a0a0a] text-gray-500">{t('submit.selectProjectType')}</option>
                  {projectTypes.map(type => (
                    <option key={type} value={type} className="bg-[#0a0a0a] text-white">{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t('submit.projectDescription')}
                </label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200 h-32 resize-none"
                  placeholder={t('submit.projectDescriptionPlaceholder')}
                />
              </div>
            </div>
          </div>

          {/* Site Details */}
          <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6">
            <h2 className="text-xl font-medium mb-6 flex items-center text-white">
              <MapPin className="w-5 h-5 mr-2 text-gray-400" />
              Site Details
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Site Size
                </label>
                <input
                  type="text"
                  value={formData.siteSize}
                  onChange={(e) => setFormData(prev => ({ ...prev, siteSize: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200"
                  placeholder="e.g., 2.5 acres, 50,000 sq ft"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Use
                </label>
                <input
                  type="text"
                  value={formData.currentUse}
                  onChange={(e) => setFormData(prev => ({ ...prev, currentUse: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200"
                  placeholder="e.g., Vacant lot, Former factory, Parking lot"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Zoning
                </label>
                <input
                  type="text"
                  value={formData.zoning}
                  onChange={(e) => setFormData(prev => ({ ...prev, zoning: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200"
                  placeholder="Current zoning designation"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Ownership Status
                </label>
                <select
                  value={formData.ownership}
                  onChange={(e) => setFormData(prev => ({ ...prev, ownership: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-gray-600 transition-all duration-200"
                >
                  <option value="" className="bg-[#0a0a0a] text-gray-500">Select ownership</option>
                  <option value="Public" className="bg-[#0a0a0a] text-white">Public</option>
                  <option value="Private" className="bg-[#0a0a0a] text-white">Private</option>
                  <option value="Mixed" className="bg-[#0a0a0a] text-white">Mixed</option>
                  <option value="Unknown" className="bg-[#0a0a0a] text-white">Unknown</option>
                </select>
              </div>
            </div>
          </div>

          {/* Development Vision */}
          <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6">
            <h2 className="text-xl font-medium mb-6 flex items-center text-white">
              <DollarSign className="w-5 h-5 mr-2 text-gray-400" />
              Development Vision
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Proposed Use *
                </label>
                <textarea
                  required
                  value={formData.proposedUse}
                  onChange={(e) => setFormData(prev => ({ ...prev, proposedUse: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200 h-24 resize-none"
                  placeholder="Describe the proposed development and its intended use"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Estimated Investment Range
                  </label>
                  <select
                    value={formData.investmentRange}
                    onChange={(e) => setFormData(prev => ({ ...prev, investmentRange: e.target.value }))}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200"
                  >
                    <option value="">Select range</option>
                    <option value="Under $1M">Under $1M</option>
                    <option value="$1M - $5M">$1M - $5M</option>
                    <option value="$5M - $15M">$5M - $15M</option>
                    <option value="$15M - $50M">$15M - $50M</option>
                    <option value="Over $50M">Over $50M</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Development Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200"
                  >
                    <option value="">Select timeline</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="2-3 years">2-3 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5+ years">5+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Sustainability Features (select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {sustainabilityOptions.map((feature) => (
                    <label key={feature} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.sustainabilityFeatures.includes(feature)}
                        onChange={() => handleSustainabilityToggle(feature)}
                        className="mr-2"
                      />
                      <span className="text-sm">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6">
            <h2 className="text-xl font-medium text-white mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2 text-gray-400" />
              Contact Information
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Submitter Type *
                </label>
                <select
                  required
                  value={formData.submitterType}
                  onChange={(e) => setFormData(prev => ({ ...prev, submitterType: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200"
                >
                  <option value="">Select submitter type</option>
                  {submitterTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
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
                  placeholder="Organization or agency name"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.contactEmail}
                    onChange={(e) => setFormData(prev => ({ ...prev, contactEmail: e.target.value }))}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.contactPhone}
                    onChange={(e) => setFormData(prev => ({ ...prev, contactPhone: e.target.value }))}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* File Upload */}
          <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6">
            <h2 className="text-xl font-medium text-white mb-6 flex items-center">
              <Camera className="w-5 h-5 mr-2 text-gray-400" />
              Supporting Documents
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Upload Files (optional)
                </label>
                <p className="text-sm text-gray-600 mb-4">
                  Include site photos, maps, plans, studies, or other relevant documents (max 10MB per file)
                </p>
                <input
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  onChange={handleFileUpload}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200"
                />
              </div>

              {files.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Uploaded Files:</h4>
                  <ul className="space-y-2">
                    {files.map((file, index) => (
                      <li key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                        <span className="text-sm">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-600 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6">
            <h2 className="text-xl font-medium text-white mb-6">Additional Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Community Benefits
                </label>
                <textarea
                  value={formData.communityBenefits}
                  onChange={(e) => setFormData(prev => ({ ...prev, communityBenefits: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200 h-24 resize-none"
                  placeholder="How will this project benefit the local community?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Known Challenges
                </label>
                <textarea
                  value={formData.challenges}
                  onChange={(e) => setFormData(prev => ({ ...prev, challenges: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200 h-24 resize-none"
                  placeholder="What challenges or obstacles do you anticipate?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Information
                </label>
                <textarea
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-all duration-200 h-24 resize-none"
                  placeholder="Any other relevant information about the project or site"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all duration-200 px-8 py-3 text-lg">
              Submit Project for Review
            </button>
            <p className="text-sm text-gray-600 mt-4">
              Our team will review your submission and get back to you within 5-7 business days.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
