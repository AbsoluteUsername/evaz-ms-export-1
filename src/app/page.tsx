'use client'

import { useState, useCallback } from 'react'
import { Header, Footer, MobileMenu } from '@/components/shell'
import { Modal, Toast } from '@/components/ui'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { ContactSection, ContactForm } from '@/components/sections/ContactSection'
import {
  company,
  contact,
  navigation,
  footer,
  heroContent,
  serviceCategories,
  fopServices,
  tovServices,
  additionalServices,
  premiumOffer,
  benefits,
  differentiators,
  faqItems,
  formConfig,
  contactInfo,
  contactSectionContent,
} from '@/data/siteData'
import type { ContactFormData } from '@/types'

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState('Загальна консультація')
  const [toast, setToast] = useState<{
    message: string
    type: 'success' | 'error' | 'info'
    isVisible: boolean
  }>({
    message: '',
    type: 'info',
    isVisible: false,
  })

  const openContactModal = useCallback((packageName?: string) => {
    setSelectedPackage(packageName || 'Загальна консультація')
    setIsContactModalOpen(true)
  }, [])

  const closeContactModal = useCallback(() => {
    setIsContactModalOpen(false)
  }, [])

  const handleFormSubmit = useCallback((data: ContactFormData) => {
    console.log('Form submitted:', data)
    closeContactModal()
    setToast({
      message: "Дякуємо! Ми зв'яжемось з вами найближчим часом.",
      type: 'success',
      isVisible: true,
    })
  }, [closeContactModal])

  const dismissToast = useCallback(() => {
    setToast((prev) => ({ ...prev, isVisible: false }))
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-stone-950">
      {/* Header */}
      <Header
        company={company}
        contact={contact}
        navigation={navigation}
        onCtaClick={() => openContactModal()}
        onMenuToggle={setIsMobileMenuOpen}
      />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        company={company}
        contact={contact}
        navigation={navigation}
        onCtaClick={() => openContactModal()}
      />

      {/* Main Content */}
      <main className="flex-1 pt-[60px] md:pt-[70px]">
        {/* Hero Section */}
        <HeroSection
          content={heroContent}
          onPrimaryCta={() => {
            const target = document.querySelector('#services')
            if (target) target.scrollIntoView({ behavior: 'smooth' })
          }}
          onSecondaryCta={() => openContactModal()}
        />

        {/* Services Section */}
        <ServicesSection
          categories={serviceCategories}
          fopServices={fopServices}
          tovServices={tovServices}
          additionalServices={additionalServices}
          premiumOffer={premiumOffer}
          onServiceCtaClick={openContactModal}
        />

        {/* Benefits Section */}
        <BenefitsSection
          benefits={benefits}
          differentiators={differentiators}
          faqItems={faqItems}
          onCtaClick={() => openContactModal()}
        />

        {/* Contact Section */}
        <ContactSection
          formConfig={formConfig}
          contactInfo={contactInfo}
          sectionContent={contactSectionContent}
          packageName={selectedPackage}
          onFormSubmit={handleFormSubmit}
        />
      </main>

      {/* Footer */}
      <Footer
        company={company}
        contact={contact}
        navigation={navigation}
        footer={footer}
      />

      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        title="Отримати консультацію"
      >
        <ContactForm
          config={formConfig}
          packageName={selectedPackage}
          onSubmit={handleFormSubmit}
          inModal
        />
      </Modal>

      {/* Toast notifications */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onDismiss={dismissToast}
        duration={5000}
      />
    </div>
  )
}
