import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, Star, Zap, Crown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const plans = [
  {
    name: 'Старт',
    icon: Zap,
    price: 'от 120 000 ₽',
    period: 'разовый платеж',
    description: 'Идеально для старта продаж с минимальными вложениями',
    features: [
      'Базовый дизайн на шаблоне',
      'До 100 товаров в каталоге',
      'Интеграция Яндекс.Кит',
      'Настройка оплаты и доставки',
      'Мобильная адаптация',
      'Базовая SEO-оптимизация',
      '14 дней поддержки',
    ],
    cta: 'Выбрать Старт',
    popular: false,
  },
  {
    name: 'Бизнес',
    icon: Star,
    price: 'от 280 000 ₽',
    period: 'разовый платеж',
    description: 'Полноценное решение для растущего бизнеса',
    features: [
      'Уникальный дизайн под бренд',
      'До 1000 товаров в каталоге',
      'Интеграция Яндекс.Кит Pro',
      'Кастомные фильтры и поиск',
      'Система лояльности',
      'Продвинутая аналитика',
      'Интеграция CRM и 1С',
      '30 дней поддержки',
      'A/B тестирование',
    ],
    cta: 'Выбрать Бизнес',
    popular: true,
  },
  {
    name: 'Enterprise',
    icon: Crown,
    price: 'от 600 000 ₽',
    period: 'разовый платеж',
    description: 'Максимальная функциональность для крупного бизнеса',
    features: [
      'Премиум дизайн с анимациями',
      'Неограниченный каталог',
      'Кастомные интеграции API',
      'Мультиязычность',
      'Персональный менеджер',
      'Приоритетная поддержка 24/7',
      'Выделенный сервер',
      'SLA 99.9%',
      'Ежемесячные отчеты',
      'Стратегические консультации',
    ],
    cta: 'Обсудить проект',
    popular: false,
  },
]

export default function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    })

    cardsRef.current.forEach((card, i) => {
      if (!card) return
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
      })
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative py-32 md:py-40 bg-[#1B4332]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#52B788]/5 rounded-full filter blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16 md:mb-24">
          <span className="label-uppercase text-[#52B788] mb-4 block">Тарифы</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#E9F5EC] tracking-[-1.5px] leading-[1.1] mb-6">
            Прозрачные
            <span className="text-[#52B788]"> цены</span>
          </h2>
          <p className="text-[#E9F5EC]/60 text-lg max-w-xl mx-auto">
            Выберите подходящий пакет или обсудим индивидуальное решение под ваш бюджет
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              ref={(el) => { cardsRef.current[index] = el }}
              className={`relative rounded-2xl p-8 transition-all duration-500 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#52B788]/20 to-[#2D6A4F]/20 border-2 border-[#52B788]/50 scale-105 lg:scale-110'
                  : 'bg-[#1B4332]/80 border border-[#2D6A4F]/30 hover:border-[#52B788]/30'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#52B788] text-[#000] text-xs font-semibold rounded-full">
                  Популярный выбор
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  plan.popular ? 'bg-[#52B788]/20' : 'bg-[#2D6A4F]/20'
                }`}
              >
                <plan.icon className="w-6 h-6 text-[#52B788]" />
              </div>

              {/* Plan name */}
              <h3 className="text-2xl font-medium text-[#E9F5EC] mb-2">{plan.name}</h3>
              <p className="text-[#E9F5EC]/50 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-3xl md:text-4xl font-bold text-[#E9F5EC]">{plan.price}</span>
                <span className="text-[#E9F5EC]/40 text-sm ml-2">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#52B788] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E9F5EC]/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`block w-full text-center py-3.5 rounded-full font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#F0B95A] text-[#000] hover:bg-[#F0B95A]/90 hover:scale-105'
                    : 'border border-[#52B788]/50 text-[#52B788] hover:bg-[#52B788]/10'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-[#E9F5EC]/40 text-sm mt-12 max-w-lg mx-auto">
          Все цены указаны без НДС. Точная стоимость рассчитывается после обсуждения требований.
          Возможна рассрочка платежа для проектов от 300 000 ₽.
        </p>
      </div>
    </section>
  )
}
