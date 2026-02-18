'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import PartnerShowcase from '@/components/PartnerShowcase'
import About from '@/components/About'
import MissionAndVision from '@/components/MissionAndVision'
import Products from '@/components/Products'
import GlobalPresence from '@/components/GlobalPresence'
import Leadership from '@/components/Leadership'
import WhyChooseUs from '@/components/WhyChooseUs'
import Clients from '@/components/Clients'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <PartnerShowcase />
      <About />
      <MissionAndVision />
      <Products />
      <GlobalPresence />
      <Leadership />
      <WhyChooseUs />
      <Clients />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}
