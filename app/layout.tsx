import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
import Link from 'next/link'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Challenge That | Hospitality Loyalty & Analytics Specialists',
  description:
    'Loyalty and CRM consulting and the ANALYTIQ analytics platform for Australian pubs, clubs and hospitality venues.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="font-bold text-xl text-white mb-4">
              Challenge<span className="text-teal-400">That</span>
            </p>
            <p className="text-sm leading-relaxed">
              Australia&rsquo;s hospitality customer and loyalty specialists. Helping pubs, clubs and leisure venues
              understand their customers and unlock the data in their systems.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/loyalty" className="hover:text-white transition-colors">
                  Loyalty &amp; CRM Strategy
                </Link>
              </li>
              <li>
                <Link href="/analytiq" className="hover:text-white transition-colors">
                  ANALYTIQ Platform
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get in touch</h3>
            <ul className="space-y-3 text-sm">
              <li>challengethat.com.au</li>
              <li>
                <Link href="https://calendly.com/challenge-that/introduction" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Book a demo
                </Link>
              </li>
              <li>
                <Link href="https://calendly.com/challenge-that/introduction" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Book a consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-xs">&copy; 2026 Challenge That. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
