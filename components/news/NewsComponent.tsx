
<<<<<<< HEAD
// app/news/page.tsx
import Link from "next/link";
import Image from "next/image";
import { post } from "@/app/lib/api";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
const STORAGE_URL = API_URL.replace(/\/api$/, "");

// Server Component
export default async function NewsPage() {
    // Fetch news on the server
    const res = await post({
        endpoint: "/news/listall",
        data: { title: "" },
    });

    const news = res.error ? [] : res;

    const itemsPerPage = 8;
    const currentPage = 1; // SSR always starts from page 1
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentNews = news.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(news.length / itemsPerPage);

    return (
        <div className="section-padding">
            <div className="container khmer-text">
                <div className="banner_title wow fadeInUp">ព័ត៌មានថ្មី</div>
                <div className="row">
                    {currentNews.map((post: any) => (
                        <div key={post.id} className="col-lg-6 mt-3 wow fadeInUp">
                            <div className="banner_border shadow-md">
                                <div className="flex flex-col lg:flex-row gap-4">
                                    <Link href={`/news/${post.id}`} className="image_border" passHref>
                                        {post.image ? (
                                            <Image
                                                src={
                                                    post.image.startsWith("http")
                                                        ? post.image
                                                        : `${STORAGE_URL}/${post.image}`
                                                }
                                                alt={post.title}
                                                width={300}
                                                height={250}
                                                className="rounded-md"
                                            />
                                        ) : (
                                            <div className="w-72 h-60 bg-gray-200 rounded-md flex items-center justify-center">
                                                No Image
                                            </div>
                                        )}
                                    </Link>
                                    <div className="lg:w-2/3 leading-relaxed">
                                        <Link href={`/news/${post.id}`}>
                                            <h3>{post.title_en || post.title_kh}</h3>
                                        </Link>
                                        <div className="desc khmer-text">
                                            {post.short_description_en || post.short_description_kh}
=======
import { useQuery } from "@tanstack/react-query";
import { post } from "@/app/lib/api";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

type NewsItem = {
    id: number;
    title_en?: string | null;
    title_kh?: string | null;
    short_description_en?: string | null;
    short_description_kh?: string | null;
    image?: string | null;
};

export default function NewsListClient() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language; // "en" or "kh"

    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentNews, setCurrentNews] = useState<NewsItem[]>([]);

    // Fetch all news
    const { data, isLoading, isError } = useQuery({
        queryKey: ["news", "listall"],
        queryFn: () => post({ endpoint: "/news/listall", data: {} }),
        staleTime: 60_000,
    });

    const news: NewsItem[] = Array.isArray(data?.data) ? data.data : [];
    const totalPages = Math.ceil(news.length / itemsPerPage) || 1;

    useEffect(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        setCurrentNews(news.slice(indexOfFirstItem, indexOfLastItem));
    }, [currentPage, news]);

    const normalizeImage = (img?: string | null) =>
        img ? (img.startsWith("http") ? img : `/${img.replace(/^\/+/, "")}`) : null;

    if (isLoading) return <div>{t("loading")}</div>;
    if (isError) return <div>{t("failedToLoadNews")}</div>;
    if (!currentNews.length) return <div>{t("noNewsFound")}</div>;

    return (
        <div>
            <div className="banner_title wow fadeInUp">{t("news")}</div>
            <div className="row">
                {currentNews.map((item) => {
                    const img = normalizeImage(item.image);
                    const title = lang === "en" ? item.title_en : item.title_kh;
                    const shortDescription =
                        lang === "en" ? item.short_description_en : item.short_description_kh;

                    return (
                        <div key={item.id} className="col-lg-6 mt-3 wow fadeInUp">
                            <div className="banner_border shadow-md flex flex-col lg:flex-row gap-4">
                                <Link href={`/news/${item.id}`} className="image_border">
                                    {img ? (
                                        <Image
                                            src={img}
                                            alt={title || "News"}
                                            width={300}
                                            height={250}
                                            className="rounded-md object-cover"
                                        />
                                    ) : (
                                        <div className="w-72 h-60 bg-gray-200 rounded-md flex items-center justify-center">
                                            {t("noImage")}
>>>>>>> fe9ec78118d04507a7529e367b222d04db540f39
                                        </div>
                                    )}
                                </Link>
                                <div className="lg:w-2/3 leading-relaxed">
                                    <Link href={`/news/${item.id}`}>
                                        <h3>{title}</h3>
                                    </Link>
                                    <p>{shortDescription}</p>
                                </div>
                            </div>
                        </div>
<<<<<<< HEAD
                    ))}
                </div>

                {/* Pagination (only static, client-side needed for changing page) */}
                <div className="pagination justify-content-end mt-4">
                    <nav>
                        <ul className="pagination">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <li key={index + 1} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                                    <Link href={`/news?page=${index + 1}`} className="page-link">
                                        {index + 1}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
=======
                    );
                })}
            </div>

            {/* Pagination */}
            <div className="pagination justify-content-end mt-4">
                <nav>
                    <ul className="pagination">
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <button
                                className="page-link"
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                            >
                                {t("previous")}
                            </button>
                        </li>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <li
                                key={i + 1}
                                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                            >
                                <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                                    {i + 1}
                                </button>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                            <button
                                className="page-link"
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                            >
                                {t("next")}
                            </button>
                        </li>
                    </ul>
                </nav>
>>>>>>> fe9ec78118d04507a7529e367b222d04db540f39
            </div>
        </div>
    );
}
