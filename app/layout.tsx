import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/components/LanguageProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JMEV Tunisia - Véhicules Électriques en Tunisie',
  description: 'Découvrez la gamme complète de véhicules électriques JMEV en Tunisie. ELIGHT, EV3, EV2 - Mobilité électrique moderne et abordable.',
  keywords: 'JMEV, véhicules électriques, Tunisie, ELIGHT, EV3, EV2, voiture électrique',
  openGraph: {
    title: 'JMEV Tunisia - Véhicules Électriques',
    description: 'Mobilité électrique moderne en Tunisie',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}

