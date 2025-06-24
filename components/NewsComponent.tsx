import React from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

// Dummy News Data
// const newsItems = [
//     {
//         id: 1,
//         title: "News",
//         image: "/assets/img/course/course1.jpg",
//         content:
//             "ក្រសួងសាធារណការ ធ្វើដំណើរ សកម្មភាពដើម្បីអនុវត្តផែនការជាតិឆ្លើយតបទៅនឹងការផ្លាស់ប្តូរអាកាសធាតុ ដោយមានការចូលរួមរបស់ស្ថាប័នសាធារណៈនិងឯកជន ។ ក្រសួងក៏បានរៀបចំផែនការជាតិឆ្លើយតបទៅនឹងការផ្លាស់ប្តូរអាកាសធាតុ ឆ្នាំ២០២១-២០២២។"
//     },
//     {
//         id: 2,
//         title: "Training",
//         image: "/assets/img/course/course2.jpg",
//         content:
//             "ថ្ងៃទី ២២ ខែ មិថុនា ឆ្នាំ២០២៤ ក្រសួងបានរៀបចំវគ្គបណ្ដុះបណ្ដាលស្តីពី “អភិវឌ្ឍន៍អាជីវកម្ម និងពាណិជ្ជកម្មឌីជីថល” ដើម្បីជម្រុញការប្រើប្រាស់បច្ចេកវិទ្យាទំនើបក្នុងការធ្វើអាជីវកម្ម និងលក់ផលិតផលតាមប្រព័ន្ធ E-Commerce។"
//     },
//     {
//         id: 3,
//         title: "Ceremony",
//         image: "/assets/img/course/course3.jpg",
//         content:
//             "វិញ្ញាសាសញ្ញាបត្រសញ្ញាប័ត្រសំខាន់ៗក្នុងការបញ្ចប់វគ្គបណ្តុះបណ្ដាល បានបញ្ជាក់ពីសក្ដានុពលនៃការអភិវឌ្ឍបច្ចេកទេស និងជំនាញរបស់អ្នកចូលរួម អភិវឌ្ឍន៍គ្រឹះស្ថានការងារបច្ចុប្បន្ន។"
//     }
// ];





const getPosts = async (): Promise<Post[]> => {
    try {
        const res = await axios.get("http://sits.local/wp-json/wp/v2/posts");
        console.log(res.data);

        return res.data;
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return [];
    }
};


export default async function NewsPage() {
    const posts = await getPosts();


    return (
        <>
            <div className="section-padding">
                <div className="container">
                    <div className="row">
                        {posts.map((post) => (
                            <div className="col-lg-6">
                                <div className="banner_border shadow-md" key={post.id}>
                                    <Link href={`news/${post.slug}`} className="flex flex-col lg:flex-row gap-4">
                                        <div className="image_border">
                                            {post.acf?.image?.url && (
                                                <Image
                                                    src={post.acf.image.url}
                                                    alt={post.acf.image.alt || post.title.rendered}
                                                    width={300}
                                                    height={300}
                                                    className="rounded-md"
                                                />
                                            )}
                                        </div>
                                        <div className="lg:w-2/3 text-justify leading-relaxed">
                                            <h3>{post.title.rendered}</h3>
                                            <p>{post.acf.short_description}</p>
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

