'use client'

import { useEffect, useState, useRef } from 'react'
import type { Statistic } from '@/types'

interface StatCardProps {
  stat: Statistic
  animate?: boolean
  animationDuration?: number
}

export function StatCard({
  stat,
  animate = true,
  animationDuration = 2000
}: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    if (!animate || hasAnimatedRef.current) {
      setDisplayValue(stat.value)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true
            setIsAnimating(true)

            // Check for prefers-reduced-motion
            const prefersReducedMotion = window.matchMedia(
              '(prefers-reduced-motion: reduce)'
            ).matches

            if (prefersReducedMotion) {
              setDisplayValue(stat.value)
              setIsAnimating(false)
              return
            }

            // Animate the counter
            const startTime = Date.now()
            const startValue = 0
            const endValue = stat.value

            const animateValue = () => {
              const now = Date.now()
              const elapsed = now - startTime
              const progress = Math.min(elapsed / animationDuration, 1)

              // Ease-out cubic for smooth deceleration
              const easeProgress = 1 - Math.pow(1 - progress, 3)
              const currentValue = Math.floor(
                startValue + (endValue - startValue) * easeProgress
              )

              setDisplayValue(currentValue)

              if (progress < 1) {
                requestAnimationFrame(animateValue)
              } else {
                setIsAnimating(false)
              }
            }

            requestAnimationFrame(animateValue)
          }
        })
      },
      { threshold: 0.3 }
    )

    const element = cardRef.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [stat.value, animate, animationDuration])

  return (
    <div
      ref={cardRef}
      className="
        group relative overflow-hidden rounded-2xl
        bg-white dark:bg-stone-900
        border border-stone-200 dark:border-stone-700
        p-6 md:p-8
        shadow-lg hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      {/* Number with suffix */}
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold font-display text-teal-600 dark:text-teal-400 mb-2">
          {displayValue}
          {stat.suffix && (
            <span className="text-teal-500 dark:text-teal-500">
              {stat.suffix}
            </span>
          )}
        </div>

        {/* Label */}
        <div className="text-base md:text-lg font-semibold text-stone-900 dark:text-stone-100 mb-0.5">
          {stat.label}
        </div>

        {/* Sublabel */}
        {stat.sublabel && (
          <div className="text-xs md:text-sm text-stone-500 dark:text-stone-400">
            {stat.sublabel}
          </div>
        )}
      </div>

      {/* Subtle accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0" />
    </div>
  )
}
