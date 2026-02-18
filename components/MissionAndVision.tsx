'use client'

import { useEffect, useRef } from 'react'
import { Eye, BriefcaseConveyorBelt } from 'lucide-react'

export default function MissionAndVision() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const header = sectionRef.current?.querySelector('.about-header')
          const leftContent = sectionRef.current?.querySelector('.about-left')
          const rightContent = sectionRef.current?.querySelector('.about-right')

          if (header) header.classList.add('animate-in')
          if (leftContent) {
            setTimeout(() => {
              leftContent.classList.add('animate-in')
            }, 150)
          }
          if (rightContent) {
            setTimeout(() => {
              rightContent.classList.add('animate-in')
            }, 300)
          }

          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="mission-vision" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Glow Orbs Background */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#355FA8]/20 to-transparent rounded-full glow-orb-slow"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-[#355FA8]/10 to-transparent rounded-full glow-orb"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center about-header opacity-0">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#231F20] mb-4">
            Mission & Vision
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] mx-auto mb-6"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-1 gap-12 items-center mb-16">
          {/* Left Column */}
          <div className="about-left">
            <div className="space-y-6 grid lg:grid-cols-2 gap-8">
              <div className="group overflow-hidden relative p-8 rounded-2xl border-2 bg-gradient-to-br from-white to-[#EFEFEF]/30 border-[#355FA8] transition-all duration-300 h-full">
                <div className="mb-4">
                  <div className="flex items-center justify-center h-18 w-18 rounded-lg bg-gradient-to-br from-[#355FA8] to-[#1e3a5f]">
                    <Eye className="text-white w-9 h-9" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-[#231F20] uppercase">Vision</h3>
                  <p className="text-gray-600 mt-2">
                    To be a Leader in the Electrical Manufacturing Industries with unique attributes characterized by quality products and services, excellence in practices, and values that nurture human potential.
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-50 h-50 bg-[#355FA8] rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
                <div className="absolute bottom-0 left-0 w-50 h-50 bg-[#355FA8] rounded-full mix-blend-multiply filter blur-3xl opacity-50" />

              </div>

              <div className="group overflow-hidden relative p-8 rounded-2xl border-2 bg-gradient-to-br from-white to-[#EFEFEF]/30 border-[#355FA8] transition-all duration-300 h-full">
                <div className="mb-4">
                  <div className="flex items-center justify-center h-18 w-18 rounded-lg bg-gradient-to-br from-[#355FA8] to-[#1e3a5f]">
                    <BriefcaseConveyorBelt className="text-white w-9 h-9" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl  font-bold text-[#231F20] uppercase">MISSION</h3>
                  <ul className="mt-2 space-y-3">
                    {[
                      "To develop and supply intelligent solutions and services for Electrical Distribution Systems",
                      "To respond and adapt to our customer needs, enabling the supply of energy safely and reliably",
                      "To achieve success through the commitment of our employees and actively engage, empower, and continuously develop our workforce.",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600">

                        {/* Gradient Disc */}
                        <span className="mt-2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] flex-shrink-0"></span>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute top-0 left-0 w-50 h-50 bg-[#355FA8] rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
                <div className="absolute bottom-0 right-0 w-50 h-50 bg-[#355FA8] rounded-full mix-blend-multiply filter blur-3xl opacity-50" />

              </div>

            </div>
          </div>

        </div>

        {/* Highlight Box */}
        <div id="company-history" className="bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] rounded-xl p-8 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
          <div className="relative z-10">
            <h3 className="font-heading text-2xl font-bold mb-3">Our Company History</h3>
            <p className="text-lg text-white/90">
              The Company has been established in 2012 with the aim of producing Electrical Panel and is proud to work with great effort and energy over the years using updated facilities and technologies by capable and responsible personnel to have a major share in the industry development. During its tenure, Universal Engineering CO. has gained a wide range of manufacturing experience in industries such as Civil Construction, Oil, Gas, Cement, Chemicals, Textile, Power & Water Industries, Food, Health & Agriculture.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
