import ImageWithFallback from '@/components/ImageWithFallback'

export const metadata = {
  title: 'À Propos - JMEV Tunisia',
  description: 'Découvrez l\'histoire de JMEV Tunisia, distributeur officiel de véhicules électriques en Tunisie.',
}

const values = [
  {
    title: 'Innovation',
    description: 'Nous croyons en l\'innovation technologique pour une mobilité durable.',
    icon: '💡',
  },
  {
    title: 'Durabilité',
    description: 'Engagés pour un avenir plus propre et respectueux de l\'environnement.',
    icon: '🌍',
  },
  {
    title: 'Accessibilité',
    description: 'Rendre la mobilité électrique accessible à tous les Tunisiens.',
    icon: '🤝',
  },
  {
    title: 'Service',
    description: 'Un service client d\'excellence et un accompagnement personnalisé.',
    icon: '⭐',
  },
]

const timeline = [
  {
    year: '2020',
    title: 'Fondation',
    description: 'Création de JMEV Tunisia avec la vision de démocratiser la mobilité électrique en Tunisie.',
  },
  {
    year: '2021',
    title: 'Premier Showroom',
    description: 'Ouverture de notre premier showroom à Tunis pour présenter la gamme JMEV.',
  },
  {
    year: '2022',
    title: 'Expansion',
    description: 'Développement du réseau de service après-vente et partenariats avec des installateurs de bornes.',
  },
  {
    year: '2023',
    title: 'Croissance',
    description: 'Plus de 500 véhicules JMEV sur les routes tunisiennes et réseau de recharge en expansion.',
  },
  {
    year: '2024',
    title: 'Avenir',
    description: 'Continuer à développer l\'infrastructure de recharge et élargir notre gamme de modèles.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              À Propos de JMEV Tunisia
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Votre partenaire de confiance pour la mobilité électrique en Tunisie
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
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  JMEV Tunisia est le distributeur officiel des véhicules électriques JMEV en Tunisie. 
                  Fondée en 2020, notre mission est de rendre la mobilité électrique accessible à tous les Tunisiens.
                </p>
                <p>
                  Nous croyons fermement que l&apos;avenir de la mobilité passe par l&apos;électrique, 
                  et nous nous engageons à offrir des véhicules de qualité, un service après-vente 
                  exceptionnel et un accompagnement personnalisé pour chaque client.
                </p>
                <p>
                  En partenariat avec JMEV, nous apportons une expertise internationale tout en 
                  restant ancrés dans la réalité tunisienne, avec des solutions adaptées au marché local.
                </p>
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
              Nos Valeurs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
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
              Notre Parcours
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les étapes clés de notre développement en Tunisie
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
              Partenariat avec JMEV
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              En tant que distributeur officiel JMEV en Tunisie, nous bénéficions d&apos;un accès direct 
              aux dernières innovations et technologies de la marque. Ce partenariat nous permet de vous 
              offrir des véhicules de qualité supérieure, un support technique de niveau international, 
              et des garanties complètes.
            </p>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                  <div className="text-gray-600">Véhicules certifiés</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">5 ans</div>
                  <div className="text-gray-600">Garantie batterie</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support technique</div>
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
            Rejoignez la Révolution Électrique
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Découvrez comment nous pouvons vous accompagner dans votre transition vers la mobilité électrique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/models" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Découvrir les Modèles
            </a>
            <a href="/contact" className="btn-secondary border-2 border-white text-white hover:bg-white/10">
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

