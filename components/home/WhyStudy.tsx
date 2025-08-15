import React from 'react'
import Image from 'next/image'

export default function WhyStudy() {
    return (
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
