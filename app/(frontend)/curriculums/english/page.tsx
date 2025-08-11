import EnglishCom from '@/components/curriculums/english/EnglishCom'
import React from 'react'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export const metadata = {
    title: "English Course - SITS Information Technology School",
    description: "ស្វែងយល់អំពី SITS Information Technology School",
    openGraph: {
        title: "English Course - SITS Information Technology School",
        description: "ស្វែងយល់អំពី SITS Information Technology School",
        url: `${baseUrl}/curriculums/english`,
        siteName: "SITS Information Technology School",
        locale: "en_US",
        type: "website",
    },
};

export default function page() {
    return (
        <div>
            <EnglishCom />
        </div>
    )
}
