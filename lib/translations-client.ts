'use client'

import { Locale } from '@/i18n'

// Import translations directly to avoid async loading issues
import frTranslations from '@/messages/fr.json'
import arTranslations from '@/messages/ar.json'
import enTranslations from '@/messages/en.json'

const translations: Record<Locale, any> = {
  fr: frTranslations,
  ar: arTranslations,
  en: enTranslations,
}

export function getTranslationsClient(locale: Locale) {
  return translations[locale] || {}
}

export function getNestedTranslationClient(
  locale: Locale,
  keys: string[]
): string {
  const t = getTranslationsClient(locale)
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

export function tClient(locale: Locale, key: string): string {
  const keys = key.split('.')
  return getNestedTranslationClient(locale, keys)
}

