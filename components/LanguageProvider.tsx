'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Locale } from '@/i18n'
import { tClient as getTranslation } from '@/lib/translations-client'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ 
  children, 
  initialLocale 
}: { 
  children: ReactNode
  initialLocale?: Locale 
}) {
  const pathname = usePathname()
  const router = useRouter()
  // Use initialLocale from server if provided, otherwise extract from pathname
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (initialLocale) return initialLocale
    const localeMatch = pathname.match(/^\/(fr|ar|en)(\/|$)/)
    return (localeMatch ? localeMatch[1] : 'fr') as Locale
  })

  // Extract locale from pathname (for client-side navigation)
  useEffect(() => {
    const localeMatch = pathname.match(/^\/(fr|ar|en)(\/|$)/)
    if (localeMatch) {
      const newLocale = localeMatch[1] as Locale
      if (newLocale !== locale) {
        setLocaleState(newLocale)
      }
    }
  }, [pathname, locale])

  const setLocale = (newLocale: Locale) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(/^\/(fr|ar|en)/, '') || '/'
    // Add new locale
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
    router.push(newPath)
    setLocaleState(newLocale)
  }

  const t = (key: string): string => {
    return getTranslation(locale, key)
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

