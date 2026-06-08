"use client";

import { motion, type Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import type { Project } from "@/lib/api";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  return (
    <>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-12"
      >
        <span className="text-xs font-sans font-semibold tracking-widest uppercase text-volt">
          Portfolio
        </span>
        <h2
          className="font-display font-bold text-3xl md:text-4xl
                       text-gray-900 dark:text-gray-100
                       leading-tight tracking-tight mt-3"
        >
          Recent work
        </h2>
      </motion.div>

      {/* Project cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
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
            {/* Cover image */}
            <div className="h-40 bg-gray-100 dark:bg-zinc-700 relative overflow-hidden">
              {project.cover_image ? (
                <Image
                  src={project.cover_image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="h-full flex items-center justify-center">
                  <span className="font-sans text-xs text-gray-400 dark:text-zinc-500">
                    {project.type}
                  </span>
                </div>
              )}
            </div>

            <div className="p-6 flex flex-col flex-1">
              <span className="text-xs font-sans font-semibold tracking-widest uppercase text-volt mb-1">
                {project.type}
              </span>
              <h3
                className="font-display font-bold text-lg
                             text-gray-900 dark:text-gray-100 mb-2"
              >
                {project.title}
              </h3>
              <p
                className="font-sans text-sm text-gray-500 dark:text-gray-400
                             leading-relaxed mb-4 flex-1"
              >
                {project.brief}
              </p>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack?.slice(0, 4).map((tag) => (
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
                {project.stack?.length > 4 && (
                  <span className="font-sans text-xs text-gray-400 dark:text-gray-500 px-1 py-1">
                    +{project.stack.length - 4}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-zinc-700">
                <a
                  href={`https://portfolio.zapp.web.id/projects/${project.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5
                             font-sans font-semibold text-xs text-volt
                             hover:text-volt/80 transition-colors"
                >
                  View project
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="h-3 w-3"
                  />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </>
  );
}
