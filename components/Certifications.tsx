'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null)

  const certifications = [
    { name: 'Fastest Growing Brand', image: '/certificates/certificate-9.jpeg' },
    { name: 'ISO 9001:2015', image: '/certificates/certificate-1.jpg' },
    { name: 'IEC Compliance', image: '/certificates/certificate-2.png' },
    { name: 'CE Certification', image: '/certificates/certificate-3.jpg' },
    { name: 'Safety Standards', image: '/certificates/certificate-4.jpg' },
    { name: 'ISO 9001:2015', image: '/certificates/certificate-5.jpg' },
    { name: 'IEC Compliance', image: '/certificates/certificate-6.jpg' },
    { name: 'CE Certification', image: '/certificates/certificate-7.jpg' }
  ]

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#EFEFEF] to-white relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-bl from-[#355FA8]/20 to-transparent rounded-full glow-orb-slow"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-[#355FA8]/15 to-transparent rounded-full glow-orb"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#231F20] mb-4">
            Certifications & Compliance
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            All products and processes comply with international electrical and safety standards
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCert(cert)}
              className="group p-4 rounded-xl border-2 border-[#EFEFEF] bg-white hover:border-[#355FA8] hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center cursor-pointer"
            >
              {/* Certificate Image */}
              <div className="w-full h-56 mb-4 rounded-lg overflow-hidden bg-[#EFEFEF] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23EFEFEF" width="100" height="100"/%3E%3Ctext x="50" y="50" textAnchor="middle" dy=".3em" fill="%23999" fontSize="12"%3E📜%3C/text%3E%3C/svg%3E'
                  }}
                />
              </div>



              {/* Badge */}
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#355FA8]/20 to-[#1e3a5f]/20 text-[#355FA8] text-xs font-semibold rounded-full group-hover:from-[#355FA8] group-hover:to-[#1e3a5f] group-hover:text-white transition-all duration-300">
                Click to View
              </div>

              {/* Gradient Line */}
              <div className="mt-4 w-0 h-1 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] mx-auto group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full hover:bg-[#EFEFEF] transition-colors duration-300 shadow-lg"
              >
                <X className="w-6 h-6 text-[#231F20]" />
              </button>

              {/* Certificate Image */}
              <div className="w-full bg-[#EFEFEF] flex items-center justify-center p-8">
                <img
                  src={selectedCert.image || "/placeholder.svg"}
                  alt={selectedCert.name}
                  className="w-full h-auto max-h-[70vh] object-contain"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23EFEFEF" width="100" height="100"/%3E%3Ctext x="50" y="50" textAnchor="middle" dy=".3em" fill="%23999" fontSize="12"%3E📜%3C/text%3E%3C/svg%3E'
                  }}
                />
              </div>

              {/* Info Section */}
              <div className="p-8 text-center">

                <p className="text-gray-600 mb-6">
                  This certification validates our commitment to international standards and quality assurance.
                </p>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-6 py-2 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Compliance Statement */}
        <div className="relative overflow-hidden rounded-2xl">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] opacity-95"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          {/* Content */}
          <div className="relative p-12 text-center text-white">
            <h3 className="font-heading text-3xl font-bold mb-4">
              Quality Assurance & Standards
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Our commitment to quality extends beyond manufacturing. Every panel undergoes rigorous testing, documentation, and certification to ensure it meets or exceeds international standards for safety, performance, and reliability.
            </p>
            <button className="px-10 py-3 bg-white text-[#355FA8] rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Download Certification Documents
            </button>
          </div>
        </div>

        {/* Standards List */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg border-2 border-[#EFEFEF] hover:border-[#355FA8] transition-all duration-300 group">
            <h4 className="font-heading font-bold text-[#231F20] mb-4 text-lg group-hover:text-[#355FA8] transition-colors">
              International Standards
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#355FA8]"></span>
                <span>ISO 9001:2015 Quality Management</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#355FA8]"></span>
                <span>IEC 61439 Low Voltage Switchgear</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#355FA8]"></span>
                <span>IEC 62271 Medium Voltage Switchgear</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#355FA8]"></span>
                <span>CE Conformity Assessment</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-lg border-2 border-[#EFEFEF] hover:border-[#355FA8] transition-all duration-300 group">
            <h4 className="font-heading font-bold text-[#231F20] mb-4 text-lg group-hover:text-[#355FA8] transition-colors">
              Safety & Performance
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#355FA8]"></span>
                <span>Electrical Safety Compliance</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#355FA8]"></span>
                <span>Environmental Impact Assessment</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#355FA8]"></span>
                <span>Rigorous Testing Procedures</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
