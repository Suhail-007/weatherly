import './globals.css'
import { Ubuntu } from 'next/font/google'

export const metadata = {
  title: 'Weatherly',
  description: 'Simple weather app',
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
