import React from 'react'
import Image from 'next/image'

export default function PartnerComponentPage() {
    const partners = [
        {
            id: 1,
            name: 'Partner 1',
            logo: '/assets/img/icon_image/facebook.jpg',
            description:
                'Partner 1 is a global leader in educational technology, providing innovative tools that help enhance student engagement and learning outcomes.',
        },
        {
            id: 2,
            name: 'Partner 2',
            logo: '/assets/img/icon_image/instagram.jpg',
            description:
                'Partner 2 is a renowned publishing house that offers a wide range of educational resources, textbooks, and e-learning materials.',
        },
        {
            id: 3,
            name: 'Partner 3',
            logo: '/assets/img/icon_image/tiktok.png',
            description:
                'Partner 3 provides career development services, internship programs, and job placement opportunities for students and graduates.',
        },
        {
            id: 4,
            name: 'Partner 4',
            logo: '/assets/img/icon_image/trip_advisor.png',
            description:
                'Partner 4 offers state-of-the-art laboratory equipment and supplies for our science programs, helping students gain hands-on experience in the lab.',
        },
        {
            id: 5,
            name: 'Partner 5',
            logo: '/assets/img/icon_image/twitter.png',
            description:
                'Partner 5 offers state-of-the-art laboratory equipment and supplies for our science programs, helping students gain hands-on experience in the lab.',
        },
        {
            id: 6,
            name: 'Partner 6',
            logo: '/assets/img/icon_image/youtube.jpg',
            description:
                'Partner 6 offers state-of-the-art laboratory equipment and supplies for our science programs, helping students gain hands-on experience in the lab.',
        },
    ]

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-10">
            {/* Title Section */}
            <section className="text-center">
                <h1 className="text-4xl font-extrabold text-indigo-600 mb-6">Our Esteemed Partners</h1>
                <p className="text-lg text-gray-600">
                    We are proud to collaborate with these organizations to enhance the educational experience and provide valuable resources for our students.
                </p>
            </section>

            {/* Partners Grid Section */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
                {partners.map((partner) => (
                    <div
                        key={partner.id}
                        className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        <div className="mb-4">
                            <Image
                                src={partner.logo}
                                alt={`${partner.name} Logo`}
                                width={180}
                                height={100}
                                objectFit="contain"
                                className="mx-auto rounded-full transition-all duration-300 ease-in-out"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{partner.name}</h3>
                        <p className="text-gray-700">{partner.description}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}
