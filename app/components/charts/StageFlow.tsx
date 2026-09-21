'use client'

import { useInView } from './useInView'
import { accentBg, accentSubtleBg, accentText, TagColor } from './chartStyles'

export type Stage = {
  label: string
  sublabel?: string
}

type Props = {
  title?: string
  stages: Stage[]
  tagColor: TagColor
  className?: string
}

export default function StageFlow({ title, stages, tagColor, className = '' }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div ref={ref} className={className}>
      {title && <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">{title}</p>}

      {/* Mobile: vertical flow */}
      <div className="flex flex-col gap-0 sm:hidden">
        {stages.map((stage, i) => (
          <div key={stage.label}>
            <div className="flex items-start gap-3">
              <div
                className={`shrink-0 w-8 h-8 rounded-full ${accentSubtleBg[tagColor]} ${accentText[tagColor]} flex items-center justify-center text-xs font-bold`}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'scale(1)' : 'scale(0.6)',
                  transition: `opacity 0.4s ease-out ${i * 150}ms, transform 0.4s ease-out ${i * 150}ms`,
                }}
              >
                {i + 1}
              </div>
              <div className="pt-1">
                <p className="text-sm font-semibold text-gray-900 leading-snug">{stage.label}</p>
                {stage.sublabel && <p className="text-xs text-gray-500 mt-0.5 leading-snug">{stage.sublabel}</p>}
              </div>
            </div>
            {i < stages.length - 1 && (
              <div className="w-px ml-4 my-1" style={{ height: 20 }}>
                <div
                  className={`w-px ${accentBg[tagColor]}`}
                  style={{
                    height: inView ? '100%' : '0%',
                    transition: `height 0.4s ease-out ${i * 150 + 200}ms`,
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop: horizontal flow */}
      <div className="hidden sm:flex sm:items-start">
        {stages.map((stage, i) => (
          <div key={stage.label} className="flex items-start" style={{ flex: i < stages.length - 1 ? '1 1 0%' : '0 0 auto' }}>
            <div className="flex flex-col items-center text-center" style={{ width: 108 }}>
              <div
                className={`shrink-0 w-8 h-8 rounded-full ${accentSubtleBg[tagColor]} ${accentText[tagColor]} flex items-center justify-center text-xs font-bold`}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'scale(1)' : 'scale(0.6)',
                  transition: `opacity 0.4s ease-out ${i * 150}ms, transform 0.4s ease-out ${i * 150}ms`,
                }}
              >
                {i + 1}
              </div>
              <p className="text-sm font-semibold text-gray-900 leading-snug mt-2">{stage.label}</p>
              {stage.sublabel && <p className="text-xs text-gray-500 mt-0.5 leading-snug">{stage.sublabel}</p>}
            </div>
            {i < stages.length - 1 && (
              <div className="flex-1 h-px mt-4">
                <div
                  className={`h-px ${accentBg[tagColor]}`}
                  style={{
                    width: inView ? '100%' : '0%',
                    transition: `width 0.5s ease-out ${i * 150 + 200}ms`,
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
