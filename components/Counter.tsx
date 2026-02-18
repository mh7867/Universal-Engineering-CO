'use client'

import { useEffect, useRef } from 'react'

interface CounterProps {
  target: number
  duration?: number
  suffix?: string
  className?: string
}

export default function Counter({ target, duration = 2, suffix = '', className = '' }: CounterProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animateCounter()
        }
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateCounter = () => {
    const element = elementRef.current
    if (!element) return

    const startValue = 0
    const startTime = Date.now()

    const updateCounter = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)

      const currentValue = Math.floor(progress * target)
      element.textContent = currentValue + suffix

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      }
    }

    updateCounter()
  }

  return <div ref={elementRef} className={className}>0{suffix}</div>
}
