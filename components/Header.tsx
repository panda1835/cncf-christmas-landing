import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white relative z-50 border-b border-gray-100">
      <div className="max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image 
            src="/Header-logo.svg" 
            alt="A Thousand Wishes" 
            width={180} 
            height={60}
            className="h-14 w-auto"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4">
          {/* Gift $10 Button */}
          <button className="relative group transition-transform hover:scale-105">
            <Image 
              src="/Gift-10-button.png" 
              alt="Gift a $10 Gift" 
              width={150} 
              height={50}
              className="h-12 w-auto"
            />
          </button>

          {/* Make a Wish Come True Button */}
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-be-vietnam font-semibold px-6 py-3 rounded-full transition-all hover:scale-105 hover:shadow-lg">
            Make a Wish Come True
          </button>
        </div>
      </div>
    </header>
  )
}
