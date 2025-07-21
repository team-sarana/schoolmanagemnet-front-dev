'use client';

import Image from 'next/image';
import useFancybox from '@/store/FancyBoxGallery';

export default function GalleryCom() {
    const [fancyboxRef] = useFancybox();

    const galleryImages = [
        '/assets/img/course/course1.jpg',
        '/assets/img/course/course2.jpg',
        '/assets/img/course/course3.jpg',
        '/assets/img/course/course4.jpg',
    ];

    return (
        <div className="section-padding">
            <div className="container">
                <h2 className='text-center'>Photot Gallery</h2>
                <div className="px-3 sm:px-4 lg:px-6 py-4">
                    <div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6"
                        ref={fancyboxRef}
                    >
                        {galleryImages.map((img, index) => (
                            <a
                                key={index}
                                href={img}
                                data-fancybox="gallery"
                                className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-md block"
                            >
                                <Image
                                    src={img}
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
