'use client'

import React from "react"

import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const header = sectionRef.current?.querySelector('.contact-header')
          const leftContent = sectionRef.current?.querySelector('.contact-left')
          const rightContent = sectionRef.current?.querySelector('.contact-right')

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[#EFEFEF] to-white relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute -top-20 right-1/4 w-96 h-96 bg-gradient-to-b from-[#355FA8]/15 to-transparent rounded-full glow-orb-slow blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center contact-header opacity-0">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#231F20] mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions about our products? Our team is ready to help you find the perfect solution for your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="contact-left opacity-0">
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="p-6 rounded-xl border-2 border-[#EFEFEF] bg-white hover:border-[#355FA8] hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#355FA8] to-[#1e3a5f] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[#231F20] mb-2">Phone</h3>
                    <div className="space-y-1">
                      <a href="tel:0300-2342395" className="text-gray-600 hover:text-[#355FA8] transition-colors block">0300-2342395</a>
                      <a href="tel:0305-2311114" className="text-gray-600 hover:text-[#355FA8] transition-colors block">0305-2311114</a>
                      <a href="tel:0332-2854740" className="text-gray-600 hover:text-[#355FA8] transition-colors block">0332-2854740</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-6 rounded-xl border-2 border-[#EFEFEF] bg-white hover:border-[#355FA8] hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#355FA8] to-[#1e3a5f] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[#231F20] mb-1">Email</h3>
                    <a href="mailto:info@unieng.com.pk" className="text-gray-600 hover:text-[#355FA8] transition-colors">info@unieng.com.pk</a>
                    <p className="text-gray-600 text-sm mt-2">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="p-6 rounded-xl border-2 border-[#EFEFEF] bg-white hover:border-[#355FA8] hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#355FA8] to-[#1e3a5f] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[#231F20] mb-2">Address</h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-600"><b>Factory Office:</b> Plot # 1093, Sector 32-A Korangi Industrial Area, Karachi</p>
                      <p className="text-gray-600"><b>DHA Office:</b> Universal Apartment, Plot # 51-C, 11th Com. St Phase 2 (ext) DHA, Karachi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-6 rounded-xl border-2 border-[#EFEFEF] bg-white hover:border-[#355FA8] hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#355FA8] to-[#1e3a5f] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[#231F20] mb-1">Business Hours</h3>
                    <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="contact-right opacity-0">
            <div className="p-8 rounded-2xl border-2 border-[#EFEFEF] bg-gradient-to-br from-white to-[#EFEFEF]/50 hover:border-[#355FA8] transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-[#231F20] font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#EFEFEF] bg-white focus:border-[#355FA8] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-[#231F20] font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#EFEFEF] bg-white focus:border-[#355FA8] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-[#231F20] font-semibold mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#EFEFEF] bg-white focus:border-[#355FA8] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>

              {/* Disclaimer */}
              <p className="text-gray-500 text-xs mt-4 text-center">
                We respect your privacy. Your information will only be used to contact you about your inquiry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
