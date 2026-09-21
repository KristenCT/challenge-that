'use client'

import { useInView } from './useInView'
import { accentBg, TagColor } from './chartStyles'

type Props = {
  title?: string
  items: string[]
  tagColor: TagColor
  className?: string
}

export default function IconGrid({ title, items, tagColor, className = '' }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div ref={ref} className={`not-prose my-8 ${className}`}>
      {title && <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">{title}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item, i) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(10px)',
              transition: `opacity 0.5s ease-out ${i * 90}ms, transform 0.5s ease-out ${i * 90}ms`,
            }}
          >
            <span className={`shrink-0 w-6 h-6 rounded-full ${accentBg[tagColor]} text-white text-xs font-bold flex items-center justify-center`}>
              {i + 1}
            </span>
            <span className="text-sm text-gray-700 leading-snug">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
