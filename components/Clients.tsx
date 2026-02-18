'use client'
import Link from 'next/link'

export default function Clients() {
  const clients = [
    { name: 'Client 01', img: '/clients-logos/fast-logo.jpg' },
    { name: 'Client 02', img: '/clients-logos/gov-sidh-logo.png' },
    { name: 'Client 03', img: '/clients-logos/iso-logo.jpeg' },
    { name: 'Client 04', img: '/clients-logos/kcci-logo.png' },
    { name: 'Client 05', img: '/clients-logos/nespak.png' },
    { name: 'Client 06', img: '/clients-logos/pak-nav-logo.png' },
    { name: 'Client 07', img: '/clients-logos/pakistan-army-emblem.png' },
    { name: 'Client 08', img: '/clients-logos/pec-logo.png' },
    { name: 'Client 09', img: '/clients-logos/pra-logo.png' },
  ]

  return (
    <section id="clients" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-[#355FA8]/20 to-transparent rounded-full glow-orb-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#355FA8]/15 to-transparent rounded-full glow-orb"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#231F20] mb-4">
            Certified & Approved by
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            We partner with leading industrial and commercial organizations
          </p>
        </div>

        {/* Marquee Slider */}
        <div className="relative h-40 flex items-center overflow-hidden rounded-xl bg-white border-2 border-[#EFEFEF] group mb-16">
          {/* Marquee Container */}
          <div className="flex whitespace-nowrap marquee">
            {[...clients, ...clients, ...clients].map((client, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-8 h-full flex items-center justify-center min-w-max"
              >
                <div className="group/item h-32 w-auto rounded-xl border-2 overflow-hidden border-[#EFEFEF] bg-white hover:border-[#355FA8] hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer transform hover:-translate-y-2">
                  <img src={client.img} alt={client.name} className="w-full h-full object-contain" />
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-20"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-20"></div>
        </div>


        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Join our growing network of satisfied clients worldwide
          </p>
          <Link href="/clients" className="px-10 py-4 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-[#355FA8]/50 transition-all duration-300 transform hover:scale-105">
            See Our Full Client Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
