'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  value: string   // e.g. "+90", "+33%", "+17%"
  className?: string
}

function parse(raw: string): { prefix: string; number: number; suffix: string } {
  const match = raw.match(/^([+\-$]*)(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return { prefix: '', number: 0, suffix: raw }
  return { prefix: match[1], number: parseFloat(match[2]), suffix: match[3] }
}

export default function CountUp({ value, className }: Props) {
  const { prefix, number, suffix } = parse(value)
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true

        const duration = 1200
        const start = performance.now()

        function tick(now: number) {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(Math.round(eased * number))
          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [number])

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  )
}
