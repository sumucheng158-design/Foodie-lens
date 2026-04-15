'use client'
import { useEffect, useRef } from 'react'

const HERO_TAGS = ['#適合約會', '#不限時', '#深夜食堂', '#必點招牌']

const HERO_STATS = [
  { num: '1,200+', label: '收錄餐廳' },
  { num: '8,400+', label: '真實食記' },
  { num: '32 區', label: '台灣各地' },
]

export function HeroSection() {
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Lazy load hero image
    const img = new window.Image()
    img.src = 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=1400&q=80'
    img.onload = () => {
      if (imgRef.current) {
        imgRef.current.style.opacity = '0.55'
      }
    }
  }, [])

  return (
    <section
      className="relative flex items-end overflow-hidden"
      style={{ height: 'clamp(500px, 70vh, 700px)' }}
    >
      {/* Gradient base */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg,#1a0a04 0%,#6B2010 30%,#B05820 60%,#C8842C 85%,#D4A050 100%)' }}
      />

      {/* Photo layer */}
      <div
        ref={imgRef}
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1555126634-323283e090fa?w=1400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0,
          transition: 'opacity 1s ease',
        }}
      />

      {/* Dark overlay */}
      <div
        className="hero-gradient absolute inset-0"
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="relative z-10 w-full"
        style={{ padding: 'clamp(24px,5vw,64px)', paddingBottom: 'clamp(40px,6vw,72px)' }}
      >
        {/* Badge */}
        <div
          className="animate-fade-up inline-flex items-center gap-2 rounded-full mb-5"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '0.5px solid rgba(255,255,255,0.22)',
            color: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(4px)',
            fontSize: 12,
            padding: '6px 14px',
          }}
        >
          <span
            className="hero-dot rounded-full"
            style={{ width: 6, height: 6, background: 'var(--gold)', display: 'inline-block' }}
          />
          本週精選食記 · 台北東區
        </div>

        {/* Title */}
        <h1
          className="animate-fade-up delay-100 font-medium text-white leading-tight max-w-xl mb-4"
          style={{ fontFamily: 'var(--font-noto-serif)', fontSize: 'clamp(26px,5vw,48px)' }}
        >
          那碗讓我連吃三次的
          <br />
          <em className="not-italic" style={{ color: 'var(--gold)' }}>黑松露牛肉麵</em>
        </h1>

        {/* Stars */}
        <div className="animate-fade-up delay-200 flex items-center gap-3 mb-4">
          <span style={{ color: 'var(--gold)', fontSize: 16, letterSpacing: 2 }}>★★★★★</span>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>5.0 · 日式料理 · 信義區</span>
        </div>

        {/* Tags */}
        <div className="animate-fade-up delay-300 flex flex-wrap gap-2 mb-7">
          {HERO_TAGS.map(tag => (
            <span
              key={tag}
              className="rounded-full"
              style={{
                padding: '5px 12px',
                fontSize: 12,
                background: 'rgba(255,255,255,0.1)',
                border: '0.5px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.82)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="animate-fade-up delay-400 flex flex-wrap items-center gap-3">
          <a
            href="#reviews"
            className="inline-flex items-center gap-2 font-medium text-white rounded-full no-underline"
            style={{
              background: 'var(--brand)',
              padding: '12px 26px',
              fontSize: 14,
              fontWeight: 500,
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--brand2)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--brand)' }}
          >
            閱讀食記 →
          </a>
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(255,255,255,0.1)',
              color: '#fff',
              border: '0.5px solid rgba(255,255,255,0.25)',
              borderRadius: 24,
              padding: '12px 22px',
              fontSize: 14,
              cursor: 'pointer',
              fontFamily: 'inherit',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.2s',
            }}
          >
            📍 查看地圖
          </button>
        </div>

        {/* Stats */}
        <div
          className="animate-fade-up delay-500 flex"
          style={{
            marginTop: 32,
            paddingTop: 24,
            borderTop: '0.5px solid rgba(255,255,255,0.12)',
            gap: 'clamp(20px,4vw,48px)',
          }}
        >
          {HERO_STATS.map(({ num, label }) => (
            <div key={label}>
              <div style={{ fontSize: 22, fontWeight: 500, color: '#fff' }}>{num}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
