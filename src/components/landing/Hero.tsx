'use client'

import { motion, type Variants } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay },
  }),
}

export default function Hero() {
  return (
    <section className="bg-gray-50 dark:bg-zapp-ink min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-3xl">

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="font-display font-bold
                       text-5xl md:text-6xl lg:text-7xl
                       text-zapp-ink dark:text-white leading-[1.05] tracking-tight mb-6"
          >
            Elegant software
            <br />
            for your{' '}
            <span className="text-volt-light">growing</span>
            <br />
            business.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="font-sans text-lg text-shadow-zapp-ink dark:text-white/60 leading-relaxed mb-10 max-w-xl"
          >
            Affordable SaaS applications, REST APIs, and admin dashboards
            for micro businesses across Indonesia — fast, clean, and
            well-documented.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2
                         font-sans font-semibold text-base
                         px-7 py-3.5 rounded-lg
                         bg-volt hover:bg-volt-dim text-white
                         transition-colors duration-150"
            >
              Get a quote
              <FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center
                         font-sans font-semibold text-base
                         px-7 py-3.5 rounded-lg
                         border border-white/20 hover:border-white/40
                         text-shadow-zapp-ink/80 dark:text-white/80 hover:text-shadow-zapp-ink
                         transition-colors duration-150"
            >
              See our services
            </a>
          </motion.div>

          {/* Tech line — minimal credibility signal, no stat boxes */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="mt-14 pt-14 border-t border-white/10
                       font-sans text-sm text-volt-dim dark:text-white/30 tracking-wide"
          >
            Built with Laravel · Next.js · Tailwind CSS · MySQL
          </motion.p>

        </div>
      </div>
    </section>
  )
}
