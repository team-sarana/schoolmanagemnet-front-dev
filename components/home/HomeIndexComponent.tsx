"use client"
import React from 'react'
import SlideHome from './SlideHome'
import AboutIndroduction from './AboutIndroduction'
import CourseItemHome from '../CourseItemHome'
import ClientsSay from './ClientsSay'
import PartnerComponent from './PartnerComponent'
import TeacherComponent from '../TeacherComponent'
import Appointment from '../Appointment'


export default function HomeIndexComponent() {
    return (

        <>
            <SlideHome />
            <AboutIndroduction />
            <CourseItemHome />
            {/* <ClientsSay /> */}
            <PartnerComponent />
            <Appointment />
        </>

    )
}
