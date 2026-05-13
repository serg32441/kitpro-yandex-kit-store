import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MessageSquare, FileSearch, PenTool, Code, Rocket, HeartHandshake } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Консультация',
    description: 'Обсуждаем ваши цели, анализируем нишу и конкурентов. Формируем техническое задание и дорожную карту проекта.',
    duration: '1-2 дня',
  },
  {
    num: '02',
    icon: FileSearch,
    title: 'Исследование',
    description: 'Глубокий анализ целевой аудитории, юзабилити-аудит и изучение лучших практик в вашей нише e-commerce.',
    duration: '2-3 дня',
  },
  {
    num: '03',
    icon: PenTool,
    title: 'Дизайн',
    description: 'Создаем уникальный UI/UX дизайн с прототипами. Утверждаем визуальную концепцию и интерактивные элементы.',
    duration: '3-5 дней',
  },
  {
    num: '04',
    icon: Code,
    title: 'Разработка',
    description: 'Frontend и backend разработка на базе Яндекс.Кит. Интеграция платежей, доставки и всех необходимых сервисов.',
    duration: '5-10 дней',
  },
  {
    num: '05',
    icon: Rocket,
    title: 'Запуск',
    description: 'Финальное тестирование, настройка аналитики, SEO-оптимизация и публикация магазина в продакшен.',
    duration: '2-3 дня',
  },
  {
    num: '06',
    icon: HeartHandshake,
    title: 'Поддержка',
    description: 'Пост-релизный мониторинг, регулярные обновления, техническая поддержка и стратегическое развитие.',
    duration: '∞',
  },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])
  const lineRef = useRef<HTMLDivElement>(null)

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

    // Progress line
    if (lineRef.current) {
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: 'top',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 60%',
          scrub: true,
        },
      })
    }

    // Steps animation
    stepsRef.current.forEach((step, i) => {
      if (!step) return
      gsap.from(step, {
        x: i % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: step,
          start: 'top 80%',
        },
      })
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-32 md:py-40 bg-[#1B4332] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#52B788] rounded-full filter blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#F0B95A] rounded-full filter blur-[150px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-20 md:mb-28">
          <span className="label-uppercase text-[#52B788] mb-4 block">Процесс работы</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#E9F5EC] tracking-[-1.5px] leading-[1.1]">
            От идеи до запуска
            <span className="text-[#52B788]"> за 6 шагов</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Desktop */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#52B788]/0 via-[#52B788] to-[#52B788]/0"
          />

          {/* Steps */}
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.num}
                ref={(el) => { stepsRef.current[index] = el }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                  index !== 0 ? 'lg:mt-16' : ''
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0 ? 'lg:pr-20 lg:text-right' : 'lg:col-start-2 lg:pl-20'
                  }`}
                >
                  <div
                    className={`p-8 rounded-2xl border border-[#2D6A4F]/30 bg-[#1B4332]/80 backdrop-blur-sm hover:border-[#52B788]/40 transition-all duration-500 group ${
                      index % 2 === 0 ? 'lg:ml-auto' : ''
                    } max-w-lg`}
                  >
                    <div
                      className={`flex items-center gap-4 mb-4 ${
                        index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#52B788]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#52B788]/20 group-hover:scale-110 transition-all duration-300">
                        <step.icon className="w-6 h-6 text-[#52B788]" />
                      </div>
                      <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                        <span className="text-[#52B788]/60 text-sm font-mono">{step.num}</span>
                        <h3 className="text-xl font-medium text-[#E9F5EC]">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-[#E9F5EC]/60 leading-relaxed mb-4">{step.description}</p>
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-[#F0B95A] bg-[#F0B95A]/10 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                </div>

                {/* Center Dot - Desktop */}
                <div
                  className={`hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-5 h-5 rounded-full bg-[#1B4332] border-2 border-[#52B788] items-center justify-center z-10 ${
                    index % 2 === 0 ? '' : ''
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-[#52B788]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
