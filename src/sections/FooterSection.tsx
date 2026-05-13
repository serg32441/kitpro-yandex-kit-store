const footerLinks = {
  services: [
    { label: 'Создание магазина', href: '#services' },
    { label: 'Дизайн интерфейса', href: '#services' },
    { label: 'Кастомная разработка', href: '#services' },
    { label: 'Мобильная оптимизация', href: '#services' },
    { label: 'Аналитика и рост', href: '#services' },
  ],
  company: [
    { label: 'О нас', href: '#' },
    { label: 'Команда', href: '#' },
    { label: 'Карьера', href: '#' },
    { label: 'Блог', href: '#' },
  ],
  resources: [
    { label: 'Документация Кит', href: '#' },
    { label: 'Частые вопросы', href: '#' },
    { label: 'Кейсы', href: '#portfolio' },
    { label: 'Партнёрам', href: '#' },
  ],
  legal: [
    { label: 'Политика конфиденциальности', href: '#' },
    { label: 'Условия использования', href: '#' },
    { label: 'Оферта', href: '#' },
  ],
}

export default function FooterSection() {
  return (
    <footer className="relative py-16 md:py-20 bg-[#000] border-t border-[#2D6A4F]/20">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#52B788] rounded-lg flex items-center justify-center">
                <span className="text-[#000] font-bold text-sm">K</span>
              </div>
              <span className="text-[#E9F5EC] font-medium text-lg tracking-tight">
                Kit<span className="text-[#52B788]">Pro</span>
              </span>
            </a>
            <p className="text-[#E9F5EC]/50 text-sm leading-relaxed max-w-sm mb-6">
              Профессиональная разработка интернет-магазинов на платформе Яндекс.Кит.
              От старта до масштабирования — ваш надёжный технологический партнёр.
            </p>
            <div className="flex gap-3">
              {['VK', 'TG', 'WA'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-[#2D6A4F]/40 flex items-center justify-center text-[#E9F5EC]/60 hover:text-[#52B788] hover:border-[#52B788]/40 transition-all duration-300">
                  <span className="text-xs font-medium">{social}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="label-uppercase text-[#E9F5EC]/40 mb-4">Услуги</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}><a href={link.href} className="text-[#E9F5EC]/60 hover:text-[#52B788] text-sm transition-colors duration-300">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-uppercase text-[#E9F5EC]/40 mb-4">Компания</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}><a href={link.href} className="text-[#E9F5EC]/60 hover:text-[#52B788] text-sm transition-colors duration-300">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-uppercase text-[#E9F5EC]/40 mb-4">Ресурсы</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}><a href={link.href} className="text-[#E9F5EC]/60 hover:text-[#52B788] text-sm transition-colors duration-300">{link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-[#2D6A4F]/20 mb-8" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[#E9F5EC]/30 text-sm">© {new Date().getFullYear()} KitPro. Все права защищены.</p>
          <div className="flex flex-wrap gap-4">
            {footerLinks.legal.map((link) => (
              <a key={link.label} href={link.href} className="text-[#E9F5EC]/30 hover:text-[#E9F5EC]/60 text-xs transition-colors duration-300">{link.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
