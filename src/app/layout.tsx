import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { BookingProvider } from '@/context/BookingContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Melmua - Premium Makeup Artist Booking Platform',
  description: 'Book professional makeup artists for bridal, party, editorial, and everyday looks. Find verified artists with portfolios and reviews.',
  keywords: 'makeup artist, booking, bridal makeup, party makeup, professional makeup',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <BookingProvider>
          {children}
        </BookingProvider>
      </body>
    </html>
  )
}