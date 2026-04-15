'use client'
import { useEffect } from 'react'
import type { FeaturedReview } from '@/lib/data'

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5
  return (
    <span style={{ color: 'var(--gold)', fontSize: 15, letterSpacing: 1 }}>
      {'★'.repeat(full)}
      {hasHalf ? '½' : ''}
      {'☆'.repeat(5 - full - (hasHalf ? 1 : 0))}
      <span style={{ color: 'var(--muted)', fontSize: 13, marginLeft: 4 }}>{rating}</span>
    </span>
  )
}

function ReviewBlock({ review }: { review: FeaturedReview }) {
  const { restaurantName, title, excerpt, rating, category, emoji, gradientStyle, reverse } = review

  return (
    <div
      className="anim"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'clamp(24px,5vw,64px)',
        alignItems: 'center',
        marginBottom: 'clamp(40px,6vw,80px)',
        direction: reverse ? 'rtl' : 'ltr',
      }}
    >
      <div style={{ direction: 'ltr' }}>
        <div
          style={{
            borderRadius: 16,
            height: 'clamp(220px,28vw,320px)',
            background: gradientStyle,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'clamp(60px,9vw,100px)',
          }}
          role="img"
          aria-label={`${restaurantName} 食記照片`}
        >
          {emoji}
        </div>
      </div>
      <div style={{ direction: 'ltr' }}>
        <p style={{ fontSize: 11, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 500, marginBottom: 8 }}>{category}</p>
        <h3 style={{ fontFamily: 'var(--font-noto-serif)', fontSize: 'clamp(17px,2.5vw,22px)', fontWeight: 500, lineHeight: 1.45, marginBottom: 12 }}>{title}</h3>
        <div style={{ marginBottom: 12 }}><StarRating rating={rating} /></div>
        <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.85, marginBottom: 18 }}>{excerpt}</p>
        <button style={{ fontSize: 13, fontWeight: 500, color: 'var(--brand)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', textDecoration: 'underline', textUnderlineOffset: 3, padding: 0 }}>
          閱讀完整食記 →
        </button>
      </div>
    </div>
  )
}

interface FeaturedReviewsProps {
  reviews: FeaturedReview[]
}

export function FeaturedReviews({ reviews }: FeaturedReviewsProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reviews-section .anim').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="reviews-section"
      id="reviews"
      style={{ padding: 'clamp(48px,7vw,96px) clamp(16px,5vw,64px)', background: 'var(--surface)' }}
    >
      <p style={{ fontSize: 11, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 500, marginBottom: 6 }}>深度食記</p>
      <h2 style={{ fontFamily: 'var(--font-noto-serif)', fontSize: 'clamp(20px,3vw,28px)', fontWeight: 500, marginBottom: 6 }}>精選撰文</h2>
      <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 'clamp(28px,4vw,48px)' }}>文字、光影、味覺，三位一體的用餐紀錄</p>

      {reviews.map(r => <ReviewBlock key={r.id} review={r} />)}
    </section>
  )
}
