'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ArrowRight, Check, AlertCircle } from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  company: string
  message: string
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      // MOCK SUBMISSION - Email integration not yet configured
      // To enable email, set up Resend (Vercel) or Formspree (GitHub Pages)
      // See DEPLOYMENT.md for setup instructions
      
      // For now, just show success and log to console
      console.log('Contact form submission:', data)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800))
      
      setSubmitStatus('success')
      reset()
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      console.error('Form error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-container bg-black text-white">
      <div className="max-w-2xl">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-black mb-4">Let's build something great.</h2>
          <p className="text-xl text-gray-300">
            Ready to turn your idea into reality? Tell us about your project and let's get started.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="input-field bg-gray-900 text-white border-gray-700 focus:border-white"
              placeholder="Your name"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' }
              })}
              className="input-field bg-gray-900 text-white border-gray-700 focus:border-white"
              placeholder="you@company.com"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Company Field */}
          <div>
            <label htmlFor="company" className="block text-sm font-semibold mb-2">
              Company
            </label>
            <input
              id="company"
              {...register('company', { required: 'Company is required' })}
              className="input-field bg-gray-900 text-white border-gray-700 focus:border-white"
              placeholder="Your company"
              disabled={isSubmitting}
            />
            {errors.company && (
              <p className="text-red-400 text-sm mt-1">{errors.company.message}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Tell us about your project
            </label>
            <textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              className="input-field bg-gray-900 text-white border-gray-700 focus:border-white min-h-32 resize-none"
              placeholder="What are you looking to build?"
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-900/30 border border-green-600 text-green-100 rounded-lg flex items-center gap-3">
              <Check size={20} />
              <p>Thanks! We'll get back to you shortly.</p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-900/30 border border-red-600 text-red-100 rounded-lg flex items-center gap-3">
              <AlertCircle size={20} />
              <p>Something went wrong. Please try again.</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-gray-100 disabled:opacity-70 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            {!isSubmitting && <ArrowRight size={20} />}
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-6">
          We typically respond within 24 hours.
        </p>
      </div>
    </section>
  )
}
