"use client"
import React from 'react'

export default function FactsHome() {
    return (
        <>
            {/* Facts Start */}
            <div className="container-fluid facts py-5 pt-lg-0">
                <div className="container py-5 pt-lg-0">
                    <div className="row gx-0">
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <div
                                className="bg-white shadow d-flex align-items-center h-100 p-4"
                                style={{ minHeight: 150 }}
                            >
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square bg-primary">
                                        <i className="fa fa-car text-white" />
                                    </div>
                                    <div className="ps-4">
                                        <h5>Easy Driving Learn </h5>
                                        <span>
                                            Clita erat ipsum lorem sit sed stet duo justo erat amet
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div
                                className="bg-white shadow d-flex align-items-center h-100 p-4"
                                style={{ minHeight: 150 }}
                            >
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square bg-primary">
                                        <i className="fa fa-users text-white" />
                                    </div>
                                    <div className="ps-4">
                                        <h5>National Instructor</h5>
                                        <span>
                                            Clita erat ipsum lorem sit sed stet duo justo erat amet
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div
                                className="bg-white shadow d-flex align-items-center h-100 p-4"
                                style={{ minHeight: 150 }}
                            >
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square bg-primary">
                                        <i className="fa fa-file-alt text-white" />
                                    </div>
                                    <div className="ps-4">
                                        <h5>Get licence</h5>
                                        <span>
                                            Clita erat ipsum lorem sit sed stet duo justo erat amet
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Facts End */}
        </>
    )
}
