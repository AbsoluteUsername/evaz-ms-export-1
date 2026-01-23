'use client'

import Image from 'next/image'
import * as LucideIcons from 'lucide-react'
import { industryLabels } from '@/types'
import type { Client } from '@/types'

interface ClientCardProps {
  client: Client
  onClick?: (client: Client) => void
}

export function ClientCard({ client, onClick }: ClientCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(client)
    } else if (client.website) {
      window.open(client.website, '_blank', 'noopener,noreferrer')
    }
  }

  // Get the industry icon component
  const IndustryIcon = (LucideIcons as any)[client.industryIcon] || LucideIcons.Circle

  return (
    <article
      className={`
        relative w-full max-w-md mx-auto
        rounded-2xl overflow-hidden
        bg-white dark:bg-stone-900
        border-2 border-stone-200 dark:border-stone-700
        p-8
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        hover:-translate-y-2
        ${onClick || client.website ? 'cursor-pointer' : ''}
      `}
      onClick={handleClick}
      role={onClick || client.website ? 'button' : undefined}
      tabIndex={onClick || client.website ? 0 : undefined}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && (onClick || client.website)) {
          e.preventDefault()
          handleClick()
        }
      }}
    >
      {/* Industry Icon & Label */}
      <div className="flex flex-col items-center mb-6">
        <IndustryIcon
          className="w-8 h-8 text-teal-500 dark:text-teal-400 mb-2"
          aria-hidden="true"
        />
        <span className="text-sm font-medium text-stone-500 dark:text-stone-400">
          {industryLabels[client.industry]}
        </span>
      </div>

      {/* Logo Container */}
      <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden bg-stone-50 dark:bg-stone-800">
        {client.logoType === 'logo' && client.logo ? (
          // Standard logo - colorful by default
          <div className="relative w-full h-full flex items-center justify-center p-6">
            <Image
              src={client.logo}
              alt={`${client.name} logo`}
              fill
              className="
                object-contain p-4
                transition-all duration-500
              "
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        ) : client.logoType === 'photo' && client.logo ? (
          // Photo with teal overlay
          <div className="relative w-full h-full">
            <Image
              src={client.logo}
              alt={`${client.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-teal-600/20 dark:bg-teal-500/30 mix-blend-multiply" />
          </div>
        ) : (
          // No logo - show large industry icon
          <div className="w-full h-full flex items-center justify-center">
            <IndustryIcon
              className="w-32 h-32 text-teal-500/30 dark:text-teal-400/30"
              aria-hidden="true"
            />
          </div>
        )}
      </div>

      {/* Client Name */}
      <h3 className="text-2xl font-semibold font-display text-center text-stone-900 dark:text-stone-100 mb-2">
        {client.name}
      </h3>

      {/* Activity Type */}
      <p className="text-center text-stone-600 dark:text-stone-400 mb-6">
        {client.activityType}
      </p>

      {/* Partnership Badge */}
      <div className="flex justify-center">
        <div className="
          inline-flex items-center gap-2 px-4 py-2 rounded-full
          bg-teal-500/10 dark:bg-teal-500/20
          border border-teal-500/20 dark:border-teal-400/30
        ">
          <LucideIcons.Calendar className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          <span className="text-sm font-medium text-teal-700 dark:text-teal-300">
            Співпраця з {client.partnershipYear}
          </span>
        </div>
      </div>
    </article>
  )
}
