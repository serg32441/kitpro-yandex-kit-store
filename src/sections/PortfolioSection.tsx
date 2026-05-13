import { ExternalLink, ArrowUpRight } from 'lucide-react'

const portfolioItems = [
  { image: '/assets/images/landscape_1.jpg', title: 'TechStore Pro', category: 'Электроника', description: 'Мультиканальный магазин гаджетов с интеграцией Кит API и CRM', result: '+210% к конверсии' },
  { image: '/assets/images/landscape_5.jpg', title: 'GreenMarket', category: 'Продукты питания', description: 'Онлайн-супермаркет с системой подписок и доставкой за 2 часа', result: '15 000+ заказов/мес' },
  { image: '/assets/images/landscape_3.jpg', title: 'UrbanStyle', category: 'Мода и одежда', description: 'Fashion-платформа с AI-подбором стилей и виртуальной примеркой', result: '+180% средний чек' },
  { image: '/assets/images/landscape_2.jpg', title: 'HomeComfort', category: 'Товары для дома', description: 'Маркетплейс мебели и декора с AR-визуализацией в интерьере', result: '4.9★ рейтинг' },
  { image: '/assets/images/square_1.jpg', title: 'SportLife', category: 'Спортивные товары', description: 'E-commerce для спортивных брендов с программой лояльности', result: '+150% LTV клиента' },
  { image: '/assets/images/square_3.jpg', title: 'BeautyBox', category: 'Косметика', description: 'Premium beauty store с персонализированными рекомендациями', result: '85% повторных покупок' },
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-32 md:py-40 bg-[#1B4332]">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 md:mb-24">
          <div>
            <span className="label-uppercase text-[#52B788] mb-4 block">Портфолио</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#E9F5EC] tracking-[-1.5px] leading-[1.1] max-w-2xl">
              Выбранные <span className="text-[#52B788]">проекты</span>
            </h2>
          </div>
          <p className="text-[#E9F5EC]/60 text-lg max-w-md lg:text-right">
            Каждый проект — это уникальное решение, созданное под конкретные бизнес-задачи клиента
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-2xl border border-[#2D6A4F]/30 bg-[#1B4332]/50 cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332] via-[#1B4332]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium text-[#52B788] bg-[#1B4332]/80 backdrop-blur-sm rounded-full border border-[#52B788]/30">{item.category}</span>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#52B788]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-[#52B788]" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-medium text-[#E9F5EC] mb-2 group-hover:text-[#52B788] transition-colors duration-300">{item.title}</h3>
                  <p className="text-[#E9F5EC]/60 text-sm mb-3 line-clamp-2">{item.description}</p>
                  <span className="px-3 py-1 text-xs font-semibold text-[#F0B95A] bg-[#F0B95A]/10 rounded-full">{item.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#52B788]/50 text-[#52B788] font-medium rounded-full hover:bg-[#52B788]/10 transition-all duration-300 group">
            <span>Обсудить ваш проект</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}
