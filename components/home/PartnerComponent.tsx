"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const partners = [
    { name: "CUS", image: "/assets/img/partner/cus.png" },
    { name: "BCS", image: "/assets/img/partner/bcs.png" },
    { name: "Teach Smart", image: "/assets/img/partner/teach-smart.png" },
    { name: "IT", image: "/assets/img/partner/IT.png" },
];

export default function PartnerComponent() {
    return (
        <div className="section-padding">
            <div className="container wow fadeInUp" data-wow-delay="0.1s">
                <h2 className="mb-10 text-center">Partnerships</h2>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={20}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    loop={true}
                    modules={[Autoplay]}
                >
                    {partners.map((partner, index) => (
                        <SwiperSlide key={index}>
                            <div className="d-flex justify-content-center py-2">
                                <Image
                                    src={partner.image}
                                    alt={partner.name}
                                    width={200}
                                    height={120}
                                    className="object-contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
