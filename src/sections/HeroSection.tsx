import { ShoppingCart, Zap, TrendingUp, Layers } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-end pb-24 md:pb-32 overflow-hidden">
      {/* Static CSS Background */}
      <div className="absolute inset-0 z-0 bg-[#1B4332]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332] via-[#1B4332] to-[#2D6A4F]" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#52B788]/20 rounded-full filter blur-[80px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#2D6A4F]/30 rounded-full filter blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-[#F0B95A]/10 rounded-full filter blur-[60px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container w-full">
        <div className="max-w-4xl">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-light leading-[1.1] tracking-[-2px] text-[#E9F5EC] mb-6"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.4)' }}
          >
            Интернет-магазины
            <br />
            <span className="text-[#52B788] font-medium">на Яндекс.Кит</span>
            <br />
            под ключ
          </h1>

          <p className="text-lg md:text-xl text-[#E9F5EC]/80 font-light leading-relaxed max-w-xl mb-8">
            Создаем высококонверсионные e-commerce решения с интеграцией
            Яндекс.Кит для быстрого запуска и масштабирования вашего бизнеса
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 bg-[#F0B95A] text-[#000] font-medium rounded-full hover:bg-[#F0B95A]/90 transition-all duration-300"
            >
              Обсудить проект
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center px-8 py-3.5 border border-[#52B788]/50 text-[#52B788] font-medium rounded-full hover:bg-[#52B788]/10 transition-all duration-300"
            >
              Смотреть работы
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-8 border-t border-[#E9F5EC]/10">
          {[
            { icon: ShoppingCart, value: '120+', label: 'Магазинов запущено' },
            { icon: Zap, value: '14 дней', label: 'Средний срок запуска' },
            { icon: TrendingUp, value: '3.2×', label: 'Рост конверсии' },
            { icon: Layers, value: '98%', label: 'Довольных клиентов' },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-start gap-3">
              <Icon className="w-5 h-5 text-[#52B788] mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xl md:text-2xl font-bold text-[#E9F5EC]">{value}</div>
                <div className="text-sm text-[#E9F5EC]/60 mt-0.5">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
