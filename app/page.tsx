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
  // Use first restaurant's traffic light as the demo section
  const featured = RESTAURANTS[0]

  return (
    <main>
      <Navbar />
      <HeroSection />
      <RestaurantGrid restaurants={RESTAURANTS} />
      <FeaturedReviews reviews={FEATURED_REVIEWS} />
      <FlavorProfileSection restaurants={RESTAURANTS} />
      <TrafficLight data={featured.trafficLight} />
      <ContextTags />
      <Footer />
    </main>
  )
}
