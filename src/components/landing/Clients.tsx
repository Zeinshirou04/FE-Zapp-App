const clients = [
  { icon: '🏪', label: 'Micro Businesses' },
  { icon: '👤', label: 'Personal Clients' },
  { icon: '🏫', label: 'Schools & Organizations' },
  { icon: '☕', label: 'Cafés & Restaurants' },
  { icon: '🏗️', label: 'Local Companies' },
]

const values = [
  {
    title: 'Code availability',
    description: 'Package-based delivery — you own the code.',
  },
  {
    title: 'Clean code & docs',
    description: 'Readable, maintainable, and well-documented output.',
  },
  {
    title: 'Fast delivery',
    description: 'Quick turnaround with open communication throughout.',
  },
  {
    title: 'Affordable prices',
    description: 'Priced for Indonesian micro businesses, not enterprises.',
  },
]

export default function Clients() {
  return (
    <>
      {/* Target clients */}
      <section id="clients" className="bg-zapp-ink py-24 px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="font-sans text-sm font-medium text-volt-light uppercase tracking-widest">
              Who we serve
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3 leading-tight">
              Built for Indonesian businesses
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {clients.map((client) => (
              <div
                key={client.label}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 transition-colors"
              >
                <span className="text-xl">{client.icon}</span>
                <span className="font-sans text-white/80 text-sm font-medium">
                  {client.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="bg-zapp-bg py-24 px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="font-sans text-sm font-medium text-volt uppercase tracking-widest">
              Why Zapp
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-zapp-ink mt-3 leading-tight">
              Our values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={value.title} className="p-6 bg-white rounded-2xl border border-zapp-ink/8">
                <div className="font-display font-bold text-4xl text-volt-mist mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-display font-semibold text-lg text-zapp-ink mb-2">
                  {value.title}
                </h3>
                <p className="font-sans text-sm text-zapp-gray leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}