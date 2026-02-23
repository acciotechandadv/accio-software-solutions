import { CheckCircle, Compass, Zap } from 'lucide-react'

const steps = [
  {
    icon: Compass,
    number: '01',
    title: 'Discovery & Planning',
    description: 'We understand your vision, goals, and technical requirements. Deep dive into your business needs.',
  },
  {
    icon: Zap,
    number: '02',
    title: 'Development',
    description: 'Agile development with regular updates. We build, test, and iterate based on your feedback.',
  },
  {
    icon: CheckCircle,
    number: '03',
    title: 'Launch & Support',
    description: 'Seamless deployment and ongoing support. Your success is our success.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-container bg-black">
      <div>
        <div className="mb-16">
          <h2 className="section-title">How We Work</h2>
          <p className="text-xl text-muted max-w-2xl">
            A streamlined process designed for transparency, quality, and results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="mb-6">
                  <span className="text-6xl font-black text-gray-700">{step.number}</span>
                </div>

                <div className="relative z-10 -mt-12 space-y-4">
                  <Icon size={40} className="text-white" />
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted">{step.description}</p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-1 bg-gray-700"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
