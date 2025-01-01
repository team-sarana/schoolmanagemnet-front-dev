"use client"
import React from 'react'

export default function Appointment() {
    return (
        <>
            <div className="col-lg-8 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s">
                <div className="bg-primary text-center p-5">
                    <h1 className="mb-4" style={{ color: "#ffff" }}>Make Appointment</h1>
                    <form>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control border-0"
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
                                        className="form-control border-0"
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
                                        className="form-control border-0"
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
                                        className="form-control border-0"
                                        id="cage"
                                        placeholder="Child Age"
                                    />
                                    <label htmlFor="cage">Car Type</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea
                                        className="form-control border-0"
                                        placeholder="Leave a message here"
                                        id="message"
                                        style={{ height: 100 }}
                                        defaultValue={""}
                                    />
                                    <label htmlFor="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-dark w-100 py-3" type="submit">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
