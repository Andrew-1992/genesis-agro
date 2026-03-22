import type { Metadata } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const interTight = Inter_Tight({ 
  subsets: ['latin'],
  variable: '--font-inter-tight',
})

export const metadata: Metadata = {
  title: 'Genesis Agro Enterprises | Growing South Sudan\'s Future',
  description: 'Empowering farmers, strengthening food security, and building a sustainable agricultural economy in South Sudan.',
  keywords: 'agriculture, South Sudan, farming, sustainability, food security, agribusiness',
  openGraph: {
    title: 'Genesis Agro Enterprises',
    description: 'Growing South Sudan\'s Future, One Harvest at a Time',
    url: 'https://genesisagro.com',
    siteName: 'Genesis Agro Enterprises',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="font-body bg-cream">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}