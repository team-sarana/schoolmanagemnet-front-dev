"use client"
import React from 'react'
import Appointment from './Appointment'
import CourseItem from './CourseItem'

export default function CourseItemHome() {
    return (
        <>
            {/* Courses Start */}
            <div className="container-xxl courses my-6 py-6 pb-0">
                <div className="container">
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 500 }}
                    >
                        <h6 className="text-primary text-uppercase mb-2">Tranding Courses</h6>
                        <h1 className="display-6 mb-4">
                            Our Courses Upskill You With Driving Training
                        </h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <CourseItem />
                        <Appointment />
                    </div>
                </div>
            </div>
            {/* Courses End */}
        </>
    )
}
