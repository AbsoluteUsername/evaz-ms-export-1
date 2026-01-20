import { Phone, Mail, MapPin, Send } from 'lucide-react'
import type { FooterProps } from '../types'
// TODO: Update this import to your logo path
import logoGreenBack from '@/assets/logo-green-back.png'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  telegram: ({ className }: { className?: string }) => <Send className={className} />,
}

export function Footer({
  company,
  contact,
  navigation,
  footer,
  onSocialClick,
}: FooterProps) {
  return (
    <footer className="relative bg-stone-900 text-stone-200 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-600 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block group">
              <img
                src={logoGreenBack}
                alt={company.name}
                className="h-16 w-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p
              className="mt-4 text-base font-medium text-teal-400"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {company.tagline}
            </p>
            <p
              className="mt-3 text-sm text-stone-400 leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {company.story.shortDescription}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="text-sm font-semibold text-white uppercase tracking-wider mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Контакти
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={contact.phone.href}
                  className="flex items-center gap-3 text-sm text-stone-300 hover:text-teal-400 transition-colors group"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-stone-800 group-hover:bg-teal-600 transition-colors">
                    <Phone className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                  {contact.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={contact.email.href}
                  className="flex items-center gap-3 text-sm text-stone-300 hover:text-teal-400 transition-colors group"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-stone-800 group-hover:bg-teal-600 transition-colors">
                    <Mail className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                  {contact.email.primary}
                </a>
              </li>
              <li>
                <div
                  className="flex items-center gap-3 text-sm text-stone-400"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-stone-800">
                    <MapPin className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                  <span>{company.location}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3
              className="text-sm font-semibold text-white uppercase tracking-wider mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Соціальні мережі
            </h3>
            <div className="flex flex-wrap gap-3">
              {contact.socialMedia
                .filter((social) => social.active)
                .map((social) => {
                  const Icon = socialIcons[social.icon] || Send
                  return (
                    <a
                      key={social.id}
                      href={social.url}
                      onClick={() => onSocialClick?.(social.platform)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-11 h-11 rounded-xl bg-stone-800 text-stone-400 hover:bg-teal-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/25"
                      aria-label={social.platform}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-sm font-semibold text-white uppercase tracking-wider mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Навігація
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-teal-400 transition-colors group"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-600 group-hover:bg-teal-500 transition-colors" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-stone-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p
              className="text-xs text-stone-500"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              &copy; {footer.year} {footer.copyright}. {footer.rights}.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <a
                href="/privacy"
                className="text-xs text-stone-500 hover:text-stone-300 transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Політика конфіденційності
              </a>
              <a
                href="/terms"
                className="text-xs text-stone-500 hover:text-stone-300 transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Умови використання
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
