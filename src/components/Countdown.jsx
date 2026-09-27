import { useEffect, useRef } from 'react'
import { EVENT_DATE } from '../data/content'
import { useCountdown } from '../hooks/useCountdown'

function Unit({ value, label }) {
  const pad = String(value).padStart(2, '0')
  const prev = useRef(pad)

  useEffect(() => {
    prev.current = pad
  }, [pad])

  return (
    <div className="border-ivory/10 px-2 py-6 text-center md:border-r md:px-6 md:py-10 last:md:border-r-0">
      <div key={pad} className="display tick-flash text-[clamp(3.4rem,14vw,9.5rem)] text-ivory">
        {pad}
      </div>
      <p className="meta mt-2">{label}</p>
    </div>
  )
}

export default function Countdown() {
  const parts = useCountdown(EVENT_DATE)

  return (
    <section className="border-y border-ivory/10 bg-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <p className="meta mb-6">SECTION 06 — BREACH WINDOW</p>
        <h2 className="display mb-10 text-[clamp(2.4rem,6vw,4rem)] text-energy">THE CLOCK IS A WEAPON.</h2>
        {parts.complete ? (
          <p className="display text-6xl text-ivory">THE BREACH IS OPEN.</p>
        ) : (
          <div className="grid grid-cols-2 border border-ivory/10 md:grid-cols-4">
            <Unit value={parts.days} label="DAYS" />
            <Unit value={parts.hours} label="HOURS" />
            <Unit value={parts.minutes} label="MINUTES" />
            <Unit value={parts.seconds} label="SECONDS" />
          </div>
        )}
      </div>
    </section>
  )
}
