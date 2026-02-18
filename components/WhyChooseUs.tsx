'use client'

import { useEffect, useRef } from 'react'
import { Award, CheckCircle2, Handshake } from 'lucide-react'
import Counter from './Counter'

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add animation classes
          const header = sectionRef.current?.querySelector('.why-choose-header')
          const cards = sectionRef.current?.querySelectorAll('.why-choose-card')
          const trust = sectionRef.current?.querySelector('.trust-statement')

          if (header) header.classList.add('animate-in')
          cards?.forEach((card, idx) => {
            setTimeout(() => {
              card.classList.add('animate-in')
            }, idx * 150)
          })
          if (trust) {
            setTimeout(() => {
              trust.classList.add('animate-in')
            }, cards?.length ? (cards.length * 150) + 200 : 200)
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

  const reasons = [
    {
      title: 'Trusted',
      description: 'Since 2014, we have built long-standing client relationships by consistently delivering high-quality electrical solutions.',
      icon: Award,
    },
    {
      title: 'Authentic',
      description: 'We ensure genuine craftsmanship, certified components, and fully compliant assemblies that meet international standards.',
      icon: CheckCircle2,
    },
    {
      title: 'Committed',
      description: 'From design to after-sales support, we focus on reliability, timely delivery, and long-term partnerships.',
      icon: Handshake,
    },
  ]

  return (
    <section ref={sectionRef} id="why-choose-us" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#EFEFEF] to-white relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-bl from-[#355FA8]/25 to-transparent rounded-full glow-orb blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-gradient-to-tr from-[#355FA8]/20 to-transparent rounded-full glow-orb-slow blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center why-choose-header opacity-0">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#231F20] mb-4">
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Three core values that define our commitment to excellence
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl why-choose-card opacity-0"
            >
              {/* Card */}
              <div className="relative p-10 rounded-2xl border-2 border-[#EFEFEF] bg-white hover:border-[#355FA8] hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-[#355FA8]/20 to-[#1e3a5f]/10 mb-6 group-hover:from-[#355FA8] group-hover:to-[#1e3a5f] group-hover:text-white transition-all duration-300">
                  {reason.icon && <reason.icon className="w-8 h-8 text-[#355FA8] group-hover:text-white" />}
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-[#231F20] text-2xl mb-3 group-hover:text-[#355FA8] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors flex-grow leading-relaxed">
                  {reason.description}
                </p>

                {/* Bottom Gradient Bar */}
                <div className="mt-6 h-1 bg-gradient-to-r from-[#355FA8] to-transparent w-0 group-hover:w-full transition-all duration-500"></div>

                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#355FA8]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="relative overflow-hidden rounded-2xl trust-statement opacity-0">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#231F20] to-[#355FA8] opacity-95"></div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          {/* Content */}
          <div className="relative p-12 text-center">
            <h3 className="font-heading text-3xl font-bold text-white mb-6">
              Built on Trust, Proven by Results
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Every project we undertake reflects our unwavering commitment to quality, reliability, and customer satisfaction. Our track record speaks volumes about our dedication to excellence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
              <div className="p-4 text-center">
                <Counter target={13} duration={2} suffix="+" className="text-3xl sm:text-4xl font-heading font-bold text-white mb-2" />
                <p className="text-white text-xs sm:text-sm">Years of Excellence</p>
              </div>
              <div className="p-4 text-center sm:border-l sm:border-r border-white/20">
                <Counter target={2000} duration={2} suffix="+" className="text-3xl sm:text-4xl font-heading font-bold text-white mb-2" />
                <p className="text-white text-xs sm:text-sm">Successful Projects</p>
              </div>
              <div className="p-4 text-center">
                <Counter target={150} duration={2} suffix="+" className="text-3xl sm:text-4xl font-heading font-bold text-white mb-2" />
                <p className="text-white text-xs sm:text-sm">Global Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
