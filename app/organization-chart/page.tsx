'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import OrganizationChart from '@/components/OrganizationChart'

export default function OrganizationChartPage() {
    return (
        <div className="min-h-screen bg-background py-20">
            <Navigation />
            <OrganizationChart />
            <Footer />
        </div>
    )
}
