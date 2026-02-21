import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Tomas Santa Cruz | Full Stack Developer',
  description:
    'Tomas Santa Cruz - Full Stack Developer specialized in React, Next.js and Python. Building digital systems that help businesses grow.',
  generator: 'Next.js',
  keywords: [
    'Full Stack Developer',
    'React',
    'Next.js',
    'Python',
    'Web Development',
    'Freelance Developer',
  ],
  icons: {
    icon: [{ url: '/logo.png', sizes: 'any', type: 'image/png' }],
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f0f14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
