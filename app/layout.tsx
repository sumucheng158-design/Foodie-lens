import type { Metadata } from 'next'
import { Noto_Sans_TC, Noto_Serif_TC } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-noto-sans',
  display: 'swap',
})

const notoSerif = Noto_Serif_TC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '食光筆記 · Foodie Lens',
  description: '每一餐都值得被好好記錄。台灣美食評論平台，提供味覺雷達圖、點餐紅綠燈、情境標籤，讓你找到最適合的餐廳。',
  keywords: '美食評論, 台灣餐廳, 食記, 美食地圖',
  openGraph: {
    title: '食光筆記 · Foodie Lens',
    description: '每一餐都值得被好好記錄',
    type: 'website',
    locale: 'zh_TW',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW" className={`${notoSans.variable} ${notoSerif.variable}`} suppressHydrationWarning>
      <head>
        {/* Inject dark mode class before paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('theme')==='dark'||(!localStorage.getItem('theme')&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
