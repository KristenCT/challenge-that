import Link from 'next/link'

type Props = {
  tag: string
  tagColor: 'slate' | 'teal' | 'amber' | 'coral'
  title: string
  readTime: string
  topics: string
  children: React.ReactNode
  ctaHeading: string
  ctaBody: string
  ctaPrompt: string
}

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

export function Pullquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-ct-slate bg-ct-slate-subtle rounded-r-xl px-6 py-4 my-8">
      <p className="text-ct-dark font-medium leading-relaxed italic" style={{ fontFamily: 'var(--font-serif)' }}>{children}</p>
    </blockquote>
  )
}

export function Callout({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">{title}</p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-sm text-gray-700">
            <span className="text-ct-teal mt-0.5 shrink-0">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ArticleCTA({ heading, body, label }: { heading: string; body: string; label: string }) {
  return (
    <div className="bg-ct-dark rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-10">
      <div>
        <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'var(--font-serif)' }}>{heading}</h3>
        <p className="text-gray-400 text-sm">{body}</p>
      </div>
      <Link
        href="https://calendly.com/challenge-that/introduction"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 px-5 py-2.5 bg-ct-teal text-white text-sm font-medium rounded-lg hover:bg-ct-teal-mid transition-colors"
      >
        {label}
      </Link>
    </div>
  )
}

export default function ArticleLayout({ tag, tagColor, title, readTime, topics, children, ctaHeading, ctaBody, ctaPrompt }: Props) {
  return (
    <>
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link href="/insights" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 transition-colors mb-8">
            ← Back to Insights
          </Link>
          <div className={`h-1 w-12 rounded-full ${bandStyles[tagColor]} mb-6`} />
          <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4 ${tagStyles[tagColor]}`}>
            {tag}
          </span>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            {title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span>{readTime}</span>
            <span>·</span>
            <span>Challenge That team</span>
            <span>·</span>
            <span>{topics}</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose-custom">
            {children}
          </div>
          <ArticleCTA heading={ctaHeading} body={ctaBody} label={ctaPrompt} />
        </div>
      </section>
    </>
  )
}
