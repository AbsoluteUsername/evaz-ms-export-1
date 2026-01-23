'use client'

import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import type { ContactInfo } from '@/types'

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

function ViberIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.703c-.18.326-.59.691-.91.837-.32.145-.737.218-1.246.218-1.5 0-3.282-.71-5.31-2.115-1.932-1.337-3.503-3.115-4.665-5.28-.657-1.227-.985-2.4-.985-3.512 0-.39.044-.76.134-1.104.188-.723.597-1.332 1.146-1.71.22-.15.463-.264.72-.336.257-.072.526-.108.803-.108.19 0 .36.018.508.054.356.086.657.316.86.667.118.203.27.502.456.896.186.394.356.776.51 1.147.153.37.23.688.23.952 0 .372-.152.72-.457.946-.305.227-.63.443-.975.65-.346.207-.692.413-1.04.62.18.414.484.905.91 1.474.427.569.944 1.128 1.55 1.677.607.55 1.243 1.017 1.91 1.403.665.386 1.263.647 1.79.784.347-.347.723-.668 1.128-.962.405-.294.757-.44 1.055-.44.215 0 .444.077.688.232.244.155.503.354.777.598.274.244.516.474.727.69.21.217.343.386.397.508.085.192.128.387.128.583 0 .254-.067.515-.202.784z"/>
    </svg>
  )
}

interface ContactInfoCardProps {
  contactInfo: ContactInfo
  onPhoneClick?: () => void
  onEmailClick?: () => void
  onMessengerClick?: (messengerId: string) => void
}

export function ContactInfoCard({
  contactInfo,
  onPhoneClick,
  onEmailClick,
  onMessengerClick,
}: ContactInfoCardProps) {
  return (
    <div className="relative h-full">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 to-stone-800 dark:from-stone-800 dark:to-stone-900 p-8 md:p-10 h-full">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-teal-600/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-teal-500/5 to-transparent rounded-full blur-2xl" />

        <div className="relative space-y-8">
          {/* Header */}
          <div>
            <span
              className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/20 text-teal-400 text-sm font-medium mb-4"
              
            >
              Контактна інформація
            </span>
            <h3
              className="text-2xl md:text-3xl font-bold text-white"
              
            >
              Зв&apos;яжіться з нами
            </h3>
          </div>

          {/* Contact methods */}
          <div className="space-y-6">
            {/* Phone */}
            <a
              href={contactInfo.phone.href}
              onClick={() => onPhoneClick?.()}
              className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-teal-500/50 hover:scale-[1.02]"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg group-hover:shadow-teal-500/30 transition-shadow duration-300">
                <Phone className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <p
                  className="text-sm text-stone-400 mb-1"
                  
                >
                  Телефон
                </p>
                <p
                  className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors"
                  
                >
                  {contactInfo.phone.display}
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={contactInfo.email.href}
              onClick={() => onEmailClick?.()}
              className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-teal-500/50 hover:scale-[1.02]"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-shadow duration-300">
                <Mail className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <p
                  className="text-sm text-stone-400 mb-1"
                  
                >
                  Email
                </p>
                <p
                  className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors"
                  
                >
                  {contactInfo.email.primary}
                </p>
              </div>
            </a>

            {/* Working hours */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                <Clock className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <p
                  className="text-sm text-stone-400 mb-1"
                  
                >
                  Години роботи
                </p>
                <p
                  className="text-lg font-semibold text-white"
                  
                >
                  {contactInfo.workingHours.days}: {contactInfo.workingHours.hours}
                </p>
              </div>
            </div>
          </div>

          {/* Messengers */}
          <div>
            <p
              className="text-sm text-stone-400 mb-4"
              
            >
              Напишіть нам у месенджері
            </p>
            <div className="flex gap-4">
              {contactInfo.messengers.map((messenger) => (
                <a
                  key={messenger.id}
                  href={messenger.url}
                  onClick={() => onMessengerClick?.(messenger.id)}
                  className={`
                    group flex items-center gap-3 px-6 py-4 rounded-2xl
                    border border-white/10 backdrop-blur-sm
                    transition-all duration-300
                    hover:scale-105
                    ${messenger.id === 'telegram'
                      ? 'bg-[#0088cc]/20 hover:bg-[#0088cc]/30 hover:border-[#0088cc]/50'
                      : 'bg-[#7360F2]/20 hover:bg-[#7360F2]/30 hover:border-[#7360F2]/50'
                    }
                  `}
                >
                  {messenger.id === 'telegram' ? (
                    <TelegramIcon className="w-6 h-6 text-[#0088cc]" />
                  ) : (
                    <ViberIcon className="w-6 h-6 text-[#7360F2]" />
                  )}
                  <span
                    className="font-medium text-white"
                    
                  >
                    {messenger.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Location hint */}
          <div className="flex items-start gap-3 pt-4 border-t border-white/10">
            <MapPin className="w-5 h-5 text-stone-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <p
              className="text-sm text-stone-400 leading-relaxed"
              
            >
              Працюємо з клієнтами по всій Україні.<br />
              Онлайн консультації та дистанційне обслуговування.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
