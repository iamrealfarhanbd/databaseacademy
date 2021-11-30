import React from 'react'
import About from '../components/AI/About'
import Banner from '../components/AI/Banner'
import Case from '../components/AI/Case'
import Chooseus from '../components/AI/Chooseus'
import News from '../components/AI/News'
import Service from '../components/AI/Service'
import Testimonial from '../components/AI/Testimonial'
import Process from '../components/AI/Process'
import Client from '../components/AI/Client'
import Info from '../components/AI/Info'

export default function ai() {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Case></Case>
            <Process></Process>
            <Chooseus></Chooseus>
            <Testimonial></Testimonial>
            <News></News>
           <Client></Client>
           <Info></Info>
        </div>
    )
}
