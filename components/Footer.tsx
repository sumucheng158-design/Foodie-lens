'use client'
import { useState } from 'react'

function LogoMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="17" cy="17" r="16" stroke="#B5341A" strokeWidth="1.2" />
      <circle cx="17" cy="17" r="10" stroke="#B5341A" strokeWidth="0.7" strokeDasharray="3 4" />
      <circle cx="17" cy="17" r="4" fill="#C9961A" />
    </svg>
  )
}

const FOOTER_LINKS = [
  { heading: '探索', links: ['最新食記', '熱門排行', '地圖找餐廳'] },
  { heading: '關於', links: ['寫食記', '評分標準', '聯絡我們'] },
]

const SOCIALS = ['IG', 'FB', 'YT']

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe() {
    if (!email.includes('@')) return
    setSubscribed(true)
  }

  return (
    <footer style={{ background: '#120a04', color: 'rgba(255,255,255,0.5)', padding: 'clamp(32px,5vw,64px) clamp(16px,5vw,64px)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

        {/* Top */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <LogoMark />
            <div>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#fff', fontFamily: 'var(--font-noto-serif)', lineHeight: 1.2 }}>食光筆記</p>
              <p style={{ fontSize: 11, marginTop: 2 }}>Foodie Lens</p>
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {FOOTER_LINKS.map(({ heading, links }) => (
              <div key={heading}>
                <h4 style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 12 }}>{heading}</h4>
                {links.map(link => (
                  <a key={link} href="#" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: 8, transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                    {link}
                  </a>
                ))}
              </div>
            ))}

            {/* Subscribe */}
            <div>
              <h4 style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 12 }}>訂閱電子報</h4>
              {subscribed ? (
                <p style={{ fontSize: 13, color: '#4ade80' }}>✅ 訂閱成功！感謝你</p>
              ) : (
                <div style={{ display: 'flex', gap: 8 }}>
                  <input
                    type="email"
                    placeholder="你的 Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{ flex: 1, background: 'rgba(255,255,255,0.07)', border: '0.5px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: '9px 14px', fontSize: 13, color: '#fff', fontFamily: 'inherit', outline: 'none' }}
                  />
                  <button
                    onClick={handleSubscribe}
                    style={{ background: 'var(--brand)', border: 'none', borderRadius: 8, padding: '9px 16px', fontSize: 13, color: '#fff', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}
                  >
                    訂閱
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, paddingTop: 24, borderTop: '0.5px solid rgba(255,255,255,0.08)' }}>
          <p style={{ fontSize: 12 }}>每一餐都值得被好好記錄 · © {new Date().getFullYear()} 食光筆記</p>
          <div style={{ display: 'flex', gap: 12 }}>
            {SOCIALS.map(s => (
              <a key={s} href="#"
                style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.07)', border: '0.5px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'var(--brand)'; el.style.color = '#fff' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'rgba(255,255,255,0.07)'; el.style.color = 'rgba(255,255,255,0.5)' }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
