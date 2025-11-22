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
    title: t.about.title || 'About - JMEV Tunisia',
    description: t.about.subtitle || 'Discover the story of JMEV Tunisia, official distributor of electric vehicles in Tunisia.',
  }
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const t = getTranslations(locale)

  const values = [
    {
      title: t.about.values.innovation.title,
      description: t.about.values.innovation.description,
      icon: '💡',
    },
    {
      title: t.about.values.sustainability.title,
      description: t.about.values.sustainability.description,
      icon: '🌍',
    },
    {
      title: t.about.values.accessibility.title,
      description: t.about.values.accessibility.description,
      icon: '🤝',
    },
    {
      title: t.about.values.service.title,
      description: t.about.values.service.description,
      icon: '⭐',
    },
  ]

  const timeline = [
    {
      year: '2020',
      title: locale === 'fr' ? 'Fondation' : locale === 'ar' ? 'التأسيس' : 'Foundation',
      description: t.about.story.p1,
    },
    {
      year: '2021',
      title: locale === 'fr' ? 'Premier Showroom' : locale === 'ar' ? 'أول صالة عرض' : 'First Showroom',
      description: locale === 'fr'
        ? 'Ouverture de notre premier showroom à Tunis pour présenter la gamme JMEV.'
        : locale === 'ar'
        ? 'افتتاح أول صالة عرض في تونس لعرض مجموعة JMEV.'
        : 'Opening of our first showroom in Tunis to showcase the JMEV range.',
    },
    {
      year: '2022',
      title: locale === 'fr' ? 'Expansion' : locale === 'ar' ? 'التوسع' : 'Expansion',
      description: locale === 'fr'
        ? 'Développement du réseau de service après-vente et partenariats avec des installateurs de bornes.'
        : locale === 'ar'
        ? 'تطوير شبكة خدمة ما بعد البيع وشراكات مع مثبتي محطات الشحن.'
        : 'Development of the after-sales service network and partnerships with charging station installers.',
    },
    {
      year: '2023',
      title: locale === 'fr' ? 'Croissance' : locale === 'ar' ? 'النمو' : 'Growth',
      description: locale === 'fr'
        ? 'Plus de 500 véhicules JMEV sur les routes tunisiennes et réseau de recharge en expansion.'
        : locale === 'ar'
        ? 'أكثر من 500 مركبة JMEV على الطرق التونسية وشبكة شحن في توسع.'
        : 'More than 500 JMEV vehicles on Tunisian roads and expanding charging network.',
    },
    {
      year: '2024',
      title: locale === 'fr' ? 'Avenir' : locale === 'ar' ? 'المستقبل' : 'Future',
      description: locale === 'fr'
        ? 'Continuer à développer l\'infrastructure de recharge et élargir notre gamme de modèles.'
        : locale === 'ar'
        ? 'مواصلة تطوير بنية الشحن وتوسيع مجموعة الموديلات.'
        : 'Continue to develop charging infrastructure and expand our model range.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.about.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t.about.story.title}
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>{t.about.story.p1}</p>
                <p>{t.about.story.p2}</p>
                <p>{t.about.story.p3}</p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="/images/showroom/showroom-tunisia.jpg"
                alt="JMEV Tunisia Showroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.about.values.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.about.values.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md card-hover text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.about.timeline.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.about.timeline.subtitle}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 hidden md:block"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="hidden md:block absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="md:ml-16">
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-6 card-hover">
                        <div className="text-primary-600 font-bold text-lg mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.about.partnership.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t.about.partnership.description}
            </p>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                  <div className="text-gray-600">{t.about.partnership.certified}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">5 {locale === 'fr' ? 'ans' : locale === 'ar' ? 'سنوات' : 'years'}</div>
                  <div className="text-gray-600">{t.about.partnership.batteryWarranty}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                  <div className="text-gray-600">{t.about.partnership.support}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.about.cta.title}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t.about.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={getLocalizedPath('/models', locale)} className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              {t.common.discoverModels}
            </Link>
            <Link href={getLocalizedPath('/contact', locale)} className="btn-secondary border-2 border-white text-white hover:bg-white/10">
              {t.common.contactUs}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

