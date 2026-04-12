// ── Types ──────────────────────────────────────────────

export type FlavorProfile = {
  subject: string
  value: number
  color: string
}

export type DishItem = {
  name: string
  emoji: string
}

export type TrafficLightData = {
  must: DishItem[]
  ok: DishItem[]
  avoid: DishItem[]
}

export type Restaurant = {
  id: string
  name: string
  cuisine: string
  district: string
  priceLevel: '$' | '$$' | '$$$' | '$$$$'
  rating: number
  emoji: string
  bgClass: string
  tags: string[]
  flavorProfile: FlavorProfile[]
  trafficLight: TrafficLightData
}

export type FeaturedReview = {
  id: string
  restaurantName: string
  title: string
  excerpt: string
  rating: number
  category: string
  emoji: string
  bgClass: string
  reverse?: boolean
}

// ── Mock Data ───────────────────────────────────────────

export const FEATURED_REVIEWS: FeaturedReview[] = [
  {
    id: 'sushi-01',
    restaurantName: '銀座 壽',
    title: '職人握壽司：在反覆練習中達到的完美一口',
    excerpt:
      '師傅在吧台前靜靜捏著醋飯，每一貫的米粒緊密度都像是計算過。鮪魚大腹油脂在口中化開的瞬間，讓人忘記這裡在市中心還是某個海港小鎮——這就是所謂「不需要任何醬料的壽司」。',
    rating: 4.9,
    category: '主廚特輯',
    emoji: '🍣',
    bgClass: 'from-stone-900 to-amber-900',
  },
  {
    id: 'pasta-01',
    restaurantName: 'Osteria Nascosta',
    title: '藏在老公寓裡的義式小館，沒有招牌卻場場客滿',
    excerpt:
      '沒有 Instagram 打卡牆，沒有英文菜單，只有一扇磨砂玻璃門。推開之後是老闆從義大利帶回的橄欖油香氣、還有三十個座位組成的喧鬧溫度，每一張桌子都有說不完的故事。',
    rating: 4.4,
    category: '環境特輯',
    emoji: '🍝',
    bgClass: 'from-green-950 to-emerald-800',
    reverse: true,
  },
]

export const RESTAURANTS: Restaurant[] = [
  {
    id: 'ichimen',
    name: '一麵堂',
    cuisine: '日式拉麵',
    district: '大安區',
    priceLevel: '$$',
    rating: 4.8,
    emoji: '🍜',
    bgClass: 'from-stone-900 to-amber-800',
    tags: ['#適合獨食', '#現撈海鮮', '#吧台座位'],
    flavorProfile: [
      { subject: '鹹', value: 8.8, color: '#C0392B' },
      { subject: '甜', value: 4.2, color: '#D4A017' },
      { subject: '酸', value: 3.0, color: '#2980B9' },
      { subject: '辣', value: 6.5, color: '#E74C3C' },
      { subject: '鮮', value: 9.2, color: '#27AE60' },
      { subject: 'CP值', value: 7.8, color: '#8E44AD' },
    ],
    trafficLight: {
      must: [
        { name: '黑松露牛肉麵', emoji: '🍜' },
        { name: '煎餃（限量）', emoji: '🥟' },
        { name: '手工布丁', emoji: '🍮' },
      ],
      ok: [
        { name: '季節沙拉', emoji: '🥗' },
        { name: '自製檸檬水', emoji: '🥤' },
        { name: '白飯（附湯）', emoji: '🍚' },
      ],
      avoid: [
        { name: '招牌便當組', emoji: '🍱' },
        { name: '套餐飲料', emoji: '🧃' },
        { name: '提拉米蘇', emoji: '🍰' },
      ],
    },
  },
  {
    id: 'ryokuya',
    name: '綠野燒肉',
    cuisine: '韓式燒烤',
    district: '中山區',
    priceLevel: '$$$',
    rating: 4.6,
    emoji: '🥩',
    bgClass: 'from-green-950 to-green-800',
    tags: ['#適合聚餐', '#朋友聚會', '#週末限定'],
    flavorProfile: [
      { subject: '鹹', value: 7.5, color: '#C0392B' },
      { subject: '甜', value: 5.8, color: '#D4A017' },
      { subject: '酸', value: 2.5, color: '#2980B9' },
      { subject: '辣', value: 8.0, color: '#E74C3C' },
      { subject: '鮮', value: 8.5, color: '#27AE60' },
      { subject: 'CP值', value: 6.5, color: '#8E44AD' },
    ],
    trafficLight: {
      must: [
        { name: '牛五花厚切', emoji: '🥩' },
        { name: '石鍋拌飯', emoji: '🍚' },
        { name: '韓式泡菜', emoji: '🥬' },
      ],
      ok: [
        { name: '豬頸肉', emoji: '🥓' },
        { name: '玉米起司', emoji: '🌽' },
        { name: '冷麵', emoji: '🍜' },
      ],
      avoid: [
        { name: '綜合生魚片', emoji: '🐟' },
        { name: '套餐甜點', emoji: '🍡' },
        { name: '罐裝飲料', emoji: '🥤' },
      ],
    },
  },
]

export const CONTEXT_TAGS = [
  '#適合約會', '#不限時', '#深夜食堂', '#帶長輩吃',
  '#商務宴客', '#獨食友善', '#網美打卡', '#懷舊老店',
  '#隱藏版小店', '#週末限定', '#朋友聚會', '#生日慶祝',
  '#素食可選', '#寵物友善', '#開架停車', '#平日午餐',
  '#下午茶', '#宵夜首選',
]
