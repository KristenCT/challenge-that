import type { Metadata } from 'next'
import Link from 'next/link'
import TestimonialCarousel from '../components/TestimonialCarousel'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Our Work | Challenge That',
  description: 'Case studies from Challenge That - loyalty program design, CRM strategy and digital transformation for Australian hospitality and tourism venues.',
  openGraph: {
    title: 'Our Work | Challenge That',
    description: 'Case studies from Challenge That - loyalty program design, CRM strategy and digital transformation for Australian hospitality and tourism venues.',
    url: 'https://challengethat.com.au/work',
  },
}

const additionalTestimonials = [
  {
    quote: 'Working with Kristen and Fiona helped clarify our goals and understand why our existing practices and systems weren\'t delivering what we needed. Their industry knowledge and ability to understand our challenges was key to defining our pathway forward. They guided us toward genuine solutions and supported us throughout the process. I\'d happily recommend them for their professionalism, insight, and collaborative approach.',
    attribution: 'Michelle Nielsen',
    role: 'Chief Commercial Officer, Holman Barnes Group',
    photo: '/assets/partnerpictures/michelle-nielsen.jpeg',
  },
]

const caseStudies = [
  {
    client: 'The Fraternity Club',
    sector: 'Pub & Club',
    challenge: 'The Fraternity Club\'s membership program was underperforming, with ad hoc promotions and limited visibility into member data, making it difficult to drive revenue strategically.',
    solution: 'Challenge That designed and implemented a customer-centric marketing strategy with a focus on loyalty, gaming promotions, and digital enablement. A new rewards program was developed, and supporting technology was selected and deployed to drive engagement.',
    retained: true,
    metrics: [
      { value: '+90', label: 'place increase in ranking by Profit per machine over 12 months' },
      { value: '+33%', label: 'food & beverage member revenue increase' },
      { value: '+42%', label: 'active membership YoY growth' },
      { value: '+17%', label: 'increase in cross-spending ratio' },
    ],
    services: ['Marketing Strategy', 'Reward Program re-vamp', 'Digital Enablement', 'Member Insights & Analysis'],
    quote: 'Challenge That provided the strategic leadership we needed to scale and grow The Fraternity Club. Their expertise has driven over 20% year-over-year growth while enhancing member engagement.',
    attribution: 'Glenn Ward',
    role: 'CEO, The Fraternity Club',
    photo: '/assets/partnerpictures/glenn-ward.png',
  },
  {
    client: 'Mounties Group',
    sector: 'Multi-venue Group',
    challenge: 'As NSW\'s largest pub and club group, Mounties had undergone significant expansion and diversification. Their loyalty program was heavily gaming-focused, and they sought a more inclusive offering for all members across 10 properties.',
    solution: 'Challenge That developed a scalable, purpose-fit loyalty program aligned with Mounties\' business growth. The strategy incorporated a refined customer value proposition and tiered membership structure, with a phased rollout ensuring continued support for gaming customers while expanding engagement across the broader membership base.',
    retained: true,
    metrics: null,
    outcomes: [
      'Enhanced loyalty proposition integrating benefits across 10 properties',
      'Program expanded to cover Holiday Resorts, Gyms, and Medical Services',
      'Phased rollout protecting gaming revenue while growing broader membership engagement',
    ],
    services: ['Data Consolidation', 'Loyalty Program Development', 'Customer Value Proposition', 'Customer Insights & Analysis'],
    quote: 'Challenge That has delivered multiple CRM projects, loyalty program improvements, and Martech selections. Their direct, results-driven approach ensures rapid progress and ROI.',
    attribution: 'Dave Callan',
    role: 'Chief Experience Officer, Mounties Group',
    photo: '/assets/partnerpictures/dave-callan.jpeg',
  },
  {
    client: 'Mindil Beach Casino & Resort',
    sector: 'Casino & Resort',
    challenge: 'MBCR embarked on a digital transformation to upgrade technology, revamp its loyalty program, and better understand customer behaviour. Due to staffing changes, the project had lost direction and momentum.',
    solution: 'Challenge That conducted strategic business sessions in Darwin, realigning MBCR\'s digital transformation roadmap. Key priorities were identified to enhance customer acquisition, retention, and satisfaction.',
    retained: true,
    metrics: null,
    outcomes: [
      'A defined capability roadmap with clear priorities',
      'A structured loyalty program strategy',
      'A shortlist of verified software vendors',
      'A marketing playbook to enhance customer experience',
    ],
    services: ['Customer Strategy & UX', 'CRM & Loyalty Program Optimisation', 'Data Driven Customer Insights', 'Vendor Selection'],
    quote: 'Challenge That provided clarity on customer segmentation through advanced data modeling. Their expertise in UX and technology has been invaluable.',
    attribution: 'Karley McRae',
    role: 'Executive Marketing Manager, MBCR',
    photo: '/assets/partnerpictures/karley-mcrae.png',
  },
  {
    client: 'Destination NSW',
    sector: 'Tourism & Government',
    partner: 'In partnership with HAVAS',
    challenge: 'Destination NSW was advancing its digital transformation with over 300 pages of external research. Challenge That was engaged to convert these insights into actionable strategies aligned to internal business processes.',
    solution: 'Working with HAVAS, Challenge That conducted strategy sessions to validate recommendations against internal business processes. A phased transformation plan was developed for immediate implementation.',
    retained: false,
    metrics: null,
    outcomes: [
      'A clear B2B & B2C strategy',
      'Optimised use of first-party data',
      'A roadmap for marketing automation & personalisation',
      'A structured Preference Centre framework',
    ],
    services: ['Customer Experience Strategy', 'Personalisation Framework', 'Marketing Automation', 'Preference Centre Development'],
    quote: 'Working with Challenge That is a breath of fresh air! Their solutions are practical, actionable, and operationally sound. We need consultants who tell it like it is - and Challenge That delivers.',
    attribution: 'Michaela Aguila',
    role: 'Destination NSW',
    photo: '/assets/partnerpictures/michaela-aguila.png',
  },
]

