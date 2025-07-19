import Link from 'next/link'
import React from 'react'

export default function RelatedMenu() {
    return (
        <>
            <section className="bg-gray-100 p-6 rounded-xl shadow-md">
                <ul className="list-disc ml-6 mt-2 text-gray-700">
                    <li>
                        <Link href="/about/history_logo" className='related_link active'>
                            History & Logo Meaning
                        </Link>
                    </li>
                    <li>
                        <Link href="/about/school_structure" className='related_link'>
                            School Structure
                        </Link>
                    </li>
                    <li>
                        <Link href="/about/vision_mission_corevalue" className='related_link'>
                            Vision Mission & Core Value
                        </Link>
                    </li>
                    <li>
                        <Link href="/about/recongnition" className='related_link'>
                            Recognition
                        </Link>
                    </li>
                    <li>
                        <Link href="/about/location" className='related_link'>
                            Location
                        </Link>
                    </li>
                </ul>
            </section>
        </>
    )
}
