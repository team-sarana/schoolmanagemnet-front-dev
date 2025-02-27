"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
        const fetchSlides = () => {
            const data: Slide[] = [
                {
                    id: 1,
                    image: "/assets/img/course/course_study_item.jpg",
                    title: "Learn To Study With Confidence",
                    buttons: [
                        { text: "Learn More", href: "#learn-more", style: "btn-primary" },
                        { text: "Our Courses", href: "#courses", style: "btn-light" },
                    ],
                },
                {
                    id: 2,
                    image: "/assets/img/course/course_study.jpg",
                    title: "Study Is Our Top Priority",
                    buttons: [
                        // { text: "Learn More", href: "#learn-more", style: "btn-primary" },
                        { text: "Our Courses", href: "#courses", style: "btn-light" },
                    ],
                },
            ];
            setSlides(data);
        };

        fetchSlides();
    }, []);

    return (
        <>
            {/* Carousel Start */}
            <div className="container-fluid p-0">
                <div
                    id="header-carousel"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`carousel-item ${index === 0 ? "active" : ""}`}
                            >
                                <div className="slide_home">
                                    <img className="w-100" src={slide.image} alt={slide.title} />
                                </div>
                                {/* <div className="carousel-caption">
                                    <div className="container carousel-inner-content">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-7 text-center">
                                                <h1 className="display-2 text-light mb-4">
                                                    {slide.title}
                                                </h1>
                                                {slide.buttons.map((button, idx) => (
                                                    <a
                                                        key={idx}
                                                        href={button.href}
                                                        className={`btn ${button.style} py-2 px-4 ${idx > 0 ? "ms-2" : ""
                                                            }`}
                                                    >
                                                        {button.text}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        ))}
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#header-carousel"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#header-carousel"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* Carousel End */}
        </>
    );
}
