"use client";
import React from "react";

export default function CourseItem() {
    // Mockup data directly within the function
    const courses = [
        {
            id: 1,
            title: "Automatic Car Lessons",
            description: "Learn the basics of driving automatic cars with our expert instructors.",
            price: "$99",
            level: "Beginner",
            duration: "3 Week",
            image: "/assets/img/courses-1.jpg",
            delay: "0.1s",
        },
        {
            id: 2,
            title: "Highway Driving Lessons",
            description: "Master highway driving and improve your confidence on fast-paced roads.",
            price: "$120",
            level: "Intermediate",
            duration: "4 Week",
            image: "/assets/img/courses-2.jpg",
            delay: "0.3s",
        },
        {
            id: 3,
            title: "International Driving Lessons",
            description: "Get ready to drive in any country with our international driving program.",
            price: "$150",
            level: "Advanced",
            duration: "5 Week",
            image: "/assets/img/courses-3.jpg",
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
                        <div className="text-center p-4 pt-0">
                            <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">
                                {course.price}
                            </div>
                            <h5 className="mb-3">{course.title}</h5>
                            <p>{course.description}</p>
                            <ol className="breadcrumb justify-content-center mb-0">
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
                        <div className="position-relative mt-auto">
                            <img className="img-fluid" src={course.image} alt={course.title} />
                            <div className="courses-overlay">
                                <a className="btn btn-outline-primary border-2" href="">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
