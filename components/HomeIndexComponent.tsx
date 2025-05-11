"use client"
import React from 'react'
import SlideHome from './SlideHome'
import AboutIndroduction from './AboutIndroduction'
import FactsHome from './FactsHome'
import CourseItemHome from './CourseItemHome'
import BestFeatures from './BestFeatures'
import TeacherComponent from './TeacherComponent'
import ClientsSay from './ClientsSay'
import Appointment from './Appointment'
import PartnerComponent from './PartnerComponent'

export default function HomeIndexComponent() {
    return (

        <>
            <SlideHome />
            <FactsHome />
            <AboutIndroduction />
            <CourseItemHome />
            {/* <BestFeatures /> */}
            {/* <TeacherComponent /> */}
            <ClientsSay />
            <PartnerComponent />
            {/* <Appointment /> */}
        </>

    )
}
