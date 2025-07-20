'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Menu links array
const links = [
    ['/', 'Home'],
    ['/about', 'About'],
    ['/course', 'Course'],
    ['/facility', 'Facility'],
    ['/partner', 'Partner'],
    ['/news', 'News'],
    ['/gallery', 'Gallery'],
    ['/contact', 'Contact'],
    ['/faq', 'FAQ'],
    ['/privacy-policy', 'Privacy Policy'],
    ['/', 'Terms & Conditions'],
]

export default function Footer() {
    const [showQR1Popup, setShowQR1Popup] = useState(false)
    const [showQR2Popup, setShowQR2Popup] = useState(false)

    return (
        <>
            {/* Main Footer */}
            <div className="container-fluid bg_footer text-light py-4 my-2 mb-0 wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row">
                        {/* Logo Section */}
                        <div className="col-lg-3 mb-4 mb-lg-0 text-center">
                            <div className="flex justify-center">
                                <Image src="/assets/img/logo.png" width={100} height={100} alt="SITS Logo" />
                            </div>
                            <h5 className="text-white mt-2">SITS Information Technology School</h5>
                        </div>

                        {/* Helpful Links */}
                        <div className="col-lg-3 mb-4 mb-lg-0">
                            <h4 className="text-white mb-3">Helpful Links</h4>
                            <ul className="list-unstyled menu_footer menu-columns">
                                {links.map(([href, label], index) => (
                                    <li key={index}>
                                        <Link href={href}>{label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Open Hours */}
                        <div className="col-lg-3 mb-4 mb-lg-0">
                            <h4 className="text-white mb-3">Open Hours</h4>
                            <div className="d-flex flex-column gap-1">
                                <div className="d-flex justify-content-between">
                                    <p>Mon - Fri</p>
                                    <p>8:00am - 5:00pm</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Sat - Sun</p>
                                    <p>8:00am - 5:00pm</p>
                                </div>
                            </div>
                        </div>

                        {/* Follow Us / QR Section */}
                        <div className="col-lg-3">
                            <h4 className="text-white mb-3">Follow Us</h4>
                            <div className="flex gap-3">
                                {/* QR Code 1 */}
                                <div onClick={() => setShowQR1Popup(true)} className="cursor-pointer">
                                    <Image
                                        src="/assets/qr.jpg"
                                        width={100}
                                        height={100}
                                        alt="QR Code 1"
                                        className="rounded-[10px]"
                                    />
                                </div>

                                {/* QR Code 2 */}
                                <div onClick={() => setShowQR2Popup(true)} className="cursor-pointer">
                                    <Image
                                        src="/assets/qr.jpg"
                                        width={100}
                                        height={100}
                                        alt="QR Code 2"
                                        className="rounded-[10px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <hr />
                <div className="container text-center text-white mt-2">
                    © {new Date().getFullYear()} All rights reserved — Powered by{' '}
                    <strong>SITS Information Technology School</strong>
                </div>
            </div>

            {/* Back to Top Button */}
            <Link href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="bi bi-arrow-up" />
            </Link>

            {/* QR Code 1 Popup */}
            {showQR1Popup && (
                <div
                    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center animate-fade-in"
                    onClick={() => setShowQR1Popup(false)}
                >
                    <div
                        className="bg-white p-4 rounded-[10px] shadow-lg scale-95 animate-zoom-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src="/assets/qr.jpg"
                            width={300}
                            height={300}
                            alt="QR Code 1 Enlarged"
                            className="rounded-[10px]"
                        />
                    </div>
                </div>
            )}

            {/* QR Code 2 Popup */}
            {showQR2Popup && (
                <div
                    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center animate-fade-in"
                    onClick={() => setShowQR2Popup(false)}
                >
                    <div
                        className="bg-white p-4 rounded-[10px] shadow-lg scale-95 animate-zoom-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src="/assets/qr.jpg"
                            width={300}
                            height={300}
                            alt="QR Code 2 Enlarged"
                            className="rounded-[10px]"
                        />
                    </div>
                </div>
            )}
        </>
    )
}
