import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Loyalty & CRM Strategy | Challenge That',
  description:
    'Platform-agnostic loyalty and CRM consulting for Australian hospitality venues. Strategy first, technology second.',
}

const problemCards = [
  {
    title: '"Our program looks like everyone else\'s"',
    body: 'Gold, Silver, Bronze with the same earn-and-burn structure as the pub down the road. There\'s nothing that makes your best members feel recognised - or give you a reason to stay loyal.',
  },
  {
    title: '"We bought a CRM but barely use it"',
    body: 'The platform was sold to you as the solution. But without a clear strategy behind it, it\'s become an expensive email tool - or worse, something IT manages but marketing can\'t access.',
  },
  {
    title: '"Our best customers are leaving quietly"',
    body: 'You know churn is happening. You can see it in the numbers. But you don\'t have the segmentation or the triggers in place to catch members before they\'re gone.',
  },
  {
    title: '"We send the same offer to everyone"',
    body: 'Every member gets the same communication, the same promotion, the same experience - regardless of how valuable they are or what they actually respond to. Personalisation feels out of reach.',
  },
  {
    title: '"We don\'t know if our campaigns work"',
    body: 'You run a promotion, members come in, but you can\'t cleanly attribute what moved the needle. The reporting doesn\'t show you enough to make the next campaign smarter.',
  },
  {
    title: '"No one owns Loyalty properly"',
    body: 'When everyone owns it, no one truly does. There\'s no clear accountability, no defined process, and the platform sits in the gap between marketing and IT with neither team fully in charge.',
  },
]

const fourPs = [
  {
    number: '01',
    title: 'Planning',
    body: 'We validate or develop your strategy to ensure alignment to your departmental goals, KPIs and commercial objectives. Before any process is defined or technology selected, we make sure there\'s a clear, agreed strategy behind what you\'re trying to achieve.',
  },
  {
    number: '02',
    title: 'Process',
    body: 'We define the business processes that need to sit behind your CRM and loyalty activity - in a way that both marketing and technology teams understand and can execute. A great strategy fails without a clear process to deliver it.',
  },
  {
    number: '03',
    title: 'People',
    body: 'We establish ownership at each stage of the customer lifecycle and each phase of the project. We provide support to upskill your existing team and source new skill sets where needed - because the strategy only works if your people can run it.',
  },
  {
    number: '04',
    title: 'Platform',
    body: 'Only once Planning, Process and People are clear do we review your current technology capability and recommend a platform that bridges the gaps. We\'re not affiliated with any vendor - our recommendation is always based on what\'s right for your team.',
  },
]

const services = [
  {
    icon: '/assets/icons/transparent_Loyalty.png',
    title: 'Loyalty program design and rebuild',
    body: 'Whether you\'re starting from scratch or fixing a program that isn\'t delivering, we audit what you have, identify what\'s working, and design programs that reward the right behaviours and differentiate your venue.',
  },
  {
    icon: '/assets/icons/transparent_Framework.png',
    title: 'CRM strategy and platform optimisation',
    body: 'If you\'re evaluating a new CRM platform, we help you define requirements and select the right tool without vendor bias. If you already have a platform, we help you get significantly more from it - without buying something new.',
  },
  {
    icon: '/assets/icons/transparent_Multi-Communication.png',
    title: 'Personalisation at scale',
    body: 'We help you move beyond batch-and-blast to communications that respond to where each member is in their lifecycle. We define the segments, the triggers, the channels and the measurement framework - and we build your team\'s capability to run it.',
  },
  {
    icon: '/assets/icons/transparent_Process.png',
    title: 'Customer lifecycle mapping',
    body: 'We map every key touchpoint across your member\'s journey - from first visit through to reactivation - and align your CRM strategy to each stage. This gives your team a shared framework for every campaign and communication decision.',
  },
  {
    icon: '/assets/icons/transparent_Reporting.png',
    title: 'Data audit and gap analysis',
    body: 'We assess the data you\'re currently collecting, identify the gaps that are limiting your personalisation and segmentation, and recommend what you need to capture - and how - to make better decisions.',
  },
  {
    icon: '/assets/icons/transparent_Workshop.png',
    title: 'Team capability and upskilling',
    body: 'Strategy without capability doesn\'t stick. We work alongside your team - not just as consultants who hand over a document - to build the skills, processes and ownership structures that make the work sustainable after we\'re gone.',
  },
]

const lifecycleStages = [
  { number: '01', title: 'Acquisition', desc: 'Convert first-time visitors into registered members' },
  { number: '02', title: 'Activation', desc: 'Drive the first meaningful interaction post-signup' },
  { number: '03', title: 'Growth', desc: 'Increase visit frequency and share of wallet' },
  { number: '04', title: 'Retention', desc: 'Protect your best members from drift and churn' },
  { number: '05', title: 'Reactivation', desc: 'Re-engage lapsed members before they\'re gone for good' },
]

