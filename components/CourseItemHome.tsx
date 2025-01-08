"use client"
import React from 'react'
import CourseItem from './CourseItem'

export default function CourseItemHome() {
    return (
        <>
            {/* Courses Start */}
            <div className="container-xxl courses my-5 py-5 pb-5">
                <div className="container">
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 500 }}
                    >
                        <h6 className="text-primary text-uppercase mb-2">Tranding Courses</h6>
                        <h1 className="display-6 mb-4">
                            Our Courses Upskill You With Studying
                        </h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <CourseItem />
                    </div>
                </div>
            </div>
            {/* Courses End */}
        </>
    )
}
