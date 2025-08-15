
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
            </div>
        </div>
    );
}
