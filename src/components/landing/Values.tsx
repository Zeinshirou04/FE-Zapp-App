'use client'

import { motion, type Variants } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBoxOpen,
  faFileCode,
  faBolt,
  faTag,
} from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface Value {
  icon: IconDefinition
  title: string
  description: string
}

const VALUES: Value[] = [
  {
    icon: faBoxOpen,
    title: 'Code availability',
    description:
      'Every project ships with full source access — package-based pricing with no lock-in.',
  },
  {
    icon: faFileCode,
    title: 'Clean code & docs',
    description:
      'Readable, maintainable code with inline documentation so you or your team can take it forward.',
  },
  {
    icon: faBolt,
    title: 'Fast delivery',
    description:
      'Clear timelines and responsive communication throughout — no ghosting, no vague ETAs.',
  },
  {
    icon: faTag,
    title: 'Affordable prices',
    description:
      'Priced for Indonesian micro businesses, not enterprise budgets. Honest quotes upfront.',
  },
]

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const item: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function Values() {
  return (
    <section id="about" className="bg-white dark:bg-zinc-950 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12"
        >
          <span className="text-xs font-sans font-semibold tracking-widest uppercase text-volt">
            Why Zapp
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl
                         text-gray-900 dark:text-gray-100
                         leading-tight tracking-tight mt-3">
            What we stand for
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {VALUES.map((v) => (
            <motion.div
              key={v.title}
              variants={item}
              className="flex gap-5
                         bg-white dark:bg-zinc-900
                         border border-gray-100 dark:border-zinc-800
                         rounded-xl p-6 shadow-sm
                         hover:shadow-md hover:-translate-y-0.5
                         transition-all duration-200"
            >
              <div className="mt-0.5 shrink-0">
                <FontAwesomeIcon icon={v.icon} className="h-5 w-5 text-volt" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base
                               text-gray-900 dark:text-gray-100 mb-1">
                  {v.title}
                </h3>
                <p className="font-sans text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {v.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
