export default function RealmArt({ type, accent }) {
  if (type === 'iron') {
    return (
      <svg viewBox="0 0 400 520" className="h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id="ironG" cx="50%" cy="42%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.9" />
            <stop offset="70%" stopColor="#050505" />
          </radialGradient>
        </defs>
        <rect width="400" height="520" fill="url(#ironG)" />
        <circle cx="200" cy="210" r="78" fill="none" stroke={accent} strokeWidth="3" />
        <circle cx="200" cy="210" r="48" fill="none" stroke={accent} strokeOpacity="0.5" />
        <circle cx="200" cy="210" r="14" fill={accent} />
        <path d="M200 90v40M200 290v40M90 210h40M270 210h40" stroke={accent} strokeWidth="2" />
        <path d="M120 360h160M140 380h120" stroke={accent} strokeOpacity="0.4" />
      </svg>
    )
  }
  if (type === 'spider') {
    return (
      <svg viewBox="0 0 400 520" className="h-full w-full" aria-hidden="true">
        <rect width="400" height="520" fill="#12080a" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <line
            key={i}
            x1="200"
            y1="220"
            x2={200 + Math.cos((i / 8) * Math.PI * 2) * 180}
            y2={220 + Math.sin((i / 8) * Math.PI * 2) * 220}
            stroke={accent}
            strokeOpacity="0.45"
          />
        ))}
        <ellipse cx="200" cy="220" rx="70" ry="40" fill="none" stroke={accent} />
        <ellipse cx="200" cy="220" rx="120" ry="80" fill="none" stroke={accent} strokeOpacity="0.4" />
        <circle cx="200" cy="220" r="8" fill={accent} />
      </svg>
    )
  }
  if (type === 'strange') {
    return (
      <svg viewBox="0 0 400 520" className="h-full w-full" aria-hidden="true">
        <rect width="400" height="520" fill="#0c0b09" />
        <circle cx="200" cy="220" r="110" fill="none" stroke={accent} />
        <circle cx="200" cy="220" r="78" fill="none" stroke={accent} strokeDasharray="6 10" />
        <circle cx="200" cy="220" r="42" fill="none" stroke={accent} />
        <path d="M200 110l18 90 90 18-90 18-18 90-18-90-90-18 90-18z" fill="none" stroke={accent} />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 400 520" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="520" fill="#14060b" />
      <path
        d="M40 420c40-120 80-220 160-260 80 40 120 140 160 260"
        fill={accent}
        fillOpacity="0.18"
        stroke={accent}
      />
      <path d="M90 300c40-80 90-90 110-20 30-90 90-70 120 30" fill="none" stroke={accent} strokeWidth="2" />
      <circle cx="200" cy="210" r="16" fill={accent} />
    </svg>
  )
}
