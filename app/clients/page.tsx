'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ClientsGrid from '@/components/ClientsGrid'

export default function ClientsGridPage() {
    return (
        <div className="min-h-screen bg-background py-20">
            <Navigation />
            <ClientsGrid />
            <Footer />
        </div>
    )
}
