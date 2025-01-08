"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function NavbarMenu() {
    const [activeItem, setActiveItem] = useState("Home");

    // Update the activeItem state based on the current pathname
    useEffect(() => {
        const pathname = window.location.pathname;
        // Check the pathname and set the active item
        switch (pathname) {
            case "/":
                setActiveItem("Home");
                break;
            case "/about":
                setActiveItem("About");
                break;
            case "/courses":
                setActiveItem("Courses");
                break;
            case "/feature":
                setActiveItem("Feature");
                break;
            case "/appointment":
                setActiveItem("Appointment");
                break;
            case "/testimonial":
                setActiveItem("Testimonial");
                break;
            case "/contact":
                setActiveItem("Contact");
                break;
            default:
                setActiveItem("Home");
        }
    }, []);

    const handleMenuClick = (menuName: string) => {
        setActiveItem(menuName);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
                <a
                    href="/"
                    className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5"
                >
                    <h2 className="m-0">
                        <Image
                            src="/assets/img/logo.png"
                            width={100}
                            height={100}
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
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        {[
                            { name: "Home", path: "/" },
                            { name: "About", path: "/about" },
                            { name: "Courses", path: "/courses" },
                            { name: "Feature", path: "/feature" },
                            { name: "Appointment", path: "/appointment" },
                            { name: "Testimonial", path: "/testimonial" },
                            { name: "Contact", path: "/contact" },
                        ].map((menu) => (
                            <a
                                key={menu.name}
                                href={menu.path}
                                className={`nav-item nav-link ${activeItem === menu?.name ? "active" : ""}`}
                                onClick={() => handleMenuClick(menu?.name)}
                            >
                                {menu?.name}
                            </a>
                        ))}
                    </div>
                    <a href="/appointment" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
                        Get Started
                        <i className="fa fa-arrow-right ms-3" />
                    </a>
                </div>
            </nav>
        </>
    );
}
