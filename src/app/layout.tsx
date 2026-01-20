import type { Metadata } from 'next'
import { Playfair_Display, Montserrat, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
})

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-ibm-plex-mono',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'EVAZ-MS | Бухгалтерський супровід для ФОП та ТОВ',
  description: 'Професійний бухгалтерський супровід для ФОП, ТОВ та фізичних осіб. Ми робимо складне простим. Від щоденного супроводу до аудиту та річної звітності.',
  keywords: ['бухгалтерський супровід', 'ФОП', 'ТОВ', 'податкова звітність', 'аудит', 'Україна'],
  authors: [{ name: 'EVAZ-MS' }],
  openGraph: {
    title: 'EVAZ-MS | Бухгалтерський супровід для ФОП та ТОВ',
    description: 'Професійний бухгалтерський супровід для ФОП, ТОВ та фізичних осіб. Ми робимо складне простим.',
    locale: 'uk_UA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk" className={`${playfair.variable} ${montserrat.variable} ${ibmPlexMono.variable}`}>
      <body className="min-h-screen bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-body">
        {children}
      </body>
    </html>
  )
}
