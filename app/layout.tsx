// CRITICAL: This CSS import must always be present for styling to work!
// DO NOT REMOVE THIS IMPORT - it's essential for all page styling
import './globals.css'

export const metadata = {
  title: 'Daniel Levitt | Football Data Analyst',
  description: 'The ultimate surfing analytics platform. Track WSL performance, predict wave conditions, analyze surfer stats, and compete in bracket prediction games. Real-time data, advanced metrics, and comprehensive insights for surfers, fans, and bettors.',
  keywords: 'surfing analytics, wave predictions, WSL, surf data, performance tracking, bracket predictions, surf betting, wave conditions, surfer stats',
  authors: [{ name: 'Beneath The Barrel' }],
  creator: 'Beneath The Barrel',
  publisher: 'Beneath The Barrel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://beneaththebarrel.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Beneath The Barrel - Advanced Surfing Analytics',
    description: 'Track WSL performance, predict waves, analyze stats, and compete in bracket games',
    url: 'https://beneaththebarrel.com',
    siteName: 'Beneath The Barrel',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Beneath The Barrel - Surfing Analytics Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beneath The Barrel - Advanced Surfing Analytics',
    description: 'Track WSL performance, predict waves, analyze stats, and compete in bracket games',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
