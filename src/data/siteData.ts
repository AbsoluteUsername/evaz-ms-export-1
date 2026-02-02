import type {
  Company,
  Contact,
  NavigationItem,
  Footer,
  HeroContent,
  Audience,
  ServiceCategory,
  ServicePackage,
  PremiumOffer,
  Benefit,
  Differentiator,
  FAQ,
  FormConfig,
  ContactInfo,
  SectionContent,
  ClientsSectionContent,
} from '@/types'

export const company: Company = {
  name: 'EVAZ-MS',
  tagline: 'Ми складне робимо простим',
  foundedYear: 2021,
  legalStatus: 'Сервісна компанія з фізичним офісом',
  location: 'Україна (по всій території)',
  physicalOffice: true,
  story: {
    shortDescription: 'ЕВАЗ-МС працює з 2021 року. Ми починали як невеликий офіс бухгалтерського супроводу, а з часом виросли у компанію з командою професійних бухгалтерів та системною роботою.',
    milestone2024: 'У 2024–2025 роках до управління приєдналася друга власниця - експерт зі стратегії, автоматизації, оптимізації та розвитку бізнесу, що посилило компанію подвійною експертизою.',
    currentState: 'Сьогодні ЕВАЗ-МС - це стабільна сервісна компанія з фізичним офісом, подвійним контролем якості та повним супроводом ФОП, ТОВ і фізичних осіб.',
  },
}

