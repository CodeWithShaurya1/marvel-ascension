export default function HeroScene({ children }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-void">
      <div
        className="hero-layer hero-layer-bg absolute inset-0"
        data-depth="bg"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(90,10,16,0.28),transparent_52%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#050505_0%,#08080a_42%,#050505_100%)]" />
        <svg
          className="absolute bottom-0 left-1/2 h-[58%] w-[180%] max-w-none -translate-x-1/2 opacity-70"
          viewBox="0 0 1600 500"
          fill="none"
          aria-hidden="true"
        >
          <g fill="#0c0c0e">
            <rect x="30" y="210" width="94" height="290" />
            <rect x="140" y="140" width="62" height="360" />
            <rect x="220" y="188" width="130" height="312" />
            <rect x="370" y="90" width="72" height="410" />
            <rect x="460" y="170" width="48" height="330" />
            <rect x="1108" y="160" width="108" height="340" />
            <rect x="1234" y="100" width="70" height="400" />
            <rect x="1320" y="200" width="140" height="300" />
            <rect x="1480" y="130" width="46" height="370" />
          </g>
          <g stroke="#1a1b20" strokeWidth="1" opacity="0.7">
            <line x1="370" y1="90" x2="370" y2="500" />
            <line x1="1234" y1="100" x2="1234" y2="500" />
          </g>
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-[linear-gradient(180deg,transparent,#050505_78%)]" />
      </div>

      <div
        className="hero-layer hero-layer-core hero-core absolute inset-0 grid place-items-center"
        data-depth="core"
      >

        <svg
          className="hero-portal relative ml-[18vw] h-[min(92vw,760px)] w-[min(92vw,760px)] md:ml-[24vw]"
          viewBox="0 0 600 600"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="portal-core" cx="50%" cy="48%" r="48%">
              <stop offset="0%" stopColor="#fff6f2" stopOpacity="0.55" />
              <stop offset="12%" stopColor="#ff2d3d" stopOpacity="0.42" />
              <stop offset="34%" stopColor="#b31222" stopOpacity="0.18" />
              <stop offset="62%" stopColor="#050505" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#050505" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="portal-rim" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stopColor="transparent" />
              <stop offset="86%" stopColor="#ff2d3d" stopOpacity="0.35" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>

          <ellipse cx="300" cy="300" rx="168" ry="168" fill="url(#portal-core)" />
          <ellipse cx="300" cy="300" rx="210" ry="210" fill="url(#portal-rim)" />

          <g className="hero-ring hero-ring-a" style={{ transformOrigin: '300px 300px' }}>
            <ellipse
              cx="300"
              cy="300"
              rx="196"
              ry="196"
              stroke="#f3ece4"
              strokeOpacity="0.22"
              strokeWidth="0.8"
              strokeDasharray="3 14"
            />
            <ellipse
              cx="300"
              cy="300"
              rx="196"
              ry="196"
              stroke="#ff2d3d"
              strokeOpacity="0.55"
              strokeWidth="1.2"
              strokeDasharray="28 220"
              strokeLinecap="round"
            />
          </g>

          <g className="hero-ring hero-ring-b" style={{ transformOrigin: '300px 300px' }}>
            <ellipse
              cx="300"
              cy="300"
              rx="248"
              ry="168"
              stroke="#f3ece4"
              strokeOpacity="0.16"
              strokeWidth="0.7"
            />
            <ellipse
              cx="300"
              cy="300"
              rx="248"
              ry="168"
              stroke="#ff2d3d"
              strokeOpacity="0.45"
              strokeWidth="1.1"
              strokeDasharray="40 180"
              strokeLinecap="round"
            />
          </g>

          <g className="hero-ring hero-ring-c" style={{ transformOrigin: '300px 300px' }}>
            <ellipse
              cx="300"
              cy="300"
              rx="292"
              ry="292"
              stroke="#b31222"
              strokeOpacity="0.28"
              strokeWidth="0.6"
              strokeDasharray="2 18"
            />
            <ellipse
              cx="300"
              cy="300"
              rx="292"
              ry="292"
              stroke="#f3ece4"
              strokeOpacity="0.35"
              strokeWidth="1"
              strokeDasharray="18 260"
              transform="rotate(90 300 300)"
            />
          </g>

          <g className="hero-ring hero-ring-d" style={{ transformOrigin: '300px 300px' }}>
            <ellipse
              cx="300"
              cy="300"
              rx="132"
              ry="132"
              stroke="#ff2d3d"
              strokeOpacity="0.7"
              strokeWidth="1.4"
              strokeDasharray="8 36"
            />
          </g>

          <circle cx="300" cy="300" r="7" fill="#f3ece4" opacity="0.9" />
          <circle cx="300" cy="300" r="18" stroke="#ff2d3d" strokeOpacity="0.5" />
        </svg>
      </div>

      {children}

      <div
        className="hero-layer hero-layer-sil hero-silhouette absolute inset-0"
        data-depth="sil"
      >
        <div className="absolute bottom-[-5%] left-[50%] h-[98%] w-[min(980px,120%)] max-w-none translate-x-[2%] md:left-[54%] md:w-[min(1040px,78vw)] md:translate-x-0">
          <svg
            className="hero-figure h-full w-full"
            viewBox="0 0 900 1100"
            fill="none"
            aria-hidden="true"
          >
          <defs>
            <linearGradient id="sil-body" x1="450" y1="80" x2="450" y2="1040">
              <stop offset="0%" stopColor="#1a1b22" />
              <stop offset="55%" stopColor="#0a0a0c" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>
            <linearGradient id="sil-rim" x1="220" y1="200" x2="700" y2="900">
              <stop offset="0%" stopColor="#ff2d3d" stopOpacity="0.55" />
              <stop offset="40%" stopColor="#f3ece4" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#b31222" stopOpacity="0.35" />
            </linearGradient>
            <filter id="sil-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>

          <ellipse cx="450" cy="980" rx="210" ry="28" fill="#ff2d3d" opacity="0.18" filter="url(#sil-glow)" />

          <path
            className="hero-cape"
            d="M430 210c-40 90-130 210-196 360-18 40 14 70 62 58 120-28 210-150 248-268 16-52-40-90-114-150Z"
            fill="#08080b"
            opacity="0.92"
          />
          <path
            d="M470 210c36 86 70 210 128 330 28 54 90 48 118 8-88-110-146-250-176-338-12-36-48-36-70 0Z"
            fill="#0c0c10"
            opacity="0.88"
          />

          <path
            d="M452 120c-34 140-92 250-168 390-24 44 6 78 52 74 86-8 168-86 196-188 24-92-8-186-80-276"
            fill="url(#sil-body)"
          />
          <path
            d="M452 120c28 128 18 248 72 318 46 58 118 62 164 12-64-96-98-210-122-308-10-38-72-42-114-22Z"
            fill="#101014"
          />

          <path d="M412 560l22 360h40l24-360H412Z" fill="#0d0d12" />
          <path d="M392 248c32-108 84-112 124 0-30 16-92 16-124 0Z" fill="#17181f" />
          <circle cx="456" cy="214" r="28" fill="#1c1d24" />
          <path d="M400 538h116l-16 52H416z" fill="#b31222" />

          <path
            d="M284 510c-8 90 18 170 70 250"
            stroke="url(#sil-rim)"
            strokeWidth="1.4"
            opacity="0.7"
          />
          <path
            d="M628 430c22 80 18 170-10 270"
            stroke="url(#sil-rim)"
            strokeWidth="1.2"
            opacity="0.55"
          />
          <path
            d="M392 248c32-108 84-112 124 0"
            stroke="#f3ece4"
            strokeOpacity="0.18"
            strokeWidth="1"
          />
          <circle cx="456" cy="214" r="28" stroke="#ff2d3d" strokeOpacity="0.35" />
        </svg>
        </div>
      </div>

      <div
        className="hero-layer hero-layer-fg pointer-events-none absolute inset-0"
        data-depth="fg"
      >
        <div className="absolute left-[6%] top-[22%] hidden h-16 w-px bg-ivory/15 md:block" />
        <div className="absolute right-[7%] top-[30%] hidden h-24 w-px bg-energy/25 md:block" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,#050505_86%)]" />
      </div>
    </div>
  )
}
