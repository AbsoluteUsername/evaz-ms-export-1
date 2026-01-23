'use client'

import type { ServiceCategory } from '@/types'

interface ServiceTabsProps {
  categories: ServiceCategory[]
  activeTab: string
  onTabChange: (tabId: string) => void
}

export function ServiceTabs({ categories, activeTab, onTabChange }: ServiceTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onTabChange(category.id)}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
            activeTab === category.id
              ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/30'
              : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-700 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400'
          }`}
          
        >
          {category.title}
        </button>
      ))}
    </div>
  )
}
