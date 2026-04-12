'use client'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import type { FlavorProfile } from '@/lib/data'

interface FlavorProfileSectionProps {
  restaurantName: string
  data: FlavorProfile[]
}

export function FlavorProfileSection({ restaurantName, data }: FlavorProfileSectionProps) {
  return (
    <section className="px-6 md:px-14 py-14 bg-white">
      <p className="text-[11px] uppercase tracking-[2px] font-medium mb-1" style={{ color: 'var(--brand)' }}>
        Flavor Profile
      </p>
      <h2 className="text-[22px] font-medium mb-1">味覺雷達圖</h2>
      <p className="text-[14px] text-stone-500 mb-10">一眼看懂這間餐廳的味覺個性</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-2xl mx-auto">
        {/* Radar */}
        <div className="w-full max-w-[280px] mx-auto">
          <ResponsiveContainer width="100%" height={260}>
            <RadarChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
              <PolarGrid stroke="rgba(0,0,0,0.08)" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fontSize: 13, fontFamily: 'inherit', fill: '#7a6a5a' }}
              />
              <Radar
                name={restaurantName}
                dataKey="value"
                stroke="#C0392B"
                fill="#C0392B"
                fillOpacity={0.18}
                dot={{ r: 4, fill: '#C0392B', strokeWidth: 0 }}
              />
              <Tooltip
                formatter={(val: number) => [val.toFixed(1), '評分']}
                contentStyle={{
                  fontSize: 13,
                  borderRadius: 8,
                  border: '0.5px solid rgba(0,0,0,0.1)',
                  boxShadow: 'none',
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Bar list */}
        <div>
          <h3 className="text-[17px] font-medium mb-1">{restaurantName}｜風味解析</h3>
          <p className="text-[13px] text-stone-500 mb-5 leading-relaxed">
            依據近 120 篇食記評分加權計算，呈現最客觀的風味輪廓。
          </p>

          <div className="space-y-3">
            {data.map(({ subject, value, color }) => (
              <div key={subject} className="flex items-center gap-3">
                <span className="text-[13px] w-10">{subject}</span>
                <div
                  className="flex-1 rounded-full overflow-hidden"
                  style={{ height: 6, background: 'rgba(0,0,0,0.07)' }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${value * 10}%`, background: color }}
                  />
                </div>
                <span className="text-[12px] text-stone-400 w-7 text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
