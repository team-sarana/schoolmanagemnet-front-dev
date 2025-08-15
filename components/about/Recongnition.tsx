'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import RelatedMenu from './RelatedMenu'

export default function RecongnitionPage() {
    // Multiple recognition items
    const [items, setItems] = useState([
        {
            id: 1,
            title: 'ក្រសួងពាណិជ្ជកម្ម',
            publishedDate: 'ថ្ងៃទី០៩ មិថុនា ២០២១',
            image: '/assets/img/recongnition/Ministry-Of-Commerce.jpg',
            pdfUrl: '/files/my-recognition.pdf',
        },
        {
            id: 2,
            title: 'អាជ្ញាបណ្ណអប់រំ',
            publishedDate: 'ថ្ងៃទី០៤ កក្កដា ២០២៤',
            image: '/assets/img/recongnition/លិខិអនុញ្ញាត.jpg',
            pdfUrl: '/files/education-recognition.pdf',
        },
        {
            id: 3,
            title: 'បេឡាជាតិសន្តិសុខសង្គម',
            publishedDate: 'ថ្ងៃទី០១ មីនា ២០២៤',
            image: '/assets/img/recongnition/National-Socail-Security-Fund.jpg',
            pdfUrl: '/files/education-recognition.pdf',
        },
        {
            id: 4,
            title: 'ក្រសួងសេដ្ឋកិច្ច​ និង​ ហិរញ្ញវត្ថុ អគ្គនាយកដ្ឋានពន្ធដា',
            publishedDate: 'ថ្ងៃទី០១ សីហា ២០២២',
            image: '/assets/img/recongnition/Tax-Registration.jpg',
            pdfUrl: '/files/education-recognition.pdf',
        },
        {
            id: 5,
            title: 'ក្រសួងសេដ្ឋកិច្ច​ និង​ ហិរញ្ញវត្ថុ អគ្គនាយកដ្ឋានពន្ធដា',
            publishedDate: 'ថ្ងៃទី១៥ មិថុនា ២០២១',
            image: '/assets/img/recongnition/Ministry-Of-Economy-And-Finance.jpg',
            pdfUrl: '/files/education-recognition.pdf',
        },
        {
            id: 6,
            title: 'ក្រសួងសេដ្ឋកិច្ច​ និង​ ហិរញ្ញវត្ថុ អគ្គនាយកដ្ឋានពន្ធដា',
            publishedDate: 'ថ្ងៃទី០១ សីហា ២០២២',
            image: '/assets/img/recongnition/Ministry-Of-Economy-And-Finance-2022.jpg',
            pdfUrl: '/files/education-recognition.pdf',
        },

    ])

    return (
        <div className="section-padding">
            <div className="container">
                <div className="row">
                    {/* Main Content */}
                    <div className="col-md-9">
                        {items.map((item) => (
                            <div key={item.id} className="mb-4">
                                <div className="d-flex gap-3">
                                    {/* Thumbnail */}
                                    <div>
                                        <Image
                                            src={item.image}
                                            width={200}
                                            height={180}
                                            alt="PDF Thumbnail"
                                            className="border"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="khmer-text">
                                        <div className="text-sm text-muted mb-1">
                                            {item.publishedDate}
                                        </div>
                                        <h5 className="mt-3">{item.title}</h5>

                                        <div className="d-flex align-items-center mt-3">
                                            <a
                                                href={item.pdfUrl}
                                                download
                                                className="btn btn-light border d-flex align-items-center gap-2"
                                            >
                                                <Image
                                                    src="/assets/img/recongnition/pdf.png"
                                                    alt="PDF"
                                                    width={20}
                                                    height={20}
                                                />
                                                <span className="khmer-text">ទាញយក</span>
                                            </a>

                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="border_bottom my-3"></div>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar */}
                    {/* <div className="col-md-3">
                        <RelatedMenu />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
