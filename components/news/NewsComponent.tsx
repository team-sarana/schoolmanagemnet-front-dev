"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Dummy News Data
const newsItems = [
    {
        id: 1,
        title: "News",
        image: "/assets/img/course/course1.jpg",
        description:
            "ក្រសួងសាធារណការ ធ្វើដំណើរ សកម្មភាពដើម្បីអនុវត្តផែនការជាតិឆ្លើយតបទៅនឹងការផ្លាស់ប្តូរអាកាសធាតុ ដោយមានការចូលរួមរបស់ស្ថាប័នសាធារណៈនិងឯកជន..."
    },
    {
        id: 2,
        title: "Training",
        image: "/assets/img/course/course2.jpg",
        description:
            "ថ្ងៃទី ២២ ខែ មិថុនា ឆ្នាំ២០២៤ ក្រសួងបានរៀបចំវគ្គបណ្ដុះបណ្ដាលស្តីពី “អភិវឌ្ឍន៍អាជីវកម្ម និងពាណិជ្ជកម្មឌីជីថល” ដើម្បីជម្រុញការប្រើប្រាស់បច្ចេកវិទ្យាទំនើប..."
    },
    {
        id: 3,
        title: "Ceremony",
        image: "/assets/img/course/course3.jpg",
        description:
            "វិញ្ញាសាសញ្ញាបត្រសញ្ញាប័ត្រសំខាន់ៗក្នុងការបញ្ចប់វគ្គបណ្តុះបណ្ដាល បានបញ្ជាក់ពីសក្ដានុពលនៃការអភិវឌ្ឍបច្ចេកទេស និងជំនាញរបស់អ្នកចូលរួម..."
    },
    {
        id: 4,
        title: "Ceremony",
        image: "/assets/img/course/course4.jpg",
        description:
            "វិញ្ញាសាសញ្ញាបត្រសញ្ញាប័ត្រសំខាន់ៗក្នុងការបញ្ចប់វគ្គបណ្តុះបណ្ដាល បានបញ្ជាក់ពីសក្ដានុពលនៃការអភិវឌ្ឍបច្ចេកទេស និងជំនាញរបស់អ្នកចូលរួម..."
    }
];



export default async function NewsPage() {

    const itemsPerPage = 8; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the indices for the items to be displayed on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentNews = newsItems.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total pages
    const totalPages = Math.ceil(newsItems.length / itemsPerPage);

    // Change page
    const handlePageChange = (pageNumber: any) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="section-padding">
                <div className="container">
                    <div className="banner_title wow fadeInUp">
                        News
                    </div>
                    <div className="row">
                        {currentNews?.map((post) => (
                            <div className="col-lg-6 mt-3 wow fadeInUp">
                                <div className="banner_border shadow-md" key={post.id}>
                                    <div className="flex flex-col lg:flex-row gap-4">
                                        <Link href="/news/one" className="image_border">
                                            {post.image && (
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    width={300}
                                                    height={250}
                                                    className="rounded-md"
                                                />
                                            )}
                                        </Link>
                                        <div className="lg:w-2/3  leading-relaxed">
                                            <Link href="/news/one">
                                                <h3>{post.title}</h3>
                                            </Link>
                                            <div className="desc khmer-text">{post.description}</div>
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
                                        <button
                                            className="page-link"
                                            onClick={() => handlePageChange(index + 1)}
                                        >
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
        </>
    );
}

