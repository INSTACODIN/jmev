import Link from 'next/link'

export const metadata = {
  title: 'Offres & Financement - JMEV Tunisia',
  description: 'Découvrez nos solutions de financement et offres spéciales pour l\'achat de véhicules électriques JMEV en Tunisie.',
}

const financingPlans = [
  {
    type: 'particuliers',
    title: 'Financement Particuliers',
    description: 'Solutions de crédit adaptées aux particuliers avec des conditions avantageuses.',
    features: [
      'Taux d\'intérêt compétitifs à partir de 4.5%',
      'Durée de remboursement jusqu\'à 7 ans',
      'Premier versement à partir de 20%',
      'Dossier simplifié et réponse rapide',
      'Assurance véhicule incluse dans le financement',
    ],
    example: {
      vehicle: 'ELIGHT',
      price: '45 000 TND',
      downPayment: '9 000 TND (20%)',
      monthly: '~550 TND',
      duration: '7 ans',
    },
  },
  {
    type: 'entreprises',
    title: 'Financement Entreprises',
    description: 'Solutions dédiées aux entreprises et flottes avec avantages fiscaux.',
    features: [
      'Taux préférentiels pour les entreprises',
      'Financement jusqu\'à 100% du véhicule',
      'Durée flexible selon vos besoins',
      'Avantages fiscaux et amortissements',
      'Gestion de flotte simplifiée',
      'Maintenance incluse (option)',
    ],
    example: {
      vehicle: 'EV3',
      price: '75 000 TND',
      downPayment: '0 TND (100% financé)',
      monthly: '~1 200 TND',
      duration: '5 ans',
    },
  },
]

const specialOffers = [
  {
    title: 'Offre Lancement',
    description: 'Réduction de 5 000 TND sur tous les modèles',
    validUntil: '31 décembre 2024',
    badge: 'LIMITÉ',
  },
  {
    title: 'Reprise Véhicule',
    description: 'Reprise de votre ancien véhicule avec bonus de 3 000 TND',
    validUntil: 'Permanent',
    badge: 'POPULAIRE',
  },
  {
    title: 'Pack Famille',
    description: 'Installation de borne de recharge à domicile offerte',
    validUntil: '30 novembre 2024',
    badge: 'NOUVEAU',
  },
]

const incentives = [
  {
    title: 'Exonération de Taxes',
    description: 'Réduction ou exonération de certaines taxes d\'importation et de circulation pour les véhicules électriques.',
  },
  {
    title: 'Crédit d\'Impôt',
    description: 'Avantages fiscaux pour les entreprises investissant dans des véhicules électriques.',
  },
  {
    title: 'Subventions Énergie',
    description: 'Aide à l\'installation de bornes de recharge à domicile ou en entreprise.',
  },
]

export default function OffersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Offres & Financement
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Des solutions de financement adaptées pour rendre la mobilité électrique accessible à tous
            </p>
          </div>
        </div>
      </section>

      {/* Financing Plans */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Solutions de Financement
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choisissez la formule qui correspond le mieux à votre situation
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
                  <div className="text-sm text-gray-600 mb-2">Exemple de financement</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Véhicule</div>
                      <div className="font-semibold text-gray-900">{plan.example.vehicle}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Prix</div>
                      <div className="font-semibold text-gray-900">{plan.example.price}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Acompte</div>
                      <div className="font-semibold text-gray-900">{plan.example.downPayment}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Mensualité</div>
                      <div className="font-semibold text-primary-600">{plan.example.monthly}</div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    Durée: <span className="font-semibold text-gray-900">{plan.example.duration}</span>
                  </div>
                </div>
                <Link
                  href={`/contact?purpose=financing&type=${plan.type}`}
                  className="block w-full text-center btn-primary"
                >
                  Demander un Devis de Financement
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
              Offres Spéciales
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profitez de nos offres limitées et promotions exclusives
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
                  <div className="text-sm text-gray-500">Valable jusqu&apos;au</div>
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
                Aides & Incitations Gouvernementales
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Bénéficiez des avantages et incitations pour l&apos;achat de véhicules électriques en Tunisie
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
                Les conditions et montants des aides peuvent varier. Contactez-nous pour plus d&apos;informations sur les incitations disponibles.
              </p>
              <Link href="/contact?purpose=incentives" className="btn-primary">
                En Savoir Plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à passer à l&apos;électrique ?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour vous proposer la meilleure solution de financement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?purpose=financing" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Demander un Devis
            </Link>
            <Link href="/contact" className="btn-secondary border-2 border-white text-white hover:bg-white/10">
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

