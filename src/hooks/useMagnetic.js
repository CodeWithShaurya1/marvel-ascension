import { useEffect } from 'react'

export function useMagnetic(ref, { strength = 0.32, reduced = false } = {}) {
  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (event) => {
      const rect = el.getBoundingClientRect()
      const x = event.clientX - rect.left - rect.width / 2
      const y = event.clientY - rect.top - rect.height / 2
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    }

    const onLeave = () => {
      el.style.transform = 'translate(0, 0)'
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [ref, strength, reduced])
}
