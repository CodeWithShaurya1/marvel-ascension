import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(rootRef, reduced) {
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      const items = root.querySelectorAll('[data-reveal]')
      items.forEach((item) => {
        if (reduced) {
          gsap.set(item, { opacity: 1, y: 0 })
          return
        }

        gsap.set(item, { opacity: 0, y: 32 })
        ScrollTrigger.create({
          trigger: item,
          start: 'top 90%',
          once: true,
          onEnter: () => {
            gsap.to(item, { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', overwrite: 'auto' })
          },
        })
      })
      ScrollTrigger.refresh()
    }, root)

    return () => ctx.revert()
  }, [rootRef, reduced])
}
