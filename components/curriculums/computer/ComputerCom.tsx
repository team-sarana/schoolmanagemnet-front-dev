"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ComputerCom() {
    const courses = [
        {
            id: 1,
            title: "Automatic Lessons",
            description: "Learn the basics of English with our expert instructors.",
            level: "Beginner",
            duration: "3 Week",
            image: "/assets/img/course/course1.jpg",
        },
        {
            id: 2,
            title: "Highway Lessons",
            description: "Learn the basics of English with our expert instructors.",
            level: "Intermediate",
            duration: "4 Week",
            image: "/assets/img/course/course2.jpg",
        },
        {
            id: 3,
            title: "International Lessons",
            description: "Learn the basics of English with our expert instructors.",
            level: "Advanced",
            duration: "5 Week",
            image: "/assets/img/course/course3.jpg",
        },
        {
            id: 4,
            title: "Automatic Lessons",
            description: "Learn the basics of English with our expert instructors.",
            level: "Beginner",
            duration: "3 Week",
            image: "/assets/img/course/course4.jpg",
        },
        {
            id: 5,
            title: "Highway Lessons",
            description: "Learn the basics of English with our expert instructors.",
            level: "Intermediate",
            duration: "4 Week",
            image: "/assets/img/course/course5.jpg",
        },
        {
            id: 6,
            title: "International Lessons",
            description: "Learn the basics of English with our expert instructors.",
            level: "Advanced",
            duration: "5 Week",
            image: "/assets/img/course/course6.jpg",
        },
        {
            id: 7,
            title: "Automatic Lessons",
            description: "Learn the basics of English with our expert instructors.",
            level: "Beginner",
            duration: "3 Week",
            image: "/assets/img/course/course7.jpg",
        },
        {
            id: 8,
            title: "Highway Lessons",
            description: "Learn the basics of English with our expert instructors.",
            level: "Intermediate",
            duration: "4 Week",
            image: "/assets/img/course/course8.jpg",
        },
        {
            id: 9,
            title: "International Lessons",
            description: "Learn the basics of English with our expert instructors.",
            level: "Advanced",
            duration: "5 Week",
            image: "/assets/img/course/course9.jpg",
        },
        {
            id: 10,
            title: "Automatic Lessons",
            description: "Learn the basics of English with our expert instructors.",
            level: "Beginner",
            duration: "3 Week",
            image: "/assets/img/course/course10.jpg",
        },
        {
            id: 11,
            title: "Highway Lessons",
            description: "Learn the basics of English with our expert instructors.",
            level: "Intermediate",
            duration: "4 Week",
            image: "/assets/img/course/course1.jpg",
        },
        {
            id: 12,
            title: "International Lessons",
            description: "Learn the basics of English with our expert instructors.",
            level: "Advanced",
            duration: "5 Week",
            image: "/assets/img/course/course2.jpg",
        },
    ];

    const itemsPerPage = 8; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the indices for the items to be displayed on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCourses = courses.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total pages
    const totalPages = Math.ceil(courses.length / itemsPerPage);

    // Change page
    const handlePageChange = (pageNumber: any) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="section-padding">
                <div className="container">
                    <div className="row g-4">
                        {currentCourses.map((course) => (
                            <div
                                key={course.id}
                                className={`col-lg-3 col-md-6 wow fadeInUp`}
                            // data-wow-delay={course.delay}
                            >
                                <div className="banner_border shadow-md">
                                    <div className="position-relative img-course mt-auto">

                                        <Image
                                            className="img-fluid"
                                            src={course.image}
                                            fill
                                            alt={course.title}
                                        />
                                        <div className="courses-overlay">
                                            <Link className="btn btn-outline-primary border-2" href="/">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                    <Link href="" className="mb-3 des-title">{course.title}</Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="pagination justify-content-end mt-4">
                        <nav>
                            <ul className="pagination">
                                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </button>
                                </li>
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <li
                                        key={index + 1}
                                        className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                                    >
                                        <button
                                            className="page-link"
                                            onClick={() => handlePageChange(index + 1)}
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}
                                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
