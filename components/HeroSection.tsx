import Link from 'next/link'

const HERO_TAGS = ['#適合約會', '#不限時', '#深夜食堂', '#必點招牌']

export function HeroSection() {
  return (
    <section className="relative h-[560px] md:h-[640px] flex items-end overflow-hidden">
      {/* Background — rich food-toned gradient (swap for next/image in production) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #2c1810 0%, #8B3A1A 35%, #C07843 65%, #E8C170 100%)',
        }}
        aria-hidden="true"
      >
        {/* Subtle aperture ring watermark */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 800 640"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <circle cx="400" cy="320" r="250" stroke="white" strokeWidth="1" fill="none" />
          <circle cx="400" cy="320" r="180" stroke="white" strokeWidth="0.5" fill="none" strokeDasharray="4 6" />
          <circle cx="400" cy="320" r="110" stroke="white" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="hero-gradient absolute inset-0" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-14 pb-12 md:pb-16">
        <div className="animate-fade-up">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs mb-5"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '0.5px solid rgba(255,255,255,0.22)',
              color: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--gold)' }}
            />
            本週精選食記 · 台北東區
          </div>
        </div>

        <h1
          className="animate-fade-up delay-100 text-white font-display font-medium leading-tight mb-4 max-w-[560px]"
          style={{ fontSize: 'clamp(24px, 5vw, 42px)' }}
        >
          那碗讓我連吃三次的
          <em className="not-italic" style={{ color: 'var(--gold)' }}>
            黑松露牛肉麵
          </em>
        </h1>

        <div className="animate-fade-up delay-200 flex items-center gap-3 mb-4">
          <span style={{ color: 'var(--gold)', fontSize: 18, letterSpacing: 1 }}>★★★★★</span>
          <span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.65)' }}>
            5.0 · 日式料理 · 信義區
          </span>
        </div>

        <div className="animate-fade-up delay-300 flex flex-wrap gap-2 mb-6">
          {HERO_TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-3 py-1 text-xs"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '0.5px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="animate-fade-up delay-400">
          <Link
            href="#reviews"
            className="inline-flex items-center gap-2 text-white font-medium rounded-full px-7 py-3 text-[15px] no-underline transition-all hover:opacity-90 active:scale-95"
            style={{ background: 'var(--brand)' }}
          >
            閱讀食記
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
