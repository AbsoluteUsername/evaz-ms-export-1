import type {
  ContactSectionProps,
  ContactFormData,
} from '../types'
import { ContactForm } from './ContactForm'
import { ContactInfoCard } from './ContactInfoCard'

export function ContactSection({
  formConfig,
  contactInfo,
  sectionContent,
  onFormSubmit,
  onPhoneClick,
  onMessengerClick,
}: ContactSectionProps) {
  const handleFormSubmit = (data: ContactFormData) => {
    onFormSubmit?.(data)
  }

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E8DCC8]/30 via-white to-white dark:from-stone-900 dark:via-stone-950 dark:to-stone-950" />

      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 text-sm font-medium mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Контакти
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {sectionContent.title}
          </h2>
          <p
            className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {sectionContent.subtitle}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Contact form */}
          <div className="order-2 lg:order-1">
            <ContactForm
              config={formConfig}
              onSubmit={handleFormSubmit}
            />
          </div>

          {/* Contact info card */}
          <div className="order-1 lg:order-2">
            <ContactInfoCard
              contactInfo={contactInfo}
              onPhoneClick={onPhoneClick}
              onMessengerClick={onMessengerClick}
            />
          </div>
        </div>

        {/* Bottom CTA text */}
        <div className="mt-12 text-center">
          <p
            className="text-stone-500 dark:text-stone-400 text-sm"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {sectionContent.ctaText}
          </p>
        </div>
      </div>
    </section>
  )
}
