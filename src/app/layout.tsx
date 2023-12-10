import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Source_Sans_3 } from 'next/font/google'

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Gabriel Balda: ID.me Frontend Take Home Exercise',
  description: 'ID.me Frontend Take Home Exercise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sourceSans3.className}>{children}</body>
    </html>
  )
}


