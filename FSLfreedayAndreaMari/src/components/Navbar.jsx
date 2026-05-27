import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, meta } from '../data/siteData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          transition: 'all 0.3s',
          background: scrolled ? 'rgba(17,17,16,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid #222220' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-3"
          >
            <div className="w-7 h-7 rounded-md flex items-center justify-center"
                 style={{ background: '#2a2a28' }}>
              <span className="font-display font-black text-xs leading-none" style={{ color: '#c8c8c0' }}>AM</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-semibold text-sm" style={{ color: '#c8c8c0' }}>
                {meta.student}
              </span>
              <span className="font-mono text-xs ml-2" style={{ color: '#484840' }}>
                Formazione Scuola Lavoro
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-3 py-1.5 rounded-lg text-sm font-body transition-colors duration-150"
                style={{ color: '#606058' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#c8c8c0'; e.currentTarget.style.background = '#1e1e1c' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#606058'; e.currentTarget.style.background = 'transparent' }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={meta.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-ghost text-xs py-1.5"
            >
              FreeDay15
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ color: '#606058' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#c8c8c0'; e.currentTarget.style.background = '#1e1e1c' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#606058'; e.currentTarget.style.background = 'transparent' }}
              aria-label="Menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            style={{ background: '#191917', borderBottom: '1px solid #222220' }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden shadow-2xl"
          >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 rounded-xl text-sm font-body transition-colors"
                  style={{ color: '#808070' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#c8c8c0'; e.currentTarget.style.background = '#222220' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#808070'; e.currentTarget.style.background = 'transparent' }}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
