import type { Metadata } from 'next'
import { Navbar } from '@/components/navigation/Navbar'
import { Footer } from '@/components/navigation/Footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Accio Software Solutions | Build Faster',
  description: 'Custom SaaS, web development, and full-stack solutions. We get things done.',
  keywords: 'software development, SaaS, web development, custom solutions',
  authors: [{ name: 'Accio Software Solutions' }],
  openGraph: {
    type: 'website',
    url: 'https://acciosolutions.com',
    title: 'Accio Software Solutions',
    description: 'Custom SaaS, web development, and full-stack solutions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Accio Software Solutions',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased">
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
