import React from "react";
import Image from "next/image";
import axios from "axios";
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
    }
];



export default async function NewsPage() {

    return (
        <>
            <div className="section-padding">
                <div className="container">
                    <div className="row">
                        {newsItems.map((post) => (
                            <div className="col-lg-6 mt-3">
                                <div className="banner_border shadow-md" key={post.id}>
                                    <Link href={`news}`} className="flex flex-col lg:flex-row gap-4">
                                        <div className="image_border">
                                            {post.image && (
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    width={300}
                                                    height={250}
                                                    className="rounded-md"
                                                />
                                            )}
                                        </div>
                                        <div className="lg:w-2/3  leading-relaxed">
                                            <h3>{post.title}</h3>
                                            <div className="desc khmer-text">{post.description}</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}

