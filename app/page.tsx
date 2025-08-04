import Navigation from '@/components/Navigation'
import HomePageClient from '@/components/HomePageClient'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/10 to-transparent pointer-events-none" />
      <Navigation />
      <HomePageClient />
    </div>
  )
}
