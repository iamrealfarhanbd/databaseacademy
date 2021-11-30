import React from 'react'
import About from '../components/ML/About'
import Banner from '../components/ML/Banner'
import Case from '../components/ML/Case'
import Chooseus from '../components/ML/Chooseus'
import News from '../components/ML/News'
import Price from '../components/ML/Price'
import Team from '../components/ML/Team'
import Tech from '../components/ML/Tech'
import Testimonial from '../components/ML/Testimonial'
import Video from '../components/ML/Video'

export default function ml() {
    return (
        <div>
            <Banner></Banner>
            <Tech></Tech>
            <About></About>
            <Chooseus></Chooseus>
            <Team></Team>
            <Case></Case>
            <Video></Video>
            <Price></Price>
            <News></News>
            <Testimonial></Testimonial>
        </div>
    )
}
