import type { TrafficLightData, DishItem } from '@/lib/data'

type Tier = 'must' | 'ok' | 'avoid'

const TIER_CONFIG: Record<
  Tier,
  { label: string; dotClass: string; headBg: string; headText: string }
> = {
  must: {
    label: '必點',
    dotClass: 'bg-green-400',
    headBg: 'bg-green-950',
    headText: 'text-green-400',
  },
  ok: {
    label: '普通',
    dotClass: 'bg-yellow-400',
    headBg: 'bg-yellow-950',
    headText: 'text-yellow-300',
  },
  avoid: {
    label: '避雷',
    dotClass: 'bg-red-400',
    headBg: 'bg-red-950',
    headText: 'text-red-400',
  },
}

function DishList({ items }: { items: DishItem[] }) {
  return (
    <div className="p-3 flex flex-col gap-2">
      {items.map((d) => (
        <div
          key={d.name}
          className="tl-item flex items-center gap-2 text-[13px] bg-white rounded-lg px-3 py-2"
          style={{ border: '0.5px solid var(--border)' }}
        >
          <span className="text-base" aria-hidden="true">{d.emoji}</span>
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
    <section className="px-6 md:px-14 py-14" style={{ background: 'var(--surface)' }}>
      <p className="text-[11px] uppercase tracking-[2px] font-medium mb-1" style={{ color: 'var(--brand)' }}>
        點餐紅綠燈
      </p>
      <h2 className="text-[22px] font-medium mb-1">必點 / 普通 / 避雷</h2>
      <p className="text-[14px] text-stone-500 mb-8">
        編輯實際點餐後的老實評分，幫你省下踩雷的錢
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {tiers.map((tier) => {
          const { label, dotClass, headBg, headText } = TIER_CONFIG[tier]
          return (
            <div
              key={tier}
              className="rounded-2xl overflow-hidden"
              style={{ border: '0.5px solid var(--border)' }}
            >
              <div className={`flex items-center gap-2.5 px-4 py-3 ${headBg}`}>
                <span className={`w-2.5 h-2.5 rounded-full ${dotClass}`} aria-hidden="true" />
                <span className={`text-[13px] font-medium ${headText}`}>{label}</span>
              </div>
              <DishList items={data[tier]} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
