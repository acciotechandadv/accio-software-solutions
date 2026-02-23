import { Code2, Zap, Layers, Package } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Custom Development',
    description: 'We understand your needs and fulfill demand.',
  },
  {
    icon: Zap,
    title: 'SaaS & Cloud Solutions',
    description: 'We deliver software solutions to cloud infrastructure.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Integration',
    description: 'We make the best version of any online integration.',
  },
  {
    icon: Package,
    title: 'End-to-End Delivery',
    description: 'We provide services from scratch to long term support.',
  },
]

export function Services() {
  return (
    <section id="services" className="section-container bg-black">
      <div>
        <div className="mb-16">
          <h2 className="section-title">What We Build</h2>
          <p className="text-xl text-muted max-w-2xl">
            From individuals to enterprises, we deliver software that matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-8 bg-gray-900 border-2 border-gray-800 rounded-lg hover:border-gray-700 transition hover:shadow-lg"
              >
                <Icon size={40} className="mb-4" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
