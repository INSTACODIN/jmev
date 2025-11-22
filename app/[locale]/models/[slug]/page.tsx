import { notFound } from 'next/navigation'
import Link from 'next/link'
import ImageWithFallback from '@/components/ImageWithFallback'
import { Locale } from '@/i18n'
import { getTranslations } from '@/lib/translations'
import { getLocalizedPath } from '@/lib/locale-utils'

// Model data - in a real app, this would come from a CMS or database
const models = {
  elight: {
    name: 'ELIGHT',
    slug: 'elight',
    category: 'urban',
    heroImage: '/images/models/elight-main.jpg',
    description: {
      fr: 'Véhicule électrique compact et urbain, parfait pour les déplacements quotidiens en ville.',
      ar: 'مركبة كهربائية مدمجة وحضرية، مثالية للتنقلات اليومية في المدينة.',
      en: 'Compact and urban electric vehicle, perfect for daily city trips.',
    },
    targetCustomer: {
      fr: 'Idéal pour les citadins et les trajets quotidiens en milieu urbain.',
      ar: 'مثالي لسكان المدن والرحلات اليومية في المناطق الحضرية.',
      en: 'Ideal for city dwellers and daily trips in urban areas.',
    },
    usage: {
      fr: 'Parfait pour les déplacements quotidiens, les courses et les trajets courts en ville.',
      ar: 'مثالي للتنقلات اليومية والتسوق والرحلات القصيرة في المدينة.',
      en: 'Perfect for daily commutes, shopping, and short city trips.',
    },
    specifications: {
      range: '200 km',
      battery: '30 kWh',
      power: '50 kW',
      maxSpeed: '120 km/h',
      acceleration: {
        fr: '0-50 km/h en 4.5s',
        ar: '0-50 كم/س في 4.5 ثانية',
        en: '0-50 km/h in 4.5s',
      },
      charging: {
        home: {
          fr: '6h (chargeur standard)',
          ar: '6 ساعات (شاحن قياسي)',
          en: '6h (standard charger)',
        },
        fast: {
          fr: '30min (charge rapide 80%)',
          ar: '30 دقيقة (شحن سريع 80%)',
          en: '30min (fast charge 80%)',
        },
      },
      dimensions: {
        length: '3.6 m',
        width: '1.6 m',
        height: '1.5 m',
        wheelbase: '2.4 m',
      },
      weight: '1,200 kg',
      seats: '4',
      safety: {
        fr: [
          'Système de freinage ABS',
          'Airbags frontaux et latéraux',
          'Contrôle de stabilité électronique',
          'Caméra de recul',
          'Aide au stationnement',
        ],
        ar: [
          'نظام فرامل ABS',
          'وسائد هوائية أمامية وجانبية',
          'نظام التحكم الإلكتروني في الاستقرار',
          'كاميرا خلفية',
          'مساعدة في الركن',
        ],
        en: [
          'ABS braking system',
          'Front and side airbags',
          'Electronic stability control',
          'Rear camera',
          'Parking assistance',
        ],
      },
    },
    gallery: [
      '/images/models/elight-main.jpg',
      '/images/models/elight-main.jpg',
      '/images/models/elight-main.jpg',
      '/images/models/elight-main.jpg',
    ],
    price: {
      fr: 'À partir de 45 000 TND',
      ar: 'بدءاً من 45000 دينار تونسي',
      en: 'From 45,000 TND',
    },
    costOfOwnership: {
      purchase: {
        fr: '45 000 TND',
        ar: '45000 دينار تونسي',
        en: '45,000 TND',
      },
      annualEnergy: {
        fr: '1 200 TND',
        ar: '1200 دينار تونسي',
        en: '1,200 TND',
      },
      maintenance: {
        fr: '500 TND',
        ar: '500 دينار تونسي',
        en: '500 TND',
      },
      total5Years: {
        fr: '51 500 TND',
        ar: '51500 دينار تونسي',
        en: '51,500 TND',
      },
      note: {
        fr: 'Économies estimées par rapport à un véhicule thermique: ~15 000 TND sur 5 ans',
        ar: 'التوفير المقدر مقارنة بمركبة تقليدية: ~15000 دينار تونسي على مدى 5 سنوات',
        en: 'Estimated savings compared to a thermal vehicle: ~15,000 TND over 5 years',
      },
    },
  },
  ev3: {
    name: 'EV3',
    slug: 'ev3',
    category: 'family',
    heroImage: '/images/models/ev3-main.jpg',
    description: {
      fr: 'SUV électrique polyvalent, idéal pour les familles et les longues distances.',
      ar: 'سيارة كهربائية متعددة الاستخدامات، مثالية للعائلات والرحلات الطويلة.',
      en: 'Versatile electric SUV, ideal for families and long distances.',
    },
    targetCustomer: {
      fr: 'Parfait pour les familles et ceux qui recherchent plus d\'espace et d\'autonomie.',
      ar: 'مثالي للعائلات وأولئك الذين يبحثون عن مساحة أكبر ومدى أطول.',
      en: 'Perfect for families and those looking for more space and range.',
    },
    usage: {
      fr: 'Idéal pour les trajets familiaux, les voyages longue distance et les activités de loisirs.',
      ar: 'مثالي للرحلات العائلية والسفر لمسافات طويلة وأنشطة الترفيه.',
      en: 'Ideal for family trips, long-distance travel, and leisure activities.',
    },
    specifications: {
      range: '350 km',
      battery: '55 kWh',
      power: '100 kW',
      maxSpeed: '150 km/h',
      acceleration: {
        fr: '0-100 km/h en 8.5s',
        ar: '0-100 كم/س في 8.5 ثانية',
        en: '0-100 km/h in 8.5s',
      },
      charging: {
        home: {
          fr: '8h (chargeur standard)',
          ar: '8 ساعات (شاحن قياسي)',
          en: '8h (standard charger)',
        },
        fast: {
          fr: '40min (charge rapide 80%)',
          ar: '40 دقيقة (شحن سريع 80%)',
          en: '40min (fast charge 80%)',
        },
      },
      dimensions: {
        length: '4.5 m',
        width: '1.8 m',
        height: '1.7 m',
        wheelbase: '2.7 m',
      },
      weight: '1,800 kg',
      seats: '5',
      safety: {
        fr: [
          'Système de freinage ABS avec EBD',
          '7 airbags',
          'Contrôle de stabilité électronique avancé',
          'Caméra 360°',
          'Détection d\'obstacles avant/arrière',
          'Aide au freinage d\'urgence',
        ],
        ar: [
          'نظام فرامل ABS مع EBD',
          '7 وسائد هوائية',
          'نظام التحكم الإلكتروني في الاستقرار المتقدم',
          'كاميرا 360 درجة',
          'كشف العوائق الأمامية/الخلفية',
          'مساعدة في الفرملة الطارئة',
        ],
        en: [
          'ABS braking system with EBD',
          '7 airbags',
          'Advanced electronic stability control',
          '360° camera',
          'Front/rear obstacle detection',
          'Emergency braking assistance',
        ],
      },
    },
    gallery: [
      '/images/models/ev3-main.jpg',
      '/images/models/ev3-main.jpg',
      '/images/models/ev3-main.jpg',
      '/images/models/ev3-main.jpg',
    ],
    price: {
      fr: 'À partir de 75 000 TND',
      ar: 'بدءاً من 75000 دينار تونسي',
      en: 'From 75,000 TND',
    },
    costOfOwnership: {
      purchase: {
        fr: '75 000 TND',
        ar: '75000 دينار تونسي',
        en: '75,000 TND',
      },
      annualEnergy: {
        fr: '1 800 TND',
        ar: '1800 دينار تونسي',
        en: '1,800 TND',
      },
      maintenance: {
        fr: '800 TND',
        ar: '800 دينار تونسي',
        en: '800 TND',
      },
      total5Years: {
        fr: '84 400 TND',
        ar: '84400 دينار تونسي',
        en: '84,400 TND',
      },
      note: {
        fr: 'Économies estimées par rapport à un véhicule thermique: ~25 000 TND sur 5 ans',
        ar: 'التوفير المقدر مقارنة بمركبة تقليدية: ~25000 دينار تونسي على مدى 5 سنوات',
        en: 'Estimated savings compared to a thermal vehicle: ~25,000 TND over 5 years',
      },
    },
  },
  ev2: {
    name: 'EV2',
    slug: 'ev2',
    category: 'utility',
    heroImage: '/images/models/ev2-main.jpg',
    description: {
      fr: 'Berline électrique élégante, alliant confort et performance pour un usage professionnel.',
      ar: 'سيارة كهربائية أنيقة، تجمع بين الراحة والأداء للاستخدام المهني.',
      en: 'Elegant electric sedan, combining comfort and performance for professional use.',
    },
    targetCustomer: {
      fr: 'Conçu pour les professionnels et ceux qui recherchent élégance et performance.',
      ar: 'مصمم للمهنيين وأولئك الذين يبحثون عن الأناقة والأداء.',
      en: 'Designed for professionals and those seeking elegance and performance.',
    },
    usage: {
      fr: 'Parfait pour les trajets professionnels, les déplacements longue distance et le confort premium.',
      ar: 'مثالي للرحلات المهنية والتنقلات لمسافات طويلة والراحة الفاخرة.',
      en: 'Perfect for business trips, long-distance travel, and premium comfort.',
    },
    specifications: {
      range: '400 km',
      battery: '60 kWh',
      power: '120 kW',
      maxSpeed: '160 km/h',
      acceleration: {
        fr: '0-100 km/h en 7.2s',
        ar: '0-100 كم/س في 7.2 ثانية',
        en: '0-100 km/h in 7.2s',
      },
      charging: {
        home: {
          fr: '9h (chargeur standard)',
          ar: '9 ساعات (شاحن قياسي)',
          en: '9h (standard charger)',
        },
        fast: {
          fr: '45min (charge rapide 80%)',
          ar: '45 دقيقة (شحن سريع 80%)',
          en: '45min (fast charge 80%)',
        },
      },
      dimensions: {
        length: '4.8 m',
        width: '1.85 m',
        height: '1.5 m',
        wheelbase: '2.8 m',
      },
      weight: '1,900 kg',
      seats: '5',
      safety: {
        fr: [
          'Système de freinage ABS avec EBD avancé',
          '8 airbags',
          'Contrôle de stabilité électronique premium',
          'Caméra 360° avec vue aérienne',
          'Détection d\'obstacles 360°',
          'Freinage d\'urgence automatique',
          'Aide au maintien de voie',
        ],
        ar: [
          'نظام فرامل ABS مع EBD متقدم',
          '8 وسائد هوائية',
          'نظام التحكم الإلكتروني في الاستقرار المميز',
          'كاميرا 360 درجة مع رؤية جوية',
          'كشف العوائق 360 درجة',
          'الفرملة الطارئة التلقائية',
          'مساعدة في الحفاظ على المسار',
        ],
        en: [
          'Advanced ABS braking system with EBD',
          '8 airbags',
          'Premium electronic stability control',
          '360° camera with aerial view',
          '360° obstacle detection',
          'Automatic emergency braking',
          'Lane keeping assistance',
        ],
      },
    },
    gallery: [
      '/images/models/ev2-main.jpg',
      '/images/models/ev2-main.jpg',
      '/images/models/ev2-main.jpg',
      '/images/models/ev2-main.jpg',
    ],
    price: {
      fr: 'À partir de 85 000 TND',
      ar: 'بدءاً من 85000 دينار تونسي',
      en: 'From 85,000 TND',
    },
    costOfOwnership: {
      purchase: {
        fr: '85 000 TND',
        ar: '85000 دينار تونسي',
        en: '85,000 TND',
      },
      annualEnergy: {
        fr: '2 000 TND',
        ar: '2000 دينار تونسي',
        en: '2,000 TND',
      },
      maintenance: {
        fr: '1 000 TND',
        ar: '1000 دينار تونسي',
        en: '1,000 TND',
      },
      total5Years: {
        fr: '97 000 TND',
        ar: '97000 دينار تونسي',
        en: '97,000 TND',
      },
      note: {
        fr: 'Économies estimées par rapport à un véhicule thermique: ~30 000 TND sur 5 ans',
        ar: 'التوفير المقدر مقارنة بمركبة تقليدية: ~30000 دينار تونسي على مدى 5 سنوات',
        en: 'Estimated savings compared to a thermal vehicle: ~30,000 TND over 5 years',
      },
    },
  },
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params
  const model = models[slug as keyof typeof models]
  
  if (!model) {
    return {
      title: locale === 'fr' 
        ? 'Modèle non trouvé - JMEV Tunisia'
        : locale === 'ar'
        ? 'النموذج غير موجود - JMEV Tunisia'
        : 'Model not found - JMEV Tunisia',
    }
  }

  return {
    title: `${model.name} - JMEV Tunisia`,
    description: model.description[locale],
  }
}

