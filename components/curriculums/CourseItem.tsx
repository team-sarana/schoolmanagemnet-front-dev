"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";

// CSS is assumed to be added for .custom-nav-btn and .btn_slide_item

export default function CourseItem() {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const [swiperReady, setSwiperReady] = useState(false);

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
            title: "International Lessons",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            image: "/assets/img/course/course4.jpg",
        },
    ];

    // Ensures buttons exist before rendering swiper
    useEffect(() => {
        if (prevRef.current && nextRef.current) {
            setSwiperReady(true);
        }
    }, []);

    return (
        <div className="relative px-5">
            <div className="relative">
                {swiperReady && (
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        loop
                        autoplay={{ delay: 5000 }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            // Attach custom buttons to swiper instance
                            if (
                                swiper.params.navigation &&
                                typeof swiper.params.navigation !== "boolean"
                            ) {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1.2 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                    >
                        {courses.map((course) => (
                            <SwiperSlide key={course.id}>
                                <div className="courses-item d-flex flex-column bg-white overflow-hidden h-full rounded shadow-sm">
                                    <div className="relative w-full h-[200px] img-course">
                                        <Image
                                            src={course.image}
                                            alt={course.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="courses-overlay absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                            <Link className="btn btn-outline-primary border-2" href="/">
                                                View Detail
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="p-4 pt-2 dec-item-course relative">
                                        <Link href="/" className="mb-3 des-title block text-lg font-semibold">
                                            {course.title}
                                        </Link>
                                        <p className="des mt-2 text-sm text-gray-600">{course.description}</p>
                                        <div className="absolute bottom-[16px] right-[17px] w-[88%]">
                                            <div className="border-line"></div>
                                            <Link className="detail_item text-primary" href="/happening-now-detail?id=50">
                                                View Detail
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                {/* Custom Navigation Buttons */}
                <div className="btn_slide_item">
                    <button ref={prevRef} className="custom-nav-btn-prev custom-nav-btn">
                        <GrFormPrevious size={24} />
                    </button>
                    <button ref={nextRef} className="custom-nav-btn-next custom-nav-btn">
                        <MdNavigateNext size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
}
