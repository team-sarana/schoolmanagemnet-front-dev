"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

export default function AboutIndroduction() {
    const [showVideo, setShowVideo] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    // Video ID for YouTube iframe, set when modal opens
    const [videoId, setVideoId] = useState<string | null>(null);

    // Open modal with videoId
    const openModal = (id: string) => {
        setVideoId(id);
        setFadeOut(false);
        setShowVideo(true);
    };

    // Start fade out on close
    const closeModal = () => {
        setFadeOut(true);
    };

    // Remove modal after fade out animation
    useEffect(() => {
        if (fadeOut) {
            const timeout = setTimeout(() => {
                setShowVideo(false);
                setFadeOut(false);
                setVideoId(null);
            }, 300); // Match CSS transition duration
            return () => clearTimeout(timeout);
        }
    }, [fadeOut]);

    // Slides: images + YouTube video IDs
    const slides = [
        {
            image: "/assets/img/course/course5.jpg",
            videoId: "dQw4w9WgXcQ",
        },
        {
            image: "/assets/img/course/course2.jpg",
            videoId: "oHg5SJYRHA0",
        },
        {
            image: "/assets/img/course/course9.jpg",
            videoId: "kJQP7kiw5Fk",
        },
        {
            image: "/assets/img/course/course7.jpg",
            videoId: "3JZ_D3ELwOQ",
        },
    ];

    // Navigation refs for custom buttons
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const [navigationReady, setNavigationReady] = useState(false);

    useEffect(() => {
        if (prevRef.current && nextRef.current) {
            setNavigationReady(true);
        }
    }, []);

    return (
        <>
            <div className="section-padding">
                <div className="container wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row">
                        {/* Left: Swiper Slider */}
                        <div className="col-lg-6 relative h-[400px]">
                            {/* Custom Navigation Buttons */}
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

                            {navigationReady && (
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    navigation={{
                                        prevEl: prevRef.current,
                                        nextEl: nextRef.current,
                                    }}
                                    effect="fade"
                                    fadeEffect={{ crossFade: true }}
                                    speed={1000}
                                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                                    loop={true}
                                    className="h-full"
                                >
                                    {slides.map((slide, idx) => (
                                        <SwiperSlide key={idx}>
                                            <div
                                                onClick={() => openModal(slide.videoId)}
                                                role="button"
                                                tabIndex={0}
                                                style={{
                                                    cursor: "pointer",
                                                    position: "relative",
                                                    width: "100%",
                                                    height: "400px",
                                                }}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter" || e.key === " ") openModal(slide.videoId);
                                                }}
                                                aria-label="Open video popup"
                                            >
                                                <Image
                                                    src={slide.image}
                                                    alt={`Slide image ${idx + 1}`}
                                                    fill
                                                    style={{ objectFit: "cover" }}
                                                />
                                                <div
                                                    className="youtube-icon"
                                                    style={{
                                                        position: "absolute",
                                                        top: "50%",
                                                        left: "50%",
                                                        transform: "translate(-50%, -50%)",
                                                        fontSize: "4rem",
                                                        color: "red",
                                                        opacity: 0.8,
                                                        pointerEvents: "none",
                                                    }}
                                                >
                                                    <i className="fab fa-youtube"></i>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}
                        </div>

                        {/* Right: Content */}
                        <div className="col-lg-6 khmer-text">
                            <h6 className="text-primary text-uppercase mb-2 mt-3">អំពីយើង</h6>

                            <p>
                                សាលាជំនាញព័ត៌មានវិទ្យា អេស អាយ ធី អេស​ ត្រូវបានបង្កើតឡើងក្នុងឆ្នាំ 2018 សាលាមានបង្រៀនថ្នាក់ភាសាអង់គ្លេសសម្រាប់កុមារចាប់ពីអាយុ៧ឆ្នាំឡើងទៅ ភាសាអង់គ្លេសសម្រាប់មនុស្សធំ ភាសាចិន ភាសាថៃ និងជំនាញកុំព្យូទ័រជាច្រើន។
                            </p>
                            <p>សាលាមានបេសកកម្ម តម្រង់ទិស លើកកម្ពស់ ផ្ដល់សេវាអប់រំមានគុណភាពខ្ពស់ និងលើកកម្ពស់សិស្សឱ្យមានចំណេះដឹង សីលធម៌ និងជំនាញទាំងផ្នែករឹង និងផ្នែកទន់ឱ្យបានច្បាស់លាស់ និងទទួលបានជំនាញមួយពិតប្រាកដដែលអាចយកទៅប្រើប្រាស់ប្រកបរបរចិញ្ចឹមជីវិតបានល្អប្រសើរ។</p>

                            {/* Course List */}
                            <div className="row g-2 mb-4 pb-2">
                                <div className="col-sm-6">
                                    <i className="fa fa-check text-primary me-2" />
                                    ថ្នាក់កុំព្យូទ៍រ
                                </div>
                                <div className="col-sm-6">
                                    <i className="fa fa-check text-primary me-2" />
                                    ថ្នាក់ភាសាអង់គ្លេស
                                </div>
                                <div className="col-sm-6">
                                    <i className="fa fa-check text-primary me-2" />
                                    ថ្នាក់ភាសាចិន
                                </div>
                                <div className="col-sm-6">
                                    <i className="fa fa-check text-primary me-2" />
                                    ថ្នាក់ភាសាថៃ
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="row g-4">
                                <div className="col-sm-6">
                                    <a className="btn btn-primary py-3 px-5" href="/about">
                                        ព័ត៌មានបន្ថែម
                                    </a>
                                </div>
                                <div className="col-sm-6">
                                    <a
                                        className="d-inline-flex align-items-center btn btn-outline-primary border-2 p-2"
                                        href="tel:+0123456789"
                                    >
                                        <span className="flex-shrink-0 btn-square bg-primary">
                                            <i className="fa fa-phone-alt text-white" />
                                        </span>
                                        <span className="px-3">+855 86 33 50 50</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Popup */}
            {showVideo && videoId && (
                <div
                    className={`modal-overlay ${fadeOut ? "fade-out" : "fade-in"}`}
                    onClick={closeModal}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModal} aria-label="Close video popup">
                            &times;
                        </button>
                        <div className="video-wrapper" style={{ width: "100%", height: "100%" }}>
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                title="YouTube video"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
