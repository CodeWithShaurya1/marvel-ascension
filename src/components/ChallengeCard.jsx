export default function ChallengeCard({ challenge }) {
  const circ = 97.4
  const offset = circ - (challenge.charge / 100) * circ

  return (
    <article
      tabIndex={0}
      className="group glass relative overflow-hidden p-7 transition-transform duration-500 hover:-translate-y-1 focus:outline-none md:p-9"
    >
      <div className="mb-8 flex items-start justify-between">
        <p className="meta">{challenge.code}</p>
        <div className="relative h-20 w-20" aria-hidden="true">
          <svg className="h-20 w-20 -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke="rgba(243,236,228,0.12)"
              strokeWidth="1.6"
            />
            <circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke="#ff2d3d"
              strokeWidth="1.6"
              strokeDasharray={circ}
              strokeDashoffset={offset}
              className="transition-[stroke-dashoffset] duration-700"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-mono text-xs text-ivory">
            {challenge.charge}
          </span>
        </div>
      </div>
      <h3 className="display text-6xl text-ivory md:text-7xl">{challenge.title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-fog">{challenge.briefing}</p>
      <p className="mt-6 max-h-0 overflow-hidden text-xs tracking-[0.18em] text-energy uppercase opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100 group-focus-within:max-h-20 group-focus-within:opacity-100">
        {challenge.intel}
      </p>
    </article>
  )
}
