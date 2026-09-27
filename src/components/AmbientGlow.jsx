import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export default function AmbientGlow() {
  const reduced = usePrefersReducedMotion()
  const glow = useRef(null)

  useEffect(() => {
    const el = glow.current
    if (!el || reduced) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e) => {
      el.style.left = `${e.clientX}px`
      el.style.top = `${e.clientY}px`
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [reduced])

  return (
    <div
      ref={glow}
      aria-hidden="true"
      className="pointer-events-none fixed top-1/3 left-1/2 z-[1] h-[42vw] w-[42vw] max-h-[520px] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[90px]"
      style={{
        background: 'radial-gradient(circle, rgba(179,18,34,0.55), transparent 68%)',
      }}
    />
  )
}
