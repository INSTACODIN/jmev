import ImageWithFallback from '@/components/ImageWithFallback'

export const metadata = {
  title: 'Chargement & Autonomie - JMEV Tunisia',
  description: 'Tout ce que vous devez savoir sur la recharge de votre véhicule électrique JMEV en Tunisie.',
}

const chargingMethods = [
  {
    title: 'Recharge à Domicile',
    description: 'La solution la plus pratique et économique pour recharger votre véhicule au quotidien.',
    icon: '🏠',
    details: [
      'Installation d\'une borne de recharge à domicile',
      'Recharge pendant la nuit (tarif réduit)',
      'Coût moyen: 0,150 TND/kWh',
      'Temps de recharge: 6-9h selon le modèle',
      'Installation professionnelle garantie',
    ],
    image: '/images/charging/home-charging.jpg',
  },
  {
    title: 'Recharge Publique',
    description: 'Réseau de bornes publiques en développement en Tunisie pour vos déplacements.',
    icon: '🔌',
    details: [
      'Bornes de recharge rapide disponibles',
      'Temps de recharge: 30-45 minutes (80%)',
      'Localisation via applications mobiles',
      'Paiement par carte ou application',
      'Réseau en expansion continue',
    ],
    image: '/images/charging/public-charging.jpg',
  },
  {
    title: 'Recharge Rapide',
    description: 'Technologie de charge rapide pour les longs trajets et les urgences.',
    icon: '⚡',
    details: [
      'Charge jusqu\'à 80% en 30-45 minutes',
      'Idéal pour les trajets longue distance',
      'Disponible sur autoroutes et grandes villes',
      'Technologie DC (courant continu)',
      'Protection de la batterie intégrée',
    ],
    image: '/images/charging/fast-charging.jpg',
  },
]

const ranges = [
  {
    model: 'ELIGHT',
    city: '220 km',
    highway: '180 km',
    mixed: '200 km',
    note: 'Autonomie optimale en conduite urbaine',
  },
  {
    model: 'EV3',
    city: '380 km',
    highway: '320 km',
    mixed: '350 km',
    note: 'Parfait pour les trajets mixtes',
  },
  {
    model: 'EV2',
    city: '430 km',
    highway: '370 km',
    mixed: '400 km',
    note: 'Excellente autonomie pour tous les usages',
  },
]

const tips = [
  {
    title: 'Conduite Économique',
    description: 'Adoptez une conduite souple pour maximiser l\'autonomie. Utilisez le freinage régénératif.',
  },
  {
    title: 'Préconditionnement',
    description: 'Préchauffez ou refroidissez votre véhicule pendant la recharge pour économiser la batterie.',
  },
  {
    title: 'Planification',
    description: 'Planifiez vos trajets et identifiez les bornes de recharge disponibles sur votre itinéraire.',
  },
  {
    title: 'Entretien',
    description: 'Un entretien régulier garantit une autonomie optimale. Vérifiez régulièrement l\'état de la batterie.',
  },
]

export default function ChargingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-600 to-accent-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Chargement & Autonomie
            </h1>
            <p className="text-xl md:text-2xl text-accent-100">
              Tout ce que vous devez savoir sur la recharge de votre véhicule électrique en Tunisie
            </p>
          </div>
        </div>
      </section>

      {/* Charging Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Méthodes de Recharge
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Plusieurs options s&apos;offrent à vous pour recharger votre véhicule électrique
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
              Autonomie Réelle en Tunisie
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Autonomie estimée selon les conditions de conduite tunisiennes
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
                    <div className="text-sm text-gray-500 mb-1">Ville</div>
                    <div className="text-2xl font-bold text-primary-600">{range.city}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Autoroute</div>
                    <div className="text-2xl font-bold text-primary-600">{range.highway}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Mixte</div>
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
              <strong>Note:</strong> Les autonomies indiquées sont des estimations basées sur des conditions de conduite normales. 
              L&apos;autonomie réelle peut varier selon le style de conduite, la température, le relief et l&apos;utilisation des équipements.
            </p>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conseils pour Optimiser l&apos;Autonomie
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quelques astuces pour maximiser l&apos;autonomie de votre véhicule électrique
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
                Coût de Recharge en Tunisie
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comparaison des coûts de recharge pour 100 km
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-2">Recharge à domicile</div>
                  <div className="text-3xl font-bold text-accent-600">~2,5 TND</div>
                  <div className="text-xs text-gray-500 mt-1">pour 100 km</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-2">Recharge publique</div>
                  <div className="text-3xl font-bold text-primary-600">~4 TND</div>
                  <div className="text-xs text-gray-500 mt-1">pour 100 km</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-2">Véhicule thermique</div>
                  <div className="text-3xl font-bold text-gray-400 line-through">~12 TND</div>
                  <div className="text-xs text-gray-500 mt-1">pour 100 km</div>
                </div>
              </div>
              <div className="bg-accent-50 rounded-lg p-6 text-center">
                <p className="text-gray-700 font-semibold">
                  Économisez jusqu&apos;à <span className="text-accent-600 text-xl">70%</span> sur vos coûts de carburant
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
            Questions sur la Recharge ?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Notre équipe peut vous aider à installer une borne de recharge à domicile ou répondre à toutes vos questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact?purpose=charging" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Nous Contacter
            </a>
            <a href="/models" className="btn-secondary border-2 border-white text-white hover:bg-white/10">
              Découvrir les Modèles
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

