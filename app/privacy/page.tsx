import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Challenge That',
  description: 'Privacy policy for Challenge That - how we collect, use and protect your personal information.',
  openGraph: {
    title: 'Privacy Policy | Challenge That',
    description: 'Privacy policy for Challenge That - how we collect, use and protect your personal information.',
    url: 'https://challengethat.com.au/privacy',
  },
}

export default function Privacy() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <p className="text-ct-teal text-xs font-bold tracking-widest uppercase mb-4">Legal</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: May 2026</p>

        <div className="prose prose-gray max-w-none space-y-10 text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Who we are</h2>
            <p>
              Challenge That Pty Ltd (&ldquo;Challenge That&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates challengethat.com.au.
              We are a hospitality loyalty and CRM consulting firm based in Maroubra, NSW, Australia.
              We are committed to protecting your personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs).
            </p>
            <p className="mt-3">
              For any privacy-related enquiries, contact us at{' '}
              <a href="mailto:info@challengethat.com.au" className="text-ct-teal hover:underline">info@challengethat.com.au</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">What information we collect</h2>
            <p className="mb-3">We collect personal information in the following ways:</p>
            <ul className="space-y-3 list-none pl-0">
              <li className="flex gap-3">
                <span className="text-ct-teal font-bold shrink-0">—</span>
                <span><strong className="text-gray-800">Contact form:</strong> When you submit our contact form, we collect your name, email address, venue or company name, and the message you send. This information is used solely to respond to your enquiry.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-ct-teal font-bold shrink-0">—</span>
                <span><strong className="text-gray-800">Analytics:</strong> We use Google Analytics 4 to understand how visitors use our site. This collects anonymised data including pages visited, time on site, browser type, and general location. It does not identify you personally. You can opt out via <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-ct-teal hover:underline">Google&rsquo;s opt-out tool</a>.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-ct-teal font-bold shrink-0">—</span>
                <span><strong className="text-gray-800">Booking via Calendly:</strong> If you book a consultation through our Calendly link, that information is collected and stored by Calendly under their own privacy policy. We receive your name, email, and any notes you include.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">How we use your information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="space-y-2 list-none pl-0">
              {[
                'Respond to your enquiries and consultation requests',
                'Provide our consulting services to you',
                'Improve and maintain this website',
                'Understand how our site is being used (via anonymised analytics)',
              ].map(item => (
                <li key={item} className="flex gap-3">
                  <span className="text-ct-teal shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">How we store and protect your information</h2>
            <p>
              Information submitted via our contact form is transmitted by email and stored securely. We take reasonable steps to protect personal information from misuse, loss, and unauthorised access. Our website is hosted on Vercel, which operates data centres with industry-standard security practices.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Third-party services</h2>
            <p className="mb-3">This site links to or integrates with the following third-party services, each governed by their own privacy policies:</p>
            <ul className="space-y-2 list-none pl-0">
              {[
                { name: 'Google Analytics', url: 'https://policies.google.com/privacy' },
                { name: 'Calendly', url: 'https://calendly.com/privacy' },
                { name: 'Amazon (for book purchases)', url: 'https://www.amazon.com.au/gp/help/customer/display.html?nodeId=468496' },
              ].map(item => (
                <li key={item.name} className="flex gap-3">
                  <span className="text-ct-teal font-bold shrink-0">—</span>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-ct-teal hover:underline">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Cookies</h2>
            <p>
              Google Analytics uses cookies to collect anonymised usage data. By using this site you consent to this. You can disable cookies in your browser settings or use Google&rsquo;s opt-out browser add-on to prevent Analytics tracking.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Your rights</h2>
            <p>
              Under the Australian Privacy Act, you have the right to request access to the personal information we hold about you, and to ask us to correct it if it is inaccurate. To make a request, contact us at{' '}
              <a href="mailto:info@challengethat.com.au" className="text-ct-teal hover:underline">info@challengethat.com.au</a>.
              We will respond within 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The date at the top of this page reflects when it was last revised. Continued use of the site after any changes constitutes acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Contact us</h2>
            <p>
              If you have any questions about this privacy policy or how we handle your information, please contact us:
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <p><strong className="text-gray-800">Challenge That Pty Ltd</strong></p>
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
