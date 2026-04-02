// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

// Add Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const interTight = Inter_Tight({ 
  subsets: ['latin'],
  variable: '--font-inter-tight',
})

export const metadata: Metadata = {
  title: {
    default: 'Trans Nile Agro Ltd | Growing South Sudan\'s Future',
    template: '%s | Trans Nile Agro Ltd'
  },
  description: 'Empowering farmers, strengthening food security, and building a sustainable agricultural economy in South Sudan.',
  icons: {
    icon: '/logo-v5.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <head>
        {/* Font Awesome CDN - Backup if package doesn't work */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="font-body bg-cream">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}