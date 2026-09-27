import { useCallback, useEffect, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import Hero from './components/Hero'
import TheCall from './components/TheCall'
import Multiverse from './components/Multiverse'
import Timeline from './components/Timeline'
import Challenges from './components/Challenges'
import Countdown from './components/Countdown'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'
import GrainOverlay from './components/GrainOverlay'
import CustomCursor from './components/CustomCursor'
import AmbientGlow from './components/AmbientGlow'
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion'

export default function App() {
  const reduced = usePrefersReducedMotion()
  const [ready, setReady] = useState(false)
  const onComplete = useCallback(() => setReady(true), [])

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('hashchange', refresh)
    window.addEventListener('load', refresh)
    return () => {
      window.removeEventListener('hashchange', refresh)
      window.removeEventListener('load', refresh)
    }
  }, [])

  return (
    <div className="relative bg-void text-ivory">
      <GrainOverlay />
      <CustomCursor />
      <AmbientGlow />
      <Preloader onComplete={onComplete} reduced={reduced} />
      <Navbar ready={ready} />
      <main>
        <Hero ready={ready} reduced={reduced} />
        <TheCall reduced={reduced} />
        <Multiverse reduced={reduced} />
        <Timeline reduced={reduced} />
        <Challenges reduced={reduced} />
        <Countdown />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  )
}
