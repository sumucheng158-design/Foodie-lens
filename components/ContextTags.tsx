'use client'
import { useState } from 'react'
import { CONTEXT_TAGS } from '@/lib/data'

export function ContextTags() {
  const [active, setActive] = useState<Set<string>>(new Set())

  function toggle(key: string) {
    setActive(prev => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  function clearAll() {
    setActive(new Set())
  }

  const selectedLabels = CONTEXT_TAGS
    .filter(t => active.has(t.key))
    .map(t => t.tag)

  return (
    <section
      id="context"
      style={{ padding: 'clamp(48px,7vw,96px) clamp(16px,5vw,64px)', background: 'var(--card)' }}
    >
      <p style={{ fontSize: 11, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 500, marginBottom: 6 }}>情境標籤</p>
      <h2 style={{ fontFamily: 'var(--font-noto-serif)', fontSize: 'clamp(20px,3vw,28px)', fontWeight: 500, marginBottom: 6 }}>找到你的用餐情境</h2>
      <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 'clamp(28px,4vw,48px)' }}>點擊標籤篩選，找到最適合今天心情的餐廳</p>

      <div className="flex flex-wrap gap-2.5">
        {CONTEXT_TAGS.map(({ tag, key }) => (
          <button
            key={key}
            onClick={() => toggle(key)}
            aria-pressed={active.has(key)}
            className={`ctx-tag rounded-full ${active.has(key) ? 'active' : ''}`}
            style={{ padding: '8px 18px', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', border: '0.5px solid var(--border)' }}
          >
            {tag}
          </button>
        ))}
      </div>

      {active.size > 0 && (
        <div
          style={{
            marginTop: 24,
            padding: 16,
            background: 'var(--surface)',
            borderRadius: 12,
            fontSize: 13,
            color: 'var(--muted)',
            border: '0.5px solid var(--border)',
          }}
        >
          已選 <strong style={{ color: 'var(--ink)' }}>{active.size}</strong> 個情境標籤：
          {selectedLabels.join('、')}
          {' · '}
          <button
            onClick={clearAll}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--brand)', fontSize: 13, fontFamily: 'inherit', textDecoration: 'underline', textUnderlineOffset: 2, padding: 0 }}
          >
            清除全部
          </button>
          <br />
          <span style={{ marginTop: 6, display: 'inline-block' }}>✅ 正在為你篩選符合的餐廳…</span>
        </div>
      )}
    </section>
  )
}
