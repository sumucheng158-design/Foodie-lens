'use client'
import { useState, useRef, useEffect } from 'react'
import { RESTAURANTS } from '@/lib/data'

const NAV_LINKS = [
  { href: '#reviews', label: '食記' },
  { href: '#restaurant-section', label: '探索' },
  { href: '#flavor', label: '雷達圖' },
  { href: '#trafficlight', label: '點餐燈' },
  { href: '#context', label: '情境' },
]

function LogoMark() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="17" cy="17" r="16" stroke="#B5341A" strokeWidth="1.2" />
      <circle cx="17" cy="17" r="10" stroke="#B5341A" strokeWidth="0.7" strokeDasharray="3 4" />
      <circle cx="17" cy="17" r="4" fill="#C9961A" />
      <line x1="17" y1="1" x2="17" y2="5" stroke="#B5341A" strokeWidth="1" />
      <line x1="17" y1="29" x2="17" y2="33" stroke="#B5341A" strokeWidth="1" />
      <line x1="1" y1="17" x2="5" y2="17" stroke="#B5341A" strokeWidth="1" />
      <line x1="29" y1="17" x2="33" y2="17" stroke="#B5341A" strokeWidth="1" />
    </svg>
  )
}

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const dark = document.documentElement.classList.contains('dark')
    setIsDark(dark)
  }, [])

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false)
        setSearchQuery('')
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  function toggleDark() {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch {}
  }

  function toggleSearch() {
    const next = !searchOpen
    setSearchOpen(next)
    setSearchQuery('')
    if (next) setTimeout(() => inputRef.current?.focus(), 50)
  }

  const results = searchQuery.trim()
    ? RESTAURANTS.filter(r =>
        r.name.includes(searchQuery) ||
        r.cuisine.includes(searchQuery) ||
        r.district.includes(searchQuery)
      )
    : []

  function highlightCard(id: string) {
    setSearchOpen(false)
    setSearchQuery('')
    const el = document.querySelector(`[data-id="${id}"]`) as HTMLElement | null
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      el.style.outline = '2px solid var(--brand)'
      setTimeout(() => { el.style.outline = '' }, 1500)
    }
  }

  return (
    <>
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10"
        style={{
          height: 'var(--nav-h)',
          background: isDark ? 'rgba(20,16,11,0.9)' : 'rgba(250,247,242,0.9)',
          backdropFilter: 'blur(16px)',
          borderBottom: '0.5px solid var(--border)',
          transition: 'background 0.3s',
        }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 no-underline" style={{ color: 'var(--ink)' }}>
          <LogoMark />
          <span style={{ fontSize: 17, fontWeight: 500, letterSpacing: '-0.5px' }}>
            食光<span style={{ color: 'var(--brand)' }}>筆記</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} style={{ fontSize: 13, color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2.5">
          {/* Search */}
          <div ref={searchRef} className="relative flex items-center">
            <input
              ref={inputRef}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="搜尋餐廳、菜系…"
              className="search-input"
              style={{
                width: searchOpen ? 160 : 0,
                padding: searchOpen ? '6px 12px' : '6px 0',
                fontSize: 13,
                border: searchOpen ? '0.5px solid var(--border)' : 'none',
                background: searchOpen ? 'var(--card)' : 'transparent',
                borderRadius: 20,
                color: 'var(--ink)',
                outline: 'none',
                fontFamily: 'inherit',
                transition: 'width 0.3s, padding 0.3s',
              }}
            />
            <button onClick={toggleSearch} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', padding: 4, display: 'flex' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            {/* Search results dropdown */}
            {searchOpen && results.length > 0 && (
              <div className="search-results show">
                {results.map(r => (
                  <div key={r.id} onClick={() => highlightCard(r.id)}
                    style={{ padding: '10px 12px', borderRadius: 8, cursor: 'pointer', fontSize: 13, transition: 'background 0.15s', display: 'flex', alignItems: 'center', gap: 10 }}
                    onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.background = 'var(--surface)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.background = 'transparent')}>
                    <span style={{ fontSize: 18, width: 28, textAlign: 'center' }}>{r.emoji}</span>
                    <div>
                      <div style={{ fontWeight: 500, marginBottom: 2 }}>{r.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--muted)' }}>{r.cuisine} · {r.district} · {r.priceLevel}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Dark mode toggle */}
          <button onClick={toggleDark}
            style={{ background: 'none', border: '0.5px solid var(--border)', borderRadius: 20, cursor: 'pointer', padding: '5px 10px', fontSize: 12, color: 'var(--muted)', fontFamily: 'inherit', transition: 'all 0.2s' }}>
            {isDark ? '☀️ 亮色' : '🌙 暗色'}
          </button>

          {/* Write button */}
          <button style={{ fontSize: 13, color: '#fff', padding: '6px 16px', borderRadius: 20, background: 'var(--brand)', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500 }}>
            ✏️ 寫食記
          </button>

          {/* Hamburger */}
          <button className="flex md:hidden" onClick={() => setDrawerOpen(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink)', padding: 4 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className={`drawer ${drawerOpen ? 'open' : ''}`} style={{ position: 'fixed', inset: 0, zIndex: 300 }}>
          <div onClick={() => setDrawerOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
          <div className="drawer-panel" style={{ position: 'absolute', top: 0, right: 0, height: '100%', width: 240, background: 'var(--card)', padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <button onClick={() => setDrawerOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, color: 'var(--muted)', alignSelf: 'flex-end' }}>✕</button>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} onClick={() => setDrawerOpen(false)}
                    style={{ display: 'block', padding: 10, fontSize: 15, color: 'var(--ink)', textDecoration: 'none', borderRadius: 8 }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
