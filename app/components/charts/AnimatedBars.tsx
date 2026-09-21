'use client'

import { useInView } from './useInView'
import { accentBg, TagColor } from './chartStyles'

export type BarItem = {
  label: string
  value: number
  max: number
  display: string
  variant?: 'accent' | 'muted'
}

type Props = {
  title: string
  source?: string
  items: BarItem[]
  tagColor: TagColor
  className?: string
}

export default function AnimatedBars({ title, source, items, tagColor, className = '' }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`not-prose my-8 rounded-2xl border border-gray-100 bg-gray-50 p-6 lg:p-8 ${className}`}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-6">{title}</p>
      <div className="space-y-5">
        {items.map((item, i) => {
          const pct = Math.min(100, (item.value / item.max) * 100)
          const isMuted = item.variant === 'muted'
          return (
            <div key={item.label}>
              <div className="flex items-baseline justify-between mb-1.5 gap-4">
                <span className="text-sm text-gray-600">{item.label}</span>
                <span className={`text-sm font-bold shrink-0 ${isMuted ? 'text-gray-400' : 'text-gray-900'}`}>
                  {item.display}
                </span>
              </div>
              <div className="h-3 w-full rounded-full bg-white border border-gray-200 overflow-hidden">
                <div
                  className={`h-full rounded-full ${isMuted ? 'bg-gray-300' : accentBg[tagColor]}`}
                  style={{
                    width: inView ? `${pct}%` : '0%',
                    transition: `width 1s cubic-bezier(0.22, 1, 0.36, 1) ${i * 120}ms`,
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
      {source && <p className="text-xs text-gray-400 mt-6 pt-4 border-t border-gray-200">{source}</p>}
    </div>
  )
}
