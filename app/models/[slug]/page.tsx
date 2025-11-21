import { notFound } from 'next/navigation'
import Link from 'next/link'
import ImageWithFallback from '@/components/ImageWithFallback'

// Model data - in a real app, this would come from a CMS or database
const models = {
  elight: {
    name: 'ELIGHT',
    slug: 'elight',
    category: 'urban',
    heroImage: '/images/models/elight-main.jpg',
    description: 'Véhicule électrique compact et urbain, parfait pour les déplacements quotidiens en ville.',
    targetCustomer: 'Idéal pour les citadins et les trajets quotidiens en milieu urbain.',
    usage: 'Parfait pour les déplacements quotidiens, les courses et les trajets courts en ville.',
    specifications: {
      range: '200 km',
      battery: '30 kWh',
      power: '50 kW',
      maxSpeed: '120 km/h',
      acceleration: '0-50 km/h en 4.5s',
      charging: {
        home: '6h (chargeur standard)',
        fast: '30min (charge rapide 80%)',
      },
      dimensions: {
        length: '3.6 m',
        width: '1.6 m',
        height: '1.5 m',
        wheelbase: '2.4 m',
      },
      weight: '1,200 kg',
      seats: '4',
      safety: [
        'Système de freinage ABS',
        'Airbags frontaux et latéraux',
        'Contrôle de stabilité électronique',
        'Caméra de recul',
        'Aide au stationnement',
      ],
    },
    gallery: [
      '/images/models/elight-main.jpg',
      '/images/models/elight-main.jpg',
      '/images/models/elight-main.jpg',
      '/images/models/elight-main.jpg',
    ],
    price: 'À partir de 45 000 TND',
    costOfOwnership: {
      purchase: '45 000 TND',
      annualEnergy: '1 200 TND',
      maintenance: '500 TND',
      total5Years: '51 500 TND',
      note: 'Économies estimées par rapport à un véhicule thermique: ~15 000 TND sur 5 ans',
    },
  },
  ev3: {
    name: 'EV3',
    slug: 'ev3',
    category: 'family',
    heroImage: '/images/models/ev3-main.jpg',
    description: 'SUV électrique polyvalent, idéal pour les familles et les longues distances.',
    targetCustomer: 'Parfait pour les familles et ceux qui recherchent plus d\'espace et d\'autonomie.',
    usage: 'Idéal pour les trajets familiaux, les voyages longue distance et les activités de loisirs.',
    specifications: {
      range: '350 km',
      battery: '55 kWh',
      power: '100 kW',
      maxSpeed: '150 km/h',
      acceleration: '0-100 km/h en 8.5s',
      charging: {
        home: '8h (chargeur standard)',
        fast: '40min (charge rapide 80%)',
      },
      dimensions: {
        length: '4.5 m',
        width: '1.8 m',
        height: '1.7 m',
        wheelbase: '2.7 m',
      },
      weight: '1,800 kg',
      seats: '5',
      safety: [
        'Système de freinage ABS avec EBD',
        '7 airbags',
        'Contrôle de stabilité électronique avancé',
        'Caméra 360°',
        'Détection d\'obstacles avant/arrière',
        'Aide au freinage d\'urgence',
      ],
    },
    gallery: [
      '/images/models/ev3-main.jpg',
      '/images/models/ev3-main.jpg',
      '/images/models/ev3-main.jpg',
      '/images/models/ev3-main.jpg',
    ],
    price: 'À partir de 75 000 TND',
    costOfOwnership: {
      purchase: '75 000 TND',
      annualEnergy: '1 800 TND',
      maintenance: '800 TND',
      total5Years: '84 400 TND',
      note: 'Économies estimées par rapport à un véhicule thermique: ~25 000 TND sur 5 ans',
    },
  },
  ev2: {
    name: 'EV2',
    slug: 'ev2',
    category: 'utility',
    heroImage: '/images/models/ev2-main.jpg',
    description: 'Berline électrique élégante, alliant confort et performance pour un usage professionnel.',
    targetCustomer: 'Conçu pour les professionnels et ceux qui recherchent élégance et performance.',
    usage: 'Parfait pour les trajets professionnels, les déplacements longue distance et le confort premium.',
    specifications: {
      range: '400 km',
      battery: '60 kWh',
      power: '120 kW',
      maxSpeed: '160 km/h',
      acceleration: '0-100 km/h en 7.2s',
      charging: {
        home: '9h (chargeur standard)',
        fast: '45min (charge rapide 80%)',
      },
      dimensions: {
        length: '4.8 m',
        width: '1.85 m',
        height: '1.5 m',
        wheelbase: '2.8 m',
      },
      weight: '1,900 kg',
      seats: '5',
      safety: [
        'Système de freinage ABS avec EBD avancé',
        '8 airbags',
        'Contrôle de stabilité électronique premium',
        'Caméra 360° avec vue aérienne',
        'Détection d\'obstacles 360°',
        'Freinage d\'urgence automatique',
        'Aide au maintien de voie',
      ],
    },
    gallery: [
      '/images/models/ev2-main.jpg',
      '/images/models/ev2-main.jpg',
      '/images/models/ev2-main.jpg',
      '/images/models/ev2-main.jpg',
    ],
    price: 'À partir de 85 000 TND',
    costOfOwnership: {
      purchase: '85 000 TND',
      annualEnergy: '2 000 TND',
      maintenance: '1 000 TND',
      total5Years: '97 000 TND',
      note: 'Économies estimées par rapport à un véhicule thermique: ~30 000 TND sur 5 ans',
    },
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const model = models[params.slug as keyof typeof models]
  
  if (!model) {
    return {
      title: 'Modèle non trouvé - JMEV Tunisia',
    }
  }

  return {
    title: `${model.name} - JMEV Tunisia`,
    description: model.description,
  }
}

export default function ModelDetailPage({ params }: { params: { slug: string } }) {
  const model = models[params.slug as keyof typeof models]

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
            {model.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/contact?purpose=test-drive&model=${model.slug}`} className="btn-primary text-lg px-8 py-4">
              Réserver un Essai
            </Link>
            <Link href={`/contact?purpose=quotation&model=${model.slug}`} className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4">
              Demander un Devis
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Vue d&apos;ensemble</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Client cible</h3>
                <p className="text-gray-600">{model.targetCustomer}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage recommandé</h3>
                <p className="text-gray-600">{model.usage}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Spécifications Techniques</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Autonomie</div>
                    <div className="text-2xl font-bold text-gray-900">{model.specifications.range}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Batterie</div>
                    <div className="text-2xl font-bold text-gray-900">{model.specifications.battery}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Puissance</div>
                    <div className="text-2xl font-bold text-gray-900">{model.specifications.power}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Vitesse maximale</div>
                    <div className="text-2xl font-bold text-gray-900">{model.specifications.maxSpeed}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Accélération</div>
                    <div className="text-2xl font-bold text-gray-900">{model.specifications.acceleration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Places</div>
                    <div className="text-2xl font-bold text-gray-900">{model.specifications.seats}</div>
                  </div>
                </div>

                <div className="border-t pt-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Recharge</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">À domicile</div>
                      <div className="font-semibold text-gray-900">{model.specifications.charging.home}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Charge rapide</div>
                      <div className="font-semibold text-gray-900">{model.specifications.charging.fast}</div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Dimensions</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Longueur</div>
                      <div className="font-semibold text-gray-900">{model.specifications.dimensions.length}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Largeur</div>
                      <div className="font-semibold text-gray-900">{model.specifications.dimensions.width}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Hauteur</div>
                      <div className="font-semibold text-gray-900">{model.specifications.dimensions.height}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Empattement</div>
                      <div className="font-semibold text-gray-900">{model.specifications.dimensions.wheelbase}</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-sm text-gray-500 mb-1">Poids</div>
                    <div className="font-semibold text-gray-900">{model.specifications.weight}</div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Équipements de Sécurité</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {model.specifications.safety.map((item, index) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Galerie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {model.gallery.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden card-hover">
                <ImageWithFallback
                  src={image}
                  alt={`${model.name} - Vue ${index + 1}`}
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
              Coût de Possession en Tunisie
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Prix d&apos;achat</div>
                  <div className="text-2xl font-bold text-gray-900">{model.costOfOwnership.purchase}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Énergie annuelle (estimée)</div>
                  <div className="text-2xl font-bold text-gray-900">{model.costOfOwnership.annualEnergy}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Maintenance annuelle</div>
                  <div className="text-2xl font-bold text-gray-900">{model.costOfOwnership.maintenance}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Total sur 5 ans</div>
                  <div className="text-2xl font-bold text-primary-600">{model.costOfOwnership.total5Years}</div>
                </div>
              </div>
              <div className="border-t pt-6">
                <p className="text-gray-700">
                  <strong className="text-accent-600">Note:</strong> {model.costOfOwnership.note}
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
            Prêt à découvrir le {model.name} ?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Réservez votre essai routier ou demandez un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/contact?purpose=test-drive&model=${model.slug}`}
              className="btn-secondary bg-white text-primary-600 hover:bg-gray-100"
            >
              Réserver un Essai
            </Link>
            <Link 
              href={`/contact?purpose=quotation&model=${model.slug}`}
              className="btn-secondary border-2 border-white text-white hover:bg-white/10"
            >
              Demander un Devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

