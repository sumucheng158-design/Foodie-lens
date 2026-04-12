'use client'

import { useState } from 'react'
import { CONTEXT_TAGS } from '@/lib/data'

export function ContextTags() {
  const [active, setActive] = useState<Set<string>>(new Set())

  function toggle(tag: string) {
    setActive((prev) => {
      const next = new Set(prev)
      next.has(tag) ? next.delete(tag) : next.add(tag)
      return next
    })
  }

  return (
    <section className="px-6 md:px-14 py-14 bg-white">
      <p className="text-[11px] uppercase tracking-[2px] font-medium mb-1" style={{ color: 'var(--brand)' }}>
        情境標籤
      </p>
      <h2 className="text-[22px] font-medium mb-1">找到你的用餐情境</h2>
      <p className="text-[14px] text-stone-500 mb-8">
        點擊標籤，篩選符合你今天心情的餐廳
      </p>

      <div className="flex flex-wrap gap-2.5">
        {CONTEXT_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => toggle(tag)}
            aria-pressed={active.has(tag)}
            className="ctx-tag rounded-full px-4 py-2 text-[13px] bg-white"
            style={{
              border: '0.5px solid var(--border)',
              color: active.has(tag) ? '#fff' : 'var(--ink)',
              background: active.has(tag) ? 'var(--brand)' : 'var(--white)',
              borderColor: active.has(tag) ? 'var(--brand)' : undefined,
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {active.size > 0 && (
        <p className="text-[13px] text-stone-400 mt-5">
          已選 {active.size} 個標籤 ·{' '}
          <button
            onClick={() => setActive(new Set())}
            className="underline underline-offset-2"
            style={{ color: 'var(--brand)' }}
          >
            清除全部
          </button>
        </p>
      )}
    </section>
  )
}
