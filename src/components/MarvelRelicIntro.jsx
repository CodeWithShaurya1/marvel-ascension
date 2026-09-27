export default function MarvelRelicIntro() {
  return (
    <div className="marvel-relic-intro pointer-events-none absolute inset-0 z-[20] overflow-hidden" aria-hidden="true">
      <div className="relic-grid absolute inset-0 opacity-20" />

      <svg className="relic-web absolute -right-[8%] -top-[18%] h-[86%] w-[68%]" viewBox="0 0 800 700" fill="none">
        <g className="relic-web-draw" stroke="#f3ece4" strokeOpacity="0.78" strokeWidth="1.2">
          <path d="M760 0C600 120 520 230 410 340 300 450 170 560 0 700" />
          <path d="M800 110C620 180 520 260 410 340 280 430 160 500 30 560" />
          <path d="M800 220C630 250 520 300 410 340 290 380 190 410 70 430" />
          <path d="M800 340C620 340 520 340 410 340 280 340 170 330 70 300" />
          <path d="M760 500C600 420 500 370 410 340 300 300 220 230 150 130" />
          <path d="M630 620C530 470 460 390 410 340 350 270 340 150 350 30" />
        </g>
        <g className="relic-web-pulse" stroke="#ff2d3d" strokeOpacity="0.7" strokeWidth="2">
          <path d="M790 80C610 180 520 270 410 340 300 420 210 500 50 650" />
          <circle cx="410" cy="340" r="8" fill="#ff2d3d" stroke="none" />
        </g>
      </svg>

      <div className="relic-shield absolute left-[10%] top-[32%] h-32 w-32 md:h-48 md:w-48">
        <svg viewBox="0 0 200 200" className="h-full w-full drop-shadow-[0_0_35px_rgba(255,45,61,0.55)]" fill="none">
          <circle cx="100" cy="100" r="92" fill="#111217" stroke="#f3ece4" strokeOpacity="0.35" strokeWidth="2" />
          <circle cx="100" cy="100" r="72" fill="#b31222" stroke="#ff2d3d" strokeWidth="3" />
          <circle cx="100" cy="100" r="52" fill="#f3ece4" />
          <circle cx="100" cy="100" r="34" fill="#b31222" />
          <path d="M100 70l8 19 21 1-16 13 5 21-18-11-18 11 5-21-16-13 21-1 8-19Z" fill="#f3ece4" />
        </svg>
      </div>

      <div className="relic-hammer absolute right-[13%] top-[24%] h-36 w-52 md:h-52 md:w-72">
        <svg viewBox="0 0 300 220" className="h-full w-full drop-shadow-[0_0_38px_rgba(255,45,61,0.5)]" fill="none">
          <g transform="rotate(-18 150 110)">
            <rect x="135" y="82" width="30" height="115" rx="10" fill="#6f4a31" stroke="#f3ece4" strokeOpacity="0.2" />
            <path d="M70 55h150c14 0 22 9 20 22l-7 43c-2 12-10 18-23 18H80c-13 0-21-7-23-19l-8-43c-2-12 7-21 21-21Z" fill="#24262c" stroke="#f3ece4" strokeOpacity="0.35" strokeWidth="2" />
            <path d="M78 64h134" stroke="#ff2d3d" strokeOpacity="0.7" strokeWidth="3" />
            <path d="M98 53l8-19M202 53l-8-19" stroke="#ff2d3d" strokeOpacity="0.5" strokeWidth="2" />
          </g>
        </svg>
      </div>

      <div className="relic-flash absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ivory" />
    </div>
  )
}
