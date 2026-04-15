'use client'
import { useEffect, useRef } from 'react'
import type { Restaurant } from '@/lib/data'

interface RestaurantModalProps {
  restaurant: Restaurant
  onClose: () => void
}

const TIER_CONFIG = {
  must:  { label: '必點', dot: '#4ade80', bg: '#052205' },
  ok:    { label: '普通', dot: '#facc15', bg: '#1f1400' },
  avoid: { label: '避雷', dot: '#f87171', bg: '#1f0505' },
}

export function RestaurantModal({ restaurant, onClose }: RestaurantModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const chartRef = useRef<unknown>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    // Dynamically load Chart.js and render radar
    async function renderRadar() {
      if (!canvasRef.current) return
      // @ts-ignore
      const { Chart, RadarController, LineElement, PointElement, RadialLinearScale, Filler, Tooltip } = await import('chart.js')
      Chart.register(RadarController, LineElement, PointElement, RadialLinearScale, Filler, Tooltip)

      const isDark = document.documentElement.classList.contains('dark')
      const tc = isDark ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.55)'
      const gc = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'

      // @ts-ignore
      chartRef.current = new Chart(canvasRef.current, {
        type: 'radar',
        data: {
          labels: restaurant.flavorProfile.map(f => f.subject),
          datasets: [{
            data: restaurant.flavorProfile.map(f => f.value),
            backgroundColor: 'rgba(181,52,26,0.18)',
            borderColor: '#B5341A',
            borderWidth: 1.5,
            pointBackgroundColor: '#B5341A',
            pointRadius: 3,
          }],
        },
        options: {
          scales: {
            r: {
              min: 0, max: 10,
              ticks: { stepSize: 2, font: { size: 10 }, color: gc, backdropColor: 'transparent' },
              grid: { color: gc },
              pointLabels: { font: { size: 11, family: 'inherit' }, color: tc },
              angleLines: { color: gc },
            },
          },
          plugins: { legend: { display: false } },
          animation: { duration: 600 },
        },
      })
    }

    renderRadar()

    return () => {
      document.body.style.overflow = ''
      // @ts-ignore
      if (chartRef.current) chartRef.current.destroy()
    }
  }, [restaurant])

  function handleBgClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      onClick={handleBgClick}
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(4px)',
        zIndex: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <div
        style={{
          background: 'var(--card)',
          borderRadius: 20,
          maxWidth: 600,
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        {/* Close */}
        <div style={{ position: 'sticky', top: 0, zIndex: 2, display: 'flex', justifyContent: 'flex-end', padding: '16px 16px 0', background: 'var(--card)' }}>
          <button
            onClick={onClose}
            style={{ background: 'var(--surface)', border: '0.5px solid var(--border)', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', fontSize: 16, color: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            ✕
          </button>
        </div>

        {/* Hero */}
        <div
          style={{ height: 180, background: restaurant.gradientStyle, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80, margin: '0 24px 20px', borderRadius: 12 }}
        >
          {restaurant.emoji}
        </div>

        {/* Header */}
        <div style={{ padding: '0 24px 16px' }}>
          <h2 style={{ fontFamily: 'var(--font-noto-serif)', fontSize: 22, fontWeight: 500, marginBottom: 4 }}>{restaurant.name}</h2>
          <p style={{ fontSize: 13, color: 'var(--muted)' }}>{restaurant.cuisine} · {restaurant.district} · {restaurant.priceLevel} · ⭐ {restaurant.rating}</p>
        </div>

        {/* Radar */}
        <div style={{ padding: '16px 24px', borderTop: '0.5px solid var(--border)' }}>
          <p style={{ fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--brand)', marginBottom: 14, fontWeight: 500 }}>味覺雷達圖</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <canvas ref={canvasRef} width={240} height={240} />
          </div>
        </div>

        {/* Traffic Light */}
        <div style={{ padding: '16px 24px', borderTop: '0.5px solid var(--border)' }}>
          <p style={{ fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--brand)', marginBottom: 14, fontWeight: 500 }}>點餐紅綠燈</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {(['must', 'ok', 'avoid'] as const).map(tier => {
              const cfg = TIER_CONFIG[tier]
              return (
                <div key={tier} style={{ borderRadius: 10, overflow: 'hidden', border: '0.5px solid var(--border)' }}>
                  <div style={{ background: cfg.bg, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: cfg.dot, display: 'inline-block' }} />
                    <span style={{ fontSize: 12, color: cfg.dot }}>{cfg.label}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: '10px 14px' }}>
                    {restaurant.trafficLight[tier].map(d => (
                      <span key={d.name} style={{ background: 'var(--surface)', border: '0.5px solid var(--border)', borderRadius: 8, padding: '5px 10px', fontSize: 12 }}>
                        {d.emoji} {d.name}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
