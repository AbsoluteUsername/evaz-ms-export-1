'use client'

import { useState } from 'react'
import { ServiceCard } from './ServiceCard'
import { ServiceTabs } from './ServiceTabs'
import { PremiumOfferCard } from './PremiumOfferCard'
import type { ServiceCategory, ServicePackage, PremiumOffer } from '@/types'

interface ServicesSectionProps {
  categories: ServiceCategory[]
  fopServices: ServicePackage[]
  tovServices: ServicePackage[]
  additionalServices: ServicePackage[]
  premiumOffer: PremiumOffer
  onServiceCtaClick: (packageName: string) => void
}

export function ServicesSection({
  categories,
  fopServices,
  tovServices,
  additionalServices,
  premiumOffer,
  onServiceCtaClick,
}: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState('fop')

  const getServicesForTab = () => {
    switch (activeTab) {
      case 'fop':
        return fopServices
      case 'tov':
        return tovServices
      case 'additional':
        return additionalServices
      default:
        return fopServices
    }
  }

  const currentServices = getServicesForTab()

  return (
    <section
      id="services"
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background - transitions from hero's teal */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 via-white to-white dark:from-teal-950/40 dark:via-stone-950 dark:to-stone-950" />
      {/* Subtle teal accent */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-teal-800/10 to-transparent dark:from-teal-900/20" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-600/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 text-sm font-medium mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Наші послуги
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Оберіть пакет послуг
          </h2>
          <p
            className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Пропонуємо гнучкі пакети для різних типів бізнесу та потреб
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10">
          <ServiceTabs
            categories={categories}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        {/* Service cards grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {currentServices.map((service, index) => (
            <div
              key={service.id}
              className="animate-fade-in w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] max-w-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                service={service}
                onCtaClick={onServiceCtaClick}
              />
            </div>
          ))}
        </div>

        {/* Premium offer */}
        <div className="mt-16">
          <PremiumOfferCard
            offer={premiumOffer}
            onCtaClick={onServiceCtaClick}
          />
        </div>
      </div>
    </section>
  )
}
