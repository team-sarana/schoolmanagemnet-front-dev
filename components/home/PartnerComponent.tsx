"use client"
import React from "react";
import Image from "next/image";

const partners = [
    { name: "Facebook", src: "/assets/img/icon_image/facebook.jpg" },
    { name: "Instagram", src: "/assets/img/icon_image/instagram.jpg" },
    { name: "TikTok", src: "/assets/img/icon_image/tiktok.png" },
    { name: "TripAdvisor", src: "/assets/img/icon_image/trip_advisor.png" },
    { name: "Twitter", src: "/assets/img/icon_image/twitter.png" },
    { name: "YouTube", src: "/assets/img/icon_image/youtube.jpg" },
];

export default function PartnerComponent() {
    return (
        <div className="container mx-auto mt-5 mb-5">
            <h2 className="text-center text-2xl font-bold mb-10">Partnerships</h2>
            <div className="grid grid-cols-6 sm:grid-cols-3 md:grid-cols-6 gap-2 place-items-center">
                {partners.map((partner, index) => (
                    <>
                        <div key={index} className="text-center p-4 bg-white shadow-md rounded-lg">
                            <Image src={partner.src} width={100} height={100} alt={partner.name} className="object-contain" />
                            {/* <div>{partner.name}</div> */}
                        </div>
                    </>

                ))}
            </div>
        </div>
    );
}
