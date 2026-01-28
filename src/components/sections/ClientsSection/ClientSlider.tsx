'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ClientCard } from './ClientCard'
import type { Client } from '@/types'

interface ClientSliderProps {
  clients: Client[]
  activeIndex?: number
  onPrev?: () => void
  onNext?: () => void
  onDotClick?: (index: number) => void
  onClientClick?: (client: Client) => void
  autoPlay?: boolean
  autoPlayInterval?: number
}

export function ClientSlider({
  clients,
  activeIndex: controlledIndex,
  onPrev,
  onNext,
  onDotClick,
  onClientClick,
  autoPlay = true,
  autoPlayInterval = 4000
}: ClientSliderProps) {
  const [internalIndex, setInternalIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null)

  const activeIndex = controlledIndex !== undefined ? controlledIndex : internalIndex
  const isControlled = controlledIndex !== undefined

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const handlePrev = useCallback(() => {
    const newIndex = (activeIndex - 1 + clients.length) % clients.length
    if (isControlled && onDotClick) {
      onDotClick(newIndex)
    } else {
      setInternalIndex(newIndex)
    }

    // Reset auto-play timer
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current)
    }
  }, [activeIndex, clients.length, isControlled, onDotClick])

  const handleNext = useCallback(() => {
    const newIndex = (activeIndex + 1) % clients.length
    if (isControlled && onDotClick) {
      onDotClick(newIndex)
    } else {
      setInternalIndex(newIndex)
    }

    // Reset auto-play timer
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current)
    }
  }, [activeIndex, clients.length, isControlled, onDotClick])

  const handleDotClick = useCallback(
    (index: number) => {
      if (isControlled && onDotClick) {
        onDotClick(index)
      } else {
        setInternalIndex(index)
      }

      // Reset auto-play timer
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current)
      }
    },
    [isControlled, onDotClick]
  )

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      handleNext()
    } else if (isRightSwipe) {
      handlePrev()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handlePrev, handleNext])

  // Auto-play
  useEffect(() => {
    if (!autoPlay || clients.length <= 1) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    autoPlayTimerRef.current = setInterval(() => {
      if (isControlled && onDotClick) {
        const newIndex = (activeIndex + 1) % clients.length
        onDotClick(newIndex)
      } else {
        setInternalIndex((prev) => (prev + 1) % clients.length)
      }
    }, autoPlayInterval)

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current)
      }
    }
  }, [autoPlay, autoPlayInterval, clients.length, activeIndex, isControlled, onDotClick])

  if (clients.length === 0) {
    return (
      <div className="text-center text-stone-500 py-8">
        Немає клієнтів для відображення
      </div>
    )
  }

  return (
    <div
      data-testid="client-slider"
      className="relative w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out will-change-transform"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`
          }}
        >
          {clients.map((client) => (
            <div key={client.id} className="w-full flex-shrink-0 px-4">
              <ClientCard client={client} onClick={onClientClick} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {clients.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Попередній клієнт"
            className="
              absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4
              w-12 h-12 rounded-full
              bg-white dark:bg-stone-800
              border-2 border-stone-200 dark:border-stone-700
              shadow-lg hover:shadow-xl
              transition-all duration-300
              flex items-center justify-center
              hover:scale-110 hover:bg-teal-50 dark:hover:bg-teal-900/30
              focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
            "
          >
            <ChevronLeft className="w-6 h-6 text-teal-600 dark:text-teal-400" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Наступний клієнт"
            className="
              absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4
              w-12 h-12 rounded-full
              bg-white dark:bg-stone-800
              border-2 border-stone-200 dark:border-stone-700
              shadow-lg hover:shadow-xl
              transition-all duration-300
              flex items-center justify-center
              hover:scale-110 hover:bg-teal-50 dark:hover:bg-teal-900/30
              focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
            "
          >
            <ChevronRight className="w-6 h-6 text-teal-600 dark:text-teal-400" />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {clients.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {clients.map((client, index) => (
            <button
              key={client.id}
              onClick={() => handleDotClick(index)}
              aria-label={`Slide ${index + 1} of ${clients.length}`}
              aria-current={index === activeIndex ? 'true' : 'false'}
              className={`
                w-2.5 h-2.5 rounded-full transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
                ${
                  index === activeIndex
                    ? 'bg-teal-600 dark:bg-teal-400 w-8'
                    : 'bg-stone-300 dark:bg-stone-600 hover:bg-stone-400 dark:hover:bg-stone-500'
                }
              `}
            />
          ))}
        </div>
      )}
    </div>
  )
}
