import { useRef } from 'react'
import { useMagnetic } from '../hooks/useMagnetic'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export default function EnergyCta({ href, children }) {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()
  useMagnetic(ref, { strength: 0.32, reduced })

  const onClick = (event) => {
    if (reduced) return
    const el = ref.current
    if (!el) return
    el.classList.remove('energy-cta-hit')
    void el.offsetWidth
    el.classList.add('energy-cta-hit')
    window.setTimeout(() => el.classList.remove('energy-cta-hit'), 520)
    if (href?.startsWith('#')) {
      event.preventDefault()
      window.setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 180)
    }
  }

  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      className="energy-cta group relative inline-flex items-center justify-center px-8 py-4 text-[0.68rem] tracking-[0.32em] text-void will-change-transform sm:text-xs"
    >
      <span className="energy-cta-border" aria-hidden="true" />
      <span className="energy-cta-label relative z-10 inline-block transition-transform duration-300 group-hover:scale-[1.04]">
        {children}
      </span>
    </a>
  )
}
