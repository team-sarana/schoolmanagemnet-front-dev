"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { post } from "@/app/lib/api";
import { BASE_URL } from "@/app/lib/constant";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

interface Slide {
    id: number;
    image: string | null;
    title: string;
    description?: string | null;
}

function normalizeImage(p?: string | null) {
    if (!p) return null;
    if (p.startsWith("http")) return p;
    return `${BASE_URL.replace(/\/$/, "")}/${p.replace(/^\/+/, "")}`;
}

export default function SlideHome() {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState<any>(null);

    // Fetch slides
    const { data: slidesRaw, isLoading, isError, error } = useQuery({
        queryKey: ["slides-home"],
        queryFn: async () => {
            const res = await post({ endpoint: "/home/slides-home/list", data: {} });
            console.log("Slides API response:", res);
            return res.data; // should be the array
        },
        staleTime: 60_000,
    });

    const slides: Slide[] = Array.isArray(slidesRaw) ? slidesRaw : [];

    // Fix navigation when swiperInstance is ready
    useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    if (isLoading) return <div className="w-full h-[500px] bg-gray-200 animate-pulse" />;
    if (isError) return <div className="w-full h-[500px] flex items-center justify-center text-red-600">Failed to load slides.</div>;
    if (!slides.length) return <div className="w-full h-[500px] flex items-center justify-center">No slides found.</div>;

    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            {/* Navigation */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="container h-full relative">
                    <button ref={prevRef} className="absolute left-4 top-1/2 -translate-y-1/2 btn_slide_home pointer-events-auto" aria-label="Previous slide">
                        <GrFormPrevious size={30} />
                    </button>
                    <button ref={nextRef} className="absolute right-4 top-1/2 -translate-y-1/2 btn_slide_home pointer-events-auto" aria-label="Next slide">
                        <MdNavigateNext size={30} />
                    </button>
                </div>
            </div>

            {/* Swiper */}
            <Swiper
                modules={[Autoplay, Navigation, EffectFade]}
                onSwiper={setSwiperInstance}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1000}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                className="w-full h-full"
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {slides.map((slide, index) => {
                    const img = normalizeImage(slide.image) || "/placeholder-image.png";
                    return (
                        <SwiperSlide key={slide.id}>
                            <div className="relative w-full h-[500px]">
                                <Image
                                    src={img}
                                    alt={slide.title || `Slide ${index + 1}`}
                                    fill
                                    className={`${index === activeIndex ? "animate-zoom-fade" : ""}`}
                                    priority
                                />
                                <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-10 z-10">
                                    <div className="container">
                                        {/* Optional overlay */}
                                        {/* <h2 className={`text-white font-bold mb-4 ${index === activeIndex ? "animate-fade-up" : ""}`}>{slide.title}</h2>
                                        {slide.description && <p className={`text-lg md:text-xl mb-6 max-w-xl ${index === activeIndex ? "animate-fade-up delay-100" : ""}`}>{slide.description}</p>} */}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
