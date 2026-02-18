'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)

  const navItems = [
    { label: 'Home', href: '/#home' },
    {
      label: 'About Us',
      href: '/#about',
      children: [
        { label: 'Mission & Vision', href: '/#mission-vision' },
        { label: 'Company History', href: '/#company-history' },
        { label: 'Certified and Approved by', href: '/#clients' },
        { label: 'Organizational Chart', href: '/organization-chart' },
      ],
    },
    { label: 'Products', href: '/#products' },
    { label: 'Contact', href: '/#contact' },
  ];


  return (
    <nav className="fixed top-0 w-full z-20 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/#home" className="flex items-center space-x-2">
            <img src="/ue-logo.svg" alt="Universal Engineering" className="h-8 sm:h-10 lg:h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative cursor-pointer group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 text-[#231F20] hover:text-[#355FA8] transition-colors font-medium text-sm">
                  {item.label}
                  {item.children && (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </button>

                {/* Desktop Dropdown */}
                {item.children && (
                  <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-[#231F20] hover:bg-[#EFEFEF] hover:text-[#355FA8] transition-colors text-sm"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a href="/#contact" className="hidden sm:inline-block px-6 py-2.5 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
            Get a Quote
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6 text-[#231F20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <a
                    href={item.href}
                    className="block flex-1 px-4 py-2 text-[#231F20] hover:bg-[#EFEFEF] rounded-lg transition-colors text-sm font-medium"
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <button
                      onClick={() =>
                        setOpenMobileDropdown(
                          openMobileDropdown === item.label ? null : item.label
                        )
                      }
                      className="px-4 py-2 text-[#231F20]"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${openMobileDropdown === item.label ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.children && openMobileDropdown === item.label && (
                  <div className="pl-4 space-y-1 bg-[#EFEFEF] rounded-lg mx-2 my-2 py-2">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-[#231F20] hover:text-[#355FA8] text-sm rounded transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="/#contact" className="w-full px-4 py-2 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] text-white rounded-lg font-medium mt-4">
              Get a Quote
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
