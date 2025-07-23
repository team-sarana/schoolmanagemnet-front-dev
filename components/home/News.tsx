"use client"
import React from 'react'
import CurriculumsItem from '../curriculums/CurriculumsItem'

export default function News() {
    return (
        <>
            {/* Courses Start */}
            <div className="container my-3 section-padding">
                <div className="container wow fadeInUp" data-wow-delay="0.1s">
                    <div
                        className="text-center mx-auto mb-5"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 500 }}
                    >
                        <h2 className="text-primary text-uppercase mb-2 khmer-text">ស្វែងយល់ពីព័ត៌មានថ្មីៗរបស់សាលា</h2>

                    </div>
                    <div className="row g-4 justify-content-center">
                        <CurriculumsItem />
                    </div>
                </div>
            </div>
            {/* Courses End */}
        </>
    )
}
