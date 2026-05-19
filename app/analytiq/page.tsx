import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ANALYTIQ | Challenge That',
  description:
    'The analytics platform built for Australian pubs, clubs and hospitality venues. Self-serve data and AI-powered insights — no analyst required.',
}

const painCards = [
  {
    title: 'Reports arrive too late',
    body: 'By the time you see last week’s numbers, you’ve already made the decisions.',
  },
  {
    title: 'Dashboards need analysts',
    body: 'The data exists — but accessing it means raising a request and waiting days.',
  },
  {
    title: 'Living in spreadsheets',
    body: 'Every morning, someone downloads a file and manually builds the same report.',
  },
  {
    title: 'Questions go unanswered',
    body: 'Simple member questions take days to answer, if they get answered at all.',
  },
  {
    title: 'Instinct fills the gap',
    body: 'When data is inaccessible, decisions get made on gut feel — and the insights that could drive revenue never surface.',
  },
  {
    title: 'Members are a mystery',
    body: 'You know your top members exist. You just can’t identify, segment or act on them quickly enough.',
  },
]

const features = [
  {
    title: 'Gaming dashboards',
    body: 'Overview, year-on-year comparisons, and top and bottom machines and games by turnover. Daily, weekly, monthly and quarterly views with instant period comparisons — so you always know where you stand.',
  },
  {
    title: 'Member intelligence',
    body: 'Active, inactive and lapsed member analysis. Tier breakdowns by member count, turnover, ADT and visits — filtered to your current working database, not years of dormant records.',
  },
  {
    title: 'Promotions analytics',
    body: 'Filter by date range, day of week and hour. Pre and post promo comparisons. Tier breakdown and member-by-member performance — sortable by any metric so you can see exactly what moved the needle.',
  },
  {
    title: 'F&B reporting',
    body: 'Venue-level filtering to compare performance across multiple restaurants or bars. Top and bottom items by revenue. Year-on-year comparison so you can see what’s growing and what isn’t.',
  },
  {
    title: 'Tier movement',
    body: 'Track tier upgrades and downgrades over time. See which tiers are growing or shrinking month on month — the single most requested missing report in hospitality loyalty programs.',
  },
  {
    title: 'AI query engine',
    body: 'Ask questions in plain English. Get a structured, downloadable answer. From simple member lookups to complex cross-table queries — without writing a line of SQL or raising a support ticket.',
  },
]

const queryExamples = [
  {
    type: 'Basic',
    question: 'Who were my top 10 customers by turnover for 2025?',
    result: 'Ranked table of your top 10 members, downloadable as CSV.',
  },
  {
    type: 'Complex',
    question: 'Show me the top 10 customers by total turnover for each tier between 1 Jan and 10 Jan 2026.',
    result: 'AI joins member details and transaction tables automatically. Returns 10 ranked members per tier.',
  },
  {
    type: 'Churn detection',
    question: 'Which high-value customers visited in 2025 but haven’t been in since January 2026?',
    result: 'Returns lapsed high-value members with their full 2025 turnover — ready for your reactivation campaign.',
  },
]

const roles = [
  {
    icon: ‘/assets/icons/Dashboard.png’,
    title: ‘Head of Marketing / CRM Lead’,
    body: ‘Full dashboard access plus the AI query engine. Answers member questions in minutes that used to take days. Runs ad hoc analysis without raising a request or waiting for a data team.’,
  },
  {
    icon: ‘/assets/icons/Analysis.png.png’,
    title: ‘Venue Manager’,
    body: ‘Daily performance view for their venue: gaming, F&B, member activity — without waiting for a report to be sent or logging into a system IT need to manage.’,
  },
  {
    icon: ‘/assets/icons/Segmentation.png.png’,
    title: ‘Operations / F&B Head’,
    body: ‘Revenue by category, top and bottom performers, period comparisons — without touching a spreadsheet. Filters to their venue or area so they see what’s relevant.’,
  },
  {
    icon: ‘/assets/icons/Engage.png.png’,
    title: ‘Multi-Venue groups’,
    body: ‘Global view across all sites. Filter to any single venue in one click. Compare performance across the estate without building a separate consolidation report every time.’,
  },
]

const connectionTiles = [
  {
    title: 'SSO-ready',
    body: 'Log in with your existing credentials. No separate account management, no password friction, no security headaches.',
  },
  {
    title: 'Connects to existing data',
    body: 'ANALYTIQ integrates with your current operational systems. We configure the connection — your team starts using it.',
  },
  {
    title: 'Multi-venue from day one',
    body: 'Global and per-venue views built in. Not a single-site tool with multi-venue bolted on.',
  },
  {
    title: 'Role-based access',
    body: 'Different roles see different data. Power users can build and query. Regular users view shared dashboards.',
  },
  {
    title: 'Powered by Anthropic AI',
    body: 'The same AI that powers Claude. Built for complex, multi-table data queries in plain English.',
  },
  {
    title: 'Built by venue marketers',
    body: 'Every feature was designed by people who’ve worked in Australian pubs and clubs.',
  },
]

const testimonials = [
  {
    quote:
      'We used to spend half a day every Monday downloading reports and building a picture of the previous week. Now the whole team can see it the moment they log in.',
    attribution: 'Head of Marketing, [venue name]',
  },
  {
    quote:
      'The AI query engine answered a member question in under two minutes that would have taken our data team three days. That alone changed how we run our campaigns.',
    attribution: 'CRM Manager, [venue name]',
  },
]

