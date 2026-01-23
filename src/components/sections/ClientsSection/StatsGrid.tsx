'use client'

import { StatCard } from './StatCard'
import type { Statistic } from '@/types'

interface StatsGridProps {
  statistics: Statistic[]
  animateOnScroll?: boolean
}

export function StatsGrid({ statistics, animateOnScroll = true }: StatsGridProps) {
  return (
    <div
      data-testid="stats-grid"
      className="grid grid-cols-2 gap-4 md:gap-6 auto-rows-fr"
    >
      {statistics.map((stat) => (
        <StatCard
          key={stat.id}
          stat={stat}
          animate={animateOnScroll}
        />
      ))}
    </div>
  )
}
