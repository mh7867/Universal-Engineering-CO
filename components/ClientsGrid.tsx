'use client';

import Image from 'next/image';

// Add your client logo image numbers here manually
// Example: [368, 369, 370, 371, 372, 373, 374, 375]
const CLIENT_LOGO_IDS = [368, 370, 372, 374, 376, 378, 380, 382, 384, 386, 388, 390, 392, 394, 396, 398, 400, 402, 404, 406, 408, 410, 412, 414, 416, 418, 420, 508, 511, 513, 515, 517, 519, 521, 523, 525, 527, 529, 531, 533, 535, 537, 539, 541, 543, 545, 547, 549, 551, 553, 555, 557, 576, 577, 579, 580, 582, 584, 586, 588, 590, 592, 594, 596, 598, 600, 602, 604, 606, 608, 610, 612, 614, 616, 618, 620, 622, 624, 626];

export default function ClientsGrid() {
    const logos = CLIENT_LOGO_IDS;

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#231F20] mb-4">
                        Certified & Approved by
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {logos.map((logoId) => (
                        <div
                            key={logoId}
                            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            <Image
                                src={`/clients-grid-imgs/img${logoId}.jpg`}
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
