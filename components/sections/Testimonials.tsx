import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Mujhe apne school me homework, class timings aur holidays communicate karne me mehnat lagti thi, accio's solution saved a lot of time and manual effort.",
    author: "Satyajeet Singh",
    title: "Owner, Jovial Juniors School",
    rating: 5,
  },
  {
    quote: "Accio made it possible for us to get conversion through online media, the website made our brand feel more professional and authentic.",
    author: "Harshit Singh",
    title: "Owner, FitBit Gym",
    rating: 5,
  },
  {
    quote: "We needed a lot of AI voices in Hindi for our film, Accio made possible to get an array of high quality, natural sounding AI voices, the project was a huge success.",
    author: "Abhilasha Sinha",
    title: "Film Maker, Hindi TTS Project",
    rating: 5,
  },
  {
    quote: "Accio listened to our demands and made iterations to match our needs, the project went smooth and fruitful.",
    author: "Mari Bendeliani",
    title: "CEO, HerSpace App",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">What clients say</h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Real feedback from teams we've helped transform their operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-700 transition"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-white text-white" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-800 pt-4">
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
