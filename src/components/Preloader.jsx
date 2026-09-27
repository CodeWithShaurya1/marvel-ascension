import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Preloader({ onComplete, reduced }) {
  const root = useRef(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    let finished = false

    const finish = () => {
      if (finished) return
      finished = true
      onComplete?.()
      gsap.to(el, {
        autoAlpha: 0,
        duration: reduced || document.hidden ? 0 : 0.35,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(el, { pointerEvents: 'none' })
        },
      })
    }

    if (reduced || document.hidden) {
      finish()
      return
    }

    const tl = gsap.timeline()
    tl.fromTo(
      '.preload-core',
      { scale: 0.45, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.28, ease: 'power3.out' },
    )
    const failSafe = window.setTimeout(finish, 720)
    tl.add(finish, 0.42)

    const onShow = () => {
      if (document.hidden) finish()
    }
    document.addEventListener('visibilitychange', onShow)

    return () => {
      tl.kill()
      window.clearTimeout(failSafe)
      document.removeEventListener('visibilitychange', onShow)
    }
  }, [onComplete, reduced])

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
      role="status"
      aria-live="polite"
      aria-label="Loading Marvel Ascension"
    >
      <div className="preload-core relative h-16 w-16">
        <div className="energy-ring absolute inset-0 animate-[pulse-core_1.4s_ease-in-out_infinite] rounded-full opacity-80 blur-[1px]" />
        <div className="absolute inset-5 rounded-full bg-ivory shadow-[0_0_28px_#ff2d3d]" />
      </div>
      <p className="meta mt-6 text-fog">GFG × BENNETT</p>
    </div>
  )
}
