'use client'

import { motion, type Variants } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

interface Project {
  id: number
  title: string
  type: string
  brief: string
  stack: string[]
  cover_image?: string
}

// Static placeholder — replace with your API fetch once backend is live.
// Pattern: export async function Portfolio() and fetch from process.env.API_URL
const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Zapp — Business Manager',
    type: 'SaaS Application',
    brief:
      'Multi-tenant SaaS platform for Indonesian micro businesses covering products, employees, orders, and finance.',
    stack: ['Laravel', 'Livewire', 'MySQL', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Semarang Gov Dashboard',
    type: 'Admin Dashboard',
    brief:
      'Government data management system built for a local department in Semarang — reporting, user roles, and data exports.',
    stack: ['Laravel', 'Filament', 'MySQL'],
  },
  {
    id: 3,
    title: 'Zapp Freelance',
    type: 'Company Profile',
    brief:
      'This site — a portfolio and company profile for Zapp Freelance, built with Next.js and a Laravel REST API backend.',
    stack: ['Next.js', 'TypeScript', 'Laravel', 'Tailwind CSS'],
  },
]

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const item: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-50 dark:bg-zinc-900 py-20 md:py-28">
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
            Portfolio
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl
                         text-gray-900 dark:text-gray-100
                         leading-tight tracking-tight mt-3">
            Recent work
          </h2>
        </motion.div>

        {/* Project cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROJECTS.map((project) => (
            <motion.article
              key={project.id}
              variants={item}
              className="bg-white dark:bg-zinc-800
                         border border-gray-100 dark:border-zinc-700
                         rounded-xl overflow-hidden shadow-sm
                         hover:shadow-md hover:-translate-y-0.5
                         transition-all duration-200
                         flex flex-col"
            >
              {/* Cover placeholder */}
              <div className="h-40 bg-gray-100 dark:bg-zinc-700 flex items-center justify-center">
                <span className="font-sans text-xs text-gray-400 dark:text-zinc-500">
                  {project.type}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-lg
                               text-gray-900 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-gray-500 dark:text-gray-400
                               leading-relaxed mb-4 flex-1">
                  {project.brief}
                </p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-xs font-medium
                                 bg-gray-100 dark:bg-zinc-700
                                 text-gray-600 dark:text-gray-300
                                 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-zinc-700">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5
                               font-sans font-semibold text-xs text-volt
                               hover:text-volt-dim transition-colors"
                  >
                    View project
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5
                               font-sans font-semibold text-xs
                               text-gray-400 dark:text-gray-500
                               hover:text-gray-600 dark:hover:text-gray-300
                               transition-colors"
                  >
                    <FontAwesomeIcon icon={faGithub} className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
