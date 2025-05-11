"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NewsComponent() {
    // Mockup data directly within the function
    const courses = [
        {
            id: 1,
            title: "Automatic Lessons",
            description: "រៀនមូលដ្ឋាននៃភាសាអង់គ្លេសជាមួយគ្រូបង្រៀនជំនាញរបស់យើង។",
            image: "/assets/img/course/course1.jpg",
            date: "25 មីនា 2025",
            time: "10:00 ព្រឹក"
        },
        {
            id: 2,
            title: "Highway Lessons",
            description: "ជាការពិតមួយដែលបានបង្កើតឡើងយូរមកហើយថា អ្នកអាចរងការលេងសើចដោយអត្ថបទដែលអាចអានបាន។",
            image: "/assets/img/course/course2.jpg",
            date: "22 មីនា 2025",
            time: "2:30 ល្ងាច"
        },
        {
            id: 3,
            title: "International Lessons",
            description: "ផ្ទុយពីការជឿទូទៅ Lorem Ipsum មិនមែនគ្រាន់តែជាអត្ថបទចៃដន្យ។",
            image: "/assets/img/course/course3.jpg",
            date: "20 មីនា 2025",
            time: "11:45 ព្រឹក"
        },
        {
            id: 4,
            title: "International Lessons",
            description: "ផ្ទុយពីការជឿទូទៅ Lorem Ipsum មិនមែនគ្រាន់តែជាអត្ថបទចៃដន្យ។",
            image: "/assets/img/course/course4.jpg",
            date: "18 មីនា 2025",
            time: "4:15 ល្ងាច"
        },
        {
            id: 5,
            title: "Automatic Lessons",
            description: "រៀនមូលដ្ឋាននៃភាសាអង់គ្លេសជាមួយគ្រូបង្រៀនជំនាញរបស់យើង។",
            image: "/assets/img/course/course5.jpg",
            date: "17 មីនា 2025",
            time: "9:00 ព្រឹក"
        },
        {
            id: 6,
            title: "Highway Lessons",
            description: "ជាការពិតមួយដែលបានបង្កើតឡើងយូរមកហើយថា អ្នកអាចរងការលេងសើចដោយអត្ថបទដែលអាចអានបាន។",
            image: "/assets/img/course/course6.jpg",
            date: "15 មីនា 2025",
            time: "3:20 ល្ងាច"
        },
        {
            id: 7,
            title: "International Lessons",
            description: "ផ្ទុយពីការជឿទូទៅ Lorem Ipsum មិនមែនគ្រាន់តែជាអត្ថបទចៃដន្យ។",
            image: "/assets/img/course/course7.jpg",
            date: "14 មីនា 2025",
            time: "12:10 ថ្ងៃត្រង់"
        },
        {
            id: 8,
            title: "International Lessons",
            description: "ផ្ទុយពីការជឿទូទៅ Lorem Ipsum មិនមែនគ្រាន់តែជាអត្ថបទចៃដន្យ។",
            image: "/assets/img/course/course8.jpg",
            date: "12 មីនា 2025",
            time: "5:45 ល្ងាច"
        },
    ];

    return (
        <>
            <div className="container">
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
                                <div className="p-4 pt-2 dec-item-course relative">
                                    <p className="text-gray-500 text-sm">{course.date}</p>
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
            </div>
        </>
    );
}
