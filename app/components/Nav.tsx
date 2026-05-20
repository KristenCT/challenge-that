'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/assets/logos/CT-logo-transparrenthdv2.png"
              alt="Challenge That"
              width={80}
              height={80}
              className="h-16 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/loyalty" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Loyalty &amp; CRM
            </Link>
            <Link href="/analytiq" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/icons/analytiq-teal-grey-full.svg" alt="ANALYTIQ" className="h-5 w-auto" />
            </Link>
            <Link href="/insights" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Insights
            </Link>
            <Link href="/work" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Our Work
            </Link>
            <Link href="/move" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              The Book
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link
              href="https://calendly.com/challenge-that/introduction"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-ct-teal text-white text-sm font-medium hover:bg-ct-teal-mid transition-colors"
            >
              Book a demo
            </Link>
          </nav>

          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="md:hidden py-4 border-t border-gray-100 flex flex-col gap-4">
            <Link href="/loyalty" className="text-sm font-medium text-gray-700 py-1" onClick={() => setOpen(false)}>
              Loyalty &amp; CRM
            </Link>
            <Link href="/analytiq" className="text-sm font-medium text-gray-700 py-1 flex items-center" onClick={() => setOpen(false)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/icons/analytiq-teal-grey-full.svg" alt="ANALYTIQ" className="h-5 w-auto" />
            </Link>
            <Link href="/insights" className="text-sm font-medium text-gray-700 py-1" onClick={() => setOpen(false)}>
              Insights
            </Link>
            <Link href="/work" className="text-sm font-medium text-gray-700 py-1" onClick={() => setOpen(false)}>
              Our Work
            </Link>
            <Link href="/move" className="text-sm font-medium text-gray-700 py-1" onClick={() => setOpen(false)}>
              The Book
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 py-1" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link
              href="https://calendly.com/challenge-that/introduction"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-ct-teal text-white text-sm font-medium w-fit"
              onClick={() => setOpen(false)}
            >
              Book a demo
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
