'use client';

import Image from 'next/image';


const CLIENT_LOGO_IDS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75, 76,77,78]; 

export default function ClientsGrid() {
    const logos = CLIENT_LOGO_IDS;

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#231F20] mb-4">
                        Clients Protfolio
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] mx-auto mb-6"></div>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {logos.map((logoId) => (
                        <div
                            key={logoId}
                            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            <Image
                                src={`/clients-grid-imgs/img${logoId}.svg`}
                                alt={`Client logo ${logoId}`}
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
