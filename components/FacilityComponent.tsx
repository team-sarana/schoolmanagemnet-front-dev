"use client"
import React from 'react'
import Image from 'next/image'

export default function FacilityComponent() {
    return (
        <>
            <div className="max-w-5xl mx-auto p-6 space-y-10">
                {/* Facilities Section */}
                <section className="bg-blue-100 p-6 rounded-xl shadow-md text-center">
                    <h1 className="text-3xl font-bold text-blue-600 mb-4">Our Facilities</h1>
                    <p className="text-gray-700 text-lg">Our school is equipped with state-of-the-art facilities to provide a comprehensive and enriching educational experience.</p>
                </section>

                {/* Classrooms */}
                <section className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Thai Language Room</h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
                            <Image
                                src="/assets/img/course/course1.jpg"
                                alt="Classroom"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <div className="md:w-1/2 text-gray-700 ms-3">
                            <p>Our classrooms are equipped with interactive smart boards, comfortable seating, and modern educational tools to enhance the learning experience for students.</p>
                        </div>
                    </div>
                </section>

                {/* Science Labs */}
                <section className="bg-gray-100 p-6 rounded-xl shadow-md">
                    <h2 className="text-2xl font-semibold text-green-600 mb-4">Computer Room</h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
                            <Image
                                src="/assets/img/course/course2.jpg"
                                alt="Science Lab"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <div className="md:w-1/2 text-gray-700 ms-3">
                            <p>Our science labs are fully equipped with all the necessary tools for conducting experiments and practicals, helping students grasp scientific concepts through hands-on learning.</p>
                        </div>
                    </div>
                </section>

                {/* Library */}
                <section className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-2xl font-semibold text-red-600 mb-4">Chinese Language Room</h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
                            <Image
                                src="/assets/img/course/course3.jpg"
                                alt="Library"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <div className="md:w-1/2 text-gray-700 ms-3">
                            <p>Our library offers a vast collection of books, research materials, and digital resources to support academic growth and foster a love for reading.</p>
                        </div>
                    </div>
                </section>

                {/* Sports Facilities */}
                <section className="bg-gray-100 p-6 rounded-xl shadow-md">
                    <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Design Room</h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
                            <Image
                                src="/assets/img/course/course4.jpg"
                                alt="Sports Facilities"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <div className="md:w-1/2 text-gray-700 ms-3">
                            <p>Our school provides excellent sports facilities, including indoor courts, playgrounds, and fields for physical education and extracurricular activities.</p>
                        </div>
                    </div>
                </section>
            </div>
        </>


    )
}
