'use client'

import { useState } from 'react'
import { Check, Star, ChevronDown } from 'lucide-react'
import type { ServicePackage } from '@/types'

interface ServiceCardProps {
  service: ServicePackage
  onCtaClick: (packageName: string) => void
}

function getServicePlural(count: number): string {
  const lastTwo = Math.abs(count) % 100
  const lastOne = lastTwo % 10

  if (lastTwo >= 11 && lastTwo <= 19) {
    return 'послуг'
  }
  if (lastOne === 1) {
    return 'послуга'
  }
  if (lastOne >= 2 && lastOne <= 4) {
    return 'послуги'
  }
  return 'послуг'
}

export function ServiceCard({ service, onCtaClick }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasMoreItems = service.includes.length > 5
  const remainingCount = service.includes.length - 5
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col ${
        service.popular
          ? 'bg-gradient-to-br from-teal-50 to-white dark:from-teal-900/20 dark:to-stone-900 border-teal-500 shadow-lg shadow-teal-500/10'
          : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-700 hover:border-teal-500/50'
      }`}
    >
      {/* Popular badge */}
      {service.popular && (
        <div className="absolute top-0 right-0">
          <div className="flex items-center gap-1 px-3 py-1 bg-teal-500 text-white text-xs font-medium rounded-bl-xl">
            <Star className="w-3 h-3" fill="currentColor" />
            <span >Популярний</span>
          </div>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3
          className="text-lg font-semibold text-stone-900 dark:text-white mb-2 pr-20"
          
        >
          {service.title}
        </h3>

        {/* Target audience */}
        <p
          className="text-sm text-stone-500 dark:text-stone-400 mb-4"
          
        >
          {service.targetAudience}
        </p>

        {/* Pricing */}
        <div className="mb-6">
          <span
            className={`text-2xl font-bold ${
              service.popular ? 'text-teal-600 dark:text-teal-400' : 'text-stone-900 dark:text-white'
            }`}
            
          >
            {service.pricing.display}
          </span>
        </div>

        {/* Includes list */}
        <div className="space-y-3 flex-1">
          {(isExpanded ? service.includes : service.includes.slice(0, 5)).map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-teal-600 dark:text-teal-400" strokeWidth={2} />
              </div>
              <span
                className="text-sm text-stone-600 dark:text-stone-300 leading-tight"
                
              >
                {item}
              </span>
            </div>
          ))}
          {hasMoreItems && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-sm text-teal-600 dark:text-teal-400 font-medium pl-8 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
              
            >
              {isExpanded ? (
                <>
                  <span>Згорнути</span>
                  <ChevronDown className="w-4 h-4 rotate-180 transition-transform" />
                </>
              ) : (
                <>
                  <span>+ ще {remainingCount} {getServicePlural(remainingCount)}</span>
                  <ChevronDown className="w-4 h-4 transition-transform" />
                </>
              )}
            </button>
          )}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => onCtaClick(service.title)}
          className={`w-full py-3 mt-6 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${
            service.popular
              ? 'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-500/30'
              : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-teal-600 hover:text-white'
          }`}
          
        >
          Отримати консультацію
        </button>
      </div>
    </div>
  )
}
