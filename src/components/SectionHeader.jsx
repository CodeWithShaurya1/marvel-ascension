export default function SectionHeader({ kicker, title, accent, align = 'left' }) {
  return (
    <header
      data-reveal
      className={`mb-12 max-w-4xl md:mb-16 ${align === 'right' ? 'ml-auto text-right' : ''}`}
    >
      {kicker ? <p className="meta mb-4">{kicker}</p> : null}
      <h2 className="display text-[clamp(3.4rem,10vw,8.5rem)] text-ivory">
        {title}
        {accent ? (
          <>
            <br />
            <span className="text-energy">{accent}</span>
          </>
        ) : null}
      </h2>
    </header>
  )
}
