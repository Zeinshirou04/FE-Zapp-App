'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faSchool,
  faMugHot,
  faHardHat,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface ClientType {
  icon: IconDefinition
  label: string
}

const CLIENT_TYPES: ClientType[] = [
  { icon: faBuilding,  label: 'Local companies'    },
  { icon: faSchool,    label: 'Schools & organisations' },
  { icon: faMugHot,    label: 'Cafes & restaurants' },
  { icon: faHardHat,   label: 'Construction firms'  },
  { icon: faUser,      label: 'Personal clients'    },
]

export default function Clients() {
  return (
    <section className="bg-gray-50 dark:bg-zinc-900 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="font-sans text-xs font-semibold tracking-widest uppercase
                        text-gray-400 dark:text-zinc-500 mb-8">
            Who we work with
          </p>

          <div className="flex flex-wrap gap-x-10 gap-y-5">
            {CLIENT_TYPES.map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <FontAwesomeIcon
                  icon={icon}
                  className="h-4 w-4 text-gray-400 dark:text-zinc-500"
                />
                <span className="font-sans text-sm text-gray-600 dark:text-gray-400">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
