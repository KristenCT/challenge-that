import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | Challenge That',
  description: 'Terms of use for the Challenge That website.',
  openGraph: {
    title: 'Terms of Use | Challenge That',
    description: 'Terms of use for the Challenge That website.',
    url: 'https://challengethat.com.au/terms',
  },
}

export default function Terms() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <p className="text-ct-teal text-xs font-bold tracking-widest uppercase mb-4">Legal</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Use</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: May 2026</p>

        <div className="space-y-10 text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">About this site</h2>
            <p>
              This website is operated by Challenge That Pty Ltd (ABN 27 644 821 410), a hospitality loyalty and CRM
              consulting firm based in Maroubra, NSW, Australia (&ldquo;Challenge That&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;). By accessing or using this website, you agree to these terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">General information only</h2>
            <p>
              The content on this website — including articles, frameworks, and service descriptions — is provided
              for general informational purposes only. It does not constitute professional advice. While we take care
              to keep information accurate and current, we make no representations or warranties about its
              completeness or suitability for your specific situation.
            </p>
            <p className="mt-3">
              You should seek independent professional advice before acting on anything you read on this site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, Challenge That excludes all liability for any loss or damage
              (including indirect or consequential loss) arising from your use of, or reliance on, this website or
              its content. This includes loss of revenue, loss of data, or business interruption.
            </p>
            <p className="mt-3">
              Nothing in these terms limits any rights you may have under the Australian Consumer Law that cannot
              be excluded by contract.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Intellectual property</h2>
            <p>
              All content on this site — including text, graphics, logos, and the ANALYTIQ brand — is owned by or
              licensed to Challenge That and is protected by Australian copyright law. You may not reproduce,
              distribute, or republish any content without our prior written consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Third-party links</h2>
            <p>
              This site contains links to third-party websites including Calendly and Amazon. These links are
              provided for convenience only. We do not endorse or take responsibility for the content or practices
              of any third-party site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Governing law</h2>
            <p>
              These terms are governed by the laws of New South Wales, Australia. Any disputes will be subject to
              the exclusive jurisdiction of the courts of New South Wales.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Changes to these terms</h2>
            <p>
              We may update these terms from time to time. The date at the top of this page reflects when they were
              last revised. Continued use of the site after any changes constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Contact us</h2>
            <div className="space-y-1 text-sm">
              <p><strong className="text-gray-800">Challenge That Pty Ltd</strong></p>
              <p>ABN 27 644 821 410</p>
              <p>Maroubra, NSW, Australia</p>
              <p><a href="mailto:info@challengethat.com.au" className="text-ct-teal hover:underline">info@challengethat.com.au</a></p>
              <p><a href="tel:0401379901" className="text-ct-teal hover:underline">0401 379 901</a></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
