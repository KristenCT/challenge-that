import type { Metadata } from 'next'
import ArticleLayout, { Pullquote, Callout } from '../../components/ArticleLayout'

export const metadata: Metadata = {
  title: 'Your Member Database Is Lying to You | Challenge That',
  description: 'Most venues assume their CRM data is messy but usable. The reality is often worse. The five data gaps that silently undermine personalisation and campaign performance.',
}

export default function Article() {
  return (
    <ArticleLayout
      tag="Data quality"
      tagColor="amber"
      title="Your member database is lying to you — the data gap audit every venue needs"
      readTime="7 min read"
      topics="Data · CRM"
      ctaHeading="Run a live data gap check"
      ctaBody="ANALYTIQ diagnoses your database in minutes — not weeks."
      ctaPrompt="See it in action →"
    >
      <p>Ask most venue marketing managers how clean their member database is, and you&rsquo;ll get a version of the same answer: &ldquo;Pretty good, we think.&rdquo; Ask them to define &ldquo;pretty good,&rdquo; and the conversation gets uncomfortable fast.</p>
      <p>Most venues are operating with a member database that has five distinct data gaps. Left unaddressed, these gaps mean your personalisation is based on guesses, your campaign lists are smaller than they should be, and your reporting is almost certainly optimistic.</p>

      <h2>Gap 1: Missing contact information</h2>
      <p>In our experience auditing venue CRM databases, between 40&ndash;70% of member records are missing either a valid email address or a valid mobile number. <strong>These aren&rsquo;t lapsed members &mdash; many are active visitors who enrolled at the bar and gave minimal details.</strong></p>
      <p>This is a collection problem as much as a data problem. If your enrolment flow doesn&rsquo;t capture email at minimum, you&rsquo;re building a database you can&rsquo;t communicate with. Progressive data capture &mdash; gathering additional details across touchpoints &mdash; is the systematic fix.</p>

      <h2>Gap 2: Duplicate records</h2>
      <p>When customers can enrol at the bar, online, and via app, duplicates are inevitable. We regularly find 30&ndash;50% duplicate rates in unaudited databases. The practical consequences are severe: a customer&rsquo;s transaction history is split, their tier calculation may be wrong, and you may be sending two copies of every campaign to the same person.</p>

      <Pullquote>We regularly find 30&ndash;50% duplicate rates in unaudited databases &mdash; and split transaction history that makes segmentation unreliable.</Pullquote>

      <h2>Gap 3: Stale or outdated records</h2>
      <p>The average member database we see has records that are 2&ndash;4 years old without any reconfirmation. People move. Email addresses change. Phone numbers are recycled. A database that was 80% contactable three years ago may be 50% contactable today &mdash; but nothing in the platform flags this unless you look.</p>

      <h2>Gap 4: Transaction data that doesn&rsquo;t flow properly</h2>
      <p>The connection between your POS and your CRM is often more fragile than it appears. <strong>Transactions may be delayed, partially mapped, or missing entirely for certain product categories or terminals.</strong> The result: member spend histories that look complete but have silent gaps &mdash; which in turn makes spend-based segmentation unreliable.</p>

      <h2>Gap 5: Preference and behavioural data that was never captured</h2>
      <p>Most venue CRMs store what members have done &mdash; visits, spend, redemptions. Very few capture why: preferred day-part, entertainment preferences, dietary restrictions, event attendance. This isn&rsquo;t a platform limitation in most cases. It&rsquo;s a capture strategy that was never built.</p>

      <Callout
        title="The five-question data gap diagnostic"
        items={[
          'What % of member records have a valid, confirmed email address?',
          'When did you last run a deduplication check — and what was the result?',
          'What % of your database hasn\'t updated any contact details in 24+ months?',
          'Can you confirm your POS-to-CRM transaction sync is complete and current?',
          'What behavioural or preference data do you hold beyond transactional history?',
        ]}
      />

      <h2>How ANALYTIQ surfaces these gaps automatically</h2>
      <p>ANALYTIQ was built in part to surface exactly these issues &mdash; without requiring manual database exports or analyst time. It identifies contactability gaps, flags anomalous transaction patterns that may indicate sync failures, and tracks data freshness across your member database. If you&rsquo;d like to see what it surfaces in your data, a free demo takes about 20 minutes.</p>
    </ArticleLayout>
  )
}
