import Link from 'next/link'
import ImageWithFallback from '@/components/ImageWithFallback'
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
    title: t.news.title || 'News - JMEV Tunisia',
    description: t.news.subtitle || 'Stay informed about the latest news, events and JMEV updates in Tunisia.',
  }
}

export default async function NewsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const t = getTranslations(locale)

  // News articles data - in a real app, this would come from a CMS
  const newsArticles = [
    {
      slug: 'nouveau-showroom-sfax',
      title: locale === 'fr' 
        ? 'Ouverture du Nouveau Showroom à Sfax'
        : locale === 'ar'
        ? 'افتتاح صالة العرض الجديدة في صفاقس'
        : 'Opening of New Showroom in Sfax',
      excerpt: locale === 'fr'
        ? 'JMEV Tunisia annonce l\'ouverture de son deuxième showroom à Sfax, offrant un meilleur accès aux véhicules électriques dans le sud de la Tunisie.'
        : locale === 'ar'
        ? 'JMEV Tunisia تعلن عن افتتاح صالة العرض الثانية في صفاقس، مما يوفر وصولاً أفضل للمركبات الكهربائية في جنوب تونس.'
        : 'JMEV Tunisia announces the opening of its second showroom in Sfax, providing better access to electric vehicles in southern Tunisia.',
      image: '/images/news/showroom-sfax.jpg',
      date: locale === 'fr' ? '15 octobre 2024' : locale === 'ar' ? '15 أكتوبر 2024' : 'October 15, 2024',
      category: locale === 'fr' ? 'Événements' : locale === 'ar' ? 'أحداث' : 'Events',
    },
    {
      slug: 'reseau-recharge-expansion',
      title: locale === 'fr'
        ? 'Expansion du Réseau de Recharge en Tunisie'
        : locale === 'ar'
        ? 'توسيع شبكة الشحن في تونس'
        : 'Expansion of Charging Network in Tunisia',
      excerpt: locale === 'fr'
        ? 'Nouveau partenariat pour installer 50 bornes de recharge rapide sur les principales routes tunisiennes d\'ici fin 2024.'
        : locale === 'ar'
        ? 'شراكة جديدة لتركيب 50 محطة شحن سريع على الطرق الرئيسية التونسية بحلول نهاية عام 2024.'
        : 'New partnership to install 50 fast charging stations on major Tunisian roads by end of 2024.',
      image: '/images/news/charging-network.jpg',
      date: locale === 'fr' ? '8 octobre 2024' : locale === 'ar' ? '8 أكتوبر 2024' : 'October 8, 2024',
      category: locale === 'fr' ? 'Infrastructure' : locale === 'ar' ? 'البنية التحتية' : 'Infrastructure',
    },
    {
      slug: 'offre-speciale-ramadan',
      title: locale === 'fr'
        ? 'Offre Spéciale Ramadan 2024'
        : locale === 'ar'
        ? 'عرض خاص رمضان 2024'
        : 'Special Ramadan 2024 Offer',
      excerpt: locale === 'fr'
        ? 'Profitez de réductions exceptionnelles et d\'avantages supplémentaires sur tous nos modèles pendant le mois de Ramadan.'
        : locale === 'ar'
        ? 'استفد من تخفيضات استثنائية ومزايا إضافية على جميع موديلاتنا خلال شهر رمضان.'
        : 'Take advantage of exceptional discounts and additional benefits on all our models during the month of Ramadan.',
      image: '/images/news/special-offer.jpg',
      date: locale === 'fr' ? '1 octobre 2024' : locale === 'ar' ? '1 أكتوبر 2024' : 'October 1, 2024',
      category: locale === 'fr' ? 'Offres' : locale === 'ar' ? 'عروض' : 'Offers',
    },
    {
      slug: 'ev2-lancement',
      title: locale === 'fr'
        ? 'Lancement de la Nouvelle EV2 en Tunisie'
        : locale === 'ar'
        ? 'إطلاق EV2 الجديدة في تونس'
        : 'Launch of New EV2 in Tunisia',
      excerpt: locale === 'fr'
        ? 'Découvrez la nouvelle berline électrique EV2, alliant élégance, performance et autonomie exceptionnelle.'
        : locale === 'ar'
        ? 'اكتشف السيارة الكهربائية الجديدة EV2، التي تجمع بين الأناقة والأداء والمدى الاستثنائي.'
        : 'Discover the new EV2 electric sedan, combining elegance, performance and exceptional range.',
      image: '/images/models/ev2-main.jpg',
      date: locale === 'fr' ? '20 septembre 2024' : locale === 'ar' ? '20 سبتمبر 2024' : 'September 20, 2024',
      category: locale === 'fr' ? 'Nouveautés' : locale === 'ar' ? 'جديد' : 'New',
    },
    {
      slug: 'partenariat-entreprises',
      title: locale === 'fr'
        ? 'Nouveau Programme pour les Entreprises'
        : locale === 'ar'
        ? 'برنامج جديد للشركات'
        : 'New Program for Businesses',
      excerpt: locale === 'fr'
        ? 'JMEV Tunisia lance un programme dédié aux entreprises avec des avantages fiscaux et des solutions de flotte.'
        : locale === 'ar'
        ? 'JMEV Tunisia تطلق برنامجاً مخصصاً للشركات مع مزايا ضريبية وحلول أسطول.'
        : 'JMEV Tunisia launches a dedicated program for businesses with tax benefits and fleet solutions.',
      image: '/images/news/business-partnership.jpg',
      date: locale === 'fr' ? '10 septembre 2024' : locale === 'ar' ? '10 سبتمبر 2024' : 'September 10, 2024',
      category: locale === 'fr' ? 'Entreprises' : locale === 'ar' ? 'شركات' : 'Business',
    },
    {
      slug: 'temoignage-client-500',
      title: locale === 'fr'
        ? '500 Véhicules JMEV sur les Routes Tunisiennes'
        : locale === 'ar'
        ? '500 مركبة JMEV على الطرق التونسية'
        : '500 JMEV Vehicles on Tunisian Roads',
      excerpt: locale === 'fr'
        ? 'Nous célébrons un jalon important : plus de 500 véhicules électriques JMEV circulent désormais en Tunisie.'
        : locale === 'ar'
        ? 'نحتفل بمعلم مهم: أكثر من 500 مركبة كهربائية JMEV تسير الآن في تونس.'
        : 'We celebrate an important milestone: more than 500 JMEV electric vehicles are now on Tunisian roads.',
      image: '/images/news/milestone-500.jpg',
      date: locale === 'fr' ? '25 août 2024' : locale === 'ar' ? '25 أغسطس 2024' : 'August 25, 2024',
      category: locale === 'fr' ? 'Milestone' : locale === 'ar' ? 'معلم' : 'Milestone',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.news.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              {t.news.subtitle}
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
                href={getLocalizedPath(`/news/${article.slug}`, locale)}
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
                    {t.common.readMore} →
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
              {t.news.stayInformed}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.news.newsletterSubtitle}
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={t.news.emailPlaceholder}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                {t.news.subscribe}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

