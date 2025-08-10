"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const images = [
    "/assets/img/course/course2.jpg",
    "/assets/img/course/course3.jpg",
    "/assets/img/course/course4.jpg",
    "/assets/img/course/course5.jpg",
];

const sidebarItems = [
    {
        src: "/assets/img/course/course1.jpg",
        title: "Computer",
        href: "#",
    },
    {
        src: "/assets/img/course/course2.jpg",
        title: "Design",
        href: "#",
    },
];

export default function CurriculumDetail() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const [navigationReady, setNavigationReady] = useState(false);

    // Set navigationReady after refs are attached to DOM
    useEffect(() => {
        // Small delay to ensure refs are attached before Swiper uses them
        const timeout = setTimeout(() => setNavigationReady(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="relative h-[450px] w-full">
                            {/* Navigation Buttons */}
                            <button
                                ref={prevRef}
                                className="absolute btn_slide_home left-4 top-1/2 z-20 transform -translate-y-1/2"
                                aria-label="Previous slide"
                                type="button"
                            >
                                <GrFormPrevious size={30} />
                            </button>
                            <button
                                ref={nextRef}
                                className="absolute btn_slide_home right-4 top-1/2 z-20 transform -translate-y-1/2"
                                aria-label="Next slide"
                                type="button"
                            >
                                <MdNavigateNext size={30} />
                            </button>

                            {/* Main Swiper */}
                            {navigationReady && (
                                <Swiper
                                    modules={[Navigation, Thumbs, Autoplay]}
                                    navigation={{
                                        prevEl: prevRef.current,
                                        nextEl: nextRef.current,
                                    }}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    loop
                                    className="rounded-lg h-full"
                                >
                                    {images.map((src, index) => (
                                        <SwiperSlide key={index}>
                                            <Image
                                                src={src}
                                                width={500}
                                                height={500}
                                                alt={`Slide ${index + 1}`}
                                                className="w-full object-cover rounded-lg h-full"
                                                style={{ maxHeight: "450px" }}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}
                        </div>

                        {/* Thumbnail Swiper */}
                        <Swiper
                            modules={[Thumbs]}
                            slidesPerView={4}
                            spaceBetween={10}
                            watchSlidesProgress
                            slideToClickedSlide={true}
                            className="mt-4"
                            onSwiper={(swiper) => {
                                // Only set thumbsSwiper once
                                if (!thumbsSwiper) {
                                    setThumbsSwiper(swiper);
                                }
                            }}
                        >
                            {images.map((src, index) => (
                                <SwiperSlide
                                    key={index}
                                    className={`cursor-pointer rounded-md overflow-hidden ${activeIndex === index ? "ring-2 ring-blue-500" : ""
                                        }`}
                                >
                                    <Image
                                        src={src}
                                        width={300}
                                        height={300}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="object-cover w-full h-20"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <h2 className="mt-4">Computer</h2>
                        <div>Description</div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-md-3 ">
                        <h2 className="mb-4">Related Course</h2>
                        {sidebarItems.map(({ src, title, href }, index) => (
                            <div key={index} className="d-flex mb-3">
                                <Image
                                    src={src}
                                    width={100}
                                    height={80}
                                    alt={title}
                                    className="rounded-lg"
                                />
                                <Link href={href} className="ms-3">
                                    <h5>{title}</h5>
                                </Link>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div >
    );
}