export const contact: Contact = {
  phone: {
    display: '+380 97 009 45 66',
    raw: '+380970094566',
    href: 'tel:+380970094566',
  },
  secondaryPhone: {
    display: '+380 68 019 31 00',
    raw: '+380680193100',
    href: 'tel:+380680193100',
  },
  email: {
    primary: 'ehwazms@gmail.com',
    href: 'mailto:ehwazms@gmail.com',
  },
  socialMedia: [
    { id: 'facebook', platform: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61585648986173&locale=uk_UA', icon: 'facebook', active: true },
    { id: 'instagram', platform: 'Instagram', url: 'https://www.instagram.com/evaz.ms_consult/', icon: 'instagram', active: true },
    { id: 'linkedin', platform: 'LinkedIn', url: '#', icon: 'linkedin', active: false },
    { id: 'telegram', platform: 'Telegram', url: 'https://t.me/evazms', icon: 'telegram', active: true },
  ],
  workingHours: {
    days: 'Пн-Пт',
    hours: '9:00 - 17:00',
  },
}

export const navigation: NavigationItem[] = [
  { id: 'services', label: 'Послуги', href: '#services', type: 'anchor' },
  { id: 'about', label: 'Про нас', href: '#about', type: 'anchor' },
  { id: 'clients', label: 'Наші Клієнти', href: '#clients', type: 'anchor' },
  { id: 'contact', label: 'Контакти', href: '#contact', type: 'anchor' },
]

export const footer: Footer = {
  copyright: 'EVAZ-MS',
  year: 2025,
  rights: 'Усі права захищено',
}

export const heroContent: HeroContent = {
  headline: 'Ми робимо складне простим',
  subheadline: 'Від разового звіту до постійного супроводу Вашого бізнесу',
  description: 'Обирайте формат, який підходить саме Вам',
  cta: { text: 'Обрати пакет послуг', action: 'scroll-to-services' },
  secondaryCta: { text: 'Отримати консультацію', action: 'open-modal' },
}

export const audiences: Audience[] = [
  {
    id: 'fop',
    type: 'ФОП',
    title: 'Фізична особа - підприємець',
    role: 'Власник бізнесу, самозайнята особа',
    status: 'Знає, що повинен подавати звітність, або не впевнений у правильності її подання',
    needs: 'Професійне ведення звітності без помилок та ризиків',
    icon: 'briefcase',
  },
  {
    id: 'individual',
    type: 'Фізична особа',
    title: 'Фізична особа (не ФОП)',
    role: 'Найманий працівник, приватна особа',
    status: 'Або не впевнена, чи потрібно подавати декларацію, або знає, що повинна її подати',
    needs: "З'ясувати обов'язки та правильно подати декларацію",
    icon: 'user',
  },
  {
    id: 'tov',
    type: 'ТОВ',
    title: 'Власник малого бізнесу / керівник ТОВ',
    role: 'Директор, засновник, співвласник',
    status: "Потребує професійного ведення обліку та контролю податкових зобов'язань",
    needs: 'Надійний бухгалтерський супровід з системним контролем',
    icon: 'building',
  },
]

export const serviceCategories: ServiceCategory[] = [
  { id: 'fop', title: 'Послуги для ФОП', description: 'Бухгалтерський супровід для фізичних осіб-підприємців' },
  { id: 'tov', title: 'Послуги для ТОВ', description: 'Бухгалтерський супровід для товариств з обмеженою відповідальністю' },
  { id: 'additional', title: 'Додаткові послуги', description: 'Спеціалізовані послуги та модулі' },
]

export const fopServices: ServicePackage[] = [
  {
    id: 'fop-ep-1-3-no-vat',
    title: 'ФОП • ЄП 1–3 гр. • без ПДВ • без працівників',
    targetAudience: 'ФОП на ЄП (1–3 група), без ПДВ, без працівників',
    pricing: { amount: 1000, currency: 'UAH', period: 'month', display: 'від 1 000 грн/міс', type: 'fixed' },
    includes: [
      'Ведення обліку доходів у довільній формі (помісячно)',
      'Аналіз лімітів доходу (ЄП)',
      'Подання звітності платника єдиного податку',
      'Контроль своєчасності та повноти сплати податків і строків',
      'Аудит електронного кабінету платника',
      'Консультаційний супровід',
    ],
    priority: true,
    popular: true,
  },
  {
    id: 'fop-ep-3-vat',
    title: 'ФОП • ЄП 3 група • з ПДВ • без працівників',
    targetAudience: 'ФОП на ЄП 3 група, платник ПДВ, без працівників',
    pricing: { amount: 8000, currency: 'UAH', period: 'month', display: 'від 8 000 грн/міс', type: 'fixed' },
    includes: [
      'Облік доходів і витрат у довільній формі (помісячно)',
      'Аналіз лімітів доходу (ЄП)',
      'Подання звітності платника єдиного податку',
      'Декларація з ПДВ',
      'ПДВ-облік і податкові накладні / розблокування ПН',
      'Контроль своєчасності та повноти сплати податків і строків',
      'Аудит електронного кабінету платника',
      'Консультаційний супровід',
    ],
  },
  {
    id: 'fop-general-no-vat',
    title: 'ФОП • Загальна • без ПДВ • без працівників',
    targetAudience: 'ФОП на загальній системі, без ПДВ, без працівників',
    pricing: { amount: 5000, currency: 'UAH', period: 'month', display: 'від 5 000 грн/міс', type: 'fixed' },
    includes: [
      'Ведення Типової форми обліку доходів і витрат (паперова або електронна форма)',
      'Податкова декларація про майновий стан і доходи',
      'Контроль своєчасності та повноти сплати податків і строків',
      'Аудит електронного кабінету платника',
      'Консультаційний супровід',
    ],
  },
  {
    id: 'fop-general-vat',
    title: 'ФОП • Загальна • з ПДВ • без працівників',
    targetAudience: 'ФОП на загальній системі, платник ПДВ, без працівників',
    pricing: { amount: 10000, currency: 'UAH', period: 'month', display: 'від 10 000 грн/міс', type: 'fixed' },
    includes: [
      'Облік доходів і витрат',
      'Податкова декларація про майновий стан і доходи',
      'Декларація з ПДВ',
      'ПДВ-облік і податкові накладні / розблокування ПН',
      'Контроль своєчасності та повноти сплати податків і строків',
      'Аудит електронного кабінету платника',
      'Консультаційний супровід',
    ],
  },
]

export const tovServices: ServicePackage[] = [
  {
    id: 'tov-ep-3-no-vat',
    title: 'ТОВ • ЄП 3 гр. • без ПДВ',
    targetAudience: 'ТОВ на ЄП 3 група, без ПДВ',
    pricing: { amount: 8000, currency: 'UAH', period: 'month', display: 'від 8 000 грн/міс', type: 'fixed' },
    includes: [
      'Бухгалтерський облік',
      'Аналіз лімітів доходу (ЄП)',
      'Фінансова звітність',
      'Подання звітності платника єдиного податку',
      'Контроль своєчасності та повноти сплати податків і строків',
      'Взаєморозрахунки з контрагентами',
      'Контроль первинних документів',
      'Аудит електронного кабінету',
      'Консультаційний супровід',
    ],
    priority: true,
    popular: true,
  },
  {
    id: 'tov-ep-3-vat',
    title: 'ТОВ • ЄП 3 гр. • з ПДВ',
    targetAudience: 'ТОВ на ЄП 3 група, платник ПДВ',
    pricing: { amount: 10000, currency: 'UAH', period: 'month', display: 'від 10 000 грн/міс', type: 'fixed' },
    includes: [
      'Бухгалтерський облік',
      'Аналіз лімітів доходу (ЄП)',
      'Фінансова звітність',
      'Подання звітності платника єдиного податку',
      'Декларація з ПДВ',
      'ПДВ-облік і податкові накладні / розблокування ПН',
      'Контроль своєчасності та повноти сплати податків і строків',
      'Взаєморозрахунки з контрагентами',
      'Контроль первинних документів',
      'Консультаційний супровід',
    ],
  },
  {
    id: 'tov-general-no-vat',
    title: 'ТОВ • Загальна • без ПДВ',
    targetAudience: 'ТОВ на загальній системі, без ПДВ',
    pricing: { amount: 8000, currency: 'UAH', period: 'month', display: 'від 8 000 грн/міс', type: 'fixed' },
    includes: [
      'Бухгалтерський облік',
      'Фінансова звітність',
      'Декларація з податку на прибуток підприємств',
      'Контроль своєчасності та повноти сплати податків і строків',
      'Взаєморозрахунки з контрагентами',
      'Контроль первинних документів',
      'Аудит електронного кабінету',
      'Консультаційний супровід',
    ],
  },
  {
    id: 'tov-general-vat',
    title: 'ТОВ • Загальна • з ПДВ',
    targetAudience: 'ТОВ на загальній системі, платник ПДВ',
    pricing: { amount: 10000, currency: 'UAH', period: 'month', display: 'від 10 000 грн/міс', type: 'fixed' },
    includes: [
      'Бухгалтерський облік',
      'Фінансова звітність',
      'Декларація з податку на прибуток підприємств',
      'Декларація з ПДВ',
      'ПДВ-облік і податкові накладні / розблокування ПН',
      'Контроль своєчасності та повноти сплати податків і строків',
      'Взаєморозрахунки з контрагентами',
      'Контроль первинних документів',
      'Консультаційний супровід',
    ],
  },
]

export const additionalServices: ServicePackage[] = [
  {
    id: 'payroll-module',
    title: 'Модуль: Зарплатний проєкт (кадри + ЗП)',
    targetAudience: 'ФОП/ТОВ з найманими працівниками',
    pricing: { amount: 4000, currency: 'UAH', period: 'month', display: 'від 4 000 грн/міс', type: 'fixed' },
    includes: [
      'Кадровий облік',
      'Табель обліку робочого часу',
      'Нарахування заробітної плати, відпусток, лікарняних',
      'Податки із заробітної плати',
      'Звітність по найманих працівниках',
      'Контроль своєчасності та повноти сплати податків і строків',
    ],
    isModule: true,
  },
  {
    id: 'individual-person',
    title: 'Фізична особа (не ФОП)',
    targetAudience: 'Фізичні особи, які отримували доходи та повинні подати річну декларацію',
    pricing: { display: 'індивідуально', type: 'individual' },
    includes: [
      'Аналіз отриманих доходів за звітний рік',
      'Визначення обов\'язку щодо подання декларації',
      'Аудит електронного кабінету платника податків',
      'Перевірка наявності податкових зобов\'язань і боргів',
      'Підготовка та подання Податкової декларації про майновий стан і доходи (річної)',
      'Розрахунок податку на доходи фізичних осіб (ПДФО)',
      'Розрахунок військового збору',
      'Консультація щодо строків і порядку сплати ПДФО та військового збору',
    ],
    priority: true,
  },
  {
    id: 'prro-connection',
    title: 'Підключення і супровід ПРРО',
    targetAudience: 'ФОП та ТОВ, які починають працювати з ПРРО',
    pricing: { display: 'індивідуально', type: 'individual' },
    includes: [
      'Визначення та вибір необхідного типу ПРРО',
      'Подання форми №20-ОПП (місце здійснення діяльності) та реєстрація ПРРО',
      'Налаштування КЕП і ключів касира, контроль строків дії та інформування про необхідність продовження',
      'Формування номенклатури товарів/послуг (Excel та завантаження в ПРРО)',
      'Запуск і тестування чеків',
      'Навчання персоналу роботі з ПРРО (продаж, повернення, помилкові чеки)',
      'Первинний контроль коректності роботи ПРРО, Z-звітів і чеків',
      'Контроль оплат за платформи ПРРО / касові сервіси',
      'Консультування з питань роботи з ПРРО',
    ],
    priority: true,
  },
  {
    id: 'prro-support',
    title: 'Супровід ПРРО',
    targetAudience: 'ФОП та ТОВ, які вже працюють з ПРРО',
    pricing: { display: 'індивідуально', type: 'individual' },
    includes: [
      'Перевірка коректності налаштувань діючого ПРРО',
      'Періодичний контроль коректності роботи ПРРО',
      'Контроль відкриття та закриття змін',
      'Контроль формування та збереження Z-звітів',
      'Контроль коректності чеків (обов\'язкові реквізити, номенклатура)',
      'Супровід у разі запитів податкових органів щодо ПРРО (в межах компетенції)',
      'Контроль строків дії КЕП і ключів касира, інформування про необхідність продовження',
      'Контроль оплат за платформи ПРРО / касові сервіси',
      'Консультування з питань роботи з ПРРО',
    ],
  },
]

export const premiumOffer: PremiumOffer = {
  id: 'annual-reporting-audit',
  badge: 'Преміальна сезонна пропозиція',
  title: 'Річна звітність + Аудит кабінету платника податків',
  subtitle: 'Для ФОП та фізичних осіб',
  headline: 'Будьте спокійні. Ми перевіримо все за Вас.',
  targetAudience: {
    fop: [
      'ФОП, які давно не перевіряли кабінет',
      'ФОП, які не впевнені, що все здано правильно',
      'ФОП, які мали перерви в діяльності',
    ],
    individuals: [
      'Фізичні особи, які отримували доходи не з зарплати',
      'Фізичні особи, які продавали майно',
      'Фізичні особи, які мають сумніви, чи потрібно щось декларувати',
    ],
  },
  includes: [
    'Повний аудит електронного кабінету платника податків',
    'Перевірка податкових зобов\'язань',
    'Перевірка наявності боргів',
    'Перевірка штрафів і пені',
    'Перевірка неподаних або помилкових декларацій',
    'Аналіз, чи зобов\'язана особа подавати річну декларацію',
    'Формування та подання річної звітності ФОП',
    'Формування та подання декларації для фізичних осіб (за потреби)',
    'Контроль прийняття звітів податковою',
    'Консультація за результатами аудиту',
  ],
  risks: [
    'Нарахування штрафів та пені',
    'Податковий борг, про який клієнт може не знати',
    'Блокування рахунків',
    'Арешт майна за рішенням контролюючих органів',
    'Обмеження виїзду за кордон у разі значної заборгованості',
    'Проблеми при відкритті рахунків або реєстрації бізнесу в майбутньому',
  ],
  warningMessage: 'Важливо: більшість клієнтів дізнаються про борги вже тоді, коли питання стало критичним.',
  results: [
    'Повна ясність по своїй податковій ситуації',
    'Розуміння, чи є ризики - і які саме',
    'Закрите питання річної звітності',
    'Відчуття контролю і спокою',
    "Впевненість, що немає «сюрпризів» від податкової",
  ],
  cta: { text: 'Перевірити свій податковий кабінет', action: 'open-modal' },
}

export const benefits: Benefit[] = [
  {
    id: 1,
    title: 'Свобода зосередитись на бізнесі, прибутках і зростанні',
    description: 'Операційні податкові питання закриті та під контролем. Ви не витрачаєте ресурс на звітність і перевірки. Повний фокус на розвиток бізнесу, управління процесами та масштабування.',
    icon: 'trending-up',
    solves: [3],
  },
  {
    id: 2,
    title: 'Спокій і впевненість у фінансовій безпеці',
    description: "Податки і звітність ведуться правильно та вчасно. Відсутні приховані ризики й непередбачувані «сюрпризи». Чітке розуміння своєї податкової ситуації.",
    icon: 'shield-check',
    solves: [1, 2],
  },
  {
    id: 3,
    title: 'Професійний результат без штрафів і помилок',
    description: 'Коректна та своєчасна звітність. Знижені ризики санкцій і фінансових втрат. Зрозуміла, прозора картина обліку для прийняття рішень.',
    icon: 'check-circle',
    solves: [1],
  },
]

export const differentiators: Differentiator[] = [
  { id: 1, feature: 'Дві власниці з різною експертизою та досвідом', description: 'Стратегія, фінанси, управління, автоматизація, оптимізація, розвиток + практичний бухгалтерський облік ФОП і ТОВ', icon: 'users' },
  { id: 2, feature: 'Подвійний контроль якості', description: 'Усі процеси проходять подвійну перевірку, що гарантує надійність і повну відсутність критичних помилок', icon: 'check-square' },
  { id: 3, feature: 'Фізичний офіс і Команда', description: 'Не фрілансери - структурована компанія з офісом та командою бухгалтерів', icon: 'building' },
  { id: 4, feature: 'Щомісячний моніторинг кабінету платника', description: 'Те, чого майже ніхто не робить системно - контроль ризиків та аудит податкового стану', icon: 'eye' },
  { id: 5, feature: 'Особиста відповідальність власниць', description: 'Ми беремо на себе не лише технічні фінансові задачі, а й повну відповідальність за результат', icon: 'award' },
  { id: 6, feature: 'Прозора комунікація', description: 'Пояснюємо просто і зрозуміло, без складної термінології', icon: 'message-circle' },
]

export const faqItems: FAQ[] = [
  { id: 1, question: 'Як швидко ви можете почати роботу?', answer: 'Ми можемо розпочати роботу протягом 1-3 робочих днів після надання доступів до кабінету платника та первинної документації.' },
  { id: 2, question: 'Чи працюєте ви з клієнтами по всій Україні?', answer: "Так, ми працюємо з клієнтами по всій Україні онлайн. У нас є фізичний офіс, а також можливість працювати з клієнтами, які проживають за кордоном." },
  { id: 3, question: 'Що робити, якщо у мене вже є податкові борги?', answer: 'Ми проведемо повний аудит вашого податкового кабінету, визначимо всі борги та штрафи, розробимо план їх погашення та допоможемо виправити ситуацію.' },
  { id: 4, question: 'Чи можна змінити пакет послуг у процесі співпраці?', answer: "Так, звичайно. Якщо ваші потреби змінюються (наприклад, ви стаєте платником ПДВ або наймаєте працівників), ми коригуємо пакет послуг." },
  { id: 5, question: 'Що входить у вартість пакету, а що оплачується додатково?', answer: 'У вартість пакету входить весь перелік послуг, зазначених у картці пакету. Додатково оплачуються тільки послуги, які виходять за межі вашого пакету (наприклад, якщо ви замовили базовий пакет без ПДВ, а потім стали платником ПДВ).' },
  { id: 6, question: 'Як відбувається комунікація?', answer: "Ми підтримуємо зв'язок через зручні для вас канали: телефон, Telegram, email. Відповідаємо оперативно і завжди доступні для консультацій." },
]

export const formConfig: FormConfig = {
  title: 'Отримати консультацію',
  subtitle: "Ми зв'яжемось з Вами, щоб уточнити деталі та запропонувати оптимальне рішення.",
  fields: [
    { name: 'name', type: 'text', label: "Ім'я", placeholder: "Введіть ваше ім'я", required: true, validation: { minLength: 2, errorMessage: "Будь ласка, введіть ваше ім'я" } },
    { name: 'phone', type: 'tel', label: 'Телефон', placeholder: '+380 __ ___ ____', required: true, mask: '+380 ## ### ####', validation: { pattern: '^\\+380\\d{9}$', errorMessage: 'Будь ласка, введіть коректний номер телефону' } },
    { name: 'clientType', type: 'select', label: 'Оберіть пакет послуг', placeholder: 'Оберіть пакет послуг', required: true, options: [
      // FOP Services
      { value: 'fop-ep-1-3-no-vat', label: 'ФОП • ЄП 1–3 гр. • без ПДВ • без працівників' },
      { value: 'fop-ep-3-vat', label: 'ФОП • ЄП 3 група • з ПДВ • без працівників' },
      { value: 'fop-general-no-vat', label: 'ФОП • Загальна • без ПДВ • без працівників' },
      { value: 'fop-general-vat', label: 'ФОП • Загальна • з ПДВ • без працівників' },
      // TOV Services
      { value: 'tov-ep-3-no-vat', label: 'ТОВ • ЄП 3 гр. • без ПДВ' },
      { value: 'tov-ep-3-vat', label: 'ТОВ • ЄП 3 гр. • з ПДВ' },
      { value: 'tov-general-no-vat', label: 'ТОВ • Загальна • без ПДВ' },
      { value: 'tov-general-vat', label: 'ТОВ • Загальна • з ПДВ' },
      // Additional Services
      { value: 'payroll-module', label: 'Модуль: Зарплатний проєкт (кадри + ЗП)' },
      { value: 'individual-person', label: 'Фізична особа (не ФОП)' },
      { value: 'prro-connection', label: 'Підключення і супровід ПРРО' },
      { value: 'prro-support', label: 'Супровід ПРРО' },
      // Premium
      { value: 'annual-reporting-audit', label: 'Річна звітність + Аудит кабінету платника податків' },
      // General
      { value: 'general', label: 'Загальна консультація' },
    ], validation: { errorMessage: 'Будь ласка, оберіть пакет послуг' } },
    { name: 'comment', type: 'textarea', label: 'Коментар / питання', placeholder: "Ваше питання або коментар (необов'язково)", required: false, maxLength: 500 },
    { name: 'packageName', type: 'hidden', required: true, autoPopulated: true },
  ],
  submitButton: { text: 'Надіслати заявку', loadingText: 'Надсилаємо...' },
  messages: { success: "Дякуємо! Ми отримали Вашу заявку і зв’яжемось з Вами протягом робочого дня.", error: 'Виникла помилка. Будь ласка, спробуйте ще раз або зателефонуйте нам за номером +380970094566' },
}

export const contactInfo: ContactInfo = {
  phone: { display: '+380 97 009 45 66', raw: '+380970094566', href: 'tel:+380970094566' },
  secondaryPhone: { display: '+380 68 019 31 00', raw: '+380680193100', href: 'tel:+380680193100' },
  email: { primary: 'ehwazms@gmail.com', href: 'mailto:ehwazms@gmail.com' },
  messengers: [
    { id: 'telegram', name: 'Telegram', icon: 'telegram', url: 'https://t.me/evazms', active: true },
    { id: 'viber', name: 'Viber', icon: 'viber', url: 'viber://contact?number=%2B380970094566', active: true },
  ],
  workingHours: { days: 'Пн-Пт', hours: '9:00 - 17:00' },
}

export const contactSectionContent: SectionContent = {
  title: "Зв'яжіться з нами",
  subtitle: "Оберіть зручний для Вас спосіб зв'язку",
  ctaText: 'Залиште заявку і ми вам зателефонуємо',
}

// =============================================================================
// Clients Section Data
// =============================================================================

export const clientsSectionContent: ClientsSectionContent = {
  title: 'Нам довіряють',
  clients: [
    {
      id: 'kaplya',
      name: 'Капля',
      fullName: 'ФОП Ткачук Андрій Олександрович',
      activityType: 'Магазин сантехніки',
      industry: 'trade',
      industryIcon: 'ShoppingCart',
      partnershipYear: 2011,
      logo: '/assets/clients/kaplya.jpg',
      logoType: 'logo',
      website: undefined,
    },
    {
      id: 'victori',
      name: 'Victori',
      fullName: 'ФОП Тараненко Вікторія Вячеславівна',
      activityType: 'Жіночий одяг люкс класу',
      industry: 'trade',
      industryIcon: 'ShoppingCart',
      partnershipYear: 2012,
      logo: '/assets/clients/victori.jpg',
      logoType: 'logo',
      website: undefined,
    },
    {
      id: 'sl',
      name: 'SL',
      fullName: 'Скрипник Олександр / Лазука Олександр',
      activityType: 'Будівельні матеріали',
      industry: 'trade',
      industryIcon: 'ShoppingCart',
      partnershipYear: 2016,
      logo: '/assets/clients/sl.jpg',
      logoType: 'logo',
      website: undefined,
    },
    {
      id: 'divocvit',
      name: 'ТЦ Дивоцвіт',
      fullName: 'ТОВ Дивоцвіт КР',
      activityType: 'Торговий центр, оренда',
      industry: 'realestate',
      industryIcon: 'Building2',
      partnershipYear: 2023,
      logo: '/assets/clients/divocvit.jpg',
      logoType: 'photo',
      website: undefined,
    },
    {
      id: 'astel',
      name: 'Астел Плюс',
      fullName: 'Астел Плюс',
      activityType: 'Смартфони, ноутбуки, ремонт',
      industry: 'trade',
      industryIcon: 'ShoppingCart',
      partnershipYear: 2012,
      logo: '/assets/clients/astel.webp',
      logoType: 'logo',
      website: undefined,
    },
    {
      id: 'childtooth',
      name: 'Перша дитяча стоматологія',
      fullName: 'Перша дитяча стоматологія',
      activityType: 'Дитяча стоматологія',
      industry: 'medical',
      industryIcon: 'Stethoscope',
      partnershipYear: 2025,
      logo: '/assets/clients/childtooth.jpg',
      logoType: 'logo',
      website: undefined,
    },
    {
      id: 'startkr',
      name: 'Старт КР',
      fullName: 'Старт КР',
      activityType: 'Оптова торгівля будівельними матеріалами та санітарно-технічним обладнанням',
      industry: 'trade',
      industryIcon: 'ShoppingCart',
      partnershipYear: 2018,
      logo: '/assets/clients/startKR.jpg',
      logoType: 'logo',
      website: undefined,
    },
    {
      id: 'panfilovy',
      name: 'Panfilov & Company',
      fullName: 'Panfilov & Company',
      activityType: 'Оптова торгівля овочами та фруктами',
      industry: 'trade',
      industryIcon: 'ShoppingCart',
      partnershipYear: 2018,
      logo: '/assets/clients/panfilovy.jpg',
      logoType: 'logo',
      website: undefined,
    },
    {
      id: 'senior_pomidor',
      name: 'Синьйор Помідор',
      fullName: 'Синьйор Помідор',
      activityType: 'Роздрібна торгівля овочами та фруктами, мережа магазинів',
      industry: 'trade',
      industryIcon: 'ShoppingCart',
      partnershipYear: 2016,
      logo: '/assets/clients/senior_pomidor.jpg',
      logoType: 'logo',
      website: undefined,
    },
    {
      id: 'scarlet',
      name: 'Скарлет',
      fullName: 'Скарлет',
      activityType: 'Салон штор',
      industry: 'trade',
      industryIcon: 'ShoppingCart',
      partnershipYear: 2016,
      logo: '/assets/clients/scarlet.webp',
      logoType: 'logo',
      website: undefined,
    },
  ],
  statistics: [
    {
      id: 'total-clients',
      value: 68,
      suffix: '+',
      label: 'Клієнтів',
      sublabel: 'за весь час',
    },
    {
      id: 'years',
      value: 14,
      suffix: undefined,
      label: 'років',
      sublabel: 'на ринку',
    },
    {
      id: 'industries',
      value: 7,
      suffix: undefined,
      label: 'галузей',
      sublabel: 'бізнесу',
    },
  ],
}
