"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function EnglishCom() {
    const courses = [
        {
            id: 1,
            title: "New Headway Beginner",
            description: "Learn the basics of English with our expert instructors.",
            level: "Beginner",
            duration: "3 Week",
            image: "/assets/img/course/english/course1.jpg",
        },
        {
            id: 2,
            title: "New Headway Elementary",
            description: "Learn the basics of English with our expert instructors.",
            level: "Intermediate",
            duration: "4 Week",
            image: "/assets/img/course/english/course2.jpg",
        },
        {
            id: 3,
            title: "New Headway Pre-Intermediate",
            description: "Learn the basics of English with our expert instructors.",
            level: "Advanced",
            duration: "5 Week",
            image: "/assets/img/course/english/course3.jpg",
        },
        {
            id: 4,
            title: "New Headway Intermediate",
            description: "Learn the basics of English with our expert instructors.",
            level: "Beginner",
            duration: "3 Week",
            image: "/assets/img/course/english/course4.jpg",
        },
        {
            id: 5,
            title: "Family and Friends Starter",
            description: "Learn the basics of English with our expert instructors.",
            level: "Intermediate",
            duration: "4 Week",
            image: "/assets/img/course/english/course5.jpg",
        },
        {
            id: 6,
            title: "Family and Friends Level 1",
            description: "Learn the basics of English with our expert instructors.",
            level: "Advanced",
            duration: "5 Week",
            image: "/assets/img/course/english/course6.jpg",
        },
        {
            id: 7,
            title: "Family and Friends Level 2",
            description: "Learn the basics of English with our expert instructors.",
            level: "Beginner",
            duration: "3 Week",
            image: "/assets/img/course/english/course7.jpg",
        },
        {
            id: 8,
            title: "Family and Friends Level 3",
            description: "Learn the basics of English with our expert instructors.",
            level: "Intermediate",
            duration: "4 Week",
            image: "/assets/img/course/english/course8.jpg",
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
                <div className="container khmer-text">
                    <div className="banner_title">
                        វគ្គសិក្សាភាសាអង់គ្លេស
                    </div>
                    <div className="row g-4">
                        {currentCourses.map((course) => (
                            <div
                                key={course.id}
                                className={`col-lg-3 col-md-3 col-sm-6 wow fadeInUp`}
                            >
                                <div className="courses-item d-flex flex-column bg-white overflow-hidden h-full rounded shadow-sm">
                                    <div className="relative w-full h-[200px]">
                                        <Image
                                            src={course.image}
                                            alt={course.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="courses-overlay absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                            <Link className="btn btn-outline-primary border-2" href="/curriculums/science-101">
                                                View Detail
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="p-4 pt-2 relative">
                                        <Link href="/curriculums/science-101" className="mb-3 des-title">
                                            <span>{course.title}</span>
                                        </Link>
                                    </div>
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
