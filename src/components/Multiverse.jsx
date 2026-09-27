import { useRef, useState } from 'react'
import SectionHeader from './SectionHeader'
import MultiverseCard from './MultiverseCard'
import { realms } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Multiverse({ reduced }) {
  const root = useRef(null)
  const [active, setActive] = useState(null)
  useScrollReveal(root, reduced)

  const bg = realms.find((r) => r.id === active)

  return (
    <section
      id="multiverse"
      ref={root}
      className="relative py-24 md:py-36"
      style={{
        background: bg
          ? `radial-gradient(circle at 50% 40%, ${bg.glow}, #050505 58%)`
          : '#050505',
        transition: 'background 0.5s ease',
      }}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeader kicker="SECTION 03" title="THE" accent="MULTIVERSE." />
        <p data-reveal className="mb-12 max-w-xl text-fog">
          Four realms. One night. Hover a branch to feel the pull — then choose the version of you
          that walks in.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {realms.map((realm) => (
            <MultiverseCard
              key={realm.id}
              realm={realm}
              recede={Boolean(active) && active !== realm.id}
              onEnter={setActive}
              onLeave={() => setActive(null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
