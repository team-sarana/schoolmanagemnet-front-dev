"use client"
import React from 'react'
import SlideHome from './SlideHome'
import AboutIndroduction from './AboutIndroduction'
import CourseItemHome from '../curriculums/CourseItemHome'
import PartnerComponent from './PartnerComponent'
import Appointment from './Appointment'


export default function HomeIndexComponent() {
    return (

        <>
            <SlideHome />
            <AboutIndroduction />
            <CourseItemHome />
            <PartnerComponent />
            <Appointment />
        </>

    )
}
