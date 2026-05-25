import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const NAV_LINKS = [
  { label: 'Services',  href: '#services'  },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About',     href: '#about'     },
  { label: 'Contact',   href: '#contact'   },
]

export default function Footer() {
  return (
    <footer className="bg-zapp-ink border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center
                        justify-between gap-6 mb-10">

          {/* Logo */}
          <a href="/" className="font-display font-bold text-xl text-white tracking-tight">
            Zapp<span className="text-volt">.</span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-7 gap-y-2">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-sans text-sm text-white/50 hover:text-white
                           transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/40 hover:text-white transition-colors duration-150"
            >
              <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/40 hover:text-white transition-colors duration-150"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row
                        items-start sm:items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/30">
            &copy; {new Date().getFullYear()} Zapp Freelance. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/30">
            zapp.web.id · Indonesia
          </p>
        </div>

      </div>
    </footer>
  )
}
