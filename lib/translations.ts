import { Locale, defaultLocale } from '@/i18n'

// Import JSON files - Next.js handles these correctly
// Using type assertion to ensure proper typing
import frTranslationsData from '@/messages/fr.json'
import arTranslationsData from '@/messages/ar.json'
import enTranslationsData from '@/messages/en.json'

// Ensure we have valid translations with proper fallbacks
const translations: Record<Locale, any> = {
  fr: frTranslationsData || {},
  ar: arTranslationsData || {},
  en: enTranslationsData || {},
}

// Validate translations are loaded at module level
const validateTranslations = () => {
  const issues: string[] = []
  if (!translations.fr || Object.keys(translations.fr).length === 0) {
    issues.push('French translations failed to load')
  }
  if (!translations.ar || Object.keys(translations.ar).length === 0) {
    issues.push('Arabic translations failed to load')
  }
  if (!translations.en || Object.keys(translations.en).length === 0) {
    issues.push('English translations failed to load')
  }
  if (issues.length > 0 && typeof console !== 'undefined') {
    console.error('Translation loading issues:', issues)
  }
}

// Run validation (only in development or if console is available)
if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
  validateTranslations()
}

export function getTranslations(locale: Locale) {
  // Validate locale
  if (!locale || !['fr', 'ar', 'en'].includes(locale)) {
    if (typeof console !== 'undefined') {
      console.warn(`Invalid locale: ${locale}, using default: ${defaultLocale}`)
    }
    return translations[defaultLocale] || translations.fr || {}
  }
  
  const result = translations[locale]
  
  if (!result || Object.keys(result).length === 0) {
    if (typeof console !== 'undefined') {
      console.error(`Translations empty for locale: ${locale}, falling back to ${defaultLocale}`)
    }
    return translations[defaultLocale] || translations.fr || {}
  }
  
  return result
}

export function getNestedTranslation(
  locale: Locale,
  keys: string[]
): string {
  const t = getTranslations(locale)
  if (!t || Object.keys(t).length === 0) {
    return keys.join('.')
  }
  
  let value: any = t
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key as keyof typeof value]
    } else {
      return keys.join('.')
    }
  }
  
  return typeof value === 'string' ? value : keys.join('.')
}

export function t(locale: Locale, key: string): string {
  const keys = key.split('.')
  return getNestedTranslation(locale, keys)
}
