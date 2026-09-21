'use client'

import { useInView } from './useInView'
import { accentStroke, accentText, TagColor } from './chartStyles'

export type TrendPoint = {
  x: string
  y: number
  marker?: string
}

type Props = {
  title: string
  yLabel: string
  points: TrendPoint[]
  tagColor: TagColor
  caption?: string
  className?: string
}

const WIDTH = 560
const HEIGHT = 180
const PAD_X = 24
const PAD_Y = 20

export default function TrendLine({ title, yLabel, points, tagColor, caption, className = '' }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>()

  const plotW = WIDTH - PAD_X * 2
  const plotH = HEIGHT - PAD_Y * 2
  const stepX = plotW / (points.length - 1)

  const coords = points.map((p, i) => ({
    ...p,
    cx: PAD_X + i * stepX,
    cy: PAD_Y + plotH * (1 - p.y / 100),
  }))

  const path = coords.map((c, i) => `${i === 0 ? 'M' : 'L'} ${c.cx} ${c.cy}`).join(' ')
  const markerPoint = coords.find((c) => c.marker)

  return (
    <div
      ref={ref}
      className={`not-prose my-8 rounded-2xl border border-gray-100 bg-gray-50 p-6 lg:p-8 ${className}`}
    >
      <div className="flex items-baseline justify-between mb-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{title}</p>
        <p className="text-xs text-gray-400">{yLabel}</p>
      </div>

      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full h-auto overflow-visible" preserveAspectRatio="xMidYMid meet">
        {/* baseline */}
        <line x1={PAD_X} y1={PAD_Y + plotH} x2={WIDTH - PAD_X} y2={PAD_Y + plotH} className="stroke-gray-200" strokeWidth={1} />

        {markerPoint && (
          <line
            x1={markerPoint.cx}
            y1={PAD_Y}
            x2={markerPoint.cx}
            y2={PAD_Y + plotH}
            className="stroke-gray-300"
            strokeWidth={1}
            strokeDasharray="4 4"
          />
        )}

        <path
          d={path}
          fill="none"
          className={accentStroke[tagColor]}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={100}
          style={{
            strokeDasharray: 100,
            strokeDashoffset: inView ? 0 : 100,
            transition: 'stroke-dashoffset 1.3s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />

        {coords.map((c, i) => (
          <circle
            key={i}
            cx={c.cx}
            cy={c.cy}
            r={4}
            className={`${accentText[tagColor]} fill-current`}
            style={{
              opacity: inView ? 1 : 0,
              transition: `opacity 0.4s ease-out ${300 + i * 220}ms`,
            }}
          />
        ))}

        {coords.map((c, i) => (
          <text
            key={`label-${i}`}
            x={c.cx}
            y={HEIGHT - 2}
            textAnchor={i === 0 ? 'start' : i === coords.length - 1 ? 'end' : 'middle'}
            className="fill-gray-400"
            style={{ fontSize: 11 }}
          >
            {c.x}
          </text>
        ))}

        {markerPoint && (
          <text
            x={markerPoint.cx}
            y={PAD_Y - 6}
            textAnchor="middle"
            className="fill-gray-500 font-medium"
            style={{ fontSize: 11 }}
          >
            {markerPoint.marker}
          </text>
        )}
      </svg>

      {caption && <p className="text-xs text-gray-400 mt-2">{caption}</p>}
    </div>
  )
}
