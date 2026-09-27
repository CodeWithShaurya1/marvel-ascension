import { useRef } from 'react'
import SectionHeader from './SectionHeader'
import { stats } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function TheCall({ reduced }) {
  const root = useRef(null)
  useScrollReveal(root, reduced)

  return (
    <section id="call" ref={root} className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <SectionHeader kicker="SECTION 02" title="THE CALL" accent="HAS BEEN SENT." />
        <p data-reveal className="max-w-xl text-lg leading-relaxed text-fog md:text-xl">
          Bennett is no longer a single timeline. Tonight the chapter opens a breach — a night of
          logic, code, and chaos where only the worthy assemble. Missions drop. Arenas ignite. The
          last standing rewrite the story.
        </p>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <article
            key={stat.index}
            data-reveal
            className="border border-ivory/10 bg-void px-6 py-10 md:px-8 md:py-14"
          >
            <p className="display text-[clamp(4rem,10vw,7.5rem)] text-energy">{stat.index}</p>
            <h3 className="display mt-2 text-4xl text-ivory md:text-5xl">
              {stat.title === '∞' ? (
                <>
                  ∞<span className="sr-only"> Infinite </span>
                  <span className="block text-3xl md:text-4xl">{stat.label}</span>
                </>
              ) : (
                stat.title
              )}
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fog">{stat.copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
