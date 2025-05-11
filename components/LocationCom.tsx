"use client"
import React from 'react'
import Image from 'next/image'

export default function LocationCom() {
    return (
        <>
            <div className="max-w-4xl mx-auto p-6 space-y-10">
                {/* Location Section */}
                <section className="bg-blue-100 p-6 rounded-xl shadow-md text-center">
                    <h1 className="text-3xl font-bold text-blue-600 mb-4">Our Location</h1>
                    <p className="text-gray-700 text-lg">Visit our school at:</p>
                    <p className="text-gray-800 font-semibold mt-2">
                        ABC International School
                        123 Education Lane, Cityville, State, Country
                        ZIP Code: 123456
                    </p>
                </section>

                {/* Google Maps Embed */}
                <section className="bg-white p-6 rounded-xl shadow-md text-center">
                    <h1 className="text-3xl font-bold text-green-600 mb-4">Find Us on Google Maps</h1>
                    <div className="w-full h-72">
                        <iframe
                            className="w-full h-full rounded-lg shadow-md"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.4077383611625!2d103.86107797367873!3d13.352043706426102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3110170025c9f06d%3A0x6d29b40b6e9e0c6c!2sSITS%20Information%20Technology%20School!5e1!3m2!1sen!2skh!4v1743217691779!5m2!1sen!2skh"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
                    <h1 className="text-3xl font-bold text-indigo-600 mb-4">Contact Us</h1>
                    <p className="text-gray-700">
                        <strong>Phone:</strong> +1 234 567 890
                    </p>
                    <p className="text-gray-700">
                        <strong>Email:</strong> contact@abcschool.edu
                    </p>
                    <p className="text-gray-700">
                        <strong>Office Hours:</strong> Mon - Fri, 8:00 AM - 4:00 PM
                    </p>
                </section>

                {/* Directions */}
                <section className="bg-yellow-100 p-6 rounded-xl shadow-md">
                    <h1 className="text-3xl font-bold text-yellow-600 mb-4 text-center">How to Reach Us</h1>
                    <ul className="list-disc text-gray-700 text-left max-w-lg mx-auto space-y-2">
                        <li><strong>By Car:</strong> Parking available on campus.</li>
                        <li><strong>By Bus:</strong> Route 10, 15, and 20 stop near the school.</li>
                        <li><strong>By Train:</strong> Nearest station: Cityville Central (10 mins walk).</li>
                        <li><strong>By Bicycle:</strong> Bike racks available at the entrance.</li>
                    </ul>
                </section>
            </div>
        </>
    )
}
