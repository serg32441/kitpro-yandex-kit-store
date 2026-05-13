import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ShoppingCart, Zap, TrendingUp, Layers } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.from(titleRef.current, { y: 60, opacity: 0, duration: 1.4, delay: 0.3, ease: 'power3.out' })
      .from(subtitleRef.current, { y: 40, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=0.8')
      .from(ctaRef.current, { y: 30, opacity: 0, duration: 1.0, ease: 'power3.out' }, '-=0.6')
      .from(statsRef.current?.children || [], { y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, '-=0.4')

    gsap.to([titleRef.current, subtitleRef.current, ctaRef.current, statsRef.current], {
      y: -100, opacity: 0, ease: 'none',
      scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
    })
  }, [])

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex items-end pb-24 md:pb-32 overflow-hidden">
      {/* Animated CSS Background */}
      <div className="absolute inset-0 z-0 bg-[#1B4332]">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332] via-[#1B4332] to-[#2D6A4F]" />

        {/* Animated orb 1 - top right */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #52B788 0%, transparent 70%)',
            top: '-10%',
            right: '-10%',
            filter: 'blur(80px)',
            animation: 'float1 12s ease-in-out infinite',
          }}
        />
        {/* Animated orb 2 - bottom left */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #2D6A4F 0%, transparent 70%)',
            bottom: '-5%',
            left: '-15%',
            filter: 'blur(100px)',
            animation: 'float2 15s ease-in-out infinite',
          }}
        />
        {/* Animated orb 3 - center */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #F0B95A 0%, transparent 70%)',
            top: '40%',
            left: '50%',
            filter: 'blur(60px)',
            animation: 'float3 10s ease-in-out infinite',
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(82,183,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(82,183,136,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: '128px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container w-full">
        <div className="max-w-4xl">
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-light leading-[1.1] tracking-[-2px] text-[#E9F5EC] mb-6"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.4), 0 2px 10px rgba(0,0,0,0.3)' }}
          >
            Интернет-магазины
            <br />
            <span className="text-[#52B788] font-medium">на Яндекс.Кит</span>
            <br />
            под ключ
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-[#E9F5EC]/80 font-light leading-relaxed max-w-xl mb-8"
          >
            Создаем высококонверсионные e-commerce решения с интеграцией
            Яндекс.Кит для быстрого запуска и масштабирования вашего бизнеса
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4 mb-16">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center px-8 py-3.5 bg-[#F0B95A] text-[#000] font-medium rounded-full hover:bg-[#F0B95A]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#F0B95A]/20"
            >
              Обсудить проект
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center px-8 py-3.5 border border-[#52B788]/50 text-[#52B788] font-medium rounded-full hover:bg-[#52B788]/10 transition-all duration-300"
            >
              Смотреть работы
            </a>
          </div>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-8 border-t border-[#E9F5EC]/10"
        >
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

      {/* CSS animations for orbs */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 40px) scale(1.1); }
          66% { transform: translate(20px, -20px) scale(0.95); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }
      `}</style>
    </section>
  )
}
