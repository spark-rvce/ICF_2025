import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SPARK: Industry Visit Guide - ICF 2025',
  description: 'Comprehensive guide for the three-day industrial visit to Integral Coach Factory Chennai by Team SPARK, RV College of Engineering. Includes schedules, instructions, transportation details, and FAQ.',
  keywords: ['ICF', 'Integral Coach Factory', 'Chennai', 'Industrial Visit', 'Railway', 'Manufacturing', 'Education', 'Industry Tour', 'SPARK', 'RVCE', 'RV College of Engineering'],
  authors: [{ name: 'Team SPARK' }],
  creator: 'Team SPARK',
  publisher: 'RV College of Engineering - Team SPARK',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://icf-industry-visit.vercel.app',
    title: 'SPARK: Industry Visit Guide - ICF 2025',
    description: 'Comprehensive guide for the three-day industrial visit to Integral Coach Factory Chennai by Team SPARK, RV College of Engineering',
    siteName: 'SPARK Industry Visit Guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SPARK: Industry Visit Guide - ICF 2025',
    description: 'Comprehensive guide for the three-day industrial visit to Integral Coach Factory Chennai by Team SPARK, RV College of Engineering',
  },
  metadataBase: new URL('https://icf-industry-visit.vercel.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-secondary-50 dark:bg-secondary-900 transition-colors duration-300 flex flex-col">
            <Navigation />
            <main className="pt-20 sm:pt-24 flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
