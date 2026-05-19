import type { Metadata } from 'next'
import { Geist, Libre_Baskerville } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Nav from './components/Nav'
import Link from 'next/link'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
})

const siteUrl = 'https://challengethat.com.au'
const defaultTitle = 'Challenge That | Hospitality Loyalty & Analytics Specialists'
const defaultDescription = 'Loyalty and CRM consulting and the ANALYTIQ analytics platform for Australian pubs, clubs and hospitality venues.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    type: 'website',
    siteName: 'Challenge That',
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${libreBaskerville.variable} h-full`}>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YDE23DLSGX" strategy="beforeInteractive" />
        <Script id="google-analytics" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YDE23DLSGX');
        `}</Script>
      </head>
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
    <footer className="bg-ct-dark text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/icons/White-logo-blue.png"
              alt="Challenge That"
              className="h-14 w-auto mb-4"
            />
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
                <Link href="/work" className="hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/move" className="hover:text-white transition-colors">
                  The MOVE Methodology
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
              <li className="flex items-start gap-2">
                <span>Maroubra, NSW, Australia</span>
              </li>
              <li>
                <a href="tel:0401379901" className="hover:text-white transition-colors">0401 379 901</a>
              </li>
              <li>
                <a href="mailto:info@challengethat.com.au" className="hover:text-white transition-colors">info@challengethat.com.au</a>
              </li>
              <li className="pt-1">
                <Link href="https://calendly.com/challenge-that/introduction" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Book a demo →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-ct-dark mt-12 pt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs">&copy; 2026 Challenge That Pty Ltd. ABN 84 009 230 433. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
