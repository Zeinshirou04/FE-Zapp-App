export default function Hero() {
  return (
    <section className="relative min-h-screen bg-zapp-ink flex items-center overflow-hidden">

      {/* Background geometric accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-[-5%] w-125 h-125 rounded-full border border-volt/20" />
        <div className="absolute top-1/3 right-[5%] w-75 h-75 rounded-full border border-volt/10" />
        <div className="absolute bottom-[-10%] left-[-5%] w-100 h-100 rounded-full bg-volt/5" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-volt/15 border border-volt/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-volt-light" />
            <span className="font-sans text-sm text-volt-light font-medium">
              Zapp Freelance — Indonesia
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6">
            Elegant software
            <br />
            for your{' '}
            <span className="text-volt-light">growing</span>
            <br />
            business.
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-xl">
            We build affordable SaaS applications, REST APIs, and admin dashboards
            for micro companies across Indonesia — fast, clean, and well-documented.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="font-sans font-medium text-base px-7 py-3.5 rounded-lg bg-volt hover:bg-volt-light text-white transition-colors text-center"
            >
              Get a quote
            </a>
            <a
              href="#services"
              className="font-sans font-medium text-base px-7 py-3.5 rounded-lg border border-white/20 hover:border-white/40 text-white/80 hover:text-white transition-colors text-center"
            >
              See our services
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-16 pt-16 border-t border-white/10">
            {[
              { value: 'Laravel', label: 'Backend framework' },
              { value: 'Next.js', label: 'Frontend framework' },
              { value: 'Fast', label: 'Delivery & communication' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-2xl text-white mb-1">
                  {stat.value}
                </div>
                <div className="font-sans text-sm text-white/40">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}