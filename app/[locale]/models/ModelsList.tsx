'use client'

import { useState } from 'react'
import Link from 'next/link'
import ImageWithFallback from '@/components/ImageWithFallback'
import { Locale } from '@/i18n'
import { getLocalizedPath } from '@/lib/locale-utils'

interface ModelsListProps {
  locale: Locale
  translations: any
}

export default function ModelsList({ locale, translations }: ModelsListProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const t = translations

  const models = [
    {
      slug: 'elight',
      name: 'ELIGHT',
      category: 'urban',
      description: locale === 'fr'
        ? 'Véhicule électrique compact et urbain, parfait pour les déplacements quotidiens en ville.'
        : locale === 'ar'
        ? 'مركبة كهربائية مدمجة وحضرية، مثالية للتنقلات اليومية في المدينة.'
        : 'Compact and urban electric vehicle, perfect for daily city trips.',
      image: '/images/models/elight-main.jpg',
      range: '200 km',
      battery: '30 kWh',
      power: '50 kW',
      charging: locale === 'fr'
        ? '6h (domicile) / 30min (rapide)'
        : locale === 'ar'
        ? '6 ساعات (منزلي) / 30 دقيقة (سريع)'
        : '6h (home) / 30min (fast)',
      price: locale === 'fr'
        ? 'À partir de 45 000 TND'
        : locale === 'ar'
        ? 'بدءاً من 45000 دينار تونسي'
        : 'From 45,000 TND',
    },
    {
      slug: 'ev3',
      name: 'EV3',
      category: 'family',
      description: locale === 'fr'
        ? 'SUV électrique polyvalent, idéal pour les familles et les longues distances.'
        : locale === 'ar'
        ? 'سيارة كهربائية متعددة الاستخدامات، مثالية للعائلات والرحلات الطويلة.'
        : 'Versatile electric SUV, ideal for families and long distances.',
      image: '/images/models/ev3-main.jpg',
      range: '350 km',
      battery: '55 kWh',
      power: '100 kW',
      charging: locale === 'fr'
        ? '8h (domicile) / 40min (rapide)'
        : locale === 'ar'
        ? '8 ساعات (منزلي) / 40 دقيقة (سريع)'
        : '8h (home) / 40min (fast)',
      price: locale === 'fr'
        ? 'À partir de 75 000 TND'
        : locale === 'ar'
        ? 'بدءاً من 75000 دينار تونسي'
        : 'From 75,000 TND',
    },
    {
      slug: 'ev2',
      name: 'EV2',
      category: 'utility',
      description: locale === 'fr'
        ? 'Berline électrique élégante, alliant confort et performance pour un usage professionnel.'
        : locale === 'ar'
        ? 'سيارة كهربائية أنيقة، تجمع بين الراحة والأداء للاستخدام المهني.'
        : 'Elegant electric sedan, combining comfort and performance for professional use.',
      image: '/images/models/ev2-main.jpg',
      range: '400 km',
      battery: '60 kWh',
      power: '120 kW',
      charging: locale === 'fr'
        ? '9h (domicile) / 45min (rapide)'
        : locale === 'ar'
        ? '9 ساعات (منزلي) / 45 دقيقة (سريع)'
        : '9h (home) / 45min (fast)',
      price: locale === 'fr'
        ? 'À partir de 85 000 TND'
        : locale === 'ar'
        ? 'بدءاً من 85000 دينار تونسي'
        : 'From 85,000 TND',
    },
  ]

  const filters = [
    { id: 'all', label: t.common.allModels },
    { id: 'urban', label: t.common.urban },
    { id: 'family', label: t.common.family },
    { id: 'utility', label: t.common.utility },
  ]

  const filteredModels = activeFilter === 'all' 
    ? models 
    : models.filter(model => model.category === activeFilter)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.models.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              {t.models.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b sticky top-20 z-40 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredModels.map((model) => (
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
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{model.name}</h2>
                  <p className="text-gray-600 mb-4">{model.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm border-t pt-4">
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
                    <div>
                      <div className="font-semibold text-gray-900">{model.charging}</div>
                      <div className="text-gray-500">{t.models.charging}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-lg font-bold text-primary-600">{model.price}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={getLocalizedPath(`/models/${model.slug}`, locale)}
                      className="flex-1 text-center btn-primary"
                    >
                      {t.common.viewDetails}
                    </Link>
                    <Link
                      href={getLocalizedPath(`/contact?purpose=quotation&model=${model.slug}`, locale)}
                      className="flex-1 text-center btn-secondary"
                    >
                      {t.common.requestQuote}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredModels.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">{t.common.noResults}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.models.needHelp}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t.models.needHelpSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={getLocalizedPath('/contact', locale)} className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              {t.common.contactUs}
            </Link>
            <Link href={getLocalizedPath('/contact?purpose=test-drive', locale)} className="btn-secondary border-2 border-white text-white hover:bg-white/10">
              {t.common.bookTestDrive}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

