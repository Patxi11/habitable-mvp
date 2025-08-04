'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Search, Plus, User } from 'lucide-react'
import Logo from './Logo'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <nav className="bg-black/90 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-gray-400">
              <Logo size="sm" />
            </div>
            <span className="text-lg font-medium text-white">HABITABLE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/projects" 
              className="text-gray-400 hover:text-white transition-colors font-medium text-sm"
            >
              {t('nav.exploreProjects')}
            </Link>
            <Link 
              href="/submit" 
              className="text-gray-400 hover:text-white transition-colors font-medium text-sm"
            >
              {t('nav.submitProject')}
            </Link>
            <Link 
              href="/about" 
              className="text-gray-400 hover:text-white transition-colors font-medium text-sm"
            >
              {t('nav.about')}
            </Link>
            
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-gray-800">
              <LanguageToggle />
              <Link 
                href="/signup" 
                className="bg-white text-black px-3 py-1.5 rounded-md font-medium text-sm hover:bg-gray-100 transition-colors"
              >
                {t('nav.signUp')}
              </Link>
              <Link 
                href="/login" 
                className="text-gray-400 hover:text-white transition-colors font-medium text-sm"
              >
                {t('nav.logIn')}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-water-400 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-dark-700">
            <div className="flex flex-col space-y-4">
              <Link href="/projects" className="text-gray-300 hover:text-water-400 font-medium transition-colors duration-200">
                {t('nav.exploreProjects')}
              </Link>
              <Link href="/submit" className="text-gray-300 hover:text-sustain-400 font-medium transition-colors duration-200">
                {t('nav.submitProject')}
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-gray-100 font-medium transition-colors duration-200">
                {t('nav.about')}
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-dark-700">
                <Link href="/signup" className="btn-secondary text-center">
                  {t('nav.signUp')}
                </Link>
                <Link href="/login" className="btn-primary text-center">
                  {t('nav.logIn')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
