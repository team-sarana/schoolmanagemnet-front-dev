import React from 'react'
import PartnerComponentPage from '@/components/PartnerComponentPage';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export const metadata = {
    title: "Partner - SITS Information Technology School",
    description: "ស្វែងយល់អំពី SITS Information Technology School",
    openGraph: {
        title: "Partner - SITS Information Technology School",
        description: "ស្វែងយល់អំពី SITS Information Technology School",
        url: `${baseUrl}/partner`,
        siteName: "SITS Information Technology School",
        locale: "en_US",
        type: "website",
    },
};

export default function Partner() {
    return (
        <>
            <PartnerComponentPage />
        </>
    )
}
