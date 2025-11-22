import { Locale } from '@/i18n'

export function getLocalizedPath(path: string, locale: Locale): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // Remove locale prefix if present
  const pathWithoutLocale = cleanPath.replace(/^(fr|ar|en)\//, '')
  // Add new locale prefix
  return `/${locale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ''}`
}

export function removeLocaleFromPath(path: string): string {
  return path.replace(/^\/(fr|ar|en)/, '') || '/'
}



