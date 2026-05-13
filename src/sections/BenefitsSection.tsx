import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Clock, Shield, TrendingUp, Users, Sparkles, BarChart3 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  {
    icon: Clock,
    title: 'Быстрый запуск',
    value: 'от 10 дней',
    description: 'Оптимизированные процессы и готовые решения позволяют запустить магазин в рекордные сроки.',
  },
  {
    icon: Shield,
    title: 'Надёжная платформа',
    value: '99.9%',
    description: 'Яндекс.Кит обеспечивает стабильную работу с гарантированным uptime и защитой данных.',
  },
  {
    icon: TrendingUp,
    title: 'Рост продаж',
    value: '+150%',
    description: 'В среднем наши клиенты увеличивают конверсию в 2.5 раза после оптимизации магазина.',
  },
  {
    icon: Users,
    title: 'Экспертная команда',
    value: '8+ лет',
    description: 'Сертифицированные специалисты с глубокой экспертизой в e-commerce и платформе Кит.',
  },
  {
    icon: Sparkles,
    title: 'Уникальный дизайн',
    value: '100%',
    description: 'Каждый магазин создается индивидуально — никаких шаблонов и типовых решений.',
  },
  {
    icon: BarChart3,
    title: 'Прозрачная аналитика',
    value: 'Real-time',
    description: 'Полный контроль над метриками: от просмотров до ROI в реальном времени.',
  },
]

function FocusTrackingLight({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: -200, y: -200 })

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setPos({ x, y })
    }

    el.addEventListener('mousemove', handleMove)
    return () => el.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-black overflow-hidden group rounded-lg cursor-crosshair"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(82, 183, 136, 0.4), transparent 40%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-screen"
        style={{
          background: `radial-gradient(800px circle at ${pos.x}px ${pos.y}px, rgba(29, 67, 50, 0.2), transparent 50%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(82, 183, 136, 0.15), transparent 60%)`,
          filter: 'blur(40px)',
        }}
      />
      <div className="relative z-20 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const stickyRef = useRef<HTMLDivElement>(null)

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
        y: 50,
        opacity: 0,
        duration: 0.7,
        delay: i * 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
        },
      })
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="relative py-32 md:py-40 bg-[#1B4332]"
    >
      <div className="section-container">
        {/* Section Header */}
        <div ref={titleRef} className="mb-16 md:mb-24">
          <span className="label-uppercase text-[#52B788] mb-4 block">Преимущества</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#E9F5EC] tracking-[-1.5px] leading-[1.1] max-w-2xl">
              Почему выбирают
              <span className="text-[#52B788]"> KitPro</span>
            </h2>
            <p className="text-[#E9F5EC]/60 text-lg max-w-md lg:text-right">
              Комбинируем технологическую экспертизу и глубокое понимание e-commerce для достижения ваших бизнес-целей
            </p>
          </div>
        </div>

        {/* Focus Strategy Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {/* Left - Sticky Card with FocusTrackingLight */}
          <div ref={stickyRef} className="lg:sticky lg:top-32 lg:self-start h-[400px] lg:h-[500px]">
            <FocusTrackingLight>
              <div className="text-center px-8">
                <div className="text-6xl md:text-7xl font-bold text-[#E9F5EC] mb-4">150%</div>
                <div className="text-xl text-[#52B788] font-medium mb-3">Средний рост конверсии</div>
                <p className="text-[#E9F5EC]/50 text-sm max-w-xs mx-auto">
                  Перемещайте курсор, чтобы увидеть эффект освещения. Так мы подсвечиваем ключевые метрики вашего бизнеса.
                </p>
              </div>
            </FocusTrackingLight>
          </div>

          {/* Right - Scrolling Text Blocks */}
          <div className="flex flex-col gap-16 lg:gap-24 py-8">
            <div className="p-8 rounded-2xl border border-[#2D6A4F]/30 bg-[#1B4332]/80">
              <h3 className="text-2xl font-medium text-[#E9F5EC] mb-4 tracking-[-0.5px]">
                Дата-ориентированный подход
              </h3>
              <p className="text-[#E9F5EC]/60 leading-relaxed">
                Анализируем паттерны рынка и поведение пользователей, чтобы каждое архитектурное решение
                увеличивало конверсию. Все изменения основываются на реальных данных, а не предположениях.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-[#2D6A4F]/30 bg-[#1B4332]/80">
              <h3 className="text-2xl font-medium text-[#E9F5EC] mb-4 tracking-[-0.5px]">
                Адаптивные интерфейсы
              </h3>
              <p className="text-[#E9F5EC]/60 leading-relaxed">
                Дизайн-системы, которые адаптируются в реальном времени под поведение пользователя.
                Интуитивные пути к конверсии с персонализированным UX для каждого сегмента аудитории.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-[#2D6A4F]/30 bg-[#1B4332]/80">
              <h3 className="text-2xl font-medium text-[#E9F5EC] mb-4 tracking-[-0.5px]">
                Масштабируемая архитектура
              </h3>
              <p className="text-[#E9F5EC]/60 leading-relaxed">
                Построено на надёжных, серверлесс-решениях, готовых к экспоненциальному росту.
                Инфраструктура автоматически масштабируется под нагрузку без потери производительности.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              ref={(el) => { cardsRef.current[index] = el }}
              className="group p-6 rounded-xl border border-[#2D6A4F]/20 bg-[#2D6A4F]/10 hover:bg-[#2D6A4F]/20 hover:border-[#52B788]/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#52B788]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#52B788]/20 group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-5 h-5 text-[#52B788]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#E9F5EC]">{benefit.title}</h3>
                  <span className="text-[#52B788] text-sm font-semibold">{benefit.value}</span>
                </div>
              </div>
              <p className="text-[#E9F5EC]/50 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
