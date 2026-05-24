import apiServer from '@/lib/api.server'
import type { ApiCollection, Service } from '@/types'

const colorMap = [
    { color: 'text-volt-light', border: 'border-volt/30',       bg: 'hover:bg-volt/5' },
    { color: 'text-zapp-teal',  border: 'border-zapp-teal/30',  bg: 'hover:bg-zapp-teal/5' },
    { color: 'text-zapp-coral', border: 'border-zapp-coral/30', bg: 'hover:bg-zapp-coral/5' },
    { color: 'text-volt-light', border: 'border-volt/30',       bg: 'hover:bg-volt/5' },
]

async function getServices(): Promise<Service[]> {
    try {
        const res = await apiServer.get<ApiCollection<Service>>('/api/services')
        return res.data.data
    } catch {
        return []
    }
}

export default async function Services() {
    const services = await getServices()

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
                    {services.map((service, index) => {
                        const { color, border, bg } = colorMap[index % colorMap.length]
                        const number = String(index + 1).padStart(2, '0')

                        return (
                            <div
                                key={service.id}
                                className={`group p-8 rounded-2xl border ${border} ${bg} transition-all duration-200 cursor-default`}
                            >
                                <div className={`font-display font-bold text-5xl ${color} opacity-30 mb-6`}>
                                    {number}
                                </div>
                                <h3 className="font-display font-semibold text-xl text-zapp-ink mb-3">
                                    {service.name}
                                </h3>
                                <p className="font-sans text-zapp-gray leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}