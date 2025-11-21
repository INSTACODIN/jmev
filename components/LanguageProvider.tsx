'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'fr' | 'ar' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Simple translations object (can be expanded later)
const translations: Record<Language, Record<string, string>> = {
  fr: {
    home: 'Accueil',
    models: 'Modèles',
    offers: 'Offres & Financement',
    charging: 'Chargement & Autonomie',
    about: 'À propos',
    news: 'Actualités',
    contact: 'Contact',
    testDrive: 'Essai routier',
  },
  ar: {
    home: 'الرئيسية',
    models: 'الموديلات',
    offers: 'العروض والتمويل',
    charging: 'الشحن والاستقلالية',
    about: 'من نحن',
    news: 'الأخبار',
    contact: 'اتصل بنا',
    testDrive: 'تجربة القيادة',
  },
  en: {
    home: 'Home',
    models: 'Models',
    offers: 'Offers & Financing',
    charging: 'Charging & Autonomy',
    about: 'About',
    news: 'News',
    contact: 'Contact',
    testDrive: 'Test Drive',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr')

  const t = (key: string): string => {
    const langTranslations = translations[language]
    return langTranslations?.[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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

