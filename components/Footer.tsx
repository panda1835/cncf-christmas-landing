import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#173f35] text-[#f1f6f4] font-be-vietnam">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        {/* Top Section: Logo, Quote, Gift Button */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-8 mb-10">
          {/* Logo */}
          <div className="shrink-0">
            <Image
              src="/CNCF-logo.png"
              alt="CNCF Logo"
              width={100}
              height={100}
            />
          </div>

          {/* Centered Quote */}
          <div className="flex-1 text-center md:text-center lg:text-center">
            <h2 className="font-lobster text-[#D4A574] text-xl sm:text-2xl leading-tight">
              "Together, Let's Make This Christmas Brighter."
            </h2>
            <p className="font-lobster text-[#D4A574] text-xl sm:text-2xl leading-tight mt-1">
              "Sharing the joy, spreading the magic."
            </p>
          </div>

          {/* Gift Button */}
          <div className="shrink-0">
            <Image
              src="/Gift-10-button.png"
              alt="Gift $10 Gift"
              width={150}
              height={50}
            />
          </div>
        </div>

        {/* Main Content: Contact, About, Get Involved, Resources */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-white text-lg mb-3 text-center sm:text-left">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm text-[#c9d3cb] text-center sm:text-left">
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <span>📞</span> 0123 456 789
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <span>📍</span> Thao Dien, HCMC, Vietnam
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <span>✉️</span> info@cncf.com.vn
              </li>
            </ul>
            <div className="flex justify-center sm:justify-start gap-3 mt-4">
              <a
                href="#facebook"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/Facebook.png"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="#linkedin"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/LinkedIn.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </div>

          {/* About us */}
          <div>
            <h3 className="font-bold text-white text-lg mb-3 text-center sm:text-left">
              About us
            </h3>
            <ul className="space-y-1 text-sm text-[#c9d3cb] text-center sm:text-left">
              <li>• Our Story</li>
              <li>• Mission</li>
              <li>• How We Help Children</li>
              <li>• Annual Christmas Projects</li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-bold text-white text-lg mb-3 text-center sm:text-left">
              Get Involved
            </h3>
            <ul className="space-y-1 text-sm text-[#c9d3cb] text-center sm:text-left">
              <li>• Make a Wish Come True</li>
              <li>• Give a Gift</li>
              <li>• Share the Magic</li>
              <li>• Volunteer Opportunities</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-white text-lg mb-3 text-center sm:text-left">
              Resources
            </h3>
            <ul className="space-y-1 text-sm text-[#c9d3cb] text-center sm:text-left">
              <li>• FAQs</li>
              <li>• Partner Locations</li>
              <li>• Donation Guidelines</li>
              <li>• Report &amp; Transparency</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6" />

        {/* Copyright */}
        <div className="text-center text-[11px] sm:text-xs text-[#c9d3cb] leading-relaxed">
          © 2025 CNCF - A Thousand Wishes. All Rights Reserved.
          <br />
          Made with Love to bring joy to children across Vietnam.
        </div>
      </div>
    </footer>
  )
}
