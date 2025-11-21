import Link from 'next/link'
import ImageWithFallback from '@/components/ImageWithFallback'

export const metadata = {
  title: 'JMEV Tunisia - Véhicules Électriques en Tunisie',
  description: 'Découvrez la gamme complète de véhicules électriques JMEV en Tunisie. Mobilité électrique moderne et abordable.',
}

// Model data
const featuredModels = [
  {
    slug: 'elight',
    name: 'ELIGHT',
    description: 'Véhicule électrique compact et urbain, parfait pour les déplacements quotidiens en ville.',
    image: '/images/models/elight-main.jpg',
    range: '200 km',
    battery: '30 kWh',
    power: '50 kW',
  },
  {
    slug: 'ev3',
    name: 'EV3',
    description: 'SUV électrique polyvalent, idéal pour les familles et les longues distances.',
    image: '/images/models/ev3-main.jpg',
    range: '350 km',
    battery: '55 kWh',
    power: '100 kW',
  },
  {
    slug: 'ev2',
    name: 'EV2',
    description: 'Berline électrique élégante, alliant confort et performance pour un usage professionnel.',
    image: '/images/models/ev2-main.jpg',
    range: '400 km',
    battery: '60 kWh',
    power: '120 kW',
  },
]

const features = [
  {
    title: 'Coût énergétique réduit',
    description: 'Réduisez vos dépenses de carburant jusqu\'à 80% par rapport aux véhicules thermiques. En Tunisie, l\'électricité coûte environ 0,150 TND/kWh.',
    icon: '💰',
  },
  {
    title: 'Mobilité écologique',
    description: 'Zéro émission de CO₂, contribuez à un air plus pur en Tunisie et réduisez votre empreinte carbone.',
    icon: '🌱',
  },
  {
    title: 'Service après-vente',
    description: 'Réseau de service certifié en Tunisie, garantie complète et pièces de rechange disponibles localement.',
    icon: '🔧',
  },
  {
    title: 'Réseau de recharge',
    description: 'Infrastructure de recharge en développement en Tunisie. Support pour la recharge à domicile et bornes publiques.',
    icon: '🔌',
  },
]

const testimonials = [
  {
    name: 'Ahmed Ben Ali',
    city: 'Tunis',
    text: 'J\'ai acheté mon ELIGHT il y a 6 mois. Les économies sur le carburant sont impressionnantes, et la voiture est parfaite pour la ville.',
    rating: 5,
  },
  {
    name: 'Fatma Trabelsi',
    city: 'Sfax',
    text: 'L\'EV3 est idéal pour ma famille. Nous faisons régulièrement des trajets Tunis-Sfax sans problème. Excellent rapport qualité-prix.',
    rating: 5,
  },
  {
    name: 'Mohamed Khelifi',
    city: 'Sousse',
    text: 'Service client excellent et véhicule très fiable. Je recommande JMEV Tunisia à tous ceux qui cherchent une alternative électrique.',
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-background.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Conduisez l&apos;Avenir de la{' '}
              <span className="text-primary-600">Mobilité Électrique</span> en Tunisie
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Découvrez la gamme complète de véhicules électriques JMEV. 
              Des solutions modernes, abordables et écologiques pour tous vos déplacements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/models" className="btn-primary text-lg px-8 py-4">
                Découvrir les Modèles
              </Link>
              <Link href="/contact?purpose=test-drive" className="btn-secondary text-lg px-8 py-4">
                Réserver un Essai
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Featured Models Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nos Modèles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de véhicules électriques adaptés à tous vos besoins
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
                      <div className="text-gray-500">Autonomie</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{model.battery}</div>
                      <div className="text-gray-500">Batterie</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{model.power}</div>
                      <div className="text-gray-500">Puissance</div>
                    </div>
                  </div>
                  <Link
                    href={`/models/${model.slug}`}
                    className="block w-full text-center btn-primary"
                  >
                    Voir les Détails
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
              Pourquoi Choisir JMEV en Tunisie ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des avantages concrets pour votre mobilité quotidienne
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md card-hover text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
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
                Financement & Aides Gouvernementales
              </h2>
              <p className="text-lg text-gray-600">
                Des solutions de financement adaptées et des incitations pour l&apos;achat de véhicules électriques
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Financement Personnalisé
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>Crédit auto sur mesure avec taux compétitifs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>Durée de remboursement jusqu&apos;à 7 ans</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>Premier versement à partir de 20%</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Aides & Incitations
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-accent-600 mr-2">✓</span>
                      <span>Exonération de certaines taxes pour les VE</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-600 mr-2">✓</span>
                      <span>Tarifs préférentiels pour les entreprises</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-600 mr-2">✓</span>
                      <span>Support pour l&apos;installation de bornes</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link href="/offers" className="btn-primary">
                  En Savoir Plus sur le Financement
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
              Témoignages Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez l&apos;expérience de nos clients en Tunisie
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md card-hover"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

