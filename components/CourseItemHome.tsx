"use client"
import React from 'react'
import CourseItem from './CourseItem'

export default function CourseItemHome() {
    return (
        <>
            {/* Courses Start */}
            <div className="container-xxl my-3 section-padding">
                <div className="container">
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 500 }}
                    >
                        <h6 className="text-primary text-uppercase mb-2">Curriculums</h6>
                        <h3 className="display-6 mb-4">
                            Our Courses Upskill You With Studying
                        </h3>
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
