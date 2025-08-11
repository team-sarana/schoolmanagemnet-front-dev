import React from 'react'
import LocationCom from '@/components/about/LocationCom'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export const metadata = {
    title: "Location - SITS Information Technology School",
    description: "ស្វែងយល់អំពី SITS Information Technology School",
    openGraph: {
        title: "Location - SITS Information Technology School",
        description: "ស្វែងយល់អំពី SITS Information Technology School",
        url: `${baseUrl}/about/location`,
        siteName: "SITS Information Technology School",
        locale: "en_US",
        type: "website",
    },
};

export default function Location() {
    return (
        <>
            <LocationCom />
        </>
    )
}
