"use client";
import React from "react";

export default function Footer() {
    return (
        <>
            {/* Footer Start */}
            <div className="container-fluid bg_footer text-light footer my-2 mb-0 py-4 wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h4 className="text-white">Menu</h4>
                            <ul>
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="">About</a>
                                </li>
                                <li>
                                    <a href="">
                                        Course
                                    </a>
                                </li>
                                <li>
                                    <a href="">Facilty</a>
                                </li>
                                <li>
                                    <a href="">News</a>
                                </li>
                                <li>
                                    <a href="">Partner</a>
                                </li>
                                <li>
                                    <a href="">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3"></div>
                        <div className="col-lg-3">
                            <h4 className="text-white">Open Hour</h4>
                            <div>
                                <div className="flex justify-between">
                                    <p>Mon - Fri</p>
                                    <p>8:00am - 5:00pm</p>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <p>Sat - Sun</p>
                                    <p>8:00am - 5:00pm</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h4 className="text-white">Follow Us</h4>
                            <div className="d-flex">
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
                    <div className="text-center">

                    </div>

                </div>
                <hr />
                <div className="container text-center text-[#fff] mt-2">
                    Copyright © {new Date().getFullYear()} All rights reserved powered
                    by SITS Information Technology School
                </div>
            </div>

            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="bi bi-arrow-up" />
            </a>
        </>
    );
}
