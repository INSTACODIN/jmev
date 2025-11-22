import Link from 'next/link'
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
    title: t.offers.title || 'Offers & Financing - JMEV Tunisia',
    description: t.offers.subtitle || 'Discover our financing solutions and special offers for purchasing JMEV electric vehicles in Tunisia.',
  }
}

export default async function OffersPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const t = getTranslations(locale)

  const financingPlans = [
    {
      type: 'particuliers',
      title: t.offers.individual.title,
      description: t.offers.individual.description,
      features: Object.values(t.offers.individual.features) as string[],
      example: {
        vehicle: 'ELIGHT',
        price: locale === 'fr' ? '45 000 TND' : locale === 'ar' ? '45000 دينار تونسي' : '45,000 TND',
        downPayment: locale === 'fr' ? '9 000 TND (20%)' : locale === 'ar' ? '9000 دينار تونسي (20%)' : '9,000 TND (20%)',
        monthly: locale === 'fr' ? '~550 TND' : locale === 'ar' ? '~550 دينار تونسي' : '~550 TND',
        duration: locale === 'fr' ? '7 ans' : locale === 'ar' ? '7 سنوات' : '7 years',
      },
      button: t.offers.individual.button,
    },
    {
      type: 'entreprises',
      title: t.offers.business.title,
      description: t.offers.business.description,
      features: Object.values(t.offers.business.features) as string[],
      example: {
        vehicle: 'EV3',
        price: locale === 'fr' ? '75 000 TND' : locale === 'ar' ? '75000 دينار تونسي' : '75,000 TND',
        downPayment: locale === 'fr' ? '0 TND (100% financé)' : locale === 'ar' ? '0 دينار تونسي (تمويل 100%)' : '0 TND (100% financed)',
        monthly: locale === 'fr' ? '~1 200 TND' : locale === 'ar' ? '~1200 دينار تونسي' : '~1,200 TND',
        duration: locale === 'fr' ? '5 ans' : locale === 'ar' ? '5 سنوات' : '5 years',
      },
      button: t.offers.business.button,
    },
  ]

  const specialOffers = [
    {
      title: locale === 'fr' ? 'Offre Lancement' : locale === 'ar' ? 'عرض الإطلاق' : 'Launch Offer',
      description: locale === 'fr' ? 'Réduction de 5 000 TND sur tous les modèles' : locale === 'ar' ? 'خصم 5000 دينار تونسي على جميع الموديلات' : '5,000 TND discount on all models',
      validUntil: locale === 'fr' ? '31 décembre 2024' : locale === 'ar' ? '31 ديسمبر 2024' : 'December 31, 2024',
      badge: locale === 'fr' ? 'LIMITÉ' : locale === 'ar' ? 'محدود' : 'LIMITED',
    },
    {
      title: locale === 'fr' ? 'Reprise Véhicule' : locale === 'ar' ? 'إعادة شراء المركبة' : 'Vehicle Trade-in',
      description: locale === 'fr' ? 'Reprise de votre ancien véhicule avec bonus de 3 000 TND' : locale === 'ar' ? 'إعادة شراء مركبتك القديمة مع مكافأة 3000 دينار تونسي' : 'Trade-in your old vehicle with 3,000 TND bonus',
      validUntil: locale === 'fr' ? 'Permanent' : locale === 'ar' ? 'دائم' : 'Permanent',
      badge: locale === 'fr' ? 'POPULAIRE' : locale === 'ar' ? 'شائع' : 'POPULAR',
    },
    {
      title: locale === 'fr' ? 'Pack Famille' : locale === 'ar' ? 'باقة العائلة' : 'Family Pack',
      description: locale === 'fr' ? 'Installation de borne de recharge à domicile offerte' : locale === 'ar' ? 'تركيب محطة شحن منزلية مجانية' : 'Free home charging station installation',
      validUntil: locale === 'fr' ? '30 novembre 2024' : locale === 'ar' ? '30 نوفمبر 2024' : 'November 30, 2024',
      badge: locale === 'fr' ? 'NOUVEAU' : locale === 'ar' ? 'جديد' : 'NEW',
    },
  ]

  const incentives = [
    {
      title: t.offers.incentives.taxExemption.title,
      description: t.offers.incentives.taxExemption.description,
    },
    {
      title: t.offers.incentives.taxCredit.title,
      description: t.offers.incentives.taxCredit.description,
    },
    {
      title: t.offers.incentives.subsidies.title,
      description: t.offers.incentives.subsidies.description,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.offers.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              {t.offers.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Financing Plans */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.offers.solutions.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.offers.solutions.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {financingPlans.map((plan) => (
              <div
                key={plan.type}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 card-hover"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-primary-50 rounded-lg p-6 mb-6">
                  <div className="text-sm text-gray-600 mb-2">{t.offers.individual.example.label}</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">{t.offers.individual.example.vehicle}</div>
                      <div className="font-semibold text-gray-900">{plan.example.vehicle}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">{t.offers.individual.example.price}</div>
                      <div className="font-semibold text-gray-900">{plan.example.price}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">{t.offers.individual.example.downPayment}</div>
                      <div className="font-semibold text-gray-900">{plan.example.downPayment}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">{t.offers.individual.example.monthly}</div>
                      <div className="font-semibold text-primary-600">{plan.example.monthly}</div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    {t.offers.individual.example.duration}: <span className="font-semibold text-gray-900">{plan.example.duration}</span>
                  </div>
                </div>
                <Link
                  href={getLocalizedPath(`/contact?purpose=financing&type=${plan.type}`, locale)}
                  className="block w-full text-center btn-primary"
                >
                  {plan.button}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.offers.special.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.offers.special.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialOffers.map((offer, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 card-hover relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                  {offer.badge}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 mt-4">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="border-t pt-4">
                  <div className="text-sm text-gray-500">{t.offers.special.validUntil}</div>
                  <div className="font-semibold text-gray-900">{offer.validUntil}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Incentives */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t.offers.incentives.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t.offers.incentives.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {incentives.map((incentive, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-accent-50 to-white rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{incentive.title}</h3>
                  <p className="text-gray-600">{incentive.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-primary-50 rounded-xl p-6 text-center">
              <p className="text-gray-700 mb-4">
                {t.offers.incentives.note}
              </p>
              <Link href={getLocalizedPath('/contact?purpose=incentives', locale)} className="btn-primary">
                {t.common.learnMore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.offers.ready.title}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t.offers.ready.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={getLocalizedPath('/contact?purpose=financing', locale)} className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              {t.common.requestQuote}
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

