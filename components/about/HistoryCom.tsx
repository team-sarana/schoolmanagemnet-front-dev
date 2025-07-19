"use client"
import React from 'react'
import Image from 'next/image'
import RelatedMenu from './RelatedMenu'

export default function HistoryCom() {
    return (
        <>
            <div className='section-padding'>
                <div className='container'>
                    <div className="row">
                        <div className='col-md-9'>
                            {/* History Section */}
                            <section className="khmer-text">
                                <h2>ប្រវត្តិរបស់យើង</h2>
                                <p className="text-gray-700">
                                    បង្កើតឡើងក្នុងឆ្នាំ <strong>1985</strong> ស្ថាប័នរបស់យើងបានឧទ្ទិសខ្លួនដល់អប់រំដែលមានគុណភាពខ្ពស់ និងការអប់រំផ្លូវមនុស្សធម៌។ នៅអំឡុងពេលឆ្នាំកន្លងមក យើងបានលូតលាស់ពីវិទ្យាស្ថានតូចមួយទៅជាស្ថាប័នអប់រំដែលមានឈ្មោះល្បីល្បាញ ដោយលើកកម្ពស់នវានុវត្តន៍ ភាពជាអ្នកដឹកនាំ និងក្តីស្រលាញ់ក្នុងការរៀន។
                                </p>
                                <p className="mt-2 text-gray-700">
                                    អ្នកស្ថិតក្នុងបំណុលនៃស្ថាប័នរបស់យើងមានដូចជា៖
                                </p>

                            </section>

                            {/* Logo Meaning Section */}
                            <section className="mt-5 khmer-text">
                                <h2>អត្ថន័យនៃឡូហ្គោ</h2>
                                <div className="flex flex-col md:flex-row items-center">
                                    <Image
                                        src="/assets/img/logo.png"
                                        alt="School Logo"
                                        width={150}
                                        height={150}
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
                        <div className='col-md-3'>
                            <RelatedMenu />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
