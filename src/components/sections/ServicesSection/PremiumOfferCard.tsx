'use client'

import { useState } from 'react'
import { Check, AlertTriangle, Sparkles, ChevronDown } from 'lucide-react'
import type { PremiumOffer } from '@/types'

interface PremiumOfferCardProps {
  offer: PremiumOffer
  onCtaClick: (packageName: string) => void
}

function getPunktPlural(count: number): string {
  const lastTwo = Math.abs(count) % 100
  const lastOne = lastTwo % 10

  if (lastTwo >= 11 && lastTwo <= 19) {
    return 'пунктів'
  }
  if (lastOne === 1) {
    return 'пункт'
  }
  if (lastOne >= 2 && lastOne <= 4) {
    return 'пункти'
  }
  return 'пунктів'
}

export function PremiumOfferCard({ offer, onCtaClick }: PremiumOfferCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasMoreItems = offer.includes.length > 6
  const remainingCount = offer.includes.length - 6
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-600/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="relative p-8 md:p-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          <span style={{ fontFamily: "'Montserrat', sans-serif" }}>{offer.badge}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left column - Main info */}
          <div>
            <h3
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {offer.title}
            </h3>
            <p
              className="text-teal-400 font-medium mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {offer.subtitle}
            </p>
            <p
              className="text-xl text-stone-300 mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {offer.headline}
            </p>

            {/* What's included */}
            <div className="mb-8">
              <h4
                className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Що входить
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {(isExpanded ? offer.includes : offer.includes.slice(0, 6)).map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-teal-400" strokeWidth={2} />
                    </div>
                    <span
                      className="text-sm text-stone-300"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
                {hasMoreItems && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-1 text-sm text-teal-400 font-medium pl-8 hover:text-teal-300 transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {isExpanded ? (
                      <>
                        <span>Згорнути</span>
                        <ChevronDown className="w-4 h-4 rotate-180 transition-transform" />
                      </>
                    ) : (
                      <>
                        <span>+ ще {remainingCount} {getPunktPlural(remainingCount)}</span>
                        <ChevronDown className="w-4 h-4 transition-transform" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => onCtaClick(offer.title)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold text-lg transition-all duration-300 hover:from-teal-600 hover:to-teal-700 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5 active:translate-y-0"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {offer.cta.text}
            </button>
          </div>

          {/* Right column - Risks & Results */}
          <div className="space-y-8">
            {/* Risks */}
            <div className="p-6 rounded-2xl bg-rose-500/10 border border-rose-500/20">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-rose-400" />
                <h4
                  className="text-sm font-semibold text-rose-400 uppercase tracking-wider"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Ризики без аудиту
                </h4>
              </div>
              <ul className="space-y-2">
                {offer.risks.slice(0, 4).map((risk, index) => (
                  <li
                    key={index}
                    className="text-sm text-stone-300 flex items-start gap-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <span className="text-rose-400 mt-1">•</span>
                    {risk}
                  </li>
                ))}
              </ul>
              <p
                className="mt-4 text-sm text-rose-300 font-medium"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {offer.warningMessage}
              </p>
            </div>

            {/* Results */}
            <div className="p-6 rounded-2xl bg-teal-500/10 border border-teal-500/20">
              <h4
                className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Що ви отримаєте
              </h4>
              <ul className="space-y-2">
                {offer.results.map((result, index) => (
                  <li
                    key={index}
                    className="text-sm text-stone-300 flex items-start gap-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <Check className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
