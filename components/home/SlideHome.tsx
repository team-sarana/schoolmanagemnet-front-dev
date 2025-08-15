"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

interface Slide {
    id: number;
    image: string;
    title: string;
    description?: string;
    buttons: {
        text: string;
        href: string;
        style: string;
    }[];
}

export default function SlideHome() {
    const [slides, setSlides] = useState<Slide[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const data: Slide[] = [
            {
                id: 1,
                image: "/assets/img/slidehome/slide1.jpg",
                title: "Learn To Study With Confidence",
                description: "Achieve your goals with our top-notch courses.",
                buttons: [{ text: "Our Courses", href: "#courses", style: "btn-light" }],
            },
            {
                id: 2,
                image: "/assets/img/slidehome/slide2.jpg",
                title: "Study Is Our Top Priority",
                description: "Empowering students through knowledge.",
                buttons: [{ text: "Explore More", href: "#courses", style: "btn-primary" }],
            },
        ];
        setSlides(data);
    }, []);

    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            {/* Custom Navigation Buttons */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="container h-full relative">
                    <button
                        ref={prevRef}
                        className="absolute left-4 top-1/2 -translate-y-1/2 btn_slide_home pointer-events-auto"
                    >
                        <GrFormPrevious size={30} />
                    </button>
                    <button
                        ref={nextRef}
                        className="absolute right-4 top-1/2 -translate-y-1/2 btn_slide_home pointer-events-auto"
                    >
                        <MdNavigateNext size={30} />
                    </button>
                </div>
            </div>

            <Swiper
                modules={[Autoplay, Navigation, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1000}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={false}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-[500px]">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className={`${index === activeIndex ? "animate-zoom-fade" : ""}`}
                                priority
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-10 z-10">
                                <div className="container">
                                    {/* <h2
                                        className={`text-white font-bold mb-4 ${index === activeIndex ? "animate-fade-up" : ""
                                            }`}
                                    >
                                        {slide.title}
                                    </h2>
                                    {slide.description && (
                                        <p
                                            className={`text-lg md:text-xl mb-6 max-w-xl ${index === activeIndex ? "animate-fade-up delay-100" : ""
                                                }`}
                                        >
                                            {slide.description}
                                        </p>
                                    )} */}
                                    {/* <div className={`flex gap-4 ${index === activeIndex ? "animate-fade-up delay-200" : ""}`}>
                                        {slide.buttons.map((btn, btnIndex) => (
                                            <a
                                                key={btnIndex}
                                                href={btn.href}
                                                className={`px-6 py-2 rounded ${btn.style}`}
                                            >
                                                {btn.text}
                                            </a>
                                        ))}
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
