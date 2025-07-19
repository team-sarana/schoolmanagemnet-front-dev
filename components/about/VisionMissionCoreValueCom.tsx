"use client"
import React from 'react'
import Image from 'next/image'
import RelatedMenu from './RelatedMenu'

export default function VisionMissionCoreValueCom() {
    return (
        <>
            <div className='section-padding'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-9">
                            {/* Vision Section */}
                            <section className='mb-3'>
                                <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Vision</h2>
                                <p className="text-gray-700 text-lg">
                                    To be a center of excellence in education, inspiring students to become global leaders, innovators, and lifelong learners.
                                </p>
                            </section>

                            {/* Mission Section */}
                            <section className="mb-3">
                                <h2 className="text-3xl font-bold text-green-600 mb-4">Our Mission</h2>
                                <p className="text-gray-700 text-lg">
                                    We strive to provide a nurturing and challenging environment that fosters intellectual growth, character development, and a commitment to community service.
                                </p>
                                <ul className="list-disc text-gray-700 mt-4">
                                    <li>Encourage critical thinking and creativity</li>
                                    <li>Promote ethical leadership and responsibility</li>
                                    <li>Ensure academic excellence and innovation</li>
                                    <li>Foster inclusivity and respect for diversity</li>
                                </ul>
                            </section>

                            {/* Core Values Section */}
                            <section className="mb-3">
                                <h2 className="text-3xl font-bold text-yellow-600 mb-4 text-center">Our Core Values</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="p-4 bg-white rounded-lg shadow">
                                        <h2 className="text-xl font-semibold text-blue-700">Excellence</h2>
                                        <p className="text-gray-700">We aim for the highest academic and personal standards.</p>
                                    </div>
                                    <div className="p-4 bg-white rounded-lg shadow">
                                        <h2 className="text-xl font-semibold text-green-700">Integrity</h2>
                                        <p className="text-gray-700">Honesty and responsibility guide all our actions.</p>
                                    </div>
                                    <div className="p-4 bg-white rounded-lg shadow">
                                        <h2 className="text-xl font-semibold text-indigo-700">Respect</h2>
                                        <p className="text-gray-700">We value diversity and treat everyone with kindness.</p>
                                    </div>
                                    <div className="p-4 bg-white rounded-lg shadow">
                                        <h2 className="text-xl font-semibold text-red-700">Innovation</h2>
                                        <p className="text-gray-700">We embrace new ideas and creative problem-solving.</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className='col-md-3'>
                            <RelatedMenu />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
