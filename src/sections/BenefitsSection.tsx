import { Clock, Shield, TrendingUp, Users, Sparkles, BarChart3 } from 'lucide-react'

const benefits = [
  { icon: Clock, title: 'Быстрый запуск', value: 'от 10 дней', description: 'Оптимизированные процессы и готовые решения позволяют запустить магазин в рекордные сроки.' },
  { icon: Shield, title: 'Надёжная платформа', value: '99.9%', description: 'Яндекс.Кит обеспечивает стабильную работу с гарантированным uptime и защитой данных.' },
  { icon: TrendingUp, title: 'Рост продаж', value: '+150%', description: 'В среднем наши клиенты увеличивают конверсию в 2.5 раза после оптимизации магазина.' },
  { icon: Users, title: 'Экспертная команда', value: '8+ лет', description: 'Сертифицированные специалисты с глубокой экспертизой в e-commerce и платформе Кит.' },
  { icon: Sparkles, title: 'Уникальный дизайн', value: '100%', description: 'Каждый магазин создается индивидуально — никаких шаблонов и типовых решений.' },
  { icon: BarChart3, title: 'Прозрачная аналитика', value: 'Real-time', description: 'Полный контроль над метриками: от просмотров до ROI в реальном времени.' },
]

export default function BenefitsSection() {
  return (
    <section id="benefits" className="relative py-32 md:py-40 bg-[#1B4332]">
      <div className="section-container">
        <div className="mb-16 md:mb-24">
          <span className="label-uppercase text-[#52B788] mb-4 block">Преимущества</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#E9F5EC] tracking-[-1.5px] leading-[1.1] max-w-2xl">
              Почему выбирают <span className="text-[#52B788]">KitPro</span>
            </h2>
            <p className="text-[#E9F5EC]/60 text-lg max-w-md lg:text-right">
              Комбинируем технологическую экспертизу и глубокое понимание e-commerce для достижения ваших бизнес-целей
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          <div className="lg:sticky lg:top-32 lg:self-start h-[400px] lg:h-[500px]">
            <div className="relative w-full h-full bg-black overflow-hidden rounded-lg">
              <div className="text-center px-8 flex flex-col items-center justify-center h-full">
                <div className="text-6xl md:text-7xl font-bold text-[#E9F5EC] mb-4">150%</div>
                <div className="text-xl text-[#52B788] font-medium mb-3">Средний рост конверсии</div>
                <p className="text-[#E9F5EC]/50 text-sm max-w-xs mx-auto">Реальные результаты наших клиентов после запуска магазина на Яндекс.Кит.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 py-8">
            {[
              { h: 'Дата-ориентированный подход', t: 'Анализируем паттерны рынка и поведение пользователей, чтобы каждое архитектурное решение увеличивало конверсию. Все изменения основываются на реальных данных, а не предположениях.' },
              { h: 'Адаптивные интерфейсы', t: 'Дизайн-системы, которые адаптируются в реальном времени под поведение пользователя. Интуитивные пути к конверсии с персонализированным UX для каждого сегмента аудитории.' },
              { h: 'Масштабируемая архитектура', t: 'Построено на надёжных, серверлесс-решениях, готовых к экспоненциальному росту. Инфраструктура автоматически масштабируется под нагрузку без потери производительности.' },
            ].map((b) => (
              <div key={b.h} className="p-8 rounded-2xl border border-[#2D6A4F]/30 bg-[#1B4332]/80">
                <h3 className="text-2xl font-medium text-[#E9F5EC] mb-4">{b.h}</h3>
                <p className="text-[#E9F5EC]/60 leading-relaxed">{b.t}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="group p-6 rounded-xl border border-[#2D6A4F]/20 bg-[#2D6A4F]/10 hover:bg-[#2D6A4F]/20 hover:border-[#52B788]/30 transition-all duration-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#52B788]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#52B788]/20 transition-all duration-300">
                  <benefit.icon className="w-5 h-5 text-[#52B788]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#E9F5EC]">{benefit.title}</h3>
                  <span className="text-[#52B788] text-sm font-semibold">{benefit.value}</span>
                </div>
              </div>
              <p className="text-[#E9F5EC]/50 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
