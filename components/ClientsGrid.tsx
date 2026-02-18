'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ClientLogo {
    id: number;
    loaded: boolean;
}

export default function ClientsGrid() {
    const [logos, setLogos] = useState<ClientLogo[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadedLogos: ClientLogo[] = [];
        let currentId = 368;

        // Try to load images - we'll preload to check if they exist
        const preloadImages = async () => {
            // We'll attempt to load up to 50 images starting from 368
            for (let i = 0; i < 50; i++) {
                const imageId = currentId + i;
                const imagePath = `/clients-grid-imgs/img${imageId}.jpg`;

                try {
                    // Create an image to test if it loads
                    const img = new window.Image();
                    img.src = imagePath;

                    await new Promise((resolve, reject) => {
                        img.onload = () => {
                            loadedLogos.push({ id: imageId, loaded: true });
                            resolve(true);
                        };
                        img.onerror = () => {
                            reject(new Error(`Image not found: ${imageId}`));
                        };

                        // Set a timeout in case image loading hangs
                        setTimeout(() => reject(new Error('Image load timeout')), 5000);
                    }).catch(() => {
                        // Skip this image if it doesn't load
                    });
                } catch (error) {
                    // Skip this image
                }
            }

            setLogos(loadedLogos);
            setIsLoading(false);
        };

        preloadImages();
    }, []);

    if (isLoading) {
        return (
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="mb-16 text-center">
                        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#231F20] mb-4">
                            Clients Portfolio
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] mx-auto mb-6"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {Array.from({ length: 12 }).map((_, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm overflow-hidden"
                            >
                                <div className="w-full h-16 rounded skeleton-loading" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (logos.length === 0) {
        return (
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="mb-16 text-center">
                        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#231F20] mb-4">
                            Clients Portfolio
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] mx-auto mb-6"></div>
                    </div>
                    <div className="text-center text-gray-500">No client logos found</div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#231F20] mb-4">
                        Clients Portfolio
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] mx-auto mb-6"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {logos.map((logo) => (
                        <div
                            key={logo.id}
                            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            <Image
                                src={`/clients-grid-imgs/img${logo.id}.jpg`}
                                alt={`Client logo ${logo.id}`}
                                width={120}
                                height={60}
                                className="object-contain max-w-full h-auto"
                                priority={false}
                            />
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-600 mt-8 text-sm">
                    {logos.length} companies trust our platform
                </p>
            </div>
        </section>
    );
}
