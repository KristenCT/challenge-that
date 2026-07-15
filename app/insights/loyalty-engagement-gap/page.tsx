import type { Metadata } from 'next'
import ArticleLayout, { Pullquote } from '../../components/ArticleLayout'

export const metadata: Metadata = {
  title: 'Loyalty Is Easy to Join and Easy to Ignore: What That Means for Pubs and Clubs | Challenge That',
  description: 'Australians have never belonged to more loyalty programs, or paid attention to fewer of them. What a new Mi3 report on loyalty engagement means for pubs, clubs and hospitality venues — and why AI won’t fix fragmented member data on its own.',
  openGraph: {
    title: 'Loyalty Is Easy to Join and Easy to Ignore: What That Means for Pubs and Clubs | Challenge That',
    description: 'Australians have never belonged to more loyalty programs, or paid attention to fewer of them. What a new Mi3 report on loyalty engagement means for pubs, clubs and hospitality venues — and why AI won’t fix fragmented member data on its own.',
    url: 'https://challengethat.com.au/insights/loyalty-engagement-gap',
  },
}

export default function Article() {
  return (
    <ArticleLayout
      tag="Loyalty engagement"
      tagColor="slate"
      title="Loyalty is easy to join and easy to ignore. What does that mean for pubs and clubs?"
      readTime="6 min read"
      topics="Loyalty strategy · Member data"
      ctaHeading="Do you know which of your members are actually engaged?"
      ctaBody="ANALYTIQ brings gaming, POS and member data into one view, so you can see who's active, who's drifting, and what to do next."
      ctaPrompt="Start the conversation →"
    >
      <p>Australians have never belonged to more loyalty programs, and never paid attention to fewer of them.</p>
      <p>That&rsquo;s the uncomfortable finding at the centre of a recent Mi3 piece on loyalty marketing, built around commentary from Quantum Jump CEO Ben Goodale and Australian GM Rachel Wintle.</p>
      <p>Ninety three per cent of Australians are now a member of at least one loyalty program, yet the average number of programs people actively engage with has fallen to its lowest point in a decade. Gen Z&rsquo;s participation has dropped from five programs in 2022 to three and a half.</p>
      <p>For pubs, clubs, and hospitality venues, this isn&rsquo;t a distant retail trend. It&rsquo;s a preview of what happens when a membership base grows faster than the insight needed to understand it.</p>

      <h2>A full database isn&rsquo;t the same as an engaged one</h2>
      <p>Most venues have spent years building up their membership numbers, and rightly so. A big member base looks like a strong, healthy club on paper. But Goodale and Wintle&rsquo;s point is that a growing database can quietly disguise a much weaker commercial reality underneath it: members who signed up for a joining offer and never came back, members who are still active but never see anything relevant to them, and members who are technically &ldquo;on the books&rdquo; but have no real relationship with the venue at all.</p>
      <p>The research backs this up. Almost two thirds of loyalty members believe brands already hold enough data about them. Only 40% say they regularly receive offers that actually feel relevant. That&rsquo;s a wide, expensive gap between the data being collected and the value being returned from it.</p>

      <Pullquote>Almost two thirds of loyalty members believe brands already hold enough data about them. Only 40% say they regularly receive offers that actually feel relevant.</Pullquote>

      <p>For a club or pub, that gap tends to show up in familiar ways. A promotion goes out to the whole membership list because there&rsquo;s no easy way to segment it. A high value member on the top tier gets the same generic birthday email as someone who visited once eighteen months ago. Gaming, F&B, and events data all live in different systems that don&rsquo;t talk to each other, so no one has a single, reliable view of who&rsquo;s actually engaged.</p>

      <h2>Cost of living hasn&rsquo;t killed loyalty, it&rsquo;s made it more selective</h2>
      <p>One of the more useful reframes in the article is that consumers haven&rsquo;t turned against loyalty programs. They&rsquo;ve become more selective about which ones earn their attention. Facing cost of living pressure, people are narrowing their focus to the programs that deliver something they can actually feel, rather than spreading their attention thin across every program they&rsquo;ve ever joined.</p>
      <p>That&rsquo;s good news for venues, in a way. It means members aren&rsquo;t looking to disengage from their local club. They&rsquo;re looking for a reason to keep paying attention. A program built around genuine, visible value &mdash; a relevant offer, a meaningful tier benefit, recognition that feels earned &mdash; still has every chance to hold that attention. A program built around generic points and a one-off sign-up discount doesn&rsquo;t.</p>

      <h2>The real fix sits underneath the marketing</h2>
      <p>The article makes an important point that&rsquo;s easy to miss: better loyalty isn&rsquo;t only a creative or campaign problem. Often the bigger obstacle is structural. Disconnected point of sale systems, inconsistent product or member codes, and fragmented data across gaming, F&B, and marketing platforms can leave even well-resourced teams unable to answer basic questions about member behaviour.</p>
      <p>Goodale describes a loyalty program where the brand, in theory, held years of purchase history, but different systems recorded that history in different, incompatible ways. The result was a business that couldn&rsquo;t reliably tell who its most loyal customers actually were, let alone what they wanted next.</p>
      <p>This will sound familiar to anyone who has tried to pull a single, trustworthy report across a venue&rsquo;s gaming system, POS, and CRM. The data usually exists. The problem is that it&rsquo;s scattered, and stitching it together manually eats up the time that should be spent acting on it.</p>

      <h2>Where AI helps, and where it can make things worse</h2>
      <p>Generative AI is being pitched across the industry as the fix for exactly this kind of resourcing gap, and there&rsquo;s real substance to that. AI can analyse far more member behaviour, far faster, than a small marketing team ever could manually. It can turn a mountain of transaction data into genuinely useful segments and offers.</p>
      <p>But the article is right to flag the risk alongside the opportunity. AI doesn&rsquo;t fix bad or fragmented data, it scales it. Feed it inconsistent member records and unclear behavioural signals, and it will confidently produce inconsistent, unclear recommendations, just faster and at a much bigger scale. Wintle&rsquo;s suggested &ldquo;creep test&rdquo; is a useful gut check here too: before sending a highly personalised offer, ask whether a member would feel understood by it, or unsettled by it. Relevance and intrusiveness sit closer together than most teams realise.</p>

      <h2>What this means for venues</h2>
      <p>The venues that come out ahead over the next few years probably won&rsquo;t be the ones with the largest membership list. They&rsquo;ll be the ones who can answer a simple question with confidence: who among our members is actually engaged, and what do they need from us next?</p>
      <p>That means shifting focus from sign-ups to active participation. Tracking not just how many members a venue has, but how many are redeeming offers, moving up through tiers, and returning regularly. It means connecting gaming, F&B, and promotions data so a member&rsquo;s full relationship with the venue is visible in one place, rather than split across three systems that don&rsquo;t reconcile. And it means using that visibility to make offers and communications feel earned and specific, not generic.</p>
      <p>This is exactly the gap ANALYTIQ was built to close for pubs and clubs. By bringing gaming, POS, and member data together into one view &mdash; with features like Member Intelligence, Tier Movement tracking, and Promotions Analytics &mdash; venues can move past guessing who their loyal members are and start seeing it clearly, then act on it without adding more work for already stretched teams.</p>

      <Pullquote>The membership numbers will keep growing across the industry. The venues that win won&rsquo;t be the ones with the biggest list. They&rsquo;ll be the ones who actually know what&rsquo;s on it.</Pullquote>

      <p className="text-sm text-gray-400 italic">Source: Mi3, featuring commentary from Quantum Jump CEO Ben Goodale and Australian GM Rachel Wintle.</p>
    </ArticleLayout>
  )
}
