import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NGENTECH | Coming Soon',
  description: 'The future of Technology with deep research',
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
