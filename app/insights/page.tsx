import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Insights | Challenge That',
  description: 'Practical perspectives on loyalty, CRM and data for Australian hospitality venues - from the Challenge That team.',
  openGraph: {
    title: 'Insights | Challenge That',
    description: 'Practical perspectives on loyalty, CRM and data for Australian hospitality venues - from the Challenge That team.',
    url: 'https://challengethat.com.au/insights',
  },
}

const articles = [
  {
    slug: 'move-map',
    tag: 'MOVE methodology',
    tagColor: 'teal',
    title: 'M is for Map: Why most CRM strategies fail before they start',
    excerpt: 'Of the four principles in the MOVE methodology, Map is where the work begins. It\'s also where most businesses skip ahead. Not deliberately — but the pressure to get the platform live wins, and six months later they\'re sitting with a system that doesn\'t reflect how they actually work.',
    readTime: '7 min read',
    featured: true,
  },
  {
    slug: 'crm-growth-moment',
    tag: 'CRM',
    tagColor: 'coral',
    title: 'The moment I realised CRM could drive growth',
    excerpt: 'It was the early 2000s, an online sportsbook in the UK, five VIP segments, and a boardroom argument I lost. What happened next taught me everything I know about CRM, retention, and what happens when businesses can\'t see the connection between customer spend and customer value.',
    readTime: '5 min read',
    featured: false,
  },
  {
    slug: 'loyalty-mistakes',
    tag: 'Loyalty strategy',
    tagColor: 'slate',
    title: 'The five loyalty mistakes hospitality venues keep making (and how to fix them)',
    excerpt: 'Gold, Silver, Bronze. Tiers exist. Emails go out. The program is technically live. So why aren\'t members coming back more often? Most loyalty programs in Australian hospitality aren\'t broken - they\'re just built on assumptions that were never tested.',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'crm-stalled',
    tag: 'CRM',
    tagColor: 'teal',
    title: 'Why your CRM implementation stalled - and what to do about it',
    excerpt: 'You bought the platform. You migrated the data. Six months later, your team is back to spreadsheets. Here\'s why implementation stalls happen and how to break out of them.',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'data-gaps',
    tag: 'Data quality',
    tagColor: 'amber',
    title: 'Your member database is lying to you - the data gap audit every venue needs',
    excerpt: 'Most venues assume their CRM data is messy but usable. The reality is often worse. We walk through the five data gaps that silently undermine personalisation and campaign performance.',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'tier-model',
    tag: 'Tier design',
    tagColor: 'coral',
    title: 'Gold, Silver, Bronze: why the standard loyalty tier model is failing Australian venues',
    excerpt: 'Tier-based loyalty programs feel safe - they\'re what everyone else uses. But in hospitality, they consistently reward spend history over behaviour, and ignore the customers most likely to grow.',
    readTime: '9 min read',
    featured: false,
  },
]

const tagStyles: Record<string, string> = {
  slate: 'bg-ct-slate-subtle text-ct-slate',
  teal:  'bg-ct-teal-subtle text-ct-teal',
  amber: 'bg-ct-amber-subtle text-ct-amber',
  coral: 'bg-ct-coral-subtle text-ct-coral',
}

const bandStyles: Record<string, string> = {
  slate: 'bg-ct-slate',
  teal:  'bg-ct-teal',
  amber: 'bg-ct-amber',
  coral: 'bg-ct-coral',
}

export default function Insights() {
  const featured = articles[0]
  const rest = articles.slice(1)

  return (
    <>
      {/* Hero */}
      <section className="bg-ct-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-ct-teal-light text-xs font-bold tracking-widest uppercase mb-4">Insights</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl">
            The loyalty and CRM problems nobody warns you about
          </h1>
          <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
            Practical perspectives from 40+ years in hospitality CRM - written for venue marketers who already know something isn&rsquo;t working.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Featured */}
          <ScrollReveal>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">Featured article</p>
          <Link href={`/insights/${featured.slug}`} className="group block mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-300 transition-colors">
              {/* Visual */}
              <div className="bg-gray-50 p-6 lg:p-10 flex items-center">
                <div className="w-full space-y-3">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Customer product journey</p>
                  {[
                    { stage: 'Awareness', status: 'Defined', color: 'text-ct-teal' },
                    { stage: 'Onboarding', status: 'Defined', color: 'text-ct-teal' },
                    { stage: 'Active', status: 'Defined', color: 'text-ct-teal' },
                    { stage: 'Retained', status: 'Undefined', color: 'text-gray-300' },
                    { stage: 'Lapsed', status: 'Undefined', color: 'text-gray-300' },
                  ].map((row) => (
                    <div key={row.stage} className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{row.stage}</span>
                      <span className={`text-xs font-semibold ${row.color}`}>{row.status}</span>
                    </div>
                  ))}
                  <p className="text-xs text-gray-400 pt-2 border-t border-gray-200">Undefined stages become invisible problems in production</p>
                </div>
              </div>
              {/* Content */}
              <div className="p-8 lg:p-10">
                <div className={`h-1 w-12 rounded-full ${bandStyles[featured.tagColor]} mb-6`} />
                <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4 ${tagStyles[featured.tagColor]}`}>
                  {featured.tag}
                </span>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-ct-slate transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">{featured.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span>{featured.readTime}</span>
                  <span>·</span>
                  <span>Challenge That team</span>
                </div>
                <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-ct-slate group-hover:gap-2.5 transition-all">
                  Read article →
                </span>
              </div>
            </div>
          </Link>
          </ScrollReveal>

          {/* Rest */}
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">More articles</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 80}>
              <Link href={`/insights/${article.slug}`} className="group block border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-300 transition-colors card-lift h-full">
                <div className={`h-1 ${bandStyles[article.tagColor]}`} />
                <div className="p-6">
                  <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4 ${tagStyles[article.tagColor]}`}>
                    {article.tag}
                  </span>
                  <h2 className="text-base font-bold text-gray-900 mb-3 leading-snug group-hover:text-ct-slate transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{article.readTime}</span>
                    <span className="text-sm font-medium text-ct-slate group-hover:translate-x-0.5 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ct-dark py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-1">See these problems in your own data</h2>
            <p className="text-gray-400 text-sm">ANALYTIQ surfaces loyalty gaps and CRM blind spots - without needing an analyst.</p>
          </div>
          <Link
            href="https://calendly.com/challengethat/introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 bg-ct-teal text-white font-medium rounded-lg hover:bg-ct-teal-mid transition-colors text-sm"
          >
            See ANALYTIQ →
          </Link>
        </div>
      </section>
    </>
  )
}
