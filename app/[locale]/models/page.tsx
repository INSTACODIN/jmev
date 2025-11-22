import { Locale } from '@/i18n'
import { getTranslations } from '@/lib/translations'
import ModelsList from './ModelsList'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = getTranslations(locale)

  return {
    title: t.models.title || 'Our Range of Electric Vehicles',
    description: t.models.subtitle || 'Discover our models adapted to all your mobility needs in Tunisia',
  }
}

export default async function ModelsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const t = getTranslations(locale)

  return <ModelsList locale={locale} translations={t} />
}

