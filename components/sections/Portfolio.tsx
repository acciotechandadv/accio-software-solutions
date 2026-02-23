import { ExternalLink, Code } from 'lucide-react'

const projects = [
  {
    title: 'School Project',
    description: 'An educational platform built using PostgreSQL in Supabase. Demonstrates core programming fundamentals and system design.',
    tags: ['Java Script', 'SupaBase', 'System Design'],
    category: 'Backend',
    color: 'from-blue-600 to-blue-900',
  },
  {
    title: 'Gym Landing Page',
    description: 'High-conversion landing page for fitness business. Features modern design, responsive layout, and clear CTAs.',
    tags: ['Web Design', 'Frontend', 'Conversion Focused'],
    category: 'Web Design',
    color: 'from-orange-500 to-red-700',
  },
  {
    title: 'Hindi Text-to-Speech',
    description: 'Advanced NLP/ML solution converting Hindi text to natural-sounding audio. Handles multiple dialects and accents.',
    tags: ['NLP', 'Machine Learning', 'Audio'],
    category: 'AI/ML',
    color: 'from-purple-600 to-indigo-900',
  },
  {
    title: 'Women-Centric Android App',
    description: 'Beautiful, accessible mobile app interface designed specifically for women. Focus on inclusivity and user experience.',
    tags: ['Android', 'Mobile', 'Design'],
    category: 'Android App',
    color: 'from-pink-500 to-rose-700',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="section-container">
      <div>
        <div className="mb-16">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="text-xl text-muted max-w-2xl">
            A selection of projects showcasing our expertise across web, AI, and design disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg border-2 border-gray-800 hover:border-gray-700 hover:shadow-2xl transition bg-gray-900"
            >
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm font-bold text-muted uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-white font-semibold hover:gap-3 transition">
                    View Demo
                    <ExternalLink size={16} />
                  </button>
                  <button className="flex items-center gap-2 text-white font-semibold hover:gap-3 transition" title="GitHub Project Link">
                    <Code size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