export default async function ModelDetailPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params
  const model = models[slug as keyof typeof models]
  const t = getTranslations(locale)

  if (!model) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={model.heroImage}
            alt={model.name}
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">{model.name}</h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
            {model.description[locale]}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={getLocalizedPath(`/contact?purpose=test-drive&model=${model.slug}`, locale)} className="btn-primary text-lg px-8 py-4">
              {t.common.bookTestDrive}
            </Link>
            <Link href={getLocalizedPath(`/contact?purpose=quotation&model=${model.slug}`, locale)} className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4">
              {t.common.requestQuote}
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.modelDetail.overview}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.modelDetail.targetCustomer}</h3>
                <p className="text-gray-600">{model.targetCustomer[locale]}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.modelDetail.recommendedUsage}</h3>
                <p className="text-gray-600">{model.usage[locale]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t.modelDetail.specifications}</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{t.models.range}</div>
                    <div className="text-2xl font-bold text-gray-900">{model.specifications.range}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{t.models.battery}</div>
                    <div className="text-2xl font-bold text-gray-900">{model.specifications.battery}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{t.models.power}</div>
                    <div className="text-2xl font-bold text-gray-900">{model.specifications.power}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{t.modelDetail.maxSpeed}</div>
                    <div className="text-2xl font-bold text-gray-900">{model.specifications.maxSpeed}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{t.modelDetail.acceleration}</div>
                    <div className="text-2xl font-bold text-gray-900">{model.specifications.acceleration[locale]}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{t.modelDetail.seats}</div>
                    <div className="text-2xl font-bold text-gray-900">{model.specifications.seats}</div>
                  </div>
                </div>

                <div className="border-t pt-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.models.charging}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">{t.modelDetail.homeCharging}</div>
                      <div className="font-semibold text-gray-900">{model.specifications.charging.home[locale]}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">{t.modelDetail.fastCharging}</div>
                      <div className="font-semibold text-gray-900">{model.specifications.charging.fast[locale]}</div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.modelDetail.dimensions}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{t.modelDetail.length}</div>
                      <div className="font-semibold text-gray-900">{model.specifications.dimensions.length}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{t.modelDetail.width}</div>
                      <div className="font-semibold text-gray-900">{model.specifications.dimensions.width}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{t.modelDetail.height}</div>
                      <div className="font-semibold text-gray-900">{model.specifications.dimensions.height}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{t.modelDetail.wheelbase}</div>
                      <div className="font-semibold text-gray-900">{model.specifications.dimensions.wheelbase}</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-sm text-gray-500 mb-1">{t.modelDetail.weight}</div>
                    <div className="font-semibold text-gray-900">{model.specifications.weight}</div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.modelDetail.safety}</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {model.specifications.safety[locale].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary-600 mr-2">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">{t.modelDetail.gallery}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {model.gallery.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden card-hover">
                <ImageWithFallback
                  src={image}
                  alt={`${model.name} - ${t.modelDetail.gallery} ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost of Ownership Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              {t.modelDetail.costOfOwnership}
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">{t.modelDetail.purchasePrice}</div>
                  <div className="text-2xl font-bold text-gray-900">{model.costOfOwnership.purchase[locale]}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">{t.modelDetail.annualEnergy}</div>
                  <div className="text-2xl font-bold text-gray-900">{model.costOfOwnership.annualEnergy[locale]}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">{t.modelDetail.annualMaintenance}</div>
                  <div className="text-2xl font-bold text-gray-900">{model.costOfOwnership.maintenance[locale]}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">{t.modelDetail.total5Years}</div>
                  <div className="text-2xl font-bold text-primary-600">{model.costOfOwnership.total5Years[locale]}</div>
                </div>
              </div>
              <div className="border-t pt-6">
                <p className="text-gray-700">
                  <strong className="text-accent-600">{locale === 'fr' ? 'Note:' : locale === 'ar' ? 'ملاحظة:' : 'Note:'}</strong> {model.costOfOwnership.note[locale]}
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
            {t.modelDetail.readyToDiscover.replace('{model}', model.name)}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t.modelDetail.readySubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={getLocalizedPath(`/contact?purpose=test-drive&model=${model.slug}`, locale)}
              className="btn-secondary bg-white text-primary-600 hover:bg-gray-100"
            >
              {t.common.bookTestDrive}
            </Link>
            <Link 
              href={getLocalizedPath(`/contact?purpose=quotation&model=${model.slug}`, locale)}
              className="btn-secondary border-2 border-white text-white hover:bg-white/10"
            >
              {t.common.requestQuote}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

