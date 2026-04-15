import type { TrafficLightData, DishItem } from '@/lib/data'

type Tier = 'must' | 'ok' | 'avoid'

const TIER_CONFIG: Record<Tier, { label: string; dot: string; headBg: string }> = {
  must:  { label: '必點', dot: '#4ade80', headBg: '#052205' },
  ok:    { label: '普通', dot: '#facc15', headBg: '#1f1400' },
  avoid: { label: '避雷', dot: '#f87171', headBg: '#1f0505' },
}

function DishList({ items }: { items: DishItem[] }) {
  return (
    <div style={{ padding: 10 }}>
      {items.map(d => (
        <div
          key={d.name}
          className="tl-item"
          style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, borderRadius: 10, padding: '9px 12px', marginBottom: 7, cursor: 'default' }}
        >
          <span style={{ fontSize: 16, width: 20, textAlign: 'center' }} aria-hidden="true">{d.emoji}</span>
          <span>{d.name}</span>
        </div>
      ))}
    </div>
  )
}

interface TrafficLightProps {
  data: TrafficLightData
}

export function TrafficLight({ data }: TrafficLightProps) {
  const tiers: Tier[] = ['must', 'ok', 'avoid']

  return (
    <section
      id="trafficlight"
      style={{ padding: 'clamp(48px,7vw,96px) clamp(16px,5vw,64px)', background: 'var(--surface)' }}
    >
      <p style={{ fontSize: 11, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 500, marginBottom: 6 }}>點餐紅綠燈</p>
      <h2 style={{ fontFamily: 'var(--font-noto-serif)', fontSize: 'clamp(20px,3vw,28px)', fontWeight: 500, marginBottom: 6 }}>必點 / 普通 / 避雷</h2>
      <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 'clamp(28px,4vw,48px)' }}>編輯實際點餐後的老實評分，幫你省下踩雷的錢</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16, maxWidth: 800, margin: '0 auto' }}>
        {tiers.map(tier => {
          const { label, dot, headBg } = TIER_CONFIG[tier]
          return (
            <div key={tier} style={{ borderRadius: 14, overflow: 'hidden', border: '0.5px solid var(--border)' }}>
              <div style={{ background: headBg, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: dot, display: 'inline-block' }} aria-hidden="true" />
                <span style={{ fontSize: 13, fontWeight: 500, color: dot }}>{label}</span>
              </div>
              <DishList items={data[tier]} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
