import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Homepage/Header'
import Mobile from '../components/Homepage/Mobile'
import Banner from '../components/Homepage/Banner'
import Service from '../components/Homepage/Service'
import About from '../components/Homepage/About'
import Work from '../components/Homepage/Work'
import Industry from '../components/Homepage/Industry'
import Skill from '../components/Homepage/Skill'
import Testimonial from '../components/Homepage/Testimonial'
import Case from '../components/Homepage/Case'
import Fun from '../components/Homepage/Fun'
import News from '../components/Homepage/News'
import Client from '../components/Homepage/Client'

export default function Home() {
  return (
    <>
      <Mobile></Mobile>
      <Banner></Banner>
      <Service></Service>
      <About></About>
      <Work></Work>
      <Industry></Industry>
      <Skill></Skill>
      <Testimonial></Testimonial>
      <Case></Case>
      <Fun></Fun>
      <News></News>
      <Client></Client>
    </>
  )
}
