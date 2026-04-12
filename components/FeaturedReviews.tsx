import type { FeaturedReview } from '@/lib/data'

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5
  return (
    <span style={{ color: 'var(--gold)', fontSize: 16, letterSpacing: 1 }}>
      {'★'.repeat(full)}
      {hasHalf ? '½' : ''}
      {'☆'.repeat(5 - full - (hasHalf ? 1 : 0))}
      <span className="text-stone-400 text-[13px] ml-1">{rating}</span>
    </span>
  )
}

interface ReviewBlockProps {
  review: FeaturedReview
}

function ReviewBlock({ review }: ReviewBlockProps) {
  const { restaurantName, title, excerpt, rating, category, emoji, bgClass, reverse } = review

  const imageEl = (
    <div
      className={`rounded-xl h-64 md:h-72 bg-gradient-to-br ${bgClass} flex items-center justify-center text-8xl flex-shrink-0`}
      role="img"
      aria-label={`${restaurantName} 食記照片`}
    >
      {emoji}
    </div>
  )

  const textEl = (
    <div className="flex flex-col justify-center">
      <p className="text-[11px] uppercase tracking-[2px] font-medium mb-2" style={{ color: 'var(--brand)' }}>
        {category}
      </p>
      <h3 className="text-[18px] md:text-[20px] font-medium leading-snug mb-3">{title}</h3>
      <div className="mb-4">
        <StarRating rating={rating} />
      </div>
      <p className="text-[14px] text-stone-500 leading-relaxed mb-4">{excerpt}</p>
      <button className="text-[13px] font-medium underline underline-offset-4 text-left" style={{ color: 'var(--brand)' }}>
        閱讀完整食記 →
      </button>
    </div>
  )

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-14 ${
        reverse ? 'md:[direction:rtl]' : ''
      }`}
    >
      <div className={reverse ? 'md:[direction:ltr]' : ''}>{imageEl}</div>
      <div className={reverse ? 'md:[direction:ltr]' : ''}>{textEl}</div>
    </div>
  )
}

interface FeaturedReviewsProps {
  reviews: FeaturedReview[]
}

export function FeaturedReviews({ reviews }: FeaturedReviewsProps) {
  return (
    <section className="px-6 md:px-14 py-14" style={{ background: 'var(--surface)' }}>
      <p className="text-[11px] uppercase tracking-[2px] font-medium mb-1" style={{ color: 'var(--brand)' }}>
        深度食記
      </p>
      <h2 className="text-[22px] font-medium mb-1">精選撰文</h2>
      <p className="text-[14px] text-stone-500 mb-10">文字、光影、味覺，三位一體的用餐紀錄</p>

      {reviews.map((r) => (
        <ReviewBlock key={r.id} review={r} />
      ))}
    </section>
  )
}
