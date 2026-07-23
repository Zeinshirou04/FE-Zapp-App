'use client'

import { motion, type Variants } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Contact() {
  return (
    <section id="contact" className="bg-zapp-ink py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-sans font-semibold tracking-widest uppercase text-volt-light">
              Get in touch
            </span>

            <h2 className="font-display font-bold text-3xl md:text-4xl
                           text-white leading-tight tracking-tight mt-4 mb-4">
              Let's build something{' '}
              <span className="text-volt-light">together.</span>
            </h2>

            <p className="font-sans text-white/60 leading-relaxed mb-10">
              Have a project in mind? Tell us what you need and we'll get
              back to you with a quote and timeline.
            </p>

            {/* Plain contact links — no card boxes */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="mailto:business.zappdev@gmail.com"
                className="inline-flex items-center gap-3
                           font-sans text-sm text-white/70 hover:text-white
                           transition-colors duration-150"
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 text-volt-light" />
                business.zappdev@gmail.com
              </a>

              <a
                href="https://wa.me/6285183266907"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3
                           font-sans text-sm text-white/70 hover:text-white
                           transition-colors duration-150"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4 text-volt-light" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
