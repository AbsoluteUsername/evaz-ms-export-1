'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const carouselImages = [
  '/assets/benefits-carusel-imgs/foto-212.webp',
  '/assets/benefits-carusel-imgs/foto-123.jpg',
  '/assets/benefits-carusel-imgs/foto-4.webp',
  '/assets/benefits-carusel-imgs/foto-18.jpg',
  '/assets/benefits-carusel-imgs/foto-40.jpg',
  '/assets/benefits-carusel-imgs/foto-52.jpg',
]

export function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 text-white h-full w-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pb-0">
        <h3
          className="text-sm font-semibold uppercase tracking-wider text-teal-100"
          
        >
          Наша команда
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Попередній"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Наступний"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Image carousel */}
      <div className="relative aspect-[2/3] m-6 mt-4 rounded-xl overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Команда EVAZ-MS ${index + 1}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Dots indicator */}
      <div className="flex items-center justify-center gap-2 p-6 pt-0">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false)
              setCurrentIndex(index)
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-6 bg-white'
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Перейти до слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
