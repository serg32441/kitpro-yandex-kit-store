import { MessageSquare, FileSearch, PenTool, Code, Rocket, HeartHandshake } from 'lucide-react'

const steps = [
  { num: '01', icon: MessageSquare, title: 'Консультация', description: 'Обсуждаем ваши цели, анализируем нишу и конкурентов. Формируем техническое задание и дорожную карту проекта.', duration: '1-2 дня' },
  { num: '02', icon: FileSearch, title: 'Исследование', description: 'Глубокий анализ целевой аудитории, юзабилити-аудит и изучение лучших практик в вашей нише e-commerce.', duration: '2-3 дня' },
  { num: '03', icon: PenTool, title: 'Дизайн', description: 'Создаем уникальный UI/UX дизайн с прототипами. Утверждаем визуальную концепцию и интерактивные элементы.', duration: '3-5 дней' },
  { num: '04', icon: Code, title: 'Разработка', description: 'Frontend и backend разработка на базе Яндекс.Кит. Интеграция платежей, доставки и всех необходимых сервисов.', duration: '5-10 дней' },
  { num: '05', icon: Rocket, title: 'Запуск', description: 'Финальное тестирование, настройка аналитики, SEO-оптимизация и публикация магазина в продакшен.', duration: '2-3 дня' },
  { num: '06', icon: HeartHandshake, title: 'Поддержка', description: 'Пост-релизный мониторинг, регулярные обновления, техническая поддержка и стратегическое развитие.', duration: '∞' },
]

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-32 md:py-40 bg-[#1B4332] overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#52B788] rounded-full filter blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#F0B95A] rounded-full filter blur-[150px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-20 md:mb-28">
          <span className="label-uppercase text-[#52B788] mb-4 block">Процесс работы</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#E9F5EC] tracking-[-1.5px] leading-[1.1]">
            От идеи до запуска <span className="text-[#52B788]">за 6 шагов</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="group p-8 rounded-2xl border border-[#2D6A4F]/30 bg-[#1B4332]/80 backdrop-blur-sm hover:border-[#52B788]/40 transition-all duration-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#52B788]/10 flex items-center justify-center group-hover:bg-[#52B788]/20 transition-all duration-300">
                  <step.icon className="w-6 h-6 text-[#52B788]" />
                </div>
                <div>
                  <span className="text-[#52B788]/60 text-sm font-mono">{step.num}</span>
                  <h3 className="text-xl font-medium text-[#E9F5EC]">{step.title}</h3>
                </div>
              </div>
              <p className="text-[#E9F5EC]/60 leading-relaxed mb-4">{step.description}</p>
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-[#F0B95A] bg-[#F0B95A]/10 rounded-full">
                {step.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
