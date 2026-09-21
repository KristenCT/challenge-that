'use client'

import { useInView } from './useInView'
import { accentSubtleBg, accentText, TagColor } from './chartStyles'

export type CompareCard = {
  eyebrow: string
  description: string
  status: string
  trend: 'up' | 'down'
}

type Props = {
  title?: string
  sameLabel: string
  cards: [CompareCard, CompareCard]
  tagColor: TagColor
  className?: string
}

export default function CompareCards({ title, sameLabel, cards, tagColor, className = '' }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div ref={ref} className={`not-prose my-8 ${className}`}>
      {title && <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">{title}</p>}

      <div className="flex items-center justify-center mb-[-14px] relative z-10">
        <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${accentSubtleBg[tagColor]} ${accentText[tagColor]} border border-white`}>
          {sameLabel}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
        {cards.map((card, i) => (
          <div
            key={card.eyebrow}
            className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(14px)',
              transition: `opacity 0.5s ease-out ${i * 150}ms, transform 0.5s ease-out ${i * 150}ms`,
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">{card.eyebrow}</p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">{card.description}</p>
            <div className="flex items-center gap-2">
              <span className={`text-base leading-none ${card.trend === 'up' ? accentText[tagColor] : 'text-gray-400'}`}>
                {card.trend === 'up' ? '▲' : '▼'}
              </span>
              <span className="text-xs font-semibold text-gray-600">{card.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
