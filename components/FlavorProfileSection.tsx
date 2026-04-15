'use client'
import { useState, useEffect, useRef } from 'react'
import type { Restaurant } from '@/lib/data'

interface FlavorProfileSectionProps {
  restaurants: Restaurant[]
}

export function FlavorProfileSection({ restaurants }: FlavorProfileSectionProps) {
  const [activeId, setActiveId] = useState(restaurants[0]?.id ?? '')
  const [barsVisible, setBarsVisible] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const chartRef = useRef<unknown>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const active = restaurants.find(r => r.id === activeId) ?? restaurants[0]

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setBarsVisible(true); renderRadar() } },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (barsVisible) renderRadar()
  }, [activeId, barsVisible])

  async function renderRadar() {
    if (!canvasRef.current) return
    try {
      // @ts-ignore
      const { Chart, RadarController, LineElement, PointElement, RadialLinearScale, Filler, Tooltip } = await import('chart.js')
      Chart.register(RadarController, LineElement, PointElement, RadialLinearScale, Filler, Tooltip)
      // @ts-ignore
      if (chartRef.current) chartRef.current.destroy()

      const isDark = document.documentElement.classList.contains('dark')
      const tc = isDark ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.55)'
      const gc = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'

      const data = (restaurants.find(r => r.id === activeId) ?? restaurants[0]).flavorProfile

      // @ts-ignore
      chartRef.current = new Chart(canvasRef.current, {
        type: 'radar',
        data: {
          labels: data.map(f => f.subject),
          datasets: [{
            data: data.map(f => f.value),
            backgroundColor: 'rgba(181,52,26,0.18)',
            borderColor: '#B5341A',
            borderWidth: 2,
            pointBackgroundColor: '#B5341A',
            pointRadius: 4,
          }],
        },
        options: {
          scales: {
            r: {
              min: 0, max: 10,
              ticks: { stepSize: 2, font: { size: 11 }, color: gc, backdropColor: 'transparent' },
              grid: { color: gc },
              pointLabels: { font: { size: 13, family: 'inherit' }, color: tc },
              angleLines: { color: gc },
            },
          },
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: (i: { raw: number }) => `${i.raw.toFixed(1)} 分` } } },
          animation: { duration: 800 },
        },
      })
    } catch (err) {
      console.error('Chart.js load error', err)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="flavor"
      style={{ padding: 'clamp(48px,7vw,96px) clamp(16px,5vw,64px)', background: 'var(--card)' }}
    >
      <p style={{ fontSize: 11, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 500, marginBottom: 6 }}>Flavor Profile</p>
      <h2 style={{ fontFamily: 'var(--font-noto-serif)', fontSize: 'clamp(20px,3vw,28px)', fontWeight: 500, marginBottom: 6 }}>味覺雷達圖</h2>
      <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 24 }}>一眼看懂這間餐廳的味覺個性，支援多店比較</p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {restaurants.slice(0, 3).map(r => (
          <button
            key={r.id}
            onClick={() => setActiveId(r.id)}
            style={{
              background: activeId === r.id ? 'var(--brand)' : 'var(--surface)',
              border: '0.5px solid var(--border)',
              borderColor: activeId === r.id ? 'var(--brand)' : 'var(--border)',
              color: activeId === r.id ? '#fff' : 'var(--muted)',
              borderRadius: 20, padding: '6px 16px', fontSize: 13,
              cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s',
            }}
          >
            {r.name}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 'clamp(24px,5vw,60px)', alignItems: 'center', maxWidth: 760, margin: '0 auto' }}>
        {/* Radar */}
        <div style={{ maxWidth: 300, margin: '0 auto', width: '100%' }}>
          <canvas ref={canvasRef} width="300" height="300" />
        </div>

        {/* Bars */}
        <div>
          <h3 style={{ fontFamily: 'var(--font-noto-serif)', fontSize: 17, fontWeight: 500, marginBottom: 4 }}>{active.name}｜風味解析</h3>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 20, lineHeight: 1.7 }}>依據近 120 篇食記評分加權計算，呈現最客觀的風味輪廓。</p>
          {active.flavorProfile.map(({ subject, value, color }) => (
            <div key={subject} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <span style={{ fontSize: 13, minWidth: 36, color: 'var(--muted)' }}>{subject}</span>
              <div style={{ flex: 1, height: 6, background: 'var(--border)', borderRadius: 3, overflow: 'hidden' }}>
                <div
                  className="flavor-fill"
                  style={{ height: '100%', borderRadius: 3, background: color, width: barsVisible ? `${value * 10}%` : '0%' }}
                />
              </div>
              <span style={{ fontSize: 12, color: 'var(--muted)', minWidth: 28, textAlign: 'right' }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
