"use client";
import React from 'react';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function TopNavbarMenu() {
    return (
        <div className="container-fluid bg_header_top text-light p-0">
            <div className="row gx-0 d-none d-lg-flex">
                <div className="col-lg-7 px-5 text-start">

                    <div className="h-100 d-inline-flex align-items-center me-4">
                        <span className="fa fa-phone-alt text-white me-2" />
                        <span>+012 345 6789</span>
                    </div>
                    <div className="h-100 d-inline-flex align-items-center me-4">
                        <span>
                            <i className="fa fa-envelope me-3" />
                            info@example.com
                        </span>
                    </div>
                </div>
                <div className="col-lg-5 px-5 text-end">

                    <div className="h-100 d-inline-flex align-items-center mx-n2">
                        <span
                            className="btn btn-link rounded-0 border-0 border-end border-secondary"
                        >
                            Follow Us:
                        </span>
                        <a
                            className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary"
                            href=""
                        >
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a
                            className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary"
                            href=""
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        <a
                            className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary"
                            href=""
                        >
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a
                            className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary"
                            href=""
                        >
                            <i className="fab fa-instagram" />
                        </a>
                        <span className='ms-2'>
                            <LanguageSwitcher />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
