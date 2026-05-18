import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Challenge That | Hospitality Loyalty & Analytics Specialists',
  description:
    'Loyalty and CRM consulting and the ANALYTIQ analytics platform for Australian pubs, clubs and hospitality venues.',
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs font-bold tracking-widest uppercase text-ct-teal mb-6">
              Australian Hospitality Specialists
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Australia&rsquo;s hospitality customer and loyalty specialists.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              We help pubs, clubs and leisure venues understand their customers, build smarter loyalty strategies, and
              unlock the data already sitting in their systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/loyalty"
                className="px-6 py-3 bg-ct-slate text-white font-medium rounded-lg hover:bg-ct-slate-dark transition-colors"
              >
                Explore loyalty strategy
              </Link>
              <Link
                href="/analytiq"
                className="px-6 py-3 bg-ct-teal text-white font-medium rounded-lg hover:bg-ct-teal-mid transition-colors"
              >
                See ANALYTIQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Most venues are missing opportunities &mdash; without knowing it.
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Your loyalty program runs on Gold, Silver and Bronze. Your data sits in systems your marketing team
                can&rsquo;t access. Your best customers are being treated the same as everyone else &mdash; regardless
                of their actual value to your venue. And some of them have already quietly left.
              </p>
              <p className="text-gray-900 font-medium">
                We fix that. With strategy tailored to your venue, technology that works for your team, and data that
                finally tells the full story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Offerings */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Loyalty & CRM */}
            <div className="rounded-2xl bg-ct-slate-subtle border border-ct-slate-subtle p-10 flex flex-col">
              <span className="text-xs font-bold tracking-widest uppercase text-ct-slate bg-ct-slate-subtle px-3 py-1 rounded-full w-fit mb-6">
                Consulting
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Loyalty &amp; CRM Strategy</h3>
              <p className="text-gray-600 leading-relaxed flex-1 mb-8">
                Platform-agnostic consulting. We work with any Loyalty or CRM system to build programs that actually
                recognise and retain your best customers.
              </p>
              <Link
                href="/loyalty"
                className="inline-flex items-center gap-2 font-medium text-ct-slate hover:text-ct-slate-dark transition-colors"
              >
                Learn more <span aria-hidden>→</span>
              </Link>
            </div>

            {/* ANALYTIQ */}
            <div className="rounded-2xl bg-ct-teal-subtle border border-ct-teal-subtle p-10 flex flex-col">
              <span className="text-xs font-bold tracking-widest uppercase text-ct-teal bg-ct-teal-subtle px-3 py-1 rounded-full w-fit mb-6">
                Platform
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ANALYTIQ</h3>
              <p className="text-gray-600 leading-relaxed flex-1 mb-8">
                Our proprietary analytics platform. Self-serve data and AI-powered insights built specifically for
                hospitality teams. No analysts required.
              </p>
              <Link
                href="/analytiq"
                className="inline-flex items-center gap-2 font-medium text-ct-teal hover:text-ct-teal-mid transition-colors"
              >
                Learn more <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="bg-ct-dark py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-ct-teal-light text-xs font-bold tracking-widest uppercase mb-4">Our experience</p>
            <p className="text-4xl font-bold text-white mb-6">40+ years of combined Loyalty and CRM experience.</p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Senior marketing roles at international sportsbooks, online gaming operators, land-based casinos, and
              Australian pubs and clubs. We&rsquo;ve sat in the seat you&rsquo;re in &mdash; and we know what actually
              works.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/about"
                className="px-5 py-2.5 rounded-lg border border-gray-600 text-white text-sm font-medium hover:border-gray-400 transition-colors"
              >
                Meet the team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
