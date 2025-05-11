"use client"
import React from 'react'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            {/* Footer Start */}
            <div
                className="container-fluid bg_footer text-light footer my-2 mb-0 py-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container">
                    <div className="text-center">
                        <h4 className="text-white mb-4">Follow Us</h4>
                        <div className="d-flex justify-center pt-2 py-3">
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
                        <h4 className="text-white mt-4">Open Hour</h4>
                        <div className="flex flex-col items-center pt-2 py-3">
                            <div className="flex justify-between w-60">
                                <p>Mon - Fri</p>
                                <p>8:00am - 5:00pm</p>
                            </div>
                            <div className="flex justify-between w-60 mt-2">
                                <p>Sat - Sun</p>
                                <p>8:00am - 5:00pm</p>
                            </div>
                        </div>

                    </div>
                    <div className=" text-center text-[#fff] mt-2">
                        Copyright © 2024 All rights reserved powered by SITS Information Technology School
                    </div>
                </div>
            </div>

            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="bi bi-arrow-up" />
            </a>
        </>
    )
}
