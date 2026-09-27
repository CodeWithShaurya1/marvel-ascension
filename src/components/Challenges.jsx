import { useRef } from 'react'
import SectionHeader from './SectionHeader'
import ChallengeCard from './ChallengeCard'
import { challenges } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Challenges({ reduced }) {
  const root = useRef(null)
  useScrollReveal(root, reduced)

  return (
    <section id="challenge" ref={root} className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
      <SectionHeader kicker="SECTION 05" title="ARE YOU" accent="WORTHY?" />
      <p data-reveal className="mb-12 max-w-lg text-fog">
        Three mission objectives. Charge your meters. Survive the protocol. Worthiness is not
        requested — it is proven.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </section>
  )
}
