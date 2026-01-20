import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import type { ContactInfo } from '../types'

// Custom Telegram icon
function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

// Custom Viber icon
function ViberIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.187.59 6.74.498 9.903c-.093 3.163-.21 9.097 5.57 10.705l.004.003-.003 2.444s-.04.988.614 1.189c.652.201 1.033-.419 1.654-1.087.344-.369.816-.911 1.173-1.324 3.227.27 5.716-.35 5.998-.44.653-.207 4.347-.684 4.948-5.583.62-5.05-.304-8.24-1.992-9.662l-.002.002c-.395-.353-1.99-1.57-5.744-1.782a21.1 21.1 0 0 0-1.32-.041zm.13 1.874c.973-.009 1.948.05 2.692.196 0 0 4.405.748 4.405 6.25 0 0 .26 3.56-1.31 4.922 0 0-.215.328-.678.475-.867.273-4.416.648-5.688-.174l-.012-.008c-.467-.255-.804-.498-1.044-.778-.15-.175-.24-.312-.282-.428l-.004-.01a.664.664 0 0 1-.04-.206c-.005-.06.006-.116.033-.173.073-.148.248-.248.472-.203.257.05.595.348.905.565.416.29.952.608 1.618.545.418-.04.786-.14 1.07-.328.158-.11.312-.268.312-.54 0-.223-.184-.393-.336-.507a16.2 16.2 0 0 0-.655-.424c-.62-.38-1.412-.866-1.81-1.28-.576-.596-.763-1.354-.524-2.14.17-.56.588-1.028 1.163-1.335.373-.2.804-.322 1.245-.38a6.2 6.2 0 0 1 1.336-.023c.297.03.57.086.8.153.337.098.652.24.84.55.15.249.107.564-.107.75-.19.166-.454.197-.682.126a4.8 4.8 0 0 0-.625-.133 4.3 4.3 0 0 0-.894.002c-.2.022-.397.06-.572.117-.304.1-.505.258-.594.492-.072.188-.018.338.137.506.253.275.867.658 1.409.99.362.222.742.456 1.074.716.327.256.73.64.73 1.238 0 .68-.45 1.198-.975 1.52a4 4 0 0 1-1.636.512c-.938.08-1.782-.117-2.44-.47a9.4 9.4 0 0 1-.802-.505.26.26 0 0 0-.288-.017.25.25 0 0 0-.115.272c.024.096.074.2.15.312.188.277.472.506.895.745 1.084.617 3.99.387 4.729.155.28-.089.372-.238.372-.238.98-.85.902-3.242.902-3.242 0-4.41-3.343-4.983-3.343-4.983-.634-.125-1.498-.171-2.384-.163-2.188.02-4.186.614-4.186.614-2.297.984-2.143 3.088-2.143 3.088l.001 1.129c.034 2.268.704 3.632 1.09 4.168.057.08.09.123.09.123a.32.32 0 0 0 .048.05l.018.016c.18.159.436.188.643.07.085-.048.164-.123.22-.24.06-.127.096-.296.096-.51v-.16-.155-.012l-.001-.012-.001-.144c-.003-.145-.005-.308-.004-.486 0-.203.003-.422.012-.654.006-.137.062-.246.152-.323a.42.42 0 0 1 .32-.096c.117.016.232.08.313.192.055.077.103.196.103.355l-.001.197v.3l.001.245v.126l.002.026a.1.1 0 0 0 .003.02l.004.013.006.01a.08.08 0 0 0 .02.02l.006.003.008.002s.008 0 .021-.005a.1.1 0 0 0 .028-.02c.45-.516.889-1.04 1.252-1.435.485-.527.84-.847 1.13-.847.335 0 .578.246.64.692.043.31-.003.658-.086.987-.084.334-.203.639-.314.858-.093.182-.241.461-.412.773-.192.352-.409.749-.579 1.082-.064.126-.06.258-.002.375a.49.49 0 0 0 .275.25c.163.06.379.05.653-.066 1.03-.436 1.991-1.09 2.694-1.637.1-.078.19-.15.27-.217-.003-.001-.003-.003-.003-.003-.254-.195-.513-.474-.708-.82-.165-.294-.28-.64-.28-1.018 0-.224.118-.416.297-.526a.65.65 0 0 1 .592-.032c.263.11.425.38.425.656 0 .21.054.404.147.565.093.163.23.286.375.378.26.162.553.247.817.312.073.017.143.033.21.048.04.003.075.018.101.041a.16.16 0 0 1 .051.088c.007.039-.002.082-.032.118a.22.22 0 0 1-.116.08c-.092.027-.196.044-.31.052a3.4 3.4 0 0 1-.786-.036l-.035-.007a2.5 2.5 0 0 1-.474-.14 2.5 2.5 0 0 1-.67-.388c-.094-.08-.196-.178-.303-.307a2.7 2.7 0 0 1-.263-.396l-.024-.053a7 7 0 0 0-.304.231c-.811.641-1.96 1.411-3.197 1.929-.498.209-.959.282-1.354.209a1.32 1.32 0 0 1-.786-.494 1.28 1.28 0 0 1-.242-.79c.002-.136.026-.278.075-.422.148-.437.373-.839.585-1.228.164-.3.32-.587.432-.844.063-.143.124-.295.178-.446.075-.21.134-.42.155-.606.017-.153-.004-.244-.007-.253l-.003-.003c-.009 0-.08.024-.21.163-.358.38-.79.896-1.231 1.4l-.074.085c-.198.228-.47.362-.772.362-.266 0-.556-.09-.794-.31a1 1 0 0 1-.264-.431 1.4 1.4 0 0 1-.076-.45l-.001-.037v-.19l.001-.241v-.304l.002-.119c0-.22.025-.422.113-.598a.87.87 0 0 1 .502-.453 1.05 1.05 0 0 1 .618-.033c.26.06.505.201.677.426a.96.96 0 0 1 .174.447l.005.049v.111l.001.165.002.225.002.254v.073c.008-.009.016-.018.025-.026a7.6 7.6 0 0 0 .428-.499 1.14 1.14 0 0 1-.348-.514 1.27 1.27 0 0 1-.054-.687 1.2 1.2 0 0 1 .351-.621c.2-.203.481-.335.814-.335.325 0 .601.15.784.399.14.19.217.425.217.662l-.003.088c-.007.133-.025.262-.05.388.143-.006.303.02.468.092a1.42 1.42 0 0 1 .714.823c.067.203.089.42.065.631a2.2 2.2 0 0 1-.16.573 5 5 0 0 1-.24.477c.232.134.5.242.776.31.15.036.3.063.442.078.067.007.129.012.185.013h.005a.26.26 0 0 0 .184-.076.24.24 0 0 0 .067-.193.25.25 0 0 0-.099-.172.3.3 0 0 0-.107-.052l-.04-.01a1.5 1.5 0 0 0-.126-.024 3 3 0 0 1-.66-.17 2.1 2.1 0 0 1-.567-.324 1.4 1.4 0 0 1-.393-.517 1.3 1.3 0 0 1-.1-.56c.006-.236.083-.468.23-.674.17-.238.43-.43.773-.52a2.1 2.1 0 0 1 .64-.07c.118.007.235.02.348.04v-.006c.001-.114-.042-.233-.138-.328a.73.73 0 0 0-.401-.195 1.8 1.8 0 0 0-.537.003c-.204.028-.431.08-.643.145-.423.132-.805.315-.99.444a.45.45 0 0 1-.267.072.55.55 0 0 1-.367-.147c-.1-.095-.158-.22-.164-.345-.005-.124.036-.249.127-.355.153-.179.39-.36.68-.508.438-.224.98-.393 1.554-.458a4.2 4.2 0 0 1 1.029.007c.249.035.48.091.68.165.395.146.73.393.923.793.11.229.16.493.14.773-.02.28-.106.58-.28.89-.25.447-.561.78-.87 1.012a3.2 3.2 0 0 1-.64.376 4.5 4.5 0 0 1-.558.205l-.05.013.003.004c.218.07.5.105.804.105.454 0 .95-.065 1.378-.16.283-.063.535-.138.72-.207.015-.006.028-.01.042-.017.016-.03.023-.046.023-.046.98-.853 1.31-4.907 1.31-4.907 0-5.39-4.245-6.126-4.245-6.126-.713-.14-1.65-.199-2.591-.19z" />
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
      {/* Background card */}
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
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Контактна інформація
            </span>
            <h3
              className="text-2xl md:text-3xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Зв'яжіться з нами
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
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Телефон
                </p>
                <p
                  className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
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
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Email
                </p>
                <p
                  className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
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
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Години роботи
                </p>
                <p
                  className="text-lg font-semibold text-white"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
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
              style={{ fontFamily: "'Montserrat', sans-serif" }}
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
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
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
              style={{ fontFamily: "'Montserrat', sans-serif" }}
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
