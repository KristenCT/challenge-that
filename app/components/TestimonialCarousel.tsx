'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

type Testimonial = {
  quote: string
  attribution: string
  role: string
  photo: string
}

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [idx, setIdx] = useState(0)

  const prev = useCallback(() => setIdx(i => (i - 1 + testimonials.length) % testimonials.length), [testimonials.length])
  const next = useCallback(() => setIdx(i => (i + 1) % testimonials.length), [testimonials.length])

  useEffect(() => {
    const t = setInterval(next, 7000)
    return () => clearInterval(t)
  }, [next])

  const t = testimonials[idx]

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Quote content - keyed so the fade-in fires on every change */}
      <div key={idx} className="animate-fade-in-up text-center px-4">
        <div className="text-ct-teal text-7xl leading-none mb-2 select-none">&ldquo;</div>
        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed italic mb-10">
          {t.quote}
        </p>
        <div className="flex flex-col items-center gap-3">
          <Image
            src={t.photo}
            alt={t.attribution}
            width={64}
            height={64}
            className="rounded-full object-cover w-16 h-16 ring-2 ring-ct-teal-subtle"
          />
          <div>
            <p className="font-semibold text-gray-900">{t.attribution}</p>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-5 mt-10">
        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === idx ? 'w-6 bg-ct-teal' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Prev / Next arrows */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-ct-teal hover:text-ct-teal transition-colors"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-ct-teal hover:text-ct-teal transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}
