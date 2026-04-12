import type { Restaurant } from '@/lib/data'

interface RestaurantCardProps {
  restaurant: Restaurant
}

function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const { name, cuisine, district, priceLevel, rating, emoji, bgClass, tags } = restaurant
  return (
    <article
      className="rest-card rounded-2xl overflow-hidden cursor-pointer"
      style={{ border: '0.5px solid var(--border)' }}
    >
      {/* Image placeholder */}
      <div
        className={`h-44 bg-gradient-to-br ${bgClass} flex items-center justify-center text-7xl`}
        role="img"
        aria-label={`${name} 餐廳照片`}
      >
        {emoji}
      </div>

      {/* Body */}
      <div className="p-4 pb-5">
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-[16px] font-medium">{name}</h3>
          <span
            className="text-white text-[13px] font-medium rounded-lg px-2 py-0.5 leading-tight"
            style={{ background: 'var(--brand)' }}
          >
            {rating}
          </span>
        </div>
        <p className="text-[12px] text-stone-500 mb-3">
          {cuisine} · {district} · {priceLevel}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-xl px-2.5 py-1 text-[11px] text-stone-500"
              style={{ background: 'var(--surface)', border: '0.5px solid var(--border)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

interface RestaurantGridProps {
  restaurants: Restaurant[]
}

export function RestaurantGrid({ restaurants }: RestaurantGridProps) {
  return (
    <section id="reviews" className="px-6 md:px-14 py-14">
      <p className="text-[11px] uppercase tracking-[2px] font-medium mb-1" style={{ color: 'var(--brand)' }}>
        最新食記
      </p>
      <h2 className="text-[22px] font-medium mb-1">本週熱門餐廳</h2>
      <p className="text-[14px] text-stone-500 mb-8">編輯嚴選，每篇都是真實體驗</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {restaurants.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>
    </section>
  )
}
