'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useLanguage } from './LanguageProvider'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/models', label: t('models') },
    { href: '/offers', label: t('offers') },
    { href: '/charging', label: t('charging') },
    { href: '/about', label: t('about') },
    { href: '/news', label: t('news') },
    { href: '/contact', label: t('contact') },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary-600">
              JMEV <span className="text-gray-700">Tunisia</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Language Toggle & CTA */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden md:flex items-center space-x-2 border-r pr-4">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 py-1 text-sm rounded ${
                  language === 'fr'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-2 py-1 text-sm rounded ${
                  language === 'ar'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                AR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-sm rounded ${
                  language === 'en'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                EN
              </button>
            </div>

            {/* Test Drive CTA */}
            <Link
              href="/contact?purpose=test-drive"
              className="hidden md:block btn-primary"
            >
              {t('testDrive')}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-primary-600 font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center space-x-2 pt-2">
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-3 py-1 text-sm rounded ${
                    language === 'fr'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLanguage('ar')}
                  className={`px-3 py-1 text-sm rounded ${
                    language === 'ar'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  AR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-sm rounded ${
                    language === 'en'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  EN
                </button>
              </div>
              <Link
                href="/contact?purpose=test-drive"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary text-center mt-2"
              >
                {t('testDrive')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

