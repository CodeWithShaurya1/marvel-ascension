export default function SpiderWeb() {
  return (
    <div className="spider-web-layer pointer-events-none absolute inset-0 z-[4]" aria-hidden="true">
      <svg className="absolute right-[-3%] top-[-8%] h-[68%] w-[58%] opacity-70" viewBox="0 0 800 620" fill="none">
        <g stroke="#f3ece4" strokeOpacity="0.22" strokeWidth="1">
          <path d="M760 0C590 120 520 210 430 310 330 420 210 520 0 620" />
          <path d="M800 90C620 170 520 250 430 310 310 400 180 470 30 520" />
          <path d="M800 190C630 230 530 280 430 310 300 350 190 390 90 410" />
          <path d="M800 300C640 300 540 305 430 310 290 315 190 315 100 300" />
          <path d="M790 420C630 370 530 340 430 310 300 270 205 230 130 190" />
          <path d="M700 540C570 420 500 350 430 310 330 250 260 160 220 70" />
          <path d="M590 600C510 450 465 360 430 310 380 235 370 130 385 20" />
        </g>
        <g stroke="#ff2d3d" strokeOpacity="0.34" strokeWidth="1.2">
          <path d="M790 28C610 150 520 230 430 310 330 398 225 490 35 585" />
          <path d="M800 275C635 290 530 302 430 310 300 320 205 330 95 350" />
          <path d="M735 505C590 410 500 350 430 310 345 260 270 185 200 90" />
        </g>
        <circle cx="430" cy="310" r="5" fill="#ff2d3d" />
      </svg>

      <div className="spider-hero absolute right-[6%] top-[5%] h-[390px] w-[250px] origin-top rotate-[7deg] md:right-[8%] md:h-[520px] md:w-[330px]">
        <div className="spider-thread absolute left-1/2 top-[-180px] h-[230px] w-px -translate-x-1/2 bg-gradient-to-b from-ivory/5 via-ivory/45 to-energy" />
        <div className="spider-body absolute left-1/2 top-[36%] h-[140px] w-[76px] -translate-x-1/2 rounded-[45%] bg-gradient-to-b from-[#a51422] via-[#111217] to-[#050506] shadow-[0_0_38px_rgba(255,45,61,0.28)]" />
        <div className="spider-mask absolute left-1/2 top-[28%] h-[62px] w-[62px] -translate-x-1/2 rounded-[50%_50%_46%_46%] bg-gradient-to-br from-[#c51629] to-[#08090b] shadow-[inset_-8px_-8px_16px_rgba(0,0,0,0.5)]">
          <span className="absolute left-[13px] top-[21px] h-[8px] w-[20px] -rotate-[22deg] skew-x-[-16deg] bg-ivory/90" />
          <span className="absolute right-[13px] top-[21px] h-[8px] w-[20px] rotate-[22deg] skew-x-[16deg] bg-ivory/90" />
          <span className="absolute inset-[12px] rounded-full border border-ivory/15" />
        </div>
        <div className="spider-arm absolute left-[34%] top-[45%] h-[120px] w-[20px] origin-top rotate-[55deg] rounded-full bg-[#111217]" />
        <div className="spider-arm absolute right-[34%] top-[45%] h-[120px] w-[20px] origin-top rotate-[-55deg] rounded-full bg-[#111217]" />
        <div className="spider-leg absolute left-[31%] top-[60%] h-[155px] w-[18px] origin-top rotate-[25deg] rounded-full bg-[#090a0d]" />
        <div className="spider-leg absolute right-[31%] top-[60%] h-[155px] w-[18px] origin-top rotate-[-25deg] rounded-full bg-[#090a0d]" />
        <div className="spider-web-shot absolute right-[-105px] top-[49%] h-px w-[150px] origin-left rotate-[10deg] bg-gradient-to-r from-ivory/60 to-transparent" />
        <div className="spider-web-shot absolute left-[-105px] top-[48%] h-px w-[150px] origin-right rotate-[-12deg] bg-gradient-to-l from-ivory/50 to-transparent" />
      </div>

      <div className="absolute right-[17%] top-[34%] rounded-full border border-energy/50 bg-void/70 px-3 py-1 text-[9px] font-mono uppercase tracking-[0.28em] text-ivory/70 backdrop-blur-sm">
        WEB-LINK // ACTIVE
      </div>
    </div>
  )
}
