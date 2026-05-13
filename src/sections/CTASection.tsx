import { useState } from 'react'
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react'

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="relative py-32 md:py-40 bg-[#000]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#52B788]/10 rounded-full filter blur-[200px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-light text-[#E9F5EC] tracking-[-2px] leading-[1.1] mb-6">
            Готовы создать <span className="text-[#52B788] font-medium">магазин</span>?
          </h2>
          <p className="text-[#E9F5EC]/60 text-lg max-w-xl mx-auto">
            Оставьте заявку и получите бесплатную консультацию с анализом вашей ниши
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          <form onSubmit={handleSubmit} className="lg:col-span-3 p-8 md:p-10 rounded-2xl border border-[#2D6A4F]/30 bg-[#1B4332]/30 backdrop-blur-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-[#52B788] mb-4" />
                <h3 className="text-2xl font-medium text-[#E9F5EC] mb-2">Заявка отправлена!</h3>
                <p className="text-[#E9F5EC]/60">Мы свяжемся с вами в течение 24 часов</p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm text-[#E9F5EC]/60 mb-2">Ваше имя</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl bg-[#1B4332]/80 border border-[#2D6A4F]/40 text-[#E9F5EC] placeholder-[#E9F5EC]/30 focus:outline-none focus:border-[#52B788] transition-colors" placeholder="Иван Петров" />
                  </div>
                  <div>
                    <label className="block text-sm text-[#E9F5EC]/60 mb-2">Телефон</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-xl bg-[#1B4332]/80 border border-[#2D6A4F]/40 text-[#E9F5EC] placeholder-[#E9F5EC]/30 focus:outline-none focus:border-[#52B788] transition-colors" placeholder="+7 (999) 000-00-00" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm text-[#E9F5EC]/60 mb-2">Email</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl bg-[#1B4332]/80 border border-[#2D6A4F]/40 text-[#E9F5EC] placeholder-[#E9F5EC]/30 focus:outline-none focus:border-[#52B788] transition-colors" placeholder="example@mail.ru" />
                </div>
                <div className="mb-6">
                  <label className="block text-sm text-[#E9F5EC]/60 mb-2">Тип магазина</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-[#1B4332]/80 border border-[#2D6A4F]/40 text-[#E9F5EC] focus:outline-none focus:border-[#52B788] transition-colors appearance-none cursor-pointer">
                    <option value="">Выберите тип</option>
                    <option value="new">Новый магазин с нуля</option>
                    <option value="migrate">Перенос на Яндекс.Кит</option>
                    <option value="redesign">Редизайн существующего</option>
                    <option value="custom">Кастомная разработка</option>
                  </select>
                </div>
                <div className="mb-8">
                  <label className="block text-sm text-[#E9F5EC]/60 mb-2">Описание проекта</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-[#1B4332]/80 border border-[#2D6A4F]/40 text-[#E9F5EC] placeholder-[#E9F5EC]/30 focus:outline-none focus:border-[#52B788] transition-colors resize-none" placeholder="Расскажите о вашем проекте, товарах и целях..." />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#F0B95A] text-[#000] font-medium rounded-full hover:bg-[#F0B95A]/90 transition-all duration-300">
                  <Send className="w-5 h-5" /> Отправить заявку
                </button>
                <p className="text-[#E9F5EC]/30 text-xs text-center mt-4">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
              </>
            )}
          </form>

          <div className="lg:col-span-2 flex flex-col justify-center gap-8">
            <div>
              <h3 className="text-xl font-medium text-[#E9F5EC] mb-4">Контакты</h3>
              <div className="space-y-4">
                <a href="tel:+74951234567" className="flex items-center gap-3 text-[#E9F5EC]/70 hover:text-[#52B788] transition-colors"><Phone className="w-5 h-5" /><span>+7 (495) 123-45-67</span></a>
                <a href="mailto:hello@kitpro.ru" className="flex items-center gap-3 text-[#E9F5EC]/70 hover:text-[#52B788] transition-colors"><Mail className="w-5 h-5" /><span>hello@kitpro.ru</span></a>
                <div className="flex items-start gap-3 text-[#E9F5EC]/70"><MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" /><span>Москва, ул. Дизайнерская, 42<br />Бизнес-центр «Технопарк»</span></div>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-[#2D6A4F]/30 bg-[#1B4332]/30">
              <h4 className="text-lg font-medium text-[#E9F5EC] mb-3">Быстрый старт</h4>
              <p className="text-[#E9F5EC]/50 text-sm mb-4">Получите бесплатный аудит вашей текущей площадки и рекомендации по улучшению</p>
              <div className="flex items-center gap-2 text-[#52B788] text-sm"><CheckCircle className="w-4 h-4" /><span>Ответ в течение 2 часов</span></div>
            </div>
            <div className="p-6 rounded-xl border border-[#F0B95A]/20 bg-[#F0B95A]/5">
              <h4 className="text-lg font-medium text-[#F0B95A] mb-2">Специальное предложение</h4>
              <p className="text-[#E9F5EC]/60 text-sm">При заказе до конца месяца — бесплатная настройка Яндекс.Метрики и целей на 3 месяца</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
