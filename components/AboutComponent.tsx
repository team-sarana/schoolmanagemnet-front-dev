"use client"
import React from 'react'

export default function AboutComponent() {
    return (

        <>
            {/* Page Header Start */}
            <div
                className="container-fluid page-header py-6 my-6 mt-0 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container text-center">
                    <h1 className="display-4 text-white animated slideInDown mb-4">
                        About Us
                    </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item">
                                <a className="text-white" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="breadcrumb-item">
                                <a className="text-white" href="#">
                                    Pages
                                </a>
                            </li>
                            <li
                                className="breadcrumb-item text-primary active"
                                aria-current="page"
                            >
                                About
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* About Start */}
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div
                                className="position-relative overflow-hidden ps-5 pt-5 h-100"
                                style={{ minHeight: 400 }}
                            >
                                <img
                                    className="position-absolute w-100 h-100"
                                    src="/assets/img/about-1.jpg"
                                    alt=""
                                    style={{ objectFit: "cover" }}
                                />
                                <img
                                    className="position-absolute top-0 start-0 bg-white pe-3 pb-3"
                                    src="/assets/img/about-2.jpg"
                                    alt=""
                                    style={{ width: 200, height: 200 }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                <h6 className="text-primary text-uppercase mb-2">About Us</h6>
                                <h1 className="display-6 mb-4">
                                    We Help Students To Pass Test &amp; Get A License On The First Try
                                </h1>
                                <p>
                                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                    diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                                    lorem sit clita duo justo magna dolore erat amet
                                </p>
                                <p className="mb-4">
                                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                    diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                                    lorem sit clita duo justo magna dolore erat amet
                                </p>
                                <div className="row g-2 mb-4 pb-2">
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2" />
                                        Fully Licensed
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2" />
                                        Online Tracking
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2" />
                                        Afordable Fee
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2" />
                                        Best Trainers
                                    </div>
                                </div>
                                <div className="row g-4">
                                    <div className="col-sm-6">
                                        <a className="btn btn-primary py-3 px-5" href="">
                                            Read More
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a
                                            className="d-inline-flex align-items-center btn btn-outline-primary border-2 p-2"
                                            href="tel:+0123456789"
                                        >
                                            <span className="flex-shrink-0 btn-square bg-primary">
                                                <i className="fa fa-phone-alt text-white" />
                                            </span>
                                            <span className="px-3">+012 345 6789</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Team Start */}
            <div className="container-xxl py-6">
                <div className="container">
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 500 }}
                    >
                        <h6 className="text-primary text-uppercase mb-2">Meet The Team</h6>
                        <h1 className="display-6 mb-4">We Have Great Experience Of Driving</h1>
                    </div>
                    <div className="row g-0 team-items">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item position-relative">
                                <div className="position-relative">
                                    <img className="img-fluid" src="/assets/img/team-1.jpg" alt="" />
                                    <div className="team-social text-center">
                                        <a
                                            className="btn btn-square btn-outline-primary border-2 m-1"
                                            href=""
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-outline-primary border-2 m-1"
                                            href=""
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-outline-primary border-2 m-1"
                                            href=""
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4">
                                    <h5 className="mt-2">Full Name</h5>
                                    <span>Trainer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item position-relative">
                                <div className="position-relative">
                                    <img className="img-fluid" src="/assets/img/team-2.jpg" alt="" />
                                    <div className="team-social text-center">
                                        <a
                                            className="btn btn-square btn-outline-primary border-2 m-1"
                                            href=""
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-outline-primary border-2 m-1"
                                            href=""
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-outline-primary border-2 m-1"
                                            href=""
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4">
                                    <h5 className="mt-2">Full Name</h5>
                                    <span>Trainer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item position-relative">
                                <div className="position-relative">
                                    <img className="img-fluid" src="/assets/img/team-3.jpg" alt="" />
                                    <div className="team-social text-center">
                                        <a
                                            className="btn btn-square btn-outline-primary border-2 m-1"
                                            href=""
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-outline-primary border-2 m-1"
                                            href=""
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-outline-primary border-2 m-1"
                                            href=""
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4">
                                    <h5 className="mt-2">Full Name</h5>
                                    <span>Trainer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item position-relative">
                                <div className="position-relative">
                                    <img className="img-fluid" src="/assets/img/team-4.jpg" alt="" />
                                    <div className="team-social text-center">
                                        <a
                                            className="btn btn-square btn-outline-primary border-2 m-1"
                                            href=""
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-outline-primary border-2 m-1"
                                            href=""
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-outline-primary border-2 m-1"
                                            href=""
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4">
                                    <h5 className="mt-2">Full Name</h5>
                                    <span>Trainer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
        </>

    );
}
