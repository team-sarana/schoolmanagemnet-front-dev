"use client"
import React from 'react'
import SlideHome from './SlideHome'
import AboutIndroduction from './AboutIndroduction'
import PartnerComponent from './PartnerComponent'
import Appointment from './Appointment'
import WelcomHome from './WelcomHome'
import WhyStudy from './WhyStudy'
import CurriculumsItemHome from '../curriculums/CurriculumsItemHome'
import News from './News'


export default function HomeIndexComponent() {
    return (

        <>
            <SlideHome />
            <WelcomHome />
            <AboutIndroduction />
            <WhyStudy />
            <PartnerComponent />
            <CurriculumsItemHome />
            <News />
            <Appointment />
        </>

    )
}
