'use client'

import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const NAV_LINKS = [
  { label: 'Services',  href: '#services'  },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About',     href: '#about'     },
  { label: 'Contact',   href: '#contact'   },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
        bg-white/80 dark:bg-zapp-ink/80 backdrop-blur-md
        ${scrolled
          ? 'border-b border-gray-100 dark:border-white/10 shadow-sm'
          : 'border-b border-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          className="font-display font-bold text-xl text-zapp-ink dark:text-white tracking-tight"
        >
          Zapp<span className="text-volt">.</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-sans text-sm text-gray-600 dark:text-white/60
                         hover:text-gray-900 dark:hover:text-white
                         transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2
                     font-sans font-semibold text-sm
                     bg-volt hover:bg-volt-dim text-white
                     px-5 py-2 rounded-lg transition-colors duration-150"
        >
          Get a quote
          <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="md:hidden text-gray-600 dark:text-white/60
                     hover:text-gray-900 dark:hover:text-white
                     transition-colors p-1"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon
            icon={menuOpen ? faXmark : faBars}
            className="h-5 w-5"
          />
        </button>
      </div>

      {/* Mobile menu — slide down */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          border-t border-gray-100 dark:border-white/10
          bg-white dark:bg-zapp-ink
          ${menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-sm text-gray-700 dark:text-white/70
                         hover:text-gray-900 dark:hover:text-white
                         transition-colors py-1"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-2 font-sans font-semibold text-sm
                       bg-volt hover:bg-volt-dim text-white
                       px-5 py-2.5 rounded-lg transition-colors w-fit"
          >
            Get a quote
            <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
          </a>
        </div>
      </div>
    </nav>
  )
}
