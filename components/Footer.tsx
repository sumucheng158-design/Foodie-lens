import { LogoIcon } from './LogoIcon'

export function Footer() {
  return (
    <footer className="px-6 md:px-14 py-10" style={{ background: '#1a1008', color: 'rgba(255,255,255,0.5)' }}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <LogoIcon size={28} />
          <div>
            <p className="text-[15px] font-medium text-white leading-tight">食光筆記</p>
            <p className="text-[11px]">Foodie Lens</p>
          </div>
        </div>

        <p className="text-[12px] leading-relaxed">
          每一餐都值得被好好記錄<br />
          © {new Date().getFullYear()} 食光筆記 · 保留所有權利
        </p>
      </div>
    </footer>
  )
}
