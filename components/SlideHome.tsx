"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
    id: number;
    image: string;
    title: string;
    buttons: {
        text: string;
        href: string;
        style: string;
    }[];
}

export default function SlideHome() {
    const [slides, setSlides] = useState<Slide[]>([]);

    useEffect(() => {
        const data: Slide[] = [
            {
                id: 1,
                image: "/assets/img/course/course2.jpg",
                title: "Learn To Study With Confidence",
                buttons: [{ text: "Our Courses", href: "#courses", style: "btn-light" }],
            },
            {
                id: 2,
                image: "/assets/img/course/course9.jpg",
                title: "Study Is Our Top Priority",
                buttons: [{ text: "Our Courses", href: "#courses", style: "btn-light" }],
            },
            {
                id: 3,
                image: "/assets/img/course/course7.jpg",
                title: "Study Is Our Top Priority",
                buttons: [{ text: "Our Courses", href: "#courses", style: "btn-light" }],
            },
        ];
        setSlides(data);
    }, []);

    return (
        <div className="container-fluid p-0">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                // autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="mySwiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="slide_home_banner">
                        <div className="slide_home">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                sizes="100vw"
                                className="custom-img"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
