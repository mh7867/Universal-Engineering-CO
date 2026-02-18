'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Globe, Plane, Star } from 'lucide-react'
import Counter from './Counter'

const GlobeMap = dynamic(() => import('./GlobeMap'), { ssr: false })

export default function GlobalPresence() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add animation classes
          const header = sectionRef.current?.querySelector('.global-header')
          const boxes = sectionRef.current?.querySelectorAll('.achievement-box')
          const visual = sectionRef.current?.querySelector('.global-visual')
          const statBoxes = sectionRef.current?.querySelectorAll('.global-stat-box')

          if (header) header.classList.add('animate-in')
          boxes?.forEach((box, idx) => {
            setTimeout(() => {
              box.classList.add('animate-in')
            }, idx * 150)
          })
          if (visual) {
            setTimeout(() => {
              visual.classList.add('animate-in')
            }, 300)
          }
          statBoxes?.forEach((box, idx) => {
            setTimeout(() => {
              box.classList.add('animate-in')
            }, 600 + idx * 150)
          })

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
    <section ref={sectionRef} id="global" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#231F20] via-[#1a1a1a] to-[#231F20] relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-bl from-[#355FA8]/30 to-transparent rounded-full glow-orb-slow blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-tr from-[#355FA8]/20 to-transparent rounded-full glow-orb blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center global-header opacity-0">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Powering Beyond Borders
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] mx-auto mb-6"></div>
          <p className="text-white/80 text-lg">
            Global Presence & International Excellence
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <div className="space-y-6">
              {/* Achievement Box 1 */}
              <div className="group p-6 rounded-xl border border-white/20 bg-white/5 hover:bg-[#355FA8]/20 hover:border-[#355FA8] transition-all duration-300 achievement-box opacity-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#355FA8] to-[#1e3a5f] flex items-center justify-center text-white flex-shrink-0">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-lg mb-2">International Reach</h3>
                    <p className="text-white/70">
                      Successfully exported advanced electrical panels to West Africa, including Guinea, marking major milestones in our global expansion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievement Box 2 */}
              <div className="group p-6 rounded-xl border border-white/20 bg-white/5 hover:bg-[#355FA8]/20 hover:border-[#355FA8] transition-all duration-300 achievement-box opacity-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#355FA8] to-[#1e3a5f] flex items-center justify-center text-white flex-shrink-0">
                    <Plane className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-lg mb-2">From Karachi to West Africa</h3>
                    <p className="text-white/70">
                      Shipped LV, PFI, and MCC panels across continents, demonstrating our commitment to quality and international trust.
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievement Box 3 */}
              <div className="group p-6 rounded-xl border border-white/20 bg-white/5 hover:bg-[#355FA8]/20 hover:border-[#355FA8] transition-all duration-300 achievement-box opacity-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#355FA8] to-[#1e3a5f] flex items-center justify-center text-white flex-shrink-0">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-lg mb-2">Reliability & Trust</h3>
                    <p className="text-white/70">
                      This achievement reflects our dedication to technical excellence, reliability, and building international trust with every client.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Visual Element */}
          <div className="relative global-visual opacity-0">
            <GlobeMap />
          </div>
        </div>
      </div>
    </section>
  )
}
