'use client'

export default function About() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Glow Orbs */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-[#355FA8] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ROW 1: Image (70%) + UNIVERSAL Text (30%) */}
        <div className="hidden lg:grid grid-cols-12 gap-6 mb-12">
          {/* Image - 70% width on desktop */}
          <div className="col-span-9">
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-[24.76vw]">
              <img
                src="/about-img.jpg"
                alt="Laboratory Equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* UNIVERSAL Text - 30% width on desktop, vertical */}
          <div className="col-span-3 flex items-center justify-start h-[24.76vw]">
            <div
              className="text-[#355FA8] font-heading font-medium text-[2.19vw] text-center uppercase"
              style={{
                writingMode: 'vertical-rl',
              }}
            >
              UNIVERSAL
            </div>
          </div>
        </div>

        {/* MOBILE: UNIVERSAL Text on the right of image, rotated 180 deg, centered */}
        <div className="lg:hidden grid grid-cols-12 gap-2 mb-8 items-center">
          {/* Image - takes 70% of width */}
          <div className="col-span-11">
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-64">
              <img
                src="/about-img.jpg"
                alt="Laboratory Equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-start">
            <div
              className="text-[#355FA8] font-heading absolute text-xl uppercase font-medium"
              style={{
                writingMode: 'vertical-rl',
              }}
            >
              UNIVERSAL
            </div>
          </div>
        </div>

        {/* ROW 2: About Text (50%) + Engineering Card (50%) at top */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left: About Section - 50% */}
          <div>
            <div className="space-y-4 lg:space-y-6">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#231F20] mb-4">
                About Us
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] mb-6"></div>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-light">
                Universal Engineering CO. is a specialized design and manufacturing firm EXPERT IN ADVANCED ELECTRICAL DISTRIBUTION SYSTEMS AND CUSTOM PANEL SOLUTIONS for the industrial and commercial sectors. Established in 2012, we maintain a significant presence across vital industries including Civil Construction, Energy (Oil, Gas, Power), Manufacturing, and Agriculture. Our commitment is to deploy innovative modular systems that ensure the safe, reliable, and efficient supply of energy, delivering solutions characterized by superior technical standards and robust operational performance
              </p>
            </div>
          </div>

          {/* Right: Engineering Card - 50%, positioned at top */}
          <div className="w-full -mt-16">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-72 sm:h-80 lg:h-96 w-full bg-blue-900">
              {/* Background Image with Overlay */}
              <img
                src="/about-img.jpg"
                alt="Engineering Lab"
                className="w-full h-full object-cover"
              />
              {/* Blue Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#355FA8]/75 to-[#1e3a5f]/85"></div>

              {/* ENGINEERING Text - positioned at top center */}
              <div className="absolute inset-0 flex items-start justify-center md:pt-[1.146vw] pt-[4.583vw]">
                <h3 className="font-heading text-2xl lg:text-4xl uppercase tracking-widest text-white text-center px-4">
                  Engineering
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
