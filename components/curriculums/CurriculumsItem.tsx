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

export default function CurriculumsItem() {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const [swiperReady, setSwiperReady] = useState(false);

    const courses = [
        {
            id: 1,
            title: "ភាសាចិនកម្រិត ១",
            description: "ភាសាចិនកម្រិត 1",
            image: "/assets/img/course/chinese/course1.jpg",
        },
        {
            id: 2,
            title: "ភាសាចិនកម្រិត ២",
            description: "ភាសាចិនកម្រិត ២",
            image: "/assets/img/course/chinese/course2.jpg",
        },
        {
            id: 3,
            title: "វគ្គមូលដ្ឋានគ្រឹះកុំព្យូទ័រ",
            description: "វគ្គមូលដ្ឋានគ្រឹះកុំព្យូទ័រ",
            image: "/assets/img/course/computer/course1.jpg",
        },
        {
            id: 4,
            title: "វគ្គក្រាហ្វិចឌីហ្សាញ និងបោះពុម្ភ",
            description: "វគ្គក្រាហ្វិចឌីហ្សាញ និងបោះពុម្ភ",
            image: "/assets/img/course/computer/course2.jpg",
        },
        {
            id: 5,
            title: "ថ្នាក់ភាសាអង់គ្លេសសម្រាប់កុមារ",
            description: "ថ្នាក់ភាសាអង់គ្លេសសម្រាប់កុមារ",
            image: "/assets/img/course/english/course5.jpg",
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
