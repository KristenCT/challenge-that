import type { Metadata } from 'next'
import ArticleLayout, { Pullquote, Callout } from '../../components/ArticleLayout'

export const metadata: Metadata = {
  title: 'Why Your CRM Implementation Stalled | Challenge That',
  description: "You bought the platform. You migrated the data. Six months later, your team is back to spreadsheets. Here's why CRM stalls happen and how to fix them.",
  openGraph: {
    title: 'Why Your CRM Implementation Stalled | Challenge That',
    description: "You bought the platform. You migrated the data. Six months later, your team is back to spreadsheets. Here's why CRM stalls happen and how to fix them.",
    url: 'https://challengethat.com.au/insights/crm-stalled',
  },
}

export default function Article() {
  return (
    <ArticleLayout
      tag="CRM"
      tagColor="teal"
      title="Why your CRM implementation stalled - and what to do about it"
      readTime="6 min read"
      topics="CRM · Operations"
      ctaHeading="Stalled CRM? We've seen it before."
      ctaBody="A focused diagnostic engagement - not a full rebuild."
      ctaPrompt="Talk to us →"
    >
      <p>The pattern is consistent enough to have a name. We call it the CRM cliff: a venue invests in a platform, migrates data, trains staff, launches - and then, somewhere around the three-to-six month mark, usage quietly drops. Campaigns stop being sent. Segments sit unchanged. The team goes back to what they know.</p>
      <p>It&rsquo;s not a people problem. It&rsquo;s an implementation problem - one that almost always traces back to the same set of structural gaps.</p>

      <h2>The gap between &ldquo;go live&rdquo; and &ldquo;actually useful&rdquo;</h2>
      <p>Most CRM vendors will get you to go-live. That&rsquo;s what their implementation teams are measured on. <strong>What happens after go-live - building the workflows, establishing the cadence, connecting the data sources that matter - that part is usually left to you.</strong></p>
      <p>The result is a platform that technically works but doesn&rsquo;t yet fit the way your team operates. Features go unused not because the team doesn&rsquo;t want to use them, but because nobody has translated &ldquo;CRM capability&rdquo; into &ldquo;this is how we send the Tuesday win-back campaign.&rdquo;</p>

      <Pullquote>Features go unused not because the team doesn&rsquo;t want to - but because nobody translated capability into workflow.</Pullquote>

      <h2>The three most common stall points</h2>

      <h3>1. Data that isn&rsquo;t clean enough to act on</h3>
      <p>Many venues migrate whatever is in their POS or old system without a cleanup pass first. The result is duplicate records, missing contact details, and transaction data that doesn&rsquo;t map cleanly to the new platform&rsquo;s structure. Teams quickly learn that campaign lists are unreliable and stop trusting the tool.</p>

      <h3>2. No owner and no cadence</h3>
      <p>CRM doesn&rsquo;t run itself. Someone needs to own the weekly send, the segment review, the campaign calendar. In smaller venues, this often isn&rsquo;t a defined role - it&rsquo;s &ldquo;whoever has time.&rdquo; Without a clear owner and a recurring rhythm, the platform becomes a passive repository rather than an active tool.</p>

      <h3>3. Success metrics that were never defined</h3>
      <p>If nobody agreed upfront on what a good CRM outcome looks like, it&rsquo;s hard to demonstrate value - and equally hard to course-correct. Vague goals (&ldquo;better customer engagement&rdquo;) produce vague results. <strong>Specific metrics drive specific actions.</strong></p>

      <Callout
        title="The CRM stall rescue checklist"
        items={[
          'Audit data quality before relaunching campaigns - fix the foundation first',
          'Assign a named CRM owner, even if it\'s one of several responsibilities',
          'Define three measurable outcomes for the next 90 days',
          'Start with two campaigns that are simple to build and easy to measure',
          'Review results weekly - even for five minutes - to build the habit',
        ]}
      />

      <h2>When to bring in external help</h2>
      <p>If your implementation has been live for more than six months and you still can&rsquo;t answer &ldquo;is it working?&rdquo;, the stall has become structural. At that point, a short external engagement - not to rebuild, but to diagnose and reset - usually delivers more value than continued internal troubleshooting.</p>
      <p>We work with venues in exactly this situation. Often the platform is fine. The data just needs cleaning, the workflows need mapping, and the team needs a clear activation plan. None of that requires starting over.</p>
    </ArticleLayout>
  )
}
