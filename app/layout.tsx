import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ejservices.ci'),
  title: {
    default: 'ENSEA Junior Services | 33 ans d\'excellence statistique',
    template: '%s | ENSEA Junior Services',
  },
  description:
    'ENSEA Junior Services (EJS), Junior-Entreprise de l\'ENSEA à Abidjan. Statistique, data science, études de marché depuis 1992.',
  keywords: ['statistique', 'data science', 'économétrie', 'ENSEA', 'Abidjan', 'junior entreprise', 'études de marché'],
  authors: [{ name: 'ENSEA Junior Services' }],
  openGraph: {
    title: 'ENSEA Junior Services — Excellence statistique depuis 1992',
    description: 'Junior-Entreprise de l\'ENSEA à Abidjan. Statistique, informatique, économétrie.',
    type: 'website',
    locale: 'fr_CI',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ENSEA Junior Services',
    description: 'Junior-Entreprise de l\'ENSEA à Abidjan. Statistique, informatique, économétrie.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Loader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
