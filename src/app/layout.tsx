import '../styles/globals.css'
import Navbar from '../components/navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MySite',
  description: 'Event planning website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
