'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import useFancybox from '@/store/FancyBoxGallery';

type GalleryItem = {
    src: string;
    type: 'computer' | 'english' | 'chinese' | 'thai';
};

const allGalleryImages: GalleryItem[] = [
    { src: '/assets/img/course/course1.jpg', type: 'computer' },
    { src: '/assets/img/course/course2.jpg', type: 'english' },
    { src: '/assets/img/course/course3.jpg', type: 'chinese' },
    { src: '/assets/img/course/course4.jpg', type: 'thai' },
    { src: '/assets/img/course/course1.jpg', type: 'english' },
    { src: '/assets/img/course/course2.jpg', type: 'computer' },
    { src: '/assets/img/course/course3.jpg', type: 'thai' },
    { src: '/assets/img/course/course4.jpg', type: 'chinese' },
];

const filterTabs = ['all', 'computer', 'english', 'chinese', 'thai'] as const;

export default function GalleryCom() {
    const [fancyboxRef] = useFancybox();
    const [activeFilter, setActiveFilter] = useState<'all' | 'computer' | 'english' | 'chinese' | 'thai'>('all');

    const filteredImages = activeFilter === 'all'
        ? allGalleryImages
        : allGalleryImages.filter((img) => img.type === activeFilter);

    return (
        <div className="section-padding">
            <div className="container">
                <div className="banner_title mb-6">Photo Gallery</div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-6 px-3 sm:px-4 lg:px-6">
                    {filterTabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveFilter(tab)}
                            className={`px-4 py-1.5 text-sm rounded-full border ${activeFilter === tab
                                ? 'bg-[#653332] text-white border-[#653332]'
                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                                }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="px-3 sm:px-4 lg:px-6 py-4">
                    <div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6"
                        ref={fancyboxRef}
                    >
                        {filteredImages.map((img, index) => (
                            <a
                                key={index}
                                href={img.src}
                                data-fancybox="gallery"
                                className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-md block"
                            >
                                <Image
                                    src={img.src}
                                    alt={`gallery-${index}`}
                                    width={640}
                                    height={360}
                                    loading="lazy"
                                    className="w-full h-48 md:h-56 object-cover transition-transform duration-300 transform group-hover:scale-105"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
