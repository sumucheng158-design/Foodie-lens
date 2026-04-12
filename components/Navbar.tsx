'use client'
import Link from 'next/link'
import { LogoIcon } from './LogoIcon'

const NAV_LINKS = [
  { href: '#reviews', label: '食記' },
  { href: '#map', label: '地圖找餐廳' },
  { href: '#ranking', label: '排行榜' },
  { href: '#about', label: '關於' },
]

export function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 h-14"
      style={{
        background: 'rgba(250,248,244,0.88)',
        backdropFilter: 'blur(12px)',
        borderBottom: '0.5px solid rgba(0,0,0,0.08)',
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 no-underline group">
        <LogoIcon size={32} className="transition-transform group-hover:scale-105" />
        <span className="text-[17px] font-medium tracking-tight text-stone-900">
          食光<span style={{ color: 'var(--brand)' }}>筆記</span>
        </span>
      </Link>

      {/* Links — hidden on mobile */}
      <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-[14px] text-stone-500 no-underline hover:text-stone-900 transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className="text-[13px] text-white px-4 py-1.5 rounded-full font-medium transition-all hover:opacity-90 active:scale-95"
        style={{ background: 'var(--brand)' }}
      >
        寫食記
      </button>
    </nav>
  )
}
