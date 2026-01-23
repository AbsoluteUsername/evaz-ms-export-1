'use client'

import type { HeroContent } from '@/types'

interface HeroSectionProps {
  content: HeroContent
  onPrimaryCta: () => void
  onSecondaryCta: () => void
}

export function HeroSection({ content, onPrimaryCta, onSecondaryCta }: HeroSectionProps) {
  const handleScrollToServices = () => {
    const target = document.querySelector('#services')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/hero-section/hero-section-bg-team-front.webp')" }}
      />
      {/* Teal overlay for better text readability */}
      <div className="absolute inset-0 bg-teal-900/60 dark:bg-teal-950/70" />
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-900/40 via-transparent to-teal-900/50" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        {/* Main content */}
        <div className="text-center mb-12 md:mb-16">
          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in animation-delay-100"
            
          >
            {content.headline}
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-4 animate-fade-in animation-delay-200"
            
          >
            {content.subheadline}
          </p>

          {/* Description */}
          <p
            className="text-base text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in animation-delay-300"
            
          >
            {content.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-400">
            <button
              onClick={handleScrollToServices}
              className="px-8 py-4 rounded-xl bg-teal-600/70 backdrop-blur-sm border border-teal-400/30 text-white font-semibold text-lg transition-all duration-300 hover:bg-teal-600/90 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5 active:translate-y-0"
              
            >
              {content.cta.text}
            </button>
            <button
              onClick={onSecondaryCta}
              className="px-8 py-4 rounded-xl border-2 border-white/50 text-white font-semibold text-lg transition-all duration-300 hover:border-white hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0"
              
            >
              {content.secondaryCta.text}
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <button
            onClick={handleScrollToServices}
            className="p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Прокрутити вниз"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
