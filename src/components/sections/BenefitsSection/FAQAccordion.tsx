'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FAQ } from '@/types'

interface FAQAccordionProps {
  items: FAQ[]
}

function FAQItem({ item, isOpen, onToggle }: { item: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-stone-200 dark:border-stone-700 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span
          className={`text-base font-medium transition-colors duration-200 ${
            isOpen ? 'text-teal-600 dark:text-teal-400' : 'text-stone-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400'
          }`}
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {item.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-teal-600 dark:text-teal-400' : 'text-stone-400'
          }`}
          strokeWidth={1.5}
        />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-200 ease-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p
            className="text-stone-600 dark:text-stone-400 leading-relaxed pr-8 pb-5"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 overflow-hidden h-full">
      <div className="px-6 md:px-8">
        {items.map((item, index) => (
          <FAQItem
            key={item.id}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  )
}