const caseStudies = [
  {
    client: 'The Fraternity Club',
    challenge:
      "The Fraternity Club's membership program was underperforming, with ad hoc promotions and limited visibility into member data, making it difficult to drive revenue strategically.",
    solution:
      'Challenge That designed and implemented a customer-centric marketing strategy with a focus on loyalty, gaming promotions, and digital enablement. A new rewards program was developed, and supporting technology was selected and deployed to drive engagement. Challenge That continues to provide strategic guidance on a retained basis.',
    results: [
      '+90 place increase in ranking by Profit per machine over 12 months',
      '+33% food & beverage member revenue increase',
      '+42% active membership YoY growth',
      '+17% increase in cross-spending ratio',
    ],
    services: ['Marketing Strategy', 'Reward Program re-vamp', 'Digital Enablement', 'Member insights & Analysis'],
    quote:
      'Challenge That provided the strategic leadership we needed to scale and grow The Fraternity Club. Their expertise has driven over 20% year-over-year growth while enhancing member engagement.',
    attribution: 'Glenn Ward, CEO - The Fraternity Club',
  },
  {
    client: 'Mounties Group',
    challenge:
      "As NSW's largest pub and club group, Mounties has undergone significant expansion and diversification. Their loyalty program was heavily gaming-focused, and they sought a more inclusive offering for all members.",
    solution:
      "Challenge That developed a scalable, purpose-fit loyalty program aligned with Mounties' business growth. The strategy incorporated a refined customer value proposition and tiered membership structure. Challenge That continues to support Mounties Group on a retained basis.",
    results: [
      'Enhanced loyalty proposition integrating benefits across 10 properties',
      'Program expanded to cover Holiday Resorts, Gyms, and Medical Services',
      'Phased rollout ensured continued support for gaming customers while expanding engagement across the broader membership base',
    ],
    services: [
      'Data Consolidation',
      'Loyalty Program Development',
      'Customer Value Proposition',
      'Customer Insights & Analysis',
    ],
    quote:
      'Challenge That has delivered multiple CRM projects, loyalty program improvements, and Martech selections. Their direct, results-driven approach ensures rapid progress and ROI.',
    attribution: 'David Callen, Chief Experience Officer - Mounties Group',
  },
  {
    client: 'Mindil Beach Casino & Resort',
    challenge:
      'Mindil Beach Casino & Resort embarked on a digital transformation to upgrade technology, revamp its loyalty program, and better understand customer behaviour. However, due to staffing changes, the project had lost direction.',
    solution:
      "Challenge That conducted strategic business sessions in Darwin, realigning MBCR's digital transformation roadmap. Key priorities were identified to enhance customer acquisition, retention, and satisfaction. Challenge That continues to support MBCR on a retained basis.",
    results: [
      'A defined capability roadmap',
      'A structured loyalty program strategy',
      'A shortlist of verified software vendors',
      'A marketing playbook to enhance customer experience',
    ],
    services: [
      'Customer Strategy & User Experience (UX)',
      'CRM & Loyalty Program Optimisation',
      'Data Driven Customer Insights',
      'Vendor Selection',
    ],
    quote:
      'Challenge That provided clarity on customer segmentation through advanced data modeling. Their expertise in UX and technology has been invaluable.',
    attribution: 'Karley McRae, Executive Marketing Manager - Mindil Beach Casino & Resort',
  },
  {
    client: 'Destination NSW',
    challenge:
      'Destination NSW was advancing its digital transformation, with over 300 pages of external research. Challenge That was engaged to convert these insights into actionable strategies.',
    solution:
      'Working with HAVAS, Challenge That conducted strategy sessions to validate recommendations against internal business processes. A phased transformation plan was developed for immediate implementation.',
    results: [
      'A clear B2B & B2C strategy',
      'Optimised use of first-party data',
      'A roadmap for marketing automation & personalisation',
      'A structured Preference Centre framework',
    ],
    services: [
      'Customer Experience Strategy',
      'Personalisation Framework',
      'Marketing Automation',
      'Preference Centre Development',
    ],
    quote:
      'Working with Challenge That is a breath of fresh air! Their solutions are practical, actionable, and operationally sound. We need consultants who tell it like it is - and Challenge That delivers.',
    attribution: 'Michaela Aguila - Destination NSW',
  },
]

