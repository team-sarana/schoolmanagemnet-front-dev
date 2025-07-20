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
                <div className="container">
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
                        <div className="col-lg-6">
                            <h6 className="text-primary text-uppercase mb-2 mt-3">About Us</h6>
                            <h3 className="mb-4">We Help Students To Pass</h3>
                            <p>
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                                erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
                            </p>
                            <p>
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                                erat ipsum et lorem et sit, sed stet lorem sit clita.
                            </p>

                            {/* Course List */}
                            <div className="row g-2 mb-4 pb-2">
                                <div className="col-sm-6">
                                    <i className="fa fa-check text-primary me-2" />
                                    Computer Course
                                </div>
                                <div className="col-sm-6">
                                    <i className="fa fa-check text-primary me-2" />
                                    English Course
                                </div>
                                <div className="col-sm-6">
                                    <i className="fa fa-check text-primary me-2" />
                                    Chinese Course
                                </div>
                                <div className="col-sm-6">
                                    <i className="fa fa-check text-primary me-2" />
                                    Thai Course
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="row g-4">
                                <div className="col-sm-6">
                                    <a className="btn btn-primary py-3 px-5" href="/about">
                                        Read More
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
                                        <span className="px-3">+012 345 6789</span>
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
