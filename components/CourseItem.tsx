"use client";
import React from "react";

export default function CourseItem() {
    // Mockup data directly within the function
    const courses = [
        {
            id: 1,
            title: "Automatic Lessons",
            description: "Learn the basics of English with our expert instructors.",
            price: "$99",
            level: "Beginner",
            duration: "3 Week",
            image: "/assets/img/course/course1.jpg",
            delay: "0.1s",
        },
        {
            id: 2,
            title: "Highway Lessons",
            description: "It is a long established fact that a reader will be distracted by the readable.",
            price: "$120",
            level: "Intermediate",
            duration: "4 Week",
            image: "/assets/img/course/course2.jpg",
            delay: "0.3s",
        },
        {
            id: 3,
            title: "International Lessons",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            price: "$150",
            level: "Advanced",
            duration: "5 Week",
            image: "/assets/img/course/course3.jpg",
            delay: "0.5s",
        },
    ];

    return (
        <div className="row">
            {courses.map((course) => (
                <div
                    key={course.id}
                    className={`col-lg-4 col-md-6 wow fadeInUp`}
                    data-wow-delay={course.delay}
                >
                    <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                        <div className="position-relative img-course mt-auto">
                            <div className="d-inline-block price-course bg-primary text-white ms-2 py-1 mt-1 px-4">
                                {course.price}
                            </div>
                            <img className="img-fluid" src={course.image} alt={course.title} />
                            <div className="courses-overlay">
                                <a className="btn btn-outline-primary border-2" href="/">
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="text-center p-4 pt-2 dec-item-course">
                            <h5 className="mb-3 des-title">{course.title}</h5>
                            <p className="des">{course.description}</p>
                            <ol className="breadcrumb justify-content-center align-items-center mb-0" style={{ fontSize: "13px" }}>
                                <li className="breadcrumb-item small">
                                    <i className="fa fa-signal text-primary me-2" />
                                    {course.level}
                                </li>
                                <li className="breadcrumb-item small">
                                    <i className="fa fa-calendar-alt text-primary me-2" />
                                    {course.duration}
                                </li>

                            </ol>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
