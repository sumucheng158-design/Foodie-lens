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
  gradientStyle: string
  tags: string[]
  filterTag: string
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
  gradientStyle: string
  reverse?: boolean
}

// ── Mock Data ───────────────────────────────────────────

export const FEATURED_REVIEWS: FeaturedReview[] = [
  {
    id: 'sushi-01',
    restaurantName: '銀座 壽',
    title: '職人握壽司：在反覆練習中達到的完美一口',
    excerpt:
      '師傅在吧台前靜靜捏著醋飯，每一貫的米粒緊密度都像是計算過。鮪魚大腹油脂在口中化開的瞬間，讓人忘記這裡在市中心還是某個海港小鎮。',
    rating: 4.9,
    category: '主廚特輯',
    emoji: '🍣',
    gradientStyle: 'linear-gradient(135deg,#0a0a14,#2a2a5a)',
  },
  {
    id: 'pasta-01',
    restaurantName: 'Osteria Nascosta',
    title: '藏在老公寓裡的義式小館，沒有招牌卻場場客滿',
    excerpt:
      '沒有 Instagram 打卡牆，沒有英文菜單，只有一扇磨砂玻璃門。推開之後是老闆從義大利帶回的橄欖油香氣、還有三十個座位組成的喧鬧溫度。',
    rating: 4.4,
    category: '環境特輯',
    emoji: '🍝',
    gradientStyle: 'linear-gradient(135deg,#050f02,#1a3d0a)',
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
    gradientStyle: 'linear-gradient(135deg,#1a0a04,#8B3A1A)',
    filterTag: '拉麵',
    tags: ['#適合獨食', '#現撈海鮮', '#吧台座位'],
    flavorProfile: [
      { subject: '鹹', value: 8.8, color: '#B5341A' },
      { subject: '甜', value: 4.2, color: '#C9961A' },
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
    gradientStyle: 'linear-gradient(135deg,#052105,#1a5c1a)',
    filterTag: '燒烤',
    tags: ['#適合聚餐', '#朋友聚會', '#週末限定'],
    flavorProfile: [
      { subject: '鹹', value: 7.5, color: '#B5341A' },
      { subject: '甜', value: 5.8, color: '#C9961A' },
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
  {
    id: 'ginza',
    name: '銀座 壽',
    cuisine: '職人壽司',
    district: '信義區',
    priceLevel: '$$$$',
    rating: 4.9,
    emoji: '🍣',
    gradientStyle: 'linear-gradient(135deg,#0a0a14,#2a2a5a)',
    filterTag: '壽司',
    tags: ['#適合約會', '#主廚推薦', '#需要預約'],
    flavorProfile: [
      { subject: '鹹', value: 6.0, color: '#B5341A' },
      { subject: '甜', value: 7.5, color: '#C9961A' },
      { subject: '酸', value: 8.2, color: '#2980B9' },
      { subject: '辣', value: 1.0, color: '#E74C3C' },
      { subject: '鮮', value: 9.8, color: '#27AE60' },
      { subject: 'CP值', value: 5.5, color: '#8E44AD' },
    ],
    trafficLight: {
      must: [
        { name: '主廚握壽司套餐', emoji: '🍣' },
        { name: '鮪魚大腹', emoji: '🐟' },
        { name: '甜蝦', emoji: '🦐' },
      ],
      ok: [
        { name: '玉子燒', emoji: '🥚' },
        { name: '味噌湯', emoji: '🍵' },
        { name: '漬物', emoji: '🥒' },
      ],
      avoid: [
        { name: '外加熟食', emoji: '🍳' },
        { name: '瓶裝清酒', emoji: '🍶' },
        { name: '甜點', emoji: '🍡' },
      ],
    },
  },
  {
    id: 'osteria',
    name: 'Osteria Nascosta',
    cuisine: '義式料理',
    district: '松山區',
    priceLevel: '$$$',
    rating: 4.4,
    emoji: '🍝',
    gradientStyle: 'linear-gradient(135deg,#050f02,#1a3d0a)',
    filterTag: '義式',
    tags: ['#隱藏版小店', '#場場客滿', '#商務宴客'],
    flavorProfile: [
      { subject: '鹹', value: 6.8, color: '#B5341A' },
      { subject: '甜', value: 3.5, color: '#C9961A' },
      { subject: '酸', value: 7.0, color: '#2980B9' },
      { subject: '辣', value: 4.2, color: '#E74C3C' },
      { subject: '鮮', value: 7.8, color: '#27AE60' },
      { subject: 'CP值', value: 7.2, color: '#8E44AD' },
    ],
    trafficLight: {
      must: [
        { name: '自製義大利麵', emoji: '🍝' },
        { name: '松露燉飯', emoji: '🍚' },
        { name: '提拉米蘇', emoji: '🍮' },
      ],
      ok: [
        { name: '凱撒沙拉', emoji: '🥗' },
        { name: '番茄濃湯', emoji: '🍅' },
        { name: '麵包籃', emoji: '🍞' },
      ],
      avoid: [
        { name: '龍蝦套餐', emoji: '🦞' },
        { name: '酒水', emoji: '🍷' },
        { name: '外帶餐盒', emoji: '📦' },
      ],
    },
  },
]

export const CONTEXT_TAGS = [
  { tag: '#適合約會', key: '約會' },
  { tag: '#不限時', key: '不限時' },
  { tag: '#深夜食堂', key: '深夜' },
  { tag: '#帶長輩吃', key: '長輩' },
  { tag: '#商務宴客', key: '商務' },
  { tag: '#獨食友善', key: '獨食' },
  { tag: '#網美打卡', key: '網美' },
  { tag: '#懷舊老店', key: '懷舊' },
  { tag: '#隱藏版小店', key: '隱藏' },
  { tag: '#週末限定', key: '週末' },
  { tag: '#朋友聚會', key: '聚會' },
  { tag: '#生日慶祝', key: '生日' },
  { tag: '#素食可選', key: '素食' },
  { tag: '#寵物友善', key: '寵物' },
  { tag: '#開架停車', key: '停車' },
  { tag: '#平日午餐', key: '午餐' },
  { tag: '#下午茶', key: '下午茶' },
  { tag: '#宵夜首選', key: '宵夜' },
]
