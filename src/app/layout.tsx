import type { Metadata } from 'next'
import { Archivo, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const display = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-display' })
const body = IBM_Plex_Sans({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  title: 'TPL Company',
  description: 'TPL Company is a one-person AI and machine learning engineering practice in Amsterdam: retrieval, NLP and LLM systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  )
}
