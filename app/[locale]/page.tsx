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
  
  // Ensure we have valid translations
  if (!t || !t.home) {
    console.error('Metadata: Translations not loaded for locale:', locale)
    return {
      title: 'JMEV Tunisia - Véhicules Électriques en Tunisie',
      description: 'Découvrez la gamme complète de véhicules électriques JMEV en Tunisie.',
    }
  }

  return {
    title: t.home.title || 'JMEV Tunisia - Véhicules Électriques en Tunisie',
    description: t.home.subtitle || 'Découvrez la gamme complète de véhicules électriques JMEV en Tunisie.',
  }
}

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const t = getTranslations(locale)
  
  // Safety check - ensure translations are loaded
  if (!t || !t.home || !t.models || !t.common) {
    console.error('Translations not loaded correctly for locale:', locale, 'Available keys:', t ? Object.keys(t) : 'none')
    // Return a fallback page instead of crashing
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading translations...</h1>
          <p>Locale: {locale}</p>
        </div>
      </div>
    )
  }

  const featuredModels = [
    {
      slug: 'elight',
      name: 'ELIGHT',
      description: locale === 'fr'
        ? 'Véhicule électrique compact et urbain, parfait pour les déplacements quotidiens en ville.'
        : locale === 'ar'
        ? 'مركبة كهربائية مدمجة وحضرية، مثالية للتنقلات اليومية في المدينة.'
        : 'Compact and urban electric vehicle, perfect for daily city trips.',
      image: '/images/models/elight-main.jpg',
      range: '200 km',
      battery: '30 kWh',
      power: '50 kW',
    },
    {
      slug: 'ev3',
      name: 'EV3',
      description: locale === 'fr'
        ? 'SUV électrique polyvalent, idéal pour les familles et les longues distances.'
        : locale === 'ar'
        ? 'سيارة كهربائية متعددة الاستخدامات، مثالية للعائلات والرحلات الطويلة.'
        : 'Versatile electric SUV, ideal for families and long distances.',
      image: '/images/models/ev3-main.jpg',
      range: '350 km',
      battery: '55 kWh',
      power: '100 kW',
    },
    {
      slug: 'ev2',
      name: 'EV2',
      description: locale === 'fr'
        ? 'Berline électrique élégante, alliant confort et performance pour un usage professionnel.'
        : locale === 'ar'
        ? 'سيارة كهربائية أنيقة، تجمع بين الراحة والأداء للاستخدام المهني.'
        : 'Elegant electric sedan, combining comfort and performance for professional use.',
      image: '/images/models/ev2-main.jpg',
      range: '400 km',
      battery: '60 kWh',
      power: '120 kW',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-background.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {t.home.title.split(' ').slice(0, -2).join(' ')}{' '}
              <span className="text-primary-600">{t.home.title.split(' ').slice(-2).join(' ')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              {t.home.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={getLocalizedPath('/models', locale)} className="btn-primary text-lg px-8 py-4">
                {t.home.discoverModels}
              </Link>
              <Link href={getLocalizedPath('/contact?purpose=test-drive', locale)} className="btn-secondary text-lg px-8 py-4">
                {t.home.bookTestDrive}
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Featured Models Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t.home.ourModels}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.home.modelsSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredModels.map((model) => (
              <div
                key={model.slug}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                <div className="relative h-64 bg-gray-100">
                  <ImageWithFallback
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{model.name}</h3>
                  <p className="text-gray-600 mb-4">{model.description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                    <div>
                      <div className="font-semibold text-gray-900">{model.range}</div>
                      <div className="text-gray-500">{t.models.range}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{model.battery}</div>
                      <div className="text-gray-500">{t.models.battery}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{model.power}</div>
                      <div className="text-gray-500">{t.models.power}</div>
                    </div>
                  </div>
                  <Link
                    href={getLocalizedPath(`/models/${model.slug}`, locale)}
                    className="block w-full text-center btn-primary"
                  >
                    {t.common.viewDetails}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose JMEV Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t.home.whyChoose}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.home.whyChooseSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.values(t.home.features).map((feature: any, index: number) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md card-hover text-center"
              >
                <div className="text-5xl mb-4">
                  {index === 0 ? '💰' : index === 1 ? '🌱' : index === 2 ? '🔧' : '🔌'}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing & Incentives Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t.home.financing.title}
              </h2>
              <p className="text-lg text-gray-600">
                {t.home.financing.subtitle}
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t.home.financing.personalized.title}
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {Object.values(t.home.financing.personalized.items).map((item: any, i: number) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary-600 mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t.home.financing.incentives.title}
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {Object.values(t.home.financing.incentives.items).map((item: any, i: number) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent-600 mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link href={getLocalizedPath('/offers', locale)} className="btn-primary">
                  {t.home.financing.learnMore}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t.home.testimonials.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.home.testimonials.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md card-hover"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  {locale === 'fr'
                    ? index === 1
                      ? "J'ai acheté mon ELIGHT il y a 6 mois. Les économies sur le carburant sont impressionnantes, et la voiture est parfaite pour la ville."
                      : index === 2
                      ? "L'EV3 est idéal pour ma famille. Nous faisons régulièrement des trajets Tunis-Sfax sans problème. Excellent rapport qualité-prix."
                      : "Service client excellent et véhicule très fiable. Je recommande JMEV Tunisia à tous ceux qui cherchent une alternative électrique."
                    : locale === 'ar'
                    ? index === 1
                      ? "اشتريت ELIGHT منذ 6 أشهر. التوفير في الوقود مذهل، والسيارة مثالية للمدينة."
                      : index === 2
                      ? "EV3 مثالي لعائلتي. نسافر بانتظام من تونس إلى صفاقس دون مشكلة. نسبة سعر/جودة ممتازة."
                      : "خدمة عملاء ممتازة ومركبة موثوقة جداً. أنصح بـ JMEV Tunisia لجميع من يبحثون عن بديل كهربائي."
                    : index === 1
                    ? "I bought my ELIGHT 6 months ago. The fuel savings are impressive, and the car is perfect for the city."
                    : index === 2
                    ? "The EV3 is ideal for my family. We regularly make Tunis-Sfax trips without any problem. Excellent value for money."
                    : "Excellent customer service and very reliable vehicle. I recommend JMEV Tunisia to anyone looking for an electric alternative."}
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    {index === 1 ? (locale === 'ar' ? 'أحمد بن علي' : 'Ahmed Ben Ali') : index === 2 ? (locale === 'ar' ? 'فاطمة الطرابلسي' : 'Fatma Trabelsi') : (locale === 'ar' ? 'محمد الخليفي' : 'Mohamed Khelifi')}
                  </div>
                  <div className="text-sm text-gray-500">
                    {index === 1 ? 'Tunis' : index === 2 ? 'Sfax' : 'Sousse'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

