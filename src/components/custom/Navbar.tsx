import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const navLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Преимущества', href: '#benefits' },
  { label: 'Процесс', href: '#process' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'Контакты', href: '#contact' },
]

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Animate nav in
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: 'power3.out',
    })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1B4332]/90 backdrop-blur-md border-b border-[#2D6A4F]/30'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <div className="w-8 h-8 bg-[#52B788] rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span className="text-[#000] font-bold text-sm">K</span>
          </div>
          <span className="text-[#E9F5EC] font-medium text-lg tracking-tight">
            Kit<span className="text-[#52B788]">Pro</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="label-uppercase text-[#E9F5EC]/70 hover:text-[#52B788] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          onClick={(e) => handleClick(e, '#contact')}
          className="hidden lg:inline-flex items-center px-6 py-2.5 bg-[#F0B95A] text-[#000] font-medium text-sm rounded-full hover:bg-[#F0B95A]/90 transition-all duration-300 hover:scale-105"
        >
          Начать проект
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => {
            const mobileMenu = document.getElementById('mobile-menu')
            if (mobileMenu) {
              mobileMenu.classList.toggle('hidden')
            }
          }}
        >
          <span className="w-6 h-0.5 bg-[#E9F5EC]" />
          <span className="w-6 h-0.5 bg-[#E9F5EC]" />
          <span className="w-4 h-0.5 bg-[#E9F5EC]" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden lg:hidden bg-[#1B4332]/95 backdrop-blur-md border-t border-[#2D6A4F]/30">
        <div className="section-container py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="label-uppercase text-[#E9F5EC]/70 hover:text-[#52B788] transition-colors duration-300 py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[#F0B95A] text-[#000] font-medium text-sm rounded-full mt-2"
          >
            Начать проект
          </a>
        </div>
      </div>
    </nav>
  )
}
