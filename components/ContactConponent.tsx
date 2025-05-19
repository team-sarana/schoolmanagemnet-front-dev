"use client"
import React from 'react'

export default function ContactConponent() {
    return (
        <>
            {/* Contact Start */}
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-5">
                        <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{ minHeight: 450 }}
                        >
                            <div className="position-relative h-100">
                                <iframe
                                    className="position-relative w-100 h-100"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.4077383611625!2d103.86107797367873!3d13.352043706426102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3110170025c9f06d%3A0x6d29b40b6e9e0c6c!2sSITS%20Information%20Technology%20School!5e1!3m2!1sen!2skh!4v1743217691779!5m2!1sen!2skh"
                                    frameBorder={0}
                                    style={{ minHeight: 450, border: 0 }}
                                    allowFullScreen={true}
                                    aria-hidden="false"
                                    tabIndex={0}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <h6 className="text-primary text-uppercase mb-2">Contact Us</h6>
                            <h1 className="display-6 mb-4">
                                If You Have Any Query, Please Contact Us
                            </h1>
                            <p className="mb-4">
                                The contact form is currently inactive. Get a functional and working
                                contact form with Ajax &amp; PHP in a few minutes. Just copy and
                                paste the files, add a little code and you&apos;re done.{" "}
                                <a href="https://htmlcodex.com/contact-form">Download Now</a>.
                            </p>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control border-0 bg-light"
                                                id="name"
                                                placeholder="Your Name"
                                            />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control border-0 bg-light"
                                                id="email"
                                                placeholder="Your Email"
                                            />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control border-0 bg-light"
                                                id="subject"
                                                placeholder="Subject"
                                            />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control border-0 bg-light"
                                                placeholder="Leave a message here"
                                                id="message"
                                                style={{ height: 150 }}
                                                defaultValue={""}
                                            />
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary py-3 px-5" type="submit">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
        </>

    )
}
