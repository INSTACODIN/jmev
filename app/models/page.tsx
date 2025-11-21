'use client'

import { useState } from 'react'
import Link from 'next/link'
import ImageWithFallback from '@/components/ImageWithFallback'

export default function ModelsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const models = [
    {
      slug: 'elight',
      name: 'ELIGHT',
      category: 'urban',
      description: 'Véhicule électrique compact et urbain, parfait pour les déplacements quotidiens en ville.',
      image: '/images/models/elight-main.jpg',
      range: '200 km',
      battery: '30 kWh',
      power: '50 kW',
      charging: '6h (domicile) / 30min (rapide)',
      price: 'À partir de 45 000 TND',
    },
    {
      slug: 'ev3',
      name: 'EV3',
      category: 'family',
      description: 'SUV électrique polyvalent, idéal pour les familles et les longues distances.',
      image: '/images/models/ev3-main.jpg',
      range: '350 km',
      battery: '55 kWh',
      power: '100 kW',
      charging: '8h (domicile) / 40min (rapide)',
      price: 'À partir de 75 000 TND',
    },
    {
      slug: 'ev2',
      name: 'EV2',
      category: 'utility',
      description: 'Berline électrique élégante, alliant confort et performance pour un usage professionnel.',
      image: '/images/models/ev2-main.jpg',
      range: '400 km',
      battery: '60 kWh',
      power: '120 kW',
      charging: '9h (domicile) / 45min (rapide)',
      price: 'À partir de 85 000 TND',
    },
  ]

  const filters = [
    { id: 'all', label: 'Tous les modèles' },
    { id: 'urban', label: 'Urbain' },
    { id: 'family', label: 'Famille' },
    { id: 'utility', label: 'Utilitaire' },
  ]

  const filteredModels = activeFilter === 'all' 
    ? models 
    : models.filter(model => model.category === activeFilter)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Notre Gamme de Véhicules Électriques
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Découvrez nos modèles adaptés à tous vos besoins de mobilité en Tunisie
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b sticky top-20 z-40 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredModels.map((model) => (
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
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{model.name}</h2>
                  <p className="text-gray-600 mb-4">{model.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm border-t pt-4">
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
                    <div>
                      <div className="font-semibold text-gray-900">{model.charging}</div>
                      <div className="text-gray-500">Recharge</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-lg font-bold text-primary-600">{model.price}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={`/models/${model.slug}`}
                      className="flex-1 text-center btn-primary"
                    >
                      Voir les Détails
                    </Link>
                    <Link
                      href={`/contact?purpose=quotation&model=${model.slug}`}
                      className="flex-1 text-center btn-secondary"
                    >
                      Demander un Devis
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredModels.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Aucun modèle trouvé pour cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d&apos;aide pour choisir ?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour vous conseiller et répondre à toutes vos questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Nous Contacter
            </Link>
            <Link href="/contact?purpose=test-drive" className="btn-secondary border-2 border-white text-white hover:bg-white/10">
              Réserver un Essai
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

