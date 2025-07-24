"use client"
import React, { useState } from 'react'
import FormContact from '../contact/FormContact'

export default function Appointment() {


    return (
        <>
            <div className="courses">
                <div className="container">
                    <div className="row g-4 justify-content-center pb-5">
                        <div className="col-lg-8 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="bg-primary text-center p-5">
                                <h5 className="mb-4 contact-title">If You Have Any Question, Please Contact Us</h5>
                                <FormContact />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
