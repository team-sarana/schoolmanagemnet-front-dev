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

interface NewsItem {
    id: number;
    title: string;
    description_en?: string;
    description_kh?: string;
    image?: string;
    image_gallerys?: string[];
}

interface NewsDetailProps {
    id: string | string[] | undefined;
}

export default function NewsDetail({ id }: NewsDetailProps) {
    const [news, setNews] = useState<NewsItem | null>(null);
    const [allNews, setAllNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const [navigationReady, setNavigationReady] = useState(false);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
    const STORAGE_URL = API_URL.replace(/\/api$/, "");

    useEffect(() => {
        const timeout = setTimeout(() => setNavigationReady(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (!id) return;

        async function fetchNews() {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(`${API_URL}/news/${id}`);
                if (!res.ok) throw new Error(`Failed to fetch news with id ${id}`);
                const data = await res.json();
                setNews(data);

                const allRes = await fetch(`${API_URL}/news`);
                if (!allRes.ok) throw new Error("Failed to fetch all news");
                const allData: NewsItem[] = await allRes.json();

                const filteredNews = allData.filter(item => String(item.id) !== String(id));
                setAllNews(filteredNews);
            } catch (err: any) {
                console.error(err);
                setError(err.message || "Unknown error");
            } finally {
                setLoading(false);
            }
        }

        fetchNews();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-600">Error: {error}</p>;
    if (!news) return <p>News not found</p>;

    const mainImageUrl = news.image?.startsWith("http")
        ? news.image
        : news.image
            ? `${STORAGE_URL}/storage/news/${news.image}`
            : null;

    const sliderImages = mainImageUrl
        ? [mainImageUrl, ...(news.image_gallerys || []).map((img) =>
            img.startsWith("http")
                ? img
                : `${STORAGE_URL}/storage/news/gallery/${img}`
        )]
        : (news.image_gallerys || []).map((img) =>
            img.startsWith("http")
                ? img
                : `${STORAGE_URL}/storage/news/gallery/${img}`
        );

    return (
        <div className="section-padding">
            <div className="container">
                <div className="row">
                    {/* Main content */}
                    <div className="col-md-9">
                        <h1 className="text-3xl font-bold mb-6">{news.title}</h1>

                        {/* Swiper Main */}
                        <div className="relative h-[450px] w-full rounded-lg overflow-hidden">
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
                                    loop={sliderImages.length > 1}
                                    className="h-full rounded-lg"
                                >
                                    {sliderImages.map((src, index) => (
                                        <SwiperSlide key={index}>
                                            <Image
                                                src={src}
                                                alt={`Slide ${index + 1}`}
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-cover rounded-lg"
                                                style={{ maxHeight: "450px" }}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}
                        </div>

                        {/* Thumbnails */}
                        {sliderImages.length > 1 && (
                            <Swiper
                                modules={[Thumbs]}
                                slidesPerView={4}
                                spaceBetween={10}
                                watchSlidesProgress
                                slideToClickedSlide={true}
                                className="mt-4"
                                onSwiper={(swiper) => {
                                    if (!thumbsSwiper) setThumbsSwiper(swiper);
                                }}
                            >
                                {sliderImages.map((src, index) => (
                                    <SwiperSlide
                                        key={index}
                                        className={`cursor-pointer rounded-md overflow-hidden ${activeIndex === index ? "ring-2 ring-blue-500" : ""}`}
                                    >
                                        <Image
                                            src={src}
                                            width={100}
                                            height={100}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="object-cover w-full h-20"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}

                        <div className="mt-6">
                            <p>{news.description_en || news.description_kh}</p>
                        </div>
                    </div>

                    {/* Related News Sidebar */}
                    <div className="col-md-3">
                        <h2 className="mb-4">Related News</h2>
                        {allNews.length === 0 && <p>No related news found.</p>}
                        {allNews.map(({ id, title, image }) => {
                            const imageUrl = image?.startsWith("http")
                                ? image
                                : image
                                    ? `${STORAGE_URL}/storage/news/${image}`
                                    : "/placeholder-image.png";

                            return (
                                <div key={id} className="d-flex mb-3">
                                    <Image
                                        src={imageUrl}
                                        width={100}
                                        height={80}
                                        alt={title}
                                        className="rounded-lg"
                                    />
                                    <Link href={`/news/${id}`} className="ms-3">
                                        <h5>{title}</h5>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
