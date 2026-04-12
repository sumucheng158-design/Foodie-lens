# 食光筆記 · Foodie Lens

> 每一餐都值得被好好記錄。台灣美食評論平台，提供味覺雷達圖、點餐紅綠燈、情境標籤，讓你找到最適合的餐廳。

![Foodie Lens](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)

---

## ✨ 功能特色

| 功能 | 說明 |
|------|------|
| **Hero Section** | 滿版美食大圖背景，疊加標題、星評與 CTA 按鈕 |
| **交錯式食記排版** | 左圖右文 / 右圖左文，強調餐廳氛圍 |
| **味覺雷達圖** | 視覺化呈現鹹、甜、酸、辣、鮮、CP 值六大指標 |
| **點餐紅綠燈** | 快速標註「必點」、「普通」、「避雷」菜色 |
| **情境標籤** | 互動式篩選，如 `#適合約會`、`#深夜食堂` 等 |
| **RWD 響應式** | 完整支援手機、平板、桌機 |

---

## 🚀 快速開始

### 環境需求

- Node.js 18.17 以上
- npm / yarn / pnpm

### 安裝與啟動

```bash
# 1. Clone 專案
git clone https://github.com/your-username/foodie-lens.git
cd foodie-lens

# 2. 安裝相依套件
npm install

# 3. 啟動開發伺服器
npm run dev
```

開啟瀏覽器前往 [http://localhost:3000](http://localhost:3000)

### 建置 Production

```bash
npm run build
npm run start
```

---

## 📁 專案結構

```
foodie-lens/
├── app/
│   ├── globals.css        # 全域樣式與 CSS 變數
│   ├── layout.tsx         # Root layout（字型、metadata）
│   └── page.tsx           # 首頁，組合所有 Section
├── components/
│   ├── LogoIcon.tsx        # 品牌 Logo SVG 元件
│   ├── Navbar.tsx          # 透明導覽列（sticky）
│   ├── HeroSection.tsx     # 滿版 Hero Section
│   ├── RestaurantGrid.tsx  # 餐廳卡片格狀排列
│   ├── FeaturedReviews.tsx # 精選食記（交錯排版）
│   ├── FlavorProfileSection.tsx  # 味覺雷達圖（Recharts）
│   ├── TrafficLight.tsx    # 點餐紅綠燈
│   ├── ContextTags.tsx     # 情境標籤（互動篩選）
│   └── Footer.tsx          # 頁尾
├── lib/
│   └── data.ts             # 資料型別定義與 Mock 資料
├── public/                 # 靜態資源（圖片等）
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 品牌設計

### Logo 設計理念

Logo 採用「**光圈即鏡頭即記錄**」的核心概念：

- **光圈葉片**（六葉形）→ 象徵用眼睛品味、用鏡頭記錄的 Foodie Lens 精神
- **金色餐叉**（右上角）→ 直接呼應美食主題
- **深紅主色 `#C0392B`** + **金色輔色 `#D4A017`** → 高質感、食欲感兼具

### 設計 Token

```css
--brand:       #C0392B   /* 主色：深紅 */
--brand-dark:  #922B21   /* 深色變體 */
--gold:        #D4A017   /* 輔色：金 */
--ink:         #1a1008   /* 文字主色 */
--muted:       #7a6a5a   /* 輔助文字 */
--surface:     #faf8f4   /* 背景暖白 */
```

---

## 🛠 技術棧

- **框架**：[Next.js 14](https://nextjs.org/) (App Router)
- **樣式**：[Tailwind CSS v3](https://tailwindcss.com/)
- **圖表**：[Recharts](https://recharts.org/)
- **語言**：TypeScript
- **字型**：Noto Sans TC + Noto Serif TC（Google Fonts）

---

## 📦 部署到 Vercel

最簡單的部署方式：

1. 將專案 Push 至 GitHub
2. 前往 [vercel.com](https://vercel.com) 並連結 GitHub 倉庫
3. Vercel 會自動偵測 Next.js 並完成部署

或使用 Vercel CLI：

```bash
npm i -g vercel
vercel
```

---

## 🗺 Roadmap

- [ ] 串接真實 API（Supabase / PostgreSQL）
- [ ] 餐廳地圖頁面（Google Maps API）
- [ ] 用戶登入與食記發布功能
- [ ] 全站搜尋功能
- [ ] 深色模式

---

## 📄 授權

MIT License · 歡迎 Fork 與貢獻
