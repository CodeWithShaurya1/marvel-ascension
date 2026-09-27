import { useEffect, useRef } from 'react'

export default function ParticleField({ reduced }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || reduced) return
    const ctx = canvas.getContext('2d', { alpha: true })
    let raf = 0
    const mouse = { x: 0.5, y: 0.46 }
    const coarse = window.matchMedia('(pointer: coarse)').matches
    const count = window.innerWidth < 768 ? 22 : 40
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75)

    const particles = Array.from({ length: count }, () => {
      const radius = 0.08 + Math.random() * 0.42
      return {
        angle: Math.random() * Math.PI * 2,
        radius,
        orbit: (Math.random() - 0.5) * 0.0018,
        radial: (Math.random() - 0.5) * 0.0014,
        r: Math.random() * 1.5 + 0.35,
        a: Math.random() * 0.38 + 0.12,
        ivory: Math.random() > 0.72,
      }
    })

    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
    }
    resize()

    const onMove = (e) => {
      mouse.x = e.clientX / window.innerWidth
      mouse.y = e.clientY / window.innerHeight
    }

    window.addEventListener('resize', resize)
    if (!coarse) window.addEventListener('mousemove', onMove, { passive: true })

    const cx = 0.5
    const cy = 0.46

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const pullX = cx + (mouse.x - 0.5) * 0.045
      const pullY = cy + (mouse.y - 0.5) * 0.03

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i]
        p.angle += p.orbit
        p.radius += p.radial
        if (p.radius < 0.05 || p.radius > 0.52) p.radial *= -1

        const x = pullX + Math.cos(p.angle) * p.radius
        const y = pullY + Math.sin(p.angle) * p.radius * 0.72
        const color = p.ivory
          ? `rgba(243,236,228,${p.a})`
          : `rgba(255,45,61,${p.a})`

        ctx.beginPath()
        ctx.fillStyle = color
        ctx.arc(x * canvas.width, y * canvas.height, p.r * dpr, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [reduced])

  return (
    <canvas
      ref={canvasRef}
      className="hero-layer hero-layer-particles pointer-events-none absolute inset-0 h-full w-full opacity-80"
      data-depth="particles"
      aria-hidden="true"
    />
  )
}
