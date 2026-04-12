import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { RestaurantGrid } from '@/components/RestaurantGrid'
import { FeaturedReviews } from '@/components/FeaturedReviews'
import { FlavorProfileSection } from '@/components/FlavorProfileSection'
import { TrafficLight } from '@/components/TrafficLight'
import { ContextTags } from '@/components/ContextTags'
import { Footer } from '@/components/Footer'
import { RESTAURANTS, FEATURED_REVIEWS } from '@/lib/data'

export default function HomePage() {
  const featured = RESTAURANTS[0] // 一麵堂 作為 Demo

  return (
    <main>
      <Navbar />
      <HeroSection />
      <RestaurantGrid restaurants={RESTAURANTS} />
      <FeaturedReviews reviews={FEATURED_REVIEWS} />
      <FlavorProfileSection
        restaurantName={featured.name}
        data={featured.flavorProfile}
      />
      <TrafficLight data={featured.trafficLight} />
      <ContextTags />
      <Footer />
    </main>
  )
}
