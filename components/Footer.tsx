"use client"
import React from 'react'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            {/* Footer Start */}
            <div
                className="container-fluid bg-dark text-light footer my-6 mb-0 py-6 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white">Get In Touch</h4>
                            <h2 className="text-primary d-flex justify-content-center">
                                <Image
                                    src="/assets/img/logo.png"
                                    width={100}
                                    height={100}
                                    alt="logo"
                                />
                            </h2>
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
                            <a className="btn btn-link" href="">
                                About Us
                            </a>
                            <a className="btn btn-link" href="">
                                Contact Us
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
                            <h4 className="text-light mb-4">Popular Links</h4>
                            <a className="btn btn-link" href="">
                                About Us
                            </a>
                            <a className="btn btn-link" href="">
                                Contact Us
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
                            <h4 className="text-light mb-4">Newsletter</h4>
                            <form action="">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control p-3 border-0"
                                        placeholder="Your Email Address"
                                    />
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                            <h6 className="text-white mt-4 mb-3">Follow Us</h6>
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
                className="container-fluid copyright text-light py-4 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            © <a href="#">School</a>, All Right Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            Designed By <a href="/">Group2</a>
                            <br />
                            Distributed By:
                            <a href="/" target="_blank">
                                Teacher
                            </a>
                        </div>
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
