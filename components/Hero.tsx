'use client'

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen mt-20 overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-02-01%20at%2012.39.30%20AM-wdAjXvtlyOBmC9aWwx0Tcdu9nn1LSe.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#231F20]/90 via-[#231F20]/70 to-transparent"></div>
      </div>

      {/* Glow Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#355FA8] to-[#1e3a5f] rounded-full glow-orb opacity-20"></div>
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-gradient-to-tl from-[#355FA8]/40 to-transparent rounded-full glow-orb-slow opacity-30"></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center z-10 space-y-6 animate-fadeInUp">
          {/* Tagline */}
          <div className="mb-6 inline-block opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="px-4 py-2 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] text-white rounded-full text-sm font-medium">
              Engineering Excellence Since 2012
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Universal Engineering CO.
          </h1>

          {/* Subheading */}
          <p className="text-2xl sm:text-3xl text-white/90 mb-4 font-semibold opacity-0 animate-fadeInUp" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            MV & LV Switchgear Panel Manufacturer
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-white/80 text-lg font-medium opacity-0 animate-fadeInUp" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <span className="flex items-center gap-2">
              <span className="text-[#355FA8]">✓</span> Trusted
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#355FA8]">✓</span> Authentic
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#355FA8]">✓</span> Committed
            </span>
          </div>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-fadeInUp" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <a href="/#contact" className="px-8 py-4 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-[#355FA8]/50 transition-all duration-300 transform hover:scale-105">
              Get a Quote
            </a>
            <a href="/#about" className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
