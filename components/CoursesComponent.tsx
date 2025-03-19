"use client"
import React from 'react'
import CourseItemComponent from './CourseItemComponent'

export default function CoursesComponent() {
    return (
        <>
            <div className="container-xxl">
                <div className="container">
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 500 }}
                    >
                        <h6 className="text-primary text-uppercase mb-2">Courses</h6>
                        <h1 className="display-6 mb-4">
                            Our Courses Upskill
                        </h1>
                    </div>
                    <CourseItemComponent />
                </div>
            </div>
        </>
    )
}
