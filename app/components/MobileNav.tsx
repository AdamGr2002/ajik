'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2">
        <Menu className="h-6 w-6" />
      </button>
      
      {isOpen && (
        <nav className="absolute top-20 left-0 right-0 bg-white shadow-lg z-50">
          <ul className="flex flex-col p-4 space-y-4">
            <li><a href="#about" className="text-blue-600 hover:text-blue-800 block">A propos</a></li>
            <li><a href="#activities" className="text-blue-600 hover:text-blue-800 block">Activités</a></li>
            <li><a href="#board" className="text-blue-600 hover:text-blue-800 block">Bureau</a></li>
            <li><a href="#contact" className="text-blue-600 hover:text-blue-800 block">Contact</a></li>
          </ul>
        </nav>
      )}
    </div>
  )
}
