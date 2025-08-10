'use client'

import React from 'react'
import Image from 'next/image'
import RelatedMenu from './RelatedMenu'

export default function HistoryCom() {
    return (
        <div className="section-padding py-10">
            <div className="container">
                <div className="row">
                    {/* Main Content */}
                    <div className="col-md-12">
                        {/* History Section */}
                        <section className="khmer-text mb-10">
                            <h2 className="text-2xl font-semibold mb-4">ប្រវត្តិរបស់យើង</h2>
                            <p className="text-gray-700 leading-relaxed">
                                សាលាជំនាញព័ត៌មានវិទ្យា អេស អាយ ធី អេស គឺជាស្ថាប័នអប់រំឯកជនមួយដែលត្រូវបានបង្កើតឡើងនៅថ្ងៃទី០១ ខែវិច្ឆិកា ឆ្នាំ២០១៨។ សាលាមានអាស័យដ្ឋានស្ថិតនៅភូមិវត្តបូព៌ សង្កាត់សាលាកំរើក ក្រុងសៀមរាប ខេត្តសៀមរាប។ សាលាមានបេសកកម្មបណ្ដុះបណ្ដាលជំនាញកុំព្យូទ័រ ដូចជា៖ ថ្នាក់មូលដ្ឋានគ្រឹះកុំព្យូទ័រ, វគ្គ Advance Excel, វគ្គក្រាហ្វិចឌីហ្សាញ និងបោះពុម្ព, វគ្គកាត់តវីឌីអូ និងផលិតវីឌីអូ, វគ្គគូសប្លង់, វគ្គតុក្កតា, វគ្គ Facebook Page និងការបង្រៀនភាសាបរទេស។ ការអប់រំទាំងនេះប្រកបដោយគុណភាព ប្រសិទ្ធភាព សីលធម៌ និងឥរិយាបថល្អ ដើម្បីអភិវឌ្ឍធនធានមនុស្សដ៏មានតម្លៃសម្រាប់សង្គមជាតិ។
                            </p>
                        </section>

                        {/* Logo Meaning Section */}
                        <section className="khmer-text">
                            <h2 className="text-2xl font-semibold mb-4">អត្ថន័យនៃឡូហ្គោ</h2>
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                                <Image
                                    src="/assets/img/logo.png"
                                    alt="School Logo"
                                    width={150}
                                    height={150}
                                />
                                <p className="text-gray-700 leading-relaxed">
                                    ស្លាកសញ្ញារបស់សាលាជំនាញព័ត៌មានវិទ្យា អេស អាយ ធី អេស ត្រូវបានបែងចែកជាបីផ្នែក៖ <br />
                                    <span className="block mt-2">- ផ្នែកខាងលើ៖ ជាឈ្មោះសាលា សរសេរជាភាសាខ្មែរ។</span>
                                    <span className="block">- ផ្នែកកណ្ដាល៖ រូបកុំព្យូទ័រ និងក្បាលមនុស្ស តំណាងឱ្យការរីកចម្រើននៃបច្ចេកវិទ្យា និងអក្សរខ្មែរ "អេស អាយ ធី អេស"។</span>
                                    <span className="block">- ផ្នែកខាងក្រោម៖ ជាឈ្មោះសាលា សរសេរជាភាសាអង់គ្លេស។</span>
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Related Menu */}
                    {/* <div className="col-md-3">
                        <RelatedMenu />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