const team = [
  {
    initials: 'FN',
    name: 'Fiona Nilsson',
    role: 'Marketing & Strategy',
    bio: 'Experienced Marketing Director with a track record building commercial and marketing strategies across category growth, acquisition and retention. Fiona\'s the strategist - she ensures what we build is grounded in commercial reality.',
    skills: ['Strategy', 'Revenue operations', 'CRM', 'Digital marketing', 'Loyalty'],
  },
  {
    initials: 'KM',
    name: 'Kristen Makin',
    role: 'CRM & Loyalty',
    bio: 'CRM specialist with deep expertise in loyalty program design, VIP programs and marketing technology transformation. Kristen is the architect of the programs we design and the platforms we configure.',
    skills: ['CRM', 'Loyalty design', 'Salesforce', 'Marketing automation', 'Personalisation'],
  },
  {
    initials: 'AG',
    name: 'Ankur Ghai',
    role: 'Data & Analytics',
    bio: 'Data scientist who specialises in translating complex data into business decisions. Ankur builds the data infrastructure - warehousing, ETL pipelines and predictive CRM models - that makes personalisation at scale possible.',
    skills: ['Data science', 'Tableau', 'Power BI', 'Python', 'ETL', 'Predictive modelling'],
  },
]

export default function Loyalty() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ct-slate-subtle py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs font-bold tracking-widest uppercase text-ct-slate mb-6">
              Loyalty &amp; CRM Consulting
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Loyalty that starts with your customers - not your platform.
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              We&rsquo;re platform-agnostic. That means our advice is grounded in what&rsquo;s right for your venue,
              your team and your members - not what earns a commission or locks you in.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              We&rsquo;ve spent 40+ years in hospitality, loyalty and CRM - in the roles you&rsquo;re in now, at
              venues like yours. We know what works, what doesn&rsquo;t, and what most loyalty programs are still
              getting wrong.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://calendly.com/challenge-that/introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-ct-slate text-white font-medium rounded-lg hover:bg-ct-slate-dark transition-colors"
              >
                Book a free consultation
              </Link>
              <Link
                href="https://www.amazon.com.au/MOVE-Methodology-Missing-Manual-CRM/dp/192327743X/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-ct-gray-light text-gray-700 font-medium rounded-lg hover:border-ct-slate transition-colors text-sm"
              >
                <svg className="w-4 h-4 text-ct-slate" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                Read our book: The MOVE Methodology
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Gold, Silver, Bronze&hellip; sound familiar?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mb-4">
            Most hospitality loyalty programs look the same, run the same, and deliver the same results - which
            is to say, not enough. The tiers don&rsquo;t differentiate. The offers don&rsquo;t personalise. And your
            best customers are being treated exactly like everyone else.
          </p>
          <p className="text-gray-500 mb-12">Here&rsquo;s what we hear most often from venues like yours:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {problemCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 60}>
                <div className="bg-ct-slate-subtle border border-ct-slate-subtle rounded-xl p-6 card-lift h-full">
                  <h3 className="font-semibold text-ct-slate-dark mb-3 leading-snug">{card.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{card.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4P Approach */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-ct-slate mb-4">How we work</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">We start with strategy. Technology comes last.</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Most CRM failures aren&rsquo;t technology problems. They&rsquo;re strategy problems that get handed to a
              software vendor. We work in the opposite order - and that changes everything.
            </p>
          </div>
          <div className="max-w-3xl divide-y divide-gray-200">
            {fourPs.map((step) => (
              <div key={step.number} className="flex gap-8 py-8">
                <div className="flex-shrink-0">
                  <span className="text-3xl font-bold text-ct-gray-mid">{step.number}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-ct-slate-dark text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Help With */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Where we work with you.</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We engage across the full spectrum of customer and loyalty strategy - from foundational assessments
              through to ongoing campaign optimisation. Most clients start in one area and expand from there.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 70}>
                <div className="bg-ct-slate-subtle border border-ct-slate-subtle rounded-xl p-7 card-lift h-full">
                  <Image src={s.icon} alt="" width={72} height={72} className="mb-5" />
                  <h3 className="font-semibold text-ct-slate-dark mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Lifecycle */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your members aren&rsquo;t all in the same place.</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The most effective loyalty strategy treats members differently depending on where they are in their
              relationship with your venue. A new member needs different things than a loyal regular - and a
              lapsed member needs a different conversation entirely.
            </p>
            <p className="text-gray-500 mt-4">We align your CRM strategy to five lifecycle stages:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {lifecycleStages.map((stage, i) => (
              <div
                key={stage.number}
                className={`rounded-xl p-6 ${i % 2 === 0 ? 'bg-ct-slate text-white' : 'bg-ct-slate-subtle text-ct-dark'}`}
              >
                <p className={`text-xs font-bold mb-2 ${i % 2 === 0 ? 'text-ct-gray-mid' : 'text-ct-slate'}`}>
                  {stage.number}
                </p>
                <h3 className="font-bold text-lg mb-2">{stage.title}</h3>
                <p className={`text-xs leading-relaxed ${i % 2 === 0 ? 'text-ct-slate-subtle' : 'text-ct-slate-dark'}`}>
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-600 leading-relaxed max-w-3xl">
            We help you define the right strategy, triggers and communications for each stage - so your CRM
            program works across the entire member relationship, not just at acquisition.
          </p>
        </div>
      </section>

      {/* Platform Agnostic */}
      <section className="bg-ct-dark py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-6">
              We work with any platform. That&rsquo;s not a footnote - it&rsquo;s the whole point.
            </h2>
            <div className="space-y-4 text-ct-gray-mid text-lg leading-relaxed">
              <p>
                A lot of &ldquo;CRM consultants&rdquo; are actually platform resellers. They have a preferred vendor,
                and their recommendation - whatever your situation - tends to land there.
              </p>
              <p>
                We&rsquo;re different. We&rsquo;re not affiliated with, paid by, or incentivised by any CRM or loyalty
                technology vendor. Our role is to understand your venues, your team and your members - and
                recommend the right approach for your situation.
              </p>
              <p>
                That might mean getting more from the platform you already have. It might mean switching. It might mean
                a custom configuration. The right answer is the one that&rsquo;s right for you - and we&rsquo;ll
                tell you which one that is, honestly.
              </p>
              <p>
                We work with a range of hospitality-specific Loyalty and CRM platforms. If you&rsquo;re mid-evaluation
                and want an independent view, that&rsquo;s exactly what we&rsquo;re here for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-ct-slate mb-4">Case studies</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Results that speak for themselves.</h2>
          <div className="space-y-8">
            {caseStudies.map((cs) => (
              <div key={cs.client} className="rounded-2xl border border-gray-100 bg-gray-50 overflow-hidden">
                <div className="bg-ct-slate px-8 py-4">
                  <h3 className="text-white font-semibold text-lg">{cs.client}</h3>
                </div>
                <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Challenge + Solution */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-ct-slate mb-2">Challenge</p>
                      <p className="text-gray-600 leading-relaxed text-sm">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-ct-slate mb-2">Solution</p>
                      <p className="text-gray-600 leading-relaxed text-sm">{cs.solution}</p>
                    </div>
                    <blockquote className="border-l-4 border-ct-gray-mid pl-4 mt-4">
                      <p className="text-gray-700 italic text-sm leading-relaxed">&ldquo;{cs.quote}&rdquo;</p>
                      <p className="text-xs text-gray-400 mt-2">- {cs.attribution}</p>
                    </blockquote>
                  </div>
                  {/* Results + Services */}
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-ct-slate mb-3">Results</p>
                      <ul className="space-y-2">
                        {cs.results.map((r) => (
                          <li key={r} className="flex gap-2 text-sm text-gray-700">
                            <span className="text-ct-slate mt-0.5 flex-shrink-0">✓</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-ct-slate mb-3">
                        Services provided
                      </p>
                      <ul className="space-y-1">
                        {cs.services.map((s) => (
                          <li key={s} className="text-sm text-gray-500">
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The people you&rsquo;ll work with.</h2>
          <p className="text-lg text-gray-600 max-w-3xl mb-12">
            We&rsquo;re a focused team of three specialists who between us cover the full scope of hospitality CRM
            - from commercial strategy through to data science. You work directly with us, not with a junior team
            managed from a distance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl border border-gray-100 p-8">
                <div className="w-16 h-16 rounded-full bg-ct-slate-subtle flex items-center justify-center mb-6">
                  <span className="text-lg font-bold text-ct-slate">{member.initials}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                <p className="text-ct-slate font-medium text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span key={skill} className="text-xs text-ct-slate italic">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section id="contact" className="bg-ct-dark py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Let&rsquo;s talk about what&rsquo;s not working.</h2>
            <p className="text-ct-gray-mid text-lg leading-relaxed mb-4">
              Book a free 30-minute consultation. We&rsquo;ll listen to where you are, what you&rsquo;re trying to fix,
              and give you an honest view of whether and how we can help.
            </p>
            <p className="text-white font-semibold text-lg mb-8">No obligation. No sales pitch. Just a straight conversation.</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://calendly.com/challenge-that/introduction"
              target="_blank"
              rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-ct-dark font-semibold rounded-lg hover:bg-ct-slate-subtle transition-colors"
              >
                Book a free consultation
              </Link>
            </div>
            <p className="mt-6 text-ct-gray-mid text-sm">
              If you&rsquo;re exploring ANALYTIQ instead,{' '}
              <Link href="/analytiq" className="underline hover:text-white transition-colors">
                visit the ANALYTIQ page
              </Link>{' '}
              - or book a combined conversation and we&rsquo;ll cover both.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
