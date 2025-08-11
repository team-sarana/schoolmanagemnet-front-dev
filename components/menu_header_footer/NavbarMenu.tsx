"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  console.log(pathname)


  useEffect(() => {
    const data: MenuItem[] = [
      { id: 1, label: "Home", href: "/" },
      {
        id: 2,
        label: "About",
        href: "/about",
        submenu: [
          { id: 1, label: "History & Logo Meaning", href: "/about/history_logo" },
          { id: 2, label: "School Structure", href: "/about/school_structure" },
          { id: 3, label: "Vision Mission & Core Values", href: "/about/vision_mission_corevalue" },
          { id: 4, label: "Location", href: "/about/location" },
        ],
      },
      {
        id: 3,
        label: "Curriculums",
        href: "/curriculums",
        submenu: [
          { id: 1, label: "Computer Course", href: "/curriculums/computer" },
          { id: 2, label: "English Course", href: "/curriculums/english" },
          { id: 3, label: "Chinese Course", href: "/curriculums/chinese" },
          { id: 4, label: "Thai Course", href: "/curriculums/thai" },
        ],
      },
      { id: 4, label: "News", href: "/news" },
      { id: 5, label: "Gallerys", href: "/gallery" },
      // { id: 6, label: "Facility", href: "/facility" },
      // { id: 7, label: "Partner", href: "/partner" },
      { id: 6, label: "Contact", href: "/contact" },
    ];
    setMenuItems(data);
  }, []);

  const isActive = (href: string) => {
    // Exact match or starts with
    return pathname === href || pathname.startsWith(href + "/");
  };




  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-2">
      <div className='container'>
        <Link
          href="/"
        >
          <div className="m-0">
            <Image
              src="/assets/img/logo_long.png"
              width={300}
              height={100}
              alt="logo"
            />
          </div>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav p-4 ms-3 p-lg-0">
            {menuItems.map((item) =>
              item.submenu ? (
                <div className="nav-item dropdown" key={item.id}>
                  <Link
                    href={item.href || "#"}
                    className={`nav-link dropdown-toggle ${isActive(item.href || "") ? "menu_active" : ""}`}
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    {item.label}
                  </Link>
                  <div className="dropdown-menu bg-light m-0">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.id}
                        href={subitem.href}
                        className={`dropdown-item ${isActive(subitem.href) ? "menu_active" : ""}`}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.id}
                  href={item.href!}
                  className={`nav-item nav-link ${isActive(item.href!) ? "menu_active" : ""}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>

        {/* <Link
        href="/register"
        className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
      >
        Register
        <i className="fa fa-arrow-right ms-3" />
      </Link> */}
      </div>
    </nav>
  );
}
