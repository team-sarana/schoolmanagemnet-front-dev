"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { post } from "@/app/lib/api";
import { useTranslation } from "react-i18next";

type WhyStudyItem = {
    id: number;
    title_kh: string;
    title_en: string;
    description_kh: string;
    description_en: string;
};

export default function WhyStudy() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language || "en";

    const { data, isLoading, isError } = useQuery({
        queryKey: ["why-study"],
        queryFn: async () => {
            const res = await post({
                endpoint: "/whystudy/list",
                data: {},
            });
            return res.data as WhyStudyItem[];
        },
        staleTime: 60_000,
    });

    if (isLoading) return <div className="text-center py-5">Loading...</div>;
    if (isError) return <div className="text-center text-red-500 py-5">Error loading data</div>;

    return (
<<<<<<< HEAD
        <div className="">
            {/* courses */}
            <div className="container pt-5 pb-5">
                <div className="mb-0 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="bg-primary text-center p-5">
                        <h2 className="mb-4 contact-title"><span className='khmer-text'>ហេតុអ្វីបានជាត្រូវសិក្សានៅសាលាជំនាញព័ត៌មានវិទ្យា</span> SITS</h2>
                        <div className='khmer-text contact-title text-[18px]'>ស្វែងយល់អំពីលក្ខណពិសេសនៅសាលាជំនាញព័ត៌មានវិទ្យា</div>
                        <div className='row mt-5'>
                            <div className='col-md-6 mb-2'>
                                <div className='khmer-text bg_why_study'>
                                    <h3>ទីតាំងសិក្សា</h3>
                                    <div>មានទីតាំងល្អងាយស្រួលរក ស្ថិតនៅក្នុងតំបន់ទីប្រជុំជន</div>
                                </div>
                            </div>
                            <div className='col-md-6 mb-2'>
                                <div className='khmer-text bg_why_study'>
                                    <h3>បរិក្ខារទំនើប</h3>
                                    <div>មានបន្ទប់បំពាក់ដោយម៉ាស៊ីនត្រជាក់ និងមានកាមេរ៉ាសុវត្តិភាព</div>
                                </div>
                            </div><div className='col-md-6 mb-2'>
                                <div className='khmer-text bg_why_study'>
                                    <h3>ការបង្រៀនប្រកបដោយគុណភាព</h3>
                                    <div>បង្រៀនដោយគ្រូដែលមានជំនាញ និងបទពិសោធន៍ច្រើនឆ្នាំ</div>
                                </div>
                            </div><div className='col-md-6 mb-2'>
                                <div className='khmer-text bg_why_study'>
                                    <h3>ការទទួលស្គាល់ពីមន្ទីរអប់រំ</h3>
                                    <div>ពេលបញ្ចប់ការសិក្សាសាលាមានចេញវិញ្ញាបនបត្រដែលទទួលស្គាល់ពីមន្ទីរអប់រំ</div>
                                </div>
                            </div>
=======
        <div>
            <div className="container pt-5 pb-5">
                <div className="mb-0 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="bg-primary text-center p-5">
                        <h2 className="mb-4 contact-title">
                            <span className="khmer-text">{t("homePage.whyStudy")}</span>{" "}
                            SITS
                        </h2>
                        <div className="khmer-text contact-title text-[18px]">
                            {t("homePage.learnFeatures")}
                        </div>

                        <div className="row mt-5">
                            {data?.map((item) => (
                                <div key={item.id} className="col-md-6 mb-2">
                                    <div className="khmer-text bg_why_study p-4 text-center">
                                        <h3>
                                            {currentLang === "kh" ? item.title_kh : item.title_en}
                                        </h3>
                                        <div>
                                            {currentLang === "kh"
                                                ? item.description_kh
                                                : item.description_en}
                                        </div>
                                    </div>
                                </div>
                            ))}
>>>>>>> fe9ec78118d04507a7529e367b222d04db540f39
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
