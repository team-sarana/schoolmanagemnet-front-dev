"use client"
import React from 'react'
import CurriculumsItemCom from './CurriculumsItemCom'
import RelatedMenu from './RelatedMenu'

export default function CurriculumsCom() {
    return (
        <>
            <div className='section-padding'>
                <div className="container">
                    <div className="container">
                        <div
                            className="text-center mx-auto mb-5 wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{ maxWidth: 500 }}
                        >
                            <h2 className="text-primary text-uppercase mb-2">Curriculums</h2>

                        </div>
                        <div className='row'>
                            <div className='col-md-9'>
                                <CurriculumsItemCom />
                            </div>
                            <div className='col-md-3'>
                                <RelatedMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
