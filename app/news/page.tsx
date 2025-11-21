import Link from 'next/link'
import ImageWithFallback from '@/components/ImageWithFallback'

export const metadata = {
  title: 'Actualités - JMEV Tunisia',
  description: 'Restez informé des dernières actualités, événements et nouveautés JMEV en Tunisie.',
}

// News articles data - in a real app, this would come from a CMS
const newsArticles = [
  {
    slug: 'nouveau-showroom-sfax',
    title: 'Ouverture du Nouveau Showroom à Sfax',
    excerpt: 'JMEV Tunisia annonce l\'ouverture de son deuxième showroom à Sfax, offrant un meilleur accès aux véhicules électriques dans le sud de la Tunisie.',
    image: '/images/news/showroom-sfax.jpg',
    date: '15 octobre 2024',
    category: 'Événements',
  },
  {
    slug: 'reseau-recharge-expansion',
    title: 'Expansion du Réseau de Recharge en Tunisie',
    excerpt: 'Nouveau partenariat pour installer 50 bornes de recharge rapide sur les principales routes tunisiennes d\'ici fin 2024.',
    image: '/images/news/charging-network.jpg',
    date: '8 octobre 2024',
    category: 'Infrastructure',
  },
  {
    slug: 'offre-speciale-ramadan',
    title: 'Offre Spéciale Ramadan 2024',
    excerpt: 'Profitez de réductions exceptionnelles et d\'avantages supplémentaires sur tous nos modèles pendant le mois de Ramadan.',
    image: '/images/news/special-offer.jpg',
    date: '1 octobre 2024',
    category: 'Offres',
  },
  {
    slug: 'ev2-lancement',
    title: 'Lancement de la Nouvelle EV2 en Tunisie',
    excerpt: 'Découvrez la nouvelle berline électrique EV2, alliant élégance, performance et autonomie exceptionnelle.',
    image: '/images/models/ev2-main.jpg',
    date: '20 septembre 2024',
    category: 'Nouveautés',
  },
  {
    slug: 'partenariat-entreprises',
    title: 'Nouveau Programme pour les Entreprises',
    excerpt: 'JMEV Tunisia lance un programme dédié aux entreprises avec des avantages fiscaux et des solutions de flotte.',
    image: '/images/news/business-partnership.jpg',
    date: '10 septembre 2024',
    category: 'Entreprises',
  },
  {
    slug: 'temoignage-client-500',
    title: '500 Véhicules JMEV sur les Routes Tunisiennes',
    excerpt: 'Nous célébrons un jalon important : plus de 500 véhicules électriques JMEV circulent désormais en Tunisie.',
    image: '/images/news/milestone-500.jpg',
    date: '25 août 2024',
    category: 'Milestone',
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Actualités
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Restez informé des dernières actualités et événements JMEV en Tunisie
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group"
              >
                <div className="relative h-48 bg-gray-100">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3">{article.excerpt}</p>
                  <div className="mt-4 text-primary-600 font-semibold group-hover:underline">
                    Lire la suite →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Restez Informé
            </h2>
            <p className="text-gray-600 mb-6">
              Abonnez-vous à notre newsletter pour recevoir les dernières actualités et offres exclusives
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                S&apos;abonner
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

