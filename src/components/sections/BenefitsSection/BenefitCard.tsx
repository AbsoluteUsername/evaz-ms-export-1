'use client'

import { TrendingUp, ShieldCheck, CheckCircle, Users, CheckSquare, Building2, Eye, Award, MessageCircle, type LucideIcon } from 'lucide-react'
import type { Benefit, Differentiator } from '@/types'

const iconMap: Record<string, LucideIcon> = {
  'trending-up': TrendingUp,
  'shield-check': ShieldCheck,
  'check-circle': CheckCircle,
  'users': Users,
  'check-square': CheckSquare,
  'building': Building2,
  'eye': Eye,
  'award': Award,
  'message-circle': MessageCircle,
}

interface BenefitCardProps {
  benefit: Benefit | Differentiator
  index: number
}

export function BenefitCard({ benefit, index }: BenefitCardProps) {
  const Icon = iconMap[benefit.icon] || CheckCircle
  const title = 'title' in benefit ? benefit.title : benefit.feature
  const description = benefit.description

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1 hover:border-teal-500/50 h-full"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        {/* Icon */}
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 mb-5 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
          <Icon className="w-7 h-7" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3
          className="text-lg font-semibold text-stone-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors"
          
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed"
          
        >
          {description}
        </p>
      </div>
    </div>
  )
}
