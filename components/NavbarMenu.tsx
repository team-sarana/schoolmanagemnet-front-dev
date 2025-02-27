"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Define the menu item types
interface SubMenu {
    id: number;
    label: string;
    href: string;
}

interface MenuItem {
    id: number;
    label: string;
    href?: string;
    submenu?: SubMenu[];
}

export default function NavbarMenu() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const pathname = usePathname(); // Get the current pathname

    // Simulate fetching menu items from an API or database
    useEffect(() => {
        const data: MenuItem[] = [
            { id: 1, label: "Home", href: "/" },
            {
                id: 2,
                label: "About",
                href: "/about",
                submenu: [
                    { id: 1, label: "History & Logo Meaning", href: "/history_logo" },
                    { id: 2, label: "School Structure", href: "school_structure" },
                    { id: 3, label: "Vision Mission & Core Values", href: "/vision_mission_corevalue" },
                    { id: 4, label: "Location", href: "/location" },
                ],
            },
            { id: 3, label: "Courses", href: "/courses" },
            { id: 5, label: "Facility", href: "/facility" },
            { id: 5, label: "Partner", href: "/partner" },
            { id: 6, label: "Blogs", href: "/blogs" },
            { id: 7, label: "Contact", href: "/contact" },
        ];
        setMenuItems(data);
    }, []);

    // Check if a submenu item is active
    const isActive = (href: string) => pathname === href;

    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
            <a
                href="/"
                className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5"
            >
                <h2 className="m-0">
                    <Image
                        src="/assets/img/logo.jpg"
                        width={75}
                        height={75}
                        alt="logo"
                    />
                </h2>
            </a>
            <button
                type="button"
                className="navbar-toggler me-4"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav p-4 p-lg-0">
                    {menuItems.map((item) =>
                        item.submenu ? (
                            <div className="nav-item dropdown" key={item.id}>
                                {/* Prevent default behavior and use a button for dropdown */}
                                <button
                                    className={`nav-link dropdown-toggle ${isActive(item.href || "") ? "active" : ""}`}
                                    data-bs-toggle="dropdown"
                                >
                                    {item.label}
                                </button>
                                <div className="dropdown-menu bg-light m-0">
                                    {item.submenu.map((subitem) => (
                                        <Link
                                            key={subitem.id}
                                            href={subitem.href}
                                            className={`dropdown-item ${isActive(subitem.href) ? "active" : ""}`}
                                        >
                                            {subitem.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={item.id}
                                href={item.href!} // Non-null assertion operator for href
                                className={`nav-item nav-link ${isActive(item.href!) ? "active" : ""}`}
                            >
                                {item.label}
                            </Link>
                        )
                    )}
                </div>
            </div>
            <Link href="/register" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
                Register
                <i className="fa fa-arrow-right ms-3" />
            </Link>
        </nav>
    );
}
