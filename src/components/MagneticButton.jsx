import { useRef } from 'react'
import { useMagnetic } from '../hooks/useMagnetic'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export default function MagneticButton({
  as: Tag = 'button',
  className = '',
  children,
  strength = 0.28,
  ...props
}) {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()
  useMagnetic(ref, { strength, reduced })

  return (
    <Tag
      ref={ref}
      className={`group relative inline-flex items-center justify-center overflow-hidden transition-transform duration-200 will-change-transform ${className}`}
      {...props}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(120px 60px at 50% 120%, rgba(255,45,61,0.55), transparent 70%)',
        }}
      />
      <span className="relative z-10">{children}</span>
    </Tag>
  )
}
