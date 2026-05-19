import type { Metadata } from 'next'
import ArticleLayout, { Pullquote, Callout } from '../../components/ArticleLayout'

export const metadata: Metadata = {
  title: 'Why the Gold Silver Bronze Tier Model Is Failing Australian Venues | Challenge That',
  description: 'Tier-based loyalty programs consistently reward spend history over behaviour, and ignore the customers most likely to grow. Here\'s a better framework.',
}

export default function Article() {
  return (
    <ArticleLayout
      tag="Tier design"
      tagColor="coral"
      title="Gold, Silver, Bronze: why the standard loyalty tier model is failing Australian venues"
      readTime="9 min read"
      topics="Loyalty · Tier design"
      ctaHeading="Is your tier model working hard enough?"
      ctaBody="A tier design review takes half a day and usually surfaces immediate wins."
      ctaPrompt="Start the conversation →"
    >
      <p>If you operate a loyalty program in Australian hospitality and it has three tiers named something like Gold, Silver, and Bronze - you&rsquo;re in good company. You&rsquo;re also probably getting significantly less value from your loyalty investment than you should be.</p>
      <p>The three-tier model isn&rsquo;t wrong. It&rsquo;s incomplete. And the gap between &ldquo;technically functional&rdquo; and &ldquo;actually driving behaviour&rdquo; is where most venues are quietly bleeding retention value.</p>

      <h2>The fundamental problem with spend-based tiers</h2>
      <p>Most tier structures in hospitality are built on cumulative spend. Spend enough and you move up. Spend less and you move down. It&rsquo;s simple, visible, and easy to communicate. It&rsquo;s also a model that systematically <strong>rewards history over intent</strong>.</p>
      <p>Consider two members. The first visits every Friday, brings two friends, and spends consistently. The second visited heavily last year during a renovation at their usual venue, has since returned to their old habits, and now visits once every six weeks. Under most spend-based systems, they may sit in the same tier - despite having radically different forward-looking value.</p>

      <Pullquote>Spend-based tiers reward history over intent. The customers most likely to grow are often invisible.</Pullquote>

      <h2>What behavioural segmentation adds to tier design</h2>
      <p>The fix isn&rsquo;t to abolish tiers. It&rsquo;s to run behavioural segmentation alongside them - inside them, ideally - so that your communication and offers are shaped by what a member is likely to do next, not just what they&rsquo;ve done in the past.</p>
      <p>Behavioural segments that consistently drive better outcomes in hospitality include: <strong>rising frequency</strong> (visit rate trending up - reward the momentum), <strong>lapsed high-value</strong> (was frequent, has slowed - requires a different reactivation approach than general lapse), <strong>social multiplier</strong> (brings others, even if individual spend is moderate), and <strong>day-part anchored</strong> (highly predictable visit patterns that create targeting opportunities).</p>

      <h2>The tier model that actually works</h2>
      <p>The most effective loyalty structures we&rsquo;ve helped build combine three elements: a visible tier framework that members understand and aspire to, a behavioural segmentation layer that runs beneath it and shapes actual communications, and a set of milestone triggers - not calendar cadences - that drive outreach.</p>

      <Callout
        title="Signs your tier model needs a redesign"
        items={[
          'More than 60% of your Gold members haven\'t engaged with a campaign in 6 months',
          'Tier distribution is skewed - too many Gold, almost no one in Bronze',
          'Your top tier and bottom tier receive essentially the same content',
          'You can\'t identify which tier is driving the most incremental revenue',
          'Members don\'t know what behaviour earns them a tier upgrade',
        ]}
      />

      <h2>The platform-agnostic tier review</h2>
      <p>One thing we hear regularly: &ldquo;our platform doesn&rsquo;t support that kind of segmentation.&rdquo; More often than not, it does - it just hasn&rsquo;t been configured for it. Our loyalty strategy engagements are platform-agnostic: we design the right structure first, then work with whatever system you have to implement it as fully as possible.</p>
      <p>Where gaps genuinely exist at the platform level, we can assess whether a technology change is warranted - and help you select and transition to something better suited to a behavioural approach.</p>
    </ArticleLayout>
  )
}
