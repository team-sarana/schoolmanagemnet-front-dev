import React from 'react'
import VisionMissionCoreValueCom from '@/components/about/VisionMissionCoreValueCom';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export const metadata = {
    title: "Vision Mission Core Value - SITS Information Technology School",
    description: "ស្វែងយល់អំពី SITS Information Technology School",
    openGraph: {
        title: "Vision Mission Core Value - SITS Information Technology School",
        description: "ស្វែងយល់អំពី SITS Information Technology School",
        url: `${baseUrl}/about/vision_mission_corevalue`,
        siteName: "SITS Information Technology School",
        locale: "en_US",
        type: "website",
    },
};

export default function VisionMissionCoreValue() {
    return (
        <>
            <VisionMissionCoreValueCom />
        </>
    )
}
