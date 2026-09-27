import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import MagneticButton from './MagneticButton'
import { navLinks } from '../data/content'

export default function Navbar({ ready }) {
  const [compact, setCompact] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <a
        href="#call"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[120] focus:bg-ivory focus:px-4 focus:py-2 focus:text-void"
      >
        Skip to content
      </a>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          compact ? 'bg-void/80 py-3 backdrop-blur-md' : 'bg-transparent py-5 md:py-7'
        } ${ready ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="GeeksforGeeks Student Chapter Bennett University — home">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/20 bg-void/70 p-1.5 backdrop-blur-sm">
              <img
                src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
                alt="GeeksforGeeks"
                className="h-full w-full object-contain"
              />
            </span>
            <span className="hidden sm:block">
              <span className="block text-[0.68rem] font-semibold tracking-tight text-ivory">geeksforgeeks</span>
              <span className="meta block text-[0.46rem] text-fog/70">STUDENT CHAPTER • BENNETT UNIVERSITY</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="meta text-[0.62rem] text-fog transition-colors hover:text-ivory"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <MagneticButton
              as="a"
              href="#register"
              className="hidden border border-energy bg-energy px-5 py-2 text-[0.7rem] font-medium tracking-[0.22em] text-void lg:inline-flex"
            >
              ASSEMBLE →
            </MagneticButton>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center border border-ivory/20 text-ivory lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <Menu size={18} />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex flex-col bg-void px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3"><img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="GeeksforGeeks" className="h-8 w-8 object-contain" /><div><p className="text-sm font-semibold text-ivory">geeksforgeeks</p><p className="meta text-[0.45rem] text-fog/70">GFG-BU • SCSET</p></div></div>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center border border-ivory/20"
                onClick={() => setOpen(false)}
              >
                <X size={18} />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <nav className="mt-16 flex flex-1 flex-col gap-6" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 * i }}
                  onClick={() => setOpen(false)}
                  className="display text-6xl text-ivory"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="mb-4 border border-energy bg-energy px-5 py-4 text-center text-sm tracking-[0.22em] text-void"
            >
              ASSEMBLE →
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
