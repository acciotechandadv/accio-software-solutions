import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6 mb-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight max-w-3xl">
            We get things done.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
            Bespoke software solutions that will help in growing your business and saving your time.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link href="#contact" className="btn-primary text-lg flex items-center gap-2 justify-center">
            Start Your Project
            <ArrowRight size={20} />
          </Link>
          <Link href="#portfolio" className="btn-secondary text-lg flex items-center gap-2 justify-center">
            See Our Work
          </Link>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 pt-12 border-t border-gray-800">
          <div>
            <p className="text-3xl md:text-4xl font-bold">5+</p>
            <p className="text-muted mt-1">Completed Projects</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold">100%</p>
            <p className="text-muted mt-1">Delivery Focused</p>
          </div>
        </div>
      </div>
    </section>
  )
}
