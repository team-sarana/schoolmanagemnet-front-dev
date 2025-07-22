import React from 'react'
import HistoryCom from '@/components/about/HistoryCom'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export const metadata = {
    title: "History & Logo Meaning - SITS Information Technology School",
    description: "ស្វែងយល់អំពី SITS Information Technology School",
    openGraph: {
        title: "History & Logo Meaning - SITS Information Technology School",
        description: "ស្វែងយល់អំពី SITS Information Technology School",
        url: `${baseUrl}/about/history_logo`,
        siteName: "SITS Information Technology School",
        locale: "en_US",
        type: "website",
    },
};


export default function HistoryLogo() {
    return (
        <>
            <HistoryCom />
        </>
    )
}
