import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-transparent relative z-50">
      {/* Horizontal Line */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t w-20 border-gray-200" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* LOGO sits above the line */}
          <div className="relative z-10 bg-transparent px-4">
            <Image
              src="/Header-logo.svg"
              alt="A Thousand Wishes"
              width={180}
              height={60}
              className="h-40 w-auto"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-3 sm:gap-4 relative z-10  px-3 py-1">
            {/* Gift $10 Button */}
            <button className="transition-transform hover:scale-105">
              <Image
                src="/Gift-10-button.png"
                alt="Gift a $10 Gift"
                width={150}
                height={50}
                className="h-11 sm:h-12 w-auto"
              />
            </button>

            {/* Make a Wish Button */}
            <button className="inline-flex items-center justify-center bg-[#009c8a] hover:bg-[#008272] text-white font-be-vietnam font-semibold text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.15)] transition-transform hover:scale-105">
              Make a Wish Come True
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
