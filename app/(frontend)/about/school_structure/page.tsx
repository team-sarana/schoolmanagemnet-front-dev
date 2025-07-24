import React from 'react'
import SchoolStructureCom from '@/components/about/SchoolStructureCom';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export const metadata = {
    title: "School Structure - SITS Information Technology School",
    description: "ស្វែងយល់អំពី SITS Information Technology School",
    openGraph: {
        title: "School Structure - SITS Information Technology School",
        description: "ស្វែងយល់អំពី SITS Information Technology School",
        url: `${baseUrl}/about/school_structure`,
        siteName: "SITS Information Technology School",
        locale: "en_US",
        type: "website",
    },
};

export default function SchoolStructure() {
    return (
        <>
            <SchoolStructureCom />
        </>
    )
}
