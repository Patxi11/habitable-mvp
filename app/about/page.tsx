'use client'

import Navigation from '../../components/Navigation'
import { useLanguage } from '../../contexts/LanguageContext'
import { Mail } from 'lucide-react'

export default function About() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-8 leading-tight">
            About
          </h1>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <p className="text-xl text-gray-400">
              The housing development process is inefficient, opaque, and fragmented.
            </p>
            
            <p className="text-xl text-gray-400">
              This blocks the creation of innovative solutions to today's most urgent challenges.
            </p>

            <p className="text-lg">
              At a time when cities face overlapping crises—from housing shortages to climate risk—there's a pressing need to deliver the right kind of urban projects: ones that serve people, strengthen communities, and build resilience for the future.
            </p>

            <p className="text-lg">
              Habitable was born from the desire to help cities and developers create projects that matter. We use a data-driven approach to identify opportunity, align stakeholders early, and design solutions that respond to real needs—social, environmental, and economic.
            </p>

            <p className="text-lg">
              By streamlining pre-development and reducing risk, we make it easier to channel investment into high-impact urban projects.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 pt-16 border-t border-gray-800">
          <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-8 max-w-2xl">
            <h2 className="text-2xl font-medium text-white mb-4">Get in Touch</h2>
            <p className="text-gray-400 mb-6">
              If you're interested in working together or learning more, reach out to us.
            </p>
            <a 
              href="mailto:info@hbtbl.com"
              className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              info@hbtbl.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
