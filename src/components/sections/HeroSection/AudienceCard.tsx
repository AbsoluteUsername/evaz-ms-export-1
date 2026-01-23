'use client'

import { Briefcase, User, Building2, type LucideIcon } from 'lucide-react'
import type { Audience } from '@/types'

const iconMap: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  user: User,
  building: Building2,
}

interface AudienceCardProps {
  audience: Audience
  onClick?: () => void
}

export function AudienceCard({ audience, onClick }: AudienceCardProps) {
  const Icon = iconMap[audience.icon] || Briefcase

  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 p-6 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1 hover:border-teal-500/50"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        {/* Icon and Type Badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
            <Icon className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <span
            className="px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 text-xs font-medium"
            
          >
            {audience.type}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-lg font-semibold text-stone-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors"
          
        >
          {audience.title}
        </h3>

        {/* Role */}
        <p
          className="text-sm text-stone-500 dark:text-stone-400 mb-3"
          
        >
          {audience.role}
        </p>

        {/* Needs */}
        <p
          className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed"
          
        >
          {audience.needs}
        </p>

        {/* Arrow indicator */}
        <div className="mt-4 flex items-center gap-2 text-teal-600 dark:text-teal-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
          <span
            className="text-sm font-medium"
            
          >
            Дізнатися більше
          </span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}
