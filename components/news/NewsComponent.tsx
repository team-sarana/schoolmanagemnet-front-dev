"use client";

import { post } from "@/app/lib/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function NewsPage() {
    const [news, setNews] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    // Define API base and Storage base URLs separately
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
    // Remove /api if present, assuming images served outside /api route
    const STORAGE_URL = API_URL.replace(/\/api$/, "");

    useEffect(() => {
        async function fetchNews() {
            setLoading(true);
            const res = await post({
                endpoint: "/news/filter",
                data: { title: "" },
            });
            if (!res.error) {
                setNews(res);
            } else {
                console.error(res.error);
            }
            setLoading(false);
        }

        fetchNews();
    }, []);

    const itemsPerPage = 8; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the indices for the items to be displayed on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentNews = news.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total pages
    const totalPages = Math.ceil(news.length / itemsPerPage);

    // Change page
    const handlePageChange = (pageNumber: number) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            {news.length === 0 && <p>No news found.</p>}
            <div className="section-padding">
                <div className="container">
                    <div className="banner_title wow fadeInUp">News</div>
                    <div className="row">
                        {currentNews.map((post) => (
                            <div key={post.id} className="col-lg-6 mt-3 wow fadeInUp">
                                <div className="banner_border shadow-md">
                                    <div className="flex flex-col lg:flex-row gap-4">
                                        <Link href={`/news/${post.id}`} className="image_border" passHref>
                                            {post.image ? (
                                                <Image
                                                    src={
                                                        post.image.startsWith("http")
                                                            ? post.image
                                                            : `${STORAGE_URL}/upload/news/${post.image}`
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
                                                <h3>{post.title}</h3>
                                            </Link>
                                            <div className="desc khmer-text">
                                                {post.short_description_en || post.short_description_kh}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Pagination */}
                    <div className="pagination justify-content-end mt-4">
                        <nav>
                            <ul className="pagination">
                                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </button>
                                </li>
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <li
                                        key={index + 1}
                                        className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                                    >
                                        <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}
                                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
