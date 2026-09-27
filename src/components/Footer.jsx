import { socials, communityDetails } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-ivory/10">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:px-10 md:py-24">
        <div>
          <div className="mb-8 flex items-center gap-4">
            <img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="GeeksforGeeks" className="h-12 w-12 object-contain" />
            <div>
              <p className="text-sm font-semibold tracking-tight text-ivory">geeksforgeeks</p>
              <p className="meta mt-1 text-[0.48rem]">STUDENT CHAPTER • BENNETT UNIVERSITY</p>
            </div>
          </div>
          <div className="mb-10 grid gap-3 sm:grid-cols-2">
            <a href={communityDetails.gfg.instagram} target="_blank" rel="noreferrer" className="border border-ivory/10 p-4 transition-colors hover:border-energy/60">
              <p className="meta text-energy">GFG-BU</p>
              <p className="mt-2 text-sm text-ivory">{communityDetails.gfg.handle}</p>
              <p className="mt-1 text-xs leading-5 text-fog">{communityDetails.gfg.description}</p>
            </a>
            <a href={communityDetails.scset.instagram} target="_blank" rel="noreferrer" className="border border-ivory/10 p-4 transition-colors hover:border-energy/60">
              <p className="meta text-energy">SCSET BU</p>
              <p className="mt-2 text-sm text-ivory">{communityDetails.scset.handle}</p>
              <p className="mt-1 text-xs leading-5 text-fog">{communityDetails.scset.description}</p>
            </a>
          </div>
          <p className="display text-[clamp(3.6rem,12vw,9rem)] text-ivory">
            THE MULTIVERSE
            <br />
            <span className="text-energy">IS WAITING.</span>
          </p>
        </div>
        <div className="flex flex-col justify-between gap-10 md:items-end md:text-right">
          <p className="display text-4xl text-ivory">MARVEL: ASCENSION</p>
          <ul className="flex flex-wrap gap-5 md:justify-end">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="meta text-fog transition-colors hover:text-ivory"
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.short || s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="meta">© 2026</p>
        </div>
      </div>
    </footer>
  )
}
