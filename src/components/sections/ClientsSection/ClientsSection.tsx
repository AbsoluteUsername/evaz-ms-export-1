'use client'

import { ClientSlider } from './ClientSlider'
import { StatsGrid } from './StatsGrid'
import type { ClientsSectionContent, Client } from '@/types'

interface ClientsSectionProps {
  content: ClientsSectionContent
  onClientClick?: (client: Client) => void
}

export function ClientsSection({ content, onClientClick }: ClientsSectionProps) {
  return (
    <section
      id="clients"
      className="relative py-16 md:py-24 bg-stone-50 dark:bg-stone-950"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="
          text-3xl md:text-4xl lg:text-5xl
          font-semibold font-display
          text-center text-stone-900 dark:text-stone-100
          mb-12 md:mb-16
        ">
          {content.title}
        </h2>

        {/* Two-Column Layout */}
        <div className="
          grid grid-cols-1 lg:grid-cols-2
          gap-8 lg:gap-12
          items-start
        ">
          {/* Left Column: Client Slider (Desktop) / Second on Mobile */}
          <div className="order-2 lg:order-1">
            <ClientSlider
              clients={content.clients}
              onClientClick={onClientClick}
              autoPlay={true}
              autoPlayInterval={4000}
            />
          </div>

          {/* Right Column: Statistics Grid (Desktop) / First on Mobile */}
          <div className="order-1 lg:order-2">
            <StatsGrid
              statistics={content.statistics}
              animateOnScroll={true}
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
    </section>
  )
}
