'use client'

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
                                <h2>ប្រវត្តិរបស់​ សាលាជំនាញព័ត៌មានវិទ្យា អេស អាយ ធី អេស</h2>
                                <p className="text-gray-700">
                                    <b>សាលាជំនាញព័ត៌មានវិទ្យា អេស អាយ ធី អេស</b>​ ត្រូវបានបង្កើតឡើងក្នុងឆ្នាំ <strong>2018</strong> សាលាមានបង្រៀនថ្នាក់ភាសាអង់គ្លេសសម្រាប់កុមារចាប់ពីអាយុ៧ឆ្នាំឡើងទៅ ភាសាអង់គ្លេសសម្រាប់មនុស្សធំ ភាសាចិន ភាសាថៃ និងជំនាញកុំព្យូទ័រជាច្រើន។​ សាលាមានបេសកកម្ម តម្រង់ទិស លើកកម្ពស់ ផ្ដល់សេវាអប់រំមានគុណភាពខ្ពស់ និងលើកកម្ពស់សិស្សឱ្យមានចំណេះដឹង សីលធម៌ និងជំនាញទាំងផ្នែករឹង និងផ្នែកទន់ឱ្យបានច្បាស់លាស់ និងទទួលបានជំនាញមួយពិតប្រាកដដែលអាចយកទៅប្រើប្រាស់ប្រកបរបរចិញ្ចឹមជីវិតបានល្អប្រសើរ។
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
                                            ស្លាកសញ្ញារបស់សាលាជំនាញព័ត៌មានវិទ្យា អេស អាយ ធី អេស ត្រូវបានបែងចែកជាបីផ្នែកគឺ៖
                                        </p>
                                        <ul className="list-disc ml-6 mt-2 text-gray-700">
                                            <li><strong>ផ្នែកខាងលើ​ :</strong>ជាឈ្មោះរបស់សាលាដែលសរសេរជាខេមរភាសា</li>
                                            <li><strong>ផ្នែកកណ្ដាល :</strong> ជារូបកុំព្យូទ័រ និងក្បាលមនុស្ស ដែលតំណាងឱ្យ ការរីកចម្រើននៃបច្ចេកវិទ្យា និងមានសរសេរអក្សរខ្មែរ អេស អាយ ធី អេស ដែលជាឈ្មោះហៅកាត់របស់សាលា</li>
                                            <li><strong>ផ្នែកខាងក្រោម :</strong> ជាឈ្មោះរបស់សាលារៀនដែលសរសេរជាភាសាអង់គ្លេស។</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </div>
                        {/* <div className='col-md-3'>
                            <RelatedMenu />
                        </div> */}
                    </div>

                    {/* Related Menu */}
                    {/* <div className="col-md-3">
                        <RelatedMenu />
                    </div> */}
                </div>
            </div>
        </>
    )
}
