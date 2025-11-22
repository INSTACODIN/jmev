import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LocaleHtml } from '@/components/LocaleHtml'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JMEV Tunisia - Véhicules Électriques en Tunisie',
  description: 'Découvrez la gamme complète de véhicules électriques JMEV en Tunisie.',
}

// Root layout - provides html/body structure
// Locale-specific layout is in [locale]/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" dir="ltr">
      <body className={inter.className}>
        <LocaleHtml>
          {children}
        </LocaleHtml>
      </body>
    </html>
  )
}

