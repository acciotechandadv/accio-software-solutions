import { Github, Linkedin } from 'lucide-react'

const teamMembers = [
  {
    name: 'Ishan',
    role: 'Communications & Strategy',
    bio: 'Drives vision and client relationships.',
    specialty: 'Product Strategy, Communication',
  },
  {
    name: 'KSP',
    role: 'Full-Stack Development',
    bio: 'Builds robust, scalable solutions end-to-end.',
    specialty: 'Full-Stack Development, Architecture',
  },
]

export function Team() {
  return (
    <section id="team" className="section-container">
      <div>
        <div className="mb-16">
          <h2 className="section-title">The Team</h2>
          <p className="text-xl text-muted max-w-2xl">
            A focused crew dedicated to delivering exceptional software and real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-8 bg-gray-900 border-2 border-gray-800 rounded-lg hover:border-gray-700 hover:shadow-lg transition"
            >
              {/* Avatar Placeholder */}
              <div className="w-16 h-16 bg-gray-800 rounded-full mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-300">
                  {member.name.charAt(0)}
                </span>
              </div>

              <h3 className="text-2xl font-bold">{member.name}</h3>
              <p className="text-muted font-semibold mb-4">{member.role}</p>
              <p className="text-muted mb-4">{member.bio}</p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-white mb-2">Specialty</p>
                <p className="text-sm text-muted">{member.specialty}</p>
              </div>

              <div className="flex gap-4 pt-4 border-t border-gray-800">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
