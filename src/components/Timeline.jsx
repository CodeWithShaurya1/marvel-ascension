import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { timeline } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function Timeline({ reduced }) {
  const pin = useRef(null)
  const track = useRef(null)
  const progress = useRef(null)

  useLayoutEffect(() => {
    const pinEl = pin.current
    const trackEl = track.current
    if (!pinEl || !trackEl || reduced) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add('(min-width: 900px)', () => {
        const getDistance = () => trackEl.scrollWidth - window.innerWidth
        gsap.to(trackEl, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: pinEl,
            start: 'top top',
            end: () => `+=${getDistance()}`,
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progress.current) progress.current.style.width = `${self.progress * 100}%`
            },
          },
        })
      })
    }, pin)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section id="experience" ref={pin} className="relative bg-ink">
      <div className="mx-auto flex max-w-[1440px] items-end justify-between px-5 pt-24 md:px-10 md:pt-28">
        <div>
          <p className="meta mb-3">SECTION 04</p>
          <h2 className="display text-[clamp(3rem,8vw,6.5rem)] text-ivory">
            EVENT
            <br />
            <span className="text-energy">EXPERIENCE.</span>
          </h2>
        </div>
        <p className="hidden max-w-xs text-sm text-fog md:block">
          Scroll to travel the night. Five movements. One protocol.
        </p>
      </div>

      <div className="mt-8 h-px w-full bg-ivory/10">
        <div ref={progress} className="h-px w-0 bg-energy" />
      </div>

      <div
        ref={track}
        className="flex w-full flex-col gap-6 px-5 py-16 md:w-max md:flex-row md:items-stretch md:gap-0 md:px-10 md:py-24"
      >
        {timeline.map((beat, i) => (
          <article
            key={beat.index}
            className="relative w-[min(88vw,420px)] shrink-0 border-l border-ivory/15 px-6 md:w-[min(70vw,560px)] md:px-12"
          >
            <p className="display text-7xl text-energy/80 md:text-8xl">{beat.index}</p>
            <p className="meta mt-4 text-gold">{beat.time}</p>
            <h3 className="display mt-3 text-5xl text-ivory md:text-6xl">{beat.title}</h3>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-fog">{beat.copy}</p>
            {i < timeline.length - 1 ? (
              <span className="absolute top-8 -right-3 hidden text-energy md:block">→</span>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
