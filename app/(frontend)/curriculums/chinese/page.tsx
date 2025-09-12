import ChineseCom from '@/components/curriculums/chinese/ChineseCom'
import React from 'react'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export const metadata = {
    title: "Chinese Course - SITS Information Technology School",
    description: "ស្វែងយល់អំពី SITS Information Technology School",
    openGraph: {
        title: "Chinese Course - SITS Information Technology School",
        description: "ស្វែងយល់អំពី SITS Information Technology School",
        url: `${baseUrl}/curriculums/chinese`,
        siteName: "SITS Information Technology School",
        locale: "en_US",
        type: "website",
    },
};

export default function page() {
    return (
        <div>
            <ChineseCom />
        </div>
    )
}
