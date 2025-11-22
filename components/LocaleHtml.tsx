'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Locale, locales } from '@/i18n'

export function LocaleHtml({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  useEffect(() => {
    // Extract locale from pathname
    const localeMatch = pathname.match(/^\/(fr|ar|en)(\/|$)/)
    const locale = (localeMatch ? localeMatch[1] : 'fr') as Locale
    const dir = locale === 'ar' ? 'rtl' : 'ltr'
    
    // Set lang and dir on html element
    document.documentElement.lang = locale
    document.documentElement.dir = dir
  }, [pathname])

  return <>{children}</>
}



