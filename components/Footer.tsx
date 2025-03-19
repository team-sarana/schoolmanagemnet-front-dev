"use client"
import React from 'react'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            {/* Footer Start */}
            <div
                className="container-fluid bg_footer text-light footer my-6 mb-0 py-6 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white">Get In Touch</h4>
                            <div className="text-primary d-flex justify-content-center">
                                <Image
                                    src="/assets/img/logo.jpg"
                                    width={75}
                                    height={75}
                                    alt="logo"
                                />
                            </div>
                            <p className="mb-2">
                                <i className="fa fa-map-marker-alt me-3" />
                                123 Street, New York, USA
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-phone-alt me-3" />
                                +012 345 67890
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-envelope me-3" />
                                info@example.com
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Quick Links</h4>
                            <a className="btn btn-link" href="/">
                                Home
                            </a>
                            <a className="btn btn-link" href="/about">
                                About
                            </a>
                            <a className="btn btn-link" href="/courses">
                                Courses
                            </a>
                            <a className="btn btn-link" href="/feature">
                                Feature
                            </a>
                            <a className="btn btn-link" href="/appointment">
                                Appointment
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Popular Links</h4>
                            <a className="btn btn-link" href="/testimonial">
                                Testimonial
                            </a>
                            <a className="btn btn-link" href="/contact">
                                Contact
                            </a>
                            <a className="btn btn-link" href="">
                                Our Services
                            </a>
                            <a className="btn btn-link" href="">
                                Terms &amp; Condition
                            </a>
                            <a className="btn btn-link" href="">
                                Support
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-4">Follow Us</h4>
                            <div className="d-flex pt-2">
                                <a className="btn btn-square btn-outline-light me-1" href="">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a className="btn btn-square btn-outline-light me-1" href="">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a className="btn btn-square btn-outline-light me-1" href="">
                                    <i className="fab fa-youtube" />
                                </a>
                                <a className="btn btn-square btn-outline-light me-0" href="">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
            {/* Copyright Start */}
            <div
                className="container-fluid copyright  py-4 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container">
                    <div className=" text-center">
                        Copyright © 2024 All rights reserved | SITS INFORMATION TECHNOLOGY SCHOOL | Design By Thesis Team
                    </div>
                </div>
            </div>
            {/* Copyright End */}
            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="bi bi-arrow-up" />
            </a>
        </>
    )
}
