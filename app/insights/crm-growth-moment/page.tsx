import type { Metadata } from 'next'
import ArticleLayout, { Pullquote } from '../../components/ArticleLayout'

export const metadata: Metadata = {
  title: 'The Moment I Realised CRM Could Drive Growth | Challenge That',
  description: "A boardroom argument in the early 2000s, five VIP segments, and the numbers that tanked when the campaign stopped. The origin of everything Challenge That does.",
  openGraph: {
    title: 'The Moment I Realised CRM Could Drive Growth | Challenge That',
    description: "A boardroom argument in the early 2000s, five VIP segments, and the numbers that tanked when the campaign stopped. The origin of everything Challenge That does.",
    url: 'https://challengethat.com.au/insights/crm-growth-moment',
  },
}

export default function Article() {
  return (
    <ArticleLayout
      tag="CRM"
      tagColor="coral"
      title="The moment I realised CRM could drive growth"
      readTime="5 min read"
      topics="CRM · Strategy"
      ctaHeading="Ready to see what your customer data is telling you?"
      ctaBody="We map, observe, value and engage - so your best customers stay that way."
      ctaPrompt="Start the conversation →"
    >
      <p>It was the early 2000s. I was working for an online sportsbook in the UK.</p>
      <p>We&rsquo;d done something that felt pretty progressive at the time: built five VIP segments based on value and frequency, and every month we sent each group something specific and relevant. Not a blanket offer blasted to the whole database. Something that said: <em>we know who you are, we know what you do, and we value it.</em></p>
      <p>It wasn&rsquo;t complicated. But it worked. These customers felt seen. Retention was solid. The numbers told a clear story.</p>
      <p>Then we hit the end of the financial year.</p>
      <p>The commercial director called it: costs needed to come down to hit year-end targets. The monthly VIP campaign was on the list. I pushed back. Hard. I made the case that these weren&rsquo;t costs &mdash; they were the thing keeping our best customers engaged. That spending money on the right people at the right time wasn&rsquo;t a luxury, it was the mechanism.</p>
      <p>I lost the argument.</p>
      <p>So I watched.</p>
      <p>And the numbers tanked.</p>

      <Pullquote>The &ldquo;saving&rdquo; became a loss that dwarfed whatever we&rsquo;d cut. The campaign wasn&rsquo;t a cost centre. It was a revenue driver wearing a marketing budget.</Pullquote>

      <p>What the CCO didn&rsquo;t see &mdash; couldn&rsquo;t see, because no one had connected those dots clearly enough &mdash; was that the campaign wasn&rsquo;t a cost centre. It was a revenue driver wearing a marketing budget. The moment we stopped showing those customers they mattered, they behaved accordingly. They drifted. They churned. The &ldquo;saving&rdquo; became a loss that dwarfed whatever we&rsquo;d cut.</p>
      <p>That experience never left me.</p>
      <p>Not because I was right and someone else was wrong. But because it showed me exactly what happens when customer data exists but the business doesn&rsquo;t truly understand what it&rsquo;s telling them. When retention gets treated as an expense instead of an investment. When the connection between what you spend on customers and what customers return to you isn&rsquo;t visible to the people making the decisions.</p>

      <h2>The gap that became the work</h2>
      <p>That&rsquo;s the gap I&rsquo;ve spent the years since trying to close.</p>
      <p>Map who your customers actually are. Observe what their behaviour is telling you. Understand their value &mdash; not just what they&rsquo;ve spent, but what they&rsquo;re worth if they stay. Then engage them in a way that proves you know the difference.</p>
      <p>That&rsquo;s MOVE. And it started, honestly, in a boardroom in the UK where I lost a fight I should have won, but learned something I&rsquo;ve never stopped using.</p>

      <h2>What this series is</h2>
      <p>This series is everything that&rsquo;s come since. Real projects, real data, real outcomes. The patterns that keep showing up. The mistakes that keep getting made. And the moments &mdash; like that one &mdash; where the numbers tell you exactly what you need to know, if you&rsquo;re willing to look.</p>
      <p>Follow along. There&rsquo;s plenty more where this came from.</p>
    </ArticleLayout>
  )
}
