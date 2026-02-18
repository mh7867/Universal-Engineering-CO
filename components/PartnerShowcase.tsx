'use client'

import { Handshake } from 'lucide-react'

export default function PartnerShowcase() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#EFEFEF]/30 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-[#355FA8]/15 to-transparent rounded-full glow-orb-slow blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#231F20] mb-3">
            Strategic Partner
          </h2>
          <p className="text-gray-600 text-lg">
            Creating stronger solutions through collaboration
          </p>
        </div>

        {/* Partnership Section */}
        <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
          {/* Left - Our Company */}
          <div className="bg-white rounded-xl p-8 border-2 border-[#EFEFEF] hover:border-[#355FA8] transition-all duration-300 group text-center">
            <div className="mb-6 flex justify-center">
              <img
                src="/ue-logo.svg"
                alt="Universal Engineering CO."
                className="h-20 w-auto group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-600 text-sm">
              Advanced electrical distribution systems and custom-built switchgear panel solutions
            </p>
          </div>

          {/* Center - Handshake Icon */}
          <div className="flex flex-col items-center justify-center">
            <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-[#355FA8] to-[#1e3a5f] animate-pulse">
              <Handshake className="w-12 h-12 text-white" />
            </div>
            <div className="text-center">
              <p className="font-heading font-bold text-[#231F20] text-lg mb-2">Authorised Channel Partner</p>
              <p className="text-gray-600 text-sm">Building strength<br />together</p>
            </div>
          </div>

          {/* Right - Partner Company */}
          <div className="bg-white rounded-xl p-8 border-2 border-[#EFEFEF] hover:border-[#355FA8] transition-all duration-300 group text-center">
            <div className="mb-6 flex justify-center">
              <img
                src="/partner-logo.svg"
                alt="Partner"
                className="h-20 w-auto group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-600 text-sm">
              Collaborating to deliver innovative and reliable electrical solutions
            </p>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-gradient-to-r from-[#355FA8]/10 to-[#1e3a5f]/10 rounded-xl p-8 border-2 border-[#355FA8]/20 mb-12">
          <h3 className="font-heading text-2xl font-bold text-[#231F20] mb-6 text-center">
            Combined Expertise
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#355FA8] to-[#1e3a5f] flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h4 className="font-heading font-bold text-[#231F20] mb-2">Enhanced Innovation</h4>
              <p className="text-gray-600 text-sm">Combining technical expertise to develop cutting-edge solutions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#355FA8] to-[#1e3a5f] flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h4 className="font-heading font-bold text-[#231F20] mb-2">Expanded Reach</h4>
              <p className="text-gray-600 text-sm">Leveraging combined networks to serve more customers globally</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#355FA8] to-[#1e3a5f] flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h4 className="font-heading font-bold text-[#231F20] mb-2">Superior Quality</h4>
              <p className="text-gray-600 text-sm">Unified commitment to excellence and industry-leading standards</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
          This authorised channel partner represents a commitment to innovation, quality, and customer satisfaction. Together, we deliver comprehensive electrical solutions that power industries worldwide.
        </p>
      </div>
    </section>
  )
}
