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
              Customer &amp; Loyalty Specialists for the Hospitality Industry.
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
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs font-bold tracking-widest uppercase text-ct-slate bg-ct-slate-subtle px-3 py-1 rounded-full">
                  Consulting
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/icons/transparent_Strategy.png" alt="" width={72} height={72} />
              </div>
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
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs font-bold tracking-widest uppercase text-ct-teal bg-ct-teal-subtle px-3 py-1 rounded-full">
                  Platform
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/icons/transparent_Analysis_2.png" alt="" width={72} height={72} />
              </div>
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

      {/* Contact */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-ct-teal text-xs font-bold tracking-widest uppercase mb-4">Contact us</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Let&rsquo;s talk.</h2>
              <p className="text-gray-600 leading-relaxed mb-10">
                Whether you&rsquo;re looking to improve your loyalty program, get more from your CRM, or see ANALYTIQ in action &mdash; we&rsquo;d love to hear from you.
              </p>
              <ul className="space-y-5 text-gray-700">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-ct-teal shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Maroubra, NSW, Australia
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-ct-teal shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
                  </svg>
                  <a href="tel:0401379901" className="hover:text-ct-teal transition-colors">0401 379 901</a>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-ct-teal shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <a href="mailto:info@challengethat.com.au" className="hover:text-ct-teal transition-colors">info@challengethat.com.au</a>
                </li>
              </ul>
            </div>
            <form action="mailto:info@challengethat.com.au" method="post" encType="text/plain" className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                  <input type="text" name="name" required className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ct-teal focus:border-transparent text-sm" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Venue / Company</label>
                  <input type="text" name="venue" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ct-teal focus:border-transparent text-sm" placeholder="Your venue or company" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <input type="email" name="email" required className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ct-teal focus:border-transparent text-sm" placeholder="you@yourvenue.com.au" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">What are you looking for help with?</label>
                <textarea name="message" rows={4} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ct-teal focus:border-transparent text-sm resize-none" placeholder="Tell us a bit about your venue and what you&rsquo;re trying to achieve..." />
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-ct-teal text-white font-medium rounded-lg hover:bg-ct-teal-mid transition-colors">
                Send message
              </button>
              <p className="text-xs text-gray-400 text-center">Or <a href="https://calendly.com/challenge-that/introduction" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">book a time directly</a> if you prefer.</p>
            </form>
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
