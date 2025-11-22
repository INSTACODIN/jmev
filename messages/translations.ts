// Translations as TypeScript constants to avoid webpack JSON import issues

export const fr = {
  common: {
    home: 'Accueil',
    models: 'Modèles',
    offers: 'Offres',
    charging: 'Chargement',
    about: 'À propos',
    news: 'Actualités',
    contact: 'Contact',
    testDrive: 'Essai routier',
    readMore: 'Lire la suite',
    learnMore: 'En savoir plus',
    getQuote: 'Demander un devis',
    bookTestDrive: 'Réserver un essai',
    contactUs: 'Nous contacter',
    discoverModels: 'Découvrir les modèles',
    viewDetails: 'Voir les détails',
    requestQuote: 'Demander un devis',
    allModels: 'Tous les modèles',
    urban: 'Urbain',
    family: 'Famille',
    utility: 'Utilitaire',
    noResults: 'Aucun modèle trouvé pour cette catégorie.',
    loading: 'Chargement...',
    send: 'Envoyer',
    sending: 'Envoi en cours...',
    required: '*',
    selectCity: 'Sélectionnez votre ville',
    selectModel: 'Sélectionnez un modèle',
    selectPurpose: "Sélectionnez l'objet de votre demande",
  },
  home: {
    title: "Conduisez l'Avenir de la Mobilité Électrique en Tunisie",
    subtitle: 'Découvrez la gamme complète de véhicules électriques JMEV. Des solutions modernes, abordables et écologiques pour tous vos déplacements.',
    discoverModels: 'Découvrir les Modèles',
    bookTestDrive: 'Réserver un Essai',
    ourModels: 'Nos Modèles',
    modelsSubtitle: 'Une gamme complète de véhicules électriques adaptés à tous vos besoins',
    whyChoose: 'Pourquoi Choisir JMEV en Tunisie ?',
    whyChooseSubtitle: 'Des avantages concrets pour votre mobilité quotidienne',
    features: {
      cost: {
        title: 'Coût énergétique réduit',
        description: "Réduisez vos dépenses de carburant jusqu'à 80% par rapport aux véhicules thermiques. En Tunisie, l'électricité coûte environ 0,150 TND/kWh.",
      },
      eco: {
        title: 'Mobilité écologique',
        description: "Zéro émission de CO₂, contribuez à un air plus pur en Tunisie et réduisez votre empreinte carbone.",
      },
      service: {
        title: 'Service après-vente',
        description: 'Réseau de service certifié en Tunisie, garantie complète et pièces de rechange disponibles localement.',
      },
      network: {
        title: 'Réseau de recharge',
        description: 'Infrastructure de recharge en développement en Tunisie. Support pour la recharge à domicile et bornes publiques.',
      },
    },
    financing: {
      title: 'Financement & Aides Gouvernementales',
      subtitle: "Des solutions de financement adaptées et des incitations pour l'achat de véhicules électriques",
      personalized: {
        title: 'Financement Personnalisé',
        items: {
          '1': 'Crédit auto sur mesure avec taux compétitifs',
          '2': "Durée de remboursement jusqu'à 7 ans",
          '3': 'Premier versement à partir de 20%',
        },
      },
      incentives: {
        title: 'Aides & Incitations',
        items: {
          '1': 'Exonération de certaines taxes pour les VE',
          '2': 'Tarifs préférentiels pour les entreprises',
          '3': "Support pour l'installation de bornes",
        },
      },
      learnMore: 'En Savoir Plus sur le Financement',
    },
    testimonials: {
      title: 'Témoignages Clients',
      subtitle: "Découvrez l'expérience de nos clients en Tunisie",
    },
  },
  models: {
    title: 'Notre Gamme de Véhicules Électriques',
    subtitle: 'Découvrez nos modèles adaptés à tous vos besoins de mobilité en Tunisie',
    range: 'Autonomie',
    battery: 'Batterie',
    power: 'Puissance',
    charging: 'Recharge',
    priceFrom: 'À partir de',
    needHelp: "Besoin d'aide pour choisir ?",
    needHelpSubtitle: 'Notre équipe est à votre disposition pour vous conseiller et répondre à toutes vos questions',
  },
} as const

// For now, just export fr. We can add en and ar later or keep using JSON for them
// This is a workaround to fix the webpack issue



