import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import FacebookPixel from '@/components/FacebookPixel'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'EVAZ-MS | Бухгалтерський супровід для ФОП та ТОВ',
  description: 'Професійний бухгалтерський супровід для ФОП, ТОВ та фізичних осіб. Ми робимо складне простим. Від разового звіту до постійного супроводу Вашого бізнесу.',
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
    <html lang="uk" className={montserrat.variable}>
      <body className="min-h-screen bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-body">
        <FacebookPixel />
        {children}
      </body>
    </html>
  )
}
