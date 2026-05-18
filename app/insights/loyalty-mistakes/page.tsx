import type { Metadata } from 'next'
import ArticleLayout, { Pullquote, Callout, ArticleCTA } from '../../components/ArticleLayout'

export const metadata: Metadata = {
  title: 'The Five Loyalty Mistakes Hospitality Venues Keep Making | Challenge That',
  description: 'Most loyalty programs in Australian hospitality aren\'t broken — they\'re just built on assumptions that were never tested. Here are the five mistakes that matter most.',
}

export default function Article() {
  return (
    <ArticleLayout
      tag="Loyalty strategy"
      tagColor="slate"
      title="The five loyalty mistakes hospitality venues keep making (and how to fix them)"
      readTime="8 min read"
      topics="CRM · Loyalty"
      ctaHeading="Want to audit your own program?"
      ctaBody="We can run a loyalty health check against your current setup."
      ctaPrompt="Book a review →"
    >
      <p>Most loyalty programs in Australian hospitality aren&rsquo;t broken. They&rsquo;re just built on assumptions that were never tested. The program is technically live &mdash; tiers exist, emails go out, points accumulate. The question is whether any of it is actually changing customer behaviour.</p>
      <p>After more than four decades working with pubs, clubs, and venues across Australia, we&rsquo;ve seen the same mistakes appear with striking regularity. Here are the five that matter most &mdash; and what to do instead.</p>

      <h2>Mistake 1: Treating all Gold members the same</h2>
      <p>Your Gold tier is not a segment. It&rsquo;s a bucket. A member who visits on a Friday night, drinks well, and brings friends sits in the same tier as one who visits once a quarter for a cheap parma and a tap beer. <strong>Same tier, wildly different value &mdash; and yet they receive identical communications.</strong></p>
      <p>The fix isn&rsquo;t to add more tiers. It&rsquo;s to build behavioural segments within tiers: recency, frequency, spend mix, day-part, social influence. Tier is a milestone; behaviour is the signal.</p>

      <Pullquote>Tier is a milestone. Behaviour is the signal.</Pullquote>

      <h2>Mistake 2: Leading with rewards instead of relevance</h2>
      <p>Discount-first loyalty programs attract discount-motivated members. That&rsquo;s not a customer base &mdash; it&rsquo;s a cost. When your best offer is &ldquo;10% off Tuesday lunch,&rdquo; you&rsquo;re training high-value customers to wait for deals rather than rewarding their natural behaviour.</p>
      <p>Relevance beats rewards. A personalised message referencing a customer&rsquo;s favourite night, their usual spend, or their anniversary of membership outperforms a generic offer by a significant margin &mdash; even when the offer itself is smaller.</p>

      <h2>Mistake 3: Measuring enrolments instead of outcomes</h2>
      <p>Loyalty program dashboards typically show enrolments, email open rates, and redemptions. <strong>None of these tell you whether the program is increasing visit frequency or customer lifetime value.</strong> They measure activity, not impact.</p>
      <p>The right metrics are: incremental visit frequency for active members vs a control group; average spend trajectory over the first 12 months of membership; and churn rate by segment. If you can&rsquo;t answer these, you don&rsquo;t actually know if your program is working.</p>

      <Callout
        title="The metrics that actually matter"
        items={[
          'Incremental visit frequency: members vs comparable non-members',
          'Average spend trajectory: first visit through month 12',
          'Segment churn rate: who\'s leaving, and from which tier',
          'Reactivation rate: are lapsed members returning after campaigns?',
          'Revenue per communication: not opens — actual downstream spend',
        ]}
      />

      <h2>Mistake 4: Letting your CRM vendor define your loyalty strategy</h2>
      <p>Platforms are tools, not strategies. When a venue&rsquo;s loyalty design is essentially &ldquo;whatever the default template allows,&rdquo; you end up with a program shaped by software constraints rather than customer insight. The most common symptom: loyalty mechanics that look identical to every other venue using the same platform.</p>
      <p>Strategy comes first. Platform selection &mdash; and configuration &mdash; follows. If your program can only do what the vendor pre-built, it&rsquo;s time to separate the strategy question from the technology question.</p>

      <h2>Mistake 5: Ignoring the 70% who joined and went quiet</h2>
      <p>Across most programs we audit, between 60&ndash;80% of the member database hasn&rsquo;t engaged with a campaign in the past six months. These aren&rsquo;t churned customers &mdash; many are still visiting. They&rsquo;re just not recognising that their visits connect to the program.</p>
      <p><strong>Passive members are the biggest untapped opportunity in most loyalty programs.</strong> A structured reactivation strategy &mdash; one built on behaviour triggers, not just &ldquo;we miss you&rdquo; emails &mdash; can move a meaningful percentage back into active status within 90 days.</p>
    </ArticleLayout>
  )
}
