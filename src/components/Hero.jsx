import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import EnergyCta from './EnergyCta'
import ParticleField from './ParticleField'
import HeroScene from './HeroScene'
import SpiderWeb from './SpiderWeb'
import MarvelRelicIntro from './MarvelRelicIntro'

const HUD = [
  { id: 'dim', label: 'DIMENSION', value: '616', side: 'left', top: 'top-[22%]' },
  { id: 'sys', label: 'SYSTEM', value: 'ONLINE', side: 'right', top: 'top-[22%]' },
  { id: 'gfg', label: 'CHAPTER', value: 'GFG × BENNETT', side: 'left', top: 'top-[38%]' },
  { id: 'evt', label: 'EVENT PROTOCOL', value: 'ASCENSION', side: 'right', top: 'top-[38%]' },
]

export default function Hero({ ready, reduced }) {
  const root = useRef(null)

  useEffect(() => {
    const el = root.current
    if (!el || !ready) return

    if (reduced) {
      gsap.set(
        [
          '.hero-curtain',
          '.hero-spark',
          '.hero-layer-core',
          '.hero-layer-sil',
          '.hero-portal',
          '.hero-figure',
          '.hero-line',
          '.hero-copy',
          '.hero-cta',
          '.hero-hud',
          '.hero-scroll',
        ],
        { clearProps: 'all' },
      )
      gsap.set('.hero-curtain', { autoAlpha: 0 })
      gsap.set('.hero-spark', { autoAlpha: 0 })
      return
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      gsap.set('.hero-layer-core', { opacity: 0 })
      gsap.set('.hero-portal', { scale: 0.16, transformOrigin: '50% 50%' })
      gsap.set('.hero-layer-sil', { opacity: 0 })
      gsap.set('.hero-figure', { scale: 0.94, y: 28, transformOrigin: '50% 80%' })
      gsap.set('.hero-line', { yPercent: 110, opacity: 0 })
      gsap.set('.hero-copy', { opacity: 0, y: 12 })
      gsap.set('.hero-cta', { opacity: 0, y: 18, scale: 0.96 })
      gsap.set('.hero-hud', { opacity: 0 })
      gsap.set('.hero-scroll', { opacity: 0 })
      gsap.set('.hero-spark', { scale: 0, opacity: 0 })
      gsap.set('.hero-curtain', { autoAlpha: 1 })
      const curtainFailSafe = window.setTimeout(() => {
        gsap.to('.hero-curtain', { autoAlpha: 0, duration: 0.25 })
      }, 900)

      tl.to('.hero-spark', { scale: 1, opacity: 1, duration: 0.26 }, 0)
        .to('.hero-curtain', { autoAlpha: 0, duration: 0.4, ease: 'power2.inOut' }, 0.2)
        .to('.hero-layer-core', { opacity: 1, duration: 0.32 }, 0.18)
        .to('.hero-portal', { scale: 1, duration: 0.72, ease: 'power2.out' }, 0.2)
        .to('.hero-spark', { opacity: 0, duration: 0.3 }, 0.5)
        .to('.hero-layer-sil', { opacity: 1, duration: 0.48 }, 0.48)
        .to('.hero-figure', { scale: 1, y: 0, duration: 0.68, ease: 'power2.out' }, 0.48)
        .to(
          '.hero-line',
          { yPercent: 0, opacity: 1, duration: 0.68, stagger: 0.1, ease: 'power4.out' },
          0.78,
        )
        .to('.hero-copy', { opacity: 1, y: 0, duration: 0.38 }, 1.32)
        .to('.hero-hud', { opacity: 1, duration: 0.45, stagger: 0.05 }, 1.42)
        .to('.hero-cta', { opacity: 1, y: 0, scale: 1, duration: 0.42 }, 1.68)
        .to('.hero-scroll', { opacity: 1, duration: 0.36 }, 2.02)
        .set('.hero-figure', { clearProps: 'transform' }, 2.2)

      return () => {
        window.clearTimeout(curtainFailSafe)
      }
  }, [ready, reduced])

  useEffect(() => {
    const el = root.current
    if (!el || reduced) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5
      el.style.setProperty('--hx', x.toFixed(4))
      el.style.setProperty('--hy', y.toFixed(4))
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [reduced])

  return (
    <section
      id="top"
      ref={root}
      className="hero-stage relative isolate min-h-svh overflow-hidden pt-24"
    >
      <div className="hero-camera absolute inset-0 -z-10">
        <HeroScene>
          <ParticleField reduced={reduced} />
        </HeroScene>
      </div>

      <SpiderWeb />

      <div className="hero-scanlines pointer-events-none absolute inset-0 z-[2]" aria-hidden="true" />
      <div className="hero-sweep pointer-events-none absolute inset-0 z-[2]" aria-hidden="true" />
      <div className="hero-vignette pointer-events-none absolute inset-0 z-[3]" aria-hidden="true" />
      <div className="hero-curtain pointer-events-none absolute inset-0 z-[6] bg-void" aria-hidden="true" />
      <div
        className="hero-spark pointer-events-none absolute left-1/2 top-[46%] z-[7] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ivory shadow-[0_0_28px_12px_rgba(255,45,61,0.55)]"
        aria-hidden="true"
      />

      {HUD.map((item) => (
        <p
          key={item.id}
          className={`hero-hud meta pointer-events-none absolute z-[4] hidden max-w-[11rem] leading-5 text-fog/55 md:block ${item.top} ${
            item.side === 'left' ? 'left-6 lg:left-10' : 'right-6 text-right lg:right-10'
          }`}
        >
          {item.label}
          <br />
          <span className="text-ivory/70">{item.value}</span>
        </p>
      ))}

      <div
        className="hero-layer hero-layer-type relative z-[4] mx-auto flex min-h-[calc(100svh-6rem)] w-full max-w-[1440px] flex-col items-center justify-end px-4 pb-28 text-center sm:px-6 md:justify-center md:pb-16"
        data-depth="type"
      >
        <p className="hero-copy meta mb-5 max-w-[16rem] leading-6 text-fog md:mb-8">
          GEEKSFORGEEKS
          <br />
          STUDENT CHAPTER
          <br />
          BENNETT UNIVERSITY
        </p>

        <h1 className="display max-w-full text-ivory [text-shadow:0_10px_48px_rgba(5,5,5,0.72)]">
          <span className="hero-mask block overflow-hidden">
            <span className="hero-line block text-[clamp(3.6rem,20vw,17.5rem)] tracking-[0.02em]">
              MARVEL
            </span>
          </span>
          <span className="hero-mask -mt-[0.08em] block overflow-hidden">
            <span className="hero-line block text-[clamp(3.6rem,20vw,17.5rem)] tracking-[0.02em] text-energy">
              ASCENSION
            </span>
          </span>
        </h1>

        <p className="hero-copy mt-5 max-w-xl text-[0.8rem] tracking-[0.24em] text-ivory/80 sm:text-[0.95rem] md:mt-7 md:text-xl md:tracking-[0.28em]">
          THE MULTIVERSE HAS CHOSEN YOU.
        </p>

        <div className="hero-cta mt-8 md:mt-10">
          <EnergyCta href="#register">ENTER THE MULTIVERSE →</EnergyCta>
        </div>
      </div>

      <a
        href="#call"
        className="hero-scroll meta absolute bottom-5 left-1/2 z-[5] flex -translate-x-1/2 flex-col items-center gap-2 text-fog/80 transition-colors hover:text-ivory"
      >
        <span>SCROLL TO DISCOVER</span>
        <span className="hero-scroll-line" aria-hidden="true" />
      </a>
    </section>
  )
}
