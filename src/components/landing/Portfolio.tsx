import { getProjects } from '@/lib/api'
import PortfolioGrid from '@/components/sections/PortofolioGrid'

export default async function Portfolio() {
  const projects = await getProjects()

  return (
    <section id="portfolio" className="bg-gray-50 dark:bg-zinc-900 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <PortfolioGrid projects={projects} />
      </div>
    </section>
  )
}