export default function Analytiq() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs font-bold tracking-widest uppercase text-ct-teal mb-6">Analytics Platform</p>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              <span className="text-gray-900">Every venue has data.</span>
              <br />
              <span className="text-ct-teal">Almost none can use it.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              ANALYTIQ is the analytics platform built for Australian pubs, clubs and hospitality venues &mdash; by
              people who&rsquo;ve run the marketing, operations and analysis.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Give your whole team direct access to the customer insights that drive revenue &mdash; without waiting for
              an analyst, writing a single line of SQL, or downloading another spreadsheet.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://calendly.com/challenge-that/introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-ct-teal text-white font-medium rounded-lg hover:bg-ct-teal-mid transition-colors"
              >
                Book a demo
              </Link>
              <Link
                href="#how-it-works"
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                See how it works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Cards */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Sound familiar?</h2>
          <p className="text-gray-500 mb-12">The problems we hear most from venues like yours.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {painCards.map((card) => (
              <div key={card.title} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What ANALYTIQ Does */}
      <section id="how-it-works" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              A reporting layer and data warehouse in one &mdash; built for hospitality.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              It&rsquo;s the tool your venue has been trying to build internally for years &mdash; delivered as a
              platform that connects to your existing data and works from day one. No new systems to manage. No analyst
              required for everyday questions.
            </p>
            <p className="text-gray-500 mt-4">Five core areas, available at go-live:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-gray-100 bg-gray-50 p-7">
                <h3 className="font-semibold text-ct-teal mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Query Engine */}
      <section className="bg-ct-teal-subtle py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-ct-teal mb-4">AI Query Engine</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ask a question. Get a real answer.</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The ANALYTIQ AI engine doesn&rsquo;t just give you dashboards &mdash; it lets you interrogate your data
              the way you actually think. Type a question in plain English. The engine reads your data tables, handles
              the logic, and returns a structured, downloadable result.
            </p>
            <p className="text-gray-500 mt-4">Here&rsquo;s what that looks like in practice:</p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-ct-teal-subtle shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ct-teal text-white">
                  <th className="px-6 py-4 text-left font-semibold">Type</th>
                  <th className="px-6 py-4 text-left font-semibold">Question</th>
                  <th className="px-6 py-4 text-left font-semibold">What you get back</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {queryExamples.map((row) => (
                  <tr key={row.type}>
                    <td className="px-6 py-4 font-medium text-ct-teal-mid whitespace-nowrap align-top">{row.type}</td>
                    <td className="px-6 py-4 text-gray-700 align-top">{row.question}</td>
                    <td className="px-6 py-4 text-gray-600 align-top">{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-lg font-medium text-gray-900">
            No SQL. No analyst. No waiting three days for someone to run the report. Just the answer, in a format you
            can act on.
          </p>
        </div>
      </section>

      {/* Product Visuals */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">See it for yourself.</h2>
          <p className="text-lg text-gray-600 mb-12">
            ANALYTIQ gives every member of your team a clear, real-time view of the metrics that matter to their role.
            No training required. No analyst middleman.
          </p>
          <div className="space-y-6">
            {[
              {
                label: 'Gaming overview dashboard',
                caption: 'Gaming overview — turnover, visits, and year-on-year comparison at a glance.',
              },
              {
                label: 'Member tier breakdown',
                caption:
                  'Member intelligence — active, inactive and lapsed members by tier, with ADT and visit frequency.',
              },
              {
                label: 'AI query interface',
                caption: 'The AI query engine — type a question, get a structured table back in seconds.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border-2 border-dashed border-ct-teal-subtle bg-ct-teal-subtle p-16 text-center"
              >
                <p className="font-medium text-ct-teal mb-1">{item.label}</p>
                <p className="text-sm text-ct-teal-light">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for teams, not just analysts.</h2>
          <p className="text-lg text-gray-600 mb-12">
            ANALYTIQ uses role-based access so different people get different levels of visibility &mdash; without
            needing separate systems, separate logins, or analyst support for every request.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role) => (
              <div key={role.title} className="bg-ct-teal-subtle border border-ct-teal-subtle rounded-xl p-7">
                <Image src={role.icon} alt="" width={52} height={52} className="mb-4" />
                <h3 className="font-semibold text-ct-teal-mid mb-2">{role.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{role.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Connects */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              No new systems. No disruption. Just connected data.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              ANALYTIQ sits on top of your existing data sources as a reporting layer. It connects to what you already
              have &mdash; you don&rsquo;t need to migrate, replace, or rebuild anything to get started.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {connectionTiles.map((tile) => (
              <div key={tile.title} className="border border-gray-100 rounded-xl p-6 bg-gray-50">
                <h3 className="font-semibold text-ct-teal mb-2">{tile.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tile.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">What our clients say.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.attribution} className="border-l-4 border-ct-teal pl-6">
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <p className="text-sm text-gray-400 italic">&mdash; {t.attribution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section id="contact" className="bg-ct-dark py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to see it in action?</h2>
            <p className="text-ct-teal-subtle text-lg leading-relaxed mb-8">
              Book a 30-minute demo and we&rsquo;ll walk you through the platform using your venue type as the context.
              No generic slideshow &mdash; just the dashboards and queries that are relevant to you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://calendly.com/challenge-that/introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-ct-dark font-semibold rounded-lg hover:bg-ct-teal-subtle transition-colors"
              >
                Book a demo
              </Link>
              <Link
                href="https://calendly.com/challenge-that/introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-ct-teal text-ct-teal-subtle font-medium rounded-lg hover:border-ct-teal-light hover:text-white transition-colors"
              >
                Talk to us about your data
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
