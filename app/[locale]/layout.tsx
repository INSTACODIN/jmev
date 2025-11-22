import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/components/LanguageProvider'
import { Locale, locales } from '@/i18n'
import { getTranslations } from '@/lib/translations'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = getTranslations(locale)

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jmev-tunisia.tn'
  
  // Generate hreflang links
  const alternateLanguages: Record<string, string> = {}
  locales.forEach((loc) => {
    alternateLanguages[loc] = `${baseUrl}/${loc}`
  })

  return {
    title: {
      default: locale === 'fr' 
        ? 'JMEV Tunisia - Véhicules Électriques en Tunisie'
        : locale === 'ar'
        ? 'JMEV Tunisia - المركبات الكهربائية في تونس'
        : 'JMEV Tunisia - Electric Vehicles in Tunisia',
      template: '%s | JMEV Tunisia',
    },
    description: locale === 'fr'
      ? 'Découvrez la gamme complète de véhicules électriques JMEV en Tunisie. ELIGHT, EV3, EV2 - Mobilité électrique moderne et abordable.'
      : locale === 'ar'
      ? 'اكتشف المجموعة الكاملة من مركبات JMEV الكهربائية في تونس. ELIGHT, EV3, EV2 - تنقل كهربائي حديث وبأسعار معقولة.'
      : 'Discover the complete range of JMEV electric vehicles in Tunisia. ELIGHT, EV3, EV2 - Modern and affordable electric mobility.',
    keywords: locale === 'fr'
      ? 'JMEV, véhicules électriques, Tunisie, ELIGHT, EV3, EV2, voiture électrique'
      : locale === 'ar'
      ? 'JMEV, مركبات كهربائية, تونس, ELIGHT, EV3, EV2, سيارة كهربائية'
      : 'JMEV, electric vehicles, Tunisia, ELIGHT, EV3, EV2, electric car',
    alternates: {
      languages: alternateLanguages,
      canonical: `${baseUrl}/${locale}`,
    },
    openGraph: {
      title: locale === 'fr'
        ? 'JMEV Tunisia - Véhicules Électriques'
        : locale === 'ar'
        ? 'JMEV Tunisia - المركبات الكهربائية'
        : 'JMEV Tunisia - Electric Vehicles',
      description: locale === 'fr'
        ? 'Mobilité électrique moderne en Tunisie'
        : locale === 'ar'
        ? 'تنقل كهربائي حديث في تونس'
        : 'Modern electric mobility in Tunisia',
      type: 'website',
      locale: locale === 'fr' ? 'fr_TN' : locale === 'ar' ? 'ar_TN' : 'en_TN',
      alternateLocale: locales.filter((l) => l !== locale),
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  
  return (
    <LanguageProvider initialLocale={locale}>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </LanguageProvider>
  )
}