export default function Work() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ct-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-ct-teal text-xs font-bold tracking-widest uppercase mb-4">Our work</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Results that speak for themselves.
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              From single-venue clubs to NSW&rsquo;s largest pub group, we&rsquo;ve helped Australian hospitality and tourism organisations transform their loyalty programs, unlock their data, and build CRM strategies that drive real revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          {caseStudies.map((cs, i) => (
            <ScrollReveal key={cs.client}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>

              {/* Left: Details */}
              <div className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-ct-teal-subtle text-ct-teal">
                    {cs.sector}
                  </span>
                  {cs.retained && (
                    <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">
                      Retained client
                    </span>
                  )}
                  {cs.partner && (
                    <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">
                      {cs.partner}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  {cs.client}
                </h2>

                <div className="space-y-5 mb-8">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Challenge</p>
                    <p className="text-gray-600 leading-relaxed text-sm">{cs.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Solution</p>
                    <p className="text-gray-600 leading-relaxed text-sm">{cs.solution}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Services provided</p>
                  <div className="flex flex-wrap gap-2">
                    {cs.services.map((s) => (
                      <span key={s} className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Results + Quote */}
              <div className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                {/* Metrics */}
                {cs.metrics ? (
                  <div className="bg-ct-dark rounded-2xl p-8 mb-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-ct-teal-light mb-6">Results</p>
                    <div className="grid grid-cols-2 gap-6">
                      {cs.metrics.map((m) => (
                        <div key={m.value}>
                          <p className="text-3xl font-bold text-white mb-1">{m.value}</p>
                          <p className="text-sm text-gray-400 leading-snug">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : cs.outcomes ? (
                  <div className="bg-gray-50 rounded-2xl p-10 mb-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Outcomes delivered</p>
                    <ul className="space-y-5">
                      {cs.outcomes.map((o) => (
                        <li key={o} className="flex gap-3 text-base text-gray-700 leading-snug">
                          <span className="text-ct-teal mt-0.5 shrink-0 font-bold">✓</span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-ct-teal text-xs font-bold tracking-widest uppercase mb-4 text-center">What clients say</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-14 text-center">
            Straight from the people we work with.
          </h2>
          <TestimonialCarousel
            testimonials={[
              ...caseStudies.map(cs => ({
                quote: cs.quote,
                attribution: cs.attribution,
                role: cs.role,
                photo: cs.photo,
              })),
              ...additionalTestimonials,
            ]}
          />
        </div>
      </section>

      {/* Partner Logo Carousel */}
      <section className="bg-white py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">Clients &amp; partners</p>
          <p className="text-gray-500 text-sm">Venues and organisations that trusted us to fix what wasn&rsquo;t working</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-14 animate-marquee w-max">
            {[
              { src: '/assets/partners/mounties.png',         alt: 'Mounties' },
              { src: '/assets/partners/mindil.png',           alt: 'Mindil Beach' },
              { src: '/assets/partners/frat.png',             alt: 'Frat Club' },
              { src: '/assets/partners/wests.jpg',            alt: 'Wests Ashfield' },
              { src: '/assets/partners/ulldulla.png',         alt: 'Ulladulla' },
              { src: '/assets/partners/the-star.png',         alt: 'The Star' },
              { src: '/assets/partners/crown-resorts.webp',   alt: 'Crown Resorts' },
              { src: '/assets/partners/destination-nsw.png',  alt: 'Destination NSW' },
              { src: '/assets/partners/kayo.webp',            alt: 'Kayo' },
              { src: '/assets/partners/tdc.png',              alt: 'TDC' },
              { src: '/assets/partners/mycar.png',            alt: 'mycar' },
              { src: '/assets/partners/adma.png',             alt: 'ADMA' },
              { src: '/assets/partners/KR.webp',              alt: 'KR' },
              { src: '/assets/partners/cela.webp',            alt: 'CELA' },
              { src: '/assets/partners/gravity-lab.png',      alt: 'Gravity Lab' },
              { src: '/assets/partners/christians-saving.png',alt: 'Christians Saving' },
              { src: '/assets/partners/mounties.png',         alt: 'Mounties' },
              { src: '/assets/partners/mindil.png',           alt: 'Mindil Beach' },
              { src: '/assets/partners/frat.png',             alt: 'Frat Club' },
              { src: '/assets/partners/wests.jpg',            alt: 'Wests Ashfield' },
              { src: '/assets/partners/ulldulla.png',         alt: 'Ulladulla' },
              { src: '/assets/partners/the-star.png',         alt: 'The Star' },
              { src: '/assets/partners/crown-resorts.webp',   alt: 'Crown Resorts' },
              { src: '/assets/partners/destination-nsw.png',  alt: 'Destination NSW' },
              { src: '/assets/partners/kayo.webp',            alt: 'Kayo' },
              { src: '/assets/partners/tdc.png',              alt: 'TDC' },
              { src: '/assets/partners/mycar.png',            alt: 'mycar' },
              { src: '/assets/partners/adma.png',             alt: 'ADMA' },
              { src: '/assets/partners/KR.webp',              alt: 'KR' },
              { src: '/assets/partners/cela.webp',            alt: 'CELA' },
              { src: '/assets/partners/gravity-lab.png',      alt: 'Gravity Lab' },
              { src: '/assets/partners/christians-saving.png',alt: 'Christians Saving' },
            ].map((logo, i) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-auto object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300 shrink-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ct-dark py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to add your venue to this list?
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Whether you&rsquo;re looking for loyalty strategy consulting or the ANALYTIQ analytics platform, the first conversation is free.
            </p>
            <Link
              href="https://calendly.com/challenge-that/introduction"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ct-teal text-white font-medium rounded-lg hover:bg-ct-teal-mid transition-colors"
            >
              Book a free consultation →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
