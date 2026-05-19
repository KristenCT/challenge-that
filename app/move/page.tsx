import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'The MOVE Methodology | Challenge That',
  description: 'The missing manual your CRM vendor never gave you. A practical four-step framework for aligning CRM strategy, operations, and technology - written by the Challenge That team.',
  openGraph: {
    title: 'The MOVE Methodology | Challenge That',
    description: 'The missing manual your CRM vendor never gave you. A practical four-step framework for aligning CRM strategy, operations, and technology - written by the Challenge That team.',
    url: 'https://challengethat.com.au/move',
  },
}

const authors = [
  {
    name: 'Kristen Makin',
    role: 'Co-founder, Challenge That',
    bio: "A seasoned CRM and VIP marketing expert, Kristen's journey began in the online gaming industry during the early 2000s, where she had the privilege of working with some of the most innovative developers in the world. Throughout her career, she has successfully managed customers and teams on an international scale, with responsibility for over 70% of net revenue from existing customers.",
  },
  {
    name: 'Fiona Nilsson',
    role: 'Co-founder, Challenge That',
    bio: 'A qualified and experienced senior Marketing Executive who has worked with customer-centric companies spanning Australia, New Zealand, Europe, Asia, the UK, Ireland, and the USA, Fiona is passionate about the data and customer insights needed to make pragmatic business decisions within a marketing framework.',
  },
  {
    name: 'Ian Sampson',
    role: 'Author',
    bio: "A seasoned professional with a rich history in technology and business, he started his career as a Chartered Accountant with Ernst & Young, but his expertise has always revolved around the practical application of cutting-edge technology to improve businesses. This passion has seen him working for some of the world's largest companies across the globe.",
  },
]

export default function Move() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-ct-teal text-xs font-bold tracking-widest uppercase mb-4">The Book</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                The missing manual your CRM vendor never gave you.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                The MOVE Methodology is a four-step framework for aligning CRM strategy, operations, and technology - giving your whole team a common language and a clear system that actually gets used. Used across industries, and right at home in hospitality.
              </p>
              <Link
                href="https://www.amazon.com.au/MOVE-Methodology-Missing-Manual-CRM/dp/192327743X/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ct-teal text-white font-medium rounded-lg hover:bg-ct-teal-mid transition-colors"
              >
                Buy the book on Amazon &rarr;
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/assets/icons/transparent_book_cover.png"
                alt="The MOVE Methodology - The Missing Manual for CRM"
                width={340}
                height={440}
                className="drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About the Book */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <p className="text-ct-teal text-xs font-bold tracking-widest uppercase mb-4">About the book</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Most CRM projects fail quietly.
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                The platform gets implemented, the data gets migrated, the team gets trained - and then, slowly, nothing changes. Guests don&rsquo;t feel known. Staff don&rsquo;t trust the data. And the system that was supposed to drive loyalty ends up as an expensive contact list.
              </p>
              <p>
                The MOVE Methodology gives you a practical, four-step framework to fix that. Written by three practitioners with deep experience across CRM, loyalty, and - yes - hospitality, it bridges the gap between the teams who know your customers and the systems that should.
              </p>
              <p className="font-medium text-gray-900">
                Complete with practical frameworks and ready-to-use templates, this is the book that turns your CRM from a cost centre into a genuine competitive advantage.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Authors */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-ct-teal text-xs font-bold tracking-widest uppercase mb-4">The authors</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-12">
            Written by practitioners, not theorists.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {authors.map((author, i) => (
              <ScrollReveal key={author.name} delay={i * 100}>
              <div className="bg-white rounded-2xl border border-gray-100 p-8 card-lift h-full">
                <div className="w-12 h-12 rounded-full bg-ct-teal-subtle flex items-center justify-center mb-5">
                  <span className="text-sm font-bold text-ct-teal">
                    {author.name.split(' ').map((n: string) => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{author.name}</h3>
                <p className="text-ct-teal font-medium text-sm mb-4">{author.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{author.bio}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ct-dark py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to make your CRM work?
            </h2>
            <p className="text-gray-400 mb-8">Available now on Amazon Australia.</p>
            <Link
              href="https://www.amazon.com.au/MOVE-Methodology-Missing-Manual-CRM/dp/192327743X/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ct-teal text-white font-medium rounded-lg hover:bg-ct-teal-mid transition-colors"
            >
              Buy the book on Amazon &rarr;
            </Link>
            <p className="mt-4 text-xs text-gray-500 italic">The MOVE Methodology: The Missing Manual for CRM</p>
          </div>
        </div>
      </section>
    </>
  )
}
