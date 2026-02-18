'use-client'

import MermaidChart from '@/components/MermaidChart'

export default function OrganizationChart() {
    const chart = `
    graph TD
      DIR[DIRECTOR] --> GM[GENERAL MANAGER]
      GM --> FM[Floor Manager]
      FM --> MI[Mechanical Incharge]
      FM --> EI[Electrical Incharge]
      FM --> ICS[In Charge Store]
      GM --> AF[Accounts & Finance]
      AF --> AO[Account Officer]
      AO --> FO[Finance Officer]
      FO --> OS1[Office Staff]
      GM --> MP[Manager Procurement]
      MP --> II[Import Items]
      MP --> LI[Local Items]
      II --> OS2[Office Staff]
      LI --> OS3[Office Staff]
      GM --> ADM[Administration]
      ADM --> ADMO[Admin Officer]
      ADMO --> OS4[Office Staff]
      GM --> SSM[Sr. Sales Manager]
      SSM --> ME[Marketing Engineer]
      ME --> PE[Proposal Engineer]
      PE --> OS5[Office Staff]
      GM --> MDD[Manager Design & Drafting]
      MDD --> DE[Design Engineer]
      DE --> DFT[Draftsman]
      GM --> MPR[Manager Production]
      MPR --> PEMV[Production Engineer - MV]
      PEMV --> PELV[Production Engineer - LV]
      PELV --> PEHVAC[Production Engineer - HVAC]
      GM --> MTQC[Manager Testing & Quality Control]
      MTQC --> TQE[Testing & QC Engineer]
      TQE --> TS[Testing Supervisor]
      TS --> QCS[QC Supervisor]
      GM --> MASS[Manager After Sales & Services]
      MASS --> SE[Services Engineer]
      SE --> FS[Field Staff]
      FS --> OS6[Office Staff]
      
      style DIR fill:#0056b3,color:#fff
      style GM fill:#0056b3,color:#fff
  `;

    return (
        <section id="chart" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            {/* Glow Orbs Background */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#355FA8]/20 to-transparent rounded-full glow-orb-slow"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-[#355FA8]/10 to-transparent rounded-full glow-orb"></div>

            <div className="max-w-8xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-8 text-center chart-header">
                    <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#231F20] mb-4">
                        Organization Chart
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] mx-auto mb-6"></div>
                </div>

                <MermaidChart chartCode={chart} />
            </div>

        </section>
    )
}