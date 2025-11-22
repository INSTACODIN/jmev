import Link from 'next/link'
import ImageWithFallback from '@/components/ImageWithFallback'
import { Locale } from '@/i18n'
import { getTranslations } from '@/lib/translations'
import { getLocalizedPath } from '@/lib/locale-utils'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = getTranslations(locale)

  return {
    title: t.charging.title || 'Charging & Range - JMEV Tunisia',
    description: t.charging.subtitle || 'Everything you need to know about charging your JMEV electric vehicle in Tunisia.',
  }
}

export default async function ChargingPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const t = getTranslations(locale)

  const chargingMethods = [
    {
      title: t.charging.home.title,
      description: t.charging.home.description,
      icon: '🏠',
      details: Object.values(t.charging.home.details),
      image: '/images/charging/home-charging.jpg',
    },
    {
      title: t.charging.public.title,
      description: t.charging.public.description,
      icon: '🔌',
      details: Object.values(t.charging.public.details),
      image: '/images/charging/public-charging.jpg',
    },
    {
      title: t.charging.fast.title,
      description: t.charging.fast.description,
      icon: '⚡',
      details: Object.values(t.charging.fast.details),
      image: '/images/charging/fast-charging.jpg',
    },
  ]

  const ranges = [
    {
      model: 'ELIGHT',
      city: '220 km',
      highway: '180 km',
      mixed: '200 km',
      note: locale === 'fr' 
        ? 'Autonomie optimale en conduite urbaine'
        : locale === 'ar'
        ? 'مدى مثالي للقيادة الحضرية'
        : 'Optimal range for urban driving',
    },
    {
      model: 'EV3',
      city: '380 km',
      highway: '320 km',
      mixed: '350 km',
      note: locale === 'fr'
        ? 'Parfait pour les trajets mixtes'
        : locale === 'ar'
        ? 'مثالي للرحلات المختلطة'
        : 'Perfect for mixed trips',
    },
    {
      model: 'EV2',
      city: '430 km',
      highway: '370 km',
      mixed: '400 km',
      note: locale === 'fr'
        ? 'Excellente autonomie pour tous les usages'
        : locale === 'ar'
        ? 'مدى ممتاز لجميع الاستخدامات'
        : 'Excellent range for all uses',
    },
  ]

  const tips = [
    {
      title: t.charging.tips.economical.title,
      description: t.charging.tips.economical.description,
    },
    {
      title: t.charging.tips.preconditioning.title,
      description: t.charging.tips.preconditioning.description,
    },
    {
      title: t.charging.tips.planning.title,
      description: t.charging.tips.planning.description,
    },
    {
      title: t.charging.tips.maintenance.title,
      description: t.charging.tips.maintenance.description,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-600 to-accent-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.charging.title}
            </h1>
            <p className="text-xl md:text-2xl text-accent-100">
              {t.charging.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Charging Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.charging.methods}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.charging.methodsSubtitle}
            </p>
          </div>
          <div className="space-y-12">
            {chargingMethods.map((method, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-64 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                    <ImageWithFallback
                      src={method.image}
                      alt={method.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="text-5xl mb-4">{method.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {method.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">{method.description}</p>
                  <ul className="space-y-3">
                    {method.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent-600 mr-2">✓</span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autonomy Ranges */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.charging.ranges.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.charging.ranges.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ranges.map((range, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 card-hover"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{range.model}</h3>
                <div className="space-y-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{t.charging.ranges.city}</div>
                    <div className="text-2xl font-bold text-primary-600">{range.city}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{t.charging.ranges.highway}</div>
                    <div className="text-2xl font-bold text-primary-600">{range.highway}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{t.charging.ranges.mixed}</div>
                    <div className="text-2xl font-bold text-accent-600">{range.mixed}</div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600">{range.note}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-primary-50 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-gray-700 text-center">
              <strong>{locale === 'fr' ? 'Note:' : locale === 'ar' ? 'ملاحظة:' : 'Note:'}</strong> {t.charging.ranges.note}
            </p>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.charging.tips.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.charging.tips.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md card-hover"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="section-padding bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t.charging.cost.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t.charging.cost.subtitle}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-2">{t.charging.cost.home}</div>
                  <div className="text-3xl font-bold text-accent-600">~2,5 TND</div>
                  <div className="text-xs text-gray-500 mt-1">{t.charging.cost.for100km}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-2">{t.charging.cost.public}</div>
                  <div className="text-3xl font-bold text-primary-600">~4 TND</div>
                  <div className="text-xs text-gray-500 mt-1">{t.charging.cost.for100km}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-2">{t.charging.cost.thermal}</div>
                  <div className="text-3xl font-bold text-gray-400 line-through">~12 TND</div>
                  <div className="text-xs text-gray-500 mt-1">{t.charging.cost.for100km}</div>
                </div>
              </div>
              <div className="bg-accent-50 rounded-lg p-6 text-center">
                <p className="text-gray-700 font-semibold">
                  {t.charging.cost.save.replace('{percent}', '70')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.charging.questions.title}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t.charging.questions.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={getLocalizedPath('/contact?purpose=charging', locale)} className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              {t.common.contactUs}
            </Link>
            <Link href={getLocalizedPath('/models', locale)} className="btn-secondary border-2 border-white text-white hover:bg-white/10">
              {t.common.discoverModels}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

