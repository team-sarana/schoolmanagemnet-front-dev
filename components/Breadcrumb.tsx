"use client";
import { useBreadcrumbStore } from '@/app/lib/BreadCrumb';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Breadcrumb() {
    const breadcrumb = useBreadcrumbStore((state) => state.breadcrumb);
    const setBreadcrumb = useBreadcrumbStore((state) => state.setBreadcrumb);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === "/") {
            setBreadcrumb({ title: "Home", url: "/", image: "/assets/img/carousel-1.jpg" });
        }
        else if (pathname.toLocaleLowerCase().includes("/about")) {
            setBreadcrumb({ title: "About", url: "/about", image: "/assets/img/carousel-1.jpg" });
        }
        else if (pathname.toLocaleLowerCase().includes("/courses")) {
            setBreadcrumb({ title: "Courses", url: "/courses", image: "/assets/img/carousel-2.jpg" });
        }
        else if (pathname.toLocaleLowerCase().includes("/facility")) {
            setBreadcrumb({ title: "Facility", url: "/facility", image: "/assets/img/carousel-1.jpg" });
        }
        else if (pathname.toLocaleLowerCase().includes("/history_logo")) {
            setBreadcrumb({ title: "History & Logo Meaning", url: "/history_logo", image: "/assets/img/carousel-1.jpg" });
        }
        else if (pathname.toLocaleLowerCase().includes("/school_structure")) {
            setBreadcrumb({ title: "School Structure", url: "/school_structure", image: "/assets/img/carousel-1.jpg" });
        }
        else if (pathname.toLocaleLowerCase().includes("/vision_mission_corevalue")) {
            setBreadcrumb({ title: "Vision Mission & Core Values", url: "/vision_mission_corevalue", image: "/assets/img/carousel-1.jpg" });
        }
        else if (pathname.toLocaleLowerCase().includes("/location")) {
            setBreadcrumb({ title: "Location", url: "/location", image: "/assets/img/carousel-1.jpg" });
        }
        else if (pathname.toLocaleLowerCase().includes("/partner")) {
            setBreadcrumb({ title: "Partner", url: "/partner", image: "/assets/img/carousel-1.jpg" });
        }
        else if (pathname.toLocaleLowerCase().includes("/blog")) {
            setBreadcrumb({ title: "Blogs", url: "/blog", image: "/assets/img/carousel-2.jpg" });
        }
        else if (pathname.toLocaleLowerCase().includes("/register")) {
            setBreadcrumb({ title: "Register", url: "/register", image: "/assets/img/carousel-2.jpg" });

        }
        else if (pathname.toLocaleLowerCase().includes("/testimonial")) {
            setBreadcrumb({ title: "Testimonial", url: "/testimonial", image: "/assets/img/carousel-1.jpg" });
        }
        else if (pathname.toLocaleLowerCase().includes("/contact")) {
            setBreadcrumb({
                title: "Contact", url: "/contact", image: "/assets/img/carousel-2.jpg"
            });
        } else {
            setBreadcrumb({ title: "Home", url: "/", image: "/assets/img/carousel-1.jpg" });
        }

    }, [pathname, setBreadcrumb]);

    return (
        <>
            <div
                className="container-fluid page-header py-6 my-6 mt-0 wow fadeIn"
                data-wow-delay="0.1s"
                style={{
                    background: breadcrumb.image
                        ? `linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .75)), url(${breadcrumb.image}) center center no-repeat`
                        : "linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .75))",
                    backgroundSize: "cover",
                }}
            >
                <div className="container text-center">
                    <h1 className="display-4 text-white animated slideInDown mb-4">
                        {breadcrumb.title}
                    </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item">
                                <Link className="text-white" href="/">
                                    Home
                                </Link>
                            </li>
                            <li
                                className="breadcrumb-item text-primary active"
                                aria-current="page"
                            >
                                {breadcrumb.title}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </>
    );
}
