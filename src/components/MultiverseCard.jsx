import { useRef, useState } from 'react'
import RealmArt from './RealmArt'

export default function MultiverseCard({ realm, recede, onEnter, onLeave }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setTilt({ x: (0.5 - y) * 10, y: (x - 0.5) * 12 })
  }

  return (
    <article
      ref={ref}
      tabIndex={0}
      onMouseEnter={() => onEnter(realm.id)}
      onFocus={() => onEnter(realm.id)}
      onBlur={onLeave}
      onMouseLeave={() => {
        onLeave()
        setTilt({ x: 0, y: 0 })
      }}
      onMouseMove={onMove}
      className={`group relative min-h-[420px] overflow-hidden border border-ivory/10 transition-all duration-500 md:min-h-[560px] ${
        recede ? 'scale-[0.96] opacity-45' : 'scale-100 opacity-100'
      }`}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${recede ? 0.96 : 1})`,
        boxShadow: recede ? 'none' : `0 30px 80px ${realm.glow}`,
      }}
    >
      <div className="absolute inset-0 origin-center scale-100 transition-transform duration-700 group-hover:scale-110">
        <RealmArt type={realm.art} accent={realm.accent} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
      <div className="relative flex h-full min-h-[420px] flex-col justify-end p-6 md:min-h-[560px] md:p-8">
        <p className="meta mb-3" style={{ color: realm.accent }}>
          {realm.detail}
        </p>
        <h3 className="display text-6xl text-ivory transition-transform duration-500 group-hover:-translate-y-2 md:text-8xl">
          {realm.title}
        </h3>
        <p className="display text-2xl" style={{ color: realm.accent }}>
          {realm.epithet}
        </p>
        <p className="mt-4 max-h-0 overflow-hidden text-sm leading-relaxed text-fog opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100 group-focus-within:max-h-32 group-focus-within:opacity-100">
          {realm.description}
        </p>
      </div>
    </article>
  )
}
