import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Intro from '../components/intro/Intro'
import Testimonial from '../components/testimonial/Testimonial'
import Services from '../components/services/Services'
import Menu from '../components/menu/Menu'
import Contact from '../components/contact/Contact'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Testimonial />
      <Services />
      <Menu />
      <Contact />
    </div>
  )
}

export default Home
