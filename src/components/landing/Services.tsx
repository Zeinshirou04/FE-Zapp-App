'use client'

import { motion, type Variants } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faServer,
  faDatabase,
  faMobileScreen,
  faGear,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface Service {
  icon: IconDefinition
  title: string
  description: string
}

const SERVICES: Service[] = [
  {
    icon: faServer,
    title: 'SaaS Application Development',
    description:
      'Full-featured multi-tenant SaaS built with Laravel and Livewire — products, employees, orders, and finance in one platform.',
  },
  {
    icon: faCode,
    title: 'REST API Development',
    description:
      'Clean, documented Laravel APIs with Sanctum authentication, role-based access, and consistent JSON responses.',
  },
  {
    icon: faMobileScreen,
    title: 'Frontend Development',
    description:
      'Responsive, fast frontends with Next.js and Tailwind CSS — connected to your API and optimised for Indonesian users.',
  },
  {
    icon: faDatabase,
    title: 'Admin Dashboard',
    description:
      'Filament-powered admin panels with custom resources, role management, and export functionality.',
  },
  {
    icon: faGear,
    title: 'Website Maintenance',
    description:
      'Ongoing support, dependency updates, bug fixes, and performance tuning for existing web applications.',
  },
  {
    icon: faShieldHalved,
    title: 'Secure & Documented',
    description:
      'Every project ships with clean code, inline docs, and environment configuration — ready for handoff or long-term ownership.',
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


export default function Services() {
  return (
    <section id="services" className="bg-white dark:bg-zinc-950 py-20 md:py-28">
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
            Services
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl
                         text-gray-900 dark:text-gray-100
                         leading-tight tracking-tight mt-3">
            What we build
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="bg-white dark:bg-zinc-900
                         border border-gray-100 dark:border-zinc-800
                         rounded-xl p-6 shadow-sm
                         hover:shadow-md hover:-translate-y-0.5
                         transition-all duration-200"
            >
              <div className="mb-4">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="h-6 w-6 text-volt"
                />
              </div>
              <h3 className="font-display font-bold text-lg
                             text-gray-900 dark:text-gray-100 mb-2">
                {service.title}
              </h3>
              <p className="font-sans text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
