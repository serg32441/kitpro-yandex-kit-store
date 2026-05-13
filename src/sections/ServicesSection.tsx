import { Store, Palette, Code2, Smartphone, LineChart, Headphones } from 'lucide-react'

const services = [
  {
    icon: Store,
    title: 'Создание магазина на Кит',
    description: 'Полный цикл разработки: от прототипа до запуска. Настройка каталога, корзины, оплаты и доставки через API Яндекс.Кит.',
    features: ['Проектирование UX/UI', 'Интеграция Кит API', 'Настройка каталога', 'Тестирование'],
  },
  {
    icon: Palette,
    title: 'Дизайн интерфейса',
    description: 'Уникальный дизайн, отражающий ваш бренд. Адаптивная верстка под все устройства с фокусом на конверсию.',
    features: ['Уникальный UI/UX', 'Адаптивный дизайн', 'A/B тестирование', 'Гайдлайны бренда'],
  },
  {
    icon: Code2,
    title: 'Кастомная разработка',
    description: 'Расширение функционала платформы через кастомный код: уникальные фильтры, калькуляторы, интеграции.',
    features: ['React/TypeScript', 'Кастомные компоненты', 'API интеграции', 'Микросервисы'],
  },
  {
    icon: Smartphone,
    title: 'Мобильная оптимизация',
    description: 'Мобильный шопинг — 70% продаж. Оптимизируем скорость, навигацию и чекаут для максимальной конверсии.',
    features: ['PWA', 'Touch-оптимизация', 'Fast checkout', 'AMP страницы'],
  },
  {
    icon: LineChart,
    title: 'Аналитика и рост',
    description: 'Внедрение сквозной аналитики: отслеживание воронки, когортный анализ, прогнозирование LTV и CAC.',
    features: ['Яндекс.Метрика', 'Google Analytics 4', 'Когортный анализ', 'ROI отчеты'],
  },
  {
    icon: Headphones,
    title: 'Поддержка и развитие',
    description: 'Техническая поддержка 24/7, регулярные обновления, мониторинг uptime и безопасности вашего магазина.',
    features: ['24/7 мониторинг', 'Резервное копирование', 'Обновления', 'SLA гарантии'],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32 md:py-40 bg-[#1B4332]">
      <div className="section-container">
        <div className="mb-16 md:mb-24">
          <span className="label-uppercase text-[#52B788] mb-4 block">Наши услуги</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#E9F5EC] tracking-[-1.5px] leading-[1.1] max-w-3xl">
            Всё для успешного <span className="text-[#52B788]">e-commerce</span> на Яндекс.Кит
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl border border-[#2D6A4F]/30 bg-[#1B4332]/50 backdrop-blur-sm hover:border-[#52B788]/50 hover:bg-[#2D6A4F]/20 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#52B788]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#52B788]/10 flex items-center justify-center mb-6 group-hover:bg-[#52B788]/20 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-[#52B788]" />
                </div>
                <h3 className="text-xl font-medium text-[#E9F5EC] mb-3">{service.title}</h3>
                <p className="text-[#E9F5EC]/60 text-sm leading-relaxed mb-5">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span key={feature} className="px-3 py-1 text-xs font-medium text-[#52B788] bg-[#52B788]/10 rounded-full">{feature}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
