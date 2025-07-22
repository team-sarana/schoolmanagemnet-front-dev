import CurriculumsCom from '@/components/curriculums/CurriculumsCom'
import React from 'react'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export const metadata = {
    title: "Curriculums - SITS Information Technology School",
    description: "ស្វែងយល់អំពី SITS Information Technology School",
    openGraph: {
        title: "Curriculums - SITS Information Technology School",
        description: "ស្វែងយល់អំពី SITS Information Technology School",
        url: `${baseUrl}/curriculums`,
        siteName: "SITS Information Technology School",
        locale: "en_US",
        type: "website",
    },
};

export default function Curriculums() {
    return (
        <>
            <CurriculumsCom />
        </>
    )
}
