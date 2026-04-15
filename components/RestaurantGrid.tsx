'use client'
import { useState, useEffect } from 'react'
import type { Restaurant } from '@/lib/data'
import { RestaurantModal } from './RestaurantModal'

const FILTERS = ['全部', '拉麵', '燒烤', '壽司', '義式']

interface RestaurantGridProps {
  restaurants: Restaurant[]
}

export function RestaurantGrid({ restaurants }: RestaurantGridProps) {
  const [activeFilter, setActiveFilter] = useState('全部')
  const [saved, setSaved] = useState<Set<string>>(new Set())
  const [modalId, setModalId] = useState<string | null>(null)

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.rest-card.anim').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  function toggleSave(e: React.MouseEvent, id: string) {
    e.stopPropagation()
    setSaved(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  function shareCard(name: string) {
    navigator.clipboard?.writeText(`${name} — 食光筆記 https://foodielens.tw`)
      .then(() => alert(`已複製「${name}」的分享連結！`))
      .catch(() => alert(`分享連結：${name} — 食光筆記`))
  }

  const filtered = activeFilter === '全部'
    ? restaurants
    : restaurants.filter(r => r.filterTag === activeFilter)

  const modalRestaurant = modalId ? restaurants.find(r => r.id === modalId) ?? null : null

  return (
    <section id="restaurant-section" style={{ padding: 'clamp(48px,7vw,96px) clamp(16px,5vw,64px)' }}>
      <p style={{ fontSize: 11, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 500, marginBottom: 6 }}>探索餐廳</p>
      <h2 style={{ fontFamily: 'var(--font-noto-serif)', fontSize: 'clamp(20px,3vw,28px)', fontWeight: 500, marginBottom: 6 }}>本週熱門推薦</h2>
      <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 'clamp(28px,4vw,48px)' }}>編輯嚴選，每篇都是真實體驗</p>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2 mb-7">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`filter-chip rounded-full ${activeFilter === f ? 'active' : ''}`}
            style={{ padding: '7px 16px', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', border: '0.5px solid var(--border)' }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 20 }}>
        {filtered.length === 0 ? (
          <p style={{ gridColumn: '1/-1', textAlign: 'center', padding: 48, color: 'var(--muted)', fontSize: 14 }}>
            😕 沒有找到符合條件的餐廳
          </p>
        ) : filtered.map(r => (
          <article
            key={r.id}
            data-id={r.id}
            className="rest-card anim rounded-2xl overflow-hidden"
            style={{ background: 'var(--card)', border: '0.5px solid var(--border)', cursor: 'pointer' }}
          >
            {/* Image */}
            <div style={{ height: 180, position: 'relative', overflow: 'hidden' }}>
              <div
                className="card-img-inner"
                style={{ width: '100%', height: '100%', background: r.gradientStyle, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 72 }}
              >
                {r.emoji}
              </div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(0,0,0,0.4) 0%,transparent 60%)' }} />
              {/* Rating badge */}
              <span style={{ position: 'absolute', top: 10, right: 10, background: 'var(--brand)', color: '#fff', fontSize: 12, fontWeight: 500, padding: '3px 9px', borderRadius: 8 }}>
                {r.rating}
              </span>
              {/* Save button */}
              <button
                onClick={e => toggleSave(e, r.id)}
                style={{
                  position: 'absolute', top: 10, left: 10,
                  background: saved.has(r.id) ? 'var(--brand)' : 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(6px)',
                  border: `0.5px solid ${saved.has(r.id) ? 'var(--brand)' : 'rgba(255,255,255,0.2)'}`,
                  borderRadius: '50%', width: 34, height: 34,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: '#fff', fontSize: 16, transition: 'all 0.2s',
                }}
              >
                {saved.has(r.id) ? '♥' : '♡'}
              </button>
            </div>

            {/* Body */}
            <div style={{ padding: 16 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 16, fontWeight: 500 }}>{r.name}</span>
              </div>
              <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 10 }}>
                {r.cuisine} · {r.district} · {r.priceLevel}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {r.tags.map(tag => (
                  <span key={tag} style={{ background: 'var(--surface)', border: '0.5px solid var(--border)', borderRadius: 10, padding: '4px 10px', fontSize: 11, color: 'var(--muted)' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: 6, marginTop: 12, paddingTop: 12, borderTop: '0.5px solid var(--border)' }}>
                <button
                  onClick={() => setModalId(r.id)}
                  style={{ flex: 1, background: 'var(--surface)', border: '0.5px solid var(--border)', borderRadius: 8, padding: 7, fontSize: 12, cursor: 'pointer', color: 'var(--muted)', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, transition: 'all 0.2s' }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.background = 'var(--brand)'; el.style.color = '#fff'; el.style.borderColor = 'var(--brand)' }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'var(--surface)'; el.style.color = 'var(--muted)'; el.style.borderColor = 'var(--border)' }}
                >
                  📊 詳細評析
                </button>
                <button
                  onClick={() => shareCard(r.name)}
                  style={{ flex: 1, background: 'var(--surface)', border: '0.5px solid var(--border)', borderRadius: 8, padding: 7, fontSize: 12, cursor: 'pointer', color: 'var(--muted)', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, transition: 'all 0.2s' }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.background = 'var(--brand)'; el.style.color = '#fff'; el.style.borderColor = 'var(--brand)' }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'var(--surface)'; el.style.color = 'var(--muted)'; el.style.borderColor = 'var(--border)' }}
                >
                  🔗 分享
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {modalRestaurant && (
        <RestaurantModal restaurant={modalRestaurant} onClose={() => setModalId(null)} />
      )}
    </section>
  )
}
