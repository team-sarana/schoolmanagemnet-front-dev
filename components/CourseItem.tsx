"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CourseItem() {
    // Mockup data directly within the function
    const courses = [
        {
            id: 1,
            title: "Automatic Lessons",
            description: "Learn the basics of English with our expert instructors.",
            image: "/assets/img/course/course1.jpg",
        },
        {
            id: 2,
            title: "Highway Lessons",
            description: "It is a long established fact that a reader will be distracted by the readable.",
            image: "/assets/img/course/course2.jpg",
        },
        {
            id: 3,
            title: "International Lessons",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            image: "/assets/img/course/course3.jpg",
        },
        {
            id: 4,
            title: "International Lessons",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            image: "/assets/img/course/course4.jpg",
        },
        {
            id: 5,
            title: "Automatic Lessons",
            description: "Learn the basics of English with our expert instructors.",
            image: "/assets/img/course/course5.jpg",
        },
        {
            id: 6,
            title: "Highway Lessons",
            description: "It is a long established fact that a reader will be distracted by the readable.",
            image: "/assets/img/course/course6.jpg",
        },
        {
            id: 7,
            title: "International Lessons",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            image: "/assets/img/course/course7.jpg",
        },
        {
            id: 8,
            title: "International Lessons",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            image: "/assets/img/course/course8.jpg",
        },
    ];

    return (
        <div className="row">
            {courses.map((course) => (
                <div
                    key={course.id}
                    className={`col-lg-3 col-md-6 mb-4 wow fadeInUp`}
                    data-wow-delay="0.5s"
                >
                    <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                        <div className="position-relative img-course mt-auto">
                            <Image
                                className="img-fluid"
                                src={course.image}
                                fill
                                alt={course.title} />
                            <div className="courses-overlay">
                                <a className="btn btn-outline-primary border-2" href="/">
                                    View Detail
                                </a>
                            </div>
                        </div>
                        <div className="text-center p-4 pt-2 dec-item-course relative">
                            <Link href="" className="mb-3 des-title">{course.title}</Link>
                            <p className="des mt-2">{course.description}</p>
                            <div className="absolute bottom-[16px] right-[17px] w-[88%]">
                                <div className="border-line"></div>
                                <a className="detail_item" href="/happening-now-detail?id=50">View Detail</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div >
    );
}
