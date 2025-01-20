"use client"
import React from 'react'

export default function RegisterComponent() {
    return (
        <>
            <>
                <div className="container-xxl">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div
                                    className="position-relative overflow-hidden ps-5 pt-5 h-100"
                                    style={{ minHeight: 400 }}
                                >
                                    <img
                                        className="position-absolute w-100 h-100"
                                        src="/assets/img/course/course1.jpg"
                                        alt=""
                                        style={{ objectFit: "cover" }}
                                    />

                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                                <h6 className="text-primary text-uppercase mb-2">Register</h6>
                                <h5 className="display-6 mb-4">
                                    Make Register To Pass Test &amp; Get A License On The First
                                    Try
                                </h5>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control border-0 bg-light"
                                                    id="gname"
                                                    placeholder="Gurdian Name"
                                                />
                                                <label htmlFor="gname">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control border-0 bg-light"
                                                    id="gmail"
                                                    placeholder="Gurdian Email"
                                                />
                                                <label htmlFor="gmail">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control border-0 bg-light"
                                                    id="cname"
                                                    placeholder="Child Name"
                                                />
                                                <label htmlFor="cname">Courses Type</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control border-0 bg-light"
                                                    id="cage"
                                                    placeholder="Child Age"
                                                />
                                                <label htmlFor="cage">Car Type</label>
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
                                            <button className="btn btn-primary w-100 py-3" type="submit">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>
    )
}
