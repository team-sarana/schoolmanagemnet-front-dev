"use client";
import React from 'react';
import LanguageSwitcher from '../components/LanguageSwitcher';
import Link from 'next/link';

export default function TopNavbarMenu() {
    return (
        <div className="bg_header_top text-light">
            <div className='container'>
                <div className="row gx-0 d-none d-lg-flex header_top">
                    <div className="col-lg-7 text-start">

                        <div className="h-100 d-inline-flex align-items-center me-4">
                            <span className="fa fa-phone-alt text-white me-1" />
                            <span>+855 12 345 67</span>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center me-4">
                            <span>
                                <i className="fa fa-envelope me-2" />
                                info@example.com
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-5 text-end">

                        <div className="h-100 d-inline-flex align-items-center mx-n2">
                            <ul className='d-flex menu_header_top'>
                                <li>
                                    <Link href="/partner">Partner</Link>
                                </li>
                                <li>
                                    <Link href="/faq">FAQ</Link>
                                </li>
                                <li>
                                    <Link href="/privacy">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="/term-condition">Term & Condition</Link>
                                </li>
                            </ul>
                            <span className='ms-2'>
                                <LanguageSwitcher />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
