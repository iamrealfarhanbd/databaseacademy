import React from 'react'
import About from '../components/AboutUS/About'
import ChooseUs from '../components/AboutUS/ChooseUs'
import History from '../components/AboutUS/History'
import Team from '../components/AboutUS/Team'
import Testimonial from '../components/AboutUS/Testimonial'
import Title from '../components/AboutUS/Title'

export default function aboutUs() {
    return (
        <div>
            <Title></Title>
            <About></About>
            <History></History>
            <ChooseUs></ChooseUs>
            <Testimonial></Testimonial>
            <Team></Team>
        </div>
    )
}
