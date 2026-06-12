import VideoBackground from './components/VideoBackground'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FogReveal from './components/FogReveal'

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      <FogReveal />
      <VideoBackground />
      <Navbar />
      <HeroSection />
    </div>
  )
}
