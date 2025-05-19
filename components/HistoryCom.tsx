"use client"
import React from 'react'
import Image from 'next/image'

export default function HistoryCom() {
    return (
        <>
            <div className="max-w-4xl mx-auto p-6 space-y-10">
                {/* History Section */}
                <section className="bg-gray-100 p-6 rounded-xl shadow-md">
                    <h1 className="text-3xl font-bold text-blue-600 mb-4">ប្រវត្តិរបស់យើង</h1>
                    <p className="text-gray-700">
                        បង្កើតឡើងក្នុងឆ្នាំ <strong>1985</strong> ស្ថាប័នរបស់យើងបានឧទ្ទិសខ្លួនដល់អប់រំដែលមានគុណភាពខ្ពស់ និងការអប់រំផ្លូវមនុស្សធម៌។ នៅអំឡុងពេលឆ្នាំកន្លងមក យើងបានលូតលាស់ពីវិទ្យាស្ថានតូចមួយទៅជាស្ថាប័នអប់រំដែលមានឈ្មោះល្បីល្បាញ ដោយលើកកម្ពស់នវានុវត្តន៍ ភាពជាអ្នកដឹកនាំ និងក្តីស្រលាញ់ក្នុងការរៀន។
                    </p>
                    <p className="mt-2 text-gray-700">
                        អ្នកស្ថិតក្នុងបំណុលនៃស្ថាប័នរបស់យើងមានដូចជា៖
                    </p>
                    <ul className="list-disc ml-6 mt-2 text-gray-700">
                        <li>1990: ការពង្រីកកម្មវិធីសិក្សា</li>
                        <li>2005: ការណែនាំអំពីកិច្ចសហប្រតិបត្តិការអន្តរជាតិ</li>
                        <li>2015: ទទួលស្គាល់ថាជាស្ថាប័នអប់រំកំពូល</li>
                        <li>2023: ការបម្លែងឌីជីថលដោយមានការរៀនតាមប្រព័ន្ធអនឡាញ</li>
                    </ul>
                </section>

                {/* Logo Meaning Section */}
                <section className="bg-white p-6 rounded-xl shadow-md">
                    <h1 className="text-3xl font-bold text-green-600 mb-4">អត្ថន័យនៃឡូហ្គោ</h1>
                    <div className="flex flex-col md:flex-row items-center">
                        <Image
                            src="/assets/img/logo.png"
                            alt="School Logo"
                            width={150}
                            height={150}
                            className="rounded-lg shadow-md"
                        />
                        <div className="ml-6 mt-4 md:mt-0">
                            <p className="text-gray-700">
                                ឡូហ្គោរបស់យើងសម្គាល់អំពីតម្លៃ និងបេសកកម្មរបស់សាលារៀន៖
                            </p>
                            <ul className="list-disc ml-6 mt-2 text-gray-700">
                                <li><strong>សៀវភៅ និងពន្លឺ:</strong> បង្ហាញពីចំណេះដឹង និងការបំភ្លឺវិចារ។</li>
                                <li><strong>ពណ៌បៃតង និងខៀវ:</strong> សម្គាល់អំពីការលូតលាស់ ប្រាជ្ញា និងសុខភាព។</li>
                                <li><strong>ដាប់សៀល:</strong> បង្ហាញអំពីការការពារ និងសុចរិតភាព។</li>
                                <li><strong>គោលបំណងសាលារៀន:</strong> &quot;ចំណេះដឹង សុចរិតភាព ភាពជាអ្នកដឹកនាំ&quot;</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
