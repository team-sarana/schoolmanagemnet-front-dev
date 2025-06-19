import React from "react";
import Image from "next/image";

// Dummy News Data
const newsItems = [
    {
        id: 1,
        title: "News",
        image: "/assets/img/course/course1.jpg",
        content:
            "ក្រសួងសាធារណការ ធ្វើដំណើរ សកម្មភាពដើម្បីអនុវត្តផែនការជាតិឆ្លើយតបទៅនឹងការផ្លាស់ប្តូរអាកាសធាតុ ដោយមានការចូលរួមរបស់ស្ថាប័នសាធារណៈនិងឯកជន ។ ក្រសួងក៏បានរៀបចំផែនការជាតិឆ្លើយតបទៅនឹងការផ្លាស់ប្តូរអាកាសធាតុ ឆ្នាំ២០២១-២០២២។"
    },
    {
        id: 2,
        title: "Training",
        image: "/assets/img/course/course2.jpg",
        content:
            "ថ្ងៃទី ២២ ខែ មិថុនា ឆ្នាំ២០២៤ ក្រសួងបានរៀបចំវគ្គបណ្ដុះបណ្ដាលស្តីពី “អភិវឌ្ឍន៍អាជីវកម្ម និងពាណិជ្ជកម្មឌីជីថល” ដើម្បីជម្រុញការប្រើប្រាស់បច្ចេកវិទ្យាទំនើបក្នុងការធ្វើអាជីវកម្ម និងលក់ផលិតផលតាមប្រព័ន្ធ E-Commerce។"
    },
    {
        id: 3,
        title: "Ceremony",
        image: "/assets/img/course/course3.jpg",
        content:
            "វិញ្ញាសាសញ្ញាបត្រសញ្ញាប័ត្រសំខាន់ៗក្នុងការបញ្ចប់វគ្គបណ្តុះបណ្ដាល បានបញ្ជាក់ពីសក្ដានុពលនៃការអភិវឌ្ឍបច្ចេកទេស និងជំនាញរបស់អ្នកចូលរួម អភិវឌ្ឍន៍គ្រឹះស្ថានការងារបច្ចុប្បន្ន។"
    }
];

// Sidebar Data
const relatedLinks = [
    "អំពីច្បាប់តេស្តថ្មី",
    "កម្មវិធីសិក្សា",
    "ចំណេះដឹងថ្មីៗមួយដ៏សំខាន់",
    "ធនធានសិក្សា"
];

const shortCourses = [
    "វគ្គសិក្សា ប្រើប្រាស់កម្មវិធីអ៊ីនធឺណិត",
    "វគ្គសិក្សា យល់ដឹងអំពីជំនាញ SEO និង ប្រព័ន្ធ",
    "វគ្គសិក្សា Internet of Things (IoTs)",
    "វគ្គសិក្សា ការសរសេរ Programming"
];

export default function NewsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Main News Section */}
            <div className="lg:col-span-2 space-y-8">
                {newsItems.map((item) => (
                    <>
                        <div key={item.id} className="flex flex-col lg:flex-row gap-4">
                            <div className="w-full lg:w-1/3">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={500}
                                    height={300}
                                    className="w-full object-cover rounded-md"
                                />
                            </div>
                            <div className="lg:w-2/3 text-justify leading-relaxed">
                                <p>{item.content}</p>
                            </div>
                        </div>
                        <hr />
                    </>
                ))}
            </div>

            {/* Sidebar Section */}
            <div className="space-y-6">
                {/* Related Links */}
                <SidebarBox title="ភ្ជាប់រួមគ្នា" items={relatedLinks} bg="bg-blue-800" />
                {/* Short Courses */}
                <SidebarBox title="វគ្គបណ្ដុះបណ្ដាលខ្លីៗពេញនិយម" items={shortCourses} bg="bg-blue-600" />
            </div>
        </div>
    );
}

// Sidebar Reusable Component
function SidebarBox({
    title,
    items,
    bg
}: {
    title: string;
    items: string[];
    bg: string;
}) {
    return (
        <div className={`${bg} text-white rounded-lg shadow-md p-4`}>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <ul className="space-y-1 list-disc list-inside">
                {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
