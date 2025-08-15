import ThaiCom from '@/components/curriculums/thai/ThaiCom'
import React from 'react'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export const metadata = {
    title: "Thai Course - SITS Information Technology School",
    description: "ស្វែងយល់អំពី SITS Information Technology School",
    openGraph: {
        title: "Thai Course - SITS Information Technology School",
        description: "ស្វែងយល់អំពី SITS Information Technology School",
        url: `${baseUrl}/curriculums/thai`,
        siteName: "SITS Information Technology School",
        locale: "en_US",
        type: "website",
    },
};

export default function page() {
    return (
        <div>
            <ThaiCom />
        </div>
    )
}
