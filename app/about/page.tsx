import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Challenge That',
  description:
    'Challenge That was built by hospitality marketing specialists with 40+ years of combined Loyalty and CRM experience.',
}

const team = [
  {
    name: 'Fiona Nilsson',
    role: 'Marketing & Strategy',
    initials: 'FN',
    photo: '/assets/team/fiona-nilsson.png',
    bio: 'Experienced Marketing Director, and passionate customer champion. Fiona has a solid track record developing successful commercial and marketing strategies with particular focus on category growth, customer acquisition and customer retention.',
    expertise: ['Consulting', 'Revenue Operations', 'Strategy & Planning', 'CRM', 'Loyalty', 'Digital Marketing', 'Affiliate Marketing', 'Acquisition', 'Campaign Management'],
    bookAuthor: true,
  },
  {
    name: 'Kristen Makin',
    role: 'CRM & Loyalty',
    initials: 'KM',
    photo: '/assets/team/kristen-makin.png',
    bio: 'A highly regarded CRM Specialist with a particular focus on customer strategy and business transformation through MarTech. Kristen has extensive experience designing Loyalty and VIP programs, and developing high performance teams.',
    expertise: ['Consulting', 'CRM', 'Salesforce', 'Loyalty', 'Marketing Automation', 'Personalisation', 'Data & Analytics', 'Customer Lifecycle', 'Business Intelligence'],
    bookAuthor: true,
  },
  {
    name: 'Ankur Ghai',
    role: 'Data & Analysis',
    initials: 'AG',
    photo: '/assets/team/ankur-ghai.png',
    bio: 'Experienced Data Scientist empowering businesses to harness the power of data. Ankur thrives on translating complex data into actionable business insights and helps businesses implement data warehousing, data integration, ETL processes and creates predictive CRM data models.',
    expertise: ['Data Science', 'Tableau', 'Salesforce', 'ETL', 'Data Modelling', 'Power BI', 'Business Intelligence', 'Python', 'R'],
  },
]

const differentiators = [
  'Loyalty program design isn\'t just about rewards — it\'s about influencing behaviour and delivering value for both your members and your business.',
  'CRM isn\'t just a piece of technology — it\'s how you manage your member relationships. That\'s where we start, before looking at platforms.',
  'We\'re platform-agnostic, so our advice is shaped by what\'s right for your business — not a vendor.',
  'Data often tells a different story to what we expect. We help you uncover it and turn it into clear action.',
  'Creative matters, but performance matters more. We focus on what actually drives results.',
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ct-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              We&rsquo;ve sat in the seat you&rsquo;re in.
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Challenge That was built by hospitality marketing specialists who spent years frustrated by the same
              problems our clients face &mdash; loyalty programs that don&rsquo;t differentiate, data that&rsquo;s
              inaccessible, and insights that arrive too late to act on.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-ct-teal text-xs font-bold tracking-widest uppercase mb-4">Our credentials</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">40+ years of combined experience.</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We bring over 40 years of combined Loyalty and CRM experience across international sportsbooks, online
              gaming, land-based casinos, and Australian pubs and clubs. We specialise in three disciplines that work
              best when they work together: Marketing Strategy, CRM and loyalty, and Data Analysis.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">What makes us different.</h2>
            <div className="space-y-4">
              {differentiators.map((item, i) => (
                <div key={i} className="flex gap-5 p-6 bg-white rounded-xl border border-gray-100">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ct-teal-subtle flex items-center justify-center text-ct-teal font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Published Work */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-ct-teal text-xs font-bold tracking-widest uppercase mb-4">Published work</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-10">The MOVE Methodology.</h2>
          <div className="flex flex-col md:flex-row gap-10 items-center bg-gray-50 rounded-2xl p-8 md:p-10">
            <div className="shrink-0">
              <Image
                src="/assets/icons/transparent_book_cover.png"
                alt="The MOVE Methodology — The Missing Manual for CRM"
                width={180}
                height={230}
                className="drop-shadow-xl"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1">The MOVE Methodology</h3>
              <p className="text-ct-teal font-medium text-sm mb-4">The Missing Manual for CRM</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A practical four-step framework for aligning CRM strategy, operations, and technology &mdash; giving your whole team a common language and a clear system that actually gets used. Complete with practical frameworks and ready-to-use templates.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Co-authored by <span className="font-semibold text-gray-700">Ian Sampson</span>, <span className="font-semibold text-gray-700">Kristen Makin</span> and <span className="font-semibold text-gray-700">Fiona Nilsson</span>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/move"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-ct-dark text-white font-medium text-sm rounded-lg hover:opacity-80 transition-opacity"
                >
                  About the book
                </Link>
                <Link
                  href="https://www.amazon.com.au/MOVE-Methodology-Missing-Manual-CRM/dp/192327743X/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 font-medium text-sm rounded-lg hover:border-gray-400 transition-colors"
                >
                  Buy on Amazon
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-ct-teal text-xs font-bold tracking-widest uppercase mb-4">The people behind it</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-12">Meet the team.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {team.map((person) => (
              <div key={person.name} className="flex flex-col">
                <div className="w-full aspect-square relative rounded-2xl overflow-hidden mb-6 bg-gray-100">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                  {person.bookAuthor && (
                    <span className="shrink-0 px-2 py-1 bg-ct-teal-subtle text-ct-teal text-xs font-semibold rounded-full">
                      Published Author
                    </span>
                  )}
                </div>
                <p className="text-ct-teal font-medium text-sm mb-4">{person.role}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{person.bio}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {person.expertise.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ct-dark py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to work together?</h2>
            <p className="text-ct-gray-mid mb-8 leading-relaxed">
              Whether you&rsquo;re looking for loyalty strategy consulting or the ANALYTIQ analytics platform, the first conversation is free.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://calendly.com/challenge-that/introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-ct-dark font-semibold rounded-lg hover:bg-ct-slate-subtle transition-colors"
              >
                Book a free consultation
              </Link>
              <Link
                href="/work"
                className="px-6 py-3 border border-gray-600 text-white font-medium rounded-lg hover:border-gray-400 transition-colors"
              >
                See our work →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
