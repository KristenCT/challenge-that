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
  },
  {
    name: 'Kristen Makin',
    role: 'CRM & Loyalty',
    initials: 'KM',
    photo: '/assets/team/kristen-makin.png',
    bio: 'A highly regarded CRM Specialist with a particular focus on customer strategy and business transformation through MarTech. Kristen has extensive experience designing Loyalty and VIP programs, and developing high performance teams.',
    expertise: ['Consulting', 'CRM', 'Salesforce', 'Loyalty', 'Marketing Automation', 'Personalisation', 'Data & Analytics', 'Customer Lifecycle', 'Business Intelligence'],
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
                <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
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
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to work together?</h2>
            <p className="text-gray-600 mb-8">
              Whether you&rsquo;re looking for loyalty strategy consulting or the ANALYTIQ analytics platform, we
              &rsquo;re here to help.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://calendly.com/challenge-that/introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-ct-slate text-white font-medium rounded-lg hover:bg-ct-slate-dark transition-colors"
              >
                Talk to us about loyalty
              </Link>
              <Link
                href="https://calendly.com/challenge-that/introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-ct-teal text-white font-medium rounded-lg hover:bg-ct-teal-mid transition-colors"
              >
                Book an ANALYTIQ demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
