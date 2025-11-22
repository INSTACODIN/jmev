import { Locale, defaultLocale } from '@/i18n'
import { headers } from 'next/headers'

export async function getLocaleFromHeaders(): Promise<Locale> {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') || ''
  
  // Extract locale from pathname
  const localeMatch = pathname.match(/^\/(fr|ar|en)(\/|$)/)
  if (localeMatch) {
    return localeMatch[1] as Locale
  }
  
  // Check accept-language header
  const acceptLanguage = headersList.get('accept-language') || ''
  if (acceptLanguage.includes('ar')) return 'ar'
  if (acceptLanguage.includes('en')) return 'en'
  if (acceptLanguage.includes('fr')) return 'fr'
  
  return defaultLocale
}

export function getLocaleFromPath(pathname: string): Locale {
  const localeMatch = pathname.match(/^\/(fr|ar|en)(\/|$)/)
  if (localeMatch) {
    return localeMatch[1] as Locale
  }
  return defaultLocale
}



