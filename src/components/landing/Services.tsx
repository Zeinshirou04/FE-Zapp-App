const services = [
  {
    number: '01',
    title: 'SaaS Application Development',
    description: 'Full-featured multi-tenant SaaS apps built with Laravel and Livewire — products, employees, finance, all in one system.',
    color: 'text-volt-light',
    border: 'border-volt/30',
    bg: 'hover:bg-volt/5',
  },
  {
    number: '02',
    title: 'REST API Development',
    description: 'Secure, well-documented REST APIs with Laravel — ready to power your mobile app, frontend, or third-party integrations.',
    color: 'text-zapp-teal',
    border: 'border-zapp-teal/30',
    bg: 'hover:bg-zapp-teal/5',
  },
  {
    number: '03',
    title: 'Front End Development',
    description: 'Clean, responsive interfaces built with Next.js and Tailwind CSS — fast to load, easy to use, and built to impress.',
    color: 'text-zapp-coral',
    border: 'border-zapp-coral/30',
    bg: 'hover:bg-zapp-coral/5',
  },
  {
    number: '04',
    title: 'Website Maintenance & Support',
    description: 'Ongoing support to keep your application running smoothly — bug fixes, updates, performance improvements, and more.',
    color: 'text-volt-light',
    border: 'border-volt/30',
    bg: 'hover:bg-volt/5',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-zapp-bg py-24 px-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-sans text-sm font-medium text-volt uppercase tracking-widest">
              What we do
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-zapp-ink mt-3 leading-tight">
              Our services
            </h2>
          </div>
          <p className="font-sans text-zapp-gray max-w-sm leading-relaxed">
            From idea to deployment — we handle the full cycle of your digital product.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.number}
              className={`group p-8 rounded-2xl border ${service.border} ${service.bg} transition-all duration-200 cursor-default`}
            >
              <div className={`font-display font-bold text-5xl ${service.color} opacity-30 mb-6`}>
                {service.number}
              </div>
              <h3 className="font-display font-semibold text-xl text-zapp-ink mb-3">
                {service.title}
              </h3>
              <p className="font-sans text-zapp-gray leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}