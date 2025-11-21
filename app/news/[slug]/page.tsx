import { notFound } from 'next/navigation'
import ImageWithFallback from '@/components/ImageWithFallback'
import Link from 'next/link'

// News articles data - in a real app, this would come from a CMS
const newsArticles: Record<string, {
  title: string
  excerpt: string
  image: string
  date: string
  category: string
  content: string[]
}> = {
  'nouveau-showroom-sfax': {
    title: 'Ouverture du Nouveau Showroom à Sfax',
    excerpt: 'JMEV Tunisia annonce l\'ouverture de son deuxième showroom à Sfax, offrant un meilleur accès aux véhicules électriques dans le sud de la Tunisie.',
    image: '/images/news/showroom-sfax.jpg',
    date: '15 octobre 2024',
    category: 'Événements',
    content: [
      'JMEV Tunisia est fier d\'annoncer l\'ouverture de son nouveau showroom à Sfax, marquant une étape importante dans notre expansion en Tunisie.',
      'Ce nouveau point de vente, situé dans le centre-ville de Sfax, permettra aux clients du sud de la Tunisie d\'avoir un accès direct à notre gamme complète de véhicules électriques.',
      'Le showroom dispose d\'un espace d\'exposition moderne de 300 m², présentant tous nos modèles : ELIGHT, EV3 et EV2. Les visiteurs pourront découvrir les dernières innovations en matière de mobilité électrique et bénéficier de conseils personnalisés de notre équipe d\'experts.',
      'En plus de l\'exposition, le nouveau showroom comprend également un atelier de service après-vente certifié, garantissant un support technique de qualité pour tous les propriétaires de véhicules JMEV dans la région.',
      'L\'ouverture de ce showroom s\'inscrit dans notre stratégie de développement visant à rendre la mobilité électrique accessible dans toutes les régions de Tunisie.',
    ],
  },
  'reseau-recharge-expansion': {
    title: 'Expansion du Réseau de Recharge en Tunisie',
    excerpt: 'Nouveau partenariat pour installer 50 bornes de recharge rapide sur les principales routes tunisiennes d\'ici fin 2024.',
    image: '/images/news/charging-network.jpg',
    date: '8 octobre 2024',
    category: 'Infrastructure',
    content: [
      'JMEV Tunisia annonce un partenariat stratégique pour l\'installation de 50 nouvelles bornes de recharge rapide en Tunisie.',
      'Ces bornes seront installées sur les principales routes et autoroutes, facilitant les déplacements longue distance pour les propriétaires de véhicules électriques.',
      'Le réseau couvrira les axes principaux : Tunis-Sfax, Tunis-Sousse, Tunis-Bizerte, et les principales zones urbaines.',
      'Chaque borne sera équipée de la technologie de charge rapide DC, permettant de recharger un véhicule jusqu\'à 80% en 30 à 45 minutes.',
      'Cette expansion s\'accompagne du développement d\'une application mobile permettant de localiser les bornes, vérifier leur disponibilité et effectuer le paiement.',
    ],
  },
  'offre-speciale-ramadan': {
    title: 'Offre Spéciale Ramadan 2024',
    excerpt: 'Profitez de réductions exceptionnelles et d\'avantages supplémentaires sur tous nos modèles pendant le mois de Ramadan.',
    image: '/images/news/special-offer.jpg',
    date: '1 octobre 2024',
    category: 'Offres',
    content: [
      'À l\'occasion du mois de Ramadan, JMEV Tunisia propose des offres exceptionnelles sur toute sa gamme de véhicules électriques.',
      'Les clients bénéficient d\'une réduction de 5 000 TND sur tous les modèles, ainsi que de conditions de financement avantageuses.',
      'En plus de la réduction, nous offrons l\'installation gratuite d\'une borne de recharge à domicile pour tout achat effectué pendant cette période.',
      'Cette offre est valable jusqu\'à la fin du mois de Ramadan et peut être combinée avec nos solutions de financement.',
      'Profitez de cette opportunité unique pour passer à la mobilité électrique avec des conditions exceptionnelles.',
    ],
  },
  'ev2-lancement': {
    title: 'Lancement de la Nouvelle EV2 en Tunisie',
    excerpt: 'Découvrez la nouvelle berline électrique EV2, alliant élégance, performance et autonomie exceptionnelle.',
    image: '/images/models/ev2-main.jpg',
    date: '20 septembre 2024',
    category: 'Nouveautés',
    content: [
      'JMEV Tunisia est ravi d\'annoncer l\'arrivée de la nouvelle EV2, la berline électrique premium de la gamme JMEV.',
      'L\'EV2 se distingue par son design élégant, ses performances exceptionnelles et son autonomie de 400 km, idéale pour les trajets longue distance.',
      'Équipée d\'une batterie de 60 kWh et d\'un moteur de 120 kW, l\'EV2 offre une expérience de conduite premium avec une accélération de 0 à 100 km/h en 7,2 secondes.',
      'Le véhicule intègre les dernières technologies de sécurité et de confort, incluant un système de caméra 360°, une aide au maintien de voie et un système de freinage d\'urgence automatique.',
      'L\'EV2 est disponible dès maintenant dans nos showrooms avec des options de financement adaptées.',
    ],
  },
  'partenariat-entreprises': {
    title: 'Nouveau Programme pour les Entreprises',
    excerpt: 'JMEV Tunisia lance un programme dédié aux entreprises avec des avantages fiscaux et des solutions de flotte.',
    image: '/images/news/business-partnership.jpg',
    date: '10 septembre 2024',
    category: 'Entreprises',
    content: [
      'JMEV Tunisia lance un programme spécialement conçu pour les entreprises souhaitant électrifier leur flotte de véhicules.',
      'Ce programme offre des avantages exclusifs : tarifs préférentiels, financement jusqu\'à 100%, et gestion simplifiée de flotte.',
      'Les entreprises bénéficient également d\'avantages fiscaux significatifs, avec des possibilités d\'amortissement accéléré et d\'exonérations de certaines taxes.',
      'Nous proposons un service de maintenance dédié, incluant des contrats de service personnalisés et un support technique 24/7.',
      'Notre équipe commerciale B2B est disponible pour accompagner les entreprises dans leur transition vers la mobilité électrique.',
    ],
  },
  'temoignage-client-500': {
    title: '500 Véhicules JMEV sur les Routes Tunisiennes',
    excerpt: 'Nous célébrons un jalon important : plus de 500 véhicules électriques JMEV circulent désormais en Tunisie.',
    image: '/images/news/milestone-500.jpg',
    date: '25 août 2024',
    category: 'Milestone',
    content: [
      'JMEV Tunisia célèbre aujourd\'hui un jalon important : plus de 500 véhicules électriques JMEV circulent désormais sur les routes tunisiennes.',
      'Ce succès témoigne de la confiance croissante des Tunisiens envers la mobilité électrique et de la qualité de nos véhicules.',
      'Depuis notre lancement en 2020, nous avons constamment travaillé à rendre la mobilité électrique accessible, avec des modèles adaptés au marché tunisien.',
      'Nous remercions tous nos clients pour leur confiance et nous nous engageons à continuer à développer l\'infrastructure et les services nécessaires.',
      'Cet objectif atteint marque le début d\'une nouvelle phase de croissance, avec de nouveaux modèles et une expansion continue du réseau de service.',
    ],
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = newsArticles[params.slug]
  
  if (!article) {
    return {
      title: 'Article non trouvé - JMEV Tunisia',
    }
  }

  return {
    title: `${article.title} - JMEV Tunisia`,
    description: article.excerpt,
  }
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = newsArticles[params.slug]

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container-custom relative z-10 pb-12">
          <div className="max-w-4xl">
            <div className="mb-4">
              <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {article.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{article.title}</h1>
            <div className="text-primary-100">{article.date}</div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {article.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Intéressé par nos véhicules ?
            </h2>
            <p className="text-gray-600 mb-6">
              Découvrez notre gamme complète de véhicules électriques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/models" className="btn-primary">
                Découvrir les Modèles
              </Link>
              <Link href="/contact" className="btn-secondary">
                Nous Contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to News */}
      <section className="section-padding bg-white border-t">
        <div className="container-custom">
          <Link href="/news" className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center">
            ← Retour aux actualités
          </Link>
        </div>
      </section>
    </div>
  )
}

