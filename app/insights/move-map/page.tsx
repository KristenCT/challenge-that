import type { Metadata } from 'next'
import ArticleLayout, { Pullquote } from '../../components/ArticleLayout'

export const metadata: Metadata = {
  title: 'M is for Map: Why Most CRM Strategies Fail Before They Start | Challenge That',
  description: 'Of the four principles in the MOVE methodology, Map is where the work begins. It\'s also where most businesses skip ahead — and six months later wonder what went wrong.',
  openGraph: {
    title: 'M is for Map: Why Most CRM Strategies Fail Before They Start | Challenge That',
    description: 'Of the four principles in the MOVE methodology, Map is where the work begins. It\'s also where most businesses skip ahead — and six months later wonder what went wrong.',
    url: 'https://challengethat.com.au/insights/move-map',
  },
}

export default function Article() {
  return (
    <ArticleLayout
      tag="MOVE methodology"
      tagColor="teal"
      title="M is for Map: Why most CRM strategies fail before they start"
      readTime="7 min read"
      topics="MOVE · CRM strategy"
      ctaHeading="Ready to map your customer journey properly?"
      ctaBody="We build the blueprint before we touch the technology. Let's start with your map."
      ctaPrompt="Start the conversation →"
    >
      <p>Of the four principles in the MOVE methodology, Map is where the work begins. It&rsquo;s also where most businesses skip ahead.</p>
      <p>Not deliberately. Nobody sits down and decides to bypass the planning stage. It happens because planning feels slow. Because there&rsquo;s pressure to get the platform live. Because the vendor is ready to build and the project team is eager to progress. And because mapping a customer journey, done properly, requires the kind of focused thinking that doesn&rsquo;t feel like visible progress.</p>
      <p>So businesses jump to the technology. And six months later, they&rsquo;re sitting with a system that doesn&rsquo;t reflect how they actually work, and wondering what went wrong.</p>
      <p>What went wrong was the map.</p>

      <h2>What mapping actually means</h2>
      <p>Map is not about drawing a diagram. It&rsquo;s about answering a deceptively simple question: how do customers move through each stage of their relationship with your business, and what needs to happen &mdash; on both sides &mdash; to keep them moving?</p>
      <p>In the MOVE methodology, mapping works in two layers.</p>
      <p>The first is the <strong>product journey</strong>. This is your high-level blueprint: the primary lifecycle your customer travels through from the moment they first encounter your business to the point where they become an active, retained customer, or eventually lapse. It covers each stage of that journey, what the customer needs to do to progress, what your team needs to do internally, and what resources are required to support both.</p>
      <p>The product journey is intentionally high-level. It should be fast to complete. Its job is to give everyone in the business a shared picture of how the customer experience is supposed to work, and to create the foundation everything else is built on. Critically, once you&rsquo;ve defined your primary product journey, all other product journeys should follow the same structure as closely as possible. Consistency across journeys creates a consistent, predictable customer experience. And a predictable experience is a manageable one.</p>
      <p>The second layer is the <strong>MOVE canvas</strong>. This is where the detail lives. For each stage of the product journey, the MOVE canvas documents the exact steps your team needs to take, what the customer needs to do, what triggers movement from one step to the next, what constitutes a stall, and what happens when someone falls out of the process entirely. It&rsquo;s the document you hand to a technical team and say: build this.</p>

      <Pullquote>Together, the product journey and the MOVE canvas become your CRM blueprint. Not a wishlist. Not a vague brief. A clear, specific set of requirements that leaves nothing open to interpretation.</Pullquote>

      <h2>Why businesses skip it</h2>
      <p>In a fast-paced environment, the planning process can seem like a roadblock. The pressure to show progress pushes teams toward building before they&rsquo;ve finished thinking. And the perceived complexity of mapping &mdash; all those stages, all those steps, all those edge cases &mdash; can feel overwhelming before you&rsquo;ve started.</p>
      <p>But here&rsquo;s what skipping the map actually costs.</p>
      <p>Without it, teams work in silos. Marketing launches a campaign the sales team isn&rsquo;t briefed on. Sales converts a customer the operations team isn&rsquo;t ready to onboard. Customer service resolves complaints with no visibility of the customer&rsquo;s history or value. Every department is doing its job, but nobody is managing the customer&rsquo;s journey.</p>
      <p>The technology doesn&rsquo;t fix this. If anything, it makes it more visible. A CRM platform built without a clear map will surface every gap in your process, every undefined handoff, every missing step. And when it does, the system gets blamed &mdash; when the real issue was there long before the first field was configured.</p>

      <h2>What the map makes possible</h2>
      <p>When the mapping is done properly, everything downstream becomes cleaner.</p>
      <p>The technical team knows exactly what to build. The process owners know what they&rsquo;re accountable for. The metrics are built around stages that are clearly defined. And when something goes wrong &mdash; when a customer stalls, or a stage underperforms &mdash; you know exactly where to look.</p>
      <p>More than that, a well-mapped journey creates consistency for the customer. They know what to expect. The experience feels considered. And a considered experience builds the kind of trust that drives retention.</p>
      <p>Map is the first step in MOVE because without it, the other three don&rsquo;t have a foundation to stand on. Ownership of undefined processes is impossible. Visibility into unmeasured stages is meaningless. And evolution without a documented baseline is just change without direction.</p>

      <Pullquote>Start with the map. Do it properly. The rest follows.</Pullquote>
    </ArticleLayout>
  )
}
