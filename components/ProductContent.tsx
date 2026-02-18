'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Download } from 'lucide-react'

interface Product {
  id: number
  name: string
  slug: string
  shortDescription: string
  image: string
  overview: string
  specifications: Record<string, string>
  applications: string[]
  compliance: string[]
}

export default function ProductContent({ product }: { product: Product }) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const heroSection = sectionRef.current?.querySelector('.product-hero')
          const content = sectionRef.current?.querySelectorAll('.product-section')

          if (heroSection) heroSection.classList.add('animate-in')
          content?.forEach((el, idx) => {
            setTimeout(() => {
              el.classList.add('animate-in')
            }, idx * 150)
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
    <div ref={sectionRef}>
      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#231F20] to-[#1a1a1a] relative overflow-hidden product-hero">
        <div className="max-w-6xl mx-auto relative z-10">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-[#355FA8] hover:text-[#1e3a5f] mb-6 sm:mb-8 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="w-full h-48 sm:h-64 lg:h-96 rounded-2xl bg-[#EFEFEF] flex items-center justify-center border-2 border-[#355FA8]/30 overflow-hidden">
                <img
                  src={product.image || '/placeholder.svg'}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23EFEFEF" width="400" height="400"/%3E%3Ctext x="200" y="200" textAnchor="middle" dy=".3em" fill="%23999" fontSize="24"%3EProduct Image%3C/text%3E%3C/svg%3E'
                  }}
                />
              </div>
            </div>

            {/* Right - Info */}
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">{product.name}</h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed">{product.overview}</p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="/#contact" className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base">
                  <Download className="w-4 sm:w-5 h-4 sm:h-5" />
                  Get Quote
                </a>
                <Link
                  href="/#contact"
                  className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-center text-sm sm:text-base"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white product-section ">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#231F20] mb-8 sm:mb-12 text-center">Technical Specifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="p-6 rounded-lg border-2 border-[#EFEFEF] hover:border-[#355FA8] transition-all duration-300 group">
                <h3 className="font-heading font-bold text-[#231F20] mb-2 group-hover:text-[#355FA8] transition-colors capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="text-gray-600">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#EFEFEF] to-white product-section ">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#231F20] mb-8 sm:mb-12 text-center">Applications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {product.applications.map((app, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-lg bg-white border-l-4 border-[#355FA8] hover:shadow-lg transition-all duration-300">
                <CheckCircle2 className="w-6 h-6 text-[#355FA8] flex-shrink-0 mt-1" />
                <p className="text-gray-700">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#231F20] to-[#1a1a1a] product-section ">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">Standards & Compliance</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {product.compliance.map((standard, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-white/10 border border-white/20 hover:bg-[#355FA8]/20 hover:border-[#355FA8] transition-all duration-300">
                <p className="text-white flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#355FA8] flex-shrink-0" />
                  {standard}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white product-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#231F20] mb-4 sm:mb-6">Ready to Get Started?</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">Contact our team for detailed specifications, pricing, and customized solutions for your project.</p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
            >
              Contact Us
            </Link>
            <Link
              href="/#products"
              className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-[#355FA8] text-[#355FA8] rounded-lg font-semibold hover:bg-[#355FA8]/10 transition-all duration-300 text-sm sm:text-base"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
