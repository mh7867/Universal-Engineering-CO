import React from "react"
import type { Metadata } from 'next'
import { Michroma, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const michroma = Michroma({ weight: '400', subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Universal Engineering - MV & LV Switchgear Panels',
  description: 'Trusted electrical distribution systems and custom-built panel solutions for industrial and commercial applications.',
  icons: {
    icon: [
      {
        url: '/ue-favicon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/ue-favicon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/ue-favicon.png',
        type: 'image/png',
      },
    ],
    apple: '/ue-favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
