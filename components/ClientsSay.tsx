"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Mock data for testimonials
const mockTestimonials = [
    {
        name: "John Doe",
        profession: "Web Developer",
        message: "Great service! I highly recommend them.",
        image: "/assets/img/testimonial-1.jpg",
    },
    {
        name: "Jane Smith",
        profession: "Graphic Designer",
        message: "Loved working with them! Fantastic experience.",
        image: "/assets/img/testimonial-2.jpg",
    },
    {
        name: "Mike Brown",
        profession: "Entrepreneur",
        message: "They exceeded my expectations. Will hire again!",
        image: "/assets/img/testimonial-3.jpg",
    },
];

export default function ClientsSay() {
    return (
        <div className="container-xxl py-6">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
                    <h6 className="text-primary text-uppercase mb-2">Testimonial</h6>
                    <h1 className="display-6 mb-4">What Our Clients Say!</h1>
                </div>
                <div className="row justify-center">
                    <div className="col-lg-8">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            speed={500}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                        >
                            {mockTestimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className="testimonial-item text-center">
                                        <div className="relative mb-5">
                                            <Image
                                                className="rounded-full mx-auto"
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                width={100}
                                                height={100}
                                            />
                                            <div
                                                className="absolute top-full left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-white rounded-full shadow-md"
                                                style={{ width: 60, height: 60 }}
                                            >
                                                <i className="fa fa-quote-left fa-2x text-primary" />
                                            </div>
                                        </div>
                                        <p className="fs-4">&quot;{testimonial.message}&quot;</p>
                                        <hr className="w-25 mx-auto" />
                                        <h5>{testimonial.name}</h5>
                                        <span>{testimonial.profession}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
