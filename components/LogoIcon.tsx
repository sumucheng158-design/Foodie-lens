interface LogoIconProps {
  size?: number
  className?: string
}

export function LogoIcon({ size = 32, className }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="食光筆記 Logo"
    >
      {/* 光圈外環 */}
      <circle cx="16" cy="16" r="13" stroke="#C0392B" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="9" stroke="#C0392B" strokeWidth="0.8" strokeDasharray="2.5 2.5" />

      {/* 光圈葉片 × 6 */}
      <path d="M16 7 Q20 12 16 16 Q12 12 16 7Z" fill="#C0392B" opacity="0.9" />
      <path d="M23.5 10.5 Q21 15.5 16 16 Q16.5 10.5 23.5 10.5Z" fill="#C0392B" opacity="0.75" />
      <path d="M23.5 21.5 Q18.5 19 16 16 Q21.5 15.5 23.5 21.5Z" fill="#C0392B" opacity="0.6" />
      <path d="M16 25 Q12 20 16 16 Q20 20 16 25Z" fill="#C0392B" opacity="0.9" />
      <path d="M8.5 21.5 Q11 16.5 16 16 Q15.5 21.5 8.5 21.5Z" fill="#C0392B" opacity="0.75" />
      <path d="M8.5 10.5 Q13.5 13 16 16 Q10.5 16.5 8.5 10.5Z" fill="#C0392B" opacity="0.6" />

      {/* 中心點 */}
      <circle cx="16" cy="16" r="2.5" fill="#C0392B" />

      {/* 右上角 — 金色餐叉裝飾 */}
      <line x1="26" y1="4.5" x2="26" y2="9.5" stroke="#D4A017" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="24.5" y1="4.5" x2="24.5" y2="7.5" stroke="#D4A017" strokeWidth="1" strokeLinecap="round" />
      <line x1="27.5" y1="4.5" x2="27.5" y2="7.5" stroke="#D4A017" strokeWidth="1" strokeLinecap="round" />
      <line x1="26" y1="9.5" x2="26" y2="13.5" stroke="#D4A017" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
