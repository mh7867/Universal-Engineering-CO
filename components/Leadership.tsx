'use client'

export default function Leadership() {
  const leaders = [
    {
      name: 'Kashif Khatri',
      title: 'Co-founder & Director',
      quote: 'Powering progress through precision, passion, and purpose.',
      image: '/teams/kashif-khatri.jpg',
    },
    {
      name: 'Nasir Kandakirya',
      title: 'Co-founder & Director',
      quote: 'Engineering trust through innovation and quality.',
      image: '/teams/nasir-kandakirya.jpg',
    },
    {
      name: 'Farrukh Khatri',
      title: 'General Manager',
      quote: 'Focus • Discipline • Delivery',
      image: '/teams/farrukh-khatri.jpg',
    },
  ]

  return (
    <section id="leadership" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-bl from-[#355FA8]/20 to-transparent rounded-full glow-orb-slow"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-[#355FA8]/15 to-transparent rounded-full glow-orb"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#231F20] mb-4">
            Our Leadership
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            The visionary minds behind Universal Engineering
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Card Background */}
              <div className="relative p-8 rounded-2xl border-2 border-[#EFEFEF] bg-gradient-to-br from-white to-[#EFEFEF]/30 hover:border-[#355FA8] transition-all duration-300 h-full flex flex-col items-center text-center">
                {/* Top Gradient Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] transform -translate-y-1 group-hover:translate-y-0 transition-transform duration-300"></div>

                {/* Avatar */}
                <div className="w-60 h-60 rounded-full bg-gradient-to-br from-[#355FA8] to-[#1e3a5f] flex items-center justify-center text-white font-heading font-bold text-2xl mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg overflow-hidden border-4 border-[#EFEFEF] group-hover:border-[#355FA8] mx-auto">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const initials = leader.name.split(' ').map(n => n[0]).join('')
                      const canvas = document.createElement('canvas')
                      canvas.width = 96
                      canvas.height = 96
                      const ctx = canvas.getContext('2d')
                      if (ctx) {
                        ctx.fillStyle = '#355FA8'
                        ctx.fillRect(0, 0, 96, 96)
                        ctx.fillStyle = 'white'
                        ctx.font = 'bold 24px Arial'
                        ctx.textAlign = 'center'
                        ctx.textBaseline = 'middle'
                        ctx.fillText(initials, 48, 48)
                        e.currentTarget.src = canvas.toDataURL()
                      }
                    }}
                  />
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-[#231F20] text-xl mb-1">
                  {leader.name}
                </h3>
                <p className="text-[#355FA8] font-semibold text-sm mb-4">
                  {leader.title}
                </p>

                {/* Quote */}
                <div className="relative">
                  <svg className="w-8 h-8 text-[#355FA8]/20 mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 21c3-1 7-4 7-8s-1-3-2-3-2.6.3-4 2c-.9 1.6-1.8 3.6-2 5.1 0 2.3.7 4 2 4z" />
                  </svg>
                  <p className="text-gray-600 italic text-sm leading-relaxed">
                    "{leader.quote}"
                  </p>
                </div>

                {/* Hover Effect Background */}
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#355FA8]/10 to-transparent rounded-full transform translate-x-20 translate-y-20 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
