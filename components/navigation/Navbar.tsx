'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Accio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm font-medium hover:opacity-70">
              Services
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:opacity-70">
              Portfolio
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:opacity-70">
              Process
            </Link>
            <Link href="#team" className="text-sm font-medium hover:opacity-70">
              Team
            </Link>
            <Link href="#contact" className="btn-primary text-sm">
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-gray-900 rounded-lg transition"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-gray-800 pt-4">
            <Link
              href="#services"
              className="block text-sm font-medium hover:opacity-70"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="block text-sm font-medium hover:opacity-70"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#how-it-works"
              className="block text-sm font-medium hover:opacity-70"
              onClick={() => setIsOpen(false)}
            >
              Process
            </Link>
            <Link
              href="#team"
              className="block text-sm font-medium hover:opacity-70"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link href="#contact" className="btn-primary block text-center text-sm">
              Let's Talk
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
