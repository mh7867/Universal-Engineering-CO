'use client'

import { MapPin, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import products from '@/public/data/products.json'


export default function Footer() {
  return (
    <footer className="bg-[#231F20] text-white relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#355FA8]/15 to-transparent rounded-full glow-orb-slow blur-3xl"></div>
      <div className="absolute -bottom-20 right-20 w-72 h-72 bg-gradient-to-tl from-[#355FA8]/10 to-transparent rounded-full glow-orb blur-3xl"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div>
              <div className="mb-6 flex items-center">
                <img src="/ue-logo-white.png" alt="Universal Engineering" className="h-16 w-auto object-contain" />
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Specialized in manufacturing advanced electrical distribution systems and custom-built panel solutions.
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-heading font-bold text-white mb-6">Products</h4>
              <ul className="space-y-3 text-white/70 text-sm">
                {products.slice(0, 4).map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={`/products/${product.slug}`}
                      className="hover:text-[#355FA8] transition-colors"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-heading font-bold text-white mb-6">Company</h4>
              <ul className="space-y-3 text-white/70 text-sm">
                <li><a href="/#about" className="hover:text-[#355FA8] transition-colors">About Us</a></li>
                <li><a href="/#leadership" className="hover:text-[#355FA8] transition-colors">Our Team</a></li>
                <li><a href="/#mission-vision" className="hover:text-[#355FA8] transition-colors">Mission & Vision</a></li>
                <li><a href="/#company-history" className="hover:text-[#355FA8] transition-colors">Company history</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-bold text-white mb-6">Contact</h4>
              <ul className="space-y-3 text-white/70 text-sm">

                <li className="flex items-start gap-2">
                  <span><MapPin className="text-white text-sm" /></span>
                  <span className="flex-col flex gap-2">
                    <span className="block"><b>Factory office:</b> Plot # 1093, sector 32-A korangi industrial Area,Karachi</span>
                    <span className="block"><b>DHA office:</b> Universal Apartment,plot# 51-C , 11th com. St phase 2 ( ext) DHA, Karachi</span>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span><Mail className="text-white text-sm" /></span>
                  <span><a href="mailto:info@unieng.com.pk" className="hover:text-[#355FA8] transition-colors">info@unieng.com.pk</a></span>
                </li>
                <li className="flex items-start gap-2">
                  <span><Phone className="text-white text-sm" /></span>
                  <span className="flex-col flex gap-2">
                    <a href="tel:0300-2342395" className="hover:text-[#355FA8] transition-colors">0300-2342395</a>
                    <a href="tel:0305-2311114" className="hover:text-[#355FA8] transition-colors">0305-2311114</a>
                    <a href="tel:0332-2854740" className="hover:text-[#355FA8] transition-colors">0332-2854740</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#355FA8]/50 to-transparent mb-12"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-white/60 text-sm text-center md:text-left mb-6 md:mb-0">
              © 2024 Universal Engineering. All Rights Reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-6">
              {[
                { name: 'LinkedIn', icon: '🔗' },
                { name: 'Twitter', icon: '𝕏' },
                { name: 'Facebook', icon: 'f' },
                { name: 'Instagram', icon: '📷' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-lg border border-white/30 flex items-center justify-center text-white/70 hover:border-[#355FA8] hover:bg-[#355FA8]/20 hover:text-[#355FA8] transition-all duration-300"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-white/60 text-sm mt-6 md:mt-0">
              <a href="#" className="hover:text-[#355FA8] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#355FA8] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Global Footer Message */}
        <div className="bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-white font-medium">
              Serving Globally | Engineering Excellence | Trusted Worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
