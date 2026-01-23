'use client'

import { BenefitCard } from './BenefitCard'
import { FAQAccordion } from './FAQAccordion'
import { TeamCarousel } from './TeamCarousel'
import type { Benefit, Differentiator, FAQ } from '@/types'

interface BenefitsSectionProps {
  benefits: Benefit[]
  differentiators: Differentiator[]
  faqItems: FAQ[]
  onCtaClick: () => void
}

export function BenefitsSection({
  benefits,
  differentiators,
  faqItems,
  onCtaClick,
}: BenefitsSectionProps) {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background - subtle teal tint for cohesion */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/30 to-white dark:from-stone-950 dark:via-teal-950/20 dark:to-stone-950" />

      {/* Decorative teal elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-teal-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 text-sm font-medium mb-4"
            
          >
            Про нас
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white mb-4"
            
          >
            Чому обирають нас
          </h2>
          <p
            className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto"
            
          >
            Ми поєднуємо професіоналізм, системний підхід та особисту відповідальність
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <BenefitCard benefit={benefit} index={index} />
            </div>
          ))}
        </div>

        {/* Differentiators grid */}
        <div className="mb-16">
          <h3
            className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-white text-center mb-10"
            
          >
            Наші переваги
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, index) => (
              <div
                key={diff.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <BenefitCard benefit={diff} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Two column: Team + FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Team carousel */}
          <div className="flex">
            <TeamCarousel />
          </div>

          {/* FAQ */}
          <div className="flex flex-col">
            <h3
              className="text-2xl font-bold text-stone-900 dark:text-white mb-6"
              
            >
              Часті питання
            </h3>
            <div className="flex-1">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onCtaClick}
            className="px-8 py-4 rounded-xl bg-teal-600 text-white font-semibold text-lg transition-all duration-300 hover:bg-teal-700 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5 active:translate-y-0"
            
          >
            Отримати безкоштовну консультацію
          </button>
        </div>
      </div>
    </section>
  )
}